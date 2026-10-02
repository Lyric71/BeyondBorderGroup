#!/usr/bin/env node
/**
 * No TODO leaves a publishing run. Fails (exit 1) when a TODO, FIXME or TBD
 * marker sits in anything the editorial pipeline publishes or hands on:
 *
 *   src/content/**            every published collection, all locales
 *   editorial/output/**       drafts, assets and report copy
 *   editorial/sources/*.md    the source ledger, signal watch list, profiles
 *   editorial/briefs/**       generated briefs and templates
 *   public/content/editorial-briefs.md   the master plan the briefs come from
 *
 * The match is case sensitive and whole word, so Spanish "todo" in running
 * copy never trips it. Markers inside HTML comments count: a comment block in
 * a draft is still pipeline output. Code is out of scope: nothing under
 * src/pages, src/lib, src/components or scripts is read.
 *
 * Run:  node scripts/check-no-todo.mjs            (working tree)
 *       node scripts/check-no-todo.mjs --staged   (staged versions only; the
 *                                                  pre-commit hook uses this)
 *
 * The rule behind it is in editorial/CLAUDE.md, "No TODO leaves a run".
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const MARKER = /\b(TODOS?|FIXME|TBD)\b/;

const SCOPES = [
  { dir: 'src/content', deep: true },
  { dir: 'editorial/output', deep: true },
  { dir: 'editorial/sources', deep: false },
  { dir: 'editorial/briefs', deep: true },
];
const FILES = ['public/content/editorial-briefs.md'];

const inScope = (rel) => {
  const p = rel.replace(/\\/g, '/');
  if (!/\.(md|mdx)$/.test(p) || p.includes('/node_modules/')) return false;
  if (FILES.includes(p)) return true;
  return SCOPES.some(({ dir, deep }) => {
    if (!p.startsWith(`${dir}/`)) return false;
    return deep || !p.slice(dir.length + 1).includes('/');
  });
};

function walk(dir, deep, out = []) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) return out;
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      if (deep && entry.name !== 'node_modules') walk(rel, deep, out);
    } else if (inScope(rel)) {
      out.push(rel);
    }
  }
  return out;
}

function stagedFiles() {
  const out = execSync('git diff --cached --name-only --diff-filter=ACMR -z', { cwd: root, encoding: 'buffer' });
  return out.toString('utf8').split('\0').filter(Boolean).filter(inScope);
}

const staged = process.argv.includes('--staged');
const files = staged
  ? stagedFiles()
  : [...SCOPES.flatMap(({ dir, deep }) => walk(dir, deep)), ...FILES.filter((f) => fs.existsSync(path.join(root, f)))];

const read = (rel) =>
  staged
    ? execSync(`git show ":${rel}"`, { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
    : fs.readFileSync(path.join(root, rel), 'utf8');

const hits = [];
for (const rel of files) {
  read(rel)
    .split(/\r?\n/)
    .forEach((line, i) => {
      if (MARKER.test(line)) hits.push(`${rel}:${i + 1}: ${line.trim().slice(0, 160)}`);
    });
}

if (hits.length) {
  console.error(`check-no-todo: ${hits.length} TODO/FIXME/TBD marker(s) in pipeline content:`);
  for (const h of hits) console.error(`  ${h}`);
  console.error(
    '\nA publishing run closes every item it finds: research the fact or cut the claim, fix the page it\n' +
      'contradicts, amend the brief at its source, or apply the settled fallback. See editorial/CLAUDE.md.',
  );
  process.exit(1);
}
console.log(`check-no-todo: ok (${files.length} file${files.length === 1 ? '' : 's'}${staged ? ' staged' : ''})`);
