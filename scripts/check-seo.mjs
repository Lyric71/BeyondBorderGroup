#!/usr/bin/env node
// Pre-launch SEO assertions for thechinapath.com.
// Usage: BASE=https://preview-url node scripts/check-seo.mjs
//
// Covers the acceptance criteria of WO-P1, P2, P3, P5 and P7 in one pass:
// sitemap contents, sitemap URL status, hreflang clusters, schema presence,
// and title / meta description limits on the index pages.

const BASE = (process.env.BASE || 'https://www.thechinapath.com').replace(/\/$/, '');

let failures = 0;
const fail = (m) => {
  failures++;
  console.error('FAIL ' + m);
};
const ok = (m) => console.log('ok   ' + m);

// Vercel preview deployments can sit behind a protection bypass. Pass the
// header through when the token is set so the script can run against them.
const HEADERS = process.env.VERCEL_BYPASS
  ? { 'x-vercel-protection-bypass': process.env.VERCEL_BYPASS }
  : {};
const get = (url, opts = {}) => fetch(url, { headers: HEADERS, ...opts });
const text = async (url) => (await get(url)).text();

// --- 1. Sitemap contents -------------------------------------------------
const idx = await text(`${BASE}/sitemap-index.xml`);
const children = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const c of children) {
  const xml = await text(c);
  urls.push(...[...xml.matchAll(/<url><loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}
console.log(`sitemap carries ${urls.length} URLs across ${children.length} file(s)`);

const MUST_CONTAIN = [
  '/enter-china/market-entry-consulting',
  '/enter-china/distribution',
  '/tools',
  '/tools/douyin-cost-calculator',
  '/tools/tmall-global-setup-and-run',
  '/tools/jd-worldwide-setup-and-run',
  '/work',
  '/fr/outils',
  '/de/rechner',
  '/es/herramientas',
  '/fr/nos-realisations',
  '/de/referenzen',
  '/es/proyectos',
];
for (const path of MUST_CONTAIN) {
  urls.includes(BASE + path) ? ok(`sitemap has ${path}`) : fail(`sitemap missing ${path}`);
}

const isLocale = (u) => /\/(fr|de|es|zh)\//.test(u.replace(BASE, ''));
const caseStudies = urls.filter((u) => /\/work\/[^/]+$/.test(u) && !isLocale(u));
caseStudies.length >= 23
  ? ok(`sitemap has ${caseStudies.length} case studies`)
  : fail(`sitemap has ${caseStudies.length} case studies, expected at least 23`);

for (const [prefix, label] of [
  ['/fr/nos-realisations/', 'FR'],
  ['/de/referenzen/', 'DE'],
  ['/es/proyectos/', 'ES'],
]) {
  const n = urls.filter((u) => u.startsWith(BASE + prefix)).length;
  n >= 23 ? ok(`sitemap has ${n} ${label} case studies`) : fail(`sitemap has ${n} ${label} case studies, expected at least 23`);
}

const sitemapXml = await text(children[0] ?? `${BASE}/sitemap-0.xml`);
if (/<changefreq>|<priority>/.test(sitemapXml)) fail('sitemap carries changefreq or priority');
else ok('sitemap carries no changefreq or priority');

// --- 2. No sitemap URL redirects or 404s ---------------------------------
// Sample rather than crawl everything, to keep CI fast.
const sample = urls.filter((_, i) => i % 7 === 0).slice(0, 60);
for (const u of sample) {
  const r = await get(u, { redirect: 'manual' });
  if (r.status !== 200) fail(`sitemap URL returns ${r.status}: ${u}`);
}
ok(`sampled ${sample.length} sitemap URLs for status 200`);

// --- 3. hreflang: self-reference, reciprocity, one x-default, all resolve --
const HREFLANG_PAGES = [
  BASE + '/',
  BASE + '/insights',
  BASE + '/de/analysen',
  BASE + '/work',
  BASE + '/tools/tmall-global-setup-and-run',
];
const strip = (u) => u.replace(/\/$/, '');
for (const page of HREFLANG_PAGES) {
  const html = await text(page);
  const alts = [...html.matchAll(/<link[^>]+rel=["']alternate["'][^>]*>/g)].map((t) => t[0]);
  const pairs = alts
    .map((t) => ({
      lang: (t.match(/hreflang=["']([^"']+)["']/) || [])[1],
      href: (t.match(/href=["']([^"']+)["']/) || [])[1],
    }))
    .filter((p) => p.lang && p.href);

  if (!pairs.length) {
    fail(`${page} :: no hreflang tags`);
    continue;
  }
  if (!pairs.some((p) => strip(p.href) === strip(page))) fail(`${page} :: no self-referential hreflang`);
  const xd = pairs.filter((p) => p.lang === 'x-default');
  if (xd.length !== 1) fail(`${page} :: ${xd.length} x-default entries, expected exactly 1`);
  if (pairs.some((p) => p.lang === 'zh')) fail(`${page} :: zh hreflang outside the partner cluster`);

  for (const p of pairs) {
    const r = await get(p.href, { redirect: 'manual' });
    if (r.status !== 200) {
      fail(`${page} :: hreflang ${p.lang} -> ${p.href} returns ${r.status}`);
      continue;
    }
    const back = await text(p.href);
    if (!back.includes(strip(page))) fail(`${page} :: ${p.href} does not link back (cluster not reciprocal)`);
  }
  ok(`hreflang cluster valid on ${page}`);
}

// --- 4. Schema presence --------------------------------------------------
const SCHEMA_EXPECT = [
  [BASE + '/', ['Organization']],
  [BASE + '/insights', ['Organization']],
  [BASE + '/enter-china/market-entry-consulting', ['Organization', 'BreadcrumbList']],
  [BASE + '/tools/tmall-global-setup-and-run', ['Organization', 'WebApplication']],
  [BASE + '/work/camper', ['Organization', 'BreadcrumbList']],
];
for (const [url, types] of SCHEMA_EXPECT) {
  const html = await text(url);
  const blocks = [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (m) => m[1],
  );
  if (blocks.length !== 1) fail(`${url} :: ${blocks.length} JSON-LD blocks, expected 1 using @graph`);
  const joined = blocks.join(' ');
  if (!joined.includes('"@graph"')) fail(`${url} :: JSON-LD is not a @graph`);
  for (const t of types) {
    joined.includes(`"${t}"`) ? ok(`${url} has ${t}`) : fail(`${url} :: missing ${t} schema`);
  }
  if (/"aggregateRating"|"review"/.test(joined)) fail(`${url} :: self-serving review markup present`);
}

// --- 5. Titles and meta descriptions -------------------------------------
const TITLE_PAGES = [
  '/insights',
  '/work',
  '/tools',
  '/enter-china/market-entry-consulting',
  '/fr/decryptages',
  '/fr/nos-realisations',
  '/fr/outils',
  '/fr/entrer-en-chine/conseil-en-entree-de-marche',
  '/de/analysen',
  '/de/referenzen',
  '/de/rechner',
  '/de/nach-china/markteintrittsberatung',
  '/es/analisis',
  '/es/proyectos',
  '/es/herramientas',
  '/es/entrar-en-china/estrategia-de-entrada',
].map((p) => BASE + p);
const BARE_NOUNS = /^(Insights|Analysen|Décryptages|Análisis)\s*\|/;
for (const url of TITLE_PAGES) {
  const html = await text(url);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc =
    (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/) || [])[1] || '';
  if (BARE_NOUNS.test(title)) fail(`${url} :: title is still a bare noun`);
  const head = title.split('|')[0].trim();
  if (head.length > 60) fail(`${url} :: title head is ${head.length} chars, over 60`);
  if ((title.match(/\|/g) || []).length > 1) fail(`${url} :: title has more than one pipe`);
  if (desc.length > 155) fail(`${url} :: meta description is ${desc.length} chars, over 155`);
  if (!desc) fail(`${url} :: no meta description`);
  ok(`title and meta within limits on ${url}`);
}

console.log(failures ? `\n${failures} failure(s)` : '\nAll pre-launch SEO assertions passed');
process.exit(failures ? 1 : 0);
