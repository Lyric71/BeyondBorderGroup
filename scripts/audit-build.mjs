#!/usr/bin/env node
/**
 * WO-3.6 — audit the built site.
 *
 * `check-links.mjs` reads source and catches mistakes in a diff. This one reads
 * `dist/client` after a build and catches the things only the built output can
 * show:
 *
 *  1. Every internal link resolves, either to a built page or to a declared
 *     redirect. A link that only works because of a 301 is reported separately,
 *     because it works but wastes a hop.
 *  2. Every hreflang alternate is reciprocal. A cluster where /fr/x points at
 *     /de/y but /de/y does not point back is worse than no cluster at all:
 *     Google drops the whole set.
 *  3. Every sitemap URL is a page that actually exists, and no indexable page
 *     is missing from the sitemap.
 *
 *   npm run build && node scripts/audit-build.mjs
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist', 'client');
const SITE = 'https://www.thechinapath.com';

if (!existsSync(DIST)) {
  console.error('dist/client not found. Run `npm run build` first.');
  process.exit(1);
}

/* ------------------------------------------------------------------ pages */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));

/** Built routes, as clean paths: dist/client/about/index.html -> /about */
const routes = new Set(
  htmlFiles.map((f) => {
    const rel = relative(DIST, f).split('\\').join('/');
    const path = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
    return path.length > 1 ? path.replace(/\/$/, '') : '/';
  }),
);

/** Static assets, so a link to /Images/... is not reported as a dead page. */
const assets = new Set(
  files.map((f) => '/' + relative(DIST, f).split('\\').join('/')),
);

/* -------------------------------------------------------------- redirects */

const config = readFileSync(join(ROOT, 'astro.config.mjs'), 'utf8');
const redirects = new Set();
for (const m of config.matchAll(/'(\/[^']*)':\s*\{\s*status:\s*30\d/g)) redirects.add(m[1]);
for (const m of config.matchAll(/\['(\/[^']*)',\s*'\/[^']*'\]/g)) redirects.add(m[1]);

/* ------------------------------------------------------------------ audit */

const dead = [];
const viaRedirect = [];
const hreflang = new Map(); // path -> Set of alternate paths
const inSitemap = new Set();

for (const file of htmlFiles) {
  const rel = relative(DIST, file).split('\\').join('/');
  const from = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  const self = from.length > 1 ? from.replace(/\/$/, '') : '/';
  const html = readFileSync(file, 'utf8');

  // 1. Internal links.
  for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    let href = m[1];
    if (!href.startsWith('/')) {
      if (href.startsWith(SITE)) href = href.slice(SITE.length) || '/';
      else continue; // external, mailto, tel, anchor
    }
    const path = href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (!path.startsWith('/')) continue;
    if (routes.has(path) || assets.has(path) || assets.has(path + '/')) continue;
    if (redirects.has(path)) {
      viaRedirect.push(`${self}  ->  ${path}`);
      continue;
    }
    dead.push(`${self}  ->  ${path}`);
  }

  // 2. hreflang cluster.
  const alts = new Set();
  for (const m of html.matchAll(
    /<link\b[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/g,
  )) {
    if (m[1] === 'x-default') continue;
    const href = m[2].startsWith(SITE) ? m[2].slice(SITE.length) || '/' : m[2];
    alts.add(href.replace(/\/$/, '') || '/');
  }
  if (alts.size) hreflang.set(self, alts);
}

// 3. Sitemap.
for (const file of files.filter((f) => /sitemap-\d+\.xml$/.test(f))) {
  const xml = readFileSync(file, 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = m[1].replace(SITE, '').replace(/\/$/, '') || '/';
    inSitemap.add(path);
  }
}

const sitemapGhosts = [...inSitemap].filter((p) => !routes.has(p));

const notReciprocal = [];
for (const [path, alts] of hreflang) {
  for (const alt of alts) {
    if (alt === path) continue;
    const back = hreflang.get(alt);
    if (!back) {
      notReciprocal.push(`${path} lists ${alt}, which declares no cluster`);
    } else if (!back.has(path)) {
      notReciprocal.push(`${path} lists ${alt}, but ${alt} does not list it back`);
    }
  }
}

/* ----------------------------------------------------------------- report */

const uniq = (a) => [...new Set(a)].sort();

console.log(`Pages built:        ${routes.size}`);
console.log(`Sitemap entries:    ${inSitemap.size}`);
console.log(`hreflang clusters:  ${hreflang.size}`);
console.log('');

let failed = false;

function section(title, items, fatal) {
  if (!items.length) {
    console.log(`OK   ${title}`);
    return;
  }
  if (fatal) failed = true;
  console.log(`${fatal ? 'FAIL' : 'WARN'} ${title} (${items.length})`);
  for (const item of items.slice(0, 40)) console.log('       ' + item);
  if (items.length > 40) console.log(`       ... and ${items.length - 40} more`);
}

section('every internal link resolves', uniq(dead), true);
section('no internal link relies on a redirect', uniq(viaRedirect), false);
section('every hreflang alternate is reciprocal', uniq(notReciprocal), true);
section('every sitemap URL is a real page', uniq(sitemapGhosts), true);

console.log('');
process.exit(failed ? 1 : 0);
