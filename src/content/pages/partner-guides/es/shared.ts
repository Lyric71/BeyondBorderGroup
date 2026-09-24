/**
 * Textos comunes a las tres guías españolas de socios, para que un cambio en
 * la forma de presentar Compass llegue a las tres a la vez.
 */
import type { HeroStat } from '../../compass/types';

export const heroStats = (label: string): HeroStat[] => [
  { value: '15', counter: 15, label },
  { value: 'De tres a cinco', label: 'nombres en una lista corta habitual' },
  { value: 'Cero', label: 'comisiones cobradas a los socios' },
];

export const compassSteps = (match: string) => [
  {
    label: 'El briefing',
    body: 'Una llamada de media hora a una hora sobre su categoría, su momento, los canales que persigue y lo que ya se ha intentado.',
  },
  { label: 'La selección', body: match },
  {
    label: 'Las presentaciones',
    body: 'La mayoría de estas empresas ya nos conoce, de modo que usted llega avalado por una relación previa. Eso suele sentar a la mesa a la dirección, y no al equipo comercial de turno.',
  },
];

export const compassTiming = 'Del briefing a la lista corta suelen pasar entre dos y tres semanas.';

export const whoPaysFaq = {
  q: '¿Quién paga Compass?',
  a: 'Las marcas. Jamás cobramos comisión a distribuidores ni a socios de plataforma, así que nadie ha pagado por figurar en su lista corta. Trabajamos por proyecto, con un presupuesto que se cierra tras la primera llamada.',
};
