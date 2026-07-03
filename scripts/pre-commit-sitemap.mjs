#!/usr/bin/env node
// Pre-commit step: when a commit touches routing-relevant files, rebuild the
// site so @astrojs/sitemap regenerates the sitemap, snapshot the result into
// the committed `sitemap/` folder, and stage it.
//
// Why a snapshot: the live sitemap only ever exists as a build artifact under
// dist/ (gitignored). Vercel regenerates it fresh on every deploy, so this
// committed copy is a reviewable record, not what production serves. Submit
// https://www.thechinapath.com/sitemap-index.xml to Google, not this file.
//
// Wired in via .git/hooks/pre-commit (see scripts/hooks/pre-commit). Skips
// entirely when no staged file can change the URL set, so most commits stay
// fast. A full build only runs when routing actually moved.

import { execSync } from 'node:child_process';
import { readdir, copyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist', 'client');
const SNAP = path.join(ROOT, 'sitemap');

// A staged path matching any of these can alter the generated URL set. Folder
// entries end with `/` (prefix match); the rest are exact file matches.
const TRIGGERS = [
  'src/pages/',
  'src/content/',
  'src/i18n/',
  'astro.config.mjs',
  'public/robots.txt',
];

function staged() {
  // ACMRD covers add / copy / modify / rename / delete: a deleted page also
  // changes the sitemap. -z keeps paths with spaces intact.
  const out = execSync('git diff --cached --name-only --diff-filter=ACMRD -z', {
    encoding: 'buffer',
  });
  return out.toString('utf8').split('\0').filter(Boolean);
}

function routingTouched(files) {
  return files.some((f) => {
    const norm = f.replace(/\\/g, '/');
    return TRIGGERS.some((t) => (t.endsWith('/') ? norm.startsWith(t) : norm === t));
  });
}

async function sitemapFiles(dir) {
  const entries = await readdir(dir);
  return entries.filter((f) => /^sitemap(-index|-\d+)\.xml$/.test(f));
}

async function main() {
  const files = staged();
  if (files.length === 0) return;
  if (!routingTouched(files)) return;

  console.log('[pre-commit] routing files changed, rebuilding sitemap...');
  try {
    execSync('npx astro build', { stdio: 'inherit' });
  } catch {
    console.error('[pre-commit] build failed; aborting commit. Fix the build and retry.');
    process.exit(1);
  }

  let names;
  try {
    names = await sitemapFiles(DIST);
  } catch {
    console.error(`[pre-commit] no build output at ${DIST}; aborting.`);
    process.exit(1);
  }
  if (names.length === 0) {
    console.error('[pre-commit] build produced no sitemap files; aborting.');
    process.exit(1);
  }

  // Rebuild the snapshot from scratch so a removed shard never lingers.
  await rm(SNAP, { recursive: true, force: true });
  await mkdir(SNAP, { recursive: true });
  for (const name of names) {
    await copyFile(path.join(DIST, name), path.join(SNAP, name));
  }
  execSync('git add -- sitemap', { stdio: 'inherit' });
  console.log(`[pre-commit] snapshotted ${names.length} sitemap file(s) into sitemap/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
