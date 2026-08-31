/**
 * Copy shape for /social-in-china and its locale twins.
 *
 * Same reasoning as the build-in-china shell: the page carries a large inline
 * stylesheet, a tab switcher and a filter, so the markup and behaviour live once
 * in src/components/pages/SocialInChina.astro and each locale supplies only this
 * object.
 */

export interface Platform {
  /** Stable across locales: drives tab ids, panel ids and the chip jump links. */
  key: 'wechat' | 'rednote' | 'douyin' | 'weibo';
  name: string;
  /** Chinese name, identical in every locale. */
  cn: string;
  logo: string;
  role: string;
  /** Brand tint for the tab and panel accent. Not copy. */
  tint: string;
  body: string;
  /** Funnel weight per stage. 2 = strongest, 1 = plays a part, 0 = barely shows. */
  weights: number[];
  /** 'Split' means the surface is shared between the two companies. */
  owner: 'Split' | 'TheRedScroll';
  image: string;
  alt: string;
}

export interface TailPlatform {
  name: string;
  cn: string;
  logo: string;
  who: string;
}

export interface SplitColumn {
  key: 'gmv' | 'audience';
  owner: string;
  title: string;
  metric: string;
  items: string[];
  why: string;
}

export interface SocialInChinaCopy {
  meta: { title: string; description: string };

  /** The five funnel stages named under each platform's weight meter. */
  stages: string[];

  hero: {
    crumbHome: string;
    crumbSection: string;
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    lead: string;
    bodyBefore: string;
    /** Canonical anchor text. Never paraphrase. */
    trsAnchor: string;
    bodyAfter: string;
    ctaPrimary: string;
    ctaSecondary: string;
    shotAria: string;
    shotCta: string;
    shotAlt: string;
    scrollAria: string;
    scrollLabel: string;
  };

  map: {
    eyebrow: string;
    title: string;
    lead: string;
    tablistAria: string;
    funnelTitle: string;
    ownerSplit: string;
    ownerTrs: string;
    ownerLink: string;
    tailTitle: string;
    tailBody: string;
  };
  platforms: Platform[];
  longTail: TailPlatform[];

  splitSection: {
    eyebrow: string;
    title: string;
    lead: string;
    testLabel: string;
    filterAria: string;
    filterBoth: string;
    filterGmv: string;
    filterAudience: string;
    note: string;
  };
  split: SplitColumn[];

  proof: {
    eyebrow: string;
    title: string;
    followersLabel: string;
    sameStoreLabel: string;
    blueLabel: string;
    source: string;
  };

  door: {
    eyebrow: string;
    title: string;
    bodyOneBefore: string;
    trsAnchor: string;
    bodyOneAfter: string;
    bodyTwo: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}
