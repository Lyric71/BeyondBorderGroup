/**
 * English copy for /compass and the shortlist form page.
 *
 * Ported from the Compass marketing site. Strings marked verbatim in
 * docs/restructure/content-sources.md are unchanged; the surrounding copy is
 * written in TheChinaPath's voice. The retired brand name does not travel:
 * "Bearing Bridge Compass" reads "Compass" everywhere.
 */
import type { CompassCopy } from './types';

const copy: CompassCopy = {
  facts: {
    headline: 'Anyone can hand you a list. You need the partner who already runs your category.',
    problemBody: [
      'Google "China distributor database" and what comes back is a stack of scraped lists with a contact form bolted on the front. A thousand names by lunchtime. Not one of them tells you who actually moves skincare through Watsons, or which TP already books the KOLs your buyers follow.',
      "In China, your partner is most of your market. One who already runs your category walks in with the retail buyers, the KOL agencies and the livestream hosts. One who doesn't learns all of it on your budget.",
      "We've watched brands sign with a name lifted straight off a list and find out at month four that the partner had never run their category. The damage almost never stays inside the year. Lost shelf. A rebuild nobody budgeted for. A launch window that won't come around again.",
    ],
    yearsLabel: 'Years on the ground',
    comparison: {
      eyebrow: 'How we are different',
      title: 'A database, not another directory',
      axisHeader: 'What we compare',
      columnHeaders: { scraped: 'Scraped directories', ours: 'Compass' },
      rows: [
        {
          label: 'How names get added',
          scraped: 'Bulk uploads, scraped from public sources',
          ours: 'One meeting at a time',
        },
        {
          label: 'What we actually know about them',
          scraped: 'A company name. Maybe an email.',
          ours: 'The categories they really run, the retailers they sell into, the KOLs they work with',
        },
        { label: 'Years spent building it', scraped: 'A few months', ours: 'Fifteen' },
        {
          label: 'What you walk away with',
          scraped: 'A list of maybes',
          ours: 'The partner who already knows your market',
        },
      ],
    },
    steps: {
      eyebrow: 'How it works',
      title: 'You brief us. We find who already knows your category.',
      quote:
        'Your partner decides who stocks you and who talks about you. So that is where we start.',
      items: [
        {
          label: 'The brief',
          body: "Half an hour to an hour, on a call. Your category, your stage and what you're really trying to pull off in China. A cross-border test. A domestic launch. The quiet replacement of a distributor who's stopped picking up the phone. Sometimes something we've never seen before, which is fine too.",
        },
        {
          label: 'The match',
          body: "We work Compass for partners who already run your category: the retailers they sell into, the KOLs and livestream hosts they book, the brands like yours they've grown. You get a map of who operates in your space and the three to five worth meeting, each with a short brief on strengths, weak spots and where to push in the negotiation.",
        },
        {
          label: 'The introductions',
          body: 'Most of these partners already know us. You walk in with a relationship behind you, which usually puts the A-team in the room rather than the pitch team.',
        },
      ],
    },
    categories: [
      'Beauty',
      'Food and beverage',
      'Fashion',
      'Home',
      'Wellness',
      'Mother and baby',
      'Pet',
      'Supplements',
    ],
    categoriesClosing: 'Mostly B2C, with B2B when the buyer is in China.',
    partnerTypes: [
      {
        name: 'Distributors',
        body: 'National and regional players, across general trade, bonded zones and cross-border eCommerce.',
      },
      {
        name: 'TPs',
        body: 'Tmall and Douyin Partners running flagship stores, content commerce and livestream.',
      },
      {
        name: 'Importers',
        body: 'Licenses, customs setup and warehousing for general trade and the bonded zone.',
      },
      {
        name: 'Offline operators',
        body: 'KA buyers, regional wholesalers and group-buying operators with real shelf access.',
      },
    ],
    profileFields: [
      { name: 'Company basics', body: 'Legal entity, headquarters, team size, ownership.' },
      {
        name: 'Real categories',
        body: "Not what their website says. The categories we've actually seen them run.",
      },
      {
        name: 'Channels with real volume',
        body: 'Tmall, JD, Douyin, Pinduoduo, Xiaohongshu, offline, cross-border. Which ones are core and which they only dip into.',
      },
      {
        name: 'Footprint',
        body: 'Cities, provinces, warehouses and where the sales team actually sits.',
      },
      {
        name: 'Commercial terms',
        body: 'Margin, exclusivity, payment terms, MOQs, marketing contribution.',
      },
      {
        name: 'Operational capacity',
        body: 'Volume they can realistically handle. Lead times. Customer service. Returns.',
      },
      {
        name: "Brands they've worked with",
        body: 'Past and present, wherever we have direct visibility.',
      },
      {
        name: 'Reputation signals',
        body: "What other brands actually say about them, on the record and off. Where they've succeeded, where they've come up short.",
      },
      { name: 'Our view', body: 'Recommend, recommend with caveats, avoid, or only-if-X.' },
    ],
    decidingQuestions: [
      'Cross-border or domestic?',
      'Tmall, JD, Douyin or offline retail?',
      'Which categories do they really run, versus the ones listed on their website?',
      'Will they take exclusivity?',
      'How do they pay, and how fast?',
      'Have we seen them succeed with a brand like yours, or seen them fail with one?',
    ],
    failureStories: [
      {
        kind: 'The distributor',
        story:
          'Looked the part on paper. Pitched beautifully. Then sat on the inventory for eighteen months while the brand quietly lost its launch window.',
      },
      {
        kind: 'The TP',
        story:
          'Promised flagship-grade operations. Had never actually run the category. We worked that out at month four, by which point the listings were already burned.',
      },
      {
        kind: 'The importer',
        story:
          'Warehouse, trucking, customs, all squared away. No real ability to sell anything to anyone. Pallets in. Pallets stayed.',
      },
    ],
    noCommission: 'No commission from distributors. Ever.',
    signInPrompt: { before: 'Already a Compass partner? Sign in at ', after: '.' },
  },

  index: {
    title: 'Compass: the vetted China partner database | TheChinaPath',
    description:
      'Compass is our private database of vetted China distributors, Tmall and Douyin Partners and importers. We use it to find the partner who already knows your category.',
    eyebrow: 'Find a partner',
    h1: 'The right partner decides your China business.',
    lead: 'Compass is our private database of distributors, Tmall Partners, Douyin Partners and importers across China. We use it to find the one that already works your category, and already knows its retailers and KOLs. Every company in it, we have met in person and vetted on site.',
    body: 'The wrong partner in China can cost you two years, and some brands never recover. The right one walks you straight into buyers and KOLs they have worked with for years.',
    ctaPrimary: 'Find your partner',
    ctaSecondary: 'See how we find the match',
    partnerAccess: {
      loginPrompt: 'Have a Compass account?',
      login: 'Log in',
      registerPrompt: 'Distributor or platform partner in China?',
      register: 'Register your business',
    },
    heroAlt:
      'Two managers walking a consumer-goods distribution warehouse in Shanghai, mid-conversation',
    heroChip: 'Met in person. Vetted on site.',
    h1Rows: [{ text: 'The right partner' }, { text: 'decides your China business.', style: 'highlight' }],
    heroStats: [
      { value: '15', counter: 15, label: 'years on the ground' },
      { value: '8', label: 'consumer categories on file' },
      { value: 'Zero', label: 'commission from distributors' },
    ],
    crumbHome: 'Home',
    crumbSection: 'Find a partner',
    scrollCue: 'Scroll',
    problemEyebrow: 'The problem',
    problemFigureAlt: 'Shrink-wrapped pallets of unsold stock sitting in a dim warehouse',
    problemCaption: 'Pallets in. Pallets stayed.',
    problemBeats: [
      {
        title: 'A thousand names by lunchtime',
        body: 'Scraped lists with a contact form bolted on the front. Not one tells you who actually moves skincare through Watsons.',
      },
      {
        title: 'Your partner is most of your market',
        body: "One who runs your category walks in with the retail buyers and the livestream hosts. One who doesn't learns it all on your budget.",
      },
      {
        title: 'You find out at month four',
        body: "Lost shelf. A rebuild nobody budgeted for. A launch window that won't come around again.",
      },
    ],
    stepAlts: [
      'Brand manager taking handwritten notes during a video call brief',
      'Consultant marking a route across a map of China beside printed partner profiles',
      'Brand manager shaking hands with a distribution executive in a Shanghai meeting room',
    ],
    channels: {
      eyebrow: 'Channel by channel',
      title: 'Every channel needs its own partner.',
      partnerLabel: 'Partner:',
      items: [
        {
          name: 'Your brand store',
          alt: 'Two eCommerce operators at a desk in Hangzhou, one pointing at a screen of product listings',
          where: 'Tmall, JD',
          partner: 'TP (trade partner)',
          body: "A TP runs your flagship day to day. The right one has already run stores in your category, knows the platform's category managers and plans 618 and Double 11 a year out. That's how you get festival traffic instead of paying for every click.",
        },
        {
          name: 'Social commerce',
          alt: 'A livestream host talking to a phone on a tripod under a ring light, product samples lined up in front of her',
          where: 'Douyin shop, livestreams, creators',
          partner: 'DP (Douyin partner)',
          body: 'Douyin sells through content. The right DP already books the livestream hosts and creators your buyers watch, and knows which ones actually convert in your category. The wrong one buys traffic with your budget. For years.',
        },
        {
          name: 'Online distributors',
          alt: 'A warehouse worker scanning a tote on the conveyor of an online grocery fulfilment center',
          where: 'JD self-run, Tmall Supermarket, Hema',
          partner: 'Online distributor',
          body: 'They buy your stock and resell it through their own channels. The right one already sells your category to those platform buyers, so your listing lands on a shelf that moves.',
        },
        {
          name: 'Offline retail',
          alt: 'A distributor rep and a store buyer crouched at a supermarket shelf, checking placement',
          where: 'Supermarkets, specialty chains, wholesale',
          partner: 'Offline distributor',
          body: "Stores and wholesale, city by city. The right distributor already has the KA buyers, the regional wholesalers and the shelf space in your category. You don't need a sales team of your own in China.",
        },
      ],
    },
    coverageEyebrow: 'What it covers',
    coverageTitle: 'Filed by the category they really sell.',
    coverageLead:
      'Distributors, Tmall Partners, Douyin Partners, importers and channel specialists across China, domestic and cross-border. We file each one by the categories we have seen them run, not the ones on their website. A name only goes in when we have a real reason to know it.',
    whoLabel: 'Who is on file',
    categoriesLabel: 'Categories',
    closingEyebrow: 'Get in touch',
    closingTitle: 'No obligation. No long pitch.',
    closingLead:
      'Entering China? Replacing a partner that has stopped pulling its weight? Tell us your category. The first call is short, and by the end of it you will know whether we have the right partner on file. If we do not, we will say so, and usually point you to someone who can help.',
    closingCtaPrimary: 'Brief us on your category',
    closingCtaSecondary: 'See the distribution service',
    toolsLine: {
      before: 'Still costing the platform side? Our ',
      link: 'free budget calculators',
      after: ' put a first-year number on Tmall Global, JD Worldwide and Douyin before you brief us.',
    },
  },

  shortlist: {
    title: 'Get your China partner shortlist | Compass | TheChinaPath',
    description:
      'Brief us on your category and your stage. We come back with a shortlist of China distributors and platform partners worth meeting, usually in two to three weeks.',
    eyebrow: 'Get your shortlist',
    h1: 'Tell us a little about your brand.',
    lead: 'A few quick questions to get the conversation started. The first call is short and there is no obligation on either side. A senior partner will write back inside one working day, not a form-letter from an intake bot.',
    formTitle: 'Brief us',
    fields: {
      name: 'Your name',
      email: 'Work email',
      company: 'Company',
      website: 'Website',
      category: 'Category',
      categoryPlaceholder: 'Choose a category',
      categoryOther: 'Something else',
      stage: 'Where you are today',
      message: 'What are you trying to solve?',
      messagePlaceholder:
        'The channel you are aiming at, the timeline you are working to, and anything that has already been tried.',
      captchaBefore: 'A quick check to keep bots out: what is ',
      captchaAfter: '?',
      honeypot: 'Leave this field empty',
    },
    stages: [
      'Not in China yet, working out the model',
      'Entering now, need a first partner',
      'Already selling, replacing a partner',
      'Already selling, adding a channel or region',
    ],
    submit: 'Send the brief',
    submitting: 'Sending the brief…',
    consent:
      'By sending this form, you allow us to come back to you about your enquiry. Your details stay strictly with our team.',
    asideEyebrow: 'What happens next',
    asideTitle: 'Three steps, two or three weeks.',
    errors: {
      captcha: 'That result is not quite right. The numbers have just refreshed, please try again.',
      required: 'Please fill in your name, email, company, category and stage.',
      message: 'Please tell us in a line or two what you are trying to solve.',
      network:
        'The brief did not go through. Please try again in a moment. If it keeps failing, you can write to us directly at hello@thechinapath.com.',
    },
    success: 'Brief received. We will come back to you shortly. Redirecting…',
  },
};

export default copy;
