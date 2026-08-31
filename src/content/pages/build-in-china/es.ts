/**
 * /build-in-china — versión en español.
 *
 * Redactada directamente en español, registro El País, no traducida del inglés.
 * Las cifras y el marco de las cinco brechas están documentados en
 * docs/restructure/content-sources.md, apartado 6.
 */
import type { BuildInChinaCopy } from './types';

const copy: BuildInChinaCopy = {
  meta: {
    title: 'Web, WeChat y mini programa en China | TheChinaPath',
    description:
      'Por qué su web va lenta o resulta invisible en China: indexación en Baidu, licencia ICP y la elección entre mini programa de WeChat y web móvil. La construye ChinaWebFoundry, nuestro equipo web en Shanghái.',
  },

  hero: {
    crumbHome: 'Inicio',
    crumbSection: 'Web y redes sociales',
    eyebrow: 'Web y redes sociales',
    titleBefore: 'Su web funciona en todas partes, ',
    titleEm: 'menos',
    titleAfter: ' en China.',
    lead: 'Ocho segundos de carga desde Shanghái, cuando llega a cargar. Baidu no la ha indexado nunca. Y alguien del lado chino ha empezado a decir «mini programa» en las reuniones.',
    bodyBefore:
      'No es un problema, son cinco, aparecen a la vez y cada uno pide una respuesta distinta. Esta página dice cuáles son. La construcción corre a cargo de ',
    cwfAnchor: 'ChinaWebFoundry, nuestro equipo web en Shanghái',
    bodyAfter: '.',
    ctaPrimary: 'Hablar con ChinaWebFoundry',
    ctaSecondary: '¿Mini programa o web?',
    shotAria: 'Abrir chinawebfoundry.com',
    shotCta: 'Abrir el sitio',
    shotAlt:
      'Portada de ChinaWebFoundry, agencia web de Shanghái: estado de la licencia ICP, posición en Baidu y una carga de 1,2 segundos',
    scrollAria: 'Ir a las cinco brechas',
    scrollLabel: 'Bajar',
  },

  gapsSection: {
    eyebrow: 'El problema de fondo',
    title: 'Cinco brechas se abren a la vez.',
    lead: 'La mayoría de las marcas extranjeras aterriza en China traduciendo su web global. Seis meses después no entra un solo contacto. Aquí están, más o menos en el orden en que duelen.',
    hint: 'Abra una brecha para leerla.',
    figureAlt:
      'Una responsable de marketing en su mesa de Shanghái al anochecer, ante una página que no termina de cargar',
    figureCaption: 'Seis meses en el mercado y ni un contacto entrante.',
  },

  gaps: [
    {
      id: 'content',
      icon: 'content',
      tag: 'Contenido',
      title: 'Su contenido no convence',
      body: 'El comprador chino busca pruebas que los equipos extranjeros entierran cerca del pie de página: credibilidad del fundador, certificaciones, logotipos de socios, premios. Un redactor nativo las coloca donde un lector chino va a buscarlas.',
    },
    {
      id: 'ux',
      icon: 'ux',
      tag: 'Experiencia',
      title: 'Su interfaz suena a extranjera',
      body: 'Primero móvil, casi siempre dentro del navegador integrado de WeChat. Páginas largas, densas, con las pruebas de confianza en la primera pantalla. El minimalismo occidental se lee allí como una web sin acabar.',
    },
    {
      id: 'baidu',
      icon: 'baidu',
      tag: 'Baidu',
      title: 'Baidu no le ve',
      body: 'Otras señales de posicionamiento, otras reglas de indexación. Baidu no indexa bien una web sin licencia ICP y alojamiento chino. Lo que funciona en Google no se traslada.',
      cite: 'Baidu concentra alrededor de la mitad del mercado chino de búsqueda. Google se queda por debajo del 3 %. Fuente: Statcounter Global Stats, China, 2024.',
    },
    {
      id: 'ai',
      icon: 'ai',
      tag: 'Modelos de IA',
      title: 'Para muchos compradores, la IA ya sustituyó al buscador',
      body: 'Doubao, Kimi, DeepSeek y Wenxin, el modelo de Baidu, responden hoy a preguntas que antes iban a una caja de búsqueda. El usuario rara vez pincha más allá. Si sus páginas no están montadas para que una IA las cite, usted no aparece.',
    },
    {
      id: 'infra',
      icon: 'infra',
      tag: 'Infraestructura',
      title: 'El alojamiento chino es solo el suelo',
      body: 'Cargas lentas, extensiones rotas, scripts que fallan en silencio detrás del Gran Cortafuegos. Con el suelo resuelto, lo que gana al cliente es la fuerza de la marca.',
    },
  ],

  icp: {
    eyebrow: 'La parte que nadie explica',
    title: 'La licencia ICP, en claro.',
    lead: 'Un número de registro del Ministerio de Industria y Tecnologías de la Información, ligado a un dominio y a un alojamiento continental. Más cerca de una matrícula que de un certificado. Sin ella, ningún servidor en China puede servir su dominio.',
    steps: [
      {
        step: 'Sociedad china',
        detail: 'La licencia la tiene una sociedad de derecho chino, no la agencia.',
      },
      {
        step: 'Solicitud',
        detail: 'Se presenta a través de su alojamiento chino, con dominio y dirección real.',
      },
      {
        step: 'Revisión del MIIT',
        detail: 'Varias semanas de espera. Es lo que marca el calendario.',
      },
      {
        step: 'Número concedido',
        detail: 'Su 备案号 figura en el pie de la web. El alojamiento se activa.',
      },
    ],
    figureAlt: 'Un sello de empresa tallado y su marca roja junto a la documentación del trámite',
    figureCaption: 'El trámite es papeleo, y ese papeleo manda sobre el calendario.',
    unlockTitle: 'Lo que abre la licencia',
    unlocks: [
      'Indexación correcta en Baidu',
      'Alojamiento en China continental',
      'Integración con WeChat y mini programas',
      'Cobro en un dominio continental',
    ],
    trapTitle: 'La trampa',
    trapBody:
      'La licencia queda en manos de una sociedad de derecho chino, así que quién la tiene pesa más de lo que parece. Deje que un proveedor la tramite a su nombre y puede descubrir, dos años después, que no puede cambiar de alojamiento sin su consentimiento.',
    trapKicker: 'Empiece antes del diseño, no después. La espera corre bien en paralelo.',
  },

  choose: {
    figureAlt:
      "Escaparate de un mini programa de WeChat en chino: botón cápsula, banner promocional, accesos por categoría, fichas de producto con precios en yuanes y barra de pestañas inferior",
    figureCaption:
      "Así se encuentra de verdad un comprador con un mini programa: dentro de WeChat, sin descarga ni muro de registro, con el botón cápsula fijo arriba a la derecha, donde su interfaz no puede taparlo.",
    eyebrow: 'La segunda pregunta de siempre',
    title: '¿Mini programa de WeChat o web móvil?',
    lead: 'Son dos problemas distintos y equivocarse sale caro en silencio. Muchas marcas acaban con las dos cosas. Casi ninguna necesita las dos al principio. Con cuatro preguntas la mayoría de los equipos llega a una respuesta.',
    questions: [
      {
        q: '¿El pago tiene que cerrarse dentro de WeChat, sin redirección?',
        yes: 'mp',
        hint: 'WeChat Pay en sesión',
      },
      {
        q: '¿Necesita que le encuentren en Baidu o en los modelos de IA?',
        yes: 'site',
        hint: 'Visibilidad en búsqueda',
      },
      {
        q: '¿Vuelve el comprador, y cuentan la fidelización o el saldo?',
        yes: 'mp',
        hint: 'Recompra y fidelidad',
      },
      {
        q: '¿Habrá alguien sobre el terreno publicando casi cada semana?',
        yes: 'site',
        hint: 'Ritmo editorial',
      },
    ],
    yes: 'Sí',
    no: 'No',
    reset: 'Reiniciar respuestas',
    verdictEyebrow: 'Cómo va',
    verdictEmptyTitle: 'Responda a las cuatro',
    verdictEmptyBody:
      'Todavía no hay nada contado. Vaya respondiendo y la recomendación se va afinando.',
    verdictMp: 'Mini programa de WeChat',
    verdictMpBody:
      'El pago y la recompra son lo que más pesa en sus respuestas. Empiece dentro de WeChat y deje la web móvil para una segunda fase.',
    verdictSite: 'Web móvil',
    verdictSiteBody:
      'Necesita que le encuentren y tiene material que publicar. Empiece por la web y ponga en marcha la licencia ICP ya, porque la espera manda sobre todo lo demás.',
    verdictEven: 'Empiece por la web',
    verdictEvenBody:
      'Las respuestas quedan empatadas, y eso suele apuntar a la web. Es la que puede medir, y añadirle un mini programa después es un proyecto más pequeño que al revés.',
    verdictPartial: 'Se inclina',
    verdictPartialBody: 'Siga. Con un par de respuestas más queda decidido.',
    meterLeft: 'Mini programa',
    meterRight: 'Web móvil',
    rule: 'Regla práctica: si el comprador busca, haga la web. Si ya le sigue, haga el mini programa. Si no sabe cuál, haga la web, que es la que puede medir.',
    surfaces: [
      {
        key: 'mp',
        name: 'Mini programa de WeChat',
        cn: '小程序',
        blurb: 'Vive dentro de WeChat. Fuera de ahí, casi invisible.',
        right: [
          'La venta tiene que cerrarse con WeChat Pay',
          'La fidelización, los niveles y el saldo forman parte del modelo',
          'Los compradores llegan de grupos, notificaciones y códigos QR en tienda',
          'La experiencia es transaccional y la gente vuelve',
        ],
        wrong: [
          'Lo que necesita sobre todo es que le encuentren',
          'Nadie del equipo puede alimentar una segunda interfaz',
        ],
      },
      {
        key: 'site',
        name: 'Web móvil',
        cn: '移动站',
        blurb: 'Se encuentra, se enlaza y se indexa. Sola no cobra por WeChat.',
        right: [
          'El objetivo es la visibilidad en búsqueda, en Baidu y en los modelos de IA',
          'El contenido cambia a menudo y lo publica un responsable local',
          'Quiere una dirección que se comparta en cualquier sitio, no solo en WeChat',
          'La decisión de compra es larga y se apoya en la documentación',
        ],
        wrong: [
          'El pago tiene que cerrarse dentro de WeChat, sin redirección',
          'Toda su audiencia cabe ya en una sola cuenta oficial',
        ],
      },
    ],
    rightWhen: 'Acierta cuando',
    wrongWhen: 'Se equivoca cuando',
  },

  proof: {
    eyebrow: 'Lo que cambia',
    title: 'Con el suelo resuelto, las cifras se mueven rápido.',
    loadLabel: 'Tiempo de carga mediano de las webs lanzadas, medido desde Shanghái.',
    bounceLabel:
      'Tasa de rebote mediana antes y después, webs de marcas extranjeras en China, primeros 90 días.',
    source:
      'Medido por ChinaWebFoundry en el conjunto de webs de clientes lanzadas. La tasa de rebote compara las mismas marcas antes y después.',
  },

  door: {
    eyebrow: 'Quién la construye',
    title: 'Nosotros no hacemos webs. Los del pasillo de al lado, sí.',
    bodyOneBefore: '',
    cwfAnchor: 'ChinaWebFoundry',
    bodyOneAfter:
      ' comparte oficina con el equipo que lleva su tienda de Tmall y su búsqueda de distribuidor. Mismo grupo, mismo edificio, misma reunión semanal. Eso cuenta, porque los proyectos chinos se caen casi siempre en el relevo entre quienes conocen el canal y quienes escriben el código.',
    bodyTwo:
      'El siguiente paso es un China Site Scan. Ponen su dominio a prueba desde China continental y le devuelven lo que ocurre de verdad: tiempo de carga desde Shanghái, qué ha indexado Baidu, qué scripts fallan detrás del Gran Cortafuegos. Es gratis y tardan unos días.',
    ctaPrimary: 'Hablar con ChinaWebFoundry',
    ctaSecondary: 'Hablar mejor con nosotros',
    scanAria: 'Ejemplo de diagnóstico de web',
    scanTitle: 'China Site Scan',
    scanLive: 'en curso',
    scanRows: [
      {
        label: 'Tiempo de carga, medido desde Shanghái',
        to: 8.4,
        decimals: 1,
        suffix: 's',
        note: 'objetivo: menos de 2,5 s',
        pct: 94,
        tone: 'bad',
      },
      {
        label: 'Páginas indexadas por Baidu',
        to: 0,
        decimals: 0,
        suffix: '',
        note: 'sin licencia ICP registrada',
        pct: 100,
        tone: 'bad',
      },
      {
        label: 'Scripts bloqueados por el Gran Cortafuegos',
        to: 6,
        decimals: 0,
        suffix: '',
        note: 'tipografías, mapas, gestor de etiquetas',
        pct: 64,
        tone: 'warn',
      },
    ],
    scanAiLabel: 'Legible para los modelos de IA chinos',
    scanAiValue: 'No',
    scanAiNote: 'Doubao, Kimi, DeepSeek',
    scanFoot:
      'Diagnóstico real, anonimizado. Cuatro de cada cinco marcas que revisamos suspenden en al menos tres líneas.',
  },
};

export default copy;
