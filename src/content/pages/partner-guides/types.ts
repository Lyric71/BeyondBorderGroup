/**
 * Copy shape for the three "Finding a ..." guides under /compass
 * (distributor, Tmall Partner, Douyin Partner). English only for now.
 *
 * Every guide runs the same order: the short answer first (the query answered
 * inside the first 60 words), then who you are hiring, where brands look, the
 * checks, the money, what goes wrong, how Compass does it, FAQ, closing CTA.
 * Markup and styles live once in src/components/pages/compass/PartnerGuide.astro.
 */
import type { PartnerGuideKey } from '../../../lib/partner-guides';
import type { GuideLocale } from './ui';
import type { HeroStat, HeroTitleRow, Labelled, Named } from '../compass/types';

/** A real table: the first cell of each row is the row header. */
export interface GuideTable {
  headers: string[];
  rows: string[][];
}

interface Section {
  eyebrow: string;
  title: string;
  intro?: string;
}

export interface PartnerGuideCopy {
  key: PartnerGuideKey;
  /** Omitted on the English copies. FR, DE and ES copies live in fr/, de/, es/. */
  locale?: GuideLocale;
  title: string;
  description: string;
  /** Last breadcrumb, also the schema name of the page. */
  crumb: string;
  /** Review date shown under the short answer and sent as dateModified, e.g. 'September 24, 2026'. */
  reviewed: string;
  /** ISO form of `reviewed`, required outside English (a localized date will not parse). */
  reviewedIso?: string;
  hero: {
    eyebrow: string;
    rows: HeroTitleRow[];
    lead: string;
    image: { src: string; alt: string };
    stats: HeroStat[];
    primary: string;
    secondary: string;
  };
  answer: Section & { body: string[] };
  role: Section & { items: Named[] };
  routes: Section & { table: GuideTable };
  checks: Section & { table: GuideTable };
  terms: Section & {
    table: GuideTable;
    note?: string;
    link?: { label: string; href: string };
    /** Mark the third column as the "what to watch" column. English infers it from the header. */
    warnColumn?: boolean;
  };
  /** `image` sits beside the failure list; a photograph of the failure, not a person. */
  mistakes: Section & { items: Named[]; image: { src: string; alt: string } };
  compass: Section & { lead: string; steps: Labelled[]; timing: string };
  faq: Section & { items: { q: string; a: string }[] };
  closing: Section & { lead: string; primary: string; secondary: string };
}
