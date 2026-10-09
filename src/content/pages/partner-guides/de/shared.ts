/**
 * Gemeinsame Bausteine der drei deutschen Partner-Leitfäden, damit eine
 * Änderung an der Beschreibung von Compass auf allen drei Seiten ankommt.
 * Register: Wirtschaftsressort, Sie-Anrede, deutsche Anführungszeichen „…“.
 */
import type { HeroStat } from '../../compass/types';

export const heroStats = (label: string): HeroStat[] => [
  { value: '15', counter: 15, label },
  { value: '3 bis 5', label: 'Namen auf einer üblichen Auswahlliste' },
  { value: 'Null', label: 'Provision von Partnerseite' },
];

export const compassSteps = (match: string) => [
  {
    label: 'Das Briefing',
    body: 'Ein Gespräch von einer halben bis einer Stunde: Ihre Kategorie, wo Sie heute stehen, welche Kanäle Sie anpeilen und was bereits versucht wurde.',
  },
  { label: 'Die Auswahl', body: match },
  {
    label: 'Die Vorstellung',
    body: 'Die meisten dieser Unternehmen kennen uns bereits. Sie gehen also mit einer Beziehung im Rücken ins erste Gespräch, und am Tisch sitzt dann meist die erste Garnitur statt des Pitch-Teams.',
  },
];

export const compassTiming = 'Die Auswahlliste liegt meist zwei bis drei Wochen nach dem Briefing vor.';

/** „Was Partner verlangen“: derselbe Block im Tmall- und im Douyin-Leitfaden. */
export const partnerFees = {
  title: 'Was Partner verlangen',
  body: 'Betriebspartner auf Tmall verlangen ab rund 45.000 RMB im Monat plus 5 bis 15 Prozent des Umsatzes oder 15 bis 30 Prozent ganz ohne Pauschale. Das Honorar hängt von der Kategorie ab und davon, wie gut chinesische Käufer die Marke schon kennen: Je unbekannter sie ist, desto mehr Arbeit fällt an und desto höher liegt das Honorar. Partner auf Douyin rechnen mit 10.000 bis 100.000 RMB im Monat plus 5 bis 20 Prozent. Vereinbaren Sie die Provision auf den abgerechneten Nettoumsatz nach Retouren, niemals auf den Bruttoumsatz.',
};

export const channelsGuideLink = {
  label: 'Zum vollständigen Ratgeber',
  href: '/de/ratgeber/in-china-verkaufen-ohne-chinesische-firma',
};

export const whoPaysFaq = {
  q: 'Wer bezahlt Compass?',
  a: 'Die Marken. Von Distributoren und Plattformpartnern nehmen wir grundsätzlich keine Provision. Wer auf Ihrer Auswahlliste steht, hat für den Platz also nichts bezahlt. Wir arbeiten projektbezogen, das Angebot folgt nach dem ersten Gespräch.',
};
