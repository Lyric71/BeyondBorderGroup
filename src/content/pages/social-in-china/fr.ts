/**
 * /social-in-china — copie française.
 *
 * Rédigée directement en français, registre Le Monde / Les Echos. Les résultats
 * clients viennent du dépôt TheRedScroll et sont sourcés dans
 * docs/restructure/content-sources.md, section 7.
 */
import type { SocialInChinaCopy } from './types';

const copy: SocialInChinaCopy = {
  meta: {
    title: 'Réseaux sociaux chinois : WeChat, RED, Douyin, Weibo | TheChinaPath',
    description:
      "À quoi sert vraiment chaque plateforme chinoise, où le social vend et où il ne fait que préparer le terrain, et qui doit piloter quelle moitié du travail.",
  },

  stages: ['Découverte', 'Recherche', 'Décision', 'Achat', 'Fidélité'],

  hero: {
    crumbHome: 'Accueil',
    crumbSection: 'Site et réseaux sociaux',
    eyebrow: 'Site et réseaux sociaux',
    titleBefore: 'En Chine, le social ',
    titleEm: 'est',
    titleAfter: ' le magasin.',
    lead: "On y cherche, on y lit les avis, on y règle le service client, et une part réelle des achats s'y conclut. Traiter ces comptes comme un calendrier de publication, c'est se tromper de marché.",
    bodyBefore:
      "Voici à quoi sert chaque plateforme, et qui doit piloter quelle moitié du travail. Le quotidien revient à ",
    trsAnchor: 'TheRedScroll, notre agence social',
    bodyAfter: '.',
    ctaPrimary: 'Parler à TheRedScroll',
    ctaSecondary: 'Qui fait quoi',
    shotAria: 'Ouvrir theredscroll.com',
    shotCta: 'Ouvrir le site',
    shotAlt:
      "Page d'accueil de TheRedScroll, agence social chinoise présente sur WeChat, RED, Douyin et Weibo",
    scrollAria: 'Faire défiler vers la carte des plateformes',
    scrollLabel: 'Défiler',
  },

  map: {
    eyebrow: 'La carte des plateformes',
    title: 'Quatre plateformes, quatre métiers différents.',
    lead: "L'erreur coûteuse consiste à diffuser un même message sur les quatre. Chacune tient un moment distinct du même parcours d'achat : un contenu qui fonctionne sur l'une sous-performe sur les autres, par construction.",
    tablistAria: 'Plateformes sociales chinoises',
    funnelTitle: 'Là où elle pèse le plus',
    ownerSplit: 'Surface partagée. La boutique nous revient, la communauté leur revient.',
    ownerTrs: 'Pilotée avec TheRedScroll.',
    ownerLink: 'Voir la frontière',
    tailTitle: "Et la longue traîne, plus longue que ne l'admettent la plupart des présentations.",
    tailBody:
      "Certaines catégories vivent presque entièrement là. L'électroménager sur Zhihu. Tout ce qui vise les étudiants sur Bilibili. À ignorer par défaut, mais à vérifier avant d'écrire le plan.",
  },

  platforms: [
    {
      key: 'wechat',
      name: 'WeChat',
      cn: '微信',
      logo: '/Images/platforms/wechat-logo.svg',
      role: 'Là où vous gardez le client',
      tint: '#07C160',
      body: "Personne ne parcourt WeChat à la recherche de marques. On y arrive par un QR code, une conversation de groupe, un proche. Ce que WeChat fait mieux que tout le reste, c'est entretenir la relation ensuite, et encaisser. Compte officiel, mini-programme, WeCom, Channels.",
      weights: [0, 1, 1, 2, 2],
      owner: 'Split',
      image: '/Images/social/wechat.png',
      alt: 'Une femme lit une conversation WeChat sur son téléphone dans un café de Shanghai',
    },
    {
      key: 'rednote',
      name: 'RedNote',
      cn: '小红书',
      logo: '/Images/platforms/rednote-logo.svg',
      role: "Là où l'achat se documente",
      tint: '#FF2442',
      body: "Xiaohongshu en Chine. Moitié moteur de recherche, moitié site d'avis. Une acheteuse qui a entendu parler de vous vient y vérifier si de vraies personnes ont aimé. La beauté, la mode, le bien-être et le voyage s'y jouent entièrement. Les usages de recherche y ressemblent à Google, et c'est pourquoi un contenu pensé pour Instagram tombe à plat.",
      weights: [2, 2, 2, 1, 0],
      owner: 'TheRedScroll',
      image: '/Images/social/rednote.png',
      alt: "Une acheteuse fait défiler un fil beauté sur RedNote, à côté de flacons de soin et de fleurs séchées",
    },
    {
      key: 'douyin',
      name: 'Douyin',
      cn: '抖音',
      logo: '/Images/platforms/douyin-logo.svg',
      role: "Là où la découverte devient une vente",
      tint: '#FE2C55',
      body: "Une boutique à laquelle on a greffé un fil vidéo. Le nombre d'abonnés compte bien moins que la boutique : une vidéo courte qui se termine sur une fiche produit, un livestream qui conclut dans la même session. L'algorithme donne une vraie audience à un compte tout neuf si le contenu la mérite.",
      weights: [2, 1, 1, 2, 1],
      owner: 'Split',
      image: '/Images/social/douyin.png',
      alt: "Une animatrice Douyin présente un soin devant la caméra, dans un studio éclairé par un anneau lumineux",
    },
    {
      key: 'weibo',
      name: 'Weibo',
      cn: '微博',
      logo: '/Images/platforms/weibo-logo.svg',
      role: "Là où l'actualité éclate et la réputation se joue",
      tint: '#E6162D',
      body: "Plus calme qu'autrefois, et toujours ce qui ressemble le plus à une place publique en Chine. Les partenariats avec des célébrités y font l'actualité. Les mots-dièse s'y achètent dans les classements de tendances. Un problème de marque y remonte en premier, ce qui explique que la plupart des marques y jouent la couverture réputationnelle plutôt que la croissance.",
      weights: [2, 1, 0, 0, 1],
      owner: 'TheRedScroll',
      image: '/Images/platforms/weibo.png',
      alt: "Un panneau de tendances Weibo éclaire les passants sur la Nanjing Road un soir de pluie",
    },
  ],

  longTail: [
    {
      name: 'Bilibili',
      cn: '哔哩哔哩',
      logo: '/Images/platforms/bilibili-logo.svg',
      who: 'Étudiants, jeu vidéo, formats longs',
    },
    {
      name: 'Kuaishou',
      cn: '快手',
      logo: '/Images/platforms/kuaishou-logo.svg',
      who: 'Villes de rang inférieur, livestream',
    },
    {
      name: 'Zhihu',
      cn: '知乎',
      logo: '/Images/platforms/zhihu-logo.svg',
      who: 'Achats très documentés, électroménager',
    },
    {
      name: 'Toutiao',
      cn: '今日头条',
      logo: '/Images/platforms/toutiao-logo.svg',
      who: "Fil d'actualité, lectorat plus âgé",
    },
    {
      name: 'Meituan',
      cn: '美团',
      logo: '/Images/platforms/meituan-logo.svg',
      who: 'Services de proximité, restauration, trafic en boutique',
    },
    {
      name: 'Pinduoduo',
      cn: '拼多多',
      logo: '/Images/platforms/pinduoduo-logo.svg',
      who: 'Volume tiré par le prix',
    },
  ],

  splitSection: {
    eyebrow: 'La version honnête',
    title: 'Là où le social vend, et là où il ne fait que préparer.',
    lead: "Deux sociétés d'un même groupe peuvent très vite répondre au même brief. Voici donc la frontière, écrite noir sur blanc, et elle vaut dans les deux sens.",
    testLabel: "Notre critère : sur quoi le travail est-il évalué ?",
    filterAria: 'Filtrer selon le critère qui évalue le travail',
    filterBoth: 'Les deux',
    filterGmv: 'Chiffre',
    filterAudience: 'Audience',
    note: "Là où la frontière devient floue, et elle le devient, le critère reste le chiffre de fin de mois. Si c'est du revenu, le travail nous revient. Si c'est de l'audience, il leur revient. Un livestream peut relever de l'un ou de l'autre selon la raison pour laquelle vous le lancez. L'ordre compte aussi : vendre à une audience qui n'existe pas encore reste la manière la plus courante de conclure que le social chinois ne marche pas.",
  },

  split: [
    {
      key: 'gmv',
      owner: 'Piloté par TheChinaPath',
      title: 'Le social qui se termine par une transaction',
      metric: 'Évalué au chiffre',
      items: [
        "Boutique Douyin : ouverture, catalogue, fiches produits et exploitation quotidienne",
        'Mini-boutique WeChat, encaissement et mécaniques de fidélité associées',
        'Livestream conçu pour conclure dans la session',
        'Campagnes de festivals adossées à une boutique : 618, Double 11, Nouvel An chinois',
        "Média payant acheté pour alimenter une boutique, jugé sur ce qu'a fait la boutique",
      ],
      why: "Des métiers de commerce en habits de social. Ils reviennent à l'équipe qui pilote déjà vos opérations Tmall et JD, parce que les stocks, les prix et le calendrier promotionnel sont là.",
    },
    {
      key: 'audience',
      owner: 'Piloté par TheRedScroll',
      title: 'Le social qui construit le terrain en dessous',
      metric: "Évalué à l'audience",
      items: [
        'Contenu quotidien sur tous les comptes, en chinois, par des rédacteurs chinois',
        "Animation de communauté, commentaires, messages privés, domaine privé dans les groupes WeChat",
        'Amorçage KOL et KOC, casting, briefs et relations associées',
        'Campagnes de marque jugées sur la portée, le sentiment et le volume de recherche',
        "Ouverture des comptes, certification, et le long travail de constitution d'une audience",
      ],
      why: "Une autre discipline, sur une autre horloge. Elle capitalise sur plusieurs trimestres et exige des rédacteurs natifs qui produisent chaque semaine. Elle échoue quand une équipe commerce la traite comme une tâche annexe.",
    },
  ],

  proof: {
    eyebrow: 'Ce que cela donne',
    title: "Une audience construite, puis les ventes qui ont suivi.",
    followersLabel: 'Abonnés Camper sur WeChat, RED et Weibo, en dix-huit mois.',
    sameStoreLabel: 'Ventes à périmètre comparable de Camper, en glissement annuel, sur la même période.',
    blueLabel: "Nouveaux abonnés le premier mois pour Blue Insurance, lancé sans aucune audience.",
    source:
      "Missions livrées par TheRedScroll. Les chiffres d'abonnés et de ventes à périmètre comparable de Camper couvrent les mêmes dix-huit mois, sur WeChat, RED et Weibo. Blue Insurance a lancé le premier assureur vie numérique de Hong Kong sans audience préexistante.",
  },

  door: {
    eyebrow: 'Qui le pilote',
    title: 'Périmètre fixe, prix fixe, une équipe déjà installée ici.',
    bodyOneBefore: '',
    trsAnchor: 'TheRedScroll',
    bodyOneAfter:
      " travaille comme les agences ont cessé de le faire. Les livrables sont au contrat, le prix mensuel aussi, et les deux sont arrêtés avant que quiconque commence. Pas de facturation à l'heure, pas de périmètre qui glisse en cours de trimestre.",
    bodyTwo:
      "L'étape suivante est un échange de trente minutes. Venez avec votre catégorie, vos comptes s'ils existent, et ce que vous cherchez à faire bouger. Si la réponse relève finalement du commerce, ils vous renvoient vers nous et personne ne perd un mois dans le passage de relais.",
    ctaPrimary: 'Parler à TheRedScroll',
    ctaSecondary: 'Nous parler plutôt à nous',
  },
};

export default copy;
