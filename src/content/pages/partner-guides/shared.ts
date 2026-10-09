/**
 * Strings the three partner guides share, so a change to how Compass is
 * described lands on all three at once.
 */
import type { HeroStat } from '../compass/types';

export const heroStats = (label: string): HeroStat[] => [
  { value: '15', counter: 15, label },
  { value: '3 to 5', label: 'names on a typical shortlist' },
  { value: 'Zero', label: 'commission from partners' },
];

export const compassSteps = (match: string) => [
  {
    label: 'The brief',
    body: 'A call of half an hour to an hour. Your category, your stage, the channels you want, and whatever has already been tried.',
  },
  { label: 'The match', body: match },
  {
    label: 'The introductions',
    body: 'Most of these companies already know us, so you walk in with a relationship behind you. That usually puts the senior team in the room instead of the pitch team.',
  },
];

export const compassTiming = 'Shortlists usually take two to three weeks from the brief.';

/** "What partners charge", the same block on the Tmall and Douyin guides. */
export const partnerFees = {
  title: 'What partners charge',
  body: 'Tmall operating partners start at about RMB 45,000 a month plus 5% to 15% of sales, or 15% to 30% of sales with no retainer. The fee depends on the category and on how well Chinese shoppers already know the brand: the less known it is, the more work, and the higher the fee. Douyin partners run RMB 10,000 to 100,000 a month plus 5% to 20%. Ask for commission on net settled sales after returns, never on gross sales.',
};

export const channelsGuideLink = {
  label: 'Read the full guide',
  href: '/guides/china-cross-border-ecommerce-channels',
};

export const whoPaysFaq = {
  q: 'Who pays for Compass?',
  a: "Brands do. We take no commission from distributors or platform partners, ever, so nobody on your shortlist paid to be there. Our work is project-based and quoted after the first call.",
};
