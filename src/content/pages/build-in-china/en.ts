/**
 * /build-in-china — English copy.
 *
 * Sources for every figure and for the five-gap framing are recorded in
 * docs/restructure/content-sources.md section 6. The gap bodies are ported from
 * the ChinaWebFoundry repo rather than paraphrased.
 */
import type { BuildInChinaCopy } from './types';

const copy: BuildInChinaCopy = {
  meta: {
    title: 'Website, WeChat and mini program in China | TheChinaPath',
    description:
      'Why your site is slow or invisible in China: Baidu indexing, ICP filing, and whether you need a WeChat mini program or a mobile site. Built by ChinaWebFoundry, our web team in Shanghai.',
  },

  hero: {
    crumbHome: 'Home',
    crumbSection: 'Website and social',
    eyebrow: 'Website and social',
    titleBefore: 'Your site works everywhere ',
    titleEm: 'except',
    titleAfter: ' China.',
    lead: 'Eight seconds to load from Shanghai, if it loads at all. Baidu has never indexed it. And someone on the China side has started saying "mini program" in meetings.',
    bodyBefore:
      "That's five separate problems arriving together, each with a different fix. This page explains what is actually breaking. The build itself belongs to ",
    cwfAnchor: 'ChinaWebFoundry, our web team in Shanghai',
    bodyAfter: '.',
    ctaPrimary: 'Talk to ChinaWebFoundry',
    ctaSecondary: 'Mini program or site?',
    shotAria: 'Open chinawebfoundry.com',
    shotCta: 'Open the site',
    shotAlt:
      'ChinaWebFoundry homepage: a Shanghai web agency showing ICP licence status, Baidu rank and a 1.2 second load time',
    scrollAria: 'Scroll to the five gaps',
    scrollLabel: 'Scroll',
  },

  gapsSection: {
    eyebrow: 'The real problem',
    title: 'Five gaps open at once.',
    lead: 'Most foreign brands launch in China by translating the global website. Six months later the pipeline is empty. Here they are, roughly in the order they hurt.',
    hint: 'Open a gap to read it.',
    figureAlt:
      'A marketing manager at a desk in Shanghai at dusk, waiting on a page that will not load',
    figureCaption: 'Six months in, and the pipeline is still empty.',
  },

  gaps: [
    {
      id: 'content',
      icon: 'content',
      tag: 'Content',
      title: "Your content doesn't land",
      body: 'Chinese buyers scan for trust signals foreign teams bury near the footer: founder credibility, certifications, partner logos, awards. A native writer puts them on the page in the order a Chinese reader looks for them.',
    },
    {
      id: 'ux',
      icon: 'ux',
      tag: 'UX',
      title: 'Your UX feels foreign',
      body: 'Mobile-first, usually inside the WeChat in-app browser. Long-scroll, dense, trust signals up front. Western minimalism reads as unfinished.',
    },
    {
      id: 'baidu',
      icon: 'baidu',
      tag: 'Baidu',
      title: "Baidu doesn't see you",
      body: 'Different ranking signals, different indexing rules. Baidu will not index a site properly without an ICP filing and a Chinese host. The Google playbook does not transfer.',
      cite: "Baidu holds roughly half of China's search market. Google sits under 3%. Source: Statcounter Global Stats, China, 2024.",
    },
    {
      id: 'ai',
      icon: 'ai',
      tag: 'AI engines',
      title: 'AI engines already replaced search for many buyers',
      body: "Doubao, Kimi, DeepSeek and Baidu's Wenxin now answer questions that used to go to a search box. The user rarely clicks through. If your pages are not structured for an AI to cite, you are invisible.",
    },
    {
      id: 'infra',
      icon: 'infra',
      tag: 'Infrastructure',
      title: 'China hosting is only the floor',
      body: 'Slow loads, broken plugins, scripts that fail silently behind the Firewall. Get the floor right, then brand resonance is what wins the customer.',
    },
  ],

  icp: {
    eyebrow: 'The part nobody explains',
    title: 'ICP filing, plainly.',
    lead: 'A registration number from the Ministry of Industry and Information Technology, tied to one domain and one mainland host. Closer to a licence plate than a certificate. Without it, no server in China is allowed to serve your domain.',
    steps: [
      {
        step: 'Chinese entity',
        detail: 'A mainland legal entity holds the filing. Not the agency.',
      },
      {
        step: 'Submit',
        detail: 'Filed through your Chinese host, with a domain and a real address.',
      },
      { step: 'MIIT review', detail: 'Several weeks of waiting. This is the long pole.' },
      { step: 'Number issued', detail: 'Your 备案号 goes in the site footer. Hosting turns on.' },
    ],
    figureAlt:
      'Footer of a Chinese website showing an ICP filing number linked to the MIIT register, next to a public security registration number',
    figureCaption:
      'Where it ends up. Every site served from the mainland carries its number in the footer, linked back to the MIIT register. Numbers here are illustrative.',
    unlockTitle: 'What the filing opens',
    unlocks: [
      'Baidu indexes the site properly',
      'Hosting inside the mainland',
      'WeChat and mini program integration',
      'Payment on a mainland domain',
    ],
    trapTitle: 'The trap',
    trapBody:
      'The filing sits with a Chinese legal entity, so who holds it matters more than it first looks. Let a vendor file on your behalf and you may find, two years later, that you cannot move hosts without their cooperation.',
    trapKicker: 'Start it before the design, not after. The wait runs happily in parallel.',
  },

  choose: {
    figureAlt:
      'A WeChat mini program storefront in Chinese, with the capsule button, a promotional banner, category shortcuts, product cards priced in yuan and a bottom tab bar',
    figureCaption:
      'How a shopper actually meets a mini program: inside WeChat, no download, no login wall, the capsule button parked top right where your interface cannot cover it.',
    eyebrow: 'The question everyone asks second',
    title: 'A WeChat mini program, or a mobile site?',
    lead: 'Different problems, and the wrong answer costs you quietly. Plenty of brands need both eventually. Almost nobody needs both first. Four questions get most teams to an answer.',
    questions: [
      {
        q: 'Does the payment have to close inside WeChat, with no redirect?',
        yes: 'mp',
        hint: 'WeChat Pay in-session',
      },
      {
        q: 'Do you need strangers to find you on Baidu or in the AI engines?',
        yes: 'site',
        hint: 'Search visibility',
      },
      {
        q: 'Do buyers come back, and do membership or stored value matter?',
        yes: 'mp',
        hint: 'Repeat and loyalty',
      },
      {
        q: 'Will someone local publish new content most weeks?',
        yes: 'site',
        hint: 'Content cadence',
      },
    ],
    yes: 'Yes',
    no: 'No',
    reset: 'Reset answers',
    verdictEyebrow: 'Reading so far',
    verdictEmptyTitle: 'Answer the four',
    verdictEmptyBody:
      'Nothing scored yet. Tap through the questions and the recommendation updates as you go.',
    verdictMp: 'WeChat mini program',
    verdictMpBody:
      'Payment and repeat behaviour are doing the work here. Build inside WeChat first, and treat the mobile site as the second phase.',
    verdictSite: 'Mobile site',
    verdictSiteBody:
      'You need to be found and you have content to publish. Build the site first. ICP filing starts now, because the wait is the long pole.',
    verdictEven: 'Build the site first',
    verdictEvenBody:
      'It splits evenly, which usually means the site. It is the one you can measure, and a mini program on top of it is a smaller second project than the reverse.',
    verdictPartial: 'Leaning',
    verdictPartialBody: 'Keep going. A couple more answers and this settles.',
    meterLeft: 'Mini program',
    meterRight: 'Mobile site',
    rule: 'Rule of thumb: buyer searching, build the site. Buyer already following you, build the mini program. Cannot say which, build the site, because it is the one you can measure.',
    surfaces: [
      {
        key: 'mp',
        name: 'WeChat mini program',
        cn: '小程序',
        blurb: 'Lives inside WeChat. Close to invisible outside it.',
        right: [
          'WeChat Pay has to close the sale',
          'Membership, tiers and stored value matter',
          'Buyers arrive from group chats, pushes and in-store QR codes',
          'The experience is transactional and people come back',
        ],
        wrong: [
          'You mostly need to be found by someone searching',
          'Nobody on the team can keep a second product surface fed',
        ],
      },
      {
        key: 'site',
        name: 'Mobile site',
        cn: '移动站',
        blurb: 'Can be found, linked and indexed. Cannot take a WeChat payment on its own.',
        right: [
          'Search visibility is the point, on Baidu and in the AI engines',
          'Content changes often and a local marketer has to publish it',
          'You want one URL to share anywhere, not only inside WeChat',
          'The buying decision is long and mostly research',
        ],
        wrong: [
          'Payment has to close inside WeChat with no redirect',
          'Your whole audience already lives in one official account',
        ],
      },
    ],
    rightWhen: 'Right call when',
    wrongWhen: 'Wrong call when',
  },

  proof: {
    eyebrow: 'What changes',
    title: 'The numbers move fast once the floor is right.',
    loadLabel: 'Median load time on launched sites, measured from Shanghai.',
    bounceLabel:
      'Median bounce rate before and after, foreign brand sites in China, first 90 days.',
    source:
      'Measured by ChinaWebFoundry across launched client sites. Bounce rate is a before and after on the same brands.',
  },

  door: {
    eyebrow: 'Who builds it',
    title: "We don't build websites. The people down the hall do.",
    bodyOneBefore: '',
    cwfAnchor: 'ChinaWebFoundry',
    bodyOneAfter:
      ' sits in the same office as the team running your Tmall store. Same group, same weekly meeting, so nothing gets lost between the people who know the channel and the people who write the code.',
    bodyTwo:
      'Next step is a China Site Scan. They run your domain from inside the mainland and send back what actually happens. Free, a few days.',
    ctaPrimary: 'Talk to ChinaWebFoundry',
    ctaSecondary: 'Talk to us instead',
    scanAria: 'Example site scan',
    scanTitle: 'China Site Scan',
    scanLive: 'running',
    scanRows: [
      {
        label: 'Load time, measured from Shanghai',
        to: 8.4,
        decimals: 1,
        suffix: 's',
        note: 'target under 2.5s',
        pct: 94,
        tone: 'bad',
      },
      {
        label: 'Pages indexed by Baidu',
        to: 0,
        decimals: 0,
        suffix: '',
        note: 'no ICP filing on record',
        pct: 100,
        tone: 'bad',
      },
      {
        label: 'Scripts blocked behind the Firewall',
        to: 6,
        decimals: 0,
        suffix: '',
        note: 'fonts, maps, tag manager',
        pct: 64,
        tone: 'warn',
      },
    ],
    scanAiLabel: 'Readable by Chinese AI engines',
    scanAiValue: 'No',
    scanAiNote: 'Doubao, Kimi, DeepSeek',
    scanFoot: 'Real scan, anonymised. Four of five brands we check fail on at least three rows.',
  },
};

export default copy;
