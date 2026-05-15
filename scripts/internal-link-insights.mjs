// One-time pass: insert up to 3 internal links per insight article.
// Walks the body, skips code fences, headings, existing links, image alts.
// For each (url, anchorCandidates) entry, takes the first anchor it finds in
// the body that isn't already inside a link, and wraps it as a markdown link.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INSIGHTS_DIR = path.resolve(__dirname, '..', 'src', 'content', 'insights');
const MAX_LINKS = 3;

// Per-article link plan. Ordered by priority. Each entry tries its anchors in
// order. First anchor found in body wins. Stop after MAX_LINKS placements.
const PLAN = {
  '11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['cross-border e-commerce', 'Tmall'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL marketing', 'KOLs', 'KOL'] },
  ],
  'a-comparison-between-tmall-and-amazon': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Tmall', 'e-commerce platform'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'CBEC'] },
    { url: '/grow-in-china/media', anchors: ['advertising', 'media costs'] },
  ],
  'ai-revolutionizing-ecommerce-in-china': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['eCommerce in China', 'eCommerce', 'e-commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['livestream', 'KOL'] },
  ],
  'alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications': [
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'CBEC'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Taobao', 'Tmall', 'Alibaba'] },
    { url: '/enter-china/distribution', anchors: ['distribution', 'distributor'] },
  ],
  'best-practices-for-finding-a-chinese-name-for-a-brand-in-china': [
    { url: '/enter-china/branding-localisation', anchors: ['brand localization', 'brand localisation', 'localization'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'entering China'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
  ],
  'best-practices-for-koc-marketing-in-china': [
    { url: '/grow-in-china/influencers-kols', anchors: ['KOC marketing', 'KOC', 'KOL', 'influencer'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
  ],
  'best-practices-for-successful-e-commerce-livestreaming-in-china': [
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/production-studio', anchors: ['production studio', 'livestream production', 'production'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Tmall', 'e-commerce'] },
  ],
  'best-practices-to-launch-a-crm-program-in-china': [
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social commerce'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'China market'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing campaigns'] },
  ],
  'best-short-video-platforms-in-china': [
    { url: '/learn-china/platforms', anchors: ['Chinese platforms', 'platforms'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/production-studio', anchors: ['video production', 'production'] },
  ],
  'best-social-commerce-platforms-in-china-for-ecommerce-growth': [
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce'] },
    { url: '/learn-china/platforms', anchors: ['platforms'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
  ],
  'boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide': [
    { url: '/grow-in-china/influencers-kols', anchors: ['influencer marketing', 'KOL', 'influencer'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
    { url: '/grow-in-china/production-studio', anchors: ['video production', 'production'] },
  ],
  'boost-your-marketing-with-the-best-chinese-search-engines-in-2024': [
    { url: '/grow-in-china/website', anchors: ['Chinese website', 'website'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'China market'] },
  ],
  'brand-localization-for-china-without-losing-your-dna': [
    { url: '/enter-china/branding-localisation', anchors: ['brand localization', 'brand localisation', 'localization'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'entering China'] },
    { url: '/work', anchors: ['case studies', 'our work'] },
  ],
  'china-2026-8-ecommerce-marketing-predictions': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['e-commerce', 'eCommerce'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['influencer', 'KOL', 'livestream'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'entering China'] },
  ],
  'china-e-commerce-platforms-2025': [
    { url: '/learn-china/platforms', anchors: ['platforms'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['e-commerce', 'Tmall'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry'] },
  ],
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025': [
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'China market'] },
    { url: '/enter-china/branding-localisation', anchors: ['localisation', 'localization', 'localised', 'localized'] },
    { url: '/work', anchors: ['case studies', 'playbook'] },
  ],
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans': [
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'China market'] },
    { url: '/enter-china/branding-localisation', anchors: ['localisation', 'localization', 'localised', 'localized'] },
    { url: '/work', anchors: ['case studies', 'playbook'] },
  ],
  'china-social-media-and-kol-strategies-for-ecommerce-brands': [
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce', 'social media'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing campaigns'] },
  ],
  'chinas-ai-powered-commerce-trends-and-innovations-to-watch': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['e-commerce', 'eCommerce'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['influencer', 'KOL', 'livestream'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing', 'campaigns'] },
  ],
  'chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['JD', 'Tmall', 'e-commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
    { url: '/work', anchors: ['case studies'] },
  ],
  'digital-human-the-rise-of-ai-driven-live-streaming-in-china': [
    { url: '/grow-in-china/influencers-kols', anchors: ['live streaming', 'livestream', 'KOL'] },
    { url: '/grow-in-china/production-studio', anchors: ['production studio', 'production'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['JD', 'e-commerce'] },
  ],
  'double-11-2025-ai-ecommerce-efficiency-china': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['e-commerce', 'eCommerce', 'JD', 'Taobao'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['livestream', 'KOL'] },
    { url: '/grow-in-china/production-studio', anchors: ['production'] },
  ],
  'double-11-2025-old-media-strategy-china-ecommerce': [
    { url: '/grow-in-china/media', anchors: ['media strategy', 'media'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['e-commerce'] },
  ],
  'double-11-2025-the-end-of-chinas-shopping-wars': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['e-commerce', 'JD', 'Taobao'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing', 'campaign'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border'] },
  ],
  'douyin-live-commerce-2025-store-led-livestream-strategy': [
    { url: '/grow-in-china/influencers-kols', anchors: ['livestream', 'KOL', 'influencer'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce', 'WeChat'] },
    { url: '/work', anchors: ['case studies', 'case study'] },
  ],
  'empowering-women-in-chinas-digital-commerce-2024-trends': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Taobao', 'e-commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['Campaign', 'campaign', 'campaigns'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce', 'WeChat'] },
  ],
  'foreign-brands-in-china-why-most-market-tests-fail': [
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'entering China'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'CBEC'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'Douyin'] },
  ],
  'green-marketing-in-china-how-brands-are-embracing-sustainability': [
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
    { url: '/enter-china/branding-localisation', anchors: ['branding', 'brand'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce', 'social media'] },
  ],
  'how-chinas-advertising-laws-impact-global-brands': [
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'China market'] },
    { url: '/grow-in-china/campaigns', anchors: ['advertising', 'campaigns'] },
    { url: '/grow-in-china/media', anchors: ['media'] },
  ],
  'how-jd-mall-turns-offline-stores-into-experience-hubs': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['JD', 'e-commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
    { url: '/work', anchors: ['case studies', 'our work'] },
  ],
  'how-to-apply-for-an-icp-license-for-your-website': [
    { url: '/grow-in-china/website', anchors: ['website hosting', 'website'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border setup', 'cross-border'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry'] },
  ],
  'how-to-find-a-distributor-for-your-products-in-china-in-2024': [
    { url: '/enter-china/distribution', anchors: ['distributor', 'distribution'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'China market'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'CBEC'] },
  ],
  'how-to-host-your-website-in-china-for-maximum-marketing-impact': [
    { url: '/grow-in-china/website', anchors: ['website hosting', 'website'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'entering China'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing'] },
  ],
  'how-to-localize-a-brand-for-china': [
    { url: '/enter-china/branding-localisation', anchors: ['brand localization', 'brand localisation', 'localize'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'entering China'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing campaigns', 'campaigns'] },
  ],
  'how-to-localize-brand-content-for-china': [
    { url: '/enter-china/branding-localisation', anchors: ['brand localization', 'localization', 'localize'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'content marketing'] },
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social commerce'] },
  ],
  'how-to-localize-your-website-for-china-tips-for-global-marketers': [
    { url: '/grow-in-china/website', anchors: ['website localization', 'website'] },
    { url: '/enter-china/branding-localisation', anchors: ['localization', 'localize'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'entering China'] },
  ],
  'how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies': [
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'livestream', 'influencer'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing strategies', 'campaigns'] },
  ],
  'how-xianyu-powers-young-entrepreneurs-side-hustles-in-china': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Taobao', 'e-commerce'] },
    { url: '/learn-china/platforms', anchors: ['platforms'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['China market'] },
  ],
  'independent-chinese-designers-2024-trends-marketing-and-commerce-insights': [
    { url: '/enter-china/branding-localisation', anchors: ['branding', 'brand'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing', 'campaigns'] },
    { url: '/work', anchors: ['case studies', 'our work'] },
  ],
  'luxury-brand-trends-mastering-social-media-in-china': [
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social media'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
  ],
  'marketing-strategies-revolutionizing-ai-integrated-pcs-in-china': [
    { url: '/grow-in-china/campaigns', anchors: ['marketing strategy', 'marketing campaigns', 'campaigns'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce', 'WeChat'] },
  ],
  'navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin': [
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border commerce', 'cross-border', 'CBEC'] },
    { url: '/about', anchors: ['Beyond Border Group', 'our team'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['livestream', 'KOL'] },
  ],
  'optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china': [
    { url: '/grow-in-china/influencers-kols', anchors: ['influencer marketing', 'influencer', 'KOL'] },
    { url: '/grow-in-china/campaigns', anchors: ['brand strategy', 'campaigns'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social media'] },
  ],
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands': [
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'compliance', 'CBEC'] },
    { url: '/grow-in-china/website', anchors: ['website', 'hosting'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry', 'China market'] },
  ],
  'science-emotion-chinas-new-brand-playbook': [
    { url: '/enter-china/branding-localisation', anchors: ['brand strategy', 'branding', 'brand'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Tmall', 'e-commerce'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['Douyin', 'KOL'] },
  ],
  'social-commerce-china-platforms-strategies-best-practices': [
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce'] },
    { url: '/learn-china/platforms', anchors: ['platforms'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer', 'livestream'] },
  ],
  'storytelling-in-b2b-marketing-enhancing-brand-connection-in-china': [
    { url: '/enter-china/branding-localisation', anchors: ['brand connection', 'branding', 'brand'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing', 'campaigns'] },
    { url: '/work', anchors: ['case studies'] },
  ],
  'taobao-flash-sale-and-chinas-30-minute-retail': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Taobao', 'Alibaba', 'e-commerce'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
  ],
  'taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Taobao', 'Tmall', 'eCommerce'] },
    { url: '/grow-in-china/media', anchors: ['media'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
  ],
  'the-cost-of-chinese-kols-case-studies-and-marketing-insights': [
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/media', anchors: ['media'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing', 'campaigns'] },
  ],
  'the-power-of-wechat-qr-codes-for-businesses-in-china': [
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
    { url: '/grow-in-china/website', anchors: ['website'] },
  ],
  'the-ultimate-guide-to-wechat-channels-for-brands': [
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social commerce'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/production-studio', anchors: ['live streaming', 'livestream', 'production'] },
  ],
  'top-5-video-and-livestreaming-platforms-in-china': [
    { url: '/learn-china/platforms', anchors: ['platforms'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['livestreaming', 'KOL'] },
    { url: '/grow-in-china/production-studio', anchors: ['livestream production', 'production'] },
  ],
  'top-chinese-social-media-platforms-for-2024-marketing': [
    { url: '/learn-china/platforms', anchors: ['Chinese platforms', 'platforms'] },
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce', 'WeChat'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['influencer', 'KOL'] },
  ],
  'top-digital-marketing-strategies-to-attract-chinese-luxury-travelers': [
    { url: '/grow-in-china/campaigns', anchors: ['marketing strategies', 'campaigns'] },
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social media'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
  ],
  'top-e-commerce-events-in-china-2025-dates-and-marketing-tips': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['e-commerce', 'Tmall', 'JD'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
    { url: '/grow-in-china/media', anchors: ['media'] },
  ],
  'top-ecommerce-influencers-in-china-2024': [
    { url: '/grow-in-china/influencers-kols', anchors: ['influencer', 'KOL'] },
    { url: '/grow-in-china/social-commerce', anchors: ['Xiaohongshu', 'Douyin', 'social'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
  ],
  'transforming-brand-engagement-through-livestreaming-in-china': [
    { url: '/grow-in-china/influencers-kols', anchors: ['livestreaming', 'KOL'] },
    { url: '/grow-in-china/production-studio', anchors: ['livestream production', 'production'] },
    { url: '/enter-china/branding-localisation', anchors: ['brand engagement', 'brand'] },
  ],
  'ultimate-guide-to-tmall-media-costs-in-china': [
    { url: '/grow-in-china/media', anchors: ['Tmall media', 'media costs', 'media'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Tmall', 'e-commerce'] },
    { url: '/grow-in-china/campaigns', anchors: ['advertising', 'campaigns'] },
  ],
  'ultimate-guide-to-using-wordpress-in-china': [
    { url: '/grow-in-china/website', anchors: ['WordPress', 'website hosting', 'website'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border', 'entering China'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry'] },
  ],
  'unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment': [
    { url: '/grow-in-china/campaigns', anchors: ['marketing', 'campaigns'] },
    { url: '/enter-china/branding-localisation', anchors: ['branding', 'brand'] },
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social media'] },
  ],
  'unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers': [
    { url: '/enter-china/branding-localisation', anchors: ['branding', 'brand', 'localisation'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['Chinese consumer', 'China market', 'global brands'] },
    { url: '/grow-in-china/campaigns', anchors: ['marketing', 'campaigns'] },
  ],
  'ux-design-for-global-markets-chinese-vs-western-approaches': [
    { url: '/grow-in-china/website', anchors: ['UX design', 'website'] },
    { url: '/enter-china/branding-localisation', anchors: ['localization', 'brand'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry'] },
  ],
  'wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce': [
    { url: '/grow-in-china/social-commerce', anchors: ['WeChat', 'social commerce'] },
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['eCommerce', 'e-commerce'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border'] },
  ],
  'weibo-marketing-guide-mastering-social-commerce-in-china': [
    { url: '/grow-in-china/social-commerce', anchors: ['social commerce'] },
    { url: '/grow-in-china/influencers-kols', anchors: ['KOL', 'influencer'] },
    { url: '/grow-in-china/campaigns', anchors: ['campaigns', 'marketing'] },
  ],
  'what-taobao-instant-commerce-means-for-non-chinese-brands': [
    { url: '/grow-in-china/cross-border-ecommerce', anchors: ['Taobao', 'Alibaba', 'e-commerce'] },
    { url: '/enter-china/cross-border-setup', anchors: ['cross-border'] },
    { url: '/enter-china/market-entry-consulting', anchors: ['market entry'] },
  ],
};

// Broad fallback anchors per URL. Tried after the per-article candidates so
// generic words don't displace topical anchors but still salvage articles
// where the specific phrasing isn't present.
const FALLBACK_ANCHORS = {
  '/enter-china/market-entry-consulting': ['China market', 'Chinese market', 'global brands', 'foreign brands', 'enter China', 'entering China'],
  '/enter-china/branding-localisation': ['brand identity', 'brand strategy', 'localisation', 'localization', 'localise', 'localize', 'naming', 'Chinese consumers'],
  '/enter-china/cross-border-setup': ['cross-border', 'CBEC', 'cross border'],
  '/enter-china/distribution': ['distribution', 'distributor', 'distributors', 'retail partners'],
  '/grow-in-china/cross-border-ecommerce': ['e-commerce', 'eCommerce', 'ecommerce', 'online stores', 'marketplaces', 'Tmall Global'],
  '/grow-in-china/social-commerce': ['social commerce', 'social media', 'mini-program', 'WeChat Channels'],
  '/grow-in-china/campaigns': ['marketing', 'campaign', 'campaigns', 'marketing campaign', 'brand campaign'],
  '/grow-in-china/media': ['media spend', 'paid media', 'media planning', 'advertising'],
  '/grow-in-china/influencers-kols': ['influencer', 'KOL', 'KOC', 'livestream', 'livestreaming', 'live streaming'],
  '/grow-in-china/website': ['website', 'hosting', 'WordPress', 'UX'],
  '/grow-in-china/production-studio': ['video production', 'content production', 'production'],
  '/learn-china/platforms': ['Chinese platforms', 'platforms'],
  '/learn-china/masterclass': ['masterclass', 'training', 'workshop'],
  '/about': ['Beyond Border Group', 'our team'],
  '/work': ['case study', 'case studies', 'our work'],
};

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function expandedAnchors(url, anchors) {
  const fallback = FALLBACK_ANCHORS[url] || [];
  return [...new Set([...anchors, ...fallback])];
}

// Replace existing markdown links and images with null-byte spans of the same
// length, so anchor regexes never match inside the link text OR the URL.
function maskLinks(line) {
  return line.replace(/!?\[[^\]]*\]\([^)]*\)/g, (m) => '\x00'.repeat(m.length));
}

function tryInsert(body, url, anchors) {
  for (const anchor of anchors) {
    const escaped = escapeRegex(anchor);
    const lines = body.split('\n');
    let inCode = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/^```/.test(line)) {
        inCode = !inCode;
        continue;
      }
      if (inCode) continue;
      if (/^#+\s/.test(line)) continue;
      if (/^\s*\|/.test(line)) continue;

      const masked = maskLinks(line);
      const re = new RegExp(`\\b${escaped}\\b`, 'i');
      const m = masked.match(re);
      if (!m) continue;
      const idx = m.index;
      const matched = line.slice(idx, idx + m[0].length);

      const replaced = line.slice(0, idx) + `[${matched}](${url})` + line.slice(idx + m[0].length);
      lines[i] = replaced;
      return { body: lines.join('\n'), anchor: matched };
    }
  }
  return null;
}

function processArticle(filePath, links) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const fmMatch = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
  if (!fmMatch) return { inserted: [], reason: 'no frontmatter' };
  const fmLen = fmMatch[0].length;
  let body = raw.slice(fmLen);

  const inserted = [];
  const used = new Set();

  for (const { url, anchors } of links) {
    if (inserted.length >= MAX_LINKS) break;
    if (used.has(url)) continue;
    if (body.includes(`](${url})`)) continue;

    const r = tryInsert(body, url, expandedAnchors(url, anchors));
    if (r) {
      body = r.body;
      inserted.push({ url, anchor: r.anchor });
      used.add(url);
    }
  }

  fs.writeFileSync(filePath, raw.slice(0, fmLen) + body);
  return { inserted };
}

const files = fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith('.md'));
let total = 0;
let zero = 0;
const zeroList = [];
const onePlanned = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const plan = PLAN[slug];
  if (!plan) {
    onePlanned.push(slug);
    continue;
  }
  const r = processArticle(path.join(INSIGHTS_DIR, file), plan);
  total += r.inserted.length;
  if (r.inserted.length === 0) {
    zero++;
    zeroList.push(slug);
  } else {
    console.log(`${slug}: ${r.inserted.length} link${r.inserted.length === 1 ? '' : 's'}`);
    for (const { url, anchor } of r.inserted) {
      console.log(`  -> ${url}  (${anchor})`);
    }
  }
}

console.log(`\ntotal links inserted: ${total}`);
console.log(`articles with zero links: ${zero}`);
if (zeroList.length) console.log('  ', zeroList.join('\n   '));
if (onePlanned.length) console.log('NOT IN PLAN:', onePlanned);
