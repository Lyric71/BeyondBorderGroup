/**
 * /compass/find-a-distributor-in-china (English).
 * Target query: "how to find a distributor in China".
 */
import type { PartnerGuideCopy } from './types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'distributor',
  title: 'How to find a distributor in China | TheChinaPath',
  description:
    'Where foreign brands find China distributors, the eight checks that separate a real one from a trading company, and the terms to settle before you sign.',
  crumb: 'Finding a distributor in China',
  reviewed: 'September 24, 2026',

  hero: {
    eyebrow: 'Finding a distributor',
    rows: [{ text: 'How to find a' }, { text: 'distributor in China', style: 'highlight' }],
    lead: "The distributor worth signing already sells products like yours to the retailers you want, and can show you the numbers. The hard part is telling that company apart from the dozens that only claim to be it.",
    image: {
      src: '/Images/compass/channel-offline.webp',
      alt: 'A distributor rep and a store buyer crouched at a supermarket shelf, checking placement',
    },
    stats: heroStats('years meeting China distributors'),
    primary: 'Get a distributor shortlist',
    secondary: 'See how Compass works',
  },

  answer: {
    eyebrow: 'The short answer',
    title: 'Find the one that already sells your category',
    body: [
      'To find a distributor in China, look for a company that already moves your category through the channels you want, then verify it. Check the business license, call two brands it carries, visit the warehouse, and ask for sell-out data. Expect the list to shrink at every step.',
      'Category fit beats size. A national importer with a thick brand book will give yours a line on a price sheet. A regional player that’s spent six years selling imported skincare into Watsons will put a sales team behind it.',
      'One more thing before you search. In China, “distributor” covers several quite different businesses, and you need to know which one you’re after.',
    ],
  },

  role: {
    eyebrow: 'Know what you’re hiring',
    title: 'Four kinds of company call themselves distributors',
    intro: 'They all buy your stock. Past that point they’re very different businesses.',
    items: [
      {
        name: 'Importers',
        body: 'Hold the import licenses, clear customs, and put the Chinese label on your pack. Some sell. Plenty just move boxes. That’s fine, as long as you know it going in.',
      },
      {
        name: 'National distributors',
        body: "Cover several regions, often with key-account teams selling into chains like Sam’s Club and Ole’. Real reach. Your brand competes for attention with everything else they carry.",
      },
      {
        name: 'Regional distributors',
        body: 'Own one province or one cluster of cities and know its buyers and wholesalers by name. A lot of so-called national coverage is really a patchwork of these.',
      },
      {
        name: 'Online distributors',
        body: 'Buy stock and resell it to JD self-run, Tmall Supermarket, and Hema, or through stores of their own. They live on platform buyer relationships and fast replenishment.',
      },
    ],
  },

  routes: {
    eyebrow: 'Where brands go looking',
    title: 'Six places to find candidates, and what each one misses',
    intro: 'All six will get you names. We’ve used every one of them at some point, and they are not equally useful.',
    table: {
      headers: ['Route', 'What you get', 'What it misses'],
      rows: [
        [
          'Trade fairs',
          'Face time with hundreds of buyers in a couple of days. CIIE in Shanghai every November, the spring China Food and Drinks Fair in Chengdu, and CBE in Shanghai for beauty.',
          'Stands are staffed by business development people. The people who would sell your brand are back at the office.',
        ],
        [
          'B2B platforms (Alibaba.com, 1688)',
          'Thousands of listings, searchable by category.',
          'Built for sourcing out of China. Most listings are factories and traders looking for buyers abroad, the opposite of what you need.',
        ],
        [
          'Trade agencies and chambers',
          'Vetted contacts and matchmaking days, often subsidized. Business France, GTAI, and the foreign chambers in Shanghai all run them.',
          'Lists lean toward members and past attendees. Few follow a brand past the first meeting.',
        ],
        [
          'Scraped databases',
          'A spreadsheet of a thousand names by lunchtime.',
          'No view of which categories a company really sells, or whether anyone there still answers the phone.',
        ],
        [
          'LinkedIn and cold email',
          'Direct reach to named people.',
          'Chinese distributors run on WeChat. Reply rates are low, and a quick yes from a stranger deserves a second look.',
        ],
        [
          'Referrals from brands and operators',
          'The strongest signal there is: someone who has watched the distributor work.',
          "Hard to get cold. It takes years of meetings to build, which is why we wrote ours down in Compass.",
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Before you sign',
    title: 'Eight checks that separate a distributor from a trading company',
    intro: 'You can run the first six from a desk before any call. The last two need a meeting, ideally in their office. If you print one part of this page, print this table.',
    table: {
      headers: ['Check', 'A real answer', 'Red flag'],
      rows: [
        [
          'Business license',
          'Listed on the National Enterprise Credit Information Publicity System, with import or wholesale of your category in its business scope and a few years of history.',
          'Registered last year, tiny registered capital, or a scope that runs from electronics to wine.',
        ],
        [
          'Court and credit record',
          'Clean on Qichacha or Tianyancha, the two big company-lookup apps, or a handful of routine commercial disputes.',
          'Listed as a dishonest debtor (失信被执行人), or a string of suits from suppliers over unpaid invoices.',
        ],
        [
          'Category licenses',
          'The permits your category needs, a food business license for food for instance, held in its own name.',
          '“Our partner holds that license.” Then the partner is who you’re dealing with.',
        ],
        [
          'Brand portfolio',
          'The brands it carries today, with contacts at two you can call.',
          'Big logos on the deck and nobody you can phone.',
        ],
        [
          'Retail listings',
          'Named key accounts (the big chains) and the stores your product would sit in. You can walk into one and look.',
          '“We cover all of China.” Nobody covers all of China.',
        ],
        [
          'Online footprint',
          'Stores or supplier listings on JD, Tmall, or Douyin that you can find yourself.',
          'A website, a WeChat account, and nothing that actually sells.',
        ],
        [
          'Sell-out data',
          'Scan or depletion data (what actually left store shelves) from a comparable brand, even with the name blacked out.',
          "Sell-in figures only, meaning what the distributor bought from brands. Stock sitting in a warehouse hasn’t sold yet.",
        ],
        [
          'The team on your brand',
          'Named people, the cities they sit in, and how much of their week goes to you.',
          'The founder does the pitch and a junior you never meet does the work.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'The deal',
    title: 'Terms to settle before the first container ships',
    intro: 'A distributor makes its money on margin: it buys from you, then sells to retail at a markup. How big that markup runs depends on the channel and on who carries listing fees, marketing, and credit risk, so compare offers on the price your product reaches the shelf at. Everything around the margin gets negotiated, and most of it ends up in the contract.',
    table: {
      headers: ['Term', 'What to agree', 'What to watch'],
      rows: [
        [
          'Exclusivity',
          'By channel and by region, with a sales target attached to each.',
          'National exclusivity across every channel on day one. Easy to give away, very hard to get back.',
        ],
        [
          'Minimum orders',
          'A first order sized to a real launch plan, then quarterly targets.',
          'No minimum at all, which leaves the distributor free to sit on your brand.',
        ],
        [
          'Listing fees (进场费)',
          'Who pays the retailer entry and slotting fees, and how they are recovered.',
          'Open-ended “market support” invoices that turn up once the product is on shelf.',
        ],
        [
          'Marketing contribution',
          'A budget split, a plan per quarter, and proof of spend.',
          'A distributor that expects you to fund everything with no volume commitment.',
        ],
        [
          'Payment terms',
          'Prepayment or a letter of credit for the first orders, credit once there is a track record.',
          'Long credit terms from day one with a company you met at a fair.',
        ],
        [
          'Trademark and registrations',
          'Your trademark and product registrations held in your own name. File the trademark in China before the first meeting, because China is first-to-file.',
          'A distributor kindly offering to register the brand for you. Some do it in their own name.',
        ],
        [
          'Exit',
          'Termination for missed targets, a stock buy-back, and a handover of listings.',
          'No exit clause, or one that only works if the distributor agrees to it.',
        ],
      ],
    },
    note: "Settle the exit while everyone still likes each other. Brands that sign without targets or a way out often spend year two negotiating their way out, while the shelf space goes to someone else.",
    link: { label: "Distributor or your own store? Read our comparison", href: '/insights/china-distributor-vs-own-store' },
  },

  mistakes: {
    eyebrow: 'What goes wrong',
    title: 'How distributor deals usually fail',
    intro: "Most of the distributor deals we’ve been asked to untangle broke in one of a few familiar ways. None of them showed at the first meeting.",
    image: {
      src: '/Images/compass/problem-pallets.webp',
      alt: 'Shrink-wrapped pallets of imported stock sitting unsold in a dim warehouse',
    },
    items: [
      {
        name: 'Signing the biggest name',
        body: 'The largest importer at the fair carries hundreds of brands. Yours becomes a line on a price sheet, and the sales team pushes whatever pays them best this quarter.',
      },
      {
        name: 'Buying the pitch',
        body: "A polished deck and all the right logos. Then eighteen months with the brand’s stock sitting in its warehouse, while the launch window shut.",
      },
      {
        name: 'Hiring an importer to sell',
        body: 'The importer had a warehouse and a clean customs record. It had no sales team, so the stock came in and stayed.',
      },
    ],
  },

  compass: {
    eyebrow: 'How we do it',
    title: 'We shortlist from distributors we have met',
    lead: 'Compass is our private database of distributors, Tmall Partners, Douyin Partners, and importers across China. We have met every company in it in person and vetted it on site, and we file each one by the categories we have seen it sell. We cover eight consumer categories: beauty, food and beverage, fashion, home, wellness, mother and baby, pet, and supplements.',
    steps: compassSteps(
      'We search Compass for distributors already selling your category. You get the three to five worth meeting, each with a short note on what they do well and where they fall short. We also flag where to push in the negotiation.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Questions brands ask',
    title: 'Finding a China distributor: FAQ',
    items: [
      {
        q: 'How long does it take to find a distributor in China?',
        a: 'The search can be quick. A Compass shortlist typically takes two to three weeks from the brief. Meetings, samples, registrations, and contract talks take longer, and the category sets the pace: food and cosmetics need registrations before the first shipment.',
      },
      {
        q: 'Should I give a China distributor exclusivity?',
        a: 'Sometimes, and narrowly. Tie exclusivity to one channel and one region, with a sales target attached. Keep the right to take it back if the target is missed.',
      },
      {
        q: 'Do I need a distributor if I sell cross-border?',
        a: 'Not always. A cross-border store on Tmall Global or JD Worldwide can run without one, with a Tmall Partner handling operations. Plenty of brands start cross-border and bring in a distributor when they move into general trade (regular, duty-paid imports) and offline retail.',
      },
      {
        q: 'Can I find a distributor on Alibaba?',
        a: 'You can find companies there. But Alibaba.com and 1688 were built for sourcing from China, so most listings are factories and traders looking for buyers abroad.',
      },
      {
        q: "What margin does a China distributor take?",
        a: "It depends on the channel and on who pays for what. A distributor that also covers listing fees, marketing, and credit risk will ask for more than one that only moves boxes. Compare offers on the shelf price your product ends up at, and on who pays for each cost along the way.",
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Get in touch',
    title: 'Tell us your category',
    lead: "The first call is short. By the end of it you’ll know whether we have the right distributor on file. If we don’t, we’ll say so, and point you to someone who can help if we know one.",
    primary: 'Get a distributor shortlist',
    secondary: 'See how we work',
  },
};

export default copy;
