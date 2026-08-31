/**
 * English copy for /compass and its four sub-pages.
 *
 * Ported from the Compass marketing site. Strings marked verbatim in
 * docs/restructure/content-sources.md are unchanged; the surrounding copy is
 * written in TheChinaPath's voice. The retired brand name does not travel:
 * "Bearing Bridge Compass" reads "Compass" everywhere.
 */
import type { CompassCopy } from './types';

const copy: CompassCopy = {
  facts: {
    headline: 'A contact list tells you who exists. We tell you who fits.',
    problemBody: [
      'Google "China distributor database" and what comes back is a stack of scraped lists with a contact form bolted on the front. A thousand names by lunchtime, almost none of them right for your brand.',
      "We've watched brands sign with a name lifted straight off one of those lists. Four months in, they find out the partner has never really run their category. Or that the warehouse they toured was rented for the morning.",
      'The damage almost never stays inside the year. Lost shelf. A brand rebuild nobody budgeted for. A launch window that will not come around again.',
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
          ours: 'Real categories, real volume, payment terms and fit for your brand',
        },
        { label: 'Years spent building it', scraped: 'A few months', ours: 'Fifteen' },
        {
          label: 'What you walk away with',
          scraped: 'A list of maybes',
          ours: 'A shortlist worth meeting',
        },
      ],
    },
    steps: {
      eyebrow: 'How it works',
      title: 'You brief us. We come back with the shortlist.',
      quote:
        'Finding the right partner in China usually swallows a quarter. We start with the answer.',
      items: [
        {
          label: 'The brief',
          body: "Half an hour to an hour, on a call. Your category, your stage and what you're really trying to pull off in China. A cross-border test. A domestic launch. The quiet replacement of a distributor who's stopped picking up the phone. Sometimes something we've never seen before, which is fine too.",
        },
        {
          label: 'The shortlist',
          body: 'We come back with a map of who actually operates in your space, plus three to five partners worth meeting. Each one with a short brief: strengths, weak spots and where to push when you sit down to negotiate.',
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
      'Compass is our private database of vetted China distributors, Tmall and Douyin Partners and importers. It is how we build your shortlist, in weeks instead of a quarter.',
    eyebrow: 'Find a partner',
    h1: 'Skip 12 months of partner search.',
    lead: 'Compass is our private database of distributors, Tmall Partners, Douyin Partners and importers. We have met every one in person, vetted them on site and, in plenty of cases, worked alongside them on real brand projects.',
    body: 'The wrong partner in China can cost you two years. Some brands never really recover from it. That is the part we help you skip.',
    ctaPrimary: 'Get your shortlist',
    ctaSecondary: 'See how a shortlist is built',
    heroAlt:
      'Two managers walking a consumer-goods distribution warehouse in Shanghai, mid-conversation',
    heroChip: 'Met in person. Vetted on site.',
    h1Rows: [{ text: 'Skip 12 months' }, { text: 'of partner search.', style: 'highlight' }],
    heroStats: [
      { value: '15', counter: 15, label: 'years on the ground' },
      { value: 'Three to five', label: 'partners on each shortlist' },
      { value: 'Two or three', label: 'weeks to the shortlist' },
    ],
    crumbHome: 'Home',
    crumbSection: 'Find a partner',
    scrollCue: 'Scroll',
    problemEyebrow: 'The problem',
    problemFigureAlt: 'Shrink-wrapped pallets of unsold stock sitting in a dim warehouse',
    problemCaption: 'Pallets in. Pallets stayed.',
    stepAlts: [
      'Brand manager taking handwritten notes during a video call brief',
      'Consultant marking a route across a map of China beside printed partner profiles',
      'Brand manager shaking hands with a distribution executive in a Shanghai meeting room',
    ],
    coverageEyebrow: 'What it covers',
    coverageTitle: 'Consumer categories, domestic and cross-border.',
    coverageLead:
      'Distributors, Tmall Partners, Douyin Partners, importers and channel specialists across China. Online and offline, national and regional, with niche category specialists in the mix. A name only goes in when we have a real reason to know it.',
    whoLabel: 'Who is on file',
    categoriesLabel: 'Categories',
    readMoreEyebrow: 'Read more',
    readMoreTitle: 'The longer answer, in three parts.',
    readMoreCta: 'Read',
    cards: [
      {
        title: 'Why vetted',
        body: 'What the database is, and what it actually costs a brand when the wrong partner gets picked.',
      },
      {
        title: 'What is inside',
        body: 'Who is in there, what we record about each one, and why we do not sell it as a product.',
      },
      {
        title: 'How a shortlist is built',
        body: 'From the first brief to a warm introduction, in weeks instead of months.',
      },
    ],
    cardAlts: [
      'Distributor pitch meeting seen across a conference table',
      'Partner profile notes being reviewed at a desk',
      'Two colleagues walking through a distribution facility',
    ],
    closingEyebrow: 'Get in touch',
    closingTitle: 'No obligation. No long pitch.',
    closingLead:
      'Entering China? Replacing a partner that has stopped pulling its weight? Still working out the right shape for distribution in your category? The first call is short. Most people know inside half an hour whether this is the right kind of help for them. If it is not, we can usually point you to someone whose work is.',
    closingCtaPrimary: 'Brief us on your category',
    closingCtaSecondary: 'See the distribution service',
  },

  whyVetted: {
    title: 'Why a vetted China distributor database | Compass | TheChinaPath',
    description:
      'Most China distributor databases are scraped lists. Compass was built one meeting at a time, over fifteen years, by the team that puts consumer brands into Chinese distribution.',
    eyebrow: 'Why vetted',
    h1: 'Most "China distributor databases" are scraped lists. This one is not.',
    lead: 'Compass was built one meeting at a time, by a team that has spent fifteen years putting consumer brands into China’s distribution and eCommerce channels. Every name on the list has been vetted in person, visited on site, or worked with directly on a real brand engagement.',
    body: 'It is the difference between knowing a partner exists and knowing whether they actually fit your brand.',
    ctaPrimary: 'Talk to us about your shortlist',
    ctaSecondary: 'See what is inside',
    questionEyebrow: 'The problem we kept running into',
    questionTitle: 'Every brand entering China asks the same question.',
    questionPull: 'Who do we sell with?',
    questionBody:
      'Distributors, TPs, importers, cross-border operators, category specialists. The list runs long, the names turn over fast, and from outside China they all look the same. A deck is a deck. Every one of them has a warehouse photo, a client logo wall and a very confident account director.',
    storiesEyebrow: 'Three ways it goes wrong',
    storiesTitle: 'We have watched each of these happen more than once.',
    figureAlt:
      'A visiting inspector and a local operations manager on a loading dock, looking out over stacked pallets',
    figureCaption:
      'Every name in the database started as a visit like this one. That is the slow part, and it is the part that makes the list worth anything.',
    storiesCost:
      'The damage rarely stops at one bad year. Lost shelf. Burned listings. A China entry that has to start again from scratch.',
    buildingEyebrow: 'What we have been building',
    buildingTitle: 'Fifteen years of meetings, written down.',
    buildingBody: [
      'The database was not a plan. It was a by-product. Our leadership team has spent fifteen years doing distribution and eCommerce work inside China, and somewhere along the way that work threw off something nobody had budgeted for: a lot of data.',
      'Every distributor we vetted. Every TP we briefed. Every warehouse we walked. We wrote down what they actually do, not what their deck claims. Real categories. Real volume. The reputation they carry with the brands they have worked with before. The ones we would recommend in a heartbeat, and the ones we would quietly steer a client away from.',
      'After a few years of spreadsheets and shared documents, the whole thing became Compass.',
    ],
    questionsEyebrow: 'Why a database',
    questionsTitle: 'A directory lists names. A database answers questions.',
    questionsLead:
      'These are the questions that actually decide a partnership, and not one of them is answerable from a company website.',
    questionsCost:
      'The database does not make the decision for you. What it does is shorten the list, and make sure the names left on it are worth your time in the first place.',
    nextCtaPrimary: 'Talk to us about your shortlist',
    nextCtaSecondary: 'Next: what is inside',
  },

  whatIsInside: {
    title: 'What is inside Compass | TheChinaPath',
    description:
      'Profiles of vetted China distributors, Tmall and Douyin Partners, importers and channel specialists. Real categories, real volume, real commercial terms, and our read on each one.',
    eyebrow: 'What is inside',
    h1: 'Not names and email addresses.',
    lead: "Distributors, Tmall Partners, Douyin Partners, importers and channel specialists across China. Each one gets a structured profile: the real categories they run, real volume, commercial terms, operational capacity and our team's read on whether to recommend them, and for what kind of brand.",
    body: 'It is the kind of detail that actually decides whether a partner is the right fit, and it is the kind that never makes it into a pitch deck.',
    ctaPrimary: 'Talk to us about your shortlist',
    ctaSecondary: 'See how a shortlist is built',
    whoEyebrow: 'Who is in it',
    whoTitle: 'Distributors, TPs, importers and channel specialists across China.',
    whoLead:
      'Domestic and cross-border. Online and offline. Niche category specialists in the mix. A name only goes in when we have a real reason to know it.',
    coverageLabel: 'Categories covered',
    fieldsEyebrow: 'What we record',
    fieldsTitle: 'The fields that decide whether a partnership fits.',
    fieldsLead:
      'Nine groups of fields make up every profile. Together they cover the ground a sales deck rarely does, and the last one is the one clients read first.',
    figureAlt:
      'Partner files, printed profile sheets and a handwritten notebook spread across a desk',
    figureCaption:
      'Field notes, partner files, meeting briefs. The working archive the database was built out of.',
    notProductEyebrow: 'A fair question',
    notProductTitle: 'Why we do not sell you access to it.',
    notProductBody: [
      'People ask, reasonably, whether they can just have a login and browse. The answer is no, and the reason is not commercial. A profile is a judgement, and a judgement without the context behind it is worse than no information at all. "Recommend with caveats" means nothing until somebody tells you what the caveats are and whether they apply to a brand shaped like yours.',
      'There is a shelf-life problem too. A profile written eighteen months ago can already be wrong. Partners lose accounts, change categories, get bought, lose the one person who made them good. The work of a shortlist is half retrieval and half re-checking, and the re-checking is the part a subscription cannot do for you.',
    ],
    notProductClosing: {
      before:
        'So Compass is not a product with tiers. It is the thing our team works from when you brief us, and what you receive is the output of that work: a short list of partners, a written view on each, and a conversation about why. Partners who already have an account with us sign in at ',
      after: '.',
    },
    nextCtaPrimary: 'Brief us on your category',
    nextCtaSecondary: 'Next: how a shortlist is built',
  },

  howItWorks: {
    title: 'How a China partner shortlist gets built | Compass | TheChinaPath',
    description:
      'You brief us. We work the database and come back in two or three weeks with a shortlist of China distributors and platform partners actually worth meeting.',
    eyebrow: 'How a shortlist is built',
    h1: 'A serious starting point, in weeks rather than months.',
    lead: 'You brief us. We work the database and come back quickly with a shortlist or a longlist of partners worth meeting. Names that fit your category, your stage and what you are really trying to do in China.',
    body: 'We cannot promise any partnership works out. No partner search really can. What we can promise is that you will start from a far stronger list than most brands ever assemble on their own.',
    ctaPrimary: 'Book a 30-minute call',
    ctaSecondary: 'See the process',
    heroAlt:
      'A brand manager and a consultant at the corner of a cluttered Shanghai office table, working through a printed partner list',
    heroChip: 'Two to three weeks, start to finish',
    h1Rows: [
      { text: 'A serious starting point,' },
      { text: 'in weeks rather than months.', style: 'highlight' },
    ],
    heroStats: [
      { value: '15', counter: 15, label: 'years on the ground' },
      { value: 'Two or three', label: 'weeks, start to finish' },
      { value: 'Three to five', label: 'names, briefed in detail' },
    ],
    crumbHome: 'Home',
    crumbSection: 'Compass',
    scrollCue: 'Scroll',
    engagementEyebrow: 'How the engagement works',
    engagementTitle: 'From first call to shortlist.',
    engagementLead:
      'Three steps. Two or three weeks. One document and a working session at the end. Quicker when the brief is tight, a little longer when the scope is broad.',
    phases: [
      {
        title: 'The brief',
        body: "A video call to kick things off, half an hour to an hour. We ask about your category, your stage, your channel priorities, your timeline and the constraints you're already working around.",
      },
      {
        title: 'The database',
        body: 'We pull the names that match the brief, then check each one against where the partner actually is right now. A profile written eighteen months ago can already be out of date. Things move quickly here.',
      },
      {
        title: 'The delivery',
        body: 'A document covering the partner list, the profiles and our read on each one. Plus a working session to walk through it together, page by page.',
      },
    ],
    phaseWhen: ['Day one', 'Week one and two', 'Week three'],
    phaseAlts: [
      'A man on a video call at his desk, leaning toward the screen and writing in a notebook at the same time',
      'A woman at a two-monitor desk cross-checking a spreadsheet against printed distributor profiles',
      'Three colleagues around the end of a meeting table, one pointing at a line in a printed document',
    ],
    optionsEyebrow: 'Shortlist, longlist or both',
    optionsTitle: 'Depending on where you are.',
    options: [
      {
        label: 'Shortlist',
        tagline: 'Three to five names',
        body: 'Briefed in detail and ready to meet. For brands moving fast, with a decision pencilled in for the next month or two.',
      },
      {
        label: 'Longlist',
        tagline: 'Fifteen to twenty names',
        body: 'A wider view across categories, channels or regions, with a structured side-by-side. For brands earlier in the process, still working out what distribution should actually look like.',
      },
    ],
    optionsNote: 'A few brands want both. The brief is what decides.',
    deliverablesEyebrow: 'What you get',
    deliverablesTitle: 'A document, a conversation, and warm introductions if you want them.',
    figureAlt:
      'Three people around the corner of a meeting table in Shanghai, working through a printed partner list',
    figureCaption:
      'The working session at the end. The list does not count for much if you do not trust the thinking behind it.',
    deliverables: [
      {
        name: 'A profile per partner',
        body: "Real categories, channels, footprint, commercial terms, brands they've worked with and our view on each. Enough to walk into a meeting knowing exactly what to ask and what to watch for.",
      },
      {
        name: 'A working session',
        body: "We sit down with you and talk through the whole thing. Why this name. Why not that one. Where we'd push in negotiation. The list doesn't count for much if you don't trust the thinking behind it.",
      },
      {
        name: 'Warm introductions',
        body: 'If you want them, we make them. Most of these partners already know us, so you tend to get the A-team in the room rather than the pitch team.',
      },
    ],
    introAlt:
      'Two people shaking hands in an office lobby while a third stands slightly to the side, mid-introduction',
    limitsEyebrow: 'What we can and cannot tell you',
    limitsTitle: 'Honest about the limits.',
    limitsBody: [
      'What we can do: tell you who fits, based on what we have actually seen and worked on ourselves, and make sure the names on your list have earned their place there.',
      'What we cannot: tell you how the partnership will look two years in. That depends on the deal you negotiate, the team they put on your account and a lot of other things that happen after the contract is signed.',
      'Worth saying anyway. Most China entries that go sideways go sideways at the choice of partner, not at the execution.',
    ],
    pricingEyebrow: 'How the engagement is priced',
    pricingTitle: 'One project, one fee.',
    pricingBody: [
      'A single project, not a retainer. Scope and fee are both pinned down before any work starts, and the fee is quoted after the first call once the brief is clear. Three shapes: shortlist only, longlist only, or both with market mapping on top.',
      'The first call is really about fit. By the end of it you will know whether this is the right kind of help for you, and we will know whether we can actually move the needle.',
    ],
    pricingCommissionTail:
      'The distributor does not pay us a referral fee. That is deliberate and it is written into the contract, because a commission would flip our incentive toward closing a deal instead of finding the right partner.',
    timingEyebrow: 'When to come to us',
    timingTitle: 'Earlier is better.',
    timing: [
      {
        label: 'Pre-launch',
        body: "Before you've signed anything. The cleanest case of all. The database has room to earn its keep.",
      },
      {
        label: 'Replacing a partner',
        body: "A distributor sitting on inventory. A TP that can't shift the category. We know who fits and who doesn't.",
      },
      {
        label: 'After a wrong signing',
        body: 'Some brands only come to us later. Same shortlist work, sharper urgency, far less room to maneuver.',
      },
    ],
    nextCtaPrimary: 'Book a 30-minute call',
    nextCtaSecondary: 'Back to: what is inside',
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
