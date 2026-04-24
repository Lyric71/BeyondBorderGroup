// One-shot backfill: adds a pubDate line to insight markdown files that were
// migrated from WordPress without one. Dates come from the WP REST API.
// Safe to re-run: skips files that already have pubDate in frontmatter.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.join(__dirname, '..', 'src', 'content', 'insights');

const dates = {
  'foreign-brands-in-china-why-most-market-tests-fail': '2026-03-25',
  'science-emotion-chinas-new-brand-playbook': '2026-03-12',
  'douyin-live-commerce-2025-store-led-livestream-strategy': '2026-01-06',
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans': '2026-01-06',
  'china-2026-8-ecommerce-marketing-predictions': '2026-01-02',
  'china-e-commerce-platforms-2025': '2025-12-22',
  'taobao-flash-sale-and-chinas-30-minute-retail': '2025-12-22',
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands': '2025-11-26',
  'how-jd-mall-turns-offline-stores-into-experience-hubs': '2025-11-26',
  'what-taobao-instant-commerce-means-for-non-chinese-brands': '2025-11-21',
  'brand-localization-for-china-without-losing-your-dna': '2025-11-19',
  'double-11-2025-ai-ecommerce-efficiency-china': '2025-11-14',
  'double-11-2025-old-media-strategy-china-ecommerce': '2025-11-14',
  'double-11-2025-the-end-of-chinas-shopping-wars': '2025-11-14',
};

let added = 0;
let skipped = 0;
const missing = [];

for (const [slug, date] of Object.entries(dates)) {
  const file = path.join(base, `${slug}.md`);
  if (!fs.existsSync(file)) {
    missing.push(slug);
    continue;
  }
  const src = fs.readFileSync(file, 'utf8');
  if (/^pubDate:/m.test(src)) {
    skipped++;
    continue;
  }
  const updated = src.replace(
    /(^description:[^\n]*\n)/m,
    `$1pubDate: "${date}"\n`
  );
  if (updated === src) {
    console.warn(`! ${slug}: description line not found, leaving untouched`);
    continue;
  }
  fs.writeFileSync(file, updated);
  added++;
}

console.log(`pubDate backfill: added=${added}, skipped=${skipped}, missing=${missing.length}`);
if (missing.length) console.log('missing files:', missing);
