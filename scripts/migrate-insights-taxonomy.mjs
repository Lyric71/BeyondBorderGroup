// One-time migration: rewrite `category` on every insight, add `platforms`.
// Run once with `node scripts/migrate-insights-taxonomy.mjs`, then remove.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INSIGHTS_DIR = path.resolve(__dirname, '..', 'src', 'content', 'insights');

const MAPPING = {
  // Platforms (13)
  'a-comparison-between-tmall-and-amazon': { category: 'Platforms', platforms: ['Tmall'] },
  'alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications': { category: 'Platforms', platforms: ['Taobao', 'Tmall'] },
  'how-xianyu-powers-young-entrepreneurs-side-hustles-in-china': { category: 'Platforms', platforms: ['Taobao'] },
  'boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide': { category: 'Platforms', platforms: ['Kuaishou'] },
  'the-ultimate-guide-to-wechat-channels-for-brands': { category: 'Platforms', platforms: ['WeChat'] },
  'weibo-marketing-guide-mastering-social-commerce-in-china': { category: 'Platforms', platforms: ['Weibo'] },
  'best-short-video-platforms-in-china': { category: 'Platforms', platforms: ['Douyin', 'Kuaishou'] },
  'top-chinese-social-media-platforms-for-2024-marketing': { category: 'Platforms', platforms: ['WeChat', 'Douyin', 'Xiaohongshu'] },
  'boost-your-marketing-with-the-best-chinese-search-engines-in-2024': { category: 'Platforms', platforms: [] },
  'social-commerce-china-platforms-strategies-best-practices': { category: 'Platforms', platforms: ['WeChat', 'Douyin'] },
  'best-social-commerce-platforms-in-china-for-ecommerce-growth': { category: 'Platforms', platforms: ['WeChat', 'Douyin', 'Xiaohongshu'] },
  'wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce': { category: 'Platforms', platforms: ['WeChat', 'Alipay'] },
  'the-power-of-wechat-qr-codes-for-businesses-in-china': { category: 'Platforms', platforms: ['WeChat'] },

  // E-Commerce (12)
  'how-jd-mall-turns-offline-stores-into-experience-hubs': { category: 'E-Commerce', platforms: ['JD'] },
  'taobao-flash-sale-and-chinas-30-minute-retail': { category: 'E-Commerce', platforms: ['Taobao'] },
  'what-taobao-instant-commerce-means-for-non-chinese-brands': { category: 'E-Commerce', platforms: ['Taobao'] },
  'china-e-commerce-platforms-2025': { category: 'E-Commerce', platforms: ['Tmall', 'Taobao', 'Douyin'] },
  'how-to-find-a-distributor-for-your-products-in-china-in-2024': { category: 'E-Commerce', platforms: [] },
  'ultimate-guide-to-tmall-media-costs-in-china': { category: 'E-Commerce', platforms: ['Tmall'] },
  'top-e-commerce-events-in-china-2025-dates-and-marketing-tips': { category: 'E-Commerce', platforms: ['Tmall', 'JD', 'Douyin'] },
  '11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event': { category: 'E-Commerce', platforms: ['Tmall'] },
  'double-11-2025-ai-ecommerce-efficiency-china': { category: 'E-Commerce', platforms: ['Tmall', 'Taobao', 'Douyin'] },
  'double-11-2025-the-end-of-chinas-shopping-wars': { category: 'E-Commerce', platforms: [] },
  'double-11-2025-old-media-strategy-china-ecommerce': { category: 'E-Commerce', platforms: [] },
  'chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales': { category: 'E-Commerce', platforms: ['Tmall', 'JD'] },

  // KOLs & Livestream (11)
  'best-practices-for-successful-e-commerce-livestreaming-in-china': { category: 'KOLs & Livestream', platforms: ['Douyin', 'Taobao'] },
  'top-5-video-and-livestreaming-platforms-in-china': { category: 'KOLs & Livestream', platforms: ['Douyin', 'Taobao'] },
  'transforming-brand-engagement-through-livestreaming-in-china': { category: 'KOLs & Livestream', platforms: [] },
  'douyin-live-commerce-2025-store-led-livestream-strategy': { category: 'KOLs & Livestream', platforms: ['Douyin'] },
  'navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin': { category: 'KOLs & Livestream', platforms: [] },
  'best-practices-for-koc-marketing-in-china': { category: 'KOLs & Livestream', platforms: ['Xiaohongshu', 'Douyin'] },
  'china-social-media-and-kol-strategies-for-ecommerce-brands': { category: 'KOLs & Livestream', platforms: ['Douyin', 'Xiaohongshu'] },
  'optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china': { category: 'KOLs & Livestream', platforms: [] },
  'the-cost-of-chinese-kols-case-studies-and-marketing-insights': { category: 'KOLs & Livestream', platforms: ['Douyin'] },
  'top-ecommerce-influencers-in-china-2024': { category: 'KOLs & Livestream', platforms: ['Xiaohongshu', 'Douyin'] },
  'how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies': { category: 'KOLs & Livestream', platforms: ['Douyin'] },

  // Brand & Localization (9)
  'best-practices-for-finding-a-chinese-name-for-a-brand-in-china': { category: 'Brand & Localization', platforms: [] },
  'brand-localization-for-china-without-losing-your-dna': { category: 'Brand & Localization', platforms: [] },
  'how-to-localize-a-brand-for-china': { category: 'Brand & Localization', platforms: [] },
  'how-to-localize-brand-content-for-china': { category: 'Brand & Localization', platforms: [] },
  'how-to-localize-your-website-for-china-tips-for-global-marketers': { category: 'Brand & Localization', platforms: [] },
  'ux-design-for-global-markets-chinese-vs-western-approaches': { category: 'Brand & Localization', platforms: [] },
  'independent-chinese-designers-2024-trends-marketing-and-commerce-insights': { category: 'Brand & Localization', platforms: [] },
  'storytelling-in-b2b-marketing-enhancing-brand-connection-in-china': { category: 'Brand & Localization', platforms: [] },
  'green-marketing-in-china-how-brands-are-embracing-sustainability': { category: 'Brand & Localization', platforms: [] },

  // AI & Innovation (5)
  'ai-revolutionizing-ecommerce-in-china': { category: 'AI & Innovation', platforms: [] },
  'chinas-ai-powered-commerce-trends-and-innovations-to-watch': { category: 'AI & Innovation', platforms: [] },
  'digital-human-the-rise-of-ai-driven-live-streaming-in-china': { category: 'AI & Innovation', platforms: ['JD'] },
  'taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china': { category: 'AI & Innovation', platforms: ['Taobao', 'Tmall'] },
  'marketing-strategies-revolutionizing-ai-integrated-pcs-in-china': { category: 'AI & Innovation', platforms: [] },

  // Market Strategy (11)
  'china-2026-8-ecommerce-marketing-predictions': { category: 'Market Strategy', platforms: [] },
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025': { category: 'Market Strategy', platforms: [] },
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans': { category: 'Market Strategy', platforms: [] },
  'foreign-brands-in-china-why-most-market-tests-fail': { category: 'Market Strategy', platforms: ['Douyin'] },
  'science-emotion-chinas-new-brand-playbook': { category: 'Market Strategy', platforms: ['Tmall', 'Douyin'] },
  'best-practices-to-launch-a-crm-program-in-china': { category: 'Market Strategy', platforms: ['WeChat'] },
  'luxury-brand-trends-mastering-social-media-in-china': { category: 'Market Strategy', platforms: ['WeChat'] },
  'top-digital-marketing-strategies-to-attract-chinese-luxury-travelers': { category: 'Market Strategy', platforms: ['WeChat'] },
  'unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment': { category: 'Market Strategy', platforms: [] },
  'unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers': { category: 'Market Strategy', platforms: [] },
  'empowering-women-in-chinas-digital-commerce-2024-trends': { category: 'Market Strategy', platforms: ['Taobao'] },

  // Compliance & Setup (5)
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands': { category: 'Compliance & Setup', platforms: [] },
  'how-to-apply-for-an-icp-license-for-your-website': { category: 'Compliance & Setup', platforms: [] },
  'how-chinas-advertising-laws-impact-global-brands': { category: 'Compliance & Setup', platforms: [] },
  'ultimate-guide-to-using-wordpress-in-china': { category: 'Compliance & Setup', platforms: [] },
  'how-to-host-your-website-in-china-for-maximum-marketing-impact': { category: 'Compliance & Setup', platforms: [] },
};

const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith('.md'));
const seen = new Set();
let updated = 0;
const missingInMapping = [];
const missingOnDisk = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const entry = MAPPING[slug];
  if (!entry) {
    missingInMapping.push(slug);
    continue;
  }
  seen.add(slug);

  const fullPath = path.join(INSIGHTS_DIR, file);
  let content = fs.readFileSync(fullPath, 'utf8');

  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    console.error(`! no frontmatter in ${file}`);
    continue;
  }
  let fm = fmMatch[1];

  // Replace category
  if (/^category:.*$/m.test(fm)) {
    fm = fm.replace(/^category:.*$/m, `category: "${entry.category}"`);
  } else {
    fm += `\ncategory: "${entry.category}"`;
  }

  // Replace or insert platforms after category
  const platformsYaml =
    entry.platforms && entry.platforms.length > 0
      ? `platforms: [${entry.platforms.map((p) => `"${p}"`).join(', ')}]`
      : null;

  if (/^platforms:.*$/m.test(fm)) {
    if (platformsYaml) {
      fm = fm.replace(/^platforms:.*$/m, platformsYaml);
    } else {
      fm = fm.replace(/^platforms:.*\r?\n?/m, '');
    }
  } else if (platformsYaml) {
    fm = fm.replace(/^(category:.*)$/m, `$1\n${platformsYaml}`);
  }

  const rebuilt = `---\n${fm}\n---` + content.slice(fmMatch[0].length);
  fs.writeFileSync(fullPath, rebuilt);
  updated++;
}

for (const slug of Object.keys(MAPPING)) {
  if (!seen.has(slug)) missingOnDisk.push(slug);
}

console.log(`updated: ${updated}`);
if (missingInMapping.length) console.log('on disk but not mapped:', missingInMapping);
if (missingOnDisk.length) console.log('mapped but not on disk:', missingOnDisk);
