/**
 * /es/compass/encontrar-douyin-partner-en-china (español).
 * Consulta objetivo: «cómo encontrar un Douyin Partner (DP)».
 *
 * Las tarifas salen de nuestra calculadora de costes de Douyin
 * (src/pages/tools/douyin-cost-calculator.astro), presentadas como tales.
 * 30.000 RMB ≈ 3.700 euros, 100.000 RMB ≈ 12.000 euros (1 EUR ≈ 8,2 RMB).
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'dp',
  locale: 'es',
  title: 'Encontrar un Douyin Partner (DP) en China | TheChinaPath',
  description:
    'Qué hace un Douyin Partner, cómo cobra, cómo evaluarlo a través de sus directos y qué cláusulas dejan la tienda y la cuenta publicitaria a su nombre.',
  crumb: 'Encontrar un DP en China',
  reviewed: '24 de septiembre de 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'Encontrar un DP',
    rows: [{ text: 'Cómo encontrar un' }, { text: 'Douyin Partner (DP) en China', style: 'highlight' }],
    lead: 'Un Douyin Partner, o DP, gestiona su tienda en Douyin: vídeo corto, directos de marca, acuerdos con creadores y tráfico de pago. Los buenos saben ya qué presentadores y qué creadores venden en su categoría, y su trabajo puede comprobarse esta misma noche, en directo.',
    image: {
      src: '/Images/compass/channel-social.webp',
      alt: 'Una presentadora habla ante un móvil montado en un trípode, bajo un aro de luz, con muestras de producto alineadas delante',
    },
    stats: heroStats('años reuniéndonos con socios en China'),
    primary: 'Pedir una lista corta de DP',
    secondary: 'Ver cómo funciona Compass',
  },

  answer: {
    eyebrow: 'La respuesta corta',
    title: 'Juzgue a un DP por los directos que emite hoy',
    body: [
      'Para encontrar un Douyin Partner, pida a cada candidato las cuentas de marca que gestiona en su categoría y vea sus directos y sus vídeos cortos como lo haría un comprador. Pregunte cómo contratan a los creadores y cuánto invierten en publicidad; después, a nombre de quién están la tienda y la cuenta publicitaria. Solo entonces toca hablar de tarifas.',
      'En Douyin se vende a través del contenido, de modo que un DP se parece más a una productora audiovisual con su propia mesa de compra de medios que a un gestor de tienda. Por eso, un Tmall Partner que «también hace Douyin» merece un doble examen.',
      'Douyin también certifica a estas agencias y las clasifica según su capacidad, lo que sirve para armar una lista larga. Los directos, en cambio, tendrá que verlos usted.',
    ],
  },

  role: {
    eyebrow: 'El trabajo en Douyin',
    title: 'Qué gestiona realmente un Douyin Partner',
    intro: 'Douyin las denomina proveedores de servicios de comercio electrónico (抖音电商服务商). Las marcas las llaman DP.',
    items: [
      {
        name: 'La tienda',
        body: 'Apertura de la tienda de Douyin (抖店), fichas, precios y atención al cliente, o Douyin Global para la mercancía transfronteriza.',
      },
      {
        name: 'Directos de marca',
        body: 'Su propia sala de directo, a menudo en antena varias horas al día, y los vídeos cortos de producto que alimentan el directo y la tienda. Eso exige presentadores, guiones y un plató que alguien tiene que dirigir.',
      },
      {
        name: 'Creadores',
        body: 'La contratación de creadores en Xingtu (巨量星图) para producir contenido, y en el programa de afiliación de Douyin (精选联盟) para vender a comisión.',
      },
      {
        name: 'Tráfico de pago',
        body: 'Qianchuan (巨量千川), el sistema publicitario de Douyin para tiendas. Usted financia la cuenta directamente y el DP la gestiona.',
      },
    ],
  },

  routes: {
    eyebrow: 'Encontrar candidatos',
    title: 'Dónde aparecen los buenos DP',
    intro: 'Los buenos DP rara vez se anuncian. Casi siempre se llega a ellos a través de los directos que gestionan.',
    table: {
      headers: ['Vía', 'Qué ofrece', 'Qué se le escapa'],
      rows: [
        [
          'El mercado de proveedores de servicios de Douyin',
          'Proveedores certificados, filtrables por capacidad y por categoría.',
          'La clasificación por capacidad refleja el tamaño. Si sus presentadores sabrán vender su producto, eso no lo dice.',
        ],
        [
          'Directos que ya le convencen',
          'La mejor carta de presentación posible. Localice en su categoría una sala de directo de marca que venda y pregunte quién la lleva.',
          'Algunas marcas gestionan sus directos con equipo propio, y los buenos DP suelen tener la agenda completa.',
        ],
        [
          'TP que «también hacen Douyin»',
          'Un único contrato para dos plataformas.',
          'Llevar una tienda y llevar un directo son oficios distintos. Evalúe por separado sus directos en Douyin.',
        ],
        [
          'MCN y agencias de creadores',
          'Acceso directo a los creadores.',
          'Venden tiempo de creadores. Pocas gestionan una tienda, un directo diario y una cuenta publicitaria con una única cuenta de resultados.',
        ],
        [
          'Compass',
          'DP a los que hemos visto dirigir directos en nuestras categorías, con notas sobre presentadores, creadores e inversión publicitaria.',
          'La cobertura es exhaustiva en nuestras ocho categorías y escasa fuera de ellas.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Evaluar a un DP',
    title: 'Siete comprobaciones antes de ceder su cuenta de Douyin',
    intro: 'Casi todo el trabajo de un DP se hace en público, ante la cámara. Antes de incluir a un DP en una lista corta, vemos sus directos un par de noches. Le recomendamos hacer lo mismo antes de leer una sola diapositiva.',
    table: {
      headers: ['Comprobación', 'Respuesta sólida', 'Señal de alarma'],
      rows: [
        [
          'Directos que pueda ver',
          'Cuentas de marca que gestiona hoy, en su categoría o en una cercana. Vea dos sesiones de cada una.',
          'Solo vídeos de casos de éxito y ninguna cuenta activa con nombre.',
        ],
        [
          'Equipo de presentadores',
          'Presentadores en plantilla que trabajan por turnos, con un formador y un guion por producto.',
          'Presentadores autónomos contratados sesión a sesión.',
        ],
        [
          'Resultados con creadores',
          'Creadores contratados en su categoría, con ventas, devoluciones y coste por pedido.',
          'Número de seguidores y cifras de «exposición», sin nada más.',
        ],
        [
          'Eficiencia publicitaria',
          'El retorno de la inversión en Qianchuan por campaña, y qué recortarían primero.',
          'Un plan que solo funciona si el presupuesto publicitario crece cada mes.',
        ],
        [
          'Cifras netas de devoluciones',
          'El GMV (ventas brutas) una vez descontados reembolsos y devoluciones, extraído directamente del panel de la tienda.',
          'Solo el GMV bruto. En Douyin, las devoluciones pueden llevarse buena parte de una gran noche.',
        ],
        [
          'Alegaciones y cumplimiento',
          'Guiones revisados conforme a la Ley de Publicidad china y a las normas de Douyin sobre alegaciones en su categoría.',
          'Presentadores que prometen resultados en antena. Douyin lo sanciona, y los reguladores también.',
        ],
        [
          'Titularidad',
          'La tienda y la cuenta de marca, a nombre de su empresa. También la cuenta publicitaria de Qianchuan.',
          'Una cuenta abierta a nombre de la sociedad del DP, o una sala de directo que pertenece personalmente al presentador.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'El dinero',
    title: 'Cómo cobran los Douyin Partners',
    intro: 'La mayoría de los DP cobra una cuota mensual fija más una comisión sobre el GMV. Nuestra calculadora de costes de Douyin sitúa esa cuota en torno a 30.000 RMB al mes (unos 3.700 euros) para una estructura ligera y hasta 100.000 RMB (alrededor de 12.000 euros) en el nivel de marca internacional, donde la comisión oscila entre el 5% y el 8%.',
    warnColumn: true,
    table: {
      headers: ['Partida', 'Funcionamiento', 'Qué vigilar'],
      rows: [
        [
          'Cuota mensual',
          'Una tarifa plana mensual que cubre la tienda, el calendario de directos, la publicidad y la atención al cliente.',
          'Una cuota que no precisa cuántas horas de directo ni cuántos vídeos incluye.',
        ],
        [
          'Comisión sobre el GMV',
          'Un porcentaje de las ventas que genera el DP, que se suma a la cuota.',
          'Una comisión sobre el GMV bruto. Vincúlela a las ventas netas de devoluciones.',
        ],
        [
          'Comisión de los creadores',
          'Se abona a los creadores por las ventas que generan y se factura al margen del DP. Los grandes creadores cobran entre el 30% y el 50%, a menudo con una tarifa fija por aparición (坑位费) añadida.',
          'Un plan de lanzamiento que lo fía todo a una única gran sesión con un creador.',
        ],
        [
          'Publicidad de pago',
          'La inversión en Qianchuan, que usted ingresa directamente en la cuenta publicitaria.',
          'Un DP que se ofrece a adelantar la inversión. Esos acuerdos suelen acabar mal.',
        ],
        [
          'Cofinanciación',
          'Un presupuesto anual, al margen de la cuota, para los grandes momentos: Double 11, un lanzamiento o una campaña estrella.',
          'Una cofinanciación sin un plan que la respalde.',
        ],
      ],
    },
    link: { label: 'Haga sus propios cálculos con la calculadora de costes de Douyin', href: '/tools/douyin-cost-calculator' },
  },

  mistakes: {
    eyebrow: 'Qué sale mal',
    title: 'Tres maneras de quemar un presupuesto en Douyin',
    intro: 'En Douyin, los errores salen caros porque todo ocurre muy deprisa. Aquí es donde suele irse el dinero.',
    image: {
      src: '/Images/compass/dp-mistakes.webp',
      alt: 'Un plató de directo vacío fuera de horario, con el aro de luz apagado y muestras de cosmética aún alineadas sobre la mesa',
    },
    items: [
      {
        name: 'Apostarlo todo a un gran creador',
        body: 'Un creador de primera fila puede agotar un lote en una noche, con una comisión del 30% al 50% más la tarifa por aparición. Sin una sala de directo de marca detrás, las ventas se desploman a la mañana siguiente.',
      },
      {
        name: 'Tráfico sin sustancia',
        body: 'Un DP mediocre vuelca su presupuesto en anuncios y presenta el pico como crecimiento. Pida ver el contenido que impulsan los anuncios antes de aprobar el gasto.',
      },
      {
        name: 'Una cuenta que no es suya',
        body: 'Si la sala de directo y sus seguidores dependen de la cuenta del DP, se quedan con él cuando usted se marcha.',
      },
    ],
  },

  compass: {
    eyebrow: 'Cómo lo hacemos',
    title: 'Seleccionamos DP cuyos directos hemos visto',
    lead: 'Compass clasifica a cada Douyin Partner según las categorías que vende, junto a nuestras notas sobre sus presentadores y creadores y sobre lo que convierten realmente sus directos. No cobramos comisión a ningún socio. Trabajamos ocho categorías de consumo: belleza, alimentación y bebidas, moda, hogar, bienestar, puericultura, mascotas y complementos alimenticios.',
    steps: compassSteps(
      'Buscamos en Compass los DP que ya venden su categoría en Douyin. Le presentamos de tres a cinco que merecen una reunión, cada uno con una nota sobre sus fortalezas y sus flaquezas, además de dónde apretar en las tarifas.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Lo que preguntan las marcas',
    title: 'Douyin Partners: preguntas frecuentes',
    items: [
      {
        q: '¿Qué es un DP en Douyin?',
        a: 'DP son las siglas de Douyin Partner, la agencia que gestiona la tienda de una marca en Douyin, sus directos, sus acuerdos con creadores y su publicidad. Douyin, por su parte, habla de proveedor de servicios de comercio electrónico.',
      },
      {
        q: '¿Cuánto cuesta un Douyin Partner?',
        a: 'La mayoría cobra una cuota mensual más una comisión. Nuestra calculadora sitúa la cuota entre 30.000 y 100.000 RMB al mes (de 3.700 a 12.000 euros, aproximadamente), con una comisión del 5% al 8% en el nivel de marca internacional. La publicidad y la comisión de los creadores van aparte.',
      },
      {
        q: '¿Puede mi Tmall Partner encargarse también de Douyin?',
        a: 'Algunos pueden. Pida ver los directos que gestionan hoy en Douyin y evalúelos por sí mismos. Llevar una tienda y llevar un directo son oficios distintos.',
      },
      {
        q: '¿Conviene empezar con creadores o con un directo de marca?',
        a: 'La mayoría de las marcas necesita ambos. Los creadores aportan alcance; el directo de marca, ventas regulares día tras día. Por sí solas, las sesiones con creadores generan picos más que un negocio estable.',
      },
      {
        q: '¿A qué ritmo debería vender una tienda nueva en Douyin?',
        a: 'Más despacio de lo que prometen casi todas las presentaciones. Los primeros meses se dedican a crear contenido, un calendario de directos y una cantera de creadores. Un DP que anuncia grandes cifras el primer mes suele tener previsto comprarlas con su presupuesto publicitario.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Escríbanos',
    title: 'Háblenos de sus planes en Douyin',
    lead: '¿Va a lanzar su primera tienda o quiere sustituir a un DP que gasta más de lo que vende? Indíquenos la categoría y la situación de la cuenta. Una llamada breve suele bastar para saber si tenemos en nuestra base un socio más adecuado.',
    primary: 'Pedir una lista corta de DP',
    secondary: 'Ver cómo trabajamos',
  },
};

export default copy;
