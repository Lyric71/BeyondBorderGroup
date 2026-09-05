#!/usr/bin/env node
/**
 * Publish notification for the editorial pipeline. Sends one email through
 * Resend (the same provider the contact form uses) when an article has been
 * published. No npm dependencies: native fetch, Node 18+.
 *
 * Run from the repo root:
 *
 *   node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>"
 *        [--section insights|guides] [--to <email>]
 *        [--image /Images/insights/<slug>.webp] [--build passed|failed]
 *        [--log editorial/logs/YYYY-MM-DD.md] [--todo "<text>"]...
 *        [--note "<text>"] [--dry-run]
 *
 * Locale URLs are derived from which content files exist for the slug and
 * from the per-locale slug maps in src/i18n/insight-slugs.mjs:
 *   src/content/insights/<slug>.md            -> /insights/<slug>/
 *   src/content/insights-fr/<frSlug>.md       -> /fr/decryptages/<frSlug>/
 *   src/content/insights-de/<slug>.md         -> /de/analysen/<deSlug>/
 *   src/content/insights-es/<esSlug>.md       -> /es/analisis/<esSlug>/
 * Guides are English only: src/content/guides/<slug>.md -> /guides/<slug>/.
 *
 * RESEND_API_KEY is read from .env.local / .env in the current directory or
 * from the environment. Pass --dry-run to print the email without sending.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://www.thechinapath.com';
// Resend testing mode only delivers to the account owner's address. Once a
// sending domain is verified at resend.com/domains, set FROM to that domain
// and DEFAULT_TO to cyril.drouin@gmail.com.
const DEFAULT_TO = 'cyril.drouin@outlook.com';
const FROM = 'TheChinaPath <onboarding@resend.dev>';

function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

function parseArgs(argv) {
  const out = { todo: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    if (key === 'dry-run') { out.dryRun = true; continue; }
    const val = argv[i + 1];
    if (val === undefined || val.startsWith('--')) { out[key] = true; continue; }
    if (key === 'todo') out.todo.push(val); else out[key] = val;
    i++;
  }
  return out;
}

async function loadSlugMaps() {
  const file = path.resolve('src', 'i18n', 'insight-slugs.mjs');
  if (!existsSync(file)) return { fr: {}, de: {}, es: {} };
  const m = await import(pathToFileURL(file).href);
  return { fr: m.insightEnToFr || {}, de: m.insightEnToDe || {}, es: m.insightEnToEs || {} };
}

async function localeUrls(slug, section) {
  if (section === 'guides') {
    const file = path.join('src', 'content', 'guides', `${slug}.md`);
    return existsSync(file) ? [{ lang: 'en', url: `${SITE}/guides/${slug}/` }] : [];
  }
  const maps = await loadSlugMaps();
  const frSlug = maps.fr[slug] || slug;
  const deSlug = maps.de[slug] || slug;
  const esSlug = maps.es[slug] || slug;
  const map = [
    { lang: 'en', file: ['insights', slug], route: `/insights/${slug}/` },
    { lang: 'fr', file: ['insights-fr', frSlug], route: `/fr/decryptages/${frSlug}/` },
    { lang: 'de', file: ['insights-de', slug], route: `/de/analysen/${deSlug}/` },
    { lang: 'es', file: ['insights-es', esSlug], route: `/es/analisis/${esSlug}/` },
  ];
  return map
    .filter((m) => existsSync(path.join('src', 'content', m.file[0], `${m.file[1]}.md`)))
    .map((m) => ({ lang: m.lang, url: `${SITE}${m.route}` }));
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug || !args.title) {
    console.error('Usage: node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" [options]');
    process.exit(2);
  }
  const section = args.section || 'insights';
  const to = args.to || DEFAULT_TO;
  const urls = await localeUrls(args.slug, section);
  const when = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false });
  const image = args.image || `/Images/insights/${args.slug}.webp`;

  const lines = [
    `Published: ${args.title}`,
    '',
    `Slug: ${args.slug}`,
    `Section: /${section}/`,
    `Time (Shanghai): ${when}`,
    '',
    'Live URLs:',
    ...(urls.length ? urls.map((u) => `  ${u.lang}  ${u.url}`) : ['  none found in src/content for this slug']),
    '',
    `Hero image: ${image}`,
    `Build: ${args.build || 'not reported'}`,
    `Run log: ${args.log || 'not reported'}`,
  ];
  if (args.todo.length) lines.push('', 'Open TODOs:', ...args.todo.map((t) => `  - ${t}`));
  if (args.note) lines.push('', `Note: ${args.note}`);
  const text = lines.join('\n');

  const row = (label, value, last = false) =>
    `<tr><td style="padding:8px 0;color:#6B6B6B;width:130px;vertical-align:top;${last ? '' : 'border-bottom:1px solid #E5E5E5;'}">${label}</td><td style="padding:8px 0;${last ? '' : 'border-bottom:1px solid #E5E5E5;'}">${value}</td></tr>`;
  const html = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FFFFFF;color:#1A1A1A;">
  <p style="font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#269ADA;margin:0 0 8px;">Editorial system</p>
  <h1 style="font-size:22px;font-weight:700;line-height:1.25;margin:0 0 24px;">Published: ${esc(args.title)}</h1>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    ${row('Slug', esc(args.slug))}
    ${row('Section', `/${esc(section)}/`)}
    ${row('Time (Shanghai)', esc(when))}
    ${row('Live URLs', urls.length
      ? urls.map((u) => `<span style="color:#6B6B6B;">${u.lang}</span> <a href="${u.url}" style="color:#269ADA;text-decoration:none;">${u.url}</a>`).join('<br/>')
      : 'none found in src/content for this slug')}
    ${row('Hero image', esc(image))}
    ${row('Build', esc(args.build || 'not reported'))}
    ${row('Run log', esc(args.log || 'not reported'), true)}
  </table>
  ${args.todo.length ? `<p style="font-size:14px;margin:24px 0 8px;color:#6B6B6B;">Open TODOs</p><ul style="font-size:14px;line-height:1.6;margin:0;padding-left:20px;">${args.todo.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
  ${args.note ? `<p style="font-size:14px;line-height:1.6;margin:24px 0 0;">${esc(args.note)}</p>` : ''}
</div>`;

  const payload = { from: FROM, to: [to], subject: `Published: ${args.title}`, text, html };

  if (args.dryRun) {
    console.log(text);
    console.log(`\n[dry run] would send to ${to}`);
    return;
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY missing. Add it to .env at the repo root.');
    process.exit(1);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`Resend error ${res.status}: ${JSON.stringify(data)}`);
    process.exit(1);
  }
  console.log(`Sent to ${to} (id ${data.id || 'n/a'})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
