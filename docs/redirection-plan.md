# Redirection plan for Google

Legacy WordPress URLs on beyondbordergroup.com and their destination on the
Astro rebuild. Every entry is a 301 redirect, configured in
[astro.config.mjs](../astro.config.mjs) under the `redirects` key.

Keep this file in sync with the config. This is the list to submit to Google
Search Console (Change of Address, URL Inspection, and for updating the
sitemap) and to send to anyone maintaining external backlinks.

## Rollout checklist for Google Search Console

Do these steps after the redirects are live in production:

1. Verify the new domain in Google Search Console if not already verified.
   Same domain, so no Change of Address is required, only re-indexing.
2. Submit the new sitemap (`/sitemap-index.xml`). Old sitemap entries become
   orphan and drop out once Google reprocesses them.
3. Spot-check a handful of old URLs via URL Inspection. Each should report
   "Page with redirect" and name the new `/insights/<slug>` target.
4. Request re-indexing of the new `/insights/` listing and the top 5 to 10
   highest-traffic article destinations (check Analytics for top referrers).
   Do not request re-indexing of the old URLs, Google drops them on its own
   once the 301s are crawled.
5. Leave the 301s in place permanently. Do not swap them to 302 or remove them
   after Google recrawls. Removing a 301 resets accumulated link equity.

## Active redirects

### Training and masterclass

| Old URL (WordPress) | New URL (Astro) | Status |
|---|---|---|
| `/china-digital-china-e-commerce-training-masterclass/` | `/learn-china/masterclass` | 301 |

### Insights listing (old paginated hub)

| Old URL (WordPress) | New URL (Astro) | Status |
|---|---|---|
| `/insights-china-branding-marketing-commerce-digital/` | `/insights` | 301 |
| `/insights-china-branding-marketing-commerce-digital/2/` | `/insights` | 301 |
| `/insights-china-branding-marketing-commerce-digital/3/` | `/insights` | 301 |
| `/insights-china-branding-marketing-commerce-digital/4/` | `/insights` | 301 |

### Insight articles (66 articles)

All articles previously sat at root (`/<slug>/`) and now live under
`/insights/<slug>`. The slug itself is preserved so external citations keep
the same last path segment.

| Old URL (WordPress) | New URL (Astro) | Status |
|---|---|---|
| `/foreign-brands-in-china-why-most-market-tests-fail/` | `/insights/foreign-brands-in-china-why-most-market-tests-fail` | 301 |
| `/science-emotion-chinas-new-brand-playbook/` | `/insights/science-emotion-chinas-new-brand-playbook` | 301 |
| `/douyin-live-commerce-2025-store-led-livestream-strategy/` | `/insights/douyin-live-commerce-2025-store-led-livestream-strategy` | 301 |
| `/china-is-no-longer-one-market-why-local-bets-beat-national-plans/` | `/insights/china-is-no-longer-one-market-why-local-bets-beat-national-plans` | 301 |
| `/china-2026-8-ecommerce-marketing-predictions/` | `/insights/china-2026-8-ecommerce-marketing-predictions` | 301 |
| `/china-e-commerce-platforms-2025/` | `/insights/china-e-commerce-platforms-2025` | 301 |
| `/taobao-flash-sale-and-chinas-30-minute-retail/` | `/insights/taobao-flash-sale-and-chinas-30-minute-retail` | 301 |
| `/pipl-compliance-in-china-diors-wake-up-call-for-global-brands/` | `/insights/pipl-compliance-in-china-diors-wake-up-call-for-global-brands` | 301 |
| `/how-jd-mall-turns-offline-stores-into-experience-hubs/` | `/insights/how-jd-mall-turns-offline-stores-into-experience-hubs` | 301 |
| `/what-taobao-instant-commerce-means-for-non-chinese-brands/` | `/insights/what-taobao-instant-commerce-means-for-non-chinese-brands` | 301 |
| `/brand-localization-for-china-without-losing-your-dna/` | `/insights/brand-localization-for-china-without-losing-your-dna` | 301 |
| `/double-11-2025-ai-ecommerce-efficiency-china/` | `/insights/double-11-2025-ai-ecommerce-efficiency-china` | 301 |
| `/double-11-2025-old-media-strategy-china-ecommerce/` | `/insights/double-11-2025-old-media-strategy-china-ecommerce` | 301 |
| `/double-11-2025-the-end-of-chinas-shopping-wars/` | `/insights/double-11-2025-the-end-of-chinas-shopping-wars` | 301 |
| `/best-short-video-platforms-in-china/` | `/insights/best-short-video-platforms-in-china` | 301 |
| `/how-to-localize-brand-content-for-china/` | `/insights/how-to-localize-brand-content-for-china` | 301 |
| `/the-power-of-wechat-qr-codes-for-businesses-in-china/` | `/insights/the-power-of-wechat-qr-codes-for-businesses-in-china` | 301 |
| `/how-to-apply-for-an-icp-license-for-your-website/` | `/insights/how-to-apply-for-an-icp-license-for-your-website` | 301 |
| `/ultimate-guide-to-using-wordpress-in-china/` | `/insights/ultimate-guide-to-using-wordpress-in-china` | 301 |
| `/best-practices-to-launch-a-crm-program-in-china/` | `/insights/best-practices-to-launch-a-crm-program-in-china` | 301 |
| `/how-to-host-your-website-in-china-for-maximum-marketing-impact/` | `/insights/how-to-host-your-website-in-china-for-maximum-marketing-impact` | 301 |
| `/how-to-localize-your-website-for-china-tips-for-global-marketers/` | `/insights/how-to-localize-your-website-for-china-tips-for-global-marketers` | 301 |
| `/ux-design-for-global-markets-chinese-vs-western-approaches/` | `/insights/ux-design-for-global-markets-chinese-vs-western-approaches` | 301 |
| `/best-practices-for-finding-a-chinese-name-for-a-brand-in-china/` | `/insights/best-practices-for-finding-a-chinese-name-for-a-brand-in-china` | 301 |
| `/chinas-ai-powered-commerce-trends-and-innovations-to-watch/` | `/insights/chinas-ai-powered-commerce-trends-and-innovations-to-watch` | 301 |
| `/top-e-commerce-events-in-china-2025-dates-and-marketing-tips/` | `/insights/top-e-commerce-events-in-china-2025-dates-and-marketing-tips` | 301 |
| `/top-5-video-and-livestreaming-platforms-in-china/` | `/insights/top-5-video-and-livestreaming-platforms-in-china` | 301 |
| `/top-ecommerce-influencers-in-china-2024/` | `/insights/top-ecommerce-influencers-in-china-2024` | 301 |
| `/weibo-marketing-guide-mastering-social-commerce-in-china/` | `/insights/weibo-marketing-guide-mastering-social-commerce-in-china` | 301 |
| `/best-practices-for-koc-marketing-in-china/` | `/insights/best-practices-for-koc-marketing-in-china` | 301 |
| `/best-practices-for-successful-e-commerce-livestreaming-in-china/` | `/insights/best-practices-for-successful-e-commerce-livestreaming-in-china` | 301 |
| `/the-cost-of-chinese-kols-case-studies-and-marketing-insights/` | `/insights/the-cost-of-chinese-kols-case-studies-and-marketing-insights` | 301 |
| `/china-social-media-and-kol-strategies-for-ecommerce-brands/` | `/insights/china-social-media-and-kol-strategies-for-ecommerce-brands` | 301 |
| `/navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin/` | `/insights/navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin` | 301 |
| `/the-ultimate-guide-to-wechat-channels-for-brands/` | `/insights/the-ultimate-guide-to-wechat-channels-for-brands` | 301 |
| `/ultimate-guide-to-tmall-media-costs-in-china/` | `/insights/ultimate-guide-to-tmall-media-costs-in-china` | 301 |
| `/how-chinas-advertising-laws-impact-global-brands/` | `/insights/how-chinas-advertising-laws-impact-global-brands` | 301 |
| `/boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide/` | `/insights/boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide` | 301 |
| `/best-social-commerce-platforms-in-china-for-ecommerce-growth/` | `/insights/best-social-commerce-platforms-in-china-for-ecommerce-growth` | 301 |
| `/how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies/` | `/insights/how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies` | 301 |
| `/11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event/` | `/insights/11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event` | 301 |
| `/boost-your-marketing-with-the-best-chinese-search-engines-in-2024/` | `/insights/boost-your-marketing-with-the-best-chinese-search-engines-in-2024` | 301 |
| `/top-chinese-social-media-platforms-for-2024-marketing/` | `/insights/top-chinese-social-media-platforms-for-2024-marketing` | 301 |
| `/wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce/` | `/insights/wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce` | 301 |
| `/taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china/` | `/insights/taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china` | 301 |
| `/how-xianyu-powers-young-entrepreneurs-side-hustles-in-china/` | `/insights/how-xianyu-powers-young-entrepreneurs-side-hustles-in-china` | 301 |
| `/top-digital-marketing-strategies-to-attract-chinese-luxury-travelers/` | `/insights/top-digital-marketing-strategies-to-attract-chinese-luxury-travelers` | 301 |
| `/unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers/` | `/insights/unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers` | 301 |
| `/unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment/` | `/insights/unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment` | 301 |
| `/how-to-find-a-distributor-for-your-products-in-china-in-2024/` | `/insights/how-to-find-a-distributor-for-your-products-in-china-in-2024` | 301 |
| `/independent-chinese-designers-2024-trends-marketing-and-commerce-insights/` | `/insights/independent-chinese-designers-2024-trends-marketing-and-commerce-insights` | 301 |
| `/social-commerce-china-platforms-strategies-best-practices/` | `/insights/social-commerce-china-platforms-strategies-best-practices` | 301 |
| `/green-marketing-in-china-how-brands-are-embracing-sustainability/` | `/insights/green-marketing-in-china-how-brands-are-embracing-sustainability` | 301 |
| `/chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales/` | `/insights/chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales` | 301 |
| `/empowering-women-in-chinas-digital-commerce-2024-trends/` | `/insights/empowering-women-in-chinas-digital-commerce-2024-trends` | 301 |
| `/china-is-no-longer-one-market-a-localized-growth-strategy-for-2025/` | `/insights/china-is-no-longer-one-market-a-localized-growth-strategy-for-2025` | 301 |
| `/marketing-strategies-revolutionizing-ai-integrated-pcs-in-china/` | `/insights/marketing-strategies-revolutionizing-ai-integrated-pcs-in-china` | 301 |
| `/luxury-brand-trends-mastering-social-media-in-china/` | `/insights/luxury-brand-trends-mastering-social-media-in-china` | 301 |
| `/ai-revolutionizing-ecommerce-in-china/` | `/insights/ai-revolutionizing-ecommerce-in-china` | 301 |
| `/transforming-brand-engagement-through-livestreaming-in-china/` | `/insights/transforming-brand-engagement-through-livestreaming-in-china` | 301 |
| `/digital-human-the-rise-of-ai-driven-live-streaming-in-china/` | `/insights/digital-human-the-rise-of-ai-driven-live-streaming-in-china` | 301 |
| `/storytelling-in-b2b-marketing-enhancing-brand-connection-in-china/` | `/insights/storytelling-in-b2b-marketing-enhancing-brand-connection-in-china` | 301 |
| `/alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications/` | `/insights/alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications` | 301 |
| `/optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china/` | `/insights/optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china` | 301 |
| `/how-to-localize-a-brand-for-china/` | `/insights/how-to-localize-a-brand-for-china` | 301 |
| `/a-comparison-between-tmall-and-amazon/` | `/insights/a-comparison-between-tmall-and-amazon` | 301 |

### Case studies hub

| Old URL (WordPress) | New URL (Astro) | Status |
|---|---|---|
| `/our-work-case-studies-business-expansion-china/` | `/work` | 301 |

### Case studies (23 individual studies)

Old slugs were long and inconsistent (some prefixed with `case-study-`, some
not, some included the headline metric). New slugs are short and brand-led.
The mapping is explicit, not 1:1.

| Old URL (WordPress) | New URL (Astro) | Status |
|---|---|---|
| `/case-study/how-camper-grew-335-on-chinese-social-media/` | `/work/camper` | 301 |
| `/case-study/case-study-roc-skincares-china-market-success/` | `/work/roc` | 301 |
| `/case-study/case-study-master-martinis-social-media-success/` | `/work/master-martini` | 301 |
| `/case-study/case-study-iguzzinis-luxury-lighting-success-in-china/` | `/work/iguzzini` | 301 |
| `/case-study/chery-automotive-with-chery-with-love-co-create-friday-campaign-cross-border-marketing/` | `/work/chery` | 301 |
| `/case-study/case-study-valios-successful-entry-into-china/` | `/work/valio` | 301 |
| `/case-study/case-study-marriotts-super-brand-day-huge-success-in-china/` | `/work/marriott` | 301 |
| `/case-study/viessmann-tmall-ecommerce-in-china-for-heating-boiling-solutions/` | `/work/viessmann` | 301 |
| `/case-study/case-study-jacs-pixel-perfect-global-asset-production/` | `/work/jac` | 301 |
| `/case-study/langnese-china-reversing-sales-decline/` | `/work/langnese` | 301 |
| `/case-study/case-study-blue-insurances-digital-success-in-hk/` | `/work/blue-insurance` | 301 |
| `/case-study/age-20s-little-milk-brick-launch-campaign-china/` | `/work/age-20s` | 301 |
| `/case-study/jac-automobile-campaign-and-content-on-wechat-red-weibo-powered-by-ai/` | `/work/jac-automobile` | 301 |
| `/case-study/how-mission-foods-nailed-digital-marketing-in-china/` | `/work/mission-foods` | 301 |
| `/case-study/case-study-chery-groups-exlantix-branding-success/` | `/work/exlantix` | 301 |
| `/case-study/jaguar-land-rover-annual-social-media-integrated-marketing-services/` | `/work/jaguar-land-rover` | 301 |
| `/case-study/wordpress-china-migration-bassetti-case-study/` | `/work/bassetti` | 301 |
| `/case-study/pierre-fabre-china-masterclass-digital-ecomm/` | `/work/pierre-fabre` | 301 |
| `/case-study/shiseido-rq-pyology-china-brand-launch-case-study/` | `/work/shiseido-rq-pyology` | 301 |
| `/case-study/case-study-beyondtiktoks-dedicated-tiktok-success/` | `/work/beyondtiktok` | 301 |
| `/case-study/kerry-food-ecommerce-china-tmalfor-davinci-gourmet-syrups-sauces-and-smoothies/` | `/work/kerry-davinci` | 301 |
| `/case-study/case-study-exeeds-successful-global-pr-launch/` | `/work/exeed` | 301 |
| `/case-study/case-study-sohomds-digital-health-transformation/` | `/work/sohomd` | 301 |

## How to add a new redirect

1. Add an entry to `redirects` in [astro.config.mjs](../astro.config.mjs)
   with `status: 301` and a `destination` pointing to the new Astro route.
2. Add a row to the table above.
3. Run `npm run build` and verify the redirect works in `dist/`.
4. After deploy, test the old URL in a fresh browser tab and confirm the 301
   resolves to the new page.
5. In Google Search Console, request re-indexing of the new URL and submit
   the old URL for removal only once the redirect is live in production.

## Notes

- Trailing slash: Astro matches the path without a trailing slash by default.
  WordPress used trailing slashes everywhere, so Vercel handles the trailing
  slash normalisation when serving the redirect.
- Do not chain redirects. If a WordPress URL was already redirected to
  another WordPress URL, point the original URL directly at the final Astro
  destination.
- Keep the same content intent when mapping old URL to new URL. Google
  devalues 301s that land on unrelated pages.
- Case study slugs were renamed during migration to shorten and standardise
  them (brand-led, no `case-study-` prefix). The old-to-new map lives in the
  `caseStudyRedirectPairs` array in `astro.config.mjs`; update that array
  when a case is added or renamed, then mirror the row in the table above.

## Notes on the insight migration

- Every article keeps its original WordPress slug. The only change is the
  namespace (`/<slug>` -> `/insights/<slug>`). This keeps the 301 map 1:1 and
  preserves the last path segment that external backlinks and citations use.
- Duplicate-topic posts: the WordPress listing surfaced two posts that share
  the same headline family:
  `china-is-no-longer-one-market-why-local-bets-beat-national-plans`
  (published on the recent listing page) and
  `china-is-no-longer-one-market-a-localized-growth-strategy-for-2025`
  (older listing page). Both are redirected 1:1 to their own Astro slug.
  Similarly, `how-to-localize-a-brand-for-china` and
  `brand-localization-for-china-without-losing-your-dna` cover the same topic
  at different depths. Editorial can consolidate these later; if one becomes
  canonical, add a second 301 from the loser to the winner.
- Hero images for all 66 articles were rehosted to
  `/public/Images/insights/<slug>.<ext>` so none of them load from the
  WordPress domain. In-article images still reference the WP origin in most
  posts, rehost those in a follow-up pass before deprovisioning the WP host.
