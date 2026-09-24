/**
 * /es/compass/encontrar-distribuidor-en-china (español).
 * Consulta objetivo: «cómo encontrar un distribuidor en China».
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'distributor',
  locale: 'es',
  title: 'Cómo encontrar un distribuidor en China | TheChinaPath',
  description:
    'Dónde encuentran distribuidor en China las marcas extranjeras, ocho comprobaciones para separar al de verdad del simple intermediario y qué pactar antes de firmar.',
  crumb: 'Encontrar un distribuidor en China',
  reviewed: '24 de septiembre de 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'Encontrar un distribuidor',
    rows: [{ text: 'Cómo encontrar un' }, { text: 'distribuidor en China', style: 'highlight' }],
    lead: 'El distribuidor que conviene ya coloca productos como el suyo en las cadenas que usted tiene en el punto de mira, y puede demostrarlo con cifras. La dificultad está en distinguirlo de las decenas de empresas que solo aseguran serlo.',
    image: {
      src: '/Images/compass/channel-offline.webp',
      alt: 'Un comercial de un distribuidor y un comprador de supermercado, en cuclillas ante el lineal, revisan la colocación del producto',
    },
    stats: heroStats('años reuniéndonos con distribuidores en China'),
    primary: 'Pedir una lista corta de distribuidores',
    secondary: 'Ver cómo funciona Compass',
  },

  answer: {
    eyebrow: 'La respuesta corta',
    title: 'Elija al que ya vende su categoría',
    body: [
      'Para dar con un distribuidor en China, busque una empresa que ya venda su categoría en los canales que le interesan y verifíquela a continuación: revise su licencia de actividad, llame a dos de las marcas que distribuye, visite su almacén y pídale datos de sell-out. Es normal que la lista se acorte a cada paso.',
      'La afinidad con la categoría cuenta más que el tamaño. Un gran importador nacional, con un catálogo interminable, relegará su marca a una línea más de la tarifa. Un distribuidor regional que lleva seis años colocando cosmética importada en Watsons pondrá a un equipo comercial a trabajarla.',
      'Una precisión antes de empezar: en China, la palabra «distribuidor» engloba negocios muy distintos, y conviene saber cuál se busca.',
    ],
  },

  role: {
    eyebrow: 'A quién contrata',
    title: 'Bajo la etiqueta de distribuidor caben cuatro negocios',
    intro: 'Todos compran su mercancía. Ahí terminan los parecidos.',
    items: [
      {
        name: 'Importadores',
        body: 'Poseen las licencias de importación, despachan en aduana y colocan la etiqueta en chino en el envase. Algunos venden; muchos se limitan a mover cajas. Nada que objetar, siempre que se sepa desde el principio.',
      },
      {
        name: 'Distribuidores nacionales',
        body: 'Abarcan varias regiones y suelen contar con equipos de grandes cuentas que venden a cadenas como Sam’s Club u Ole’. Su alcance es real, pero su marca tendrá que disputarse la atención del equipo con todo lo demás que llevan.',
      },
      {
        name: 'Distribuidores regionales',
        body: 'Dominan una provincia o un puñado de ciudades y conocen por su nombre a compradores y mayoristas. Buena parte de lo que se vende como cobertura nacional es, en realidad, un mosaico de distribuidores de este tipo.',
      },
      {
        name: 'Distribuidores online',
        body: 'Compran mercancía para revenderla a la venta directa de JD, a Tmall Supermarket o a Hema, o en tiendas propias. Su negocio descansa en la relación con los compradores de las plataformas y en la rapidez de reposición.',
      },
    ],
  },

  routes: {
    eyebrow: 'Dónde buscan las marcas',
    title: 'Seis vías para encontrar candidatos, con sus puntos ciegos',
    intro: 'Las seis proporcionan nombres. Las hemos recorrido todas en algún momento, y no todas rinden igual.',
    table: {
      headers: ['Vía', 'Qué ofrece', 'Qué se le escapa'],
      rows: [
        [
          'Ferias comerciales',
          'Contacto directo con cientos de compradores en un par de días: la CIIE, en Shanghái cada noviembre; la China Food and Drinks Fair de primavera, en Chengdu, y la CBE, en Shanghái, para la belleza.',
          'En los estands atiende personal de desarrollo de negocio. Quienes venderían su marca se han quedado en la oficina.',
        ],
        [
          'Plataformas B2B (Alibaba.com, 1688)',
          'Miles de fichas que se pueden filtrar por categoría.',
          'Nacieron para comprar en China. La mayoría de los anunciantes son fábricas y comerciantes en busca de clientes extranjeros, justo lo contrario de lo que usted necesita.',
        ],
        [
          'Organismos de promoción comercial y cámaras',
          'Contactos contrastados y jornadas de encuentros empresariales, a menudo subvencionadas. Las organizan Business France, GTAI y las cámaras de comercio extranjeras en Shanghái.',
          'Las listas se inclinan hacia sus socios y antiguos participantes, y pocos acompañan a la marca más allá de la primera reunión.',
        ],
        [
          'Bases de datos rastreadas',
          'Una hoja de cálculo con mil nombres antes de la hora de comer.',
          'Ni rastro de las categorías que cada empresa vende de verdad, ni de si alguien sigue atendiendo el teléfono.',
        ],
        [
          'LinkedIn y correo en frío',
          'Acceso directo a personas con nombre y cargo.',
          'Los distribuidores chinos se mueven en WeChat. La tasa de respuesta es baja, y un sí inmediato de un desconocido merece una segunda mirada.',
        ],
        [
          'Recomendaciones de marcas y operadores',
          'La señal más fiable: alguien que ha visto trabajar al distribuidor.',
          'Difíciles de obtener en frío, porque se tejen con años de reuniones. Por eso pusimos las nuestras por escrito en Compass.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Antes de firmar',
    title: 'Ocho pruebas para distinguir a un distribuidor de un simple intermediario',
    intro: 'Las seis primeras se resuelven desde el despacho, antes de cualquier llamada. Las dos últimas exigen una reunión, a ser posible en sus oficinas. Si solo imprime una parte de esta página, que sea esta tabla.',
    table: {
      headers: ['Comprobación', 'Respuesta sólida', 'Señal de alarma'],
      rows: [
        [
          'Licencia de actividad',
          'Figura en el registro público de empresas (National Enterprise Credit Information Publicity System), con la importación o el comercio al por mayor de su categoría en su objeto social y varios años de trayectoria.',
          'Constituida el año pasado, con un capital social testimonial o un objeto social que abarca desde la electrónica hasta el vino.',
        ],
        [
          'Historial judicial y crediticio',
          'Sin incidencias en Qichacha o Tianyancha, las dos grandes aplicaciones de consulta mercantil, o con un puñado de litigios comerciales corrientes.',
          'Inscrita en la lista de deudores incumplidores (失信被执行人), o con una retahíla de demandas de proveedores por facturas impagadas.',
        ],
        [
          'Licencias sectoriales',
          'Los permisos que exige su categoría (una licencia de comercialización de alimentos, si vende alimentación) a su propio nombre.',
          '«Esa licencia la tiene un socio nuestro». Entonces su verdadero interlocutor es ese socio.',
        ],
        [
          'Cartera de marcas',
          'Las marcas que distribuye hoy, con contactos en dos de ellas a los que pueda llamar.',
          'Grandes logotipos en la presentación y nadie al otro lado del teléfono.',
        ],
        [
          'Presencia en tienda',
          'Grandes cuentas con nombre propio (las principales cadenas) y las tiendas en las que estaría su producto. Puede entrar en una y comprobarlo.',
          '«Cubrimos toda China». Nadie cubre toda China.',
        ],
        [
          'Presencia online',
          'Tiendas o fichas de proveedor en JD, Tmall o Douyin que usted mismo pueda localizar.',
          'Una web, una cuenta de WeChat y nada que venda de verdad.',
        ],
        [
          'Datos de sell-out',
          'Datos de escáner o de rotación (lo que de verdad salió de los lineales) de una marca comparable, aunque lleguen con el nombre tachado.',
          'Solo cifras de sell-in, es decir, lo que el distribuidor compró a las marcas. La mercancía que duerme en un almacén todavía no se ha vendido.',
        ],
        [
          'El equipo asignado a su marca',
          'Personas con nombre y apellidos, la ciudad donde trabaja cada una y qué parte de su semana dedicará a su marca.',
          'El fundador hace la presentación y el trabajo recae en un júnior al que nunca llegará a conocer.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'El acuerdo',
    title: 'Lo que debe quedar pactado antes de que zarpe el primer contenedor',
    intro: 'El distribuidor vive del margen: le compra a usted y revende a los minoristas con un sobreprecio. Su cuantía depende del canal y de quién asuma los cánones de referenciación, el marketing y el riesgo de impago, así que conviene comparar las ofertas por el precio al que su producto llega al lineal. Todo lo que rodea al margen se negocia, y casi todo termina en el contrato.',
    warnColumn: true,
    table: {
      headers: ['Condición', 'Qué pactar', 'Qué vigilar'],
      rows: [
        [
          'Exclusividad',
          'Por canal y por región, con un objetivo de ventas asociado a cada una.',
          'Exclusividad nacional en todos los canales desde el primer día. Se concede con facilidad y se recupera a duras penas.',
        ],
        [
          'Pedidos mínimos',
          'Un primer pedido acorde con un plan de lanzamiento real y, después, objetivos trimestrales.',
          'La ausencia de mínimos, que deja al distribuidor libre para aparcar su marca.',
        ],
        [
          'Cánones de referenciación (进场费)',
          'Quién paga los derechos de entrada y de exposición en lineal que cobran los minoristas, y cómo se recuperan.',
          'Facturas abiertas en concepto de «apoyo comercial» que llegan cuando el producto ya está en el lineal.',
        ],
        [
          'Aportación de marketing',
          'Un reparto del presupuesto, un plan trimestral y justificantes del gasto.',
          'Un distribuidor que pretende que usted lo pague todo sin comprometer volumen alguno.',
        ],
        [
          'Condiciones de pago',
          'Pago anticipado o carta de crédito en los primeros pedidos; crédito, cuando exista un historial.',
          'Plazos largos desde el primer día con una empresa a la que conoció en una feria.',
        ],
        [
          'Marca y registros',
          'La marca y los registros de producto, a su nombre. Registre la marca en China antes de la primera reunión: allí la protección es para quien la inscribe primero.',
          'Un distribuidor que se ofrece amablemente a registrarle la marca. Alguno lo hace a su propio nombre.',
        ],
        [
          'Salida',
          'Rescisión por incumplimiento de objetivos, recompra del stock y traspaso de las referencias.',
          'Ninguna cláusula de salida, o una que solo opera con el consentimiento del distribuidor.',
        ],
      ],
    },
    note: 'Negocie la salida mientras la relación es buena. Las marcas que firman sin objetivos ni cláusula de salida suelen dedicar el segundo año a negociar cómo marcharse, mientras otro ocupa su hueco en el lineal.',
    link: { label: '¿Distribuidor o tienda propia? Lea nuestra comparativa', href: '/insights/china-distributor-vs-own-store' },
  },

  mistakes: {
    eyebrow: 'Qué sale mal',
    title: 'Así suelen fracasar los acuerdos de distribución',
    intro: 'Casi todos los acuerdos que nos han pedido desenredar se rompieron por alguna de estas vías conocidas. Ninguna se vio venir en la primera reunión.',
    image: {
      src: '/Images/compass/problem-pallets.webp',
      alt: 'Palés de mercancía importada, retractilados y sin salida, en un almacén en penumbra',
    },
    items: [
      {
        name: 'Firmar con el más grande',
        body: 'El mayor importador de la feria maneja cientos de marcas. La suya queda reducida a una referencia perdida en el catálogo, y el equipo comercial empuja lo que mejor le pague ese trimestre.',
      },
      {
        name: 'Dejarse seducir por la presentación',
        body: 'Un dosier impecable, con todos los logotipos que había que enseñar. Después, dieciocho meses con la mercancía de la marca inmovilizada en su almacén, mientras se cerraba la ventana de lanzamiento.',
      },
      {
        name: 'Confiar la venta a un importador',
        body: 'Tenía almacén y un historial aduanero sin tacha. Le faltaba equipo comercial, así que la mercancía entró y allí se quedó.',
      },
    ],
  },

  compass: {
    eyebrow: 'Cómo lo hacemos',
    title: 'Seleccionamos entre distribuidores que conocemos en persona',
    lead: 'Compass es nuestra base privada de distribuidores, Tmall Partners, Douyin Partners e importadores de toda China. Conocemos en persona a cada una de esas empresas, las hemos verificado sobre el terreno y las clasificamos por las categorías que les hemos visto vender. Trabajamos ocho categorías de consumo: belleza, alimentación y bebidas, moda, hogar, bienestar, puericultura, mascotas y complementos alimenticios.',
    steps: compassSteps(
      'Buscamos en Compass los distribuidores que ya venden su categoría. Le presentamos de tres a cinco que merecen una reunión, cada uno con una nota breve sobre sus fortalezas y sus flaquezas, y le indicamos dónde apretar en la negociación.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Lo que preguntan las marcas',
    title: 'Distribuidores en China: preguntas frecuentes',
    items: [
      {
        q: '¿Cuánto se tarda en encontrar un distribuidor en China?',
        a: 'La búsqueda en sí puede ser rápida: una lista corta de Compass suele estar lista entre dos y tres semanas después del briefing. Las reuniones, las muestras, los registros y la negociación del contrato llevan más tiempo, y el ritmo lo marca la categoría: alimentación y cosmética exigen registros antes del primer envío.',
      },
      {
        q: '¿Conviene conceder la exclusividad a un distribuidor chino?',
        a: 'A veces, y con un perímetro estrecho. Vincule la exclusividad a un canal y a una región, con un objetivo de ventas, y resérvese el derecho a retirarla si no se alcanza.',
      },
      {
        q: '¿Necesito un distribuidor si vendo en cross-border?',
        a: 'No siempre. Una tienda transfronteriza en Tmall Global o JD Worldwide puede funcionar sin él, con un Tmall Partner al frente de la operativa. Muchas marcas arrancan en cross-border y suman un distribuidor al dar el salto al comercio general (importación ordinaria, con aranceles pagados) y a la tienda física.',
      },
      {
        q: '¿Se puede encontrar un distribuidor en Alibaba?',
        a: 'Empresas, desde luego, encontrará. Pero Alibaba.com y 1688 se crearon para comprar en China, de modo que la mayoría de los anunciantes son fábricas y comerciantes que buscan compradores en el extranjero.',
      },
      {
        q: '¿Qué margen se queda un distribuidor en China?',
        a: 'Depende del canal y del reparto de costes. Un distribuidor que asume también los cánones de referenciación, el marketing y el riesgo de impago pedirá más que otro que se limita a mover cajas. Compare las ofertas por el precio final en el lineal y por quién carga con cada coste por el camino.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Escríbanos',
    title: 'Háblenos de su categoría',
    lead: 'La primera llamada es breve. Al terminarla sabrá si tenemos en nuestra base al distribuidor que necesita. Si no es así, se lo diremos y, si conocemos a alguien que pueda ayudarle, le indicaremos a quién acudir.',
    primary: 'Pedir una lista corta de distribuidores',
    secondary: 'Ver cómo trabajamos',
  },
};

export default copy;
