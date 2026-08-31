/**
 * /build-in-china — copie française.
 *
 * Rédigée directement en français, registre Le Monde / Les Echos, et non
 * traduite depuis l'anglais. Les chiffres et le cadrage des cinq écarts sont
 * sourcés dans docs/restructure/content-sources.md, section 6.
 *
 * Conventions : espace fine insécable (U+202F) avant : ; ! ?, guillemets
 * français, aucun tiret cadratin.
 */
import type { BuildInChinaCopy } from './types';

const copy: BuildInChinaCopy = {
  meta: {
    title: 'Site web, WeChat et mini-programme en Chine | TheChinaPath',
    description:
      "Pourquoi votre site est lent ou introuvable en Chine : indexation Baidu, licence ICP, et l'arbitrage entre mini-programme WeChat et site mobile. Réalisation confiée à ChinaWebFoundry, notre équipe web à Shanghai.",
  },

  hero: {
    crumbHome: 'Accueil',
    crumbSection: 'Site et réseaux sociaux',
    eyebrow: 'Site et réseaux sociaux',
    titleBefore: 'Votre site fonctionne partout, ',
    titleEm: 'sauf',
    titleAfter: ' en Chine.',
    lead: "Huit secondes de chargement depuis Shanghai, quand la page s'affiche. Baidu ne l'a jamais indexé. Et quelqu'un, côté chinois, a commencé à parler de « mini-programme » en réunion.",
    bodyBefore:
      "Ce ne sont pas un mais cinq problèmes distincts, qui surviennent ensemble et appellent chacun une réponse différente. Cette page dit lesquels. La réalisation, elle, revient à ",
    cwfAnchor: 'ChinaWebFoundry, notre équipe web à Shanghai',
    bodyAfter: '.',
    ctaPrimary: 'Parler à ChinaWebFoundry',
    ctaSecondary: 'Mini-programme ou site ?',
    shotAria: 'Ouvrir chinawebfoundry.com',
    shotCta: 'Ouvrir le site',
    shotAlt:
      "Page d'accueil de ChinaWebFoundry, agence web shanghaienne : statut de licence ICP, position Baidu et temps de chargement de 1,2 seconde",
    scrollAria: 'Faire défiler vers les cinq écarts',
    scrollLabel: 'Défiler',
  },

  gapsSection: {
    eyebrow: 'Le vrai problème',
    title: "Cinq écarts s'ouvrent en même temps.",
    lead: "La plupart des marques étrangères abordent la Chine en traduisant leur site mondial. Six mois plus tard, le pipeline commercial reste vide. Les voici, à peu près dans l'ordre où ils coûtent cher.",
    hint: 'Ouvrez un écart pour le lire.',
    figureAlt:
      "Un responsable marketing à son bureau à Shanghai, en fin de journée, devant une page qui refuse de se charger",
    figureCaption: 'Six mois de présence, et toujours aucun contact entrant.',
  },

  gaps: [
    {
      id: 'content',
      icon: 'content',
      tag: 'Contenu',
      title: 'Votre contenu ne convainc pas',
      body: "L'acheteur chinois cherche des preuves que les équipes étrangères reléguent en bas de page : la crédibilité du fondateur, les certifications, les logos partenaires, les récompenses. Un rédacteur natif les remet là où un lecteur chinois va les chercher.",
    },
    {
      id: 'ux',
      icon: 'ux',
      tag: 'Ergonomie',
      title: 'Votre interface fait étrangère',
      body: "Mobile d'abord, le plus souvent dans le navigateur intégré de WeChat. Pages longues, denses, preuves de confiance dès le premier écran. Le minimalisme occidental y passe pour un site inachevé.",
    },
    {
      id: 'baidu',
      icon: 'baidu',
      tag: 'Baidu',
      title: 'Baidu ne vous voit pas',
      body: "Autres critères de classement, autres règles d'indexation. Baidu n'indexe pas correctement un site dépourvu de licence ICP et d'hébergement chinois. Les méthodes éprouvées sur Google ne se transposent pas.",
      cite: 'Baidu capte environ la moitié du marché chinois de la recherche. Google reste sous les 3 %. Source : Statcounter Global Stats, Chine, 2024.',
    },
    {
      id: 'ai',
      icon: 'ai',
      tag: 'Moteurs IA',
      title: "Les moteurs d'IA ont déjà remplacé la recherche pour beaucoup d'acheteurs",
      body: "Doubao, Kimi, DeepSeek et Wenxin, le moteur de Baidu, répondent aujourd'hui aux questions qui passaient hier par un champ de recherche. L'internaute clique rarement au-delà. Si vos pages ne sont pas structurées pour être citées par une IA, vous n'existez pas.",
    },
    {
      id: 'infra',
      icon: 'infra',
      tag: 'Infrastructure',
      title: "L'hébergement chinois n'est que le socle",
      body: "Chargements lents, extensions inopérantes, scripts qui échouent en silence derrière le Grand Pare-feu. Une fois le socle en place, c'est la résonance de la marque qui emporte la décision.",
    },
  ],

  icp: {
    eyebrow: "Ce que personne n'explique",
    title: 'La licence ICP, en clair.',
    lead: "Un numéro d'enregistrement délivré par le ministère chinois de l'Industrie et des Technologies de l'information, rattaché à un domaine et à un hébergeur continental. Plus proche d'une plaque d'immatriculation que d'un certificat. Sans lui, aucun serveur en Chine n'a le droit de diffuser votre domaine.",
    steps: [
      {
        step: 'Entité chinoise',
        detail: "La licence est détenue par une société de droit chinois, pas par l'agence.",
      },
      {
        step: 'Dépôt',
        detail: 'Déposé via votre hébergeur chinois, avec un domaine et une adresse réelle.',
      },
      {
        step: 'Instruction du MIIT',
        detail: "Plusieurs semaines d'attente. C'est ce délai qui commande le calendrier.",
      },
      {
        step: 'Numéro délivré',
        detail: "Votre 备案号 s'affiche en pied de page. L'hébergement est activé.",
      },
    ],
    figureAlt: "Un sceau d'entreprise gravé et son tampon rouge, posés près des pièces du dossier",
    figureCaption: "Le dossier tient en quelques papiers, et ces papiers commandent le calendrier.",
    unlockTitle: 'Ce que la licence ouvre',
    unlocks: [
      'Une indexation correcte par Baidu',
      'Un hébergement en Chine continentale',
      'Le rattachement à WeChat et aux mini-programmes',
      'Le paiement sur un domaine continental',
    ],
    trapTitle: 'Le piège',
    trapBody:
      "La licence est détenue par une société de droit chinois : savoir qui la détient compte donc bien plus qu'il n'y paraît. Laissez un prestataire la déposer en votre nom, et vous découvrirez peut-être, deux ans plus tard, que vous ne pouvez pas changer d'hébergeur sans son accord.",
    trapKicker:
      "Lancez la démarche avant la conception, pas après. L'attente se déroule très bien en parallèle.",
  },

  choose: {
    figureAlt:
      "Vitrine d'un mini-programme WeChat en chinois : bouton capsule, bannière promotionnelle, raccourcis de catégories, fiches produits en yuans et barre d'onglets en bas d'écran",
    figureCaption:
      "Ce que voit vraiment un acheteur : tout se passe dans WeChat, sans téléchargement ni compte à créer, le bouton capsule calé en haut à droite, là où votre interface ne peut pas le recouvrir.",
    eyebrow: 'La deuxième question de tout le monde',
    title: 'Mini-programme WeChat ou site mobile ?',
    lead: "Deux problèmes différents, et le mauvais choix se paie discrètement. Beaucoup de marques finissent par avoir les deux. Presque aucune n'a besoin des deux au départ. Quatre questions suffisent le plus souvent à trancher.",
    questions: [
      {
        q: 'Le paiement doit-il se conclure dans WeChat, sans redirection ?',
        yes: 'mp',
        hint: 'WeChat Pay en session',
      },
      {
        q: "Avez-vous besoin d'être trouvé sur Baidu ou par les moteurs d'IA ?",
        yes: 'site',
        hint: 'Visibilité en recherche',
      },
      {
        q: "L'acheteur revient-il, et la fidélité ou la cagnotte comptent-elles ?",
        yes: 'mp',
        hint: 'Réachat et fidélité',
      },
      {
        q: "Quelqu'un sur place publiera-t-il du contenu presque chaque semaine ?",
        yes: 'site',
        hint: 'Rythme éditorial',
      },
    ],
    yes: 'Oui',
    no: 'Non',
    reset: 'Réinitialiser les réponses',
    verdictEyebrow: 'État des réponses',
    verdictEmptyTitle: 'Répondez aux quatre',
    verdictEmptyBody:
      'Rien de comptabilisé pour le moment. Répondez aux questions, la recommandation se précise au fur et à mesure.',
    verdictMp: 'Mini-programme WeChat',
    verdictMpBody:
      "Le paiement et le réachat pèsent le plus dans vos réponses. Construisez d'abord dans WeChat, et gardez le site mobile pour la seconde phase.",
    verdictSite: 'Site mobile',
    verdictSiteBody:
      "Vous avez besoin d'être trouvé et vous avez de quoi publier. Commencez par le site, et lancez la licence ICP dès maintenant : le délai commande tout le reste.",
    verdictEven: "Commencez par le site",
    verdictEvenBody:
      "Les réponses s'équilibrent, ce qui plaide en général pour le site. C'est celui que vous pouvez mesurer, et lui ajouter un mini-programme reste un chantier plus léger que l'inverse.",
    verdictPartial: 'Tendance',
    verdictPartialBody: 'Continuez. Encore deux réponses et la question se tranche.',
    meterLeft: 'Mini-programme',
    meterRight: 'Site mobile',
    rule: "Règle empirique : si l'acheteur cherche, construisez le site. S'il vous suit déjà, construisez le mini-programme. Si vous hésitez, prenez le site : c'est celui que vous pouvez mesurer.",
    surfaces: [
      {
        key: 'mp',
        name: 'Mini-programme WeChat',
        cn: '小程序',
        blurb: 'Vit dans WeChat. Quasiment invisible en dehors.',
        right: [
          'La vente doit se conclure avec WeChat Pay',
          'Fidélité, statuts et cagnotte font partie du modèle',
          'Les acheteurs arrivent des groupes, des notifications et des QR codes en boutique',
          'Le parcours est transactionnel et les clients reviennent',
        ],
        wrong: [
          'Votre priorité est surtout de vous faire trouver',
          "Personne dans l'équipe ne pourra alimenter une seconde interface",
        ],
      },
      {
        key: 'site',
        name: 'Site mobile',
        cn: '移动站',
        blurb:
          "Se trouve, se partage et s'indexe. Ne peut pas encaisser seul un paiement WeChat.",
        right: [
          "La visibilité en recherche est l'objectif, sur Baidu comme dans les moteurs d'IA",
          'Le contenu bouge souvent et un marketeur local doit pouvoir le publier',
          'Vous voulez une adresse partageable partout, pas seulement dans WeChat',
          "La décision d'achat est longue et repose sur la documentation",
        ],
        wrong: [
          'Le paiement doit se conclure dans WeChat, sans redirection',
          'Toute votre audience tient déjà dans un seul compte officiel',
        ],
      },
    ],
    rightWhen: 'Le bon choix quand',
    wrongWhen: 'Le mauvais choix quand',
  },

  proof: {
    eyebrow: 'Ce qui change',
    title: 'Une fois le socle en place, les chiffres bougent vite.',
    loadLabel: 'Temps de chargement médian des sites mis en ligne, mesuré depuis Shanghai.',
    bounceLabel:
      'Taux de rebond médian avant et après, sites de marques étrangères en Chine, sur les 90 premiers jours.',
    source:
      "Mesuré par ChinaWebFoundry sur l'ensemble des sites clients mis en ligne. Le taux de rebond compare les mêmes marques avant et après.",
  },

  door: {
    eyebrow: 'Qui le construit',
    title: 'Nous ne faisons pas de sites. Nos voisins de bureau, si.',
    bodyOneBefore: '',
    cwfAnchor: 'ChinaWebFoundry',
    bodyOneAfter:
      " occupe les mêmes locaux que l'équipe qui pilote votre boutique Tmall et votre recherche de distributeur. Même groupe, même immeuble, même réunion hebdomadaire. Cela compte, parce que les projets chinois échouent le plus souvent au passage de relais entre ceux qui connaissent le canal et ceux qui écrivent le code.",
    bodyTwo:
      "L'étape suivante est un China Site Scan. Ils font tourner votre domaine depuis la Chine continentale et vous renvoient ce qui se passe réellement : le temps de chargement depuis Shanghai, ce que Baidu a indexé, les scripts qui échouent derrière le Grand Pare-feu. C'est gratuit et cela prend quelques jours.",
    ctaPrimary: 'Parler à ChinaWebFoundry',
    ctaSecondary: 'Nous parler plutôt à nous',
    scanAria: 'Exemple de diagnostic de site',
    scanTitle: 'China Site Scan',
    scanLive: 'en cours',
    scanRows: [
      {
        label: 'Temps de chargement, mesuré depuis Shanghai',
        to: 8.4,
        decimals: 1,
        suffix: 's',
        note: 'objectif : moins de 2,5 s',
        pct: 94,
        tone: 'bad',
      },
      {
        label: 'Pages indexées par Baidu',
        to: 0,
        decimals: 0,
        suffix: '',
        note: 'aucune licence ICP enregistrée',
        pct: 100,
        tone: 'bad',
      },
      {
        label: 'Scripts bloqués derrière le Grand Pare-feu',
        to: 6,
        decimals: 0,
        suffix: '',
        note: 'polices, cartes, tag manager',
        pct: 64,
        tone: 'warn',
      },
    ],
    scanAiLabel: "Lisible par les moteurs d'IA chinois",
    scanAiValue: 'Non',
    scanAiNote: 'Doubao, Kimi, DeepSeek',
    scanFoot:
      'Diagnostic réel, anonymisé. Quatre marques sur cinq échouent sur au moins trois lignes.',
  },
};

export default copy;
