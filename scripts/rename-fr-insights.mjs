#!/usr/bin/env node
/**
 * One-shot script to rename the 66 FR insight markdown files from their
 * English slug to a native French slug. Run from project root:
 *   node scripts/rename-fr-insights.mjs
 *
 * Idempotent: skips files already renamed. Safe to re-run.
 */
import { rename, access } from 'node:fs/promises';
import { join } from 'node:path';

const FR_INSIGHTS_DIR = 'src/content/insights-fr';

/** [en-slug, fr-slug] pairs. Brand and platform names stay canonical per §6.8. */
export const FR_INSIGHT_RENAMES = [
  ['11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event', 'singles-day-11-11-e-commerce-chinois'],
  ['a-comparison-between-tmall-and-amazon', 'tmall-amazon-deux-modeles'],
  ['ai-revolutionizing-ecommerce-in-china', 'ia-moteur-e-commerce-chinois'],
  ['alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications', 'alibaba-pousse-1688-sur-taobao'],
  ['best-practices-for-finding-a-chinese-name-for-a-brand-in-china', 'trouver-nom-chinois-marque'],
  ['best-practices-for-koc-marketing-in-china', 'koc-en-chine-methode-campagnes'],
  ['best-practices-for-successful-e-commerce-livestreaming-in-china', 'livestream-e-commerce-chine-methode'],
  ['best-practices-to-launch-a-crm-program-in-china', 'lancer-programme-crm-chine'],
  ['best-short-video-platforms-in-china', 'video-courte-chine-douyin-kuaishou-bilibili'],
  ['best-social-commerce-platforms-in-china-for-ecommerce-growth', 'social-commerce-chine-cinq-plateformes'],
  ['boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide', 'kuaishou-chine-guide-video-courte'],
  ['boost-your-marketing-with-the-best-chinese-search-engines-in-2024', 'moteurs-recherche-chinois-2024'],
  ['brand-localization-for-china-without-losing-your-dna', 'localiser-marque-chine-sans-diluer-adn'],
  ['china-2026-8-ecommerce-marketing-predictions', 'chine-2026-huit-predictions-e-commerce-marketing'],
  ['china-e-commerce-platforms-2025', 'e-commerce-chinois-2025-plateformes'],
  ['china-is-no-longer-one-market-a-localized-growth-strategy-for-2025', 'chine-marche-unique-paris-locaux-2025'],
  ['china-is-no-longer-one-market-why-local-bets-beat-national-plans', 'chine-pari-local-vs-plan-national'],
  ['china-social-media-and-kol-strategies-for-ecommerce-brands', 'kol-chinois-commerce-digital'],
  ['chinas-ai-powered-commerce-trends-and-innovations-to-watch', 'commerce-chinois-ia-tendances-innovations'],
  ['chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales', 'tech-beaute-luxe-6-18-e-commerce-chinois'],
  ['digital-human-the-rise-of-ai-driven-live-streaming-in-china', 'humain-numerique-livestream-ia-chine'],
  ['double-11-2025-ai-ecommerce-efficiency-china', 'double-11-2025-gmv-discipline-ia'],
  ['double-11-2025-old-media-strategy-china-ecommerce', 'double-11-2025-retour-vieux-medias'],
  ['double-11-2025-the-end-of-chinas-shopping-wars', 'double-11-2025-fin-guerres-shopping'],
  ['douyin-live-commerce-2025-store-led-livestream-strategy', 'douyin-live-commerce-studios-marque'],
  ['empowering-women-in-chinas-digital-commerce-2024-trends', 'entrepreneures-e-commerce-chinois-2024'],
  ['foreign-brands-in-china-why-most-market-tests-fail', 'marques-etrangeres-chine-tests-marche-echouent'],
  ['green-marketing-in-china-how-brands-are-embracing-sustainability', 'marketing-vert-chine-campagnes'],
  ['how-chinas-advertising-laws-impact-global-brands', 'lois-publicitaires-chinoises-marques-internationales'],
  ['how-jd-mall-turns-offline-stores-into-experience-hubs', 'jd-mall-magasins-plateformes-experience'],
  ['how-to-apply-for-an-icp-license-for-your-website', 'licence-icp-site-chine-procedure'],
  ['how-to-find-a-distributor-for-your-products-in-china-in-2024', 'trouver-distributeur-chine-2024'],
  ['how-to-host-your-website-in-china-for-maximum-marketing-impact', 'hebergement-web-chine-impact-marketing'],
  ['how-to-localize-a-brand-for-china', 'localiser-marque-pour-chine-feuille-de-route'],
  ['how-to-localize-brand-content-for-china', 'localiser-contenus-marque-chine'],
  ['how-to-localize-your-website-for-china-tips-for-global-marketers', 'localiser-site-chine-guide-directions-marketing'],
  ['how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies', 'vendre-sur-douyin-marques-etrangeres-2024'],
  ['how-xianyu-powers-young-entrepreneurs-side-hustles-in-china', 'xianyu-side-hustles-jeunesse-chinoise'],
  ['independent-chinese-designers-2024-trends-marketing-and-commerce-insights', 'createurs-chinois-independants-mode-2024'],
  ['luxury-brand-trends-mastering-social-media-in-china', 'luxe-en-chine-tendances-sociales'],
  ['marketing-strategies-revolutionizing-ai-integrated-pcs-in-china', 'pc-ia-chine-marketing'],
  ['navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin', 'cyril-drouin-live-commerce-cross-border'],
  ['optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china', 'marketing-influence-casting-2024'],
  ['pipl-compliance-in-china-diors-wake-up-call-for-global-brands', 'pipl-affaire-dior-marques-etrangeres'],
  ['science-emotion-chinas-new-brand-playbook', 'science-emotion-grammaire-marques-chine'],
  ['social-commerce-china-platforms-strategies-best-practices', 'social-commerce-chine-plateformes-strategies'],
  ['storytelling-in-b2b-marketing-enhancing-brand-connection-in-china', 'storytelling-b2b-marques-chine'],
  ['taobao-flash-sale-and-chinas-30-minute-retail', 'taobao-flash-sale-commerce-30-minutes'],
  ['taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china', 'alibaba-taobao-tmall-ia-e-commerce'],
  ['the-cost-of-chinese-kols-case-studies-and-marketing-insights', 'prix-kol-chinois-grilles-tarifaires'],
  ['the-power-of-wechat-qr-codes-for-businesses-in-china', 'qr-codes-wechat-marques-chine'],
  ['the-ultimate-guide-to-wechat-channels-for-brands', 'wechat-channels-guide-marques'],
  ['top-5-video-and-livestreaming-platforms-in-china', 'top-5-plateformes-video-live-commerce-chine'],
  ['top-chinese-social-media-platforms-for-2024-marketing', 'reseaux-sociaux-chinois-cartographie-2024'],
  ['top-digital-marketing-strategies-to-attract-chinese-luxury-travelers', 'voyageurs-chinois-haut-de-gamme-guide-strategique'],
  ['top-e-commerce-events-in-china-2025-dates-and-marketing-tips', 'calendrier-2025-rendez-vous-e-commerce-chinois'],
  ['top-ecommerce-influencers-in-china-2024', 'kol-e-commerce-chinois-2024'],
  ['transforming-brand-engagement-through-livestreaming-in-china', 'patrons-chinois-livestream-comite-direction'],
  ['ultimate-guide-to-tmall-media-costs-in-china', 'couts-media-tmall-chine'],
  ['ultimate-guide-to-using-wordpress-in-china', 'wordpress-en-chine-guide-complet'],
  ['unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment', 'voyage-de-luxe-marche-chinois-2024'],
  ['unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers', 'voyageurs-chinois-haut-de-gamme-preferences'],
  ['ux-design-for-global-markets-chinese-vs-western-approaches', 'design-ux-chine-occident-deux-ecoles'],
  ['wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce', 'wechat-pay-vs-alipay-e-commerce-chinois'],
  ['weibo-marketing-guide-mastering-social-commerce-in-china', 'guide-weibo-social-commerce-chine'],
  ['what-taobao-instant-commerce-means-for-non-chinese-brands', 'taobao-instant-commerce-marques-non-chinoises'],
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  let renamed = 0;
  let skipped = 0;
  for (const [enSlug, frSlug] of FR_INSIGHT_RENAMES) {
    const from = join(FR_INSIGHTS_DIR, `${enSlug}.md`);
    const to = join(FR_INSIGHTS_DIR, `${frSlug}.md`);
    if (await exists(to)) {
      skipped++;
      continue;
    }
    if (!(await exists(from))) {
      console.warn(`MISSING ${from}`);
      continue;
    }
    await rename(from, to);
    renamed++;
  }
  console.log(`Renamed: ${renamed}, Skipped (already done): ${skipped}, Total: ${FR_INSIGHT_RENAMES.length}`);
}

if (process.argv[1].endsWith('rename-fr-insights.mjs')) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
