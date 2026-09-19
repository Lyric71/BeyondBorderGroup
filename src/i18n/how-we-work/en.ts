/**
 * Copy for the "How we work" page. The markup, styles and scripts live in
 * src/components/HowWeWork.astro; each locale ships one of these objects.
 * Hrefs are canonical English paths: the component localizes them.
 * RACI cells use 'L' (leads) and 'S' (supports); any other string is a note.
 */
export type PartyKey = 'you' | 'us' | 'tp' | 'logistics' | 'offline';

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
    parties: Record<PartyKey, { name: string; body: string }>;
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
    cols: Record<PartyKey, string>;
    rows: { task: string; cells: string[] }[];
  };
  steps: {
    eyebrow: string;
    h2: string;
    lead: string;
    involved: string;
    items: { title: string; body: string; who: PartyKey[] }[];
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
    { id: 'why', label: 'Why' },
    { id: 'our-role', label: 'Our role' },
    { id: 'tp-or-dp', label: 'TP or DP' },
    { id: 'the-right-partner', label: 'The right partner' },
    { id: 'pitching', label: 'Pitching a partner' },
    { id: 'who-does-what', label: 'Who does what' },
    { id: 'the-steps', label: 'The steps' },
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
    lead: 'Five parties usually share a China launch. Pick one to see what it owns.',
    sideOurs: 'Your side',
    sideMarket: 'The market side',
    parties: {
      you: {
        name: 'You, the brand',
        body: 'You own the brand and the product, and the supply chain behind them. You set the budget, and you sign with the partner.',
      },
      us: {
        name: 'Us',
        body: 'We write the plan and find your TP or DP. Then we pitch you to it and run your eCommerce marketing alongside it. When it fits, we also act as your exclusive online distributor.',
      },
      tp: {
        name: 'Your TP or DP',
        body: 'This is who runs your stores day in and day out, customer service included. A TP works on Tmall and JD, a DP on Douyin. We plan the campaigns with it. Some partners end up buying stock too, but not at the start.',
      },
      logistics: {
        name: 'Logistics partner',
        body: 'You only need one if your TP or DP can’t ship cross-border. When that happens, we go and find one that suits your brand.',
      },
      offline: {
        name: 'Offline distributors',
        body: 'Sell your brand into stores and wholesale. We find them for you. We never act as a sales agent offline.',
      },
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
      offline: 'Offline distributors',
    },
    rows: [
      { task: 'Brand, product, and supply chain', cells: ['L', '', '', '', ''] },
      { task: 'Budget and investment level', cells: ['L', 'S', '', '', ''] },
      { task: 'Business plan', cells: ['S', 'L', '', '', ''] },
      { task: 'Brand localization', cells: ['S', 'L', '', '', ''] },
      { task: 'Finding and pitching the TP or DP', cells: ['S', 'L', '', '', ''] },
      { task: 'Choosing the partner and signing', cells: ['L', 'S', '', '', ''] },
      { task: 'Store operations and customer service', cells: ['', '', 'L', '', ''] },
      { task: 'Content for your eCommerce stores', cells: ['', 'L', 'S', '', ''] },
      { task: 'eCommerce campaigns', cells: ['', 'L', 'L', '', ''] },
      { task: 'Social campaigns and account management', cells: ['', 'L', '', '', ''] },
      { task: 'Offline events', cells: ['', 'L', '', '', ''] },
      { task: 'Cross-border logistics', cells: ['', 'Finds the partner', 'If equipped', 'Otherwise', ''] },
      { task: 'Offline stores and wholesale', cells: ['', 'Finds them', '', '', 'L'] },
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
