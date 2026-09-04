/**
 * Copy shape for /compass and its four sub-pages, across every locale.
 *
 * The five pages share one vocabulary: the comparison table, the three steps,
 * the category list and the partner-type cards all appear on more than one
 * page. Keeping them in `facts` means a locale translates each string once and
 * every page that quotes it stays in step.
 *
 * Markup, styles and the shortlist form's behaviour live once in
 * src/components/pages/compass/*.astro. A locale supplies only this object,
 * which is what stops a locale from silently falling out of parity when the
 * English page gains a section.
 *
 * Provenance for the English strings is in docs/restructure/content-sources.md.
 */

export interface Labelled {
  label: string;
  body: string;
}

export interface Named {
  name: string;
  body: string;
}

/**
 * One visual row of a hero title. Concatenated in order, the rows read as the
 * page's H1 sentence; `style` only changes how a row is painted.
 */
export interface HeroTitleRow {
  text: string;
  style?: 'accent' | 'highlight';
}

/** One entry in the hero's stat strip. `counter` animates up to the value. */
export interface HeroStat {
  value: string;
  label: string;
  counter?: number;
  suffix?: string;
}

export interface CompassFacts {
  /** The line the build spec names first. */
  headline: string;
  problemBody: string[];
  /** Sits under the hero stat, next to the numeral 15. */
  yearsLabel: string;
  comparison: {
    eyebrow: string;
    title: string;
    /** Screen-reader-only header for the row-label column. */
    axisHeader: string;
    columnHeaders: { scraped: string; ours: string };
    rows: { label: string; scraped: string; ours: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    quote: string;
    items: Labelled[];
  };
  categories: string[];
  categoriesClosing: string;
  partnerTypes: Named[];
  profileFields: Named[];
  decidingQuestions: string[];
  failureStories: { kind: string; story: string }[];
  /** No referral fee from the partner side. Load-bearing, quoted on three pages. */
  noCommission: string;
  /** "Already a partner? Sign in at compass.thechinapath.com." */
  signInPrompt: { before: string; after: string };
}

export interface CompassIndexCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroAlt: string;
  /** Small badge pinned to the hero photo. */
  heroChip: string;
  /** Hero title split into painted rows; together they read as `h1`. */
  h1Rows: HeroTitleRow[];
  /** Stat strip under the hero actions. */
  heroStats: HeroStat[];
  /** Breadcrumb labels above the hero eyebrow. */
  crumbHome: string;
  crumbSection: string;
  /** Label on the hero's scroll cue. */
  scrollCue: string;
  problemEyebrow: string;
  /** Alt text for the warehouse photo beside the problem copy. */
  problemFigureAlt: string;
  /** One-line caption under the problem photo. */
  problemCaption: string;
  /** Alt text for the three step photos, in step order. */
  stepAlts: string[];
  coverageEyebrow: string;
  coverageTitle: string;
  coverageLead: string;
  /** Sublabel above the partner-type tiles. */
  whoLabel: string;
  /** Sublabel above the category chips. */
  categoriesLabel: string;
  readMoreEyebrow: string;
  readMoreTitle: string;
  readMoreCta: string;
  cards: { title: string; body: string }[];
  /** Alt text for the three read-more card photos, in card order. */
  cardAlts: string[];
  closingEyebrow: string;
  closingTitle: string;
  closingLead: string;
  closingCtaPrimary: string;
  closingCtaSecondary: string;
  /** WO-P4. One line under the closing lead pointing at the cost calculators.
   * Split around the link so each locale controls its own word order. */
  toolsLine?: { before: string; link: string; after: string };
}

export interface WhyVettedCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  questionEyebrow: string;
  questionTitle: string;
  questionPull: string;
  questionBody: string;
  storiesEyebrow: string;
  storiesTitle: string;
  figureAlt: string;
  figureCaption: string;
  storiesCost: string;
  buildingEyebrow: string;
  buildingTitle: string;
  buildingBody: string[];
  questionsEyebrow: string;
  questionsTitle: string;
  questionsLead: string;
  questionsCost: string;
  nextCtaPrimary: string;
  nextCtaSecondary: string;
}

export interface WhatIsInsideCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  whoEyebrow: string;
  whoTitle: string;
  whoLead: string;
  coverageLabel: string;
  fieldsEyebrow: string;
  fieldsTitle: string;
  fieldsLead: string;
  figureAlt: string;
  figureCaption: string;
  notProductEyebrow: string;
  notProductTitle: string;
  notProductBody: string[];
  /** Final paragraph, split so the app link can be rendered as an anchor. */
  notProductClosing: { before: string; after: string };
  nextCtaPrimary: string;
  nextCtaSecondary: string;
}

export interface HowItWorksCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Alt text for the hero photograph. */
  heroAlt: string;
  /** Small badge pinned to the hero photo. */
  heroChip: string;
  /** Hero title split into painted rows; together they read as `h1`. */
  h1Rows: HeroTitleRow[];
  /** Stat strip under the hero actions. */
  heroStats: HeroStat[];
  /** Breadcrumb labels above the hero eyebrow. */
  crumbHome: string;
  crumbSection: string;
  /** Label on the hero's scroll cue. */
  scrollCue: string;
  engagementEyebrow: string;
  engagementTitle: string;
  engagementLead: string;
  phases: { title: string; body: string }[];
  /** When each phase happens, shown beside it on the process track. */
  phaseWhen: string[];
  /** Alt text for the three phase photographs, in phase order. */
  phaseAlts: string[];
  optionsEyebrow: string;
  optionsTitle: string;
  options: { label: string; tagline: string; body: string }[];
  optionsNote: string;
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  figureAlt: string;
  figureCaption: string;
  deliverables: Named[];
  /** Alt text for the warm-introduction photograph. */
  introAlt: string;
  limitsEyebrow: string;
  limitsTitle: string;
  limitsBody: string[];
  pricingEyebrow: string;
  pricingTitle: string;
  pricingBody: string[];
  /** Paragraph that opens with the no-commission line in bold. */
  pricingCommissionTail: string;
  timingEyebrow: string;
  timingTitle: string;
  timing: Labelled[];
  nextCtaPrimary: string;
  nextCtaSecondary: string;
}

export interface ShortlistCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  formTitle: string;
  fields: {
    name: string;
    email: string;
    company: string;
    website: string;
    category: string;
    categoryPlaceholder: string;
    categoryOther: string;
    stage: string;
    message: string;
    messagePlaceholder: string;
    captchaBefore: string;
    captchaAfter: string;
    honeypot: string;
  };
  stages: string[];
  submit: string;
  submitting: string;
  consent: string;
  asideEyebrow: string;
  asideTitle: string;
  errors: {
    captcha: string;
    required: string;
    message: string;
    network: string;
  };
  success: string;
}

export interface CompassCopy {
  facts: CompassFacts;
  index: CompassIndexCopy;
  whyVetted: WhyVettedCopy;
  whatIsInside: WhatIsInsideCopy;
  howItWorks: HowItWorksCopy;
  shortlist: ShortlistCopy;
}
