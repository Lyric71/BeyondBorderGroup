/**
 * Copy shape for /build-in-china and its locale twins.
 *
 * The page carries a large inline stylesheet and an interactive picker. Copying
 * all of that per locale would mean maintaining four copies of the same CSS, so
 * the markup, styles and behaviour live once in
 * src/components/pages/BuildInChina.astro and each locale supplies only this
 * object.
 *
 * Every locale file must satisfy this type, which is what stops a locale from
 * quietly falling out of parity when the English page gains a section.
 */

export interface Gap {
  /** Stable across locales: used for the accordion's aria-controls id. */
  id: 'content' | 'ux' | 'baidu' | 'ai' | 'infra';
  icon: string;
  tag: string;
  title: string;
  body: string;
  /** Only the Baidu gap carries a source line. */
  cite?: string;
}

export interface ScanRow {
  label: string;
  to: number;
  decimals: number;
  suffix: string;
  note: string;
  pct: number;
  tone: 'bad' | 'warn';
}

export interface IcpStep {
  step: string;
  detail: string;
}

export interface PickerQuestion {
  q: string;
  /** Which surface a "yes" points at. Not translated. */
  yes: 'mp' | 'site';
  hint: string;
}

export interface Surface {
  key: 'mp' | 'site';
  name: string;
  /** Chinese term, identical in every locale. */
  cn: string;
  blurb: string;
  right: string[];
  wrong: string[];
}

export interface BuildInChinaCopy {
  meta: { title: string; description: string };

  hero: {
    crumbHome: string;
    crumbSection: string;
    eyebrow: string;
    /** Split around the emphasised word so the accent colour lands correctly. */
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    lead: string;
    bodyBefore: string;
    /** Canonical anchor text. Never paraphrase this string. */
    cwfAnchor: string;
    bodyAfter: string;
    ctaPrimary: string;
    ctaSecondary: string;
    shotAria: string;
    shotCta: string;
    shotAlt: string;
    scrollAria: string;
    scrollLabel: string;
  };

  gapsSection: {
    eyebrow: string;
    title: string;
    lead: string;
    hint: string;
    figureAlt: string;
    figureCaption: string;
  };
  gaps: Gap[];

  icp: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: IcpStep[];
    figureAlt: string;
    figureCaption: string;
    unlockTitle: string;
    unlocks: string[];
    trapTitle: string;
    trapBody: string;
    trapKicker: string;
  };

  choose: {
    figureAlt: string;
    figureCaption: string;
    eyebrow: string;
    title: string;
    lead: string;
    questions: PickerQuestion[];
    yes: string;
    no: string;
    reset: string;
    verdictEyebrow: string;
    verdictEmptyTitle: string;
    verdictEmptyBody: string;
    /** Rendered by the picker script as the recommendation firms up. */
    verdictMp: string;
    verdictMpBody: string;
    verdictSite: string;
    verdictSiteBody: string;
    verdictEven: string;
    verdictEvenBody: string;
    /** Shown once some but not all questions are answered. */
    verdictPartial: string;
    verdictPartialBody: string;
    meterLeft: string;
    meterRight: string;
    rule: string;
    surfaces: Surface[];
    rightWhen: string;
    wrongWhen: string;
  };

  proof: {
    eyebrow: string;
    title: string;
    loadLabel: string;
    bounceLabel: string;
    source: string;
  };

  door: {
    eyebrow: string;
    title: string;
    bodyOneBefore: string;
    cwfAnchor: string;
    bodyOneAfter: string;
    bodyTwo: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scanAria: string;
    scanTitle: string;
    scanLive: string;
    scanRows: ScanRow[];
    scanAiLabel: string;
    scanAiValue: string;
    scanAiNote: string;
    scanFoot: string;
  };
}
