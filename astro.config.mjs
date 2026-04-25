// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

/**
 * Legacy WordPress insight article slugs. On the old site every insight sat at
 * the root (`/<slug>/`). They now live under `/insights/<slug>`. Slugs are kept
 * identical to preserve external links and make the redirect 1:1.
 * Keep the order grouped by original listing page for easy review.
 */
const insightSlugs = [
  // Former listing page 1
  'foreign-brands-in-china-why-most-market-tests-fail',
  'science-emotion-chinas-new-brand-playbook',
  'douyin-live-commerce-2025-store-led-livestream-strategy',
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans',
  'china-2026-8-ecommerce-marketing-predictions',
  'china-e-commerce-platforms-2025',
  'taobao-flash-sale-and-chinas-30-minute-retail',
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands',
  'how-jd-mall-turns-offline-stores-into-experience-hubs',
  'what-taobao-instant-commerce-means-for-non-chinese-brands',
  'brand-localization-for-china-without-losing-your-dna',
  'double-11-2025-ai-ecommerce-efficiency-china',
  'double-11-2025-old-media-strategy-china-ecommerce',
  'double-11-2025-the-end-of-chinas-shopping-wars',
  'best-short-video-platforms-in-china',
  'how-to-localize-brand-content-for-china',
  'the-power-of-wechat-qr-codes-for-businesses-in-china',
  'how-to-apply-for-an-icp-license-for-your-website',
  'ultimate-guide-to-using-wordpress-in-china',
  'best-practices-to-launch-a-crm-program-in-china',
  // Former listing page 2
  'how-to-host-your-website-in-china-for-maximum-marketing-impact',
  'how-to-localize-your-website-for-china-tips-for-global-marketers',
  'ux-design-for-global-markets-chinese-vs-western-approaches',
  'best-practices-for-finding-a-chinese-name-for-a-brand-in-china',
  'chinas-ai-powered-commerce-trends-and-innovations-to-watch',
  'top-e-commerce-events-in-china-2025-dates-and-marketing-tips',
  'top-5-video-and-livestreaming-platforms-in-china',
  'top-ecommerce-influencers-in-china-2024',
  'weibo-marketing-guide-mastering-social-commerce-in-china',
  'best-practices-for-koc-marketing-in-china',
  'best-practices-for-successful-e-commerce-livestreaming-in-china',
  'the-cost-of-chinese-kols-case-studies-and-marketing-insights',
  'china-social-media-and-kol-strategies-for-ecommerce-brands',
  'navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin',
  'the-ultimate-guide-to-wechat-channels-for-brands',
  'ultimate-guide-to-tmall-media-costs-in-china',
  'how-chinas-advertising-laws-impact-global-brands',
  'boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide',
  'best-social-commerce-platforms-in-china-for-ecommerce-growth',
  'how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies',
  // Former listing page 3
  '11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event',
  'boost-your-marketing-with-the-best-chinese-search-engines-in-2024',
  'top-chinese-social-media-platforms-for-2024-marketing',
  'wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce',
  'taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china',
  'how-xianyu-powers-young-entrepreneurs-side-hustles-in-china',
  'top-digital-marketing-strategies-to-attract-chinese-luxury-travelers',
  'unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers',
  'unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment',
  'how-to-find-a-distributor-for-your-products-in-china-in-2024',
  'independent-chinese-designers-2024-trends-marketing-and-commerce-insights',
  'social-commerce-china-platforms-strategies-best-practices',
  'green-marketing-in-china-how-brands-are-embracing-sustainability',
  'chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales',
  'empowering-women-in-chinas-digital-commerce-2024-trends',
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025',
  'marketing-strategies-revolutionizing-ai-integrated-pcs-in-china',
  'luxury-brand-trends-mastering-social-media-in-china',
  'ai-revolutionizing-ecommerce-in-china',
  'transforming-brand-engagement-through-livestreaming-in-china',
  // Former listing page 4
  'digital-human-the-rise-of-ai-driven-live-streaming-in-china',
  'storytelling-in-b2b-marketing-enhancing-brand-connection-in-china',
  'alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications',
  'optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china',
  'how-to-localize-a-brand-for-china',
  'a-comparison-between-tmall-and-amazon',
];

/** `/<slug>` -> `/insights/<slug>` 301 map for the legacy article URLs. */
const insightRedirects = Object.fromEntries(
  insightSlugs.map((slug) => [
    `/${slug}`,
    { status: /** @type {const} */ (301), destination: `/insights/${slug}` },
  ])
);

/**
 * Legacy WordPress case study slugs mapped to new Astro slugs under `/work/`.
 * The old site used `/case-study/<wp-slug>/`. The new site uses `/work/<slug>`.
 * Slugs were shortened and standardised during migration, so the mapping is
 * explicit rather than 1:1.
 */
const caseStudyRedirectPairs = [
  ['how-camper-grew-335-on-chinese-social-media', 'camper'],
  ['case-study-roc-skincares-china-market-success', 'roc'],
  ['case-study-master-martinis-social-media-success', 'master-martini'],
  ['case-study-iguzzinis-luxury-lighting-success-in-china', 'iguzzini'],
  ['chery-automotive-with-chery-with-love-co-create-friday-campaign-cross-border-marketing', 'chery'],
  ['case-study-valios-successful-entry-into-china', 'valio'],
  ['case-study-marriotts-super-brand-day-huge-success-in-china', 'marriott'],
  ['viessmann-tmall-ecommerce-in-china-for-heating-boiling-solutions', 'viessmann'],
  ['case-study-jacs-pixel-perfect-global-asset-production', 'jac'],
  ['langnese-china-reversing-sales-decline', 'langnese'],
  ['case-study-blue-insurances-digital-success-in-hk', 'blue-insurance'],
  ['age-20s-little-milk-brick-launch-campaign-china', 'age-20s'],
  ['jac-automobile-campaign-and-content-on-wechat-red-weibo-powered-by-ai', 'jac-automobile'],
  ['how-mission-foods-nailed-digital-marketing-in-china', 'mission-foods'],
  ['case-study-chery-groups-exlantix-branding-success', 'exlantix'],
  ['jaguar-land-rover-annual-social-media-integrated-marketing-services', 'jaguar-land-rover'],
  ['wordpress-china-migration-bassetti-case-study', 'bassetti'],
  ['pierre-fabre-china-masterclass-digital-ecomm', 'pierre-fabre'],
  ['shiseido-rq-pyology-china-brand-launch-case-study', 'shiseido-rq-pyology'],
  ['case-study-beyondtiktoks-dedicated-tiktok-success', 'beyondtiktok'],
  ['kerry-food-ecommerce-china-tmalfor-davinci-gourmet-syrups-sauces-and-smoothies', 'kerry-davinci'],
  ['case-study-exeeds-successful-global-pr-launch', 'exeed'],
  ['case-study-sohomds-digital-health-transformation', 'sohomd'],
];

const caseStudyRedirects = Object.fromEntries(
  caseStudyRedirectPairs.map(([wpSlug, astroSlug]) => [
    `/case-study/${wpSlug}`,
    { status: /** @type {const} */ (301), destination: `/work/${astroSlug}` },
  ])
);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),

  // Legacy WordPress URL redirects. 301 to preserve SEO equity.
  // Mirror every entry in docs/redirection-plan.md for submission to Google.
  redirects: {
    '/china-digital-china-e-commerce-training-masterclass': {
      status: 301,
      destination: '/learn-china/masterclass',
    },

    // Legacy insights listing (paginated on WordPress) -> new collection index.
    '/insights-china-branding-marketing-commerce-digital': {
      status: 301,
      destination: '/insights',
    },
    '/insights-china-branding-marketing-commerce-digital/2': {
      status: 301,
      destination: '/insights',
    },
    '/insights-china-branding-marketing-commerce-digital/3': {
      status: 301,
      destination: '/insights',
    },
    '/insights-china-branding-marketing-commerce-digital/4': {
      status: 301,
      destination: '/insights',
    },

    // All 66 individual insight articles: /<slug> -> /insights/<slug>
    ...insightRedirects,

    // Case studies hub
    '/our-work-case-studies-business-expansion-china': {
      status: 301,
      destination: '/work',
    },

    // Market entry consulting service page (WP sales page -> Astro service page)
    '/china-cross-border-ecommerce-entry-consulting': {
      status: 301,
      destination: '/enter-china/market-entry-consulting',
    },

    // All 23 individual case studies: /case-study/<wp-slug> -> /work/<slug>
    ...caseStudyRedirects,
  },
});