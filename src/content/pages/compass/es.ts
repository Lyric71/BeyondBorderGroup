/**
 * Versión española de /compass y de sus cuatro subpáginas.
 * Registro: prensa económica peninsular. Comillas latinas « » y apertura
 * obligatoria de ¿ y ¡.
 */
import type { CompassCopy } from './types';

const copy: CompassCopy = {
  facts: {
    headline: 'Una lista de contactos dice quién existe. Nosotros decimos quién encaja.',
    problemBody: [
      'Busque «base de datos de distribuidores en China» y lo que aparece son listas rastreadas con un formulario de contacto encima. Mil nombres antes de comer, casi ninguno adecuado para su marca.',
      'Hemos visto a marcas firmar con un nombre sacado tal cual de una de esas listas. Cuatro meses después descubren que el socio nunca ha llevado de verdad su categoría. O que el almacén que visitaron estaba alquilado para esa mañana.',
      'El daño casi nunca se queda dentro del ejercicio. Lineal perdido. Una reconstrucción de marca que nadie había presupuestado. Una ventana de lanzamiento que no volverá a abrirse.',
    ],
    yearsLabel: 'Años sobre el terreno',
    comparison: {
      eyebrow: 'En qué nos diferenciamos',
      title: 'Una base de datos, no otro directorio',
      axisHeader: 'Criterio de comparación',
      columnHeaders: { scraped: 'Directorios rastreados', ours: 'Compass' },
      rows: [
        {
          label: 'Cómo entran los nombres',
          scraped: 'Cargas masivas, rastreadas de fuentes públicas',
          ours: 'Una reunión detrás de otra',
        },
        {
          label: 'Qué sabemos realmente de ellos',
          scraped: 'Una razón social. A veces un correo.',
          ours: 'Categorías reales, volúmenes reales, plazos de pago y encaje con su marca',
        },
        { label: 'Años de construcción', scraped: 'Unos meses', ours: 'Quince' },
        {
          label: 'Con qué se queda usted',
          scraped: 'Una lista de quizás',
          ours: 'Una lista corta que merece una reunión',
        },
      ],
    },
    steps: {
      eyebrow: 'Cómo trabajamos',
      title: 'Usted nos informa. Nosotros volvemos con la lista corta.',
      quote:
        'Encontrar al socio adecuado en China suele devorar un trimestre. Nosotros empezamos por la respuesta.',
      items: [
        {
          label: 'El briefing',
          body: 'De media hora a una hora, por teléfono. Su categoría, su momento y lo que de verdad quiere conseguir en China. Una prueba en cross-border. Un lanzamiento en mercado doméstico. La sustitución discreta de un distribuidor que ya no coge el teléfono. A veces algo que no habíamos visto nunca, y también está bien.',
        },
        {
          label: 'La lista corta',
          body: 'Volvemos con un mapa de quién opera realmente en su segmento y de tres a cinco socios que merecen una reunión. Cada uno con una ficha breve: fortalezas, puntos débiles y dónde apretar cuando se siente a negociar.',
        },
        {
          label: 'Las presentaciones',
          body: 'La mayoría de estos socios ya nos conoce. Usted entra con una relación detrás, y eso suele sentar al equipo sénior en la sala en lugar del equipo comercial.',
        },
      ],
    },
    categories: [
      'Belleza',
      'Alimentación y bebidas',
      'Moda',
      'Hogar',
      'Bienestar',
      'Puericultura',
      'Mascotas',
      'Complementos alimenticios',
    ],
    categoriesClosing: 'Sobre todo B2C, y B2B cuando el comprador está en China.',
    partnerTypes: [
      {
        name: 'Distribuidores',
        body: 'Actores nacionales y regionales, en comercio general, en zonas francas y en comercio electrónico transfronterizo.',
      },
      {
        name: 'TP',
        body: 'Tmall Partners y Douyin Partners que operan tiendas oficiales, comercio de contenido y directo.',
      },
      {
        name: 'Importadores',
        body: 'Licencias, despacho de aduanas y almacenaje, tanto para comercio general como para zona franca.',
      },
      {
        name: 'Operadores offline',
        body: 'Compradores de gran cuenta, mayoristas regionales y operadores de compra colectiva con acceso real al lineal.',
      },
    ],
    profileFields: [
      { name: 'Datos de la empresa', body: 'Razón social, sede, tamaño del equipo, accionariado.' },
      {
        name: 'Categorías reales',
        body: 'No las que dice su web. Las que les hemos visto operar.',
      },
      {
        name: 'Canales con volumen real',
        body: 'Tmall, JD, Douyin, Pinduoduo, Xiaohongshu, offline, cross-border. Cuáles sostienen el negocio y cuáles solo rozan.',
      },
      {
        name: 'Implantación',
        body: 'Ciudades, provincias, almacenes y dónde trabaja realmente el equipo comercial.',
      },
      {
        name: 'Condiciones comerciales',
        body: 'Margen, exclusividad, plazos de pago, pedidos mínimos, aportación de marketing.',
      },
      {
        name: 'Capacidad operativa',
        body: 'Volumen que asumen de verdad. Plazos. Atención al cliente. Devoluciones.',
      },
      {
        name: 'Marcas que han llevado',
        body: 'Pasadas y actuales, siempre que tengamos visibilidad directa.',
      },
      {
        name: 'Señales de reputación',
        body: 'Lo que otras marcas dicen de ellos, con y sin micrófono. Dónde han cumplido y dónde se han quedado cortos.',
      },
      {
        name: 'Nuestro criterio',
        body: 'Recomendar, recomendar con reservas, evitar, o solo bajo ciertas condiciones.',
      },
    ],
    decidingQuestions: [
      '¿Cross-border o mercado doméstico?',
      '¿Tmall, JD, Douyin o retail físico?',
      '¿Qué categorías llevan realmente, frente a las que figuran en su web?',
      '¿Aceptarán la exclusividad?',
      '¿Cómo pagan, y a qué velocidad?',
      '¿Les hemos visto triunfar con una marca como la suya, o fracasar con una parecida?',
    ],
    failureStories: [
      {
        kind: 'El distribuidor',
        story:
          'Impecable sobre el papel. Una presentación brillante. Después, dieciocho meses sentado sobre el stock mientras la marca perdía sin ruido su ventana de lanzamiento.',
      },
      {
        kind: 'El TP',
        story:
          'Prometió operaciones de tienda oficial. Nunca había llevado la categoría. Lo entendimos en el cuarto mes, cuando las fichas de producto ya estaban quemadas.',
      },
      {
        kind: 'El importador',
        story:
          'Almacén, transporte, aduanas, todo resuelto. Ninguna capacidad real de vender nada a nadie. Los palés entraron. Los palés se quedaron.',
      },
    ],
    noCommission: 'Ninguna comisión de los distribuidores. Nunca.',
  },

  index: {
    title: 'Compass: la base de socios chinos verificados | TheChinaPath',
    description:
      'Compass, nuestra base privada de distribuidores, Tmall y Douyin Partners e importadores chinos verificados. Su lista corta en semanas, no en un trimestre.',
    eyebrow: 'Encontrar un socio',
    h1: 'Ahórrese 12 meses de búsqueda de socio.',
    lead: 'Compass es nuestra base privada de distribuidores, Tmall Partners, Douyin Partners e importadores. A todos los hemos conocido en persona, verificado sobre el terreno y, en muchos casos, acompañado en proyectos de marca reales.',
    body: 'El socio equivocado en China cuesta dos años. Algunas marcas no se recuperan del todo. Esa es la parte que le ahorramos.',
    ctaPrimary: 'Pedir su lista corta',
    ctaSecondary: 'Ver cómo la creamos',
    heroAlt:
      'Dos responsables recorren conversando un almacén de distribución de gran consumo en Shanghái',
    heroChip: 'Conocidos en persona. Verificados sobre el terreno.',
    h1Rows: [
      { text: 'Ahórrese 12 meses' },
      { text: 'de búsqueda de socio.', style: 'highlight' },
    ],
    heroStats: [
      { value: '15', counter: 15, label: 'años sobre el terreno en China' },
      { value: 'De tres a cinco', label: 'socios por lista corta' },
      { value: 'Dos o tres', label: 'semanas hasta la lista' },
    ],
    crumbHome: 'Inicio',
    crumbSection: 'Encontrar un socio',
    scrollCue: 'Bajar',
    problemEyebrow: 'El problema',
    problemFigureAlt:
      'Palés de stock sin vender, retractilados, en un almacén con poca luz',
    problemCaption: 'Los palés entraron. Los palés se quedaron.',
    stepAlts: [
      'Una responsable de marca toma notas a mano durante un briefing por videollamada',
      'Un consultor traza una ruta sobre un mapa de China junto a fichas de socios impresas',
      'Una responsable de marca estrecha la mano de un directivo de distribución en una sala de reuniones de Shanghái',
    ],
    coverageEyebrow: 'El alcance',
    coverageTitle: 'Categorías de gran consumo, en doméstico y en cross-border.',
    coverageLead:
      'Distribuidores, Tmall Partners, Douyin Partners, importadores y especialistas de canal en toda China. Online y físico, nacional y regional, con especialistas de nicho. Un nombre solo entra si tenemos una razón real para conocerlo.',
    whoLabel: 'Quién figura en la base',
    categoriesLabel: 'Categorías',
    closingEyebrow: 'Escríbanos',
    closingTitle: 'Sin compromiso. Sin discurso largo.',
    closingLead:
      '¿Entra en China? ¿Sustituye a un socio que ya no responde? ¿Sigue buscando la forma adecuada de distribución para su categoría? La primera conversación es corta. La mayoría sabe en media hora si esta es la ayuda que necesita. Si no lo es, casi siempre podemos indicarle a quién acudir.',
    closingCtaPrimary: 'Háblenos de su categoría',
    closingCtaSecondary: 'Ver el servicio de distribución',
    toolsLine: {
      before: '¿Aún no ha cerrado el presupuesto de plataforma? Nuestras ',
      link: 'calculadoras de presupuesto gratuitas',
      after: ' cifran el primer año en Tmall Global, JD Worldwide y Douyin, antes incluso del primer brief.',
    },
  },

  shortlist: {
    title: 'Solicite su lista de socios chinos | Compass | TheChinaPath',
    description:
      'Cuéntenos su categoría y su momento. En dos o tres semanas le enviamos una lista corta de distribuidores y socios chinos que merecen una reunión.',
    eyebrow: 'Su lista corta',
    h1: 'Cuéntenos algo de su marca.',
    lead: 'Unas preguntas rápidas para abrir la conversación. La primera llamada es corta y sin compromiso por ninguna de las dos partes. Un socio sénior le responderá en un día laborable, no una carta tipo enviada por un robot de cualificación.',
    formTitle: 'Su briefing',
    fields: {
      name: 'Su nombre',
      email: 'Correo profesional',
      company: 'Empresa',
      website: 'Sitio web',
      category: 'Categoría',
      categoryPlaceholder: 'Elija una categoría',
      categoryOther: 'Otra cosa',
      stage: 'Dónde está hoy',
      message: '¿Qué quiere resolver?',
      messagePlaceholder:
        'El canal al que apunta, el calendario con el que trabaja y todo lo que ya se haya intentado.',
      captchaBefore: 'Una comprobación rápida para dejar fuera a los robots: ¿cuánto es ',
      captchaAfter: '?',
      honeypot: 'Deje este campo vacío',
    },
    stages: [
      'Todavía no estamos en China y dudamos entre un distribuidor, un TP y un DP',
      'Entramos ahora y buscamos un primer distribuidor, TP o DP',
      'Ya vendemos y sustituimos a un distribuidor, TP o DP que no da resultados',
      'Ya vendemos e incorporamos un distribuidor, TP o DP para un nuevo canal o una nueva región',
    ],
    submit: 'Enviar el briefing',
    submitting: 'Enviando el briefing…',
    consent:
      'Al enviar este formulario nos autoriza a ponernos en contacto con usted por su consulta. Sus datos quedan estrictamente dentro de nuestro equipo.',
    asideEyebrow: 'Qué pasa después',
    asideTitle: 'Tres pasos, dos o tres semanas.',
    errors: {
      captcha: 'El resultado no es correcto. Los números se acaban de renovar, inténtelo otra vez.',
      required: 'Indique su nombre, correo, empresa, categoría y momento.',
      message: 'Cuéntenos en una o dos líneas qué quiere resolver.',
      network:
        'El briefing no ha salido. Inténtelo de nuevo en un momento. Si sigue fallando, escríbanos directamente a hello@thechinapath.com.',
    },
    success: 'Briefing recibido. Le respondemos en breve. Redirigiendo…',
  },
};

export default copy;
