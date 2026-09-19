import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const INSIGHT_CATEGORIES = [
  'Platforms',
  'E-Commerce',
  'KOLs & Livestream',
  'Brand & Localization',
  'AI & Innovation',
  'Market Strategy',
  'Compliance & Setup',
] as const;

export const INSIGHT_PLATFORMS = [
  'WeChat',
  'Douyin',
  'Tmall',
  'Taobao',
  'JD',
  'Xiaohongshu',
  'Weibo',
  'Kuaishou',
  'Alipay',
] as const;

/**
 * Sector an insight is written for. Set it only when the article is about one
 * vertical (a "what it costs to sell X" Ledger, a brand teardown, a category
 * guide). Articles without it are cross-industry and list on /insights
 * (Trends); articles with it list on /insights/industries. The list is sized
 * for the editorial plan's category series, so most entries fill up over the
 * year; the page hides any industry with no published article.
 */
export const INSIGHT_INDUSTRIES = [
  'Beauty & Personal Care',
  'Fashion & Luxury',
  'Food & Beverage',
  'Health & Wellness',
  'Mother & Baby',
  'Home & Living',
  'Electronics & Appliances',
  'Sports & Leisure',
  'Pets',
  'Automotive',
  'Travel & Hospitality',
  'B2B & Industrial',
  'Financial & Professional Services',
] as const;

export type InsightIndustry = (typeof INSIGHT_INDUSTRIES)[number];

/** URL fragment for an industry, used as the section anchor on /insights/industries. */
export function industrySlug(industry: InsightIndustry): string {
  return industry
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Shared base fields for insights. The only locale-specific field is
// `legacyUrl`: it preserves the old WordPress URL (always English) for
// documentation and to power the 301 redirect plan. Carrying it on FR
// frontmatter would point a French page at an English URL, which is
// confusing for future editors. EN-only.
const insightBaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('TheChinaPath'),
  category: z.enum(INSIGHT_CATEGORIES),
  industry: z.enum(INSIGHT_INDUSTRIES).optional(),
  platforms: z.array(z.enum(INSIGHT_PLATFORMS)).default([]),
  tags: z.array(z.string()).default([]),
  /** Short bullet list rendered above the article body. AI engines extract these. */
  keyTakeaways: z.array(z.string()).default([]),
  heroImage: z.string(),
  heroImageAlt: z.string().default(''),
  /**
   * A signed opinion column by the CEO. Lists the piece on
   * /insights/ceo-opinion as well as its usual hub. Set it by hand on pieces
   * that argue a position; a news explainer the CEO happened to write stays
   * off the column even when `author` is "Cyril Drouin".
   */
  column: z.boolean().default(false),
  draft: z.boolean().default(false),
});

const insightEnSchema = insightBaseSchema.extend({
  /** Original WordPress URL. Used only for documentation; redirects live in astro.config.mjs. */
  legacyUrl: z.string().optional(),
});

const insightFrSchema = insightBaseSchema;

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: insightEnSchema,
});

const insightsFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-fr' }),
  schema: insightFrSchema,
});

const insightsDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-de' }),
  schema: insightFrSchema,
});

const insightsEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-es' }),
  schema: insightFrSchema,
});

/** WO-P5. Client sector, used by the industry filter on /work. Stored as the
 * English key in every locale; the index pages carry the translated labels. */
export const CASE_INDUSTRIES = [
  'Automotive',
  'Beauty & Personal Care',
  'Food & Beverage',
  'Hospitality & Travel',
  'Home & Design',
  'Financial Services',
  'Healthcare',
  'Fashion & Footwear',
  'Digital Services',
] as const;

const caseBaseSchema = z.object({
  brand: z.string(),
  title: z.string(),
  summary: z.string(),
  category: z.enum([
    'Brand & Design',
    'Social & Content',
    'eCommerce',
    'Website',
    'Distribution',
    'Training',
  ]),
  industry: z.enum(CASE_INDUSTRIES).optional(),
  services: z.array(z.string()).default([]),
  /** Short outcome line shown on /work cards. Specific numbers preferred. */
  metric: z.string().optional(),
  heroImage: z.string(),
  heroImageAlt: z.string().default(''),
  images: z
    .array(
      z.object({
        src: z.string(),
        alt: z.string().default(''),
        caption: z.string().optional(),
      }),
    )
    .default([]),
  order: z.number().default(100),
  draft: z.boolean().default(false),
});

const caseEnSchema = caseBaseSchema.extend({
  /** Original WordPress `/case-study/<slug>` URL. EN-only, doc-only. */
  legacyUrl: z.string().optional(),
});

const caseFrSchema = caseBaseSchema;

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: caseEnSchema,
});

const casesFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases-fr' }),
  schema: caseFrSchema,
});

const casesDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases-de' }),
  schema: caseFrSchema,
});

const casesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases-es' }),
  schema: caseFrSchema,
});

/** Printable assets from the editorial plan (checklists, run sheets,
 * calendars). Written by the pipeline in `editorial/`, English only, rendered
 * at `/guides/<slug>/`. Each one belongs to an Anchor insight. */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('TheChinaPath'),
    /** The asset format from the brief: "Printable checklist", "Day-by-day run sheet", ... */
    format: z.string().optional(),
    /** Slug of the insight this asset was published with. */
    relatedInsight: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  insights,
  insightsFr,
  insightsDe,
  insightsEs,
  guides,
  cases,
  casesFr,
  casesDe,
  casesEs,
};
