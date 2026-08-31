#!/usr/bin/env node
/**
 * WO-3.2 — keep cross-site and internal links honest.
 *
 * Three things drift silently and cost real traffic:
 *
 *  1. A sister site linked on a non-canonical host. Every one of those costs a
 *     redirect hop, and one of them (beyondbridge.com) was a plain 404 sitting
 *     in the footer of every page until this check was written.
 *  2. A link to a retired host. Compass moved off bearingbridge.com; anything
 *     still pointing there sends visitors through somebody else's redirect.
 *  3. An internal link to a path that now only exists as a 301. Those work, but
 *     they waste a hop and they mean the nav is out of step with the routes.
 *
 * Source-level rather than build-level on purpose: it runs in a second, needs
 * no build, and catches the mistake in the diff that introduced it.
 *
 *   node scripts/check-links.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SCAN_DIRS = ['src'];
const EXTENSIONS = ['.astro', '.ts', '.tsx', '.mjs', '.js', '.md', '.mdx'];

/** Canonical host per sister site, from each repo's astro.config.mjs `site:`. */
const CANONICAL_HOSTS = {
  'chinawebfoundry.com': 'https://www.chinawebfoundry.com',
  'theredscroll.com': 'https://www.theredscroll.com',
  'hubstudio.ai': 'https://www.hubstudio.ai',
  'beyondbridge.ai': 'https://www.beyondbridge.ai',
};

/** Hosts that must not appear at all any more. */
const RETIRED_HOSTS = [
  'compass.bearingbridge.com',
  'beyondcompass.beyondbordergroup.com',
  'beyondbridge.com',
];

/** Internal paths that now only answer with a 301. */
const RETIRED_PATHS = [
  '/grow-in-china/influencers-kols',
  '/fr/se-developper-en-chine/influence-et-kol',
  '/de/in-china-wachsen/influencer-und-kol',
  '/es/crecer-en-china/influencia-y-kol',
];

/**
 * Files allowed to name a retired host or path: the redirect map has to state
 * the old URL, and the docs record where things came from.
 */
const ALLOWED = [
  'astro.config.mjs',
  'scripts/check-links.mjs',
  'docs/',
  // Ported-from notes at the top of the Compass components.
  'src/components/pages/compass/',
  'src/content/pages/compass/',
  'src/data/compass.ts',
  'src/pages/compass/partners.astro',
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTENSIONS.some((e) => entry.endsWith(e))) out.push(full);
  }
  return out;
}

const problems = [];

function isAllowed(rel) {
  const norm = rel.split('\\').join('/');
  return ALLOWED.some((a) => norm === a || norm.startsWith(a));
}

for (const dir of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const rel = relative(ROOT, file);
    const allowed = isAllowed(rel);
    const lines = readFileSync(file, 'utf8').split(/\r?\n/);

    lines.forEach((line, i) => {
      const at = `${rel}:${i + 1}`;

      // 1. Non-canonical sister hosts.
      for (const [bare, canonical] of Object.entries(CANONICAL_HOSTS)) {
        const wrong = new RegExp(`https://(?!www\\.)${bare.replace('.', '\\.')}`);
        if (wrong.test(line)) {
          problems.push(`${at}  non-canonical host, use ${canonical}\n    ${line.trim()}`);
        }
      }

      // 2. Retired hosts.
      if (!allowed) {
        for (const host of RETIRED_HOSTS) {
          if (line.includes(host)) {
            problems.push(`${at}  retired host "${host}"\n    ${line.trim()}`);
          }
        }
      }

      // 3. Internal links to redirect-only paths.
      if (!allowed) {
        for (const path of RETIRED_PATHS) {
          // Only flag it when it is actually being used as a link target.
          if (line.includes(`"${path}"`) || line.includes(`'${path}'`)) {
            problems.push(`${at}  link to a redirect-only path "${path}"\n    ${line.trim()}`);
          }
        }
      }
    });
  }
}

if (problems.length) {
  console.error(`\n${problems.length} link problem(s):\n`);
  for (const p of problems) console.error('  ' + p + '\n');
  process.exit(1);
}

console.log('Links OK: canonical sister hosts, no retired hosts, no redirect-only targets.');
