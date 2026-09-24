/**
 * /compass/find-a-douyin-partner-in-china (English).
 * Target query: "how to find a Douyin Partner (DP)".
 *
 * Fee figures come from our Douyin cost calculator
 * (src/pages/tools/douyin-cost-calculator.astro), labelled as such in the copy.
 */
import type { PartnerGuideCopy } from './types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'dp',
  title: 'Find a Douyin Partner (DP) in China | TheChinaPath',
  description:
    'What a Douyin Partner runs, how DPs get paid, how to judge one by watching its live rooms, and the terms that keep your shop and ad account in your name.',
  crumb: 'Finding a DP in China',
  reviewed: 'September 24, 2026',

  hero: {
    eyebrow: 'Finding a DP',
    rows: [{ text: 'How to find a' }, { text: 'Douyin Partner (DP) in China', style: 'highlight' }],
    lead: 'A Douyin Partner, or DP, runs your Douyin shop: short video, brand livestreams, creator deals, and paid traffic. The good ones already know which hosts and creators sell in your category. You can check their work tonight by watching it live.',
    image: {
      src: '/Images/compass/channel-social.webp',
      alt: 'A livestream host talking to a phone on a tripod under a ring light, product samples lined up in front of her',
    },
    stats: heroStats('years meeting partners in China'),
    primary: 'Get a DP shortlist',
    secondary: 'See how Compass works',
  },

  answer: {
    eyebrow: 'The short answer',
    title: 'Judge a DP by the live rooms it runs today',
    body: [
      'To find a Douyin Partner, ask each candidate for the brand accounts it runs in your category, then watch their livestreams and short videos as a shopper would. Ask how they book creators and what they spend on ads. Then ask whose name the shop and the ad account are in, and only after that talk fees.',
      'Douyin sells through content, so a DP works more like a production house with a trading desk attached than like a store manager. It’s also why a Tmall Partner that “also does Douyin” needs checking twice.',
      "Douyin certifies these agencies too, and rates them by capability. That’s a fine place to build a long list. The watching you’ll have to do yourself.",
    ],
  },

  role: {
    eyebrow: 'The job on Douyin',
    title: 'What a Douyin Partner actually runs',
    intro: 'Douyin calls these companies e-commerce service providers (抖音电商服务商). Brands call them DPs.',
    items: [
      {
        name: 'The shop',
        body: 'Douyin shop (抖店) setup, listings, pricing, and customer service, or Douyin Global for cross-border stock.',
      },
      {
        name: 'Brand livestreams',
        body: 'Your own live room, often on air several hours a day, plus the short product videos that feed it and the shop. That means hosts, scripts, and a studio somebody has to run.',
      },
      {
        name: 'Creators',
        body: "Booking creators through Xingtu (巨量星图) for content, and through Douyin’s affiliate program (精选联盟) for sales on commission.",
      },
      {
        name: 'Paid traffic',
        body: "Qianchuan (巨量千川), Douyin’s ad system for shops. You fund the account directly and the DP runs it.",
      },
    ],
  },

  routes: {
    eyebrow: 'Finding candidates',
    title: 'Where good DPs turn up',
    intro: 'The good DPs rarely advertise. Most of the time you find them through the rooms they run.',
    table: {
      headers: ['Route', 'What you get', 'What it misses'],
      rows: [
        [
          "Douyin’s service-provider marketplace",
          'Certified providers, filterable by capability and category.',
          "A capability rating shows scale. It won’t show whether their hosts can sell your product.",
        ],
        [
          'Live rooms you already rate',
          'The most honest pitch there is. Find a brand room in your category that sells, then ask who runs it.',
          'Some brands run their rooms in-house, and the good DPs are often fully booked.',
        ],
        [
          'TPs that “also do Douyin”',
          'One contract for two platforms.',
          'Running a store and running a live room are different trades. Check the Douyin rooms on their own.',
        ],
        [
          'MCNs and creator agencies',
          'Direct access to creators.',
          'They sell creator time. Few run a shop, a daily live room, and an ad account as one P&L.',
        ],
        [
          'Compass',
          'DPs we have watched run rooms in our categories, with notes on hosts, creators, and ad spend.',
          'Coverage runs deep in our eight categories and thin outside them.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Checking a DP',
    title: 'Seven checks before you hand over your Douyin account',
    intro: "Most of a DP’s work happens in public, on camera. We watch a couple of evenings of a DP’s rooms before it goes on a shortlist. You should too, before you read a single slide.",
    table: {
      headers: ['Check', 'A real answer', 'Red flag'],
      rows: [
        [
          'Rooms you can watch',
          'Brand accounts they run now, in your category or close to it. Watch two sessions of each.',
          'Case-study videos only, and no live accounts named.',
        ],
        [
          'Host bench',
          'In-house hosts working shifts, with a trainer and a script per product.',
          'Freelance hosts booked session by session.',
        ],
        [
          'Creator results',
          'Creators they booked in your category, with sales, returns, and cost per order.',
          'Follower counts and “exposure” figures, nothing else.',
        ],
        [
          'Ad efficiency',
          'Qianchuan return on spend by campaign, and what they would cut first.',
          'A plan that only works if the ad budget grows every month.',
        ],
        [
          'After-return numbers',
          'GMV (gross sales) after refunds and returns, straight from the shop backend.',
          'Gross GMV only. On Douyin, returns can eat a big share of a good night.',
        ],
        [
          'Claims and compliance',
          "Scripts checked against China’s Advertising Law and Douyin’s rules on claims for your category.",
          'Hosts who promise results on air. Douyin penalizes it, and so do regulators.',
        ],
        [
          'Ownership',
          "The shop and the brand account in your company’s name. The Qianchuan ad account too.",
          "An account opened on the DP’s entity, or a live room that belongs to the host personally.",
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'The money',
    title: 'How Douyin Partners get paid',
    intro: 'Most DPs charge a monthly retainer plus a commission on GMV. Our Douyin cost calculator puts retainers at about 30,000 RMB a month (roughly 4,200 USD) for a lean setup and up to 100,000 RMB (about 14,000 USD) at the international-brand tier, where commission runs 5% to 8%.',
    table: {
      headers: ['Cost line', 'How it works', 'Watch for'],
      rows: [
        [
          'Retainer',
          'A flat monthly fee for the shop, the live calendar, ads, and customer service.',
          "A retainer that doesn’t say how many live hours and videos it covers.",
        ],
        [
          'Commission on GMV',
          'A share of the sales the DP generates, on top of the retainer.',
          'Commission on gross GMV. Tie it to sales after returns.',
        ],
        [
          'Creator commission',
          'Paid to creators on the sales they drive, billed apart from the DP. Head creators charge 30% to 50%, often with a slot fee (坑位费) on top.',
          'A launch plan built on one big creator session.',
        ],
        [
          'Paid media',
          'Qianchuan spend, funded by you directly into the ad account.',
          'A DP offering to front the ad spend. Those deals tend to fall over.',
        ],
        [
          'Co-fund',
          'A yearly budget on top of the retainer for big moments: Double 11, a launch, or a hero campaign.',
          'A co-fund with no plan attached to it.',
        ],
      ],
    },
    link: { label: "Run your own numbers in the Douyin cost calculator", href: '/tools/douyin-cost-calculator' },
  },

  mistakes: {
    eyebrow: 'What goes wrong',
    title: 'Three ways a Douyin budget burns',
    intro: "Douyin failures are expensive because they happen fast. Here’s where the money usually goes.",
    image: {
      src: '/Images/compass/dp-mistakes.webp',
      alt: 'An empty livestream studio after hours, ring light off, skincare samples still lined up on the table',
    },
    items: [
      {
        name: 'Launching on one big creator',
        body: 'A head creator can clear a batch in an evening, at 30% to 50% commission plus a slot fee. With no brand room behind it, sales fall back the next morning.',
      },
      {
        name: 'Traffic with nothing to show',
        body: 'A weak DP pours your budget into ads and calls the spike growth. Ask to see the content the ads are pushing before you approve the spend.',
      },
      {
        name: "An account you don’t own",
        body: "If the live room and its followers sit on the DP’s account, they stay with the DP when you leave.",
      },
    ],
  },

  compass: {
    eyebrow: 'How we do it',
    title: 'We shortlist DPs whose rooms we have watched',
    lead: 'Compass files each Douyin Partner by the categories it sells. Next to that sit our notes on its hosts and creators, and on what its rooms really convert. We take no commission from partners. We cover eight consumer categories: beauty, food and beverage, fashion, home, wellness, mother and baby, pet, and supplements.',
    steps: compassSteps(
      'We search Compass for DPs already selling your category on Douyin. You get the three to five worth meeting, each with a note on what they do well and where they fall short. Where to push on fees goes in there too.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Questions brands ask',
    title: 'Finding a Douyin Partner: FAQ',
    items: [
      {
        q: 'What is a DP on Douyin?',
        a: "DP means Douyin Partner, the agency that runs a brand’s Douyin shop, livestreams, creator deals, and ads. Douyin’s own term is e-commerce service provider.",
      },
      {
        q: 'How much does a Douyin Partner cost?',
        a: 'Most charge a monthly retainer plus a commission. Our calculator puts retainers at about 30,000 to 100,000 RMB a month (roughly 4,200 to 14,000 USD), with commission of 5% to 8% at the international-brand tier. Ads and creator commission come on top.',
      },
      {
        q: 'Can my Tmall Partner run Douyin too?',
        a: 'Some can. Ask to watch the Douyin rooms they run today and judge those on their own merits. Running a store and running a live room are different jobs.',
      },
      {
        q: 'Should I start with creators or a brand live room?',
        a: 'Most brands need both. Creators bring reach. A brand room brings steady sales day after day. On their own, creator sessions tend to produce spikes rather than a steady business.',
      },
      {
        q: "How fast should a new Douyin shop sell?",
        a: "Slower than most pitches suggest. The first months go on building content, a live schedule, and a bench of creators. A DP promising big numbers in month one is usually planning to buy them with your ad budget.",
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Get in touch',
    title: 'Tell us about your Douyin plans',
    lead: "Launching a first shop, or replacing a DP that spends more than it sells? Tell us the category and where the account stands. One short call is normally enough to know whether we have a better fit on file.",
    primary: 'Get a DP shortlist',
    secondary: 'See how we work',
  },
};

export default copy;
