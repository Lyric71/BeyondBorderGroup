/**
 * /compass/find-a-tmall-partner-in-china (English).
 * Target query: "how to find a Tmall Partner (TP)".
 *
 * Fee figures are the defaults of our own Tmall Global and JD Worldwide
 * calculators (src/pages/tools/*), labelled as such in the copy.
 */
import type { PartnerGuideCopy } from './types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'tp',
  title: 'Find a Tmall Partner (TP) in China | TheChinaPath',
  description:
    'What a Tmall Partner runs, how TPs get paid, the checks that show whether one has really run your category, and the terms that keep the store in your name.',
  crumb: 'Finding a TP in China',
  reviewed: 'September 24, 2026',

  hero: {
    eyebrow: 'Finding a TP',
    rows: [{ text: 'How to find a' }, { text: 'Tmall Partner (TP) in China', style: 'highlight' }],
    lead: 'A Tmall Partner, or TP, runs your store day to day: listings, customer service, campaigns, and paid traffic. Pick one that already runs stores in your category, and whose work you can open on Tmall and judge for yourself.',
    image: {
      src: '/Images/compass/channel-store.webp',
      alt: 'Two eCommerce operators at a desk in Hangzhou, one pointing at a screen of product listings',
    },
    stats: heroStats('years meeting partners in China'),
    primary: 'Get a TP shortlist',
    secondary: 'See how Compass works',
  },

  answer: {
    eyebrow: 'The short answer',
    title: 'Pick the TP whose stores you can already see',
    body: [
      'To find a Tmall Partner, ask each candidate for the stores it runs in your category right now, then open those stores on Tmall and judge them the way a shopper would. Before you sign, meet the people who’d actually run it and read the exit terms twice. The store itself should stay in your company’s name.',
      "Alibaba certifies TPs and rates them in its own service marketplace. Start there if you like. Just know the rating says very little about whether a TP has ever sold a product like yours.",
      'Big listed operators like Baozun run stores for dozens of global brands. A smaller specialist might run six stores, all in one category. Either can work. What matters is how much of the team’s week your brand will get.',
    ],
  },

  role: {
    eyebrow: 'The job',
    title: 'What a Tmall Partner runs for you',
    intro: "TP began as Taobao Partner, Alibaba’s label for the outside agencies it certifies. Brands now use it for any agency running Tmall or Tmall Global stores on their behalf. Some also run bonded-warehouse fulfillment for Tmall Global, while others hand that to a logistics partner, so ask which.",
    items: [
      {
        name: 'Store build and listings',
        body: 'Store design, product pages, the price structure, and the Chinese copy on every one of those pages.',
      },
      {
        name: 'Customer service',
        body: 'Pre-sale and after-sale chat in Chinese. During festivals that often runs past midnight.',
      },
      {
        name: 'Campaigns',
        body: "618, Double 11, and the platform’s category events, planned months ahead with Tmall’s category managers.",
      },
      {
        name: 'Paid traffic',
        body: "Search and display ads through Alimama, Alibaba’s ad platform. You fund the ad account directly and the TP runs it.",
      },
    ],
  },

  routes: {
    eyebrow: 'Where to look',
    title: 'Five places to find TP candidates',
    intro: 'Building a long list takes an afternoon. Cutting it down to the two or three you’d meet in person takes longer. Short on time? Skip ahead to the checks.',
    table: {
      headers: ['Route', 'What you get', 'What it misses'],
      rows: [
        [
          "Alibaba’s service-provider marketplace",
          'Certified partners you can filter, with platform ratings.',
          'Ratings measure general service quality. They tell you little about the categories a TP knows well.',
        ],
        [
          'The Tmall Global onboarding team',
          'Names suggested during the merchant application.',
          'A short list, weighted toward the partners the platform works with most. Their books may already hold your competitors.',
        ],
        [
          'Industry events',
          'Pitches from a lot of TPs in one room.',
          'Every TP sounds the same on stage. Results only show up in the store backend.',
        ],
        [
          'Other brands',
          'The best reference going: a brand manager who has lived with a TP through two Double 11s.',
          "Competitors won’t talk. Brands outside your category can’t tell you how the TP does in yours.",
        ],
        [
          'Compass',
          'TPs we have worked beside, filed by the categories they run.',
          'We only file companies we have met, so coverage runs deep in our eight categories and thin outside them.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Checking a TP',
    title: 'Seven checks before you hand over a store',
    intro: "Tmall stores are public, which is lucky. You can judge a TP’s work more easily than almost any other agency’s, and most of these checks need nothing more than a laptop and an hour.",
    table: {
      headers: ['Check', 'A real answer', 'Red flag'],
      rows: [
        [
          'Live stores in your category',
          'Three or four store names you can open today.',
          '“Client confidentiality.” Every TP runs public storefronts.',
        ],
        [
          'Store quality',
          'Clean pages and current campaigns. Message customer service as a shopper, and the reply should come within minutes.',
          'Stale banners, half-translated copy, replies that take hours.',
        ],
        [
          'Festival results',
          'Business Advisor (生意参谋) screenshots from a comparable store for 618 or Double 11, names removed if they must be.',
          'Headline GMV (gross sales) only, with no view of discounts, returns, or ad spend.',
        ],
        [
          'Ad efficiency',
          'Return on ad spend by campaign type, and a clear view of what they would cut first.',
          'A promise to “buy traffic” with nothing to measure it by.',
        ],
        [
          'The team',
          'A named store manager, designer, ad operator, and service lead, and how many other stores each of them carries.',
          'A senior pitch team you never see again after signing.',
        ],
        [
          'Category experience',
          'Stores they grew in your category, and a working grasp of the registration and claims rules that come with it.',
          'A “similar” category. Cosmetics experience does not carry over cleanly to supplements, or the other way around.',
        ],
        [
          'Ownership and exit',
          'The store registered to your company, its data and content with it, and a handover plan written into the contract.',
          'A store opened under the TP’s own company, or content they say belongs to them.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'The money',
    title: 'How Tmall Partners get paid',
    intro: 'Most TPs charge a monthly retainer plus a commission on sales. Our Tmall Global and JD Worldwide calculators start from 35,000 RMB a month (roughly 4,900 USD) plus 10% of GMV. Use those as a yardstick for real quotes, which move both ways with store size and scope.',
    table: {
      headers: ['Model', 'How they are paid', 'Fits when'],
      rows: [
        [
          'Service (代运营)',
          'A monthly retainer plus a commission on GMV. You own the stock and fund the ads.',
          'You want control of price and brand, and can finance the inventory.',
        ],
        [
          'Distribution (经销)',
          'The TP buys your stock and earns the margin when it resells.',
          "You’d rather not hold stock in China and can live with less control over price.",
        ],
        [
          'Consignment (代销)',
          'The TP sells your stock and pays you after the sale, keeping a share.',
          'A test phase, when neither side wants to tie up capital.',
        ],
      ],
    },
    note: 'Paid media runs through an ad account you fund directly. Partners who offer to front the ad spend tend to fall over. Many brands also set aside a yearly co-fund for big moments like Double 11 or a launch. And put the handover in the contract: content, customer data, and ad accounts should move with you when it ends.',
    link: { label: "Run your own numbers in the Tmall Global calculator", href: '/tools/tmall-global-setup-and-run' },
  },

  mistakes: {
    eyebrow: 'What goes wrong',
    title: 'How TP contracts go sour',
    intro: "When a brand calls us to replace its TP, the story tends to follow one of these lines.",
    image: {
      src: '/Images/compass/tp-mistakes.webp',
      alt: 'An empty eCommerce office at night, one monitor still showing a sales chart sliding downward',
    },
    items: [
      {
        name: 'The TP that never ran your category',
        body: 'The pitch promised flagship-level operations. By month four it was clear the team had never sold the category, and the listings (pricing, reviews, search rank) were already damaged.',
      },
      {
        name: 'GMV at any price',
        body: 'Targets set on GMV alone push a TP toward deep discounts. You hit the number and teach shoppers to wait for the next coupon.',
      },
      {
        name: "A store you don’t own",
        body: "If the store was opened under the TP’s company, leaving means starting over with a new store, no reviews, and no sales history.",
      },
    ],
  },

  compass: {
    eyebrow: 'How we do it',
    title: 'We shortlist TPs we have watched run stores',
    lead: 'Compass files each Tmall Partner by the categories we’ve seen it run. Next to that go our notes on the platform teams it works with and how its stores held up through recent festivals. We take no commission from partners. We cover eight consumer categories: beauty, food and beverage, fashion, home, wellness, mother and baby, pet, and supplements.',
    steps: compassSteps(
      'We search Compass for TPs already running your category. You get the three to five worth meeting, each with a short note on what they do well and where they fall short, plus where to push on fees.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Questions brands ask',
    title: 'Finding a Tmall Partner: FAQ',
    items: [
      {
        q: 'What does TP mean on Tmall?',
        a: "TP stands for Taobao Partner, the name Alibaba gave the outside agencies it certifies to run stores for brands. In practice it now means any agency running a Tmall or Tmall Global store for a brand.",
      },
      {
        q: 'How much does a Tmall Partner cost?',
        a: 'Most charge a monthly retainer plus a commission on GMV. Our calculators start from 35,000 RMB a month (roughly 4,900 USD) plus 10% of GMV, and real quotes move both ways with store size and scope. Paid media comes on top, funded by you.',
      },
      {
        q: 'Can I run a Tmall store without a TP?',
        a: 'Yes, with a team in China that knows the platform. Most foreign brands start with a TP and bring some roles in-house once the store is stable.',
      },
      {
        q: 'Does the same TP handle Tmall Global?',
        a: 'Many run both. Tmall Global has its own rules for cross-border stock and fulfillment, so ask to see stores they run on each.',
      },
      {
        q: "How long does it take to switch TPs?",
        a: "Plan for a handover of several weeks. Store access, content files, ad accounts, and customer service scripts all have to move. If you can, avoid switching in the run-up to 618 or Double 11.",
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Get in touch',
    title: 'Tell us about your store',
    lead: "Opening a first store, or replacing a TP that has gone quiet? Send us the store link, or just the category if there’s no store yet. You’ll know after one short call whether we have the right partner on file.",
    primary: 'Get a TP shortlist',
    secondary: 'See how we work',
  },
};

export default copy;
