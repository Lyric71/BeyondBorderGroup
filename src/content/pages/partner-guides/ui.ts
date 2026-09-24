/**
 * Interface strings for the "Finding a partner" guide template and the
 * partner reading list, per locale. The guides' own copy lives in the copy
 * objects (English at the root of this folder, other locales in fr/, de/, es/);
 * this file holds only the words the templates print around that copy.
 *
 * Every locale block is a native rewrite, not a word swap (.claude/CLAUDE.md
 * section 6). Brand and product names (Compass, Tmall, Douyin, TP, DP) stay
 * as they are.
 */
import type { PartnerGuideKey } from '../../../lib/partner-guides';
import { ui as deUi } from './de/ui';
import { ui as frUi } from './fr/ui';
import { ui as esUi } from './es/ui';

export type GuideLocale = 'en' | 'fr' | 'de' | 'es';

export interface GuideUi {
  /** BCP 47 tag for dates and schema.org inLanguage. */
  dateLocale: string;
  home: string;
  findPartner: string;
  scroll: string;
  onThisPage: string;
  chapters: { answer: string; who: string; where: string; checks: string; mistakes: string; compass: string; faq: string };
  tag30s: string;
  /** "Last reviewed {date}, by TheChinaPath's Compass team" around the date. */
  reviewedBefore: string;
  reviewedAfter: string;
  guideCoversAria: string;
  whatsInGuide: string;
  previous: string;
  next: string;
  ourRoute: string;
  /** "{done} of {total} checked" around the two numbers. */
  meterOf: string;
  meterChecked: string;
  meterHint: string;
  meterWin: string;
  meterReset: string;
  termSheet: string;
  draftStamp: string;
  factPaid: string;
  exploreCompass: string;
  howWeWork: string;
  askTitle: string;
  askBody: string;
  keepReading: string;
  moreTitle: string;
  kindGuide: string;
  readGuide: string;
  kindInsight: string;
  readArticle: string;
  kindInsights: string;
  hubTitle: string;
  hubLine: string;
  seeAll: string;
  closingNames: string;
  closingIntros: string;
  closingNoCommission: string;
  stepAlts: [string, string, string];
  /** Guide card text, keyed by guide. `label` reads "Finding a ..." and is followed by inChina. */
  guides: Record<PartnerGuideKey, { label: string; line: string; channel: string }>;
  inChina: string;
  hub: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    lead: string;
    readArticles: string;
    statArticles: string;
    statMinutes: string;
    statLatest: string;
    articlesEyebrow: string;
    articlesTitle: string;
    /** "Newest first. Last added {date}." around the date. */
    freshBefore: string;
    freshAfter: string;
    empty: string;
    filterAria: string;
    all: string;
    topics: { distributors: string; tp: string; dp: string; contracts: string; checks: string; managing: string };
    latest: string;
    minRead: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

const en: GuideUi = {
  dateLocale: 'en-US',
  home: 'Home',
  findPartner: 'Find a partner',
  scroll: 'Scroll',
  onThisPage: 'On this page',
  chapters: {
    answer: 'Short answer',
    who: 'Who you hire',
    where: 'Where to look',
    checks: 'The checks',
    mistakes: 'What goes wrong',
    compass: 'How we do it',
    faq: 'FAQ',
  },
  tag30s: 'The 30-second version',
  reviewedBefore: 'Last reviewed',
  reviewedAfter: ', by TheChinaPath’s Compass team',
  guideCoversAria: 'What this guide covers',
  whatsInGuide: 'What’s in this guide',
  previous: 'Previous',
  next: 'Next',
  ourRoute: 'Our route',
  meterOf: 'of',
  meterChecked: 'checked',
  meterHint: 'Check each one off as you go. Your progress stays in this browser.',
  meterWin: 'All done. On to the terms.',
  meterReset: 'Clear my checks',
  termSheet: 'Term sheet',
  draftStamp: 'Draft',
  factPaid: 'We’re paid by the brands we work for, and only by them. Nobody on your shortlist bought the spot.',
  exploreCompass: 'Explore Compass',
  howWeWork: 'How we work',
  askTitle: 'Got a question we missed?',
  askBody: 'Ask it on the first call, and we’ll give you a straight answer.',
  keepReading: 'Keep reading',
  moreTitle: 'More on finding a partner in China',
  kindGuide: 'Guide',
  readGuide: 'Read the guide',
  kindInsight: 'Insight',
  readArticle: 'Read the article',
  kindInsights: 'Insights',
  hubTitle: 'All articles on finding a partner',
  hubLine: 'Everything we’ve published on finding a partner in China.',
  seeAll: 'See them all',
  closingNames: 'Three to five names, each with a note on what it does well and where it falls short.',
  closingIntros: 'Introductions to companies that already know us.',
  closingNoCommission: 'No commission from partners, ever.',
  stepAlts: [
    'Brand manager taking handwritten notes during a video call brief',
    'Consultant marking a route across a map of China beside printed partner profiles',
    'Brand manager shaking hands with a distribution executive in a Shanghai meeting room',
  ],
  guides: {
    distributor: {
      label: 'Finding a distributor',
      line: 'The distributor worth signing sells your category to the retailers you want. Where brands find candidates, eight checks before signing, and which terms to settle.',
      channel: 'Online and offline retail',
    },
    tp: {
      label: 'Finding a Tmall Partner (TP)',
      line: 'A Tmall Partner runs your store daily. What TPs do, how they’re paid, seven checks to run from a laptop, and where contracts go wrong.',
      channel: 'Tmall or Tmall Global',
    },
    dp: {
      label: 'Finding a Douyin Partner (DP)',
      line: 'A Douyin Partner runs your shop and live rooms. What DPs cost, how to judge one from its streams, and which accounts must stay yours.',
      channel: 'Douyin live and short video',
    },
  },
  inChina: 'in China',
  hub: {
    title: 'Finding a partner in China | TheChinaPath',
    description:
      'How to choose and vet a China distributor, Tmall Partner, or Douyin Partner, and what to sign. From the team that builds our Compass shortlists.',
    eyebrow: 'Find a partner · Insights',
    h1: 'Finding a partner in China',
    lead: 'How to pick a distributor, a Tmall Partner, or a Douyin Partner in China, and check one before you sign. From the team behind Compass.',
    readArticles: 'Read the articles',
    statArticles: 'Articles',
    statMinutes: 'Minutes of reading',
    statLatest: 'Latest',
    articlesEyebrow: 'Insights',
    articlesTitle: 'Every article on finding a partner',
    freshBefore: 'Newest first. Last added',
    freshAfter: '.',
    empty: 'More pieces are on the way. The three guides in the menu are the place to start.',
    filterAria: 'Filter by topic',
    all: 'All',
    topics: {
      distributors: 'Distributors',
      tp: 'Tmall Partners',
      dp: 'Douyin Partners',
      contracts: 'Contracts and terms',
      checks: 'Due diligence',
      managing: 'Managing a partner',
    },
    latest: 'Latest',
    minRead: 'min read',
    ctaEyebrow: 'Get in touch',
    ctaTitle: 'Not sure which partner you need?',
    ctaBody:
      'Tell us what you sell and where. On the first call we’ll say which kind of partner fits, and whether we have one on file. Our fees are project-based and quoted after that call.',
    ctaPrimary: 'Get a shortlist',
    ctaSecondary: 'See how we work',
  },
};

/**
 * FR, DE and ES start as the English block and are replaced by their native
 * versions. A locale route only exists once its block and its copy objects
 * are translated, so an English fallback never reaches a reader.
 */
export const GUIDE_UI: Record<GuideLocale, GuideUi> = {
  en,
  fr: frUi,
  de: deUi,
  es: esUi,
};
