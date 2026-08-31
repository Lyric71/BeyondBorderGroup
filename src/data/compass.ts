/**
 * Compass facts, ported once and shared.
 *
 * WO-2.1 moves the Compass marketing pages onto TheChinaPath. The lines the
 * build spec names in section 3.4 are ported verbatim and live here so the
 * homepage block, the five /compass pages and /enter-china/distribution all
 * quote the same strings rather than drifting apart.
 *
 * Provenance for every string is in docs/restructure/content-sources.md.
 * Source repo path is BearingBridgeCompass/src/content/marketing/en.tsx unless
 * noted otherwise.
 *
 * Two rules applied on the way across:
 *  - the retired brand name does not travel. "Bearing Bridge Compass" becomes
 *    "Compass" everywhere, including inside ported strings where it appeared as
 *    a subject.
 *  - no figure appears here that is not traceable to a repo file. The public
 *    partner count is deliberately absent, see PARTNER_COUNT below.
 */

/**
 * The public "vetted partners on file" figure is NOT static in the source repo.
 * It is a database read: getVettedPartnersCount() in
 * BearingBridgeCompass/src/lib/settings.ts:34 reads the SiteSetting row keyed
 * `vetted_partners_count`. The 529 in that file is the unreachable-database
 * fallback, not a verified count.
 *
 * TheChinaPath is a static build with no database access, so the number has to
 * be frozen by hand. Until someone reads the live row and records the value and
 * the date here, every Compass surface ships without a count. Do not guess it.
 *
 * To fill this in: query the SiteSetting table, set the value, set the date,
 * and the count renders everywhere it is referenced.
 */
export const PARTNER_COUNT: { value: number; verifiedOn: string } | null = null;

/** Label for the count, if and when it is filled in. Source: en.tsx:18. */
export const PARTNER_COUNT_LABEL = 'Vetted partners on file';

/**
 * Years spent building the database. Source: en.tsx:76 (comparison row) and
 * :84 / page.tsx:373 (the stat). Note the project decision recorded in
 * docs/restructure/recon.md: fifteen is the number the whole group uses now,
 * for the bench and for the database. Nothing says twenty.
 */
export const YEARS = 15;
export const YEARS_LABEL = 'Years on the ground';

/** The line the spec names first. Source: en.tsx:23. Ported verbatim. */
export const HEADLINE = 'A contact list tells you who exists. We tell you who fits.';

/** Problem-section body. Source: en.tsx:26-33. Ported verbatim. */
export const PROBLEM_BODY = [
  'Google "China distributor database" and what comes back is a stack of scraped lists with a contact form bolted on the front. A thousand names by lunchtime, almost none of them right for your brand.',
  "We've watched brands sign with a name lifted straight off one of those lists. Four months in, they find out the partner has never really run their category. Or that the warehouse they toured was rented for the morning.",
  'The damage almost never stays inside the year. Lost shelf. A brand rebuild nobody budgeted for. A launch window that will not come around again.',
];

/**
 * The four-row comparison table. Source: en.tsx:58-86, all four rows verbatim.
 * The right-hand column header is renamed from the retired brand to "Compass".
 */
export const COMPARISON = {
  eyebrow: 'How we are different',
  title: 'A database, not another directory',
  columnHeaders: { scraped: 'Scraped directories', ours: 'Compass' },
  rows: [
    {
      label: 'How names get added',
      scraped: 'Bulk uploads, scraped from public sources',
      ours: 'One meeting at a time',
    },
    {
      label: 'What we actually know about them',
      scraped: 'A company name. Maybe an email.',
      ours: 'Real categories, real volume, payment terms and fit for your brand',
    },
    {
      label: 'Years spent building it',
      scraped: 'A few months',
      ours: 'Fifteen',
    },
    {
      label: 'What you walk away with',
      scraped: 'A list of maybes',
      ours: 'A shortlist worth meeting',
    },
  ],
};

/** The three-step sequence. Source: en.tsx:38-57. Bodies ported verbatim. */
export const STEPS = {
  eyebrow: 'How it works',
  title: 'You brief us. We come back with the shortlist.',
  quote:
    'Finding the right partner in China usually swallows a quarter. We start with the answer.',
  items: [
    {
      label: 'The brief',
      body: "Half an hour to an hour, on a call. Your category, your stage and what you're really trying to pull off in China. A cross-border test. A domestic launch. The quiet replacement of a distributor who's stopped picking up the phone. Sometimes something we've never seen before, which is fine too.",
    },
    {
      label: 'The shortlist',
      body: 'We come back with a map of who actually operates in your space, plus three to five partners worth meeting. Each one with a short brief: strengths, weak spots and where to push when you sit down to negotiate.',
    },
    {
      label: 'The introductions',
      body: 'Most of these partners already know us. You walk in with a relationship behind you, which usually puts the A-team in the room rather than the pitch team.',
    },
  ],
};

/** Categories covered. Source: en.tsx:307-317, the structured list. */
export const CATEGORIES = [
  'Beauty',
  'Food and beverage',
  'Fashion',
  'Home',
  'Wellness',
  'Mother and baby',
  'Pet',
  'Supplements',
];
export const CATEGORIES_CLOSING = 'Mostly B2C, with B2B when the buyer is in China.';

/** Who is in the database. Source: en.tsx:285-305. */
export const PARTNER_TYPES = [
  {
    name: 'Distributors',
    body: 'National and regional players, across general trade, bonded zones and cross-border eCommerce.',
  },
  {
    name: 'TPs',
    body: 'Tmall and Douyin Partners running flagship stores, content commerce and livestream.',
  },
  {
    name: 'Importers',
    body: 'Licenses, customs setup and warehousing for general trade and the bonded zone.',
  },
  {
    name: 'Offline operators',
    body: 'KA buyers, regional wholesalers and group-buying operators with real shelf access.',
  },
];

/** The nine profile field groups. Source: en.tsx:320-360. */
export const PROFILE_FIELDS = [
  { name: 'Company basics', body: 'Legal entity, headquarters, team size, ownership.' },
  {
    name: 'Real categories',
    body: "Not what their website says. The categories we've actually seen them run.",
  },
  {
    name: 'Channels with real volume',
    body: 'Tmall, JD, Douyin, Pinduoduo, Xiaohongshu, offline, cross-border. Which ones are core and which they only dip into.',
  },
  {
    name: 'Footprint',
    body: 'Cities, provinces, warehouses and where the sales team actually sits.',
  },
  {
    name: 'Commercial terms',
    body: 'Margin, exclusivity, payment terms, MOQs, marketing contribution.',
  },
  {
    name: 'Operational capacity',
    body: 'Volume they can realistically handle. Lead times. Customer service. Returns.',
  },
  {
    name: "Brands they've worked with",
    body: 'Past and present, wherever we have direct visibility.',
  },
  {
    name: 'Reputation signals',
    body: "What other brands actually say about them, on the record and off. Where they've succeeded, where they've come up short.",
  },
  { name: 'Our view', body: 'Recommend, recommend with caveats, avoid, or only-if-X.' },
];

/** The six questions that decide a partnership. Source: en.tsx:220-227. */
export const DECIDING_QUESTIONS = [
  'Cross-border or domestic?',
  'Tmall, JD, Douyin or offline retail?',
  'Which categories do they really run, versus the ones listed on their website?',
  'Will they take exclusivity?',
  'How do they pay, and how fast?',
  'Have we seen them succeed with a brand like yours, or seen them fail with one?',
];

/** The three failure stories. Source: en.tsx:182-198. */
export const FAILURE_STORIES = [
  {
    kind: 'The distributor',
    story:
      'Looked the part on paper. Pitched beautifully. Then sat on the inventory for eighteen months while the brand quietly lost its launch window.',
  },
  {
    kind: 'The TP',
    story:
      'Promised flagship-grade operations. Had never actually run the category. We worked that out at month four, by which point the listings were already burned.',
  },
  {
    kind: 'The importer',
    story:
      'Warehouse, trucking, customs, all squared away. No real ability to sell anything to anyone. Pallets in. Pallets stayed.',
  },
];

/**
 * The commission line. Source is TheChinaPath's own distribution page, not
 * Compass: src/pages/enter-china/distribution.astro:19. The build spec quotes
 * it as "Zero commission"; the repo says "No commission" and the repo wins.
 */
export const NO_COMMISSION = 'No commission from distributors. Ever.';

/**
 * The authenticated application. Content lives on thechinapath.com as paths.
 * The app is noindex by definition, so it sits on its own subdomain and there
 * is deliberately no /compass/login path that would add a redirect hop.
 */
export const APP_URL = 'https://compass.thechinapath.com';
