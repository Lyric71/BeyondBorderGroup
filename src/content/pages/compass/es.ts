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
    signInPrompt: { before: '¿Ya es socio de Compass? Acceda en ', after: '.' },
  },

  index: {
    title: 'Compass: la base de socios chinos verificados | TheChinaPath',
    description:
      'Compass es nuestra base privada de distribuidores, Tmall y Douyin Partners e importadores chinos verificados. Así construimos su lista corta, en semanas y no en un trimestre.',
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
    readMoreEyebrow: 'Seguir leyendo',
    readMoreTitle: 'La respuesta larga, en tres partes.',
    readMoreCta: 'Leer',
    cards: [
      {
        title: 'Por qué verificada',
        body: 'Qué contiene la base y cuánto le cuesta de verdad a una marca elegir al socio equivocado.',
      },
      {
        title: 'Qué contiene',
        body: 'Quién figura, qué anotamos de cada uno y por qué no vendemos el acceso.',
      },
      {
        title: 'Cómo creamos la lista',
        body: 'Del primer briefing a la presentación, en semanas y no en meses.',
      },
    ],
    cardAlts: [
      'Reunión de presentación con un distribuidor, vista desde el otro lado de la mesa',
      'Fichas de socios repasadas sobre un escritorio',
      'Dos compañeros recorren una instalación de distribución',
    ],
    closingEyebrow: 'Escríbanos',
    closingTitle: 'Sin compromiso. Sin discurso largo.',
    closingLead:
      '¿Entra en China? ¿Sustituye a un socio que ya no responde? ¿Sigue buscando la forma adecuada de distribución para su categoría? La primera conversación es corta. La mayoría sabe en media hora si esta es la ayuda que necesita. Si no lo es, casi siempre podemos indicarle a quién acudir.',
    closingCtaPrimary: 'Háblenos de su categoría',
    closingCtaSecondary: 'Ver el servicio de distribución',
    toolsLine: {
      before: '¿Sigue calculando la parte de plataforma? Nuestras ',
      link: 'calculadoras de costes gratuitas',
      after: ' ponen una cifra al primer año en Tmall Global, JD Worldwide y Douyin antes de que nos pase el brief.',
    },
  },

  whyVetted: {
    title: 'Por qué una base verificada de distribuidores chinos | Compass | TheChinaPath',
    description:
      'La mayoría de las bases de distribuidores chinos son listas rastreadas. Compass se construyó reunión a reunión, durante quince años, por el equipo que introduce marcas de gran consumo en la distribución china.',
    eyebrow: 'Por qué verificada',
    h1: 'La mayoría de las «bases de distribuidores chinos» son listas rastreadas. Esta no.',
    lead: 'Compass se construyó reunión a reunión, con un equipo que lleva quince años introduciendo marcas de gran consumo en los canales de distribución y comercio electrónico de China. Cada nombre de la lista se ha verificado en persona, visitado sobre el terreno o puesto a prueba en un encargo real de marca.',
    body: 'Es la diferencia entre saber que un socio existe y saber si encaja con su marca.',
    ctaPrimary: 'Hablemos de su lista corta',
    ctaSecondary: 'Ver qué contiene',
    questionEyebrow: 'El problema con el que tropezábamos una y otra vez',
    questionTitle: 'Toda marca que entra en China hace la misma pregunta.',
    questionPull: '¿Con quién vendemos?',
    questionBody:
      'Distribuidores, TP, importadores, operadores cross-border, especialistas de categoría. La lista es larga, los nombres rotan deprisa y, vistos desde fuera, todos se parecen. Una presentación es una presentación. Todos tienen su foto de almacén, su muro de logotipos de clientes y un director de cuentas muy seguro de sí mismo.',
    storiesEyebrow: 'Tres formas de equivocarse',
    storiesTitle: 'Hemos visto cada una de estas situaciones más de una vez.',
    figureAlt:
      'Un auditor de visita y un responsable de operaciones en un muelle de carga, frente a palés apilados',
    figureCaption:
      'Cada nombre de la base empezó con una visita como esta. Es la parte lenta, y es la que le da valor a la lista.',
    storiesCost:
      'El daño rara vez se detiene en un mal año. Lineal perdido. Fichas de producto quemadas. Una entrada en China que hay que rehacer desde cero.',
    buildingEyebrow: 'Lo que estamos construyendo',
    buildingTitle: 'Quince años de reuniones, por escrito.',
    buildingBody: [
      'La base no era un plan. Era un subproducto. Nuestro equipo directivo lleva quince años haciendo distribución y comercio electrónico dentro de China, y ese trabajo acabó generando algo que nadie había presupuestado: muchísimos datos.',
      'Cada distribuidor verificado. Cada TP informado. Cada almacén recorrido. Anotamos lo que hacen realmente, no lo que afirma su presentación. Categorías reales. Volúmenes reales. La reputación que arrastran entre las marcas con las que ya han trabajado. Los que recomendamos sin dudar y aquellos de los que apartamos discretamente a un cliente.',
      'Después de unos años de hojas de cálculo y documentos compartidos, aquello se convirtió en Compass.',
    ],
    questionsEyebrow: 'Por qué una base de datos',
    questionsTitle: 'Un directorio enumera nombres. Una base responde preguntas.',
    questionsLead:
      'Estas son las preguntas que deciden de verdad una alianza, y ninguna se responde desde la web de una empresa.',
    questionsCost:
      'La base no decide por usted. Acorta la lista y garantiza que los nombres que quedan merecen su tiempo.',
    nextCtaPrimary: 'Hablemos de su lista corta',
    nextCtaSecondary: 'A continuación: qué contiene',
  },

  whatIsInside: {
    title: 'Qué contiene Compass | TheChinaPath',
    description:
      'Fichas de distribuidores chinos, Tmall y Douyin Partners, importadores y especialistas de canal, todos verificados. Categorías reales, volúmenes reales, condiciones reales y nuestro criterio sobre cada uno.',
    eyebrow: 'Qué contiene',
    h1: 'No son nombres y correos electrónicos.',
    lead: 'Distribuidores, Tmall Partners, Douyin Partners, importadores y especialistas de canal en toda China. Cada uno tiene una ficha estructurada: las categorías que lleva de verdad, sus volúmenes, sus condiciones comerciales, su capacidad operativa y el criterio de nuestro equipo sobre si recomendarlo, y para qué tipo de marca.',
    body: 'Es el nivel de detalle que decide si un socio encaja. Y es justo el que nunca llega a una presentación comercial.',
    ctaPrimary: 'Hablemos de su lista corta',
    ctaSecondary: 'Ver cómo creamos la lista',
    whoEyebrow: 'Quién figura',
    whoTitle: 'Distribuidores, TP, importadores y especialistas de canal en toda China.',
    whoLead:
      'Doméstico y cross-border. Online y físico. Con especialistas de nicho. Un nombre solo entra si tenemos una razón real para conocerlo.',
    coverageLabel: 'Categorías cubiertas',
    fieldsEyebrow: 'Qué anotamos',
    fieldsTitle: 'Los campos que deciden si una alianza encaja.',
    fieldsLead:
      'Nueve grupos de campos componen cada ficha. Juntos cubren un terreno que una presentación comercial rara vez toca. El último es el que los clientes leen primero.',
    figureAlt:
      'Expedientes de socios, fichas impresas y un cuaderno manuscrito repartidos sobre un escritorio',
    figureCaption:
      'Notas de campo, expedientes de socios, actas de reuniones. El archivo de trabajo del que nació la base.',
    notProductEyebrow: 'Una pregunta legítima',
    notProductTitle: 'Por qué no le vendemos el acceso.',
    notProductBody: [
      'Nos preguntan, con razón, si no bastaría con un usuario para consultar la base. La respuesta es no, y el motivo no es comercial. Una ficha es un criterio, y un criterio sin su contexto vale menos que ninguna información. «Recomendar con reservas» no significa nada mientras nadie explique cuáles son esas reservas ni si afectan a una marca como la suya.',
      'Hay además un problema de caducidad. Una ficha escrita hace dieciocho meses puede ser ya falsa. Los socios pierden cuentas, cambian de categoría, son comprados, pierden a la persona que los hacía buenos. Construir una lista corta es mitad búsqueda y mitad reverificación. Y la reverificación no la hará por usted ninguna suscripción.',
    ],
    notProductClosing: {
      before:
        'Compass no es, por tanto, un producto por niveles. Es la herramienta con la que trabaja nuestro equipo cuando usted nos informa, y lo que recibe es el resultado de ese trabajo: una lista corta de socios, un criterio escrito sobre cada uno y una conversación para explicar el porqué. Los socios que ya tienen cuenta acceden en ',
      after: '.',
    },
    nextCtaPrimary: 'Háblenos de su categoría',
    nextCtaSecondary: 'A continuación: cómo creamos la lista',
  },

  howItWorks: {
    title: 'Cómo se crea una lista de socios chinos | Compass | TheChinaPath',
    description:
      'Usted nos informa. Trabajamos la base y volvemos en dos o tres semanas con una lista corta de distribuidores y socios de plataforma chinos que merecen de verdad una reunión.',
    eyebrow: 'Cómo creamos la lista',
    h1: 'Un punto de partida sólido, en semanas y no en meses.',
    lead: 'Usted nos informa. Trabajamos la base y volvemos pronto con una lista corta o una lista larga de socios que merecen una reunión. Nombres que encajan con su categoría, su momento y lo que quiere hacer de verdad en China.',
    body: 'No podemos garantizar el éxito de ninguna alianza. Ninguna búsqueda de socio puede hacerlo. Lo que sí garantizamos es un punto de partida mucho más sólido que el que reúne por su cuenta la mayoría de las marcas.',
    ctaPrimary: 'Reservar una llamada de 30 minutos',
    ctaSecondary: 'Ver el proceso',
    heroAlt:
      'Una responsable de marca y un consultor en la esquina de una mesa abarrotada en una oficina de Shanghái, repasando una lista de socios impresa',
    heroChip: 'De dos a tres semanas, de principio a fin',
    h1Rows: [
      { text: 'Un punto de partida sólido,' },
      { text: 'en semanas y no en meses.', style: 'highlight' },
    ],
    heroStats: [
      { value: '15', counter: 15, label: 'años sobre el terreno en China' },
      { value: 'Dos o tres', label: 'semanas de principio a fin' },
      { value: 'De tres a cinco', label: 'nombres, cada uno documentado' },
    ],
    crumbHome: 'Inicio',
    crumbSection: 'Compass',
    scrollCue: 'Bajar',
    engagementEyebrow: 'Cómo se desarrolla el encargo',
    engagementTitle: 'De la primera llamada a la lista corta.',
    engagementLead:
      'Tres pasos. Dos o tres semanas. Un documento y una sesión de trabajo al final. Más rápido cuando el briefing es ajustado, algo más largo cuando el alcance es amplio.',
    phases: [
      {
        title: 'El briefing',
        body: 'Una videollamada para arrancar, de media hora a una hora. Preguntamos por su categoría, su momento, sus prioridades de canal, su calendario y las restricciones con las que ya trabaja.',
      },
      {
        title: 'La base',
        body: 'Sacamos los nombres que encajan con el briefing y contrastamos cada uno con la situación real del socio hoy. Una ficha escrita hace dieciocho meses puede estar ya desfasada. Aquí las cosas se mueven rápido.',
      },
      {
        title: 'La entrega',
        body: 'Un documento con la lista de socios, las fichas y nuestro criterio sobre cada uno. Y una sesión de trabajo para recorrerlo juntos, página a página.',
      },
    ],
    phaseWhen: ['Día uno', 'Semanas uno y dos', 'Semana tres'],
    phaseAlts: [
      'Un hombre en una videollamada en su escritorio, inclinado hacia la pantalla y tomando notas a la vez',
      'Una mujer ante dos monitores contrasta una hoja de cálculo con fichas de distribuidores impresas',
      'Tres compañeros al final de una mesa de reuniones, uno señala una línea de un documento impreso',
    ],
    optionsEyebrow: 'Lista corta, lista larga o ambas',
    optionsTitle: 'Según el punto en el que esté.',
    options: [
      {
        label: 'Lista corta',
        tagline: 'De tres a cinco nombres',
        body: 'Documentados en detalle y listos para una reunión. Para marcas que van rápido, con una decisión prevista en el próximo mes o dos.',
      },
      {
        label: 'Lista larga',
        tagline: 'De quince a veinte nombres',
        body: 'Una visión más amplia por categorías, canales o regiones, con una comparativa estructurada. Para marcas más al principio, que aún buscan la forma adecuada de distribución.',
      },
    ],
    optionsNote: 'Algunas marcas quieren las dos. Lo decide el briefing.',
    deliverablesEyebrow: 'Qué recibe',
    deliverablesTitle: 'Un documento, una conversación y presentaciones si las quiere.',
    figureAlt:
      'Tres personas en la esquina de una mesa de reuniones en Shanghái, repasando una lista de socios impresa',
    figureCaption:
      'La sesión de trabajo final. La lista vale poco si no confía en el razonamiento que hay detrás.',
    deliverables: [
      {
        name: 'Una ficha por socio',
        body: 'Categorías reales, canales, implantación, condiciones comerciales, marcas que han llevado y nuestro criterio sobre cada uno. Suficiente para entrar en una reunión sabiendo exactamente qué preguntar y qué vigilar.',
      },
      {
        name: 'Una sesión de trabajo',
        body: 'Repasamos todo con usted. Por qué este nombre. Por qué ese no. Dónde apretaríamos en la negociación. La lista vale poco si no confía en el razonamiento que hay detrás.',
      },
      {
        name: 'Presentaciones',
        body: 'Si las quiere, las hacemos. La mayoría de estos socios ya nos conoce, así que suele sentarse el equipo sénior en la sala en lugar del equipo comercial.',
      },
    ],
    introAlt:
      'Dos personas se dan la mano en el vestíbulo de una oficina mientras una tercera, algo apartada, hace las presentaciones',
    limitsEyebrow: 'Qué podemos decirle y qué no',
    limitsTitle: 'Honestos con los límites.',
    limitsBody: [
      'Lo que podemos hacer: decirle quién encaja, a partir de lo que hemos visto y trabajado nosotros mismos, y garantizar que los nombres de su lista se han ganado su sitio.',
      'Lo que no podemos: decirle cómo será la alianza dentro de dos años. Eso depende del acuerdo que negocie, del equipo que asignen a su cuenta y de muchas otras cosas que ocurren después de la firma.',
      'Merece la pena decirlo igualmente. La mayoría de las entradas en China que se tuercen se tuercen en la elección del socio, no en la ejecución.',
    ],
    pricingEyebrow: 'Cómo se factura el encargo',
    pricingTitle: 'Un proyecto, unos honorarios.',
    pricingBody: [
      'Un proyecto único, no una iguala. El alcance y los honorarios se cierran antes de empezar, y los honorarios se comunican tras la primera llamada, una vez claro el briefing. Tres formatos: solo lista corta, solo lista larga, o ambas con mapeo de mercado.',
      'La primera llamada sirve sobre todo para medir el encaje. Al terminar sabrá si esta es la ayuda que necesita, y nosotros sabremos si podemos mover algo de verdad.',
    ],
    pricingCommissionTail:
      'El distribuidor no nos paga ninguna comisión por intermediación. Es deliberado y está en el contrato, porque una comisión desplazaría nuestro interés hacia cerrar un acuerdo en lugar de encontrar al socio adecuado.',
    timingEyebrow: 'Cuándo acudir a nosotros',
    timingTitle: 'Cuanto antes, mejor.',
    timing: [
      {
        label: 'Antes del lanzamiento',
        body: 'Antes de firmar nada. El caso más limpio. La base tiene margen para demostrar su valor.',
      },
      {
        label: 'Para sustituir a un socio',
        body: 'Un distribuidor sentado sobre el stock. Un TP incapaz de mover la categoría. Sabemos quién encaja y quién no.',
      },
      {
        label: 'Después de una firma equivocada',
        body: 'Algunas marcas llegan más tarde. El mismo trabajo de lista corta, más urgencia, mucho menos margen de maniobra.',
      },
    ],
    nextCtaPrimary: 'Reservar una llamada de 30 minutos',
    nextCtaSecondary: 'Volver a: qué contiene',
  },

  shortlist: {
    title: 'Solicite su lista de socios chinos | Compass | TheChinaPath',
    description:
      'Háblenos de su categoría y de su momento. Volvemos con una lista corta de distribuidores y socios de plataforma chinos que merecen una reunión, normalmente en dos o tres semanas.',
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
      'Todavía no estamos en China, buscamos el modelo',
      'Entramos ahora y necesitamos un primer socio',
      'Ya vendemos y sustituimos a un socio',
      'Ya vendemos y añadimos un canal o una región',
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
