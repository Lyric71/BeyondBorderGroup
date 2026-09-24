/**
 * /es/compass/encontrar-tmall-partner-en-china (español).
 * Consulta objetivo: «cómo encontrar un Tmall Partner (TP)».
 *
 * Las tarifas son los valores por defecto de nuestras calculadoras de
 * Tmall Global y JD Worldwide (src/pages/tools/*), presentados como tales.
 * 35.000 RMB ≈ 4.300 euros (1 EUR ≈ 8,2 RMB).
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'tp',
  locale: 'es',
  title: 'Encontrar un Tmall Partner (TP) en China | TheChinaPath',
  description:
    'Qué gestiona un Tmall Partner, cómo se le paga, cómo saber si de verdad conoce su categoría y qué cláusulas mantienen la tienda a nombre de su empresa.',
  crumb: 'Encontrar un TP en China',
  reviewed: '24 de septiembre de 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'Encontrar un TP',
    rows: [{ text: 'Cómo encontrar un' }, { text: 'Tmall Partner (TP) en China', style: 'highlight' }],
    lead: 'Un Tmall Partner, o TP, se ocupa de la gestión diaria de su tienda: fichas de producto, atención al cliente, campañas y tráfico de pago. Elija uno que ya lleve tiendas de su categoría: su trabajo está en Tmall, a la vista, y usted puede evaluarlo por su cuenta.',
    image: {
      src: '/Images/compass/channel-store.webp',
      alt: 'Dos operadores de comercio electrónico en una mesa de trabajo en Hangzhou; uno señala una pantalla con fichas de producto',
    },
    stats: heroStats('años reuniéndonos con socios en China'),
    primary: 'Pedir una lista corta de TP',
    secondary: 'Ver cómo funciona Compass',
  },

  answer: {
    eyebrow: 'La respuesta corta',
    title: 'Elija al TP cuyas tiendas ya puede ver',
    body: [
      'Para encontrar un Tmall Partner, pida a cada candidato las tiendas de su categoría que gestiona hoy, ábralas en Tmall y júzguelas con ojos de comprador. Antes de firmar, conozca a quienes llevarían realmente la suya y lea dos veces las condiciones de salida. La tienda debe quedar a nombre de su empresa.',
      'Alibaba certifica a los TP y los califica en su propio mercado de proveedores de servicios. Es un punto de partida válido, aunque esa calificación apenas dice nada sobre si el TP ha vendido alguna vez un producto como el suyo.',
      'Los grandes operadores cotizados gestionan tiendas de decenas de marcas internacionales. Un especialista más pequeño puede llevar seis, todas de la misma categoría. Ambos modelos funcionan. Lo decisivo es cuántas horas semanales del equipo se llevará su marca.',
    ],
  },

  role: {
    eyebrow: 'El trabajo',
    title: 'Qué hace un Tmall Partner por usted',
    intro: 'La sigla TP nació como Taobao Partner, la etiqueta con la que Alibaba distingue a las agencias externas que certifica. Hoy las marcas la aplican a cualquier agencia que gestione tiendas en Tmall o Tmall Global por cuenta de una marca. Algunas asumen también la logística desde almacenes en zona franca para Tmall Global; otras la subcontratan a un operador logístico. Conviene preguntarlo.',
    items: [
      {
        name: 'Montaje de la tienda y fichas',
        body: 'Diseño de la tienda, páginas de producto, estructura de precios y todos los textos en chino de esas páginas.',
      },
      {
        name: 'Atención al cliente',
        body: 'Chat en chino antes y después de la compra, que en las grandes campañas se prolonga a menudo más allá de la medianoche.',
      },
      {
        name: 'Campañas',
        body: '618, Double 11 y los eventos de categoría de la plataforma, preparados con meses de antelación junto a los responsables de categoría de Tmall.',
      },
      {
        name: 'Tráfico de pago',
        body: 'Anuncios de búsqueda y de display en Alimama, la plataforma publicitaria de Alibaba. Usted financia directamente la cuenta publicitaria y el TP la gestiona.',
      },
    ],
  },

  routes: {
    eyebrow: 'Dónde buscar',
    title: 'Cinco vías para encontrar candidatos',
    intro: 'Reunir una lista larga lleva una tarde. Reducirla a los dos o tres candidatos que merecen una reunión cuesta bastante más. ¿Tiene prisa? Pase directamente a las comprobaciones.',
    table: {
      headers: ['Vía', 'Qué ofrece', 'Qué se le escapa'],
      rows: [
        [
          'El mercado de proveedores de servicios de Alibaba',
          'Socios certificados, filtrables y con la calificación de la plataforma.',
          'La calificación mide la calidad general del servicio y dice poco de las categorías que un TP domina.',
        ],
        [
          'El equipo de incorporación de Tmall Global',
          'Nombres sugeridos durante la solicitud de alta como comerciante.',
          'Una lista corta, sesgada hacia los socios con los que más trabaja la plataforma. Puede que ya lleven a sus competidores.',
        ],
        [
          'Eventos del sector',
          'Las presentaciones de muchos TP en una misma sala.',
          'Sobre el escenario, todos los TP suenan igual. Los resultados solo aparecen en el panel de gestión de la tienda.',
        ],
        [
          'Otras marcas',
          'La mejor referencia posible: un responsable de marca que ha vivido dos Double 11 con un TP.',
          'La competencia no suelta prenda, y una marca de otra categoría no puede decirle cómo rinde el TP en la suya.',
        ],
        [
          'Compass',
          'TP con los que hemos trabajado codo con codo, clasificados según las categorías que gestionan.',
          'Solo incluimos empresas que conocemos en persona: la cobertura es exhaustiva en nuestras ocho categorías y escasa fuera de ellas.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Evaluar a un TP',
    title: 'Siete comprobaciones antes de ceder una tienda',
    intro: 'Las tiendas de Tmall son públicas, y eso juega a su favor. El trabajo de un TP se evalúa con más facilidad que el de casi cualquier otra agencia, y la mayoría de estas comprobaciones solo requieren un portátil y una hora.',
    table: {
      headers: ['Comprobación', 'Respuesta sólida', 'Señal de alarma'],
      rows: [
        [
          'Tiendas activas en su categoría',
          'Tres o cuatro tiendas con nombre que pueda abrir hoy mismo.',
          '«Confidencialidad con el cliente». Las tiendas que gestiona cualquier TP están a la vista de todos.',
        ],
        [
          'Calidad de la tienda',
          'Páginas cuidadas y campañas al día. Escriba a atención al cliente como si fuera un comprador: la respuesta debería llegar en minutos.',
          'Banners caducados, textos a medio traducir y respuestas que tardan horas.',
        ],
        [
          'Resultados en campañas',
          'Capturas de Business Advisor (生意参谋) de una tienda comparable durante 618 o Double 11, con los nombres ocultos si es necesario.',
          'Solo la cifra de GMV (ventas brutas), sin rastro de descuentos, devoluciones ni inversión publicitaria.',
        ],
        [
          'Eficiencia publicitaria',
          'El retorno de la inversión publicitaria por tipo de campaña, y una idea clara de qué recortarían primero.',
          'La promesa de «comprar tráfico» sin ninguna forma de medirlo.',
        ],
        [
          'El equipo',
          'Un responsable de tienda, un diseñador, un gestor de campañas y un jefe de atención al cliente con nombre y apellidos, y cuántas tiendas más lleva cada uno.',
          'Un equipo directivo que hace la presentación y desaparece tras la firma.',
        ],
        [
          'Experiencia en la categoría',
          'Tiendas de su categoría que han hecho crecer y un conocimiento práctico de las normas de registro y de alegaciones que esa categoría conlleva.',
          'Una categoría «parecida». La experiencia en cosmética no se traslada sin más a los complementos alimenticios, ni a la inversa.',
        ],
        [
          'Titularidad y salida',
          'La tienda registrada a nombre de su empresa, con sus datos y contenidos, y un plan de traspaso recogido en el contrato.',
          'Una tienda abierta a nombre de la sociedad del TP, o contenidos que el TP reclama como propios.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'El dinero',
    title: 'Cómo cobran los Tmall Partners',
    intro: 'La mayoría de los TP cobra una cuota mensual fija más una comisión sobre las ventas. Nuestras calculadoras de Tmall Global y JD Worldwide parten de 35.000 RMB al mes (unos 4.300 euros) más el 10% del GMV. Sirven de referencia para contrastar presupuestos reales, que varían al alza o a la baja según el tamaño de la tienda y el alcance del encargo.',
    warnColumn: false,
    table: {
      headers: ['Modelo', 'Remuneración', 'Cuándo encaja'],
      rows: [
        [
          'Gestión integral (代运营)',
          'Cuota mensual más comisión sobre el GMV. La mercancía es suya y usted financia la publicidad.',
          'Quiere controlar el precio y la marca, y puede financiar el inventario.',
        ],
        [
          'Distribución (经销)',
          'El TP compra su mercancía y obtiene el margen al revenderla.',
          'Prefiere no tener stock en China y acepta ceder parte del control sobre el precio.',
        ],
        [
          'Venta en depósito (代销)',
          'El TP vende su mercancía, le liquida después de cada venta y se queda un porcentaje.',
          'Fases de prueba, cuando ninguna de las partes quiere inmovilizar capital.',
        ],
      ],
    },
    note: 'La publicidad se paga desde una cuenta que usted financia directamente. Los socios que se ofrecen a adelantar la inversión publicitaria suelen acabar mal. Muchas marcas reservan además un fondo anual de cofinanciación para los grandes momentos, como Double 11 o un lanzamiento. Y deje el traspaso por escrito en el contrato: contenidos, datos de clientes y cuentas publicitarias deben seguirle cuando termine la relación.',
    link: { label: 'Haga sus propios cálculos con la calculadora de Tmall Global', href: '/tools/tmall-global-setup-and-run' },
  },

  mistakes: {
    eyebrow: 'Qué sale mal',
    title: 'Cómo se tuercen los contratos con un TP',
    intro: 'Cuando una marca nos llama para sustituir a su TP, la historia suele responder a alguno de estos guiones.',
    image: {
      src: '/Images/compass/tp-mistakes.webp',
      alt: 'Una oficina de comercio electrónico vacía por la noche; en un monitor, una curva de ventas sigue cayendo',
    },
    items: [
      {
        name: 'Un TP ajeno a su categoría',
        body: 'La presentación prometía una gestión digna de tienda oficial. Al cuarto mes quedó claro que el equipo nunca había vendido esa categoría, y las fichas (precios, reseñas, posición en el buscador) ya estaban quemadas.',
      },
      {
        name: 'GMV a cualquier precio',
        body: 'Si los objetivos se fijan solo sobre el GMV, el TP se lanza a los descuentos agresivos. Usted alcanza la cifra y acostumbra a los compradores a esperar el siguiente cupón.',
      },
      {
        name: 'Una tienda que no es suya',
        body: 'Si la tienda se abrió a nombre de la sociedad del TP, marcharse obliga a empezar de cero: tienda nueva, sin reseñas ni historial de ventas.',
      },
    ],
  },

  compass: {
    eyebrow: 'Cómo lo hacemos',
    title: 'Seleccionamos TP a los que hemos visto gestionar tiendas',
    lead: 'Compass clasifica a cada Tmall Partner según las categorías que le hemos visto gestionar, junto a nuestras notas sobre los equipos de la plataforma con los que trabaja y sobre cómo resistieron sus tiendas las últimas grandes campañas. No cobramos comisión a ningún socio. Trabajamos ocho categorías de consumo: belleza, alimentación y bebidas, moda, hogar, bienestar, puericultura, mascotas y complementos alimenticios.',
    steps: compassSteps(
      'Buscamos en Compass los TP que ya gestionan su categoría. Le presentamos de tres a cinco que merecen una reunión, cada uno con una nota breve sobre sus fortalezas y sus flaquezas y sobre dónde apretar en las tarifas.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Lo que preguntan las marcas',
    title: 'Tmall Partners: preguntas frecuentes',
    items: [
      {
        q: '¿Qué significa TP en Tmall?',
        a: 'TP son las siglas de Taobao Partner, el nombre que Alibaba dio a las agencias externas que certifica para gestionar tiendas de marcas. En la práctica, hoy designa a cualquier agencia que lleve una tienda en Tmall o Tmall Global por cuenta de una marca.',
      },
      {
        q: '¿Cuánto cuesta un Tmall Partner?',
        a: 'La mayoría cobra una cuota mensual más una comisión sobre el GMV. Nuestras calculadoras parten de 35.000 RMB al mes (unos 4.300 euros) más el 10% del GMV, y los presupuestos reales varían al alza o a la baja según el tamaño de la tienda y el alcance del encargo. La publicidad va aparte y corre de su cuenta.',
      },
      {
        q: '¿Se puede gestionar una tienda de Tmall sin TP?',
        a: 'Sí, con un equipo en China que conozca la plataforma. La mayoría de las marcas extranjeras empieza con un TP e internaliza algunas funciones cuando la tienda se estabiliza.',
      },
      {
        q: '¿Puede el mismo TP ocuparse de Tmall Global?',
        a: 'Muchos llevan ambas. Tmall Global tiene sus propias reglas para la mercancía transfronteriza y la logística, así que pida ver tiendas que gestionen en cada una.',
      },
      {
        q: '¿Cuánto se tarda en cambiar de TP?',
        a: 'Calcule un traspaso de varias semanas: hay que trasladar los accesos a la tienda, los archivos de contenido, las cuentas publicitarias y los guiones de atención al cliente. A ser posible, evite el cambio en vísperas de 618 o Double 11.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Escríbanos',
    title: 'Háblenos de su tienda',
    lead: '¿Va a abrir su primera tienda o quiere sustituir a un TP que ya no da señales de vida? Envíenos el enlace de la tienda, o solo la categoría si aún no la tiene. Una llamada breve bastará para saber si tenemos en nuestra base al socio adecuado.',
    primary: 'Pedir una lista corta de TP',
    secondary: 'Ver cómo trabajamos',
  },
};

export default copy;
