/**
 * The two insight hubs, Trends (/insights) and Industry Insights
 * (/insights/industries), in every locale. One component renders each hub;
 * this file holds what changes per locale: where the articles live, how dates
 * read, and every visible string.
 *
 * Copy rules (CLAUDE.md): no em dashes, no numeric card badges, native
 * register per locale, euros never needed here (no prices on these pages).
 */
import { insightEnToDe } from '../i18n/insight-slugs.mjs';
import type { InsightIndustry } from '../content.config';

export type HubLocale = 'en' | 'fr' | 'de' | 'es';

export interface HubConfig {
  collection: 'insights' | 'insightsFr' | 'insightsDe' | 'insightsEs';
  /** Trends hub path (the existing insights index). */
  trendsPath: string;
  /** Industry hub path. Native slug per locale (CLAUDE.md 6.11). */
  industriesPath: string;
  contactPath: string;
  dateLocale: string;
  articleHref: (id: string) => string;
}

const deSlugs = insightEnToDe as Record<string, string>;

export const HUB_CONFIG: Record<HubLocale, HubConfig> = {
  en: {
    collection: 'insights',
    trendsPath: '/insights',
    industriesPath: '/insights/industries',
    contactPath: '/contact',
    dateLocale: 'en-US',
    articleHref: (id) => `/insights/${id}`,
  },
  fr: {
    collection: 'insightsFr',
    trendsPath: '/fr/decryptages',
    industriesPath: '/fr/decryptages/secteurs',
    contactPath: '/fr/nous-contacter',
    dateLocale: 'fr-FR',
    articleHref: (id) => `/fr/decryptages/${id}`,
  },
  de: {
    collection: 'insightsDe',
    trendsPath: '/de/analysen',
    industriesPath: '/de/analysen/branchen',
    contactPath: '/de/kontakt',
    dateLocale: 'de-DE',
    articleHref: (id) => `/de/analysen/${deSlugs[id] ?? id}`,
  },
  es: {
    collection: 'insightsEs',
    trendsPath: '/es/analisis',
    industriesPath: '/es/analisis/sectores',
    contactPath: '/es/contacto',
    dateLocale: 'es-ES',
    articleHref: (id) => `/es/analisis/${id}`,
  },
};

/** Icons for the seven insight categories. Order and colour do the work; no numbers. */
export const CATEGORY_ICONS: Record<string, string> = {
  Platforms: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  'E-Commerce': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`,
  'KOLs & Livestream': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.5 7.5a6 6 0 0 1 0 9M7.5 7.5a6 6 0 0 0 0 9"/><path d="M19.5 4.5a10 10 0 0 1 0 15M4.5 4.5a10 10 0 0 0 0 15"/></svg>`,
  'Brand & Localization': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="8" cy="9" r="1.5"/></svg>`,
  'AI & Innovation': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 8.5 13.2 11l2.3 1-2.3 1-1.2 2.5-1.2-2.5-2.3-1 2.3-1z"/></svg>`,
  'Market Strategy': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5.5-5.5 2 2-5.5z"/></svg>`,
  'Compliance & Setup': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>`,
};

/** Brand colour per platform, shown as a dot next to the name. The shipped
 * logos are wide wordmarks that turn to smudges at chip size. */
export const PLATFORM_COLORS: Record<string, string> = {
  WeChat: '#07c160',
  Douyin: '#fe2c55',
  Tmall: '#ff0036',
  Taobao: '#ff5000',
  JD: '#e1251b',
  Xiaohongshu: '#ff2442',
  Weibo: '#e6162d',
  Kuaishou: '#ff4906',
  Alipay: '#1677ff',
};

/* ------------------------------------------------------------------ */
/* Industry metadata                                                   */
/* ------------------------------------------------------------------ */

export interface IndustryCopy {
  label: string;
  intro: string;
  covers: string[];
  imageAlt: string;
  /** Extra product words the finder matches in this locale. Lowercase. */
  keywords?: string[];
}

/** Product words shared by every locale (brand-neutral English terms people type anywhere). */
export const INDUSTRY_KEYWORDS: Record<InsightIndustry, string[]> = {
  'Beauty & Personal Care': ['beauty', 'skincare', 'skin care', 'serum', 'cream', 'moisturizer', 'cosmetic', 'makeup', 'make-up', 'lipstick', 'foundation', 'mascara', 'fragrance', 'perfume', 'hair', 'shampoo', 'conditioner', 'sunscreen', 'sun care', 'lotion', 'body wash', 'toothpaste', 'toothbrush', 'oral care', 'deodorant', 'razor', 'nail', 'beauty device', 'dermocosmetic'],
  'Fashion & Luxury': ['fashion', 'luxury', 'shoe', 'shoes', 'sneaker', 'sneakers', 'footwear', 'boots', 'apparel', 'clothing', 'clothes', 'dress', 't-shirt', 'jacket', 'knitwear', 'bag', 'handbag', 'luggage', 'suitcase', 'watch', 'watches', 'jewelry', 'jewellery', 'ring', 'necklace', 'eyewear', 'glasses', 'sunglasses', 'leather', 'designer'],
  'Food & Beverage': ['food', 'snack', 'snacks', 'coffee', 'coffee beans', 'tea', 'wine', 'spirits', 'whisky', 'whiskey', 'cognac', 'gin', 'beer', 'drink', 'beverage', 'juice', 'water', 'dairy', 'cheese', 'butter', 'milk', 'yogurt', 'chocolate', 'bakery', 'flour', 'olive oil', 'sauce', 'honey', 'confectionery', 'fmcg'],
  'Health & Wellness': ['health', 'wellness', 'supplement', 'supplements', 'vitamin', 'vitamins', 'protein', 'collagen', 'probiotic', 'probiotics', 'sports nutrition', 'medical device', 'medical', 'diagnostic', 'thermometer', 'blood pressure', 'telehealth', 'pharmacy', 'otc', 'nutraceutical'],
  'Mother & Baby': ['baby', 'babies', 'infant', 'formula', 'infant formula', 'diaper', 'diapers', 'nappy', 'wipes', 'stroller', 'maternity', 'pregnancy', 'mother', 'baby food', 'nursing'],
  'Home & Living': ['home', 'furniture', 'sofa', 'chair', 'table', 'lighting', 'lamp', 'bedding', 'sheets', 'mattress', 'towel', 'textile', 'kitchen', 'cookware', 'pan', 'knife', 'tableware', 'cleaning', 'detergent', 'household', 'bathroom', 'sanitaryware', 'faucet', 'garden', 'outdoor living', 'candle', 'home decor', 'decor'],
  'Electronics & Appliances': ['electronics', 'electronic', 'phone', 'smartphone', 'headphones', 'earbuds', 'speaker', 'laptop', 'pc', 'computer', 'tablet', 'camera', 'tv', 'television', 'appliance', 'appliances', 'vacuum', 'robot vacuum', 'espresso machine', 'coffee machine', 'blender', 'air purifier', 'hair dryer', 'smart home', 'gadget', 'wearable', 'charger'],
  'Sports & Leisure': ['sport', 'sports', 'outdoor', 'camping', 'hiking', 'running', 'bike', 'bicycle', 'cycling', 'golf', 'tennis', 'ski', 'fitness', 'gym', 'yoga', 'toy', 'toys', 'game', 'games', 'board game', 'stationery', 'notebook', 'office supplies', 'instrument', 'guitar', 'piano', 'ukulele', 'hobby'],
  Pets: ['pet', 'pets', 'dog', 'cat', 'pet food', 'kibble', 'treats', 'litter', 'leash', 'aquarium', 'pet toy'],
  Automotive: ['car', 'cars', 'auto', 'automotive', 'ev', 'electric vehicle', 'auto parts', 'tire', 'tires', 'brake', 'car accessories', 'motorcycle', 'ev charger'],
  'Travel & Hospitality': ['travel', 'hotel', 'hotels', 'resort', 'tourism', 'tourist', 'destination', 'airline', 'cruise', 'hospitality', 'tourist board', 'luxury travel'],
  'B2B & Industrial': ['b2b', 'industrial', 'machinery', 'machine', 'equipment', 'components', 'hvac', 'building', 'valve', 'pump', 'manufacturing', 'chemicals', 'packaging', 'tools', 'sensor', 'sensors'],
  'Financial & Professional Services': ['insurance', 'bank', 'banking', 'finance', 'financial', 'fintech', 'wealth', 'consulting', 'legal', 'law', 'accounting', 'education', 'training', 'school', 'university', 'course', 'services', 'software', 'saas'],
};

/* ------------------------------------------------------------------ */
/* Copy                                                                */
/* ------------------------------------------------------------------ */

export interface IndustriesCopy {
  seoTitle: string;
  seoDescription: string;
  ogAlt: string;
  heroAlt: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ctaFind: string;
  ctaTrends: string;
  statArticles: string;
  statIndustries: string;
  statUpdated: string;
  cred: string;
  finderEyebrow: string;
  finderH2: string;
  finderLead: string;
  searchLabel: string;
  searchPlaceholder: string;
  clearSearch: string;
  toggleLabel: string;
  toggleAll: string;
  toggleCovered: string;
  cadence: string;
  coveredLabel: string;
  soonLabel: string;
  soonState: string;
  soonAsk: string;
  readEyebrow: string;
  readH2: string;
  railLabel: string;
  railAria: string;
  jumpAria: string;
  featureFlag: string;
  latest: string;
  ctaEyebrow: string;
  ctaH2: string;
  ctaBody: string;
  ctaContact: string;
  /** "1 article" / "4 articles" */
  articles: (n: number) => string;
  /** "{n} min read" */
  minRead: (n: number) => string;
  /** Finder result strings, used by the client script. */
  js: {
    jump: string;
    soon: string;
    ask: string;
    noneBefore: string;
    noneLink: string;
    noneAfter: string;
    one: string;
    many: string;
  };
  industries: Record<InsightIndustry, IndustryCopy>;
}

export interface TrendsCopy {
  seoTitle: string;
  seoDescription: string;
  ogAlt: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ctaLatest: string;
  ctaIndustries: string;
  statArticles: string;
  statPlatforms: string;
  statUpdated: string;
  cred: string;
  latestEyebrow: string;
  latestH2: string;
  newFlag: string;
  archiveEyebrow: string;
  archiveH2: string;
  searchLabel: string;
  searchPlaceholder: string;
  clearSearch: string;
  quickLabel: string;
  quick: { label: string; q: string }[];
  categoryAria: string;
  all: string;
  platformLabel: string;
  sortLabel: string;
  sortNewest: string;
  sortOldest: string;
  /** "Showing {shown} of {total}" */
  showing: string;
  more: string;
  empty: string;
  clearFilters: string;
  bandEyebrow: string;
  bandH2: string;
  bandBody: string;
  bandCta: string;
  ctaEyebrow: string;
  ctaH2: string;
  ctaBody: string;
  ctaContact: string;
  minRead: (n: number) => string;
  categories: Record<string, string>;
}

const enArticles = (n: number) => `${n} article${n === 1 ? '' : 's'}`;

export const INDUSTRIES_COPY: Partial<Record<HubLocale, IndustriesCopy>> = {
  en: {
    seoTitle: 'China market insights by industry | TheChinaPath',
    seoDescription:
      'Selling skincare, footwear, electronics, or industrial goods in China? Costs, channels, and brand teardowns by category, from operators on the ground.',
    ogAlt: 'Products from many industries lined up on a dark tabletop',
    heroAlt: '',
    eyebrow: 'Industry Insights',
    h1: 'China, one category at a time.',
    lead: 'Skincare doesn’t sell like sneakers in China, and neither sells like a hotel room. Pick yours and read what we learned selling it.',
    ctaFind: 'Find your category',
    ctaTrends: 'Read market trends',
    statArticles: 'articles',
    statIndustries: 'industries covered',
    statUpdated: 'updated',
    cred: 'Written by the team that has run brands in China for 15 years, from the stores we operate on Tmall, JD, and Douyin.',
    finderEyebrow: 'Find your category',
    finderH2: 'What do you sell?',
    finderLead: 'Costs, channels, and case studies for your category. Type it in and we’ll send you to the right section.',
    searchLabel: 'Search by product or category',
    searchPlaceholder: 'Try “serum,” “sneakers,” or “espresso machine”',
    clearSearch: 'Clear search',
    toggleLabel: 'Show industries',
    toggleAll: 'All industries',
    toggleCovered: 'Covered now',
    cadence: 'A new what-it-costs guide lands most Wednesdays.',
    coveredLabel: 'Covered now',
    soonLabel: 'In the works',
    soonState: 'Guide in the works',
    soonAsk: 'Ask us now',
    readEyebrow: 'Read by industry',
    readH2: 'Every article, by industry. Newest first.',
    railLabel: 'Industries',
    railAria: 'Industries on this page',
    jumpAria: 'Jump to an industry',
    featureFlag: 'Read this first',
    latest: 'Latest:',
    ctaEyebrow: 'Your category',
    ctaH2: 'Don’t see your category?',
    ctaBody: 'Ask anyway. Chances are we’ve run it. If not, we know who has.',
    ctaContact: 'Start a conversation',
    articles: enArticles,
    minRead: (n) => `${n} min read`,
    js: {
      jump: 'Jump to {name}',
      soon: '{name}: guide in the works',
      ask: 'Ask us now',
      noneBefore: 'No match yet.',
      noneLink: 'Tell us what you sell',
      noneAfter: 'and we’ll point you to the closest guide.',
      one: '1 article',
      many: '{n} articles',
    },
    industries: {
      'Beauty & Personal Care': {
        label: 'Beauty & Personal Care',
        intro: 'Skincare, make-up, fragrance, and hair care. China rewrote its cosmetics rules in 2021, and the route you pick decides which ones apply to you.',
        covers: ['Skincare', 'Make-up', 'Fragrance', 'Hair care', 'Oral care'],
        imageAlt: 'Serum dropper bottles, an open jar of cream, and a red lipstick on a dark surface',
      },
      'Fashion & Luxury': {
        label: 'Fashion & Luxury',
        intro: 'Sneakers, clothes, bags, and watches, plus the luxury houses still working out how to sell online here.',
        covers: ['Footwear', 'Apparel', 'Bags', 'Watches', 'Jewelry', 'Eyewear'],
        imageAlt: 'A white leather sneaker, a black leather handbag, and a steel wristwatch',
      },
      'Food & Beverage': {
        label: 'Food & Beverage',
        intro: 'Packaged food, coffee, wine, spirits, and dairy. Labels and customs checks come before anything else.',
        covers: ['Packaged food', 'Coffee', 'Tea', 'Wine', 'Spirits', 'Dairy'],
        imageAlt: 'Coffee beans spilling from a kraft bag beside a wine bottle, a cup of green tea, and aged cheese',
      },
      'Health & Wellness': {
        label: 'Health & Wellness',
        intro: 'Supplements, sports nutrition, and medical devices. Registration sets your route, so start there.',
        covers: ['Supplements', 'Sports nutrition', 'Medical devices'],
        imageAlt: 'A jar of amber supplement capsules, a shaker bottle, and a blood pressure monitor',
      },
      'Mother & Baby': {
        label: 'Mother & Baby',
        intro: 'Formula, baby care, and maternity. Parents check where a product comes from before they check the price.',
        covers: ['Infant formula', 'Baby care', 'Maternity'],
        imageAlt: 'A glass baby bottle, knitted baby shoes, and a formula tin with a scoop',
      },
      'Home & Living': {
        label: 'Home & Living',
        intro: 'Bulky goods come with a freight bill that decides the whole plan. Furniture, lighting, kitchen, bedding, and cleaning live here.',
        covers: ['Furniture', 'Lighting', 'Kitchen', 'Bedding', 'Cleaning', 'Bath'],
        imageAlt: 'A glowing ceramic lamp, folded linen bedding, a wooden stool, and a stoneware bowl',
      },
      'Electronics & Appliances': {
        label: 'Electronics & Appliances',
        intro: 'Consumer electronics and appliances, where JD’s delivery and installation network carries real weight.',
        covers: ['Consumer electronics', 'Small appliances', 'Home appliances'],
        imageAlt: 'Wireless earbuds in an open case, a steel espresso machine, a laptop, and a robot vacuum',
      },
      'Sports & Leisure': {
        label: 'Sports & Leisure',
        intro: 'Outdoor gear, sports kit, toys, and hobbies. Sales follow the seasons and the school calendar as much as the festivals.',
        covers: ['Outdoor', 'Sports gear', 'Toys', 'Stationery', 'Instruments'],
        imageAlt: 'A trail running shoe, a tennis racket and ball, a ukulele, and wooden game pieces',
      },
      Pets: {
        label: 'Pets',
        intro: 'Pet food, accessories, and hardware for China’s city pet owners.',
        covers: ['Pet food', 'Accessories', 'Hardware'],
        imageAlt: 'A ceramic pet bowl of kibble, a leather leash, and a woven cat toy',
      },
      Automotive: {
        label: 'Automotive',
        intro: 'EVs, parts, and accessories. Most of the work happens on Dongchedi and Douyin, well before a buyer walks into a dealer.',
        covers: ['EVs', 'Auto parts', 'Accessories'],
        imageAlt: 'An EV charging plug, a steel brake disc, and a car key fob',
      },
      'Travel & Hospitality': {
        label: 'Travel & Hospitality',
        intro: 'Hotels, destinations, and how Chinese travelers pick them.',
        covers: ['Hotels', 'Destinations', 'Luxury travel'],
        imageAlt: 'A carry-on suitcase, a folded hotel bathrobe with slippers, and a key card',
      },
      'B2B & Industrial': {
        label: 'B2B & Industrial',
        intro: 'Buyers find you through spec sheets, distributors, and trade shows, rarely through ads. Equipment, components, and building systems.',
        covers: ['Equipment', 'Components', 'Building systems'],
        imageAlt: 'A brass industrial valve, steel gears, a ball bearing, and copper pipe',
      },
      'Financial & Professional Services': {
        label: 'Financial & Professional Services',
        intro: 'Licensing decides what a foreign firm can offer at all. Insurance, consulting, and training start from that question.',
        covers: ['Insurance', 'Consulting', 'Education'],
        imageAlt: 'A fountain pen on cream paper, a red stone seal, reading glasses, and a leather portfolio',
      },
    },
  },
};

export const TRENDS_COPY: Partial<Record<HubLocale, TrendsCopy>> = {
  en: {
    seoTitle: 'China eCommerce trends and insights | TheChinaPath',
    seoDescription:
      'What’s moving in China eCommerce: platforms, livestream, pricing, and rules, from the team running brands on Tmall, JD, Douyin, and WeChat.',
    ogAlt: 'A smartphone with a red screen, a ring light, red envelopes, and a delivery helmet on a dark tabletop',
    eyebrow: 'Trends',
    h1: 'Notes from inside the China market.',
    lead: 'What changed on Tmall, Douyin, WeChat, and RED, and what it means for a foreign brand’s budget. We write these from inside those stores.',
    ctaLatest: 'See what’s new',
    ctaIndustries: 'Read by industry',
    statArticles: 'articles',
    statPlatforms: 'platforms covered',
    statUpdated: 'updated',
    cred: 'Written by the team that has run brands in China for 15 years, from Shanghai, Hong Kong, and Paris.',
    latestEyebrow: 'Latest',
    latestH2: 'Latest from the team.',
    newFlag: 'New',
    archiveEyebrow: 'Every article',
    archiveH2: 'Find the one you need.',
    searchLabel: 'Search articles',
    searchPlaceholder: 'Search “livestream,” “Tmall fees,” or “PIPL”',
    clearSearch: 'Clear search',
    quickLabel: 'Popular',
    quick: [
      { label: 'Fees and costs', q: 'cost' },
      { label: 'Livestream', q: 'livestream' },
      { label: 'Double 11', q: 'double 11' },
      { label: 'Cross-border', q: 'cross-border' },
      { label: 'Compliance', q: 'compliance' },
    ],
    categoryAria: 'Filter by category',
    all: 'All',
    platformLabel: 'Platform',
    sortLabel: 'Sort',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    showing: 'Showing {shown} of {total}',
    more: 'Show more articles',
    empty: 'No article matches all of that. Try dropping a filter.',
    clearFilters: 'Clear filters',
    bandEyebrow: 'Industry Insights',
    bandH2: 'Selling one category?',
    bandBody: 'Our industry guides show what it costs in China and which channels carry it.',
    bandCta: 'Read it industry by industry',
    ctaEyebrow: 'Talk to us',
    ctaH2: 'Want to talk one of these through?',
    ctaBody: 'Bring the article, and we’ll tell you what’s changed in the stores since.',
    ctaContact: 'Start a conversation',
    minRead: (n) => `${n} min read`,
    categories: {
      Platforms: 'Platforms',
      'E-Commerce': 'E-Commerce',
      'KOLs & Livestream': 'KOLs & Livestream',
      'Brand & Localization': 'Brand & Localization',
      'AI & Innovation': 'AI & Innovation',
      'Market Strategy': 'Market Strategy',
      'Compliance & Setup': 'Compliance & Setup',
    },
  },
};

/* ------------------------------------------------------------------ */
/* FR, DE, ES                                                          */
/* Written natively (deep-translate, three passes), not ported line by */
/* line. The Trends title, meta, H1 and lead are the shipped locale    */
/* copy from the pre-hub index pages, kept as editorial state.         */
/* FR typography: narrow no-break space (U+202F) before : ; ! ? and    */
/* inside « ».                                                         */
/* ------------------------------------------------------------------ */

INDUSTRIES_COPY.fr = {
  seoTitle: 'Vendre en Chine, secteur par secteur | TheChinaPath',
  seoDescription:
    'Cosmétique, chaussure, électronique, industrie : ce que coûte la vente en Chine, catégorie par catégorie, et les canaux qui la portent.',
  ogAlt: 'Des produits de plusieurs secteurs alignés sur une table sombre',
  heroAlt: '',
  eyebrow: 'Décryptages sectoriels',
  h1: 'La Chine, catégorie par catégorie.',
  lead: 'En Chine, on ne vend pas un sérum comme une paire de baskets, ni une paire de baskets comme une nuit d’hôtel. Choisissez votre secteur et lisez ce que le terrain nous a appris.',
  ctaFind: 'Trouver mon secteur',
  ctaTrends: 'Lire les tendances du marché',
  statArticles: 'articles',
  statIndustries: 'secteurs traités',
  statUpdated: 'mise à jour',
  cred: 'Rédigé par l’équipe qui pilote des marques en Chine depuis quinze ans et exploite des boutiques sur Tmall, JD et Douyin.',
  finderEyebrow: 'Trouver votre secteur',
  finderH2: 'Que vendez-vous ?',
  finderLead: 'Coûts, canaux, cas concrets : indiquez votre produit, nous vous conduisons à la bonne rubrique.',
  searchLabel: 'Rechercher par produit ou par secteur',
  searchPlaceholder: 'Essayez « sérum », « baskets » ou « machine à expresso »',
  clearSearch: 'Effacer la recherche',
  toggleLabel: 'Afficher les secteurs',
  toggleAll: 'Tous les secteurs',
  toggleCovered: 'Déjà traités',
  cadence: 'Presque chaque mercredi, un nouveau guide chiffre le coût d’une catégorie.',
  coveredLabel: 'Déjà traités',
  soonLabel: 'En préparation',
  soonState: 'Guide en préparation',
  soonAsk: 'Nous interroger',
  readEyebrow: 'Lire par secteur',
  readH2: 'Tous les articles, secteur par secteur. Les plus récents d’abord.',
  railLabel: 'Secteurs',
  railAria: 'Secteurs présentés sur cette page',
  jumpAria: 'Aller à un secteur',
  featureFlag: 'Pour commencer',
  latest: 'Dernière parution :',
  ctaEyebrow: 'Votre secteur',
  ctaH2: 'Votre secteur n’apparaît pas ?',
  ctaBody: 'Posez-nous la question. Nous avons sans doute déjà travaillé ce marché ; sinon, nous savons qui l’a fait.',
  ctaContact: 'Prendre contact',
  articles: (n) => (n === 1 ? '1 article' : `${n} articles`),
  minRead: (n) => `${n} min de lecture`,
  js: {
    jump: 'Aller à {name}',
    soon: '{name} : guide en préparation',
    ask: 'Nous interroger',
    noneBefore: 'Aucun résultat pour l’instant.',
    noneLink: 'Dites-nous ce que vous vendez',
    noneAfter: 'et nous vous orienterons vers le guide le plus proche.',
    one: '1 article',
    many: '{n} articles',
  },
  industries: {
    'Beauty & Personal Care': {
      label: 'Beauté et soins',
      intro: 'Soin, maquillage, parfum, capillaire. Depuis la réforme de 2021, c’est le circuit de vente retenu qui fixe les règles applicables.',
      covers: ['Soin du visage', 'Maquillage', 'Parfum', 'Capillaire', 'Bucco-dentaire'],
      imageAlt: 'Flacons compte-gouttes de sérum, pot de crème ouvert et rouge à lèvres sur fond sombre',
      keywords: ['soin', 'soins', 'sérum', 'crème', 'cosmétique', 'cosmétiques', 'maquillage', 'rouge à lèvres', 'parfum', 'cheveux', 'shampooing', 'dentifrice', 'crème solaire', 'beauté', 'dermocosmétique'],
    },
    'Fashion & Luxury': {
      label: 'Mode et luxe',
      intro: 'Baskets, prêt-à-porter, maroquinerie et montres, et les maisons de luxe, qui cherchent encore comment vendre en ligne sur ce marché.',
      covers: ['Chaussures', 'Prêt-à-porter', 'Maroquinerie', 'Montres', 'Joaillerie', 'Lunettes'],
      imageAlt: 'Une basket en cuir blanc, un sac à main en cuir noir et une montre en acier',
      keywords: ['mode', 'luxe', 'chaussure', 'chaussures', 'baskets', 'vêtements', 'prêt-à-porter', 'robe', 'veste', 'sac', 'sac à main', 'maroquinerie', 'valise', 'montre', 'montres', 'bijou', 'bijoux', 'joaillerie', 'lunettes', 'cuir'],
    },
    'Food & Beverage': {
      label: 'Agroalimentaire et boissons',
      intro: 'Épicerie, café, vins, spiritueux, produits laitiers. L’étiquetage et les contrôles douaniers passent avant tout le reste.',
      covers: ['Épicerie', 'Café', 'Thé', 'Vins', 'Spiritueux', 'Produits laitiers'],
      imageAlt: 'Grains de café échappés d’un sachet kraft, bouteille de vin, tasse de thé vert et fromage affiné',
      keywords: ['alimentaire', 'agroalimentaire', 'épicerie', 'café', 'thé', 'vin', 'vins', 'spiritueux', 'cognac', 'champagne', 'bière', 'boisson', 'boissons', 'fromage', 'beurre', 'lait', 'chocolat', 'biscuits', 'huile d’olive', 'miel', 'confiserie'],
    },
    'Health & Wellness': {
      label: 'Santé et bien-être',
      intro: 'Compléments alimentaires, nutrition sportive, dispositifs médicaux. Tout commence par l’enregistrement, qui ouvre ou ferme la voie d’accès au marché.',
      covers: ['Compléments', 'Nutrition sportive', 'Dispositifs médicaux'],
      imageAlt: 'Pot de capsules ambrées, gourde shaker et tensiomètre',
      keywords: ['santé', 'bien-être', 'complément', 'compléments', 'vitamines', 'protéine', 'collagène', 'probiotiques', 'nutrition sportive', 'dispositif médical', 'médical', 'tensiomètre', 'pharmacie', 'parapharmacie'],
    },
    'Mother & Baby': {
      label: 'Puériculture et maternité',
      intro: 'Lait infantile, soins bébé, maternité. Les parents vérifient l’origine d’un produit avant d’en regarder le prix.',
      covers: ['Lait infantile', 'Soins bébé', 'Maternité'],
      imageAlt: 'Biberon en verre, chaussons de bébé tricotés et boîte de lait infantile avec sa mesurette',
      keywords: ['bébé', 'nourrisson', 'lait infantile', 'lait maternisé', 'couches', 'poussette', 'maternité', 'grossesse', 'puériculture', 'lingettes'],
    },
    'Home & Living': {
      label: 'Maison et art de vivre',
      intro: 'Pour les produits encombrants, la facture de transport décide de tout le plan. Mobilier, luminaires, cuisine, linge de maison et entretien.',
      covers: ['Mobilier', 'Luminaires', 'Cuisine', 'Linge de maison', 'Entretien', 'Salle de bains'],
      imageAlt: 'Lampe en céramique allumée, linge de lit plié, tabouret en bois et bol en grès',
      keywords: ['maison', 'meuble', 'meubles', 'mobilier', 'canapé', 'chaise', 'table', 'luminaire', 'lampe', 'linge', 'draps', 'matelas', 'serviette', 'cuisine', 'casserole', 'couteau', 'vaisselle', 'entretien', 'lessive', 'salle de bains', 'robinet', 'jardin', 'bougie', 'décoration'],
    },
    'Electronics & Appliances': {
      label: 'Électronique et électroménager',
      intro: 'Électronique grand public et électroménager, deux marchés où le réseau de livraison et d’installation de JD pèse lourd.',
      covers: ['Électronique grand public', 'Petit électroménager', 'Gros électroménager'],
      imageAlt: 'Écouteurs sans fil dans leur étui, machine à expresso en acier, ordinateur portable et robot aspirateur',
      keywords: ['électronique', 'téléphone', 'smartphone', 'écouteurs', 'casque', 'enceinte', 'ordinateur', 'portable', 'tablette', 'appareil photo', 'télévision', 'électroménager', 'aspirateur', 'robot aspirateur', 'machine à expresso', 'machine à café', 'cafetière', 'mixeur', 'purificateur', 'sèche-cheveux', 'objet connecté'],
    },
    'Sports & Leisure': {
      label: 'Sport et loisirs',
      intro: 'Équipement outdoor, matériel de sport, jouets, loisirs. Les ventes suivent les saisons et le calendrier scolaire autant que les grandes fêtes commerciales.',
      covers: ['Outdoor', 'Matériel de sport', 'Jouets', 'Papeterie', 'Instruments'],
      imageAlt: 'Chaussure de trail, raquette et balle de tennis, ukulélé et pions en bois',
      keywords: ['sport', 'outdoor', 'randonnée', 'camping', 'course', 'vélo', 'golf', 'tennis', 'ski', 'fitness', 'yoga', 'jouet', 'jouets', 'jeu', 'jeux', 'jeu de société', 'papeterie', 'cahier', 'fournitures de bureau', 'instrument', 'guitare', 'piano'],
    },
    Pets: {
      label: 'Animaux de compagnie',
      intro: 'Alimentation, accessoires et équipement pour les propriétaires d’animaux des grandes villes chinoises.',
      covers: ['Alimentation', 'Accessoires', 'Équipement'],
      imageAlt: 'Gamelle en céramique remplie de croquettes, laisse en cuir et jouet pour chat',
      keywords: ['animal', 'animaux', 'chien', 'chat', 'croquettes', 'friandises', 'litière', 'laisse', 'aquarium'],
    },
    Automotive: {
      label: 'Automobile',
      intro: 'Véhicules électriques, pièces détachées, accessoires. L’essentiel se joue sur Dongchedi et Douyin, bien avant que l’acheteur ne pousse la porte d’une concession.',
      covers: ['Véhicules électriques', 'Pièces détachées', 'Accessoires'],
      imageAlt: 'Prise de recharge pour véhicule électrique, disque de frein en acier et clé de voiture',
      keywords: ['voiture', 'automobile', 'véhicule électrique', 'pièces détachées', 'pneu', 'pneus', 'frein', 'moto', 'borne de recharge'],
    },
    'Travel & Hospitality': {
      label: 'Tourisme et hôtellerie',
      intro: 'Hôtels, destinations, et la manière dont les voyageurs chinois font leur choix.',
      covers: ['Hôtellerie', 'Destinations', 'Voyage de luxe'],
      imageAlt: 'Valise cabine, peignoir d’hôtel plié avec ses chaussons et carte-clé',
      keywords: ['voyage', 'tourisme', 'hôtel', 'hôtels', 'hôtellerie', 'destination', 'compagnie aérienne', 'croisière', 'office de tourisme'],
    },
    'B2B & Industrial': {
      label: 'B2B et industrie',
      intro: 'Les acheteurs vous trouvent par les fiches techniques, les distributeurs et les salons, rarement par la publicité. Équipements, composants et bâtiment.',
      covers: ['Équipements', 'Composants', 'Bâtiment'],
      imageAlt: 'Vanne industrielle en laiton, engrenages en acier, roulement à billes et tube de cuivre',
      keywords: ['industrie', 'industriel', 'machine', 'machines', 'équipement', 'équipements', 'composants', 'cvc', 'bâtiment', 'vanne', 'pompe', 'chimie', 'emballage', 'outillage', 'capteur'],
    },
    'Financial & Professional Services': {
      label: 'Finance et services professionnels',
      intro: 'La licence détermine ce qu’une société étrangère a le droit de proposer. Assurance, conseil et formation partent de cette question.',
      covers: ['Assurance', 'Conseil', 'Formation'],
      imageAlt: 'Stylo plume sur papier crème, sceau en pierre rouge, lunettes de lecture et porte-documents en cuir',
      keywords: ['assurance', 'banque', 'finance', 'gestion de patrimoine', 'conseil', 'juridique', 'avocat', 'comptabilité', 'éducation', 'formation', 'école', 'université', 'logiciel', 'services'],
    },
  },
};

INDUSTRIES_COPY.de = {
  seoTitle: 'China-Markt nach Branchen: Kosten und Kanäle | TheChinaPath',
  seoDescription:
    'Hautpflege, Schuhe, Elektronik oder Industriegüter in China verkaufen? Kosten, Kanäle und Markenanalysen, nach Branche geordnet, aus der Praxis vor Ort.',
  ogAlt: 'Produkte aus zahlreichen Branchen, aufgereiht auf einem dunklen Tisch',
  heroAlt: '',
  eyebrow: 'Branchenanalysen',
  h1: 'China, Branche für Branche.',
  lead: 'Hautpflege verkauft sich in China anders als Sneaker, und beides anders als ein Hotelzimmer. Wählen Sie Ihre Branche: Hier steht, was uns der Verkauf vor Ort gelehrt hat.',
  ctaFind: 'Branche finden',
  ctaTrends: 'Zu den Markttrends',
  statArticles: 'Artikel',
  statIndustries: 'behandelte Branchen',
  statUpdated: 'aktualisiert',
  cred: 'Verfasst vom Team, das seit 15 Jahren Marken in China führt und Shops auf Tmall, JD und Douyin betreibt.',
  finderEyebrow: 'Branche finden',
  finderH2: 'Was verkaufen Sie?',
  finderLead: 'Kosten, Kanäle und Fallbeispiele für Ihre Kategorie. Geben Sie Ihr Produkt ein, und wir zeigen Ihnen das passende Kapitel.',
  searchLabel: 'Nach Produkt oder Branche suchen',
  searchPlaceholder: 'Etwa „Serum“, „Sneaker“ oder „Espressomaschine“',
  clearSearch: 'Suche löschen',
  toggleLabel: 'Branchen anzeigen',
  toggleAll: 'Alle Branchen',
  toggleCovered: 'Bereits behandelt',
  cadence: 'Fast jeden Mittwoch erscheint ein neuer Kostenleitfaden.',
  coveredLabel: 'Bereits behandelt',
  soonLabel: 'In Vorbereitung',
  soonState: 'Leitfaden in Vorbereitung',
  soonAsk: 'Jetzt anfragen',
  readEyebrow: 'Nach Branche lesen',
  readH2: 'Alle Artikel, nach Branche geordnet. Die neuesten zuerst.',
  railLabel: 'Branchen',
  railAria: 'Branchen auf dieser Seite',
  jumpAria: 'Zu einer Branche springen',
  featureFlag: 'Der Einstieg',
  latest: 'Zuletzt erschienen:',
  ctaEyebrow: 'Ihre Branche',
  ctaH2: 'Ihre Branche fehlt?',
  ctaBody: 'Fragen Sie trotzdem. Vermutlich haben wir sie bereits betreut, und falls nicht, kennen wir jemanden, der es getan hat.',
  ctaContact: 'Gespräch vereinbaren',
  articles: (n) => `${n} Artikel`,
  minRead: (n) => `${n} Min. Lesezeit`,
  js: {
    jump: 'Zu {name}',
    soon: '{name}: Leitfaden in Vorbereitung',
    ask: 'Jetzt anfragen',
    noneBefore: 'Noch kein Treffer.',
    noneLink: 'Nennen Sie uns Ihr Produkt',
    noneAfter: 'und wir verweisen Sie auf den passenden Leitfaden.',
    one: '1 Artikel',
    many: '{n} Artikel',
  },
  industries: {
    'Beauty & Personal Care': {
      label: 'Beauty und Körperpflege',
      intro: 'Hautpflege, Make-up, Düfte und Haarpflege. China hat sein Kosmetikrecht 2021 neu geordnet. Welche Regeln greifen, hängt seither vom Vertriebsweg ab.',
      covers: ['Hautpflege', 'Make-up', 'Düfte', 'Haarpflege', 'Mundpflege'],
      imageAlt: 'Serumflaschen mit Pipette, ein geöffneter Cremetiegel und ein roter Lippenstift auf dunklem Grund',
      keywords: ['hautpflege', 'creme', 'serum', 'kosmetik', 'lippenstift', 'parfum', 'duft', 'düfte', 'haare', 'haarpflege', 'shampoo', 'sonnencreme', 'zahnpasta', 'körperpflege'],
    },
    'Fashion & Luxury': {
      label: 'Mode und Luxus',
      intro: 'Sneaker, Bekleidung, Taschen und Uhren, dazu die Luxushäuser, die hier noch nach dem richtigen Weg in den Onlinehandel suchen.',
      covers: ['Schuhe', 'Bekleidung', 'Taschen', 'Uhren', 'Schmuck', 'Brillen'],
      imageAlt: 'Ein weißer Ledersneaker, eine schwarze Lederhandtasche und eine Armbanduhr aus Stahl',
      keywords: ['mode', 'luxus', 'schuhe', 'schuh', 'turnschuhe', 'bekleidung', 'kleidung', 'kleid', 'jacke', 'tasche', 'taschen', 'handtasche', 'koffer', 'uhr', 'uhren', 'schmuck', 'brille', 'sonnenbrille', 'leder'],
    },
    'Food & Beverage': {
      label: 'Lebensmittel und Getränke',
      intro: 'Lebensmittel, Kaffee, Wein, Spirituosen und Molkereiprodukte. Etikettierung und Zollkontrolle stehen vor allem anderen.',
      covers: ['Lebensmittel', 'Kaffee', 'Tee', 'Wein', 'Spirituosen', 'Molkereiprodukte'],
      imageAlt: 'Kaffeebohnen aus einer Papiertüte, eine Weinflasche, eine Tasse Grüntee und gereifter Käse',
      keywords: ['lebensmittel', 'kaffee', 'tee', 'wein', 'spirituosen', 'bier', 'getränk', 'getränke', 'käse', 'butter', 'milch', 'schokolade', 'backwaren', 'honig', 'süßwaren'],
    },
    'Health & Wellness': {
      label: 'Gesundheit und Wellness',
      intro: 'Nahrungsergänzung, Sporternährung und Medizinprodukte. Die Registrierung entscheidet über den Marktzugang, deshalb beginnt jede Planung dort.',
      covers: ['Nahrungsergänzung', 'Sporternährung', 'Medizinprodukte'],
      imageAlt: 'Ein Glas mit bernsteinfarbenen Kapseln, ein Shaker und ein Blutdruckmessgerät',
      keywords: ['gesundheit', 'wellness', 'nahrungsergänzung', 'vitamine', 'protein', 'kollagen', 'probiotika', 'sporternährung', 'medizinprodukt', 'medizinprodukte', 'blutdruck', 'apotheke'],
    },
    'Mother & Baby': {
      label: 'Mutter und Kind',
      intro: 'Säuglingsnahrung, Babypflege und Umstandsbedarf. Eltern prüfen die Herkunft eines Produkts, bevor sie auf den Preis schauen.',
      covers: ['Säuglingsnahrung', 'Babypflege', 'Umstandsbedarf'],
      imageAlt: 'Eine gläserne Babyflasche, gestrickte Babyschuhe und eine Dose Säuglingsnahrung mit Messlöffel',
      keywords: ['baby', 'säugling', 'säuglingsnahrung', 'babynahrung', 'windeln', 'kinderwagen', 'schwangerschaft', 'umstandsmode', 'feuchttücher'],
    },
    'Home & Living': {
      label: 'Wohnen und Einrichtung',
      intro: 'Bei sperrigen Waren entscheidet die Frachtrechnung über den ganzen Plan. Möbel, Leuchten, Küche, Heimtextilien und Reinigung.',
      covers: ['Möbel', 'Leuchten', 'Küche', 'Heimtextilien', 'Reinigung', 'Bad'],
      imageAlt: 'Eine leuchtende Keramiklampe, gefaltete Leinenbettwäsche, ein Holzhocker und eine Steingutschale',
      keywords: ['wohnen', 'möbel', 'sofa', 'stuhl', 'tisch', 'leuchte', 'lampe', 'bettwäsche', 'matratze', 'handtuch', 'küche', 'kochgeschirr', 'messer', 'geschirr', 'reinigung', 'waschmittel', 'haushalt', 'bad', 'armatur', 'garten', 'kerze', 'deko'],
    },
    'Electronics & Appliances': {
      label: 'Elektronik und Haushaltsgeräte',
      intro: 'Unterhaltungselektronik und Haushaltsgeräte. Hier zählt das Liefer- und Installationsnetz von JD besonders viel.',
      covers: ['Unterhaltungselektronik', 'Kleingeräte', 'Großgeräte'],
      imageAlt: 'Kabellose Ohrhörer im geöffneten Etui, eine Espressomaschine aus Stahl, ein Laptop und ein Saugroboter',
      keywords: ['elektronik', 'handy', 'smartphone', 'kopfhörer', 'lautsprecher', 'laptop', 'computer', 'tablet', 'kamera', 'fernseher', 'haushaltsgeräte', 'staubsauger', 'saugroboter', 'espressomaschine', 'kaffeemaschine', 'mixer', 'luftreiniger', 'föhn', 'smart home'],
    },
    'Sports & Leisure': {
      label: 'Sport und Freizeit',
      intro: 'Outdoor-Ausrüstung, Sportgeräte, Spielwaren und Hobbybedarf. Der Absatz folgt den Jahreszeiten und dem Schulkalender ebenso wie den Shoppingfesten.',
      covers: ['Outdoor', 'Sportgeräte', 'Spielwaren', 'Schreibwaren', 'Instrumente'],
      imageAlt: 'Ein Trailrunningschuh, ein Tennisschläger mit Ball, eine Ukulele und hölzerne Spielfiguren',
      keywords: ['sport', 'outdoor', 'wandern', 'camping', 'laufen', 'fahrrad', 'golf', 'tennis', 'ski', 'fitness', 'yoga', 'spielzeug', 'spielwaren', 'spiel', 'brettspiel', 'schreibwaren', 'bürobedarf', 'instrument', 'gitarre', 'klavier'],
    },
    Pets: {
      label: 'Heimtiere',
      intro: 'Futter, Zubehör und Ausstattung für Tierhalter in Chinas Großstädten.',
      covers: ['Futter', 'Zubehör', 'Ausstattung'],
      imageAlt: 'Ein Keramiknapf mit Trockenfutter, eine Lederleine und ein geflochtenes Katzenspielzeug',
      keywords: ['haustier', 'heimtier', 'hund', 'katze', 'tierfutter', 'futter', 'leckerli', 'katzenstreu', 'leine', 'aquarium'],
    },
    Automotive: {
      label: 'Automobil',
      intro: 'Elektroautos, Ersatzteile und Zubehör. Die eigentliche Arbeit passiert auf Dongchedi und Douyin, lange bevor ein Käufer das Autohaus betritt.',
      covers: ['Elektroautos', 'Ersatzteile', 'Zubehör'],
      imageAlt: 'Ein Ladestecker für Elektroautos, eine Bremsscheibe aus Stahl und ein Autoschlüssel',
      keywords: ['auto', 'autos', 'pkw', 'elektroauto', 'ersatzteile', 'reifen', 'bremse', 'motorrad', 'ladestation', 'wallbox'],
    },
    'Travel & Hospitality': {
      label: 'Reise und Hotellerie',
      intro: 'Hotels, Reiseziele und die Kriterien, nach denen chinesische Reisende wählen.',
      covers: ['Hotellerie', 'Reiseziele', 'Luxusreisen'],
      imageAlt: 'Ein Kabinenkoffer, ein gefalteter Hotelbademantel mit Pantoffeln und eine Schlüsselkarte',
      keywords: ['reise', 'reisen', 'tourismus', 'hotel', 'hotels', 'hotellerie', 'reiseziel', 'fluggesellschaft', 'kreuzfahrt', 'tourismusverband'],
    },
    'B2B & Industrial': {
      label: 'B2B und Industrie',
      intro: 'Einkäufer finden Sie über Datenblätter, Händler und Messen, kaum über Werbung. Anlagen, Komponenten und Gebäudetechnik.',
      covers: ['Anlagen', 'Komponenten', 'Gebäudetechnik'],
      imageAlt: 'Ein Industrieventil aus Messing, Stahlzahnräder, ein Kugellager und ein Kupferrohr',
      keywords: ['industrie', 'maschine', 'maschinen', 'maschinenbau', 'anlagen', 'komponenten', 'gebäudetechnik', 'heizung', 'lüftung', 'ventil', 'pumpe', 'chemie', 'verpackung', 'werkzeug', 'sensor', 'sensoren'],
    },
    'Financial & Professional Services': {
      label: 'Finanz- und Beratungsdienstleistungen',
      intro: 'Die Lizenz entscheidet, was ein ausländisches Unternehmen überhaupt anbieten darf. Versicherung, Beratung und Weiterbildung beginnen bei dieser Frage.',
      covers: ['Versicherung', 'Beratung', 'Weiterbildung'],
      imageAlt: 'Ein Füllfederhalter auf cremefarbenem Papier, ein roter Steinstempel, eine Lesebrille und eine Ledermappe',
      keywords: ['versicherung', 'bank', 'finanzen', 'vermögensverwaltung', 'beratung', 'recht', 'anwalt', 'buchhaltung', 'bildung', 'weiterbildung', 'schulung', 'schule', 'universität', 'software', 'dienstleistung'],
    },
  },
};

INDUSTRIES_COPY.es = {
  seoTitle: 'Vender en China, sector por sector | TheChinaPath',
  seoDescription:
    '¿Vende cosmética, calzado, electrónica o bienes industriales en China? Costes, canales y casos de marca, ordenados por sector y contados desde el terreno.',
  ogAlt: 'Productos de distintos sectores alineados sobre una mesa oscura',
  heroAlt: '',
  eyebrow: 'Análisis sectoriales',
  h1: 'China, sector por sector.',
  lead: 'En China, una crema facial no se vende como unas zapatillas, ni unas zapatillas como una noche de hotel. Elija su sector y lea lo que nos ha enseñado el terreno.',
  ctaFind: 'Encontrar mi sector',
  ctaTrends: 'Leer las tendencias del mercado',
  statArticles: 'artículos',
  statIndustries: 'sectores analizados',
  statUpdated: 'actualizado',
  cred: 'Firmado por el equipo que lleva quince años gestionando marcas en China y opera tiendas en Tmall, JD y Douyin.',
  finderEyebrow: 'Encontrar su sector',
  finderH2: '¿Qué vende usted?',
  finderLead: 'Costes, canales y casos reales de su categoría. Escriba su producto y le llevaremos a la sección que le corresponde.',
  searchLabel: 'Buscar por producto o sector',
  searchPlaceholder: 'Pruebe con «sérum», «zapatillas» o «cafetera espresso»',
  clearSearch: 'Borrar la búsqueda',
  toggleLabel: 'Mostrar sectores',
  toggleAll: 'Todos los sectores',
  toggleCovered: 'Ya analizados',
  cadence: 'Casi todos los miércoles publicamos una nueva guía de costes.',
  coveredLabel: 'Ya analizados',
  soonLabel: 'En preparación',
  soonState: 'Guía en preparación',
  soonAsk: 'Consúltenos',
  readEyebrow: 'Leer por sector',
  readH2: 'Todos los artículos, sector por sector. Los más recientes primero.',
  railLabel: 'Sectores',
  railAria: 'Sectores de esta página',
  jumpAria: 'Ir a un sector',
  featureFlag: 'Para empezar',
  latest: 'Último artículo:',
  ctaEyebrow: 'Su sector',
  ctaH2: '¿No encuentra su sector?',
  ctaBody: 'Pregúntenos igualmente. Lo más probable es que ya hayamos trabajado en él; si no, sabemos quién lo ha hecho.',
  ctaContact: 'Hable con nosotros',
  articles: (n) => (n === 1 ? '1 artículo' : `${n} artículos`),
  minRead: (n) => `${n} min de lectura`,
  js: {
    jump: 'Ir a {name}',
    soon: '{name}: guía en preparación',
    ask: 'Consúltenos',
    noneBefore: 'Aún no hay resultados.',
    noneLink: 'Cuéntenos qué vende',
    noneAfter: 'y le indicaremos la guía más cercana.',
    one: '1 artículo',
    many: '{n} artículos',
  },
  industries: {
    'Beauty & Personal Care': {
      label: 'Belleza y cuidado personal',
      intro: 'Cuidado facial, maquillaje, perfumería y cuidado capilar. China reformó su normativa cosmética en 2021, y la vía de entrada elegida determina qué reglas se aplican.',
      covers: ['Cuidado facial', 'Maquillaje', 'Perfumería', 'Cuidado capilar', 'Higiene bucal'],
      imageAlt: 'Frascos cuentagotas de sérum, un tarro de crema abierto y un pintalabios rojo sobre fondo oscuro',
      keywords: ['belleza', 'cuidado facial', 'sérum', 'crema', 'cosmética', 'maquillaje', 'pintalabios', 'perfume', 'perfumería', 'cabello', 'champú', 'protector solar', 'pasta de dientes', 'dermocosmética'],
    },
    'Fashion & Luxury': {
      label: 'Moda y lujo',
      intro: 'Zapatillas, ropa, bolsos y relojes, y las casas de lujo, que aún buscan cómo vender por internet en este mercado.',
      covers: ['Calzado', 'Ropa', 'Bolsos', 'Relojes', 'Joyería', 'Gafas'],
      imageAlt: 'Una zapatilla de piel blanca, un bolso de piel negro y un reloj de acero',
      keywords: ['moda', 'lujo', 'zapatos', 'zapatillas', 'calzado', 'ropa', 'vestido', 'chaqueta', 'bolso', 'bolsos', 'maleta', 'reloj', 'relojes', 'joyas', 'joyería', 'gafas', 'piel'],
    },
    'Food & Beverage': {
      label: 'Alimentación y bebidas',
      intro: 'Alimentación envasada, café, vinos, licores y lácteos. El etiquetado y los controles aduaneros van antes que todo lo demás.',
      covers: ['Alimentación envasada', 'Café', 'Té', 'Vinos', 'Licores', 'Lácteos'],
      imageAlt: 'Granos de café que caen de una bolsa de papel, una botella de vino, una taza de té verde y queso curado',
      keywords: ['alimentación', 'alimentos', 'café', 'té', 'vino', 'vinos', 'licores', 'destilados', 'cerveza', 'bebida', 'bebidas', 'queso', 'mantequilla', 'leche', 'chocolate', 'aceite de oliva', 'miel', 'jamón'],
    },
    'Health & Wellness': {
      label: 'Salud y bienestar',
      intro: 'Complementos alimenticios, nutrición deportiva y productos sanitarios. El registro marca la vía de entrada al mercado: por ahí hay que empezar.',
      covers: ['Complementos', 'Nutrición deportiva', 'Productos sanitarios'],
      imageAlt: 'Un bote de cápsulas ámbar, un vaso mezclador y un tensiómetro',
      keywords: ['salud', 'bienestar', 'complemento', 'complementos', 'vitaminas', 'proteína', 'colágeno', 'probióticos', 'nutrición deportiva', 'producto sanitario', 'tensiómetro', 'farmacia', 'parafarmacia'],
    },
    'Mother & Baby': {
      label: 'Maternidad y bebé',
      intro: 'Leche infantil, cuidado del bebé y maternidad. Los padres comprueban el origen de un producto antes de mirar el precio.',
      covers: ['Leche infantil', 'Cuidado del bebé', 'Maternidad'],
      imageAlt: 'Un biberón de cristal, unos patucos de punto y una lata de leche infantil con su cacito',
      keywords: ['bebé', 'bebés', 'leche infantil', 'pañales', 'carrito', 'maternidad', 'embarazo', 'puericultura', 'toallitas'],
    },
    'Home & Living': {
      label: 'Hogar y decoración',
      intro: 'En los productos voluminosos, la factura del transporte decide todo el plan. Mobiliario, iluminación, cocina, textil hogar y limpieza.',
      covers: ['Mobiliario', 'Iluminación', 'Cocina', 'Textil hogar', 'Limpieza', 'Baño'],
      imageAlt: 'Una lámpara de cerámica encendida, ropa de cama de lino doblada, un taburete de madera y un cuenco de gres',
      keywords: ['hogar', 'muebles', 'mobiliario', 'sofá', 'silla', 'mesa', 'iluminación', 'lámpara', 'ropa de cama', 'colchón', 'toalla', 'cocina', 'sartén', 'cuchillo', 'vajilla', 'limpieza', 'detergente', 'baño', 'grifo', 'jardín', 'vela', 'decoración'],
    },
    'Electronics & Appliances': {
      label: 'Electrónica y electrodomésticos',
      intro: 'Electrónica de consumo y electrodomésticos, un terreno donde la red de entrega e instalación de JD pesa de verdad.',
      covers: ['Electrónica de consumo', 'Pequeño electrodoméstico', 'Gran electrodoméstico'],
      imageAlt: 'Auriculares inalámbricos en su estuche abierto, una cafetera espresso de acero, un portátil y un robot aspirador',
      keywords: ['electrónica', 'móvil', 'teléfono', 'auriculares', 'altavoz', 'portátil', 'ordenador', 'tableta', 'cámara', 'televisor', 'electrodomésticos', 'aspiradora', 'robot aspirador', 'cafetera', 'cafetera espresso', 'batidora', 'purificador', 'secador'],
    },
    'Sports & Leisure': {
      label: 'Deporte y ocio',
      intro: 'Material outdoor, equipamiento deportivo, juguetes y aficiones. Las ventas siguen las estaciones y el calendario escolar tanto como las grandes campañas comerciales.',
      covers: ['Outdoor', 'Deporte', 'Juguetes', 'Papelería', 'Instrumentos'],
      imageAlt: 'Una zapatilla de trail, una raqueta con pelota de tenis, un ukelele y fichas de madera',
      keywords: ['deporte', 'outdoor', 'senderismo', 'camping', 'running', 'bicicleta', 'ciclismo', 'golf', 'tenis', 'esquí', 'fitness', 'yoga', 'juguete', 'juguetes', 'juego', 'juegos de mesa', 'papelería', 'material de oficina', 'instrumento', 'guitarra', 'piano'],
    },
    Pets: {
      label: 'Mascotas',
      intro: 'Alimentación, accesorios y equipamiento para los dueños de mascotas de las grandes ciudades chinas.',
      covers: ['Alimentación', 'Accesorios', 'Equipamiento'],
      imageAlt: 'Un comedero de cerámica con pienso, una correa de cuero y un juguete trenzado para gatos',
      keywords: ['mascota', 'mascotas', 'perro', 'gato', 'pienso', 'comida para mascotas', 'premios', 'arena', 'correa', 'acuario'],
    },
    Automotive: {
      label: 'Automoción',
      intro: 'Vehículos eléctricos, recambios y accesorios. El trabajo de fondo se hace en Dongchedi y Douyin, mucho antes de que el comprador entre en un concesionario.',
      covers: ['Vehículos eléctricos', 'Recambios', 'Accesorios'],
      imageAlt: 'Un conector de carga para coche eléctrico, un disco de freno de acero y una llave de coche',
      keywords: ['coche', 'coches', 'automoción', 'vehículo eléctrico', 'recambios', 'neumático', 'neumáticos', 'freno', 'moto', 'cargador'],
    },
    'Travel & Hospitality': {
      label: 'Turismo y hostelería',
      intro: 'Hoteles, destinos y los criterios con los que eligen los viajeros chinos.',
      covers: ['Hoteles', 'Destinos', 'Viajes de lujo'],
      imageAlt: 'Una maleta de cabina, un albornoz de hotel doblado con zapatillas y una tarjeta llave',
      keywords: ['viaje', 'viajes', 'turismo', 'hotel', 'hoteles', 'hostelería', 'destino', 'aerolínea', 'crucero', 'oficina de turismo'],
    },
    'B2B & Industrial': {
      label: 'B2B e industria',
      intro: 'Los compradores le encuentran por las fichas técnicas, los distribuidores y las ferias, rara vez por la publicidad. Bienes de equipo, componentes y sistemas para la edificación.',
      covers: ['Bienes de equipo', 'Componentes', 'Edificación'],
      imageAlt: 'Una válvula industrial de latón, engranajes de acero, un rodamiento y un tubo de cobre',
      keywords: ['industria', 'industrial', 'maquinaria', 'máquina', 'equipos', 'bienes de equipo', 'componentes', 'climatización', 'edificación', 'válvula', 'bomba', 'química', 'envases', 'embalaje', 'herramientas', 'sensor'],
    },
    'Financial & Professional Services': {
      label: 'Servicios financieros y profesionales',
      intro: 'La licencia decide qué puede ofrecer una empresa extranjera. Seguros, consultoría y formación parten de esa pregunta.',
      covers: ['Seguros', 'Consultoría', 'Formación'],
      imageAlt: 'Una pluma estilográfica sobre papel crema, un sello de piedra roja, unas gafas de lectura y una cartera de piel',
      keywords: ['seguros', 'banca', 'banco', 'finanzas', 'gestión patrimonial', 'consultoría', 'legal', 'abogado', 'contabilidad', 'educación', 'formación', 'escuela', 'universidad', 'software', 'servicios'],
    },
  },
};

TRENDS_COPY.fr = {
  // Shipped FR index copy, kept as editorial state (CLAUDE.md 6.2).
  seoTitle: 'Décryptages eCommerce et marketing en Chine | TheChinaPath',
  seoDescription:
    "Décryptages de l'eCommerce chinois, des plateformes et de la stratégie de marque. Signés par l'équipe qui pilote des marques sur Tmall, JD, Douyin et RED.",
  h1: 'La Chine, vue de l’intérieur.',
  lead: 'L’équipe qui pilote des marques sur Tmall, JD, Douyin, WeChat et RED prend la plume. Depuis Shanghai, Hong Kong et Paris. Jamais depuis un cabinet hors-sol.',
  ogAlt: 'Smartphone à l’écran rouge, anneau lumineux, enveloppes rouges et casque de livreur sur une table sombre',
  eyebrow: 'Tendances',
  ctaLatest: 'Voir les nouveautés',
  ctaIndustries: 'Lire par secteur',
  statArticles: 'articles',
  statPlatforms: 'plateformes suivies',
  statUpdated: 'mise à jour',
  cred: 'Une équipe qui pilote des marques en Chine depuis quinze ans.',
  latestEyebrow: 'À la une',
  latestH2: 'Les dernières parutions.',
  newFlag: 'Nouveau',
  archiveEyebrow: 'Tous les articles',
  archiveH2: 'Trouvez celui qu’il vous faut.',
  searchLabel: 'Rechercher un article',
  searchPlaceholder: 'Cherchez « livestream » ou « frais Tmall »',
  clearSearch: 'Effacer la recherche',
  quickLabel: 'Sujets fréquents',
  quick: [
    { label: 'Frais et coûts', q: 'coût' },
    { label: 'Livestream', q: 'livestream' },
    { label: 'Double 11', q: 'double 11' },
    { label: 'Transfrontalier', q: 'transfrontalier' },
    { label: 'Conformité', q: 'conformité' },
  ],
  categoryAria: 'Filtrer par catégorie',
  all: 'Tous',
  platformLabel: 'Plateforme',
  sortLabel: 'Tri',
  sortNewest: 'Plus récents',
  sortOldest: 'Plus anciens',
  showing: '{shown} articles affichés sur {total}',
  more: 'Afficher plus d’articles',
  empty: 'Aucun article ne répond à tous ces critères. Retirez un filtre.',
  clearFilters: 'Effacer les filtres',
  bandEyebrow: 'Décryptages sectoriels',
  bandH2: 'Vous vendez une catégorie précise ?',
  bandBody: 'Nos guides sectoriels chiffrent ce que coûte la vente en Chine et désignent, pour chaque catégorie, les canaux qui font vendre.',
  bandCta: 'Explorer par secteur',
  ctaEyebrow: 'Parlons-en',
  ctaH2: 'Un article vous fait réagir ?',
  ctaBody: 'Apportez-le : nous vous dirons ce qui a changé dans les boutiques depuis sa parution.',
  ctaContact: 'Prendre contact',
  minRead: (n) => `${n} min de lecture`,
  categories: {
    Platforms: 'Plateformes',
    'E-Commerce': 'eCommerce',
    'KOLs & Livestream': 'KOL et livestream',
    'Brand & Localization': 'Marque et localisation',
    'AI & Innovation': 'IA et innovation',
    'Market Strategy': 'Stratégie de marché',
    'Compliance & Setup': 'Conformité et implantation',
  },
};

TRENDS_COPY.de = {
  // Shipped DE index copy, kept as editorial state (CLAUDE.md 6.2).
  seoTitle: 'Analysen zu eCommerce und Marketing in China | TheChinaPath',
  seoDescription:
    'Analysen zu eCommerce, Plattformen und Markenstrategie in China. Vom Team, das Marken auf Tmall, JD, Douyin, WeChat und RED steuert.',
  h1: 'China, direkt aus dem Tagesgeschäft.',
  lead: 'Das Team, das Marken auf Tmall, JD, Douyin, WeChat und RED steuert, schreibt selbst. Aus Shanghai, Hongkong und Paris. Nie aus dem Elfenbeinturm.',
  ogAlt: 'Ein Smartphone mit rotem Bildschirm, ein Ringlicht, rote Umschläge und ein Kurierhelm auf dunklem Tisch',
  eyebrow: 'Trends',
  ctaLatest: 'Das Neueste lesen',
  ctaIndustries: 'Nach Branche lesen',
  statArticles: 'Artikel',
  statPlatforms: 'beobachtete Plattformen',
  statUpdated: 'aktualisiert',
  cred: 'Seit 15 Jahren führt unser Team Marken in China.',
  latestEyebrow: 'Neu erschienen',
  latestH2: 'Die jüngsten Beiträge.',
  newFlag: 'Neu',
  archiveEyebrow: 'Alle Artikel',
  archiveH2: 'Finden Sie den richtigen Artikel.',
  searchLabel: 'Artikel durchsuchen',
  searchPlaceholder: 'Etwa „Livestream“ oder „Tmall-Gebühren“',
  clearSearch: 'Suche löschen',
  quickLabel: 'Häufig gesucht',
  quick: [
    { label: 'Gebühren und Kosten', q: 'kosten' },
    { label: 'Livestream', q: 'livestream' },
    { label: 'Double 11', q: 'double 11' },
    { label: 'Cross-Border', q: 'cross-border' },
    { label: 'Compliance', q: 'compliance' },
  ],
  categoryAria: 'Nach Kategorie filtern',
  all: 'Alle',
  platformLabel: 'Plattform',
  sortLabel: 'Sortierung',
  sortNewest: 'Neueste zuerst',
  sortOldest: 'Älteste zuerst',
  showing: '{shown} von {total} Artikeln',
  more: 'Weitere Artikel laden',
  empty: 'Kein Artikel erfüllt alle Kriterien. Entfernen Sie einen Filter.',
  clearFilters: 'Filter zurücksetzen',
  bandEyebrow: 'Branchenanalysen',
  bandH2: 'Sie verkaufen eine bestimmte Kategorie?',
  bandBody: 'Unsere Branchenleitfäden beziffern, was der Verkauf in China kostet und über welche Kanäle er läuft.',
  bandCta: 'Nach Branche entdecken',
  ctaEyebrow: 'Sprechen Sie uns an',
  ctaH2: 'Fragen zu einem Artikel?',
  ctaBody: 'Bringen Sie ihn mit. Wir sagen Ihnen, was sich seither in den Shops geändert hat.',
  ctaContact: 'Gespräch vereinbaren',
  minRead: (n) => `${n} Min. Lesezeit`,
  categories: {
    Platforms: 'Plattformen',
    'E-Commerce': 'eCommerce',
    'KOLs & Livestream': 'KOL und Livestream',
    'Brand & Localization': 'Marke und Lokalisierung',
    'AI & Innovation': 'KI und Innovation',
    'Market Strategy': 'Marktstrategie',
    'Compliance & Setup': 'Compliance und Aufbau',
  },
};

TRENDS_COPY.es = {
  // Shipped ES index copy, kept as editorial state (CLAUDE.md 6.2).
  seoTitle: 'Análisis de eCommerce y marketing en China | TheChinaPath',
  seoDescription:
    'Análisis del eCommerce chino, las plataformas digitales y la estrategia de marca. Firmados por el equipo que pilota marcas en Tmall, JD, Douyin y RED.',
  h1: 'China, vista desde el terreno.',
  lead: 'Toma la palabra el equipo que lleva marcas en Tmall, JD, Douyin, WeChat y RED. Desde Shanghái, Hong Kong y París. Nunca desde un despacho lejos del mercado.',
  ogAlt: 'Un móvil con la pantalla roja, un aro de luz, sobres rojos y un casco de repartidor sobre una mesa oscura',
  eyebrow: 'Tendencias',
  ctaLatest: 'Ver lo último',
  ctaIndustries: 'Leer por sector',
  statArticles: 'artículos',
  statPlatforms: 'plataformas analizadas',
  statUpdated: 'actualizado',
  cred: 'Un equipo que lleva quince años gestionando marcas en China.',
  latestEyebrow: 'Novedades',
  latestH2: 'Lo más reciente del equipo.',
  newFlag: 'Nuevo',
  archiveEyebrow: 'Todos los artículos',
  archiveH2: 'Encuentre el que necesita.',
  searchLabel: 'Buscar artículos',
  searchPlaceholder: 'Busque «livestream» o «tarifas de Tmall»',
  clearSearch: 'Borrar la búsqueda',
  quickLabel: 'Temas frecuentes',
  quick: [
    { label: 'Tarifas y costes', q: 'cost' },
    { label: 'Livestream', q: 'livestream' },
    { label: 'Double 11', q: 'double 11' },
    { label: 'Transfronterizo', q: 'transfronterizo' },
    { label: 'Cumplimiento', q: 'cumplimiento' },
  ],
  categoryAria: 'Filtrar por categoría',
  all: 'Todos',
  platformLabel: 'Plataforma',
  sortLabel: 'Orden',
  sortNewest: 'Más recientes',
  sortOldest: 'Más antiguos',
  showing: '{shown} de {total} artículos',
  more: 'Cargar más artículos',
  empty: 'Ningún artículo cumple todos los criterios. Pruebe a quitar un filtro.',
  clearFilters: 'Quitar filtros',
  bandEyebrow: 'Análisis sectoriales',
  bandH2: '¿Vende una categoría concreta?',
  bandBody: 'Nuestras guías sectoriales cifran lo que cuesta vender en China y señalan los canales que funcionan en cada categoría.',
  bandCta: 'Explorar por sector',
  ctaEyebrow: 'Hablemos',
  ctaH2: '¿Quiere comentar alguno de estos artículos?',
  ctaBody: 'Tráigalo y le contaremos qué ha cambiado en las tiendas desde que se publicó.',
  ctaContact: 'Hable con nosotros',
  minRead: (n) => `${n} min de lectura`,
  categories: {
    Platforms: 'Plataformas',
    'E-Commerce': 'eCommerce',
    'KOLs & Livestream': 'KOL y livestream',
    'Brand & Localization': 'Marca y localización',
    'AI & Innovation': 'IA e innovación',
    'Market Strategy': 'Estrategia de mercado',
    'Compliance & Setup': 'Cumplimiento e implantación',
  },
};
