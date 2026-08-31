/**
 * /social-in-china — English copy.
 *
 * Client outcomes are ported from the TheRedScroll repo, not invented. See
 * docs/restructure/content-sources.md section 7 for the file and line behind
 * each figure.
 */
import type { SocialInChinaCopy } from './types';

const copy: SocialInChinaCopy = {
  meta: {
    title: 'Chinese social media: WeChat, RedNote, Douyin, Weibo | TheChinaPath',
    description:
      'What WeChat, RedNote, Douyin and Weibo are each actually for, where social sells and where it only builds an audience, and who should run which part of the work.',
  },

  stages: ['Discover', 'Research', 'Decide', 'Buy', 'Keep'],

  hero: {
    crumbHome: 'Home',
    crumbSection: 'Website and social',
    eyebrow: 'Website and social',
    titleBefore: 'In China, social ',
    titleEm: 'is',
    titleAfter: ' the shop.',
    lead: 'Search happens there. Reviews happen there. So does customer service, and a real share of the checkout. Run those accounts as a posting schedule and you have misread the market.',
    bodyBefore:
      'Here is what each platform is for, and who should run which half of the work. The day-to-day belongs to ',
    trsAnchor: 'TheRedScroll, our social agency',
    bodyAfter: '.',
    ctaPrimary: 'Talk to TheRedScroll',
    ctaSecondary: 'Who runs what',
    shotAria: 'Open theredscroll.com',
    shotCta: 'Open the site',
    shotAlt:
      'TheRedScroll homepage: a China social agency working across WeChat, RedNote, Douyin and Weibo',
    scrollAria: 'Scroll to the platform map',
    scrollLabel: 'Scroll',
  },

  map: {
    eyebrow: 'The platform map',
    title: 'Four platforms, four different jobs.',
    lead: 'The expensive mistake is running one message across all four. Each one owns a different moment in the same purchase, so a post that works on one underperforms on the others by design.',
    tablistAria: 'Chinese social platforms',
    funnelTitle: 'Where it works hardest',
    ownerSplit: 'Shared surface. The store side is ours, the audience side is theirs.',
    ownerTrs: 'Runs with TheRedScroll.',
    ownerLink: 'See the line',
    tailTitle: 'And the long tail, which is longer than most decks admit.',
    tailBody:
      'Some categories live almost entirely out here. Appliances on Zhihu. Anything aimed at students on Bilibili. Ignore it by default, but check it before you write the plan.',
  },

  platforms: [
    {
      key: 'wechat',
      name: 'WeChat',
      cn: '微信',
      logo: '/Images/platforms/wechat-logo.svg',
      role: 'Where you keep the customer',
      tint: '#07C160',
      body: 'Nobody browses WeChat looking for brands. They arrive by QR code, group chat or a friend. What WeChat does better than anywhere else is hold the relationship afterwards, and take the payment. Official account, mini program, WeCom, Channels.',
      weights: [0, 1, 1, 2, 2],
      owner: 'Split',
      image: '/Images/social/wechat.png',
      alt: 'A woman reading a WeChat conversation on her phone in a Shanghai cafe',
    },
    {
      key: 'rednote',
      name: 'RedNote',
      cn: '小红书',
      logo: '/Images/platforms/rednote-logo.svg',
      role: 'Where the purchase gets researched',
      tint: '#FF2442',
      body: 'Xiaohongshu outside China. Part search engine, part review site. A shopper who has heard your name comes here to find out whether real people liked it. Beauty, fashion, wellness and travel live or die on it. Search behaviour looks like Google, which is why content written for Instagram lands flat.',
      weights: [2, 2, 2, 1, 0],
      owner: 'TheRedScroll',
      image: '/Images/social/rednote.png',
      alt: 'A shopper scrolling a RedNote beauty feed on her phone beside skincare bottles and dried flowers',
    },
    {
      key: 'douyin',
      name: 'Douyin',
      cn: '抖音',
      logo: '/Images/platforms/douyin-logo.svg',
      role: 'Where discovery turns into a sale',
      tint: '#FE2C55',
      body: 'A storefront with a video feed attached. Follower count matters far less than the store: short video that ends in a product card, livestream that closes in the same session. The algorithm will hand a brand new account real reach if the content earns it.',
      weights: [2, 1, 1, 2, 1],
      owner: 'Split',
      image: '/Images/social/douyin.png',
      alt: 'A Douyin host presenting a skincare product to camera in a ring-lit livestream studio',
    },
    {
      key: 'weibo',
      name: 'Weibo',
      cn: '微博',
      logo: '/Images/platforms/weibo-logo.svg',
      role: 'Where news breaks and reputation lives',
      tint: '#E6162D',
      body: 'Quieter than it was, still the closest thing China has to a public square. Celebrity partnerships become news here. Hashtags get bought into trending lists. A brand problem surfaces here first, which is why most brands run it as reputation cover rather than growth.',
      weights: [2, 1, 0, 0, 1],
      owner: 'TheRedScroll',
      image: '/Images/platforms/weibo.png',
      alt: 'A Weibo trending-topics billboard glowing over shoppers on a wet Nanjing Road at night',
    },
  ],

  longTail: [
    {
      name: 'Bilibili',
      cn: '哔哩哔哩',
      logo: '/Images/platforms/bilibili-logo.svg',
      who: 'Students, gaming, long-form',
    },
    {
      name: 'Kuaishou',
      cn: '快手',
      logo: '/Images/platforms/kuaishou-logo.svg',
      who: 'Lower-tier cities, livestream',
    },
    {
      name: 'Zhihu',
      cn: '知乎',
      logo: '/Images/platforms/zhihu-logo.svg',
      who: 'Research-heavy buys, appliances',
    },
    {
      name: 'Toutiao',
      cn: '今日头条',
      logo: '/Images/platforms/toutiao-logo.svg',
      who: 'News feed, older readers',
    },
    {
      name: 'Meituan',
      cn: '美团',
      logo: '/Images/platforms/meituan-logo.svg',
      who: 'Local services, F&B, footfall',
    },
    {
      name: 'Pinduoduo',
      cn: '拼多多',
      logo: '/Images/platforms/pinduoduo-logo.svg',
      who: 'Price-led volume',
    },
  ],

  splitSection: {
    eyebrow: 'The honest version',
    title: 'Where social sells, and where it only builds.',
    lead: 'Two companies in one group can easily pitch the same brief. So here is the line, written down, and it holds in both directions.',
    testLabel: 'The test we use: what is the work measured on?',
    filterAria: 'Filter by what the work is measured on',
    filterBoth: 'Both',
    filterGmv: 'GMV',
    filterAudience: 'Audience',
    note: 'Where it blurs, and it does, the test is what the number at the end of the month is. If it is revenue, the work is ours. If it is audience, it is theirs. A livestream can be either, depending on why you are running it. Sequencing matters too: selling into an audience that does not exist yet is the most common way to conclude that Chinese social does not work.',
  },

  split: [
    {
      key: 'gmv',
      owner: 'TheChinaPath runs this',
      title: 'Social that ends in a transaction',
      metric: 'Measured on GMV',
      items: [
        'Douyin store: setup, catalogue, product cards, the operations behind them',
        'WeChat mini store, checkout and the membership mechanics attached to it',
        'Livestream built to close sales in the session',
        'Festival campaigns hanging off a store: 618, Double 11, Chinese New Year',
        'Paid media bought to feed a storefront, judged on what the store did',
      ],
      why: 'Commerce jobs wearing social clothing. They sit with the team that already runs your Tmall and JD operations, because the inventory, the pricing and the promotion calendar live there.',
    },
    {
      key: 'audience',
      owner: 'TheRedScroll runs this',
      title: 'Social that builds the ground underneath',
      metric: 'Measured on audience',
      items: [
        'Daily content across every account, in Chinese, by Chinese writers',
        'Community management, comments, DMs, private-domain work in WeChat groups',
        'KOL and KOC seeding, casting, briefing and the relationships behind it',
        'Brand campaigns judged on reach, sentiment and search volume',
        'Account setup, verification, and the long grind of building a following',
      ],
      why: 'A different discipline on a different clock. It compounds over quarters and needs native writers producing volume every week. It fails when a commerce team runs it as a side task.',
    },
  ],

  proof: {
    eyebrow: 'What that looks like',
    title: 'Audience built, then sales that followed it.',
    followersLabel: 'Camper followers across WeChat, RedNote and Weibo, over 18 months.',
    sameStoreLabel: 'Camper same-store sales, year on year, over the same period.',
    blueLabel: 'New followers in month one for Blue Insurance, launching from zero audience.',
    source:
      "Client work delivered by TheRedScroll. Camper's follower and same-store figures cover the same 18 months, on WeChat, RedNote and Weibo. Blue Insurance launched Hong Kong's first digital life insurer with no existing audience.",
  },

  door: {
    eyebrow: 'Who runs it',
    title: 'Fixed scope, fixed price, a team that already works here.',
    bodyOneBefore: '',
    trsAnchor: 'TheRedScroll',
    bodyOneAfter:
      ' works the way agencies mostly stopped working. Deliverables in the contract, monthly price in the contract, both agreed before anyone starts. No hourly billing, no scope drift halfway through the quarter.',
    bodyTwo:
      'Next step is a 30-minute discovery call. Bring your category, your accounts if you have them, and what you are trying to move. If the answer turns out to be the commerce side, they send you back to us and nobody loses a month to the handoff.',
    ctaPrimary: 'Talk to TheRedScroll',
    ctaSecondary: 'Talk to us instead',
  },
};

export default copy;
