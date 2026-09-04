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
    signInPrompt: { before: 'Déjà partenaire Compass ? Connectez-vous sur ', after: '.' },
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
    readMoreEyebrow: 'Pour aller plus loin',
    readMoreTitle: 'La réponse longue, en trois volets.',
    readMoreCta: 'Lire',
    cards: [
      {
        title: 'Pourquoi une base vérifiée',
        body: 'Ce que contient la base, et ce que coûte vraiment à une marque le choix du mauvais partenaire.',
      },
      {
        title: 'Ce qu’on y trouve',
        body: 'Qui figure dans la base, ce que nous notons sur chacun, et pourquoi nous n’en vendons pas l’accès.',
      },
      {
        title: 'Comment nous bâtissons la liste',
        body: 'Du premier brief à la mise en relation, en semaines plutôt qu’en mois.',
      },
    ],
    cardAlts: [
      'Rendez-vous de présentation avec un distributeur, vu depuis l’autre bout de la table',
      'Fiches partenaires relues sur un bureau',
      'Deux collègues traversent un site de distribution',
    ],
    closingEyebrow: 'Nous écrire',
    closingTitle: 'Sans engagement. Sans discours.',
    closingLead:
      'Vous entrez en Chine ? Vous remplacez un partenaire qui ne tire plus son poids ? Vous cherchez encore la bonne forme de distribution pour votre catégorie ? Le premier échange est court. La plupart de nos interlocuteurs savent en une demi-heure si c’est le bon type d’aide pour eux. Sinon, nous savons en général vers qui les orienter.',
    closingCtaPrimary: 'Nous briefer sur votre catégorie',
    closingCtaSecondary: 'Voir l’offre distribution',
    toolsLine: {
      before: 'Le budget plateforme n’est pas encore arrêté ? Nos ',
      link: 'calculateurs de coûts gratuits',
      after: ' chiffrent la première année sur Tmall Global, JD Worldwide et Douyin, avant même le premier brief.',
    },
  },

  whyVetted: {
    title: 'Pourquoi une base de distributeurs chinois vérifiée | Compass | TheChinaPath',
    description:
      'La plupart des bases de distributeurs chinois sont des listes aspirées. Compass s’est construite un rendez-vous après l’autre, sur quinze ans, par l’équipe qui place les marques grand public dans la distribution chinoise.',
    eyebrow: 'Une base vérifiée',
    h1: 'La plupart des « bases de distributeurs chinois » sont des listes aspirées. Pas celle-ci.',
    lead: 'Compass s’est construite un rendez-vous après l’autre, par une équipe qui place depuis quinze ans des marques grand public dans les circuits de distribution et d’e-commerce chinois. Chaque nom de la liste a été vérifié en personne, visité sur site, ou éprouvé directement sur une mission de marque.',
    body: 'C’est toute la différence entre savoir qu’un partenaire existe et savoir s’il correspond à votre marque.',
    ctaPrimary: 'Parlons de votre liste courte',
    ctaSecondary: 'Voir ce qu’on y trouve',
    questionEyebrow: 'Le problème que nous croisions sans cesse',
    questionTitle: 'Toute marque qui entre en Chine pose la même question.',
    questionPull: 'Avec qui vendons-nous ?',
    questionBody:
      'Distributeurs, TP, importateurs, opérateurs cross-border, spécialistes de catégorie. La liste est longue, les noms tournent vite, et vus de l’extérieur ils se ressemblent tous. Une présentation reste une présentation. Chacun a sa photo d’entrepôt, son mur de logos clients et un directeur de clientèle très sûr de lui.',
    storiesEyebrow: 'Trois manières de se tromper',
    storiesTitle: 'Nous avons vu chacune de ces situations plus d’une fois.',
    figureAlt:
      'Un auditeur en visite et un responsable des opérations sur un quai de chargement, face à des palettes empilées',
    figureCaption:
      'Chaque nom de la base a commencé par une visite comme celle-ci. C’est la partie lente, et c’est elle qui donne sa valeur à la liste.',
    storiesCost:
      'Les dégâts s’arrêtent rarement à une mauvaise année. Linéaire perdu. Fiches produits grillées. Une entrée en Chine à reprendre de zéro.',
    buildingEyebrow: 'Ce que nous construisons',
    buildingTitle: 'Quinze ans de rendez-vous, consignés.',
    buildingBody: [
      'La base n’était pas un projet. C’était un sous-produit. Notre équipe dirigeante travaille depuis quinze ans sur la distribution et l’e-commerce en Chine, et ce travail a fini par générer ce que personne n’avait budgété : énormément de données.',
      'Chaque distributeur vérifié. Chaque TP briefé. Chaque entrepôt visité. Nous avons noté ce qu’ils font réellement, pas ce que leur présentation affirme. Les vraies catégories. Les vrais volumes. La réputation qu’ils traînent auprès des marques déjà accompagnées. Ceux que nous recommandons sans hésiter, et ceux dont nous éloignons discrètement un client.',
      'Après quelques années de tableurs et de documents partagés, l’ensemble est devenu Compass.',
    ],
    questionsEyebrow: 'Pourquoi une base',
    questionsTitle: 'Un annuaire liste des noms. Une base répond aux questions.',
    questionsLead:
      'Voici les questions qui décident réellement d’un partenariat. Aucune ne trouve sa réponse sur un site d’entreprise.',
    questionsCost:
      'La base ne décide pas à votre place. Elle raccourcit la liste et garantit que les noms qui y restent méritent votre temps.',
    nextCtaPrimary: 'Parlons de votre liste courte',
    nextCtaSecondary: 'Ensuite : ce qu’on y trouve',
  },

  whatIsInside: {
    title: 'Ce qu’on trouve dans Compass | TheChinaPath',
    description:
      'Des fiches de distributeurs chinois, Tmall Partners, Douyin Partners, importateurs et spécialistes de canal, tous vérifiés. Catégories réelles, volumes réels, conditions commerciales réelles, et notre avis sur chacun.',
    eyebrow: 'Ce qu’on y trouve',
    h1: 'Pas des noms et des adresses e-mail.',
    lead: 'Distributeurs, Tmall Partners, Douyin Partners, importateurs et spécialistes de canal dans toute la Chine. Chacun a une fiche structurée : les catégories qu’il opère vraiment, ses volumes, ses conditions commerciales, sa capacité opérationnelle, et l’avis de notre équipe sur l’opportunité de le recommander, et pour quel type de marque.',
    body: 'C’est ce niveau de détail qui décide de l’adéquation d’un partenaire. Et c’est exactement ce qui n’apparaît jamais dans une présentation commerciale.',
    ctaPrimary: 'Parlons de votre liste courte',
    ctaSecondary: 'Voir comment nous bâtissons la liste',
    whoEyebrow: 'Qui y figure',
    whoTitle: 'Distributeurs, TP, importateurs et spécialistes de canal dans toute la Chine.',
    whoLead:
      'Domestique et cross-border. En ligne et en physique. Avec des spécialistes de niche. Un nom n’entre que si nous avons une vraie raison de le connaître.',
    coverageLabel: 'Catégories couvertes',
    fieldsEyebrow: 'Ce que nous notons',
    fieldsTitle: 'Les champs qui décident de l’adéquation d’un partenariat.',
    fieldsLead:
      'Neuf groupes de champs composent chaque fiche. Ensemble, ils couvrent un terrain qu’une présentation commerciale aborde rarement. Le dernier est celui que les clients lisent en premier.',
    figureAlt:
      'Dossiers partenaires, fiches imprimées et carnet manuscrit étalés sur un bureau',
    figureCaption:
      'Notes de terrain, dossiers partenaires, comptes rendus de rendez-vous. L’archive de travail dont la base est née.',
    notProductEyebrow: 'Une question légitime',
    notProductTitle: 'Pourquoi nous n’en vendons pas l’accès.',
    notProductBody: [
      'On nous demande, à juste titre, s’il ne suffirait pas d’un identifiant pour consulter la base. La réponse est non, et la raison n’est pas commerciale. Une fiche est un jugement, et un jugement privé de son contexte vaut moins que pas d’information du tout. « Recommandé sous réserve » ne veut rien dire tant que personne ne vous précise quelles réserves, ni si elles concernent une marque comme la vôtre.',
      'Il y a aussi un problème de péremption. Une fiche rédigée il y a dix-huit mois peut déjà être fausse. Les partenaires perdent des comptes, changent de catégorie, se font racheter, perdent la personne qui faisait leur valeur. Bâtir une liste courte, c’est moitié recherche, moitié revérification. Et c’est la revérification qu’un abonnement ne fera jamais à votre place.',
    ],
    notProductClosing: {
      before:
        'Compass n’est donc pas un produit à paliers. C’est l’outil de travail de notre équipe quand vous nous briefez, et ce que vous recevez est le résultat de ce travail : une liste courte de partenaires, un avis écrit sur chacun, et une conversation pour expliquer pourquoi. Les partenaires qui disposent déjà d’un compte se connectent sur ',
      after: '.',
    },
    nextCtaPrimary: 'Nous briefer sur votre catégorie',
    nextCtaSecondary: 'Ensuite : comment nous bâtissons la liste',
  },

  howItWorks: {
    title: 'Comment se bâtit une liste de partenaires chinois | Compass | TheChinaPath',
    description:
      'Vous nous briefez. Nous travaillons la base et revenons sous deux à trois semaines avec une liste courte de distributeurs et de partenaires plateformes chinois qui valent vraiment un rendez-vous.',
    eyebrow: 'Comment nous bâtissons la liste',
    h1: 'Un vrai point de départ, en semaines plutôt qu’en mois.',
    lead: 'Vous nous briefez. Nous travaillons la base et revenons rapidement avec une liste courte ou une liste longue de partenaires à rencontrer. Des noms qui correspondent à votre catégorie, à votre stade d’avancement et à ce que vous cherchez vraiment à faire en Chine.',
    body: 'Nous ne pouvons garantir la réussite d’aucun partenariat. Aucune recherche de partenaire ne le peut. Ce que nous garantissons, c’est un point de départ nettement plus solide que celui que la plupart des marques réunissent seules.',
    ctaPrimary: 'Réserver un échange de 30 minutes',
    ctaSecondary: 'Voir le déroulé',
    heroAlt:
      'Une responsable de marque et un consultant au coin d’une table encombrée dans un bureau de Shanghai, en train de parcourir une liste de partenaires imprimée',
    heroChip: 'Deux à trois semaines, du début à la fin',
    h1Rows: [
      { text: 'Un vrai point de départ,' },
      { text: 'en semaines plutôt qu’en mois.', style: 'highlight' },
    ],
    heroStats: [
      { value: '15', counter: 15, label: 'ans de terrain en Chine' },
      { value: 'Deux à trois', label: 'semaines, du début à la fin' },
      { value: 'Trois à cinq', label: 'noms, chacun documenté' },
    ],
    crumbHome: 'Accueil',
    crumbSection: 'Compass',
    scrollCue: 'Défiler',
    engagementEyebrow: 'Le déroulé de la mission',
    engagementTitle: 'Du premier échange à la liste courte.',
    engagementLead:
      'Trois étapes. Deux à trois semaines. Un document et une séance de travail à l’arrivée. Plus rapide quand le brief est serré, un peu plus long quand le périmètre est large.',
    phases: [
      {
        title: 'Le brief',
        body: 'Une visioconférence pour lancer la mission, trente minutes à une heure. Nous interrogeons votre catégorie, votre stade d’avancement, vos priorités de canal, votre calendrier et les contraintes avec lesquelles vous composez déjà.',
      },
      {
        title: 'La base',
        body: 'Nous sortons les noms qui correspondent au brief, puis nous confrontons chacun à la situation réelle du partenaire aujourd’hui. Une fiche rédigée il y a dix-huit mois peut déjà être périmée. Ici, les choses vont vite.',
      },
      {
        title: 'La restitution',
        body: 'Un document qui couvre la liste des partenaires, les fiches et notre avis sur chacun. Plus une séance de travail pour le parcourir ensemble, page après page.',
      },
    ],
    phaseWhen: ['Jour un', 'Semaines un et deux', 'Semaine trois'],
    phaseAlts: [
      'Un homme en visioconférence à son bureau, penché vers l’écran, qui prend des notes en même temps',
      'Une femme devant deux écrans confronte un tableur à des fiches de distributeurs imprimées',
      'Trois collègues au bout d’une table de réunion, l’un montre une ligne dans un document imprimé',
    ],
    optionsEyebrow: 'Liste courte, liste longue ou les deux',
    optionsTitle: 'Selon votre stade d’avancement.',
    options: [
      {
        label: 'Liste courte',
        tagline: 'Trois à cinq noms',
        body: 'Briefés en détail et prêts à rencontrer. Pour les marques qui avancent vite, avec une décision prévue dans le mois ou les deux mois.',
      },
      {
        label: 'Liste longue',
        tagline: 'Quinze à vingt noms',
        body: 'Une vue plus large sur les catégories, les canaux ou les régions, avec une comparaison structurée. Pour les marques encore en amont, qui cherchent la bonne forme de distribution.',
      },
    ],
    optionsNote: 'Quelques marques veulent les deux. C’est le brief qui tranche.',
    deliverablesEyebrow: 'Ce que vous recevez',
    deliverablesTitle:
      'Un document, une conversation, et des mises en relation si vous le souhaitez.',
    figureAlt:
      'Trois personnes au coin d’une table de réunion à Shanghai, en train de parcourir une liste de partenaires imprimée',
    figureCaption:
      'La séance de travail finale. La liste ne vaut pas grand-chose si vous ne faites pas confiance au raisonnement qui la sous-tend.',
    deliverables: [
      {
        name: 'Une fiche par partenaire',
        body: 'Catégories réelles, canaux, implantation, conditions commerciales, marques déjà accompagnées et notre avis sur chacun. De quoi entrer en rendez-vous en sachant exactement quoi demander et quoi surveiller.',
      },
      {
        name: 'Une séance de travail',
        body: 'Nous parcourons l’ensemble avec vous. Pourquoi ce nom. Pourquoi pas celui-là. Où appuyer en négociation. La liste ne vaut pas grand-chose si vous ne faites pas confiance au raisonnement qui la sous-tend.',
      },
      {
        name: 'Des mises en relation',
        body: 'Si vous les voulez, nous les faisons. La plupart de ces partenaires nous connaissent déjà : vous obtenez en général l’équipe senior dans la salle plutôt que l’équipe commerciale.',
      },
    ],
    introAlt:
      'Deux personnes se serrent la main dans le hall d’un immeuble de bureaux, une troisième se tient légèrement à l’écart et fait les présentations',
    limitsEyebrow: 'Ce que nous pouvons dire, et ce que nous ne pouvons pas',
    limitsTitle: 'Honnêtes sur les limites.',
    limitsBody: [
      'Ce que nous pouvons faire : vous dire qui vous correspond, à partir de ce que nous avons réellement vu et opéré nous-mêmes, et garantir que les noms de votre liste ont mérité leur place.',
      'Ce que nous ne pouvons pas : vous dire à quoi ressemblera le partenariat dans deux ans. Cela dépend de l’accord que vous négociez, de l’équipe qu’ils affectent à votre compte et de beaucoup d’autres choses qui se jouent après la signature.',
      'Cela mérite d’être dit quand même. La plupart des entrées en Chine qui déraillent déraillent au choix du partenaire, pas à l’exécution.',
    ],
    pricingEyebrow: 'Comment la mission est facturée',
    pricingTitle: 'Un projet, un honoraire.',
    pricingBody: [
      'Un projet unique, pas un abonnement. Le périmètre et l’honoraire sont arrêtés avant le démarrage, et l’honoraire est communiqué après le premier échange, une fois le brief clarifié. Trois formats : liste courte seule, liste longue seule, ou les deux avec une cartographie de marché.',
      'Le premier échange sert surtout à mesurer l’adéquation. À la fin, vous saurez si c’est le bon type d’aide pour vous, et nous saurons si nous pouvons vraiment changer quelque chose.',
    ],
    pricingCommissionTail:
      'Le distributeur ne nous verse aucune commission d’apport. C’est délibéré et c’est inscrit au contrat : une commission déplacerait notre intérêt vers la conclusion d’un accord plutôt que vers le bon partenaire.',
    timingEyebrow: 'Quand nous solliciter',
    timingTitle: 'Le plus tôt est le mieux.',
    timing: [
      {
        label: 'Avant le lancement',
        body: 'Avant toute signature. Le cas le plus propre. La base a toute la place pour prouver sa valeur.',
      },
      {
        label: 'Pour remplacer un partenaire',
        body: 'Un distributeur assis sur son stock. Un TP incapable de faire tourner la catégorie. Nous savons qui convient et qui ne convient pas.',
      },
      {
        label: 'Après une mauvaise signature',
        body: 'Certaines marques ne viennent que plus tard. Même travail de liste courte, urgence plus vive, marge de manœuvre bien plus faible.',
      },
    ],
    nextCtaPrimary: 'Réserver un échange de 30 minutes',
    nextCtaSecondary: 'Revenir à : ce qu’on y trouve',
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
