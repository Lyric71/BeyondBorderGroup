import type { HowWeWorkCopy } from './en';

const copy: HowWeWorkCopy = {
  meta: {
    title: 'Cómo trabajamos: elegir su TP o DP en China | TheChinaPath',
    description:
      'No tenemos equipo propio de TP ni de DP. Buscamos al socio de Tmall, JD o Douyin que conoce su categoría y ya tiene su público, y le presentamos su marca.',
    ogImageAlt:
      'Una directora de marca extranjera, sentada frente al equipo de un socio chino en una sala de reuniones de Shanghái',
  },
  subnavLabel: 'En esta página',
  sections: [
    { id: 'why', label: 'Por qué' },
    { id: 'our-role', label: 'Nuestro papel' },
    { id: 'who-does-what', label: 'Quién hace qué' },
    { id: 'tp-or-dp', label: 'TP o DP' },
    { id: 'the-right-partner', label: 'El socio adecuado' },
    { id: 'pitching', label: 'Convencer al socio' },
    { id: 'the-steps', label: 'Las etapas' },
    { id: 'pricing-faq', label: 'Tarifas y preguntas' },
  ],
  hero: {
    kicker: 'Cómo trabajamos',
    h1Before: 'En China, el ',
    h1Mark: 'socio equivocado',
    h1After: ' le cuesta años.',
    lead: 'La mayoría de las marcas extranjeras vende en China a través de un TP (trade partner) en Tmall y JD, o de un DP (Douyin partner) en Douyin. En los dos casos, la tienda la lleva el socio. Nosotros no tenemos equipo de TP ni de DP. Nuestro oficio consiste en dar con el socio que debería llevar la suya y en lograr que le abra la puerta a su marca. Después, generamos la demanda.',
    ctaPrimary: 'Hable con nosotros',
    ctaSecondary: 'Ver los motivos',
    proof: [
      { count: 15, suffix: '+', value: '15+', label: 'años en Tmall y JD' },
      { count: 200, suffix: '+', value: '200+', label: 'lanzamientos de marca' },
      { value: 'Compass', label: 'nuestra base de datos de socios, de libre consulta', href: '/compass' },
    ],
    imgAlt:
      'Una directora de marca extranjera, sentada frente al equipo de un socio chino en una sala de reuniones de Shanghái',
    checkLabel: 'Lo primero que comprobamos',
    checkRows: [
      { label: 'Conoce su categoría', key: true },
      { label: 'Ya tiene a sus compradores', key: true },
      { label: 'Sabe llevar la tienda', key: false },
    ],
    checkCaption: 'La mayoría de las marcas solo comprueba el último.',
  },
  why: {
    eyebrow: 'Por qué trabajamos así',
    h2: 'China no perdona un error de socio',
    lead: 'Cuatro factores se repiten en casi todos los lanzamientos que vemos. Nuestra forma de trabajar parte de ellos.',
    reasons: [
      {
        title: 'Su categoría ya está saturada',
        body: 'El mercado de consumo chino es de una competencia feroz. Venda lo que venda, una marca local llegó antes, probablemente varias. Actúan deprisa y ajustan los precios al máximo. Y conocen al comprador mejor que usted. Un nombre extranjero despierta algo de curiosidad, y poco más.',
        alt: 'Una compradora compara dos frascos de cosmética ante unos estantes repletos de marcas locales, en una tienda de belleza china',
      },
      {
        title: 'El socio decide cómo le irá',
        body: 'Un TP o DP que conoce su categoría y ya cuenta con su público le da ventaja desde la salida. Uno que solo sabe operar una tienda y comprar tráfico le condena a pagar cada visita. Durante años.',
        alt: 'Una presentadora muestra un frasco de sérum a la cámara de un móvil en un estudio de venta en directo en China',
      },
      {
        title: 'Los mejores socios pueden decir que no',
        body: 'Los TP y DP más sólidos de cada categoría están desbordados. Reciben propuestas de marcas cada semana y rechazan la mayoría. Las marcas que pasan el filtro lo hacen tras un examen a fondo, y con una inversión mínima impuesta.',
        alt: 'Dos socios chinos revisan propuestas de marca impresas y muestras de producto, uno de ellos con gesto escéptico',
      },
      {
        title: 'No tenemos un equipo de tienda que colocarle',
        body: 'Si tuviéramos un equipo de TP o DP, todas las marcas que pasaran por nuestra oficina nos parecerían idóneas para él. Como no lo tenemos, la única pregunta que nos hacemos es qué socio conviene a la suya.',
        alt: 'Una responsable de marca extranjera repasa las condiciones de un contrato con el equipo de un socio chino, con el té servido sobre la mesa',
      },
    ],
    verdict: 'Por eso trabajamos para usted, de su lado de la mesa y sin socio propio que colocar.',
  },
  role: {
    eyebrow: 'Dónde nos situamos',
    h2: 'Quién ocupa cada silla en un lanzamiento en China',
    lead: 'Un lanzamiento en China suele reunir a seis actores. Esto es lo que asume cada uno.',
    sideOurs: 'De su lado',
    sideMarket: 'Del lado del mercado',
    parties: {
      you: {
        name: 'Usted, la marca',
        body: 'La marca y el producto son suyos, igual que la cadena de suministro que los sostiene. Usted fija el presupuesto y firma con el socio.',
      },
      us: {
        name: 'Nosotros',
        body: 'Redactamos el plan y encontramos a su TP o DP. Después presentamos su marca a ese socio y llevamos su marketing de eCommerce en paralelo. Cuando encaja, actuamos además como su distribuidor online en exclusiva.',
      },
      tp: {
        name: 'Su TP o DP',
        body: 'Es quien lleva sus tiendas en el día a día, atención al cliente incluida. El TP trabaja en Tmall y JD; el DP, en Douyin. Con él planificamos las campañas. Algunos socios acaban comprando stock, aunque nunca de entrada.',
      },
      logistics: {
        name: 'Socio logístico',
        body: 'Solo es necesario si su TP o DP no puede gestionar envíos transfronterizos. En ese caso, salimos a buscar uno a la medida de su marca.',
      },
      online: {
        name: 'Distribuidores online',
        hint: 'JD, Tmall Supermarket, Hema, etc.',
        body: 'Compran su stock y lo venden a través de sus propios canales: la tienda propia de JD, Tmall Supermarket, Hema y otros similares. Nosotros damos con el adecuado y le presentamos su marca. En ocasiones asumimos ese papel nosotros mismos, como su distribuidor online en exclusiva.',
      },
      offline: {
        name: 'Distribuidores offline',
        body: 'Colocan su marca en tiendas y en el canal mayorista. Nosotros los encontramos. Nunca ejercemos de agente comercial en el canal offline.',
      },
    },
  },
  tpdp: {
    eyebrow: 'Lo esencial',
    h2: '¿Qué es un TP y qué es un DP?',
    lead: 'Los dos son proveedores de servicios y hacen un trabajo muy parecido. Lo que los separa es el terreno de juego: Tmall y JD para uno, Douyin para el otro.',
    segLabel: 'Tipo de socio',
    tpToggle: 'TP, trade partner',
    dpToggle: 'DP, Douyin partner',
    tpSummary:
      'Un TP lleva su tienda en Tmall, y a menudo también en JD: fichas de producto, contenidos, atención al cliente en mandarín, tráfico y campañas. Cobra unos honorarios por servicio, por lo general con una comisión sobre las ventas.',
    dpSummary:
      'Un DP hace el mismo trabajo en Douyin. Lleva su tienda en la plataforma, los vídeos cortos y los directos que la alimentan, y los creadores que venden por usted. Cobra de forma muy parecida a un TP.',
    tableCaption: 'Comparativa entre TP y DP',
    compare: [
      { label: 'Dónde opera', tp: 'Tmall, y a menudo JD', dp: 'Douyin' },
      {
        label: 'Qué gestiona',
        tp: 'Su tienda, las fichas, la atención al cliente y las campañas',
        dp: 'Su tienda, el vídeo corto, los directos y los creadores',
      },
      {
        label: 'Cómo cobra',
        tp: 'Honorarios y, casi siempre, comisión',
        dp: 'Honorarios y, casi siempre, comisión',
      },
      { label: 'Compra su stock', tp: 'Por lo general, no', dp: 'Por lo general, no', tpOk: false, dpOk: false },
      { label: 'Puede pasar a ser su distribuidor', tp: 'Sí, más adelante', dp: 'Sí, más adelante', tpOk: true, dpOk: true },
    ],
    journeyStart: 'Primer año: solo servicios',
    journeyEnd: 'Después: puede pasar a ser su distribuidor',
    note: 'Por regla general, el inventario sigue siendo suyo. Un TP o DP puede convertirse más adelante en su distribuidor y empezar a comprar stock, pero solo cuando entiende su cadena de suministro y ve lo que usted invierte de verdad. Suele hacer falta un año de servicios, a menudo más.',
    noteStrong:
      'Nuestro consejo: plantee primero un contrato de servicios y vea el acuerdo de distribución como algo que hay que ganarse.',
  },
  partner: {
    eyebrow: 'El socio adecuado',
    h2: 'La categoría primero. El público, por encima de todo.',
    lead: 'Muchos TP y DP saben llevar una tienda y comprar tráfico. Es el requisito de entrada, y ahí deja de buscar la mayoría de las marcas.',
    catTitle: 'Conoce su categoría',
    catBody:
      'Ya lleva marcas de su sector. Conoce las franjas de precio y los términos de búsqueda, y tiene el calendario comercial en la cabeza. También sabe qué creadores venden de verdad y cuáles se limitan a publicar. Y usted no paga su curva de aprendizaje.',
    chipsLabel: 'Lo que domina un especialista de la categoría',
    chips: ['Franjas de precio', 'Términos de búsqueda', 'Calendario comercial', 'Creadores que venden'],
    audTag: 'Lo que más pesa',
    audTitle: 'Tiene público propio',
    audBody:
      'Ya vende a los compradores que usted busca. Sus tiendas y sus salas de directo atraen cada día a clientes de su categoría, igual que su red de creadores. El tráfico comprado desaparece el mismo día que el presupuesto; el público propio de un socio sigue comprando cuando la publicidad calla.',
    chartTitle: 'Qué ocurre cuando se corta la inversión publicitaria',
    chartCut: 'Cortar la inversión',
    chartRestore: 'Recuperar la inversión',
    chartSr:
      'Cuando se detiene la inversión publicitaria, el tráfico del socio que lo compra se desploma, mientras que el socio con público propio conserva la mayor parte del suyo.',
    chartMarker: 'Se corta la publicidad',
    axisX: 'Meses',
    axisY: 'Tráfico de la tienda',
    legendA: 'Socio que compra tráfico',
    legendB: 'Socio con público propio',
    chartCaption: 'Una ilustración de la tendencia, no datos de clientes.',
    mistakeLabel: 'El error habitual',
    mistakeBody:
      'Una marca elige un TP o DP porque sabe operar una tienda y comprar tráfico. Lo vemos constantemente. Al cabo de uno o dos años, la marca tiene un flagship impecable, una factura de medios abultada y muy pocos compradores que vuelvan sin un anuncio que tire de ellos.',
  },
  pitch: {
    eyebrow: 'La mirada del socio',
    h2: '¿Está preparado para convencer a un buen socio?',
    lead: 'Los TP y DP que ganan en su categoría saben lo saturada que está, así que eligen con lupa. Marque lo que ya se cumple en su caso.',
    statusNone: 'Marque lo que ya se cumple.',
    statusSome: 'Es un comienzo. Podemos ayudarle con el resto.',
    statusAll: 'Está preparado. Busquemos al socio.',
    cta: 'Iniciar la búsqueda de socio',
    imgAlt: 'Dos socios chinos revisan propuestas de marca impresas y muestras de producto',
    items: [
      {
        title: 'Tenemos la presentación lista',
        body: 'Un buen socio lee su propuesta como lo haría un inversor exigente. Y querrá conocer también a las personas que hay detrás de la marca.',
      },
      {
        title: 'Sabemos cuánto vamos a invertir',
        body: 'Un socio serio estudia su marca y después fija el mínimo que considera razonable. Tenga clara su propia cifra antes de esa reunión.',
      },
      {
        title: 'Podemos asumir un primer año solo de servicios',
        body: 'El stock llega después, si llega. La mayoría de los socios quiere trabajar un año con su cadena de suministro antes de plantearse comprar nada.',
      },
      {
        title: 'Sabremos rechazar un sí demasiado fácil',
        body: 'Si un socio no necesita que lo convenzan, pregúntese por qué tiene hueco en su cartera.',
      },
    ],
  },
  interludeRoles: 'Hasta aquí, el lado del socio. Veamos cómo se reparte el trabajo cuando todos se sientan a la mesa.',
  raci: {
    eyebrow: 'Funciones y responsabilidades',
    h2: 'Quién hace qué, tarea por tarea',
    lead: 'En un lanzamiento en China intervienen más actores de los que la mayoría de las marcas prevé. Filtre por actor para ver dónde lleva cada uno la batuta.',
    filterLabel: 'Filtrar por actor',
    everyone: 'Todos',
    leads: 'Al mando',
    supports: 'En apoyo',
    leadsMeaning: 'responde del resultado',
    supportsMeaning: 'participa sin dirigir',
    regionLabel: 'Responsabilidades por tarea',
    taskCol: 'Tarea',
    notInvolved: 'No interviene',
    lowercaseInline: true,
    cols: {
      you: 'Usted',
      us: 'Nosotros',
      tp: 'TP o DP',
      logistics: 'Socio logístico',
      offline: 'Distribuidores offline',
    },
    rows: [
      { task: 'Marca, producto y cadena de suministro', cells: ['L', '', '', '', ''] },
      { task: 'Presupuesto y nivel de inversión', cells: ['L', 'S', '', '', ''] },
      { task: 'Plan de negocio', cells: ['S', 'L', '', '', ''] },
      { task: 'Localización de la marca', cells: ['S', 'L', '', '', ''] },
      { task: 'Búsqueda del TP o DP y presentación de la marca', cells: ['S', 'L', '', '', ''] },
      { task: 'Elección del socio y firma', cells: ['L', 'S', '', '', ''] },
      { task: 'Operación de la tienda y atención al cliente', cells: ['', '', 'L', '', ''] },
      { task: 'Contenidos para sus tiendas de eCommerce', cells: ['', 'L', 'S', '', ''] },
      { task: 'Campañas de eCommerce', cells: ['', 'L', 'L', '', ''] },
      { task: 'Campañas en redes sociales y gestión de cuentas', cells: ['', 'L', '', '', ''] },
      { task: 'Eventos presenciales', cells: ['', 'L', '', '', ''] },
      { task: 'Logística transfronteriza', cells: ['', 'Búsqueda del socio', 'Si tiene capacidad', 'En su defecto', ''] },
      { task: 'Tiendas físicas y canal mayorista', cells: ['', 'Búsqueda de distribuidores', '', '', 'L'] },
    ],
  },
  steps: {
    eyebrow: 'La colaboración',
    h2: 'Así es trabajar con nosotros',
    lead: 'La mayoría de las marcas recorre con nosotros estas seis etapas, cada una a su ritmo.',
    involved: 'Participan: ',
    items: [
      {
        title: 'Conocemos la marca',
        body: 'Todo empieza con muchas conversaciones: su producto, sus márgenes, su presupuesto, lo que espera de China. También examinamos a fondo su categoría, porque lo más probable es que las marcas locales ya la tengan copada.',
        who: ['you', 'us'],
      },
      {
        title: 'Redactamos el plan',
        body: 'Un plan de negocio y una marca adaptada al comprador chino. El plan fija también cuánto puede invertir, porque todo socio serio exige un mínimo antes de dar el sí.',
        who: ['us', 'you'],
      },
      {
        title: 'Buscamos a su TP o DP y le presentamos la marca',
        body: 'Es la fase lenta, y no admite atajos. Preparamos la presentación y la llevamos a socios de nuestra red que conocen su categoría y ya tienen su público (la búsqueda arranca en Compass). Ellos evalúan su marca, y los buenos se toman su tiempo.',
        who: ['us', 'you', 'tp'],
      },
      {
        title: 'Resolvemos la logística',
        body: 'Si su TP o DP no puede hacer envíos transfronterizos, buscamos un socio que sí pueda y que se ajuste a su marca. Un error aquí se nota en los plazos de entrega y en la aduana, y tarde o temprano en el margen.',
        who: ['us', 'logistics'],
      },
      {
        title: 'Lanzamos y llevamos el marketing',
        body: 'Contenidos para sus tiendas de eCommerce. Campañas de eCommerce planificadas con su TP o DP. Campañas y gestión de cuentas en redes sociales. Y eventos presenciales, cuando compensan la inversión.',
        who: ['us', 'tp'],
      },
      {
        title: 'Ampliamos la estructura con usted',
        body: 'Cuando su socio confía en su cadena de suministro, puede proponerle convertirse en su distribuidor y comprar stock. Es buena señal. Podemos entrar como su distribuidor online en exclusiva e incorporar distribuidores offline cuando usted quiera llegar a las tiendas y al canal mayorista.',
        who: ['us', 'tp', 'offline'],
      },
    ],
  },
  hire: {
    eyebrow: 'Trabajar con nosotros',
    h2: 'Contrate una parte o el conjunto',
    lead: 'Puede confiarnos solo la búsqueda de socio o toda la operación. Usted decide.',
    items: [
      {
        title: 'Búsqueda de socio',
        body: 'Encontramos al TP o DP adecuado y le presentamos su marca. La búsqueda arranca en Compass, nuestra base de datos de TP, DP y distribuidores a los que conocemos en persona.',
        cta: 'Qué buscamos',
      },
      {
        title: 'Marketing de eCommerce',
        body: 'Redactamos el plan, localizamos la marca y llevamos los contenidos y las campañas junto a su socio, en eCommerce y en redes sociales, además de los eventos presenciales.',
        cta: 'Ver qué gestionamos',
      },
      {
        title: 'Distribución online en exclusiva',
        body: 'Cuando el plan lo requiere, firmamos como su distribuidor exclusivo para la venta online en China.',
        cta: 'Consúltenos',
      },
      {
        title: 'Búsqueda de distribuidores offline',
        body: 'Encontramos a los distribuidores que llevan su marca a las tiendas y al canal mayorista.',
        cta: 'Cómo buscamos distribuidores',
      },
    ],
  },
  interludeFaq: '¿Sigue ahí? Bien. Es el punto al que casi todo el mundo salta directamente.',
  faq: {
    eyebrow: 'Tarifas y preguntas frecuentes',
    h2: 'Lo primero que nos preguntan las marcas',
    fresh: 'Última revisión: 19 de septiembre de 2026.',
    ours: {
      q: '¿Cómo cobran?',
      a: 'La búsqueda de socio se presupuesta como proyecto. El marketing de eCommerce funciona con una iguala mensual o por proyecto, según el alcance. Como distribuidor exclusivo, obtenemos un margen sobre el producto, pactado de antemano. Presupuestamos tras la primera conversación, cuando ya conocemos su categoría y el alcance del trabajo.',
      modes: [
        { label: 'Búsqueda de socio', value: 'Tarifa por proyecto' },
        { label: 'Marketing de eCommerce', value: 'Iguala o proyecto' },
        { label: 'Distribución exclusiva', value: 'Margen sobre producto' },
      ],
    },
    tp: {
      q: '¿Cuánto cobra un TP o DP?',
      a: 'Suele cobrar en dos niveles. Unos honorarios fijos mensuales por tienda, a menudo de 30.000 a 80.000 RMB según el alcance, más una comisión sobre las ventas netas, por lo general entre el 5 y el 12 %. La puesta en marcha, la producción de contenidos y los medios se presupuestan aparte. Son horquillas habituales de TP, revisadas en septiembre de 2026. Un DP en Douyin factura con la misma lógica; nuestra calculadora de costes de Douyin ofrece una primera estimación.',
      html: 'Suele cobrar en dos niveles. Unos honorarios fijos mensuales por tienda, a menudo de 30.000 a 80.000 RMB según el alcance, más una comisión sobre las ventas netas, por lo general entre el 5 y el 12 %. La puesta en marcha, la producción de contenidos y los medios se presupuestan aparte. Son horquillas habituales de TP, revisadas en septiembre de 2026. Un DP en Douyin factura con la misma lógica; nuestra <a href="/tools/douyin-cost-calculator">calculadora de costes de Douyin</a> ofrece una primera estimación.',
      figures: [
        { value: '30.000 a 80.000 RMB', label: 'honorarios fijos mensuales por tienda' },
        { value: '5 a 12 %', label: 'comisión sobre las ventas netas' },
      ],
    },
    items: [
      {
        q: '¿Por qué no tienen su propio equipo de TP o DP?',
        a: 'Porque condicionaría nuestro consejo. Sin un equipo de tienda al que dar trabajo, podemos recomendar el socio que mejor encaje con su marca.',
      },
      {
        q: '¿Podemos contratarlos solo para la búsqueda de socio?',
        a: 'Sí. Puede sumar el marketing de eCommerce más adelante o incorporarnos como su distribuidor online en exclusiva.',
      },
      {
        q: '¿Comprará el TP o DP nuestro stock?',
        a: 'Normalmente, no. Los TP y DP son proveedores de servicios y la mayoría nunca se queda con su inventario. Algunos pasan a ser distribuidores más adelante, cuando entienden su cadena de suministro y ven cuánto está invirtiendo usted. Cuente con un año de servicios como mínimo antes de eso.',
      },
      {
        q: '¿Cuánto nos pedirá invertir un socio?',
        a: 'Depende de la categoría y del socio. Un TP o DP serio estudia su marca y después fija el mínimo que considera razonable. Le ayudamos a fijar su propia cifra en el plan de negocio, antes de esa conversación. Para una primera estimación, pruebe nuestras calculadoras de costes de Tmall Global, JD Worldwide y Douyin.',
        html: 'Depende de la categoría y del socio. Un TP o DP serio estudia su marca y después fija el mínimo que considera razonable. Le ayudamos a fijar su propia cifra en el plan de negocio, antes de esa conversación. Para una primera estimación, pruebe nuestras calculadoras de costes de <a href="/tools/tmall-global-setup-and-run">Tmall Global</a>, <a href="/tools/jd-worldwide-setup-and-run">JD Worldwide</a> y <a href="/tools/douyin-cost-calculator">Douyin</a>.',
      },
      {
        q: '¿Venden ustedes nuestra marca en el comercio físico?',
        a: 'No. Nunca actuamos como agente comercial en los canales offline. Encontramos a los distribuidores offline adecuados, y son ellos quienes venden a tiendas y mayoristas.',
      },
      {
        q: '¿Quién se encarga de la logística?',
        a: 'Su TP o DP, si gestiona logística transfronteriza. Si no, un socio logístico que encontramos para usted.',
      },
    ],
  },
  cta: {
    eyebrow: 'Hablemos',
    h2: 'Cuéntenos qué vende y le diremos qué socios merecen su propuesta.',
    body: 'Un miembro sénior del equipo le responde en un día hábil. O explore antes por su cuenta: nuestra base de datos de socios es de libre consulta.',
    primary: 'Escríbanos',
    secondary: 'Buscar en Compass',
  },
};

export default copy;
