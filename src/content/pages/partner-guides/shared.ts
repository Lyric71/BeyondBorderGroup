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

export const whoPaysFaq = {
  q: 'Who pays for Compass?',
  a: "Brands do. We take no commission from distributors or platform partners, ever, so nobody on your shortlist paid to be there. Our work is project-based and quoted after the first call.",
};
