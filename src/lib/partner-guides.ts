/**
 * The "Finding a partner" guide family: three English pages under /compass
 * that answer the query a brand types before it ever hears of Compass
 * (distributor, Tmall Partner, Douyin Partner), plus the insight tag that
 * feeds the "Insights" list under Find a partner in the header.
 *
 * Any insight whose English frontmatter carries PARTNER_INSIGHT_TAG in `tags`
 * lists in that menu group and in the "Keep reading" strip at the foot of each
 * guide. The editorial pipeline sets it on every piece of the partner cluster
 * (see editorial/plans/compass-partner-cluster.md).
 */
export const PARTNER_INSIGHT_TAG = 'Finding a partner';

export type PartnerGuideKey = 'distributor' | 'tp' | 'dp';

export interface PartnerGuideLink {
  key: PartnerGuideKey;
  path: string;
  label: string;
  /** The guide's 25-word excerpt, for guide cards. */
  line: string;
  /** The channel the partner opens, shown as "Best for" and in the hub chooser. */
  channel: string;
  image: { src: string; alt: string };
}

export const PARTNER_GUIDES: PartnerGuideLink[] = [
  {
    key: 'distributor',
    path: '/compass/find-a-distributor-in-china',
    label: 'Finding a distributor',
    line: 'The distributor worth signing sells your category to the retailers you want. Where brands find candidates, eight checks before signing, and which terms to settle.',
    channel: 'Online and offline retail',
    image: {
      src: '/Images/compass/channel-offline.webp',
      alt: 'A distributor rep and a store buyer crouched at a supermarket shelf, checking placement',
    },
  },
  {
    key: 'tp',
    path: '/compass/find-a-tmall-partner-in-china',
    label: 'Finding a Tmall Partner (TP)',
    line: 'A Tmall Partner runs your store daily. What TPs do, how they’re paid, seven checks to run from a laptop, and where contracts go wrong.',
    channel: 'Tmall or Tmall Global',
    image: {
      src: '/Images/compass/channel-store.webp',
      alt: 'Two eCommerce operators at a desk in Hangzhou, one pointing at a screen of product listings',
    },
  },
  {
    key: 'dp',
    path: '/compass/find-a-douyin-partner-in-china',
    label: 'Finding a Douyin Partner (DP)',
    line: 'A Douyin Partner runs your shop and live rooms. What DPs cost, how to judge one from its streams, and which accounts must stay yours.',
    channel: 'Douyin live and short video',
    image: {
      src: '/Images/compass/channel-social.webp',
      alt: 'A livestream host talking to a phone on a tripod under a ring light, product samples lined up in front of her',
    },
  },
];

/**
 * The reading list lives at /insights/finding-a-partner (English) and at the
 * native slug of each locale's insights tree (see slugMap in src/i18n/utils.ts).
 */
export const PARTNER_HUB_PATH = '/insights/finding-a-partner';

type PartnerLocale = 'en' | 'fr' | 'de' | 'es';

const INSIGHT_COLLECTION = { en: 'insights', fr: 'insightsFr', de: 'insightsDe', es: 'insightsEs' } as const;
const INSIGHT_BASE = { en: '/insights', fr: '/fr/decryptages', de: '/de/analysen', es: '/es/analisis' } as const;

/**
 * Partner articles for a locale, newest first. Membership is decided on the
 * English file (the only one that carries PARTNER_INSIGHT_TAG); a locale lists
 * the translated twin when it exists. `enTags` are the English tags, which is
 * what the hub's topic chips read in every locale.
 */
export async function getPartnerInsights(locale: PartnerLocale) {
  const { getCollection } = await import('astro:content');
  const { insightEnToFr, insightEnToDe, insightEnToEs } = await import('../i18n/insight-slugs.mjs');
  const english = (
    await getCollection('insights', ({ data }) => !data.draft && data.tags.includes(PARTNER_INSIGHT_TAG))
  ).sort((a, b) => (b.data.pubDate?.valueOf() ?? 0) - (a.data.pubDate?.valueOf() ?? 0));

  if (locale === 'en') {
    return english.map((p) => ({ id: p.id, data: p.data, body: p.body, href: `/insights/${p.id}`, enTags: p.data.tags }));
  }
  const map = ({ fr: insightEnToFr, de: insightEnToDe, es: insightEnToEs } as Record<string, Record<string, string>>)[locale];
  const twins = new Map(
    (await getCollection(INSIGHT_COLLECTION[locale], ({ data }) => !data.draft)).map((p) => [p.id, p]),
  );
  // FR and ES files are named with their native slug; German files keep the
  // English file name and take their native slug from the map (the same rule
  // as src/pages/de/analysen/[...slug].astro). Either way the URL uses the
  // native slug.
  return english.flatMap((p) => {
    const slug = map[p.id];
    if (!slug) return [];
    const twin = twins.get(locale === 'de' ? p.id : slug);
    return twin
      ? [{ id: twin.id, data: twin.data, body: twin.body, href: `${INSIGHT_BASE[locale]}/${slug}`, enTags: p.data.tags }]
      : [];
  });
}
