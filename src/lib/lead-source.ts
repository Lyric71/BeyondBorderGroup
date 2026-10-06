/**
 * "How did you hear about us?", asked by the contact form (every locale) and
 * the Compass shortlist brief. The forms post the English slug whatever the
 * page language, so the handler checks it against this list and the inbox
 * always reads the same English label.
 */
export const LEAD_SOURCES = ['google', 'ai', 'exhibition', 'referral', 'other'] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

/** Answers that reveal the optional "Which one?" text box. */
export const LEAD_SOURCES_WITH_DETAIL: readonly LeadSource[] = ['exhibition', 'referral', 'other'];

/** Longest "Which one?" answer kept, in characters. */
export const LEAD_SOURCE_DETAIL_MAX = 120;

/** English labels, used in the notification email. */
export const LEAD_SOURCE_LABELS_EN: Record<LeadSource, string> = {
  google: 'Google or another search engine',
  ai: 'An AI assistant (ChatGPT, Gemini, Claude, Perplexity…)',
  exhibition: 'An exhibition or a trade show',
  referral: 'A referral, someone recommended us',
  other: 'Somewhere else',
};

export function isLeadSource(value: string): value is LeadSource {
  return (LEAD_SOURCES as readonly string[]).includes(value);
}
