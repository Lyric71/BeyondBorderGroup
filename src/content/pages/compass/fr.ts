/**
 * Version française de /compass et de ses quatre sous-pages.
 *
 * ` ` est l'espace fine insécable exigée par la typographie française
 * avant `? ! : ;`. Elle est écrite en séquence d'échappement pour rester
 * visible à la relecture et survivre aux outils de formatage.
 */
import type { CompassCopy } from './types';

const copy: CompassCopy = {
  facts: {
    headline: 'Un fichier de contacts dit qui existe. Nous disons qui vous convient.',
    problemBody: [
      'Tapez « base de données distributeurs Chine » dans un moteur de recherche : vous récupérez des listes aspirées sur le web, avec un formulaire de contact posé dessus. Mille noms avant midi, presque aucun qui corresponde à votre marque.',
      'Nous avons vu des marques signer avec un nom tiré tel quel de ces listes. Quatre mois plus tard, elles découvrent que le partenaire n’a jamais vraiment opéré leur catégorie. Ou que l’entrepôt visité avait été loué pour la matinée.',
      'Les dégâts débordent presque toujours de l’exercice en cours. Un référencement perdu. Une reconstruction de marque que personne n’avait budgétée. Une fenêtre de lancement qui ne se rouvrira pas.',
    ],
    yearsLabel: 'Ans de terrain',
    comparison: {
      eyebrow: 'Ce qui nous distingue',
      title: 'Une base de données, pas un annuaire de plus',
      axisHeader: 'Critère de comparaison',
      columnHeaders: { scraped: 'Annuaires aspirés', ours: 'Compass' },
      rows: [
        {
          label: 'Comment les noms entrent',
          scraped: 'Imports en masse, aspirés de sources publiques',
          ours: 'Un rendez-vous après l’autre',
        },
        {
          label: 'Ce que l’on sait vraiment d’eux',
          scraped: 'Une raison sociale. Parfois un e-mail.',
          ours: 'Catégories réelles, volumes réels, conditions de paiement et adéquation avec votre marque',
        },
        { label: 'Années de construction', scraped: 'Quelques mois', ours: 'Quinze' },
        {
          label: 'Ce que vous en retirez',
          scraped: 'Une liste de peut-être',
          ours: 'Une liste courte de partenaires à rencontrer',
        },
      ],
    },
    steps: {
      eyebrow: 'Notre méthode',
      title: 'Vous nous briefez. Nous revenons avec la liste courte.',
      quote:
        'Trouver le bon partenaire en Chine engloutit en général un trimestre. Nous commençons par la réponse.',
      items: [
        {
          label: 'Le brief',
          body: 'Trente minutes à une heure, au téléphone. Votre catégorie, votre stade d’avancement et ce que vous cherchez vraiment à réussir en Chine. Un test en cross-border. Un lancement en marché domestique. Le remplacement discret d’un distributeur qui ne décroche plus. Parfois un cas que nous n’avions jamais vu, et c’est très bien ainsi.',
        },
        {
          label: 'La liste courte',
          body: 'Nous revenons avec une cartographie des acteurs qui opèrent réellement sur votre segment, et trois à cinq partenaires à rencontrer. Chacun avec une note : points forts, points faibles, et les endroits où appuyer au moment de négocier.',
        },
        {
          label: 'Les mises en relation',
          body: 'La plupart de ces partenaires nous connaissent déjà. Vous arrivez avec une relation derrière vous, ce qui met en général l’équipe senior dans la salle plutôt que l’équipe commerciale.',
        },
      ],
    },
    categories: [
      'Beauté',
      'Alimentaire et boissons',
      'Mode',
      'Maison',
      'Bien-être',
      'Puériculture',
      'Animalerie',
      'Compléments alimentaires',
    ],
    categoriesClosing: 'Surtout du B2C, et du B2B quand l’acheteur est en Chine.',
    partnerTypes: [
      {
        name: 'Distributeurs',
        body: 'Acteurs nationaux et régionaux, en commerce général, en zone sous douane et en e-commerce transfrontalier.',
      },
      {
        name: 'TP',
        body: 'Tmall Partners et Douyin Partners qui opèrent boutiques officielles, commerce de contenu et live.',
      },
      {
        name: 'Importateurs',
        body: 'Licences, dédouanement et entreposage, pour le commerce général comme pour la zone franche.',
      },
      {
        name: 'Opérateurs offline',
        body: 'Acheteurs grands comptes, grossistes régionaux et opérateurs d’achat groupé qui ont un vrai accès au linéaire.',
      },
    ],
    profileFields: [
      {
        name: 'Fiche d’identité',
        body: 'Entité juridique, siège, effectifs, actionnariat.',
      },
      {
        name: 'Catégories réelles',
        body: 'Pas celles affichées sur leur site. Celles que nous les avons vus opérer.',
      },
      {
        name: 'Canaux à volume réel',
        body: 'Tmall, JD, Douyin, Pinduoduo, Xiaohongshu, offline, cross-border. Lesquels comptent vraiment, et lesquels ils effleurent.',
      },
      {
        name: 'Implantation',
        body: 'Villes, provinces, entrepôts, et là où l’équipe commerciale travaille réellement.',
      },
      {
        name: 'Conditions commerciales',
        body: 'Marge, exclusivité, délais de paiement, quantités minimales, participation marketing.',
      },
      {
        name: 'Capacité opérationnelle',
        body: 'Volumes qu’ils absorbent réellement. Délais. Service client. Retours.',
      },
      {
        name: 'Marques déjà accompagnées',
        body: 'Passées et actuelles, partout où nous avons une visibilité directe.',
      },
      {
        name: 'Signaux de réputation',
        body: 'Ce que les autres marques en disent, officiellement et en coulisses. Là où ils ont réussi, là où ils ont déçu.',
      },
      {
        name: 'Notre avis',
        body: 'Recommandé, recommandé sous réserve, à éviter, ou à retenir seulement si.',
      },
    ],
    decidingQuestions: [
      'Cross-border ou marché domestique ?',
      'Tmall, JD, Douyin ou retail physique ?',
      'Quelles catégories opèrent-ils vraiment, par rapport à celles listées sur leur site ?',
      'Accepteront-ils une exclusivité ?',
      'Comment paient-ils, et à quelle vitesse ?',
      'Les avons-nous vus réussir avec une marque comme la vôtre, ou échouer avec une marque comparable ?',
    ],
    failureStories: [
      {
        kind: 'Le distributeur',
        story:
          'Impeccable sur le papier. Une présentation parfaite. Puis dix-huit mois d’immobilisme sur le stock, pendant que la marque laissait filer sa fenêtre de lancement.',
      },
      {
        kind: 'Le TP',
        story:
          'Des opérations dignes d’une boutique officielle, promis. Ils n’avaient jamais opéré la catégorie. Nous l’avons compris au quatrième mois, quand les fiches produits étaient déjà grillées.',
      },
      {
        kind: 'L’importateur',
        story:
          'Entrepôt, transport, douane, tout était carré. Aucune capacité réelle à vendre quoi que ce soit à qui que ce soit. Les palettes sont entrées. Les palettes sont restées.',
      },
    ],
    noCommission: 'Aucune commission des distributeurs. Jamais.',
  },

  index: {
    title: 'Compass : la base de partenaires chinois vérifiés | TheChinaPath',
    description:
      'Compass est notre base privée de distributeurs, Tmall Partners, Douyin Partners et importateurs chinois vérifiés. C’est ainsi que nous bâtissons votre liste courte, en semaines plutôt qu’en trimestres.',
    eyebrow: 'Trouver un partenaire',
    h1: 'Économisez 12 mois de recherche de partenaire.',
    lead: 'Compass est notre base privée de distributeurs, Tmall Partners, Douyin Partners et importateurs. Nous les avons tous rencontrés, vérifiés sur site et, très souvent, nous avons travaillé à leurs côtés sur des projets de marque.',
    body: 'Le mauvais partenaire en Chine coûte deux ans. Certaines marques ne s’en remettent jamais vraiment. C’est cette étape que nous vous évitons.',
    ctaPrimary: 'Obtenir votre liste courte',
    ctaSecondary: 'Voir comment nous la bâtissons',
    heroAlt:
      'Deux responsables traversent un entrepôt de distribution de produits de grande consommation à Shanghai, en pleine discussion',
    heroChip: 'Rencontrés en personne. Vérifiés sur site.',
    h1Rows: [
      { text: 'Économisez 12 mois' },
      { text: 'de recherche de partenaire.', style: 'highlight' },
    ],
    heroStats: [
      { value: '15', counter: 15, label: 'ans de terrain en Chine' },
      { value: 'Trois à cinq', label: 'partenaires par liste courte' },
      { value: 'Deux à trois', label: 'semaines pour la liste' },
    ],
    crumbHome: 'Accueil',
    crumbSection: 'Trouver un partenaire',
    scrollCue: 'Défiler',
    problemEyebrow: 'Le problème',
    problemFigureAlt:
      'Palettes de stock invendu sous film plastique, dans un entrepôt mal éclairé',
    problemCaption: 'Les palettes sont entrées. Les palettes sont restées.',
    stepAlts: [
      'Une responsable de marque prend des notes à la main pendant un brief en visioconférence',
      'Un consultant trace un itinéraire sur une carte de Chine, à côté de fiches partenaires imprimées',
      'Une responsable de marque serre la main d’un dirigeant de la distribution dans une salle de réunion à Shanghai',
    ],
    coverageEyebrow: 'Le périmètre',
    coverageTitle: 'Les catégories grand public, en domestique comme en cross-border.',
    coverageLead:
      'Distributeurs, Tmall Partners, Douyin Partners, importateurs et spécialistes de canal dans toute la Chine. En ligne et en physique, à l’échelle nationale comme régionale, avec des spécialistes de niche. Un nom n’entre que si nous avons une vraie raison de le connaître.',
    whoLabel: 'Qui figure dans la base',
    categoriesLabel: 'Catégories',
    closingEyebrow: 'Nous écrire',
    closingTitle: 'Sans engagement. Sans discours.',
    closingLead:
      'Vous entrez en Chine ? Vous remplacez un partenaire qui ne tire plus son poids ? Vous cherchez encore la bonne forme de distribution pour votre catégorie ? Le premier échange est court. La plupart de nos interlocuteurs savent en une demi-heure si c’est le bon type d’aide pour eux. Sinon, nous savons en général vers qui les orienter.',
    closingCtaPrimary: 'Nous briefer sur votre catégorie',
    closingCtaSecondary: 'Voir l’offre distribution',
    toolsLine: {
      before: 'Le budget plateforme n’est pas encore arrêté ? Nos ',
      link: 'calculateurs de budget gratuits',
      after: ' chiffrent la première année sur Tmall Global, JD Worldwide et Douyin, avant même le premier brief.',
    },
  },

  shortlist: {
    title: 'Obtenir votre liste de partenaires chinois | Compass | TheChinaPath',
    description:
      'Briefez-nous sur votre catégorie et votre stade d’avancement. Nous revenons avec une liste courte de distributeurs et de partenaires plateformes chinois à rencontrer, en général sous deux à trois semaines.',
    eyebrow: 'Votre liste courte',
    h1: 'Parlez-nous un peu de votre marque.',
    lead: 'Quelques questions rapides pour lancer la conversation. Le premier échange est court et sans engagement de part et d’autre. Un associé vous répondra sous un jour ouvré, pas un message type envoyé par un robot de qualification.',
    formTitle: 'Votre brief',
    fields: {
      name: 'Votre nom',
      email: 'E-mail professionnel',
      company: 'Société',
      website: 'Site web',
      category: 'Catégorie',
      categoryPlaceholder: 'Choisissez une catégorie',
      categoryOther: 'Autre',
      stage: 'Où vous en êtes aujourd’hui',
      message: 'Que cherchez-vous à résoudre ?',
      messagePlaceholder:
        'Le canal que vous visez, le calendrier auquel vous travaillez, et ce qui a déjà été tenté.',
      captchaBefore: 'Une vérification rapide pour écarter les robots : combien font ',
      captchaAfter: ' ?',
      honeypot: 'Laissez ce champ vide',
    },
    stages: [
      'Pas encore en Chine, nous cherchons le bon modèle',
      'Nous entrons maintenant, il nous faut un premier partenaire',
      'Nous vendons déjà, nous remplaçons un partenaire',
      'Nous vendons déjà, nous ajoutons un canal ou une région',
    ],
    submit: 'Envoyer le brief',
    submitting: 'Envoi en cours…',
    consent:
      'En envoyant ce formulaire, vous nous autorisez à revenir vers vous au sujet de votre demande. Vos coordonnées restent strictement au sein de notre équipe.',
    asideEyebrow: 'La suite',
    asideTitle: 'Trois étapes, deux à trois semaines.',
    errors: {
      captcha: 'Le résultat n’est pas le bon. Les chiffres viennent d’être renouvelés, réessayez.',
      required:
        'Merci de renseigner vos nom, e-mail, société, catégorie et stade d’avancement.',
      message: 'Dites-nous en une ligne ou deux ce que vous cherchez à résoudre.',
      network:
        'Le brief n’est pas parti. Réessayez dans un instant. Si le problème persiste, écrivez-nous directement à hello@thechinapath.com.',
    },
    success: 'Brief bien reçu. Nous revenons vers vous rapidement. Redirection…',
  },
};

export default copy;
