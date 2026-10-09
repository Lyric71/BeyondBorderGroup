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

/** «Lo que cobran los socios», el mismo bloque en las guías de Tmall y de Douyin. */
export const partnerFees = {
  title: 'Lo que cobran los socios',
  body: 'Los socios operadores de Tmall cobran desde unos 45.000 RMB al mes más entre el 5% y el 15% de las ventas, o entre el 15% y el 30% de las ventas sin cuota fija. La tarifa depende de la categoría y de cuánto conozcan ya la marca los compradores chinos: cuanto menos conocida, más trabajo y más alta la factura. Los socios de Douyin cobran de 10.000 a 100.000 RMB al mes más entre el 5% y el 20%. Exija que la comisión se calcule sobre las ventas netas liquidadas tras devoluciones, nunca sobre las ventas brutas.',
};

export const channelsGuideLink = {
  label: 'Leer la guía completa',
  href: '/es/guias/vender-en-china-sin-empresa-china',
};

export const whoPaysFaq = {
  q: '¿Quién paga Compass?',
  a: 'Las marcas. Jamás cobramos comisión a distribuidores ni a socios de plataforma, así que nadie ha pagado por figurar en su lista corta. Trabajamos por proyecto, con un presupuesto que se cierra tras la primera llamada.',
};
