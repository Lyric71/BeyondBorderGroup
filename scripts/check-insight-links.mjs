#!/usr/bin/env node
/**
 * Integrity check for the insights in all four locales. Fails (exit 1) when:
 *
 *  1. an article links to /insights/<x>, /fr/decryptages/<x>, /de/analysen/<x>
 *     or /es/analisis/<x> and <x> is not a page in that locale (the classic
 *     case: an English slug pasted under /de/analysen/, which 404s);
 *  2. src/i18n/insight-slugs.mjs maps an article to a FR or ES slug that has no
 *     content file (the page would advertise an hreflang twin that 404s);
 *  3. a German article file has no insightEnToDe entry (the route would quietly
 *     publish it under its English slug).
 *
 * Run: node scripts/check-insight-links.mjs
 * The scheduled publish run calls it before the build.
 */
import fs from 'node:fs';
import path from 'node:path';
import { insightEnToFr, insightEnToDe, insightEnToEs } from '../src/i18n/insight-slugs.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const dir = (name) => path.join(root, 'src', 'content', name);
const ids = (name) =>
  fs
    .readdirSync(dir(name))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.slice(0, -3));

const en = ids('insights');
const fr = ids('insights-fr');
const de = ids('insights-de');
const es = ids('insights-es');

// Hub pages that live in the same folders as the articles.
const pages = {
  '/insights/': new Set([...en, 'industries', 'finding-a-partner']),
  '/fr/decryptages/': new Set([...fr, 'secteurs', 'trouver-un-partenaire-en-chine']),
  '/de/analysen/': new Set([...de.map((id) => insightEnToDe[id] ?? id), 'branchen', 'partner-in-china-finden']),
  '/es/analisis/': new Set([...es, 'sectores', 'encontrar-socio-en-china']),
};

const problems = [];

for (const [folder, list] of [
  ['insights', en],
  ['insights-fr', fr],
  ['insights-de', de],
  ['insights-es', es],
]) {
  for (const id of list) {
    const text = fs.readFileSync(path.join(dir(folder), `${id}.md`), 'utf8');
    for (const [base, valid] of Object.entries(pages)) {
      const escaped = base.replace(/[/]/g, '\\/');
      const re = new RegExp(`\\]\\(${escaped}([a-z0-9-]+)`, 'g');
      for (const m of text.matchAll(re)) {
        if (!valid.has(m[1])) problems.push(`broken link: ${folder}/${id}.md -> ${base}${m[1]}`);
      }
    }
  }
}

const frSet = new Set(fr);
const esSet = new Set(es);
for (const [enId, slug] of Object.entries(insightEnToFr)) {
  if (!frSet.has(slug)) problems.push(`insightEnToFr['${enId}'] = '${slug}' has no src/content/insights-fr/${slug}.md`);
}
for (const [enId, slug] of Object.entries(insightEnToEs)) {
  if (!esSet.has(slug)) problems.push(`insightEnToEs['${enId}'] = '${slug}' has no src/content/insights-es/${slug}.md`);
}
for (const id of de) {
  if (!insightEnToDe[id]) problems.push(`src/content/insights-de/${id}.md has no insightEnToDe entry`);
}

if (problems.length) {
  console.error(`check-insight-links: ${problems.length} problem(s)\n` + problems.map((p) => `  ${p}`).join('\n'));
  process.exit(1);
}
console.log(`check-insight-links: ok (${en.length} EN, ${fr.length} FR, ${de.length} DE, ${es.length} ES)`);
