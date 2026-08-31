/**
 * /social-in-china — versión en español.
 *
 * Redactada directamente en español, registro El País. Los resultados de cliente
 * proceden del repositorio de TheRedScroll y están documentados en
 * docs/restructure/content-sources.md, apartado 7.
 */
import type { SocialInChinaCopy } from './types';

const copy: SocialInChinaCopy = {
  meta: {
    title: 'Redes sociales chinas: WeChat, RedNote, Douyin, Weibo | TheChinaPath',
    description:
      'Para qué sirve de verdad cada plataforma china, dónde vende lo social y dónde solo construye audiencia, y quién debe llevar cada mitad del trabajo.',
  },

  stages: ['Descubrir', 'Investigar', 'Decidir', 'Comprar', 'Fidelizar'],

  hero: {
    crumbHome: 'Inicio',
    crumbSection: 'Web y redes sociales',
    eyebrow: 'Web y redes sociales',
    titleBefore: 'En China, lo social ',
    titleEm: 'es',
    titleAfter: ' la tienda.',
    lead: 'Allí se busca, allí están las reseñas, allí se atiende al cliente y allí se cierra una parte real de las compras. Llevar esas cuentas como un calendario de publicaciones es haber leído mal el mercado.',
    bodyBefore:
      'Esto es para qué sirve cada plataforma y quién debe llevar cada mitad del trabajo. El día a día es cosa de ',
    trsAnchor: 'TheRedScroll, nuestra agencia social',
    bodyAfter: '.',
    ctaPrimary: 'Hablar con TheRedScroll',
    ctaSecondary: 'Quién hace qué',
    shotAria: 'Abrir theredscroll.com',
    shotCta: 'Abrir el sitio',
    shotAlt:
      'Portada de TheRedScroll, agencia social china que trabaja en WeChat, RedNote, Douyin y Weibo',
    scrollAria: 'Ir al mapa de plataformas',
    scrollLabel: 'Bajar',
  },

  map: {
    eyebrow: 'El mapa de plataformas',
    title: 'Cuatro plataformas, cuatro oficios distintos.',
    lead: 'El error caro es lanzar un mismo mensaje en las cuatro. Cada una ocupa un momento distinto de la misma compra, así que lo que funciona en una rinde peor en las demás por pura construcción.',
    tablistAria: 'Plataformas sociales chinas',
    funnelTitle: 'Donde más pesa',
    ownerSplit: 'Superficie compartida. La tienda es cosa nuestra, la comunidad es cosa suya.',
    ownerTrs: 'Se lleva con TheRedScroll.',
    ownerLink: 'Ver la frontera',
    tailTitle: 'Y la cola larga, más larga de lo que admiten casi todas las presentaciones.',
    tailBody:
      'Hay categorías que viven casi enteras ahí fuera. Los electrodomésticos en Zhihu. Todo lo dirigido a estudiantes en Bilibili. Ignórela por defecto, pero compruébela antes de escribir el plan.',
  },

  platforms: [
    {
      key: 'wechat',
      name: 'WeChat',
      cn: '微信',
      logo: '/Images/platforms/wechat-logo.svg',
      role: 'Donde se conserva al cliente',
      tint: '#07C160',
      body: 'Nadie recorre WeChat buscando marcas. Se llega por un código QR, un grupo o un conocido. Lo que WeChat hace mejor que nadie es sostener la relación después, y cobrar. Cuenta oficial, mini programa, WeCom, Channels.',
      weights: [0, 1, 1, 2, 2],
      owner: 'Split',
      image: '/Images/social/wechat.png',
      alt: 'Una mujer lee una conversación de WeChat en su móvil en una cafetería de Shanghái',
    },
    {
      key: 'rednote',
      name: 'RedNote',
      cn: '小红书',
      logo: '/Images/platforms/rednote-logo.svg',
      role: 'Donde se documenta la compra',
      tint: '#FF2442',
      body: 'Xiaohongshu dentro de China. Mitad buscador, mitad web de reseñas. Quien ha oído su nombre entra aquí a comprobar si a gente real le gustó. Belleza, moda, bienestar y viajes se juegan aquí. Se busca como en Google, y por eso el contenido pensado para Instagram cae plano.',
      weights: [2, 2, 2, 1, 0],
      owner: 'TheRedScroll',
      image: '/Images/social/rednote.png',
      alt: 'Una compradora recorre un feed de belleza de RedNote junto a frascos de cosmética y flores secas',
    },
    {
      key: 'douyin',
      name: 'Douyin',
      cn: '抖音',
      logo: '/Images/platforms/douyin-logo.svg',
      role: 'Donde el descubrimiento acaba en venta',
      tint: '#FE2C55',
      body: 'Una tienda con un feed de vídeo acoplado. El número de seguidores importa mucho menos que la tienda: un vídeo corto que termina en una ficha de producto, un directo que cierra en la misma sesión. El algoritmo da alcance real a una cuenta recién abierta si el contenido se lo gana.',
      weights: [2, 1, 1, 2, 1],
      owner: 'Split',
      image: '/Images/social/douyin.png',
      alt: 'Una presentadora de Douyin muestra un producto de cosmética ante la cámara en un plató con aro de luz',
    },
    {
      key: 'weibo',
      name: 'Weibo',
      cn: '微博',
      logo: '/Images/platforms/weibo-logo.svg',
      role: 'Donde salta la noticia y vive la reputación',
      tint: '#E6162D',
      body: 'Más apagada que antes y todavía lo más parecido a una plaza pública que hay en China. Las alianzas con famosos se convierten aquí en noticia. Los hashtags se compran en las listas de tendencias. Un problema de marca aflora aquí primero, y por eso la mayoría la lleva como cobertura reputacional y no como canal de crecimiento.',
      weights: [2, 1, 0, 0, 1],
      owner: 'TheRedScroll',
      image: '/Images/platforms/weibo.png',
      alt: 'Un panel de tendencias de Weibo ilumina a los transeúntes en Nanjing Road una noche de lluvia',
    },
  ],

  longTail: [
    {
      name: 'Bilibili',
      cn: '哔哩哔哩',
      logo: '/Images/platforms/bilibili-logo.svg',
      who: 'Estudiantes, videojuegos, formatos largos',
    },
    {
      name: 'Kuaishou',
      cn: '快手',
      logo: '/Images/platforms/kuaishou-logo.svg',
      who: 'Ciudades de menor rango, directos',
    },
    {
      name: 'Zhihu',
      cn: '知乎',
      logo: '/Images/platforms/zhihu-logo.svg',
      who: 'Compras muy documentadas, electrodomésticos',
    },
    {
      name: 'Toutiao',
      cn: '今日头条',
      logo: '/Images/platforms/toutiao-logo.svg',
      who: 'Feed de noticias, lectores mayores',
    },
    {
      name: 'Meituan',
      cn: '美团',
      logo: '/Images/platforms/meituan-logo.svg',
      who: 'Servicios de proximidad, restauración, tráfico a tienda',
    },
    {
      name: 'Pinduoduo',
      cn: '拼多多',
      logo: '/Images/platforms/pinduoduo-logo.svg',
      who: 'Volumen tirado por el precio',
    },
  ],

  splitSection: {
    eyebrow: 'La versión honesta',
    title: 'Dónde vende lo social y dónde solo prepara el terreno.',
    lead: 'Dos empresas de un mismo grupo acaban compitiendo por el mismo briefing con facilidad. Así que aquí está la frontera, por escrito, y vale en los dos sentidos.',
    testLabel: 'Nuestro criterio: ¿con qué se mide el trabajo?',
    filterAria: 'Filtrar según con qué se mide el trabajo',
    filterBoth: 'Ambos',
    filterGmv: 'Ventas',
    filterAudience: 'Audiencia',
    note: 'Donde se difumina, y se difumina, el criterio es la cifra de fin de mes. Si es ingreso, el trabajo es nuestro. Si es audiencia, es suyo. Un directo puede ser una cosa u otra según por qué lo haga. El orden también cuenta: vender a una audiencia que todavía no existe es la forma más común de concluir que las redes chinas no funcionan.',
  },

  split: [
    {
      key: 'gmv',
      owner: 'Lo lleva TheChinaPath',
      title: 'Lo social que termina en una transacción',
      metric: 'Se mide en ventas',
      items: [
        'Tienda en Douyin: alta, catálogo, fichas de producto y la operación detrás',
        'Minitienda de WeChat, cobro y la mecánica de fidelización asociada',
        'Directos montados para cerrar en la propia sesión',
        'Campañas de festivales colgadas de una tienda: 618, Doble 11, Año Nuevo chino',
        'Medios pagados comprados para alimentar la tienda, juzgados por lo que hizo la tienda',
      ],
      why: 'Trabajo de comercio con ropa de social. Recae en el equipo que ya lleva su operación de Tmall y JD, porque el stock, los precios y el calendario promocional están allí.',
    },
    {
      key: 'audience',
      owner: 'Lo lleva TheRedScroll',
      title: 'Lo social que construye el terreno de debajo',
      metric: 'Se mide en audiencia',
      items: [
        'Contenido diario en todas las cuentas, en chino y escrito por chinos',
        'Gestión de comunidad, comentarios, mensajes directos y dominio privado en grupos de WeChat',
        'Siembra de KOL y KOC, casting, briefings y las relaciones que hay detrás',
        'Campañas de marca juzgadas por alcance, sentimiento y volumen de búsqueda',
        'Alta de cuentas, verificación y el trabajo largo de construir seguidores',
      ],
      why: 'Otra disciplina con otro reloj. Se acumula por trimestres y exige redactores nativos produciendo cada semana. Fracasa cuando un equipo de comercio la lleva como tarea secundaria.',
    },
  ],

  proof: {
    eyebrow: 'Qué aspecto tiene',
    title: 'Primero la audiencia, después las ventas que vinieron detrás.',
    followersLabel: 'Seguidores de Camper en WeChat, RedNote y Weibo, en dieciocho meses.',
    sameStoreLabel: 'Ventas comparables de Camper, interanual, en el mismo periodo.',
    blueLabel: 'Nuevos seguidores el primer mes para Blue Insurance, lanzada sin audiencia previa.',
    source:
      'Trabajo de cliente entregado por TheRedScroll. Las cifras de seguidores y de ventas comparables de Camper cubren los mismos dieciocho meses, en WeChat, RedNote y Weibo. Blue Insurance lanzó la primera aseguradora de vida digital de Hong Kong sin audiencia previa.',
  },

  door: {
    eyebrow: 'Quién lo lleva',
    title: 'Alcance cerrado, precio cerrado y un equipo que ya trabaja aquí.',
    bodyOneBefore: '',
    trsAnchor: 'TheRedScroll',
    bodyOneAfter:
      ' trabaja como las agencias dejaron de trabajar. Los entregables van en el contrato, el precio mensual también, y ambos se acuerdan antes de empezar. Sin facturación por horas y sin un alcance que se desplaza a mitad de trimestre.',
    bodyTwo:
      'El siguiente paso es una llamada de treinta minutos. Traiga su categoría, sus cuentas si las tiene, y qué quiere mover. Si la respuesta acaba siendo la parte de comercio, le devuelven a nosotros y nadie pierde un mes en el relevo.',
    ctaPrimary: 'Hablar con TheRedScroll',
    ctaSecondary: 'Hablar mejor con nosotros',
  },
};

export default copy;
