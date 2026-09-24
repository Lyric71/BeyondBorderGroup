#!/usr/bin/env node
/**
 * IndexNow ping. Tells Bing, Yandex, Seznam, Naver and the other IndexNow
 * engines (Bing also feeds Copilot and ChatGPT search) that URLs are new or
 * changed, the moment they go live, instead of waiting for the next crawl.
 * Google does not take IndexNow; for Google the sitemap's lastmod does the job.
 *
 * The key is the file public/<key>.txt, served at the site root. No account
 * is needed. No npm dependencies: native fetch, Node 18+.
 *
 *   node editorial/scripts/indexnow.mjs <url> [<url> ...] [--dry-run]
 *   node editorial/scripts/indexnow.mjs --slug <english-insight-slug> [--dry-run]
 *
 * With --slug it pings the article in every locale it exists in, plus each
 * locale's insights index and "Finding a partner" hub, whose lists changed.
 * notify-publish.mjs calls it after every publish.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://www.thechinapath.com';
const HOST = 'www.thechinapath.com';

export function indexNowKey() {
  const file = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f) && readFileSync(path.join('public', f), 'utf8').trim() === f.slice(0, 32));
  return file ? file.slice(0, 32) : null;
}

export async function insightUrls(slug) {
  const m = await import(pathToFileURL(path.resolve('src', 'i18n', 'insight-slugs.mjs')).href);
  const out = [];
  const add = (file, route) => existsSync(file) && out.push(SITE + route);
  add(path.join('src', 'content', 'insights', `${slug}.md`), `/insights/${slug}`);
  const fr = m.insightEnToFr?.[slug];
  const de = m.insightEnToDe?.[slug];
  const es = m.insightEnToEs?.[slug];
  if (fr) add(path.join('src', 'content', 'insights-fr', `${fr}.md`), `/fr/decryptages/${fr}`);
  if (de) add(path.join('src', 'content', 'insights-de', `${slug}.md`), `/de/analysen/${de}`);
  if (es) add(path.join('src', 'content', 'insights-es', `${es}.md`), `/es/analisis/${es}`);
  // Listing pages whose content changed with the article.
  out.push(
    `${SITE}/insights`,
    `${SITE}/fr/decryptages`,
    `${SITE}/de/analysen`,
    `${SITE}/es/analisis`,
    `${SITE}/insights/finding-a-partner`,
    `${SITE}/fr/decryptages/trouver-un-partenaire-en-chine`,
    `${SITE}/de/analysen/partner-in-china-finden`,
    `${SITE}/es/analisis/encontrar-socio-en-china`,
  );
  return [...new Set(out)];
}

export async function pingIndexNow(urls, { dryRun = false } = {}) {
  const key = indexNowKey();
  if (!key) throw new Error('No IndexNow key file (public/<32 hex>.txt containing its own name).');
  const body = { host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList: urls };
  if (dryRun) {
    console.log('[dry run] IndexNow', JSON.stringify(body, null, 2));
    return;
  }
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  // 200 and 202 both mean accepted. 403 means the key file is not live yet
  // (it ships with the deploy), 422 that a URL is outside the host.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow ${res.status}: ${await res.text().catch(() => '')}`);
  }
  console.log(`IndexNow accepted ${urls.length} URL(s) (${res.status}).`);
}

const isMain = process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes('--dry-run');
  const i = argv.indexOf('--slug');
  const urls = i >= 0 ? await insightUrls(argv[i + 1]) : argv.filter((a) => a.startsWith('http'));
  if (!urls.length) {
    console.error('Usage: node editorial/scripts/indexnow.mjs <url>... | --slug <slug> [--dry-run]');
    process.exit(2);
  }
  await pingIndexNow(urls, { dryRun }).catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
