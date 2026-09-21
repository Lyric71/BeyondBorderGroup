/**
 * Copy for the "How we work" page. The markup, styles and scripts live in
 * src/components/HowWeWork.astro; each locale ships one of these objects.
 * Hrefs are canonical English paths: the component localizes them.
 * RACI cells use 'L' (leads) and 'S' (supports); any other string is a note.
 */
export type PartyKey = 'you' | 'us' | 'tp' | 'logistics' | 'offline';

export interface Party {
  name: string;
  hint?: string;
  body: string;
  weDo?: string[];
  /** What the brand gets out of our work on this channel. */
  value?: string;
}

export interface Channel extends Party {
  key: string;
  /** Scope of work split by party; the entry with `us: true` is ours. `brief` is the short list for compact views. */
  sow: { who: string; us?: boolean; items: string[]; brief?: string[] }[];
  /** Compact-view versions of `body` and `value` (home page). */
  summary?: string;
  valueShort?: string;
  /** Icon name from src/components/how-we-work/icons.ts. */
  icon: string;
  /** Short label for tabs; falls back to `name`. */
  tab?: string;
}

export interface HowWeWorkCopy {
  meta: { title: string; description: string; ogImageAlt: string };
  subnavLabel: string;
  sections: { id: string; label: string }[];
  hero: {
    kicker: string;
    h1Before: string;
    h1Mark: string;
    h1After: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proof: { count?: number; suffix?: string; value: string; label: string; href?: string }[];
    imgAlt: string;
    checkLabel: string;
    checkRows: { label: string; key: boolean }[];
    checkCaption: string;
  };
  why: {
    eyebrow: string;
    h2: string;
    lead: string;
    reasons: { title: string; body: string; alt: string }[];
    verdict: string;
  };
  role: {
    eyebrow: string;
    h2: string;
    lead: string;
    sideOurs: string;
    sideMarket: string;
    /** Heading over each panel's `weDo` list; the list only renders when both exist. */
    weDoLabel?: string;
    /** `online` shows on the map only (no RACI column); locales without it skip the node. */
    parties: Record<PartyKey, Party> & { online?: Party };
    /**
     * When `stance` and `scope` are both present, the panels under the map switch to
     * the scope layout: our position, the supporting parties, then one row per channel.
     * Locales without them keep the plain panel grid.
     */
    stance?: { label: string; title: string; body: string; points: string[] };
    supportLabel?: string;
    scope?: {
      label: string;
      title: string;
      colScope: string;
      colValue: string;
      sowLabel: string;
      /** One entry per sales or brand channel, in display order. */
      channels: Channel[];
    };
  };
  tpdp: {
    eyebrow: string;
    h2: string;
    lead: string;
    segLabel: string;
    tpToggle: string;
    dpToggle: string;
    tpSummary: string;
    dpSummary: string;
    tableCaption: string;
    compare: { label: string; tp: string; dp: string; tpOk?: boolean; dpOk?: boolean }[];
    journeyStart: string;
    journeyEnd: string;
    note: string;
    noteStrong: string;
  };
  partner: {
    eyebrow: string;
    h2: string;
    lead: string;
    catTitle: string;
    catBody: string;
    chipsLabel: string;
    chips: string[];
    audTag: string;
    audTitle: string;
    audBody: string;
    chartTitle: string;
    chartCut: string;
    chartRestore: string;
    chartSr: string;
    chartMarker: string;
    axisX: string;
    axisY: string;
    legendA: string;
    legendB: string;
    chartCaption: string;
    mistakeLabel: string;
    mistakeBody: string;
  };
  pitch: {
    eyebrow: string;
    h2: string;
    lead: string;
    statusNone: string;
    statusSome: string;
    statusAll: string;
    cta: string;
    imgAlt: string;
    items: { title: string; body: string }[];
  };
  interludeRoles: string;
  raci: {
    eyebrow: string;
    h2: string;
    lead: string;
    filterLabel: string;
    everyone: string;
    leads: string;
    supports: string;
    leadsMeaning: string;
    supportsMeaning: string;
    regionLabel: string;
    taskCol: string;
    notInvolved: string;
    /** Lowercase the first letter of a status when it follows "Party:" on mobile cards. */
    lowercaseInline: boolean;
    /** Separator between party and status on mobile cards. Defaults to ": ". */
    inlineSep?: string;
    /** `online` is optional; when present, rows carry six cells with it before `offline`. */
    cols: Record<PartyKey, string> & { online?: string };
    /** `group` opens a new labelled block of rows, starting with this one. */
    rows: { task: string; cells: string[]; group?: string }[];
  };
  steps: {
    eyebrow: string;
    h2: string;
    lead: string;
    involved: string;
    items: { title: string; body: string; who: PartyKey[] }[];
  };
  /** Optional: locales without it skip the growth section. */
  growth?: {
    eyebrow: string;
    h2: string;
    lead: string;
    chartTitle: string;
    chartSr: string;
    salesLabel: string;
    investLabel: string;
    legendSales: string;
    legendTrend: string;
    legendAlwaysOn: string;
    legendFestival: string;
    years: [string, string];
    months: string[];
    festivals: { d38: string; s618: string; d11: string; d12: string; cny: string };
    phases: { normal: string; warmup: string; peak: string; dip: string; cny: string };
    caption: string;
    note: string;
    noteStrong: string;
  };
  hire: {
    eyebrow: string;
    h2: string;
    lead: string;
    items: { title: string; body: string; cta: string }[];
  };
  interludeFaq: string;
  faq: {
    eyebrow: string;
    h2: string;
    fresh: string;
    ours: { q: string; a: string; modes: { label: string; value: string }[] };
    tp: { q: string; a: string; html: string; figures: { value: string; label: string }[] };
    items: { q: string; a: string; html?: string }[];
  };
  cta: { eyebrow: string; h2: string; body: string; primary: string; secondary: string };
}

const copy: HowWeWorkCopy = {
  meta: {
    title: 'How We Work: Finding Your TP or DP in China | TheChinaPath',
    description:
      'No TP or DP team of our own. We find the Tmall, JD, or Douyin partner that knows your category and has its audience, then pitch your brand to it.',
    ogImageAlt:
      'A foreign brand director facing a Chinese partner team across a meeting table in a Shanghai office',
  },
  subnavLabel: 'On this page',
  sections: [
    { id: 'our-role', label: 'Our role' },
    { id: 'who-does-what', label: 'Who does what' },
    { id: 'why', label: 'Why' },
    { id: 'tp-or-dp', label: 'TP or DP' },
    { id: 'the-right-partner', label: 'The right partner' },
    { id: 'pitching', label: 'Pitching a partner' },
    { id: 'the-steps', label: 'The steps' },
    { id: 'growth', label: 'Growth' },
    { id: 'pricing-faq', label: 'Pricing and FAQ' },
  ],
  hero: {
    kicker: 'How we work',
    h1Before: 'In China, the ',
    h1Mark: 'wrong partner',
    h1After: ' costs you years.',
    lead: 'Most foreign brands in China sell through a TP (trade partner) on Tmall and JD, or a DP (Douyin partner) on Douyin. Either way, the partner runs the store. We don’t have a TP or DP team. Our job is finding the partner that should run yours and getting your brand through its door. Then we build the demand.',
    ctaPrimary: 'Talk to us',
    ctaSecondary: 'See why',
    proof: [
      { count: 15, suffix: '+', value: '15+', label: 'years on Tmall and JD' },
      { count: 200, suffix: '+', value: '200+', label: 'brand launches' },
      { value: 'Compass', label: 'our partner database, open to search', href: '/compass' },
    ],
    imgAlt:
      'A foreign brand director facing a Chinese partner team across a meeting table in a Shanghai office',
    checkLabel: 'What we check first',
    checkRows: [
      { label: 'Knows your category', key: true },
      { label: 'Already has your buyers', key: true },
      { label: 'Can run the store', key: false },
    ],
    checkCaption: 'Most brands only check the last one.',
  },
  why: {
    eyebrow: 'Why we work this way',
    h2: 'China is a hard place to get the partner wrong',
    lead: 'Four things come up in almost every launch we see, and the way we work is built around them.',
    reasons: [
      {
        title: 'Your category is already crowded',
        body: 'China’s consumer market is brutally competitive. Whatever you sell, a local brand got there first, probably several. They move fast and they price hard. And they know the shopper better than you do. A foreign name gets you a little curiosity, and that’s about it.',
        alt: 'A shopper comparing two skincare bottles in front of shelves packed with local brands in a Chinese beauty store',
      },
      {
        title: 'The partner decides how it goes',
        body: 'A TP or DP that knows your category and already has its audience gives you a running start. One that can only operate a store and buy traffic leaves you paying for every visitor. For years.',
        alt: 'A livestream host presenting a serum bottle to a phone camera in a Chinese live commerce studio',
      },
      {
        title: 'The best partners get to say no',
        body: 'The strongest TPs and DPs in any category are swamped. Brands pitch them every week, and most get turned down. The ones that get through have been reviewed hard and handed a minimum investment.',
        alt: 'Two Chinese partners sorting through printed brand proposals and product samples, one of them looking skeptical',
      },
      {
        title: 'We don’t have a store team to sell you',
        body: 'If we ran a TP or DP team, every brand we met would look like a good fit for it. We don’t, so the only question we ask is which partner fits yours.',
        alt: 'A foreign brand manager going through contract terms with a Chinese partner team over tea',
      },
    ],
    verdict: 'So we work for you, on your side of the table, with no partner of our own to push.',
  },
  role: {
    eyebrow: 'Where we sit',
    h2: 'Who sits where in a China launch',
    lead: 'Six parties usually share a China launch. Here’s what each one owns, and where we come in.',
    sideOurs: 'Your side',
    sideMarket: 'The market side',
    weDoLabel: 'What we handle',
    parties: {
      you: {
        name: 'You, the brand',
        body: 'You own the brand and the product, and the supply chain behind them. You set the budget, and you sign with the partner.',
      },
      us: {
        name: 'Us',
        body: 'We sit on your side of the table. We choose your channel partners, negotiate next to you, and manage them day to day. We also run your social media.',
      },
      tp: {
        name: 'Your TP or DP',
        hint: 'Tmall, JD, Douyin',
        body: 'This is who runs your stores day in and day out, customer service included. A TP works on Tmall and JD, a DP on Douyin. Some partners end up buying stock too, but not at the start.',
      },
      logistics: {
        name: 'Logistics partner',
        body: 'You only need one if your TP or DP can’t ship cross-border. When that happens, we go and find one that suits your brand.',
      },
      online: {
        name: 'Online distributors',
        hint: 'JD, Tmall Supermarket, Hema, etc.',
        body: 'They buy your stock and resell it through their own channels, like JD’s self-run store, Tmall Supermarket or Hema. We run the whole relationship for you. In the trade, that’s channel management.',
      },
      offline: {
        name: 'Offline distributors',
        body: 'They take your brand into stores and wholesale. We manage them much the way we manage online distributors. Same channel management, different shelves.',
      },
    },
    stance: {
      label: 'Where we stand',
      title: 'On your side of the table, on every channel',
      body: 'We don’t own stores, we don’t have a TP or DP team, and no partner pays us to bring it brands. We choose your channel partners, sit next to you when you negotiate, then manage them for you day to day. When the plan calls for it, we also become your exclusive online distributor.',
      points: ['No partner of our own to push', 'One team across every channel', 'Campaigns that run across channels'],
    },
    supportLabel: 'Also at the table',
    scope: {
      label: 'Our scope',
      title: 'What we handle, channel by channel',
      colScope: 'What we handle',
      colValue: 'What you get',
      sowLabel: 'Who does what',
      channels: [
        {
          key: 'online',
          icon: 'cart',
          name: 'Online distributors',
          hint: 'JD, Tmall Supermarket, Hema, etc.',
          body: 'They buy your stock and resell it through their own channels, like JD’s self-run store, Tmall Supermarket or Hema. We run the whole relationship for you. In the trade, that’s channel management.',
          summary: 'They buy your stock and resell it. We manage them for you.',
          sow: [
            {
              who: 'You, the brand',
              items: [
                'Product, supply chain, and pricing policy',
                'Sign the distribution contract',
                'Sign off on offers and content',
              ],
              brief: ['Product and pricing', 'Sign the contract'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Pitch the distributor on your behalf',
                'Negotiate the contract with you',
                'Handle regulations and logistics in China',
                'Create all the content it needs',
                'Run campaigns with it: creative, pitch, media, and offer, across channels when it helps',
                'Manage the relationship day to day',
              ],
              brief: ['Pitch and negotiate', 'Regulations and logistics', 'Content and campaigns', 'The relationship, day to day'],
            },
            {
              who: 'The distributor',
              items: [
                'Buys your stock',
                'Lists and sells it on its own platform',
                'Handles orders, delivery, and customer service',
                'Runs its platform promotions with us',
              ],
              brief: ['Buys your stock', 'Sells it on its platform', 'Orders and customer service'],
            },
          ],
          value:
            'Your brand gets its share of the distributor’s shelf and promotions, and you don’t need your own team in China to make that happen.',
          valueShort: 'Your share of their shelf, with no team of your own in China.',
        },
        {
          key: 'store',
          icon: 'store',
          name: 'Your own brand store on marketplaces',
          tab: 'Your own brand store',
          hint: 'Tmall, JD',
          body: 'Your flagship on Tmall or JD. You own it, and a TP (trade partner) runs it day to day.',
          summary: 'Your flagship on Tmall or JD, run by a TP.',
          sow: [
            {
              who: 'You, the brand',
              items: [
                'Product, supply chain, and stock',
                'Set the budget and sign with the TP',
                'Sign off on the business plan',
              ],
              brief: ['Product and stock', 'Budget, and signing with the TP'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Pick the right TP, from our network or through a fresh search',
                'Pitch your brand to it',
                'Build the portfolio strategy and the business plan',
                'Find the best logistics setup',
                'Produce the store setup content and the always-on content',
                'Run campaigns on the platform and off it',
                'Pitch Tmall or JD for free traffic during the big festivals',
              ],
              brief: ['Find and pitch the TP', 'Business plan and logistics', 'Store content and campaigns', 'Free festival traffic'],
            },
            {
              who: 'Your TP',
              items: [
                'Opens and runs the store day to day',
                'Listings, pricing, and on-platform ads',
                'Customer service in Mandarin',
                'Orders and fulfillment, cross-border shipping included if it’s equipped',
                'Sales reporting',
              ],
              brief: ['Runs the store', 'Listings and on-platform ads', 'Customer service and orders'],
            },
          ],
          value:
            'A TP that already knows your category and has its shoppers. And at festival time, platform traffic you didn’t pay for, on top of the traffic you did.',
          valueShort: 'A TP that knows your category, plus free traffic at festival time.',
        },
        {
          key: 'social-commerce',
          icon: 'live',
          name: 'Social commerce',
          hint: 'Douyin shop, livestreams, creators',
          body: 'Your shop on Douyin, fed by short videos, livestreams, and the creators who sell for you. A DP (Douyin partner) runs it day to day.',
          summary: 'Your Douyin shop, run by a DP.',
          sow: [
            {
              who: 'You, the brand',
              items: [
                'Product, supply chain, and stock',
                'Set the budget and sign with the DP',
                'Samples for creators and livestreams',
              ],
              brief: ['Product and stock', 'Budget, and signing with the DP'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Pick the right DP, from our network or through a fresh search',
                'Pitch your brand to it',
                'Build the business plan and the logistics setup',
                'Produce the content that keeps the shop fed, always on',
                'Run campaigns with the DP, on Douyin and off it',
                'Pitch Douyin for free traffic during the big festivals',
              ],
              brief: ['Find and pitch the DP', 'Business plan and logistics', 'Content and campaigns', 'Free festival traffic'],
            },
            {
              who: 'Your DP',
              items: [
                'Runs the Douyin shop day to day',
                'Hosts the livestreams',
                'Books and manages the creators who sell for you',
                'Paid traffic on Douyin',
                'Customer service and orders',
              ],
              brief: ['Runs the shop', 'Livestreams and creators', 'Customer service and orders'],
            },
          ],
          value:
            'A DP whose livestream rooms and creators already sell in your category. Your sales don’t hang on paid traffic alone.',
          valueShort: 'Livestreams and creators that already sell in your category.',
        },
        {
          key: 'offline',
          icon: 'building',
          name: 'Offline distributors',
          hint: 'Stores and wholesale',
          body: 'They take your brand into stores and wholesale. We manage them much the way we manage online distributors. Same channel management, different shelves.',
          summary: 'They take your brand into stores and wholesale. We manage them for you.',
          sow: [
            {
              who: 'You, the brand',
              items: [
                'Product, supply chain, and pricing policy',
                'Sign the distribution contract',
                'Sign off on offers and in-store material',
              ],
              brief: ['Product and pricing', 'Sign the contract'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Pitch the distributor on your behalf',
                'Negotiate the contract with you',
                'Handle regulations and logistics in China',
                'Create the content it needs',
                'Run campaigns with it',
                'Manage the relationship day to day',
              ],
              brief: ['Pitch and negotiate', 'Regulations and logistics', 'Content and campaigns', 'The relationship, day to day'],
            },
            {
              who: 'The distributor',
              items: [
                'Buys your stock',
                'Sells into stores and wholesale',
                'Runs its own sales team and store accounts',
                'Warehousing and delivery to stores',
              ],
              brief: ['Buys your stock', 'Sells into stores and wholesale', 'Delivery to stores'],
            },
          ],
          value:
            'Stores and wholesale without building a sales team in China. The distributor stays briefed, supplied with content, and accountable.',
          valueShort: 'Stores and wholesale, with no sales team of your own.',
        },
        {
          key: 'social',
          icon: 'megaphone',
          name: 'Social media',
          hint: 'RedNote, Douyin, WeChat, Bilibili',
          body: 'Your brand accounts, and the creators who talk about you. It’s where Chinese shoppers check out a brand before they buy it anywhere.',
          summary: 'Your brand accounts, and the creators who talk about you.',
          sow: [
            {
              who: 'You, the brand',
              items: ['Set the budget', 'Brand guidelines and key messages', 'Sign off on campaigns'],
              brief: ['Budget and brand guidelines', 'Sign-off on campaigns'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Run your brand accounts day to day, across platforms',
                'Plan and produce the content',
                'Pick the KOLs and KOCs, and brief them',
                'Run KOL and KOC brand campaigns, outside eCommerce',
                'Report on what works, and adjust',
              ],
              brief: ['Accounts, day to day', 'Content', 'KOL and KOC campaigns', 'Reporting'],
            },
            {
              who: 'KOLs and KOCs',
              items: ['Create and post content about your brand', 'Follow the brief we agreed with you'],
              brief: ['Create and post content', 'Follow the brief'],
            },
          ],
          value: 'A brand people already search for. That’s what makes every other channel sell.',
          valueShort: 'A brand people already search for.',
        },
      ],
    },
  },
  tpdp: {
    eyebrow: 'The basics',
    h2: 'What’s a TP, and what’s a DP?',
    lead: 'Both are service providers, and they do much the same job. The big difference is where they do it: Tmall and JD for one, Douyin for the other.',
    segLabel: 'Partner type',
    tpToggle: 'TP, trade partner',
    dpToggle: 'DP, Douyin partner',
    tpSummary:
      'A TP runs your store on Tmall, and often on JD too: listings, content, customer service in Mandarin, traffic, and campaigns. It’s paid through a service fee, usually with a commission on sales.',
    dpSummary:
      'A DP does the same job on Douyin. It runs your Douyin shop, the short videos and livestreams that feed it, and the creators who sell for you. The fee structure is much like a TP’s.',
    tableCaption: 'TP and DP compared',
    compare: [
      { label: 'Where it works', tp: 'Tmall, and often JD', dp: 'Douyin' },
      {
        label: 'What it runs',
        tp: 'Your store, listings, customer service, and campaigns',
        dp: 'Your shop, short video, livestreams, and creators',
      },
      { label: 'How it gets paid', tp: 'Service fee, usually plus commission', dp: 'Service fee, usually plus commission' },
      { label: 'Buys your stock', tp: 'Not usually', dp: 'Not usually', tpOk: false, dpOk: false },
      { label: 'Can become your distributor', tp: 'Yes, later', dp: 'Yes, later', tpOk: true, dpOk: true },
    ],
    journeyStart: 'Year one: services only',
    journeyEnd: 'Later: it may become your distributor',
    note: 'As a rule, your inventory stays with you. A TP or DP can become your distributor later and start buying stock, but only once it understands your supply chain and sees what you’re really investing. That usually takes a year of services, often longer.',
    noteStrong:
      'Our advice: plan for a services deal first, and treat a distribution deal as something you earn.',
  },
  partner: {
    eyebrow: 'The right partner',
    h2: 'Category first. Audience above everything.',
    lead: 'Plenty of TPs and DPs can run a store and buy traffic. That’s the entry ticket, and it’s where most brands stop looking.',
    catTitle: 'It knows your category',
    catBody:
      'It already runs brands in your space. It knows the price bands and the search terms, and it has the festival calendar in its head. It can also tell you which creators actually move product and which ones just post. You don’t pay for its learning curve.',
    chipsLabel: 'What a category specialist knows',
    chips: ['Price bands', 'Search terms', 'Festival calendar', 'Creators who sell'],
    audTag: 'The one that matters most',
    audTitle: 'It has the audience',
    audBody:
      'It already sells to the shoppers you want. Its stores and livestream rooms pull buyers in your category every day, and so does its creator network. Traffic you buy stops the day the budget does, while a partner’s own audience keeps shopping after the ads go quiet.',
    chartTitle: 'What happens when the ad budget stops',
    chartCut: 'Cut the ad budget',
    chartRestore: 'Restore the budget',
    chartSr:
      'When ad spending stops, traffic at the partner that buys it falls away, while the partner with its own audience holds most of its traffic.',
    chartMarker: 'Ad budget stops',
    axisX: 'Months',
    axisY: 'Store traffic',
    legendA: 'Partner that buys traffic',
    legendB: 'Partner with its own audience',
    chartCaption: 'An illustration of the pattern, not client data.',
    mistakeLabel: 'The common mistake',
    mistakeBody:
      'A brand picks a TP or DP because it can operate a store and buy traffic. We see it all the time. A year or two in, the brand has a tidy flagship, a big media bill, and very few shoppers who come back without an ad pulling them in.',
  },
  pitch: {
    eyebrow: 'The partner’s side',
    h2: 'Ready to pitch a good partner?',
    lead: 'The TPs and DPs winning in your category know how crowded it is, so they’re picky. Tick what’s already true for you.',
    statusNone: 'Tick what’s already true.',
    statusSome: 'That’s a start. We can help with the rest.',
    statusAll: 'You’re ready. Let’s find the partner.',
    cta: 'Start the partner search',
    imgAlt: 'Two Chinese partners sorting through printed brand proposals and product samples',
    items: [
      {
        title: 'We have a pitch ready',
        body: 'A good partner reads your pitch the way a tough investor would. It’ll want to meet the people behind the brand, too.',
      },
      {
        title: 'We know our investment number',
        body: 'A serious partner reviews your brand, then names the minimum it considers reasonable. Know your own number before that meeting.',
      },
      {
        title: 'We can live with services-only in year one',
        body: 'Stock comes later, if at all. Most partners want a year of your supply chain before they’ll consider buying any.',
      },
      {
        title: 'We’ll walk away from an easy yes',
        body: 'If a partner doesn’t need convincing, ask yourself why it has room on its roster.',
      },
    ],
  },
  interludeRoles: 'That’s the partner side. Here’s how the work splits once everyone is at the table.',
  raci: {
    eyebrow: 'Roles and responsibilities',
    h2: 'Who does what, task by task',
    lead: 'A China launch has more people in it than most brands expect. Filter by party to see where each one leads.',
    filterLabel: 'Filter by party',
    everyone: 'Everyone',
    leads: 'Leads',
    supports: 'Supports',
    leadsMeaning: 'owns the result',
    supportsMeaning: 'involved, not in charge',
    regionLabel: 'Responsibilities by task',
    taskCol: 'Task',
    notInvolved: 'Not involved',
    lowercaseInline: true,
    cols: {
      you: 'You',
      us: 'Us',
      tp: 'TP or DP',
      logistics: 'Logistics partner',
      online: 'Online distributors',
      offline: 'Offline distributors',
    },
    rows: [
      { group: 'Strategy and planning', task: 'Brand, product, and supply chain', cells: ['L', '', '', '', '', ''] },
      { task: 'Budget and investment level', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Business plan, festival budgets included', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Portfolio strategy: which products go to which channel', cells: ['S', 'L', 'S', '', '', ''] },
      { task: 'Brand localization', cells: ['S', 'L', '', '', '', ''] },
      {
        group: 'TP or DP, on Tmall, JD, and Douyin',
        task: 'Finding the TP or DP, in our network or beyond it',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Pitching your brand to it', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Choosing the partner and signing', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Store operations and customer service', cells: ['', '', 'L', '', '', ''] },
      { task: 'Store setup content and always-on content', cells: ['', 'L', 'S', '', '', ''] },
      { task: 'Campaigns on the platform and off it', cells: ['', 'L', 'L', '', '', ''] },
      { task: 'Pitching the platform for festival traffic', cells: ['', 'L', 'S', '', '', ''] },
      {
        group: 'Online distributors: JD, Tmall Supermarket, Hema',
        task: 'Pitching the distributor on your behalf',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Negotiating and signing the contract', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Buying stock and selling it to shoppers', cells: ['', '', '', '', 'L', ''] },
      { task: 'All the content the distributor needs', cells: ['', 'L', '', '', 'S', ''] },
      { task: 'Joint campaigns: creative, pitch, media, and offer', cells: ['', 'L', '', '', 'S', ''] },
      { task: 'Day-to-day relationship', cells: ['', 'L', '', '', 'S', ''] },
      { group: 'Offline distributors', task: 'Pitching the distributor on your behalf', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Negotiating and signing the contract', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Selling into stores and wholesale', cells: ['', '', '', '', '', 'L'] },
      { task: 'Content and campaigns with the distributor', cells: ['', 'L', '', '', '', 'S'] },
      { task: 'Day-to-day relationship', cells: ['', 'L', '', '', '', 'S'] },
      { group: 'Regulations and logistics', task: 'Regulations in China for distributor channels', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Cross-border logistics', cells: ['', 'Finds the partner', 'If equipped', 'Otherwise', '', ''] },
      { task: 'Logistics in China for distributor channels', cells: ['', 'L', '', 'S', '', ''] },
      {
        group: 'Social media and brand campaigns',
        task: 'Brand accounts day to day: RedNote, Douyin, WeChat, Bilibili',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'KOL and KOC brand campaigns, outside eCommerce', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Offline events', cells: ['', 'L', '', '', '', ''] },
    ],
  },
  steps: {
    eyebrow: 'The engagement',
    h2: 'What working with us looks like',
    lead: 'Most brands go through these six steps with us, each at its own pace.',
    involved: 'Involved: ',
    items: [
      {
        title: 'We get to know the brand',
        body: 'It starts with a lot of conversations: your product, your margins, your budget, what you want out of China. We also take a hard look at your category, since local brands probably crowd it already.',
        who: ['you', 'us'],
      },
      {
        title: 'We write the plan',
        body: 'A business plan, and a brand localized for Chinese shoppers. The plan also sets what you can invest, because every serious partner asks for a minimum before it says yes.',
        who: ['us', 'you'],
      },
      {
        title: 'We find and pitch your TP or DP',
        body: 'This is the slow part, and there’s no shortcut. We build the pitch deck, then take it to partners in our network who know your category and already have its audience (the search starts in Compass). They review you, and the good ones take their time.',
        who: ['us', 'you', 'tp'],
      },
      {
        title: 'We sort out logistics',
        body: 'If your TP or DP can’t ship cross-border, we find a partner who can and who suits your brand. Get it wrong and you’ll feel it in delivery times and at customs, and sooner or later in your margin.',
        who: ['us', 'logistics'],
      },
      {
        title: 'We launch and run the marketing',
        body: 'Content for your eCommerce stores. eCommerce campaigns planned with your TP or DP. Campaigns and account management on social platforms. And offline events, when they’re worth the budget.',
        who: ['us', 'tp'],
      },
      {
        title: 'We grow the setup with you',
        body: 'Once your partner trusts your supply chain, it may offer to become your distributor and buy stock, which is a good sign. We can step in as your exclusive online distributor, and bring in offline distributors when you want stores and wholesale.',
        who: ['us', 'tp', 'offline'],
      },
    ],
  },
  growth: {
    eyebrow: 'What growth looks like',
    h2: 'Sales in China climb from one festival to the next',
    lead: 'The trend goes up. It just doesn’t go up in a straight line. A big share of the year’s sales lands in a few shopping festivals, and every one of them needs its own budget, year after year.',
    chartTitle: 'Two years of a typical brand on Tmall and JD',
    chartSr:
      'Weekly sales rise over two years, with sharp peaks at 618 in June and Double 11 in November, smaller ones at 3.8 and Double 12, a slowdown around Chinese New Year and a short dip after each festival. Marketing investment follows the same rhythm: a steady always-on budget, plus a festival budget that starts in the warm-up weeks before each peak.',
    salesLabel: 'Weekly sales',
    investLabel: 'Marketing investment',
    legendSales: 'Sales',
    legendTrend: 'Underlying trend',
    legendAlwaysOn: 'Always-on budget',
    legendFestival: 'Festival budget',
    years: ['Year one', 'Year two'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    festivals: {
      d38: '3.8 Queen’s Day',
      s618: '618',
      d11: 'Double 11',
      d12: 'Double 12',
      cny: 'Chinese New Year',
    },
    phases: {
      normal: 'Always on. Content and ads keep the store ticking over.',
      warmup: 'Warm-up. The festival budget kicks in before sales move.',
      peak: 'Festival peak. Weeks of sales packed into a few days.',
      dip: 'Post-festival dip. Shoppers bought ahead, so it’s quieter.',
      cny: 'Chinese New Year. Logistics slow down and so do sales.',
    },
    caption: 'An illustration of the pattern, not client data.',
    note: 'Festivals aren’t a one-off launch cost. Each one takes media, offers, and fresh creative, and the platforms hand their free festival traffic to the brands that pitched them early. Put that in the budget for every year, not just the first.',
    noteStrong: 'Our advice: plan the festival budget in the business plan, before you sign anything.',
  },
  hire: {
    eyebrow: 'Working with us',
    h2: 'Take one piece, or all of it',
    lead: 'Hire us for the partner search alone, or for the whole setup. It’s your call.',
    items: [
      {
        title: 'Partner search',
        body: 'We find the TP or DP that fits and pitch your brand to it. The search starts in Compass, our database of TPs, DPs, and distributors we’ve met in person.',
        cta: 'What we look for',
      },
      {
        title: 'eCommerce marketing',
        body: 'We write the plan, localize the brand, and run the content and campaigns next to your partner, on eCommerce and social platforms, plus events offline.',
        cta: 'See what we run',
      },
      {
        title: 'Exclusive online distribution',
        body: 'When the plan calls for it, we sign on as your exclusive distributor for online sales in China.',
        cta: 'Ask us about it',
      },
      {
        title: 'Offline distributor search',
        body: 'We find the distributors who take your brand into stores and wholesale.',
        cta: 'How we find distributors',
      },
    ],
  },
  interludeFaq: 'Still with us? Good. This is where most people skip to anyway.',
  faq: {
    eyebrow: 'Pricing and FAQ',
    h2: 'Questions brands ask us first',
    fresh: 'Last reviewed September 19, 2026.',
    ours: {
      q: 'How do you charge?',
      a: 'Partner search is quoted as a project. eCommerce marketing runs on a monthly retainer or per project, depending on scope. As an exclusive distributor, we earn a margin on product, agreed up front. We quote after the first conversation, once we know your category and the scope.',
      modes: [
        { label: 'Partner search', value: 'Project fee' },
        { label: 'eCommerce marketing', value: 'Retainer or project' },
        { label: 'Exclusive distribution', value: 'Margin on product' },
      ],
    },
    tp: {
      q: 'What does a TP or DP charge?',
      a: 'Usually two layers. A fixed monthly fee per store, often 30,000 to 80,000 RMB depending on scope, plus a commission on net sales, usually 5 to 12 percent. Setup, content production, and media are quoted separately. These are typical TP ranges, reviewed September 2026. A DP on Douyin bills along the same lines; our Douyin cost calculator gives a first estimate.',
      html: 'Usually two layers. A fixed monthly fee per store, often 30,000 to 80,000 RMB depending on scope, plus a commission on net sales, usually 5 to 12 percent. Setup, content production, and media are quoted separately. These are typical TP ranges, reviewed September 2026. A DP on Douyin bills along the same lines; our <a href="/tools/douyin-cost-calculator">Douyin cost calculator</a> gives a first estimate.',
      figures: [
        { value: '30,000 to 80,000 RMB', label: 'fixed monthly fee per store' },
        { value: '5 to 12 percent', label: 'commission on net sales' },
      ],
    },
    items: [
      {
        q: 'Why don’t you have your own TP or DP team?',
        a: 'Because it would bend our advice. With no store team to keep busy, we can recommend whichever partner fits your brand.',
      },
      {
        q: 'Can we hire you only for the partner search?',
        a: 'Yes. You can add the eCommerce marketing later, or bring us in as your exclusive online distributor.',
      },
      {
        q: 'Will the TP or DP buy our stock?',
        a: 'Usually not. TPs and DPs are service providers, and most never hold your inventory. Some become distributors later, once they understand your supply chain and see how much you’re investing. Plan on at least a year of services first.',
      },
      {
        q: 'How much will a partner ask us to invest?',
        a: 'It depends on the category and the partner. A serious TP or DP reviews your brand, then names the minimum it considers reasonable. We help you set your own number in the business plan, before that conversation. For a first estimate, try our Tmall Global, JD Worldwide, and Douyin cost calculators.',
        html: 'It depends on the category and the partner. A serious TP or DP reviews your brand, then names the minimum it considers reasonable. We help you set your own number in the business plan, before that conversation. For a first estimate, try our <a href="/tools/tmall-global-setup-and-run">Tmall Global</a>, <a href="/tools/jd-worldwide-setup-and-run">JD Worldwide</a>, and <a href="/tools/douyin-cost-calculator">Douyin</a> cost calculators.',
      },
      {
        q: 'Do you sell into offline retail for us?',
        a: 'No. We never act as a sales agent for offline channels. We find the right offline distributors, and they sell into stores and wholesale.',
      },
      {
        q: 'Who handles logistics?',
        a: 'Your TP or DP, if it runs cross-border logistics. If it doesn’t, a logistics partner we find for you.',
      },
    ],
  },
  cta: {
    eyebrow: 'Let’s talk',
    h2: 'Tell us what you sell, and we’ll tell you which partners are worth pitching.',
    body: 'A senior member of the team replies within one working day. Or look around first. Our partner database is open to search.',
    primary: 'Contact us',
    secondary: 'Search Compass',
  },
};

export default copy;
