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
  /** Icon name from src/components/how-we-work/icons.ts; overrides the slot's default. */
  icon?: string;
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
    lead?: string;
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
    items: { title: string; body: string; who: (PartyKey | 'online')[] }[];
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
    title: 'How We Work: China eCommerce Distribution | TheChinaPath',
    description:
      'We become your exclusive eCommerce distributor in China, open the stores in your name, and run the TPs, DPs, platforms and KOLs. Paid on commission.',
    ogImageAlt:
      'A foreign brand director facing a Chinese partner team across a meeting table in a Shanghai office',
  },
  subnavLabel: 'On this page',
  sections: [
    { id: 'why', label: 'Why' },
    { id: 'growth', label: 'Growth' },
    { id: 'our-role', label: 'Our role' },
    { id: 'who-does-what', label: 'Who does what' },
    { id: 'tp-or-dp', label: 'TP or DP' },
    { id: 'the-right-partner', label: 'Who runs your stores' },
    { id: 'pitching', label: 'Before we sign' },
    { id: 'the-steps', label: 'The steps' },
    { id: 'pricing-faq', label: 'Pricing and FAQ' },
  ],
  hero: {
    kicker: 'How we work',
    h1Before: 'One partner for your China eCommerce, ',
    h1Mark: 'paid on what sells',
    h1After: '.',
    lead: 'We become your exclusive eCommerce distributor in China. You deal with us, and we deal with everyone else: TPs, DPs, the platforms, KOLs, the warehouse.',
    ctaPrimary: 'Talk to us',
    ctaSecondary: 'See why',
    proof: [
      { count: 15, suffix: '+', value: '15+', label: 'years on Tmall and JD' },
      { count: 75, suffix: '+', value: '75+', label: 'brand launches' },
      { value: 'Compass', label: 'our partner database, open to search', href: '/compass' },
    ],
    imgAlt:
      'A foreign brand director facing a Chinese partner team across a meeting table in a Shanghai office',
    checkLabel: 'What the deal looks like',
    checkRows: [
      { label: 'Commission on every sale', key: true },
      { label: 'Stores opened in your name', key: true },
      { label: 'Logistics in China on us', key: false },
    ],
    checkCaption: 'And we never buy your stock.',
  },
  why: {
    eyebrow: 'Why we work this way',
    h2: 'Why we take on the whole thing',
    lead: 'Four things come up in almost every China launch we’ve seen. The way we work now is built around them.',
    reasons: [
      {
        title: 'Your category is already crowded',
        body: 'China’s consumer market is brutally competitive. Whatever you sell, a local brand got there first, probably several. They move fast and they price hard. And they know the shopper better than you do. A foreign name gets you a little curiosity, and that’s about it.',
        alt: 'A shopper comparing two skincare bottles in front of shelves packed with local brands in a Chinese beauty store',
      },
      {
        title: 'A launch has too many hands in it',
        body: 'A TP for Tmall, a DP for Douyin, a warehouse, a dozen KOLs, and the platforms themselves. Each one bills for its own piece. When sales stall, each one can point at another, and the brand ends up refereeing from the other side of the world.',
        alt: 'A livestream host presenting a serum bottle to a phone camera in a Chinese live commerce studio',
      },
      {
        title: 'Some partners know your category better than we do',
        body: 'We have our own TP, DP and marketing teams, and they run your stores by default. But when an outside TP or DP already sells in your category and has its shoppers, we bring it in and manage it. You still sign one contract.',
        alt: 'Two Chinese partners sorting through printed brand proposals and product samples, one of them looking skeptical',
      },
      {
        title: 'We’re paid on what sells',
        body: 'We take a commission on every eCommerce sale. When your stores have a slow month, so do we. It keeps everyone on our side looking at the same number, and it’s the number you care about.',
        alt: 'A foreign brand manager going through contract terms with a Chinese partner team over tea',
      },
    ],
    verdict: 'So we take your eCommerce in China as a whole, and we answer for the sales.',
  },
  role: {
    eyebrow: 'Where we sit',
    h2: 'You deal with us. We deal with the rest.',
    lead: 'A China launch usually pulls in six parties. As your exclusive eCommerce distributor, we sit in the middle and run every relationship for you.',
    sideOurs: 'Your side',
    sideMarket: 'Who we bring in',
    weDoLabel: 'What we handle',
    parties: {
      you: {
        name: 'You, the brand',
        body: 'You own the brand and the product. You get the stock to a bonded warehouse in China, fund the setup, put your share into the co-marketing budget, and sign off on the plan.',
      },
      us: {
        name: 'Us',
        body: 'Your exclusive eCommerce distributor in China, usually for 3 years or more. We open the stores in your name, run them with our own TP, DP and marketing teams, and handle logistics inside China.',
      },
      tp: {
        name: 'TP or DP',
        hint: 'Ours, or a category specialist',
        body: 'The team that runs a store day to day: listings, ads, customer service, livestreams. Usually that’s our in-house TP or DP. When an outside one knows your category better, we bring it in and manage it.',
      },
      logistics: {
        name: 'Bonded warehouse',
        hint: 'Warehousing, pick and pack, delivery',
        body: 'Your stock waits in a bonded warehouse in China until it sells. Freight to get it there is on you. Warehousing, pick and pack, and delivery to the shopper are on us.',
      },
      online: {
        name: 'Platforms',
        hint: 'Tmall, JD, Douyin',
        icon: 'cart',
        body: 'They host your stores and decide who gets the free traffic at festival time. We handle the relationship, from opening the store to pitching for festival slots.',
      },
      offline: {
        name: 'KOLs and creators',
        hint: 'RedNote, Douyin, WeChat, Bilibili',
        icon: 'users',
        body: 'The creators who review your products, post about them, and sell them in livestreams. We pick them, brief them, and track what they sell.',
      },
    },
    stance: {
      label: 'Where we stand',
      title: 'Your exclusive eCommerce distributor in China',
      body: 'You sign one contract with us for your eCommerce channels in China, usually for at least 3 years. We open the stores in your name, run them with our own teams or a specialist we bring in, and deal with every other party for you. We take a commission on sales, and we don’t buy your stock.',
      points: [
        'One contract for every eCommerce channel',
        'Stores opened in your name',
        'Paid on commission',
        'Logistics in China covered',
      ],
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
          key: 'store',
          icon: 'store',
          name: 'Your brand stores on Tmall and JD',
          tab: 'Tmall and JD',
          hint: 'Tmall, JD',
          body: 'Your flagship stores, opened in your brand’s name. We run them day to day, with our in-house TP or an outside one that knows your category better.',
          summary: 'Your flagships, opened in your name and run by us.',
          sow: [
            {
              who: 'You, the brand',
              items: [
                'Product, pricing policy, and stock',
                'Ship the stock to a bonded warehouse in China',
                'Fund the setup, and your share of the co-marketing budget',
                'Sign off on the business plan',
              ],
              brief: ['Product and stock', 'Setup, and your co-marketing share'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Open the stores in your brand’s name',
                'Run them day to day: listings, ads, and customer service in Mandarin',
                'Bring in an outside TP when it knows your category better, and manage it',
                'Produce the store content and the always-on content',
                'Run campaigns, and pitch Tmall and JD for free traffic during the big festivals',
                'Warehousing, pick and pack, and delivery in China',
              ],
              brief: ['Open and run the stores', 'Content and campaigns', 'Free festival traffic', 'Logistics in China'],
            },
            {
              who: 'An outside TP, when it fits',
              items: [
                'Runs the store day to day, under our management',
                'Brings its category know-how and its shoppers',
                'Reports to us, and we report to you',
              ],
              brief: ['Runs the store for us', 'Brings its shoppers'],
            },
          ],
          value:
            'Stores that belong to you, run by a team that’s paid on what they sell. If you ever change distributor, the stores stay yours.',
          valueShort: 'Stores that stay yours, run by a team paid on sales.',
        },
        {
          key: 'social-commerce',
          icon: 'live',
          name: 'Social commerce',
          hint: 'Douyin shop, livestreams, creators',
          body: 'Your shop on Douyin, fed by short videos, livestreams, and the creators who sell for you. Our in-house DP runs it, or an outside DP whose livestream rooms already sell your category.',
          summary: 'Your Douyin shop, run by our DP or one we bring in.',
          sow: [
            {
              who: 'You, the brand',
              items: [
                'Product and stock',
                'Samples for creators and livestreams',
                'Fund the setup, and your share of the co-marketing budget',
              ],
              brief: ['Product and stock', 'Samples for creators'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Open the Douyin shop in your brand’s name',
                'Run it day to day, livestreams included',
                'Bring in an outside DP when its rooms already sell your category',
                'Book and brief the creators who sell for you',
                'Produce the content that keeps the shop fed',
                'Pitch Douyin for free traffic during the big festivals',
              ],
              brief: ['Open and run the shop', 'Livestreams and creators', 'Content', 'Free festival traffic'],
            },
            {
              who: 'Creators and outside DPs',
              items: [
                'Creators post and sell from the brief we agree with you',
                'An outside DP hosts the livestreams when its room is the stronger one',
              ],
              brief: ['Creators who sell', 'Livestream rooms'],
            },
          ],
          value:
            'Livestream rooms and creators that already sell in your category. Your sales don’t hang on paid traffic alone.',
          valueShort: 'Livestreams and creators that already sell in your category.',
        },
        {
          key: 'social',
          icon: 'megaphone',
          name: 'Social media and KOLs',
          tab: 'Social media',
          hint: 'RedNote, Douyin, WeChat, Bilibili',
          body: 'Your brand accounts, and the KOLs and KOCs who talk about you. It’s where Chinese shoppers check out a brand before they buy it anywhere.',
          summary: 'Your brand accounts, and the creators who talk about you.',
          sow: [
            {
              who: 'You, the brand',
              items: ['Your share of the co-marketing budget', 'Brand guidelines and key messages', 'Sign off on campaigns'],
              brief: ['Your co-marketing share', 'Brand guidelines'],
            },
            {
              who: 'Us',
              us: true,
              items: [
                'Run your brand accounts day to day, across platforms',
                'Plan and produce the content',
                'Pick the KOLs and KOCs, and brief them',
                'Run brand campaigns that send shoppers to your stores',
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
          value: 'A brand people already search for. That’s what makes the stores sell.',
          valueShort: 'A brand people already search for.',
        },
        {
          key: 'logistics',
          icon: 'truck',
          name: 'Logistics',
          hint: 'From the bonded warehouse to the shopper',
          body: 'Your stock waits in a bonded warehouse in China until it sells. You get it there. We take it from there.',
          summary: 'You get the stock to China. We handle everything after.',
          sow: [
            {
              who: 'You, the brand',
              items: ['Ship the goods to a bonded warehouse in China', 'Pay the freight from your country to the warehouse'],
              brief: ['Ship to the bonded warehouse', 'Freight to China'],
            },
            {
              who: 'Us',
              us: true,
              items: ['Pay for warehousing in China', 'Pick and pack every order', 'Ship it to the shopper'],
              brief: ['Warehousing', 'Pick and pack', 'Delivery to the shopper'],
            },
            {
              who: 'The bonded warehouse',
              items: ['Holds your stock until it sells', 'Clears each order through customs'],
              brief: ['Holds your stock', 'Clears each order'],
            },
          ],
          value: 'No warehousing or delivery bills in China. Your logistics cost stops at the warehouse door.',
          valueShort: 'No warehousing or delivery bills in China.',
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
      'A TP runs a store on Tmall, and often on JD too: listings, content, customer service in Mandarin, traffic, and campaigns. We have our own TP team, and we bring in an outside one when it knows your category better.',
    dpSummary:
      'A DP does the same job on Douyin. It runs the shop, the short videos and livestreams that feed it, and the creators who sell for you. Same setup with us: our own DP team first, an outside one when its room sells your category better.',
    tableCaption: 'TP and DP compared',
    compare: [
      { label: 'Where it works', tp: 'Tmall, and often JD', dp: 'Douyin' },
      {
        label: 'What it runs',
        tp: 'Your store, listings, customer service, and campaigns',
        dp: 'Your shop, short video, livestreams, and creators',
      },
      { label: 'Who it is', tp: 'Our in-house TP, or a specialist', dp: 'Our in-house DP, or a specialist' },
      { label: 'Your contract', tp: 'One, with us', dp: 'One, with us', tpOk: true, dpOk: true },
      { label: 'Your stock', tp: 'Stays yours, in a bonded warehouse', dp: 'Stays yours, in a bonded warehouse', tpOk: true, dpOk: true },
    ],
    journeyStart: 'Our in-house team by default',
    journeyEnd: 'An outside specialist when it knows your category better',
    note: 'Either way, the store opens in your brand’s name and your contract is with us. We manage the TP or DP, and we answer to you for the sales.',
    noteStrong: 'Our rule: the team that knows your category runs the store, whoever employs it.',
  },
  partner: {
    eyebrow: 'Who runs your stores',
    h2: 'Category first. Audience above everything.',
    lead: 'Plenty of TPs and DPs can run a store and buy traffic. That’s the entry ticket. When we decide who runs yours, our own team or an outside one, we look for two more things.',
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
      'A brand picks a TP or DP because it can operate a store and buy traffic. We see it all the time. A year or two in, the brand has a tidy flagship, a big media bill, and very few shoppers who come back without an ad pulling them in. It’s why we’ll hand a store to an outside team when it has your shoppers and ours doesn’t.',
  },
  pitch: {
    eyebrow: 'Before we sign',
    h2: 'Is your brand ready for this kind of deal?',
    lead: 'We commit to your brand for years, so we ask for a few things up front. Tick what’s already true for you.',
    statusNone: 'Tick what’s already true.',
    statusSome: 'That’s a start. We can talk through the rest.',
    statusAll: 'You’re ready. Let’s talk.',
    cta: 'Talk to us about it',
    imgAlt: 'Two Chinese partners sorting through printed brand proposals and product samples',
    items: [
      {
        title: 'We can commit for 3 years',
        body: 'We ask for exclusivity on your eCommerce channels, usually for 3 years at least. We put a team and a budget behind your stores from day one, and that pays back over several festival seasons.',
      },
      {
        title: 'We can fund the setup',
        body: 'Platform fees, launch content, and the rest of the setup are invoiced to you. That’s what keeps the stores in your name. If you ever change distributor, they go with you.',
      },
      {
        title: 'We’ll put money into co-marketing',
        body: 'Building a brand in China takes media, KOLs, and festival campaigns. We build a co-marketing budget together, with money from both sides, and run it with you.',
      },
      {
        title: 'We can get stock to a bonded warehouse',
        body: 'You ship the goods to a bonded warehouse in China and pay the freight. From the warehouse on, logistics are on us.',
      },
    ],
  },
  interludeRoles: 'Here’s how the work splits once everyone is at the table.',
  raci: {
    eyebrow: 'Roles and responsibilities',
    h2: 'Who does what, task by task',
    lead: 'A China launch has more people in it than most brands expect. You only deal with us. Filter by party to see who leads what.',
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
      tp: 'Outside TP or DP',
      logistics: 'Bonded warehouse',
      online: 'Platforms',
      offline: 'KOLs and creators',
    },
    rows: [
      { group: 'Strategy and the deal', task: 'Brand, product, and pricing policy', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Business plan, festival budgets included', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Signing the exclusive eCommerce agreement', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Setup cost', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Co-marketing budget, funded by both of us', cells: ['L', 'L', '', '', '', ''] },
      { task: 'Brand localization', cells: ['S', 'L', '', '', '', ''] },
      {
        group: 'Stores on Tmall, JD, and Douyin',
        task: 'Opening the stores in your brand’s name',
        cells: ['S', 'L', '', '', 'S', ''],
      },
      { task: 'Choosing who runs each store: our team or an outside one', cells: ['', 'L', 'S', '', '', ''] },
      { task: 'Store operations and customer service', cells: ['', 'L', 'If brought in', '', '', ''] },
      { task: 'Store setup content and always-on content', cells: ['S', 'L', 'S', '', '', ''] },
      { task: 'Campaigns on the platform and off it', cells: ['', 'L', 'S', '', 'S', 'S'] },
      { task: 'Pitching the platforms for festival traffic', cells: ['', 'L', 'S', '', 'S', ''] },
      {
        group: 'Social media and KOLs',
        task: 'Brand accounts day to day: RedNote, Douyin, WeChat, Bilibili',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Picking and briefing KOLs and KOCs', cells: ['S', 'L', '', '', '', 'S'] },
      { task: 'Creating and posting the content', cells: ['', 'S', '', '', '', 'L'] },
      { task: 'Livestream selling with creators', cells: ['', 'L', 'S', '', '', 'S'] },
      {
        group: 'Stock and logistics',
        task: 'Freight from your country to the bonded warehouse',
        cells: ['L', '', '', 'S', '', ''],
      },
      { task: 'Warehousing in China', cells: ['', 'L', '', 'S', '', ''] },
      { task: 'Pick and pack, and delivery to the shopper', cells: ['', 'L', '', 'S', '', ''] },
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
        body: 'It starts with a lot of conversations: your product, your margins, what you want out of China. We also take a hard look at your category, since local brands probably crowd it already.',
        who: ['you', 'us'],
      },
      {
        title: 'We write the plan and sign the deal',
        body: 'A business plan with the setup cost and the co-marketing budget in it, and a brand localized for Chinese shoppers. Then the agreement: exclusivity on your eCommerce channels, usually for at least 3 years.',
        who: ['us', 'you'],
      },
      {
        title: 'We pick who runs each store',
        body: 'Our own TP and DP teams take the stores by default. When an outside partner already sells in your category and has its shoppers, we bring it in instead (the search starts in Compass, our database of partners we’ve met in person).',
        who: ['us', 'tp'],
      },
      {
        title: 'You ship, we take it from there',
        body: 'You send the goods to a bonded warehouse in China and cover the freight. From that point, warehousing, pick and pack, and delivery to the shopper are on us.',
        who: ['you', 'us', 'logistics'],
      },
      {
        title: 'We open the stores and launch',
        body: 'The stores open in your brand’s name on Tmall, JD, and Douyin. Then come the content, the campaigns, the KOLs, and the pitch to each platform for festival traffic.',
        who: ['us', 'online', 'offline'],
      },
      {
        title: 'We grow it with you',
        body: 'Sales climb festival by festival. After each one we go through the numbers with you and move the co-marketing budget to whatever sold. Our commission only grows when your sales do.',
        who: ['us', 'you'],
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
    note: 'Festivals aren’t a one-off launch cost. Each one takes media, offers, and fresh creative, and the platforms hand their free festival traffic to the brands that pitched them early. That has to be in the budget every year, not just the first.',
    noteStrong: 'Our advice: put every festival in the co-marketing budget before the stores open.',
  },
  hire: {
    eyebrow: 'Working with us',
    h2: 'One deal, every eCommerce channel',
    lead: 'We work one way: as your exclusive eCommerce distributor in China.',
    items: [
      {
        title: 'Exclusive eCommerce distribution',
        body: 'We open your stores in your name, run them with our own teams or a specialist we bring in, and handle the platforms, the KOLs, and logistics in China. We’re paid on commission.',
        cta: 'Talk to us',
      },
    ],
  },
  interludeFaq: 'Still with us? Good. This is where most people skip to anyway.',
  faq: {
    eyebrow: 'Pricing and FAQ',
    h2: 'Questions brands ask us first',
    fresh: 'Last reviewed October 9, 2026.',
    ours: {
      q: 'How do you get paid?',
      a: 'We take a commission on all your eCommerce sales in China. On top of that, we invoice a setup cost once, for platform fees, launch content and the like, and we both put money into a co-marketing budget to build the brand. We don’t buy your stock. We ask for exclusivity on your eCommerce channels, usually for at least 3 years.',
      modes: [
        { label: 'eCommerce sales', value: 'Commission' },
        { label: 'Store setup', value: 'One-off setup cost' },
        { label: 'Building the brand', value: 'Shared co-marketing budget' },
        { label: 'Your stock', value: 'Stays yours' },
      ],
    },
    tp: {
      q: 'Who pays for logistics?',
      a: 'You ship the goods to a bonded warehouse in China and pay the freight from your country. Once the stock lands, we pay for the rest: warehousing, pick and pack, and delivery to the shopper.',
      html: 'You ship the goods to a bonded warehouse in China and pay the freight from your country. Once the stock lands, we pay for the rest: warehousing, pick and pack, and delivery to the shopper.',
      figures: [
        { value: 'You', label: 'freight to the bonded warehouse in China' },
        { value: 'Us', label: 'warehousing, pick and pack, and delivery' },
      ],
    },
    items: [
      {
        q: 'Who owns the stores?',
        a: 'You do. The stores open in your brand’s name, which is why we invoice the setup cost instead of absorbing it. If you change distributor one day, the stores go with you.',
      },
      {
        q: 'Why do you ask for exclusivity?',
        a: 'Because we invest before the sales come in: the team, the content, the platform pitches. Exclusivity on your eCommerce channels, usually for at least 3 years, gives that work time to pay back.',
      },
      {
        q: 'Do you have your own TP and DP teams?',
        a: 'Yes, and an in-house marketing team too. They run your stores by default. When an outside TP or DP knows your category better, or already has its shoppers, we bring it in and manage it. You still deal only with us.',
      },
      {
        q: 'Will you buy our stock?',
        a: 'No. Your goods sit in a bonded warehouse in China until they sell. You get them there, and we cover warehousing and delivery from that point.',
      },
      {
        q: 'What’s the co-marketing budget for?',
        a: 'Building the brand in China: media, KOL and KOC campaigns, festival offers, and the content behind them. We both put money in, and we plan it and run it together.',
      },
      {
        q: 'How much will we need to invest?',
        a: 'It depends on the category and the channels. We set the setup cost and the co-marketing budget in the business plan, before you sign. For a first estimate, try our Tmall Global, JD Worldwide, and Douyin cost calculators.',
        html: 'It depends on the category and the channels. We set the setup cost and the co-marketing budget in the business plan, before you sign. For a first estimate, try our <a href="/tools/tmall-global-setup-and-run">Tmall Global</a>, <a href="/tools/jd-worldwide-setup-and-run">JD Worldwide</a>, and <a href="/tools/douyin-cost-calculator">Douyin</a> cost calculators.',
      },
    ],
  },
  cta: {
    eyebrow: 'Let’s talk',
    h2: 'Tell us what you sell, and we’ll tell you what it takes to sell it in China.',
    body: 'A senior member of the team replies within one working day. Or look around first. Our partner database is open to search.',
    primary: 'Contact us',
    secondary: 'Search Compass',
  },
};

export default copy;
