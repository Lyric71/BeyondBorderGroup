/**
 * Copie française de la page « Notre méthode ». Même structure que en.ts :
 * les hrefs restent les chemins anglais canoniques, le composant les localise.
 */
import type { HowWeWorkCopy } from './en';

const copy: HowWeWorkCopy = {
  meta: {
    title: 'Notre méthode : distribution e-commerce en Chine | TheChinaPath',
    description:
      'Distributeur e-commerce exclusif de votre marque en Chine, nous ouvrons vos boutiques à votre nom et pilotons TP, DP, plateformes et KOL. À la commission.',
    ogImageAlt:
      'La dirigeante d’une marque étrangère face à l’équipe d’un partenaire chinois, autour d’une table de réunion dans un bureau de Shanghai',
  },
  subnavLabel: 'Sur cette page',
  sections: [
    { id: 'why', label: 'Pourquoi' },
    { id: 'growth', label: 'La croissance' },
    { id: 'our-role', label: 'Notre rôle' },
    { id: 'who-does-what', label: 'Qui fait quoi' },
    { id: 'tp-or-dp', label: 'TP ou DP' },
    { id: 'the-right-partner', label: 'Qui opère vos boutiques' },
    { id: 'pitching', label: 'Avant de signer' },
    { id: 'the-steps', label: 'Les étapes' },
    { id: 'pricing-faq', label: 'Tarifs et FAQ' },
  ],
  hero: {
    kicker: 'Notre méthode',
    h1Before: 'Un seul partenaire pour votre e-commerce en Chine, ',
    h1Mark: 'rémunéré sur vos ventes',
    h1After: '.',
    lead: 'Nous devenons le distributeur exclusif de votre marque sur l’e-commerce chinois. Vous n’avez qu’un interlocuteur, nous. Tous les autres, c’est notre affaire : TP, DP, plateformes, KOL, entrepôt.',
    ctaPrimary: 'Parlons-en',
    ctaSecondary: 'Nos raisons',
    proof: [
      { count: 15, suffix: '+', value: '15+', label: 'ans sur Tmall et JD' },
      { count: 75, suffix: '+', value: '75+', label: 'lancements de marques' },
      { value: 'Compass', label: 'notre base de partenaires, en libre consultation', href: '/compass' },
    ],
    imgAlt:
      'La dirigeante d’une marque étrangère face à l’équipe d’un partenaire chinois, autour d’une table de réunion dans un bureau de Shanghai',
    checkLabel: 'L’accord en bref',
    checkRows: [
      { label: 'Une commission sur chaque vente', key: true },
      { label: 'Des boutiques ouvertes à votre nom', key: true },
      { label: 'La logistique en Chine à nos frais', key: false },
    ],
    checkCaption: 'Et nous n’achetons jamais votre stock.',
  },
  why: {
    eyebrow: 'Pourquoi cette méthode',
    h2: 'Pourquoi nous prenons tout en main',
    lead: 'Quatre constats reviennent dans presque chaque lancement en Chine que nous avons suivi. Notre méthode actuelle en découle.',
    reasons: [
      {
        title: 'Votre catégorie est déjà saturée',
        body: 'Le marché chinois de la consommation est d’une concurrence féroce. Quel que soit votre produit, une marque locale vous a précédé, sans doute plusieurs. Elles vont vite, tirent les prix vers le bas et connaissent l’acheteur mieux que vous. Un nom étranger éveille un peu de curiosité. Guère plus.',
        alt: 'Une cliente compare deux flacons de soin devant des rayons chargés de marques locales, dans une boutique de beauté chinoise',
      },
      {
        title: 'Un lancement, trop d’intervenants',
        body: 'Un TP pour Tmall, un DP pour Douyin, un entrepôt, une douzaine de KOL, sans oublier les plateformes. Chacun facture sa part du travail. Que les ventes calent, et chacun peut se défausser sur le voisin, tandis que la marque arbitre le match depuis l’autre bout du monde.',
        alt: 'Une animatrice de livestream présente un flacon de sérum face à la caméra d’un téléphone, dans un studio de live commerce chinois',
      },
      {
        title: 'Certains partenaires connaissent votre catégorie mieux que nous',
        body: 'Nous disposons de nos propres équipes TP, DP et marketing, et ce sont elles qui opèrent vos boutiques par défaut. Mais lorsqu’un TP ou un DP extérieur vend déjà dans votre catégorie et en a les acheteurs, nous faisons appel à lui et le pilotons. Vous ne signez toujours qu’un seul contrat.',
        alt: 'Deux partenaires chinois trient des propositions de marques imprimées et des échantillons, l’un d’eux la mine sceptique',
      },
      {
        title: 'Notre rémunération suit vos ventes',
        body: 'Nous prélevons une commission sur chaque vente e-commerce. Quand vos boutiques traversent un mois creux, nous aussi. Toute notre équipe garde ainsi les yeux rivés sur le même chiffre, celui qui compte pour vous.',
        alt: 'Une responsable de marque étrangère passe en revue les clauses d’un contrat avec l’équipe d’un partenaire chinois, autour d’un thé',
      },
    ],
    verdict: 'Nous prenons donc en charge l’ensemble de votre e-commerce en Chine, et nous répondons des ventes.',
  },
  role: {
    eyebrow: 'Notre place',
    h2: 'Vous traitez avec nous. Nous gérons le reste.',
    lead: 'Un lancement en Chine mobilise en général six acteurs. Distributeur e-commerce exclusif, nous nous plaçons au centre et tenons chaque relation à votre place.',
    sideOurs: 'De votre côté',
    sideMarket: 'Ceux que nous mobilisons',
    weDoLabel: 'Ce que nous prenons en charge',
    parties: {
      you: {
        name: 'Vous, la marque',
        body: 'La marque et le produit vous appartiennent. Vous acheminez le stock jusqu’à un entrepôt sous douane en Chine, financez la mise en place, apportez votre part du budget de co-marketing, puis validez le plan.',
      },
      us: {
        name: 'Nous',
        body: 'Votre distributeur e-commerce exclusif en Chine, en général pour trois ans ou plus. Nous ouvrons les boutiques à votre nom, les opérons avec nos propres équipes TP, DP et marketing, et assurons la logistique sur le territoire chinois.',
      },
      tp: {
        name: 'TP ou DP',
        hint: 'Le nôtre, ou un spécialiste de la catégorie',
        body: 'L’équipe qui fait tourner une boutique au quotidien : fiches produits, publicité, service client, lives. Le plus souvent, c’est notre TP ou notre DP maison. Quand un prestataire extérieur connaît mieux votre catégorie, nous faisons appel à lui et le pilotons.',
      },
      logistics: {
        name: 'Entrepôt sous douane',
        hint: 'Stockage, préparation, livraison',
        body: 'Votre stock attend sa vente dans un entrepôt sous douane en Chine. Le fret jusque-là reste à votre charge. Le stockage, la préparation des commandes et la livraison au client sont à la nôtre.',
      },
      online: {
        name: 'Plateformes',
        hint: 'Tmall, JD, Douyin',
        icon: 'cart',
        body: 'Elles hébergent vos boutiques et décident à qui revient le trafic gratuit pendant les fêtes commerciales. Nous tenons la relation, de l’ouverture de la boutique aux démarches pour décrocher une place dans leurs opérations.',
      },
      offline: {
        name: 'KOL et créateurs',
        hint: 'RedNote, Douyin, WeChat, Bilibili',
        icon: 'users',
        body: 'Les créateurs qui testent vos produits, en parlent et les vendent en live. Nous les choisissons, les briefons et suivons ce qu’ils vendent.',
      },
    },
    stance: {
      label: 'Notre position',
      title: 'Votre distributeur e-commerce exclusif en Chine',
      body: 'Vous signez avec nous un seul contrat pour vos canaux e-commerce en Chine, en général pour trois ans au moins. Nous ouvrons les boutiques à votre nom, les opérons avec nos équipes ou avec un spécialiste que nous faisons entrer, et traitons pour vous avec tous les autres acteurs. Nous nous rémunérons par une commission sur les ventes, sans jamais acheter votre stock.',
      points: [
        'Un seul contrat pour tous les canaux e-commerce',
        'Des boutiques ouvertes à votre nom',
        'Une rémunération à la commission',
        'La logistique en Chine prise en charge',
      ],
    },
    supportLabel: 'Également autour de la table',
    scope: {
      label: 'Notre périmètre',
      title: 'Ce que nous prenons en charge, canal par canal',
      colScope: 'Ce que nous prenons en charge',
      colValue: 'Ce que vous y gagnez',
      sowLabel: 'Qui fait quoi',
      channels: [
        {
          key: 'store',
          icon: 'store',
          name: 'Vos boutiques de marque sur Tmall et JD',
          tab: 'Tmall et JD',
          hint: 'Tmall, JD',
          body: 'Vos boutiques officielles, ouvertes au nom de votre marque. Nous les opérons au quotidien, avec notre TP maison ou un prestataire extérieur qui connaît mieux votre catégorie.',
          summary: 'Vos boutiques officielles, ouvertes à votre nom et opérées par nous.',
          sow: [
            {
              who: 'Vous, la marque',
              items: [
                'Produit, politique tarifaire et stock',
                'Acheminer le stock jusqu’à un entrepôt sous douane en Chine',
                'Financer la mise en place, et votre part du budget de co-marketing',
                'Valider le business plan',
              ],
              brief: ['Produit et stock', 'Mise en place et part du co-marketing'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Ouvrir les boutiques au nom de votre marque',
                'Les opérer au quotidien : fiches produits, publicité et service client en mandarin',
                'Faire appel à un TP extérieur quand il connaît mieux votre catégorie, et le piloter',
                'Produire les contenus d’ouverture de la boutique, puis les contenus récurrents',
                'Mener les campagnes et solliciter Tmall et JD pour obtenir du trafic gratuit pendant les grandes fêtes commerciales',
                'Stockage, préparation des commandes et livraison en Chine',
              ],
              brief: ['Ouvrir et opérer les boutiques', 'Contenus et campagnes', 'Trafic gratuit pendant les fêtes', 'Logistique en Chine'],
            },
            {
              who: 'Un TP extérieur, le cas échéant',
              items: [
                'Opère la boutique au quotidien, sous notre pilotage',
                'Apporte sa connaissance de la catégorie et ses acheteurs',
                'Nous rend des comptes, et nous vous en rendons',
              ],
              brief: ['Opère la boutique pour nous', 'Apporte ses acheteurs'],
            },
          ],
          value:
            'Des boutiques qui vous appartiennent, tenues par une équipe rémunérée sur ses ventes. Si vous changez un jour de distributeur, elles restent à vous.',
          valueShort: 'Des boutiques à vous, tenues par une équipe payée sur les ventes.',
        },
        {
          key: 'social-commerce',
          icon: 'live',
          name: 'Social commerce',
          hint: 'Boutique Douyin, lives, créateurs',
          body: 'Votre boutique sur Douyin, alimentée par les vidéos courtes, les lives et les créateurs qui vendent pour vous. Notre DP maison la fait tourner, à moins qu’un DP extérieur ne vende déjà votre catégorie dans ses lives.',
          summary: 'Votre boutique Douyin, opérée par notre DP ou par un DP que nous faisons entrer.',
          sow: [
            {
              who: 'Vous, la marque',
              items: [
                'Produit et stock',
                'Échantillons pour les créateurs et les lives',
                'Financer la mise en place, et votre part du budget de co-marketing',
              ],
              brief: ['Produit et stock', 'Échantillons pour les créateurs'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Ouvrir la boutique Douyin au nom de votre marque',
                'La faire tourner au quotidien, lives compris',
                'Faire appel à un DP extérieur quand ses lives vendent déjà votre catégorie',
                'Réserver et briefer les créateurs qui vendent pour vous',
                'Produire en continu les contenus qui font vivre la boutique',
                'Solliciter Douyin pour obtenir du trafic gratuit pendant les grandes fêtes commerciales',
              ],
              brief: ['Ouvrir et opérer la boutique', 'Lives et créateurs', 'Contenus', 'Trafic gratuit pendant les fêtes'],
            },
            {
              who: 'Créateurs et DP extérieurs',
              items: [
                'Les créateurs publient et vendent selon le brief convenu avec vous',
                'Un DP extérieur anime les lives quand les siens pèsent plus lourd que les nôtres',
              ],
              brief: ['Des créateurs qui vendent', 'Des lives qui ont leur public'],
            },
          ],
          value:
            'Des lives et des créateurs qui vendent déjà dans votre catégorie. Vos ventes ne reposent plus sur le seul trafic payant.',
          valueShort: 'Des lives et des créateurs qui vendent déjà dans votre catégorie.',
        },
        {
          key: 'social',
          icon: 'megaphone',
          name: 'Réseaux sociaux et KOL',
          tab: 'Réseaux sociaux',
          hint: 'RedNote, Douyin, WeChat, Bilibili',
          body: 'Les comptes de votre marque, et les KOL et KOC qui parlent de vous. C’est là que le consommateur chinois se renseigne sur une marque, avant de l’acheter où que ce soit.',
          summary: 'Les comptes de votre marque, et les créateurs qui parlent de vous.',
          sow: [
            {
              who: 'Vous, la marque',
              items: ['Votre part du budget de co-marketing', 'Charte de marque et messages clés', 'Valider les campagnes'],
              brief: ['Votre part du co-marketing', 'Charte de marque'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Animer au quotidien les comptes de la marque, sur toutes les plateformes',
                'Concevoir et produire les contenus',
                'Choisir les KOL et les KOC, puis les briefer',
                'Mener des campagnes de marque qui ramènent les acheteurs vers vos boutiques',
                'Mesurer ce qui fonctionne, et ajuster',
              ],
              brief: ['Les comptes au quotidien', 'Contenus', 'Campagnes KOL et KOC', 'Reporting'],
            },
            {
              who: 'KOL et KOC',
              items: ['Créent et publient des contenus sur votre marque', 'Suivent le brief convenu avec vous'],
              brief: ['Créent et publient', 'Suivent le brief'],
            },
          ],
          value: 'Une marque que le public recherche déjà. C’est elle qui fait vendre les boutiques.',
          valueShort: 'Une marque que le public recherche déjà.',
        },
        {
          key: 'logistics',
          icon: 'truck',
          name: 'Logistique',
          hint: 'De l’entrepôt sous douane jusqu’au client',
          body: 'Votre stock attend sa vente dans un entrepôt sous douane en Chine. Vous l’y acheminez, nous prenons le relais.',
          summary: 'Vous acheminez le stock en Chine. Nous gérons tout le reste.',
          sow: [
            {
              who: 'Vous, la marque',
              items: [
                'Expédier la marchandise vers un entrepôt sous douane en Chine',
                'Régler le fret depuis votre pays jusqu’à l’entrepôt',
              ],
              brief: ['Expédition vers l’entrepôt sous douane', 'Fret jusqu’en Chine'],
            },
            {
              who: 'Nous',
              us: true,
              items: ['Payer le stockage en Chine', 'Préparer chaque commande', 'L’expédier au client'],
              brief: ['Stockage', 'Préparation des commandes', 'Livraison au client'],
            },
            {
              who: 'L’entrepôt sous douane',
              items: ['Conserve votre stock jusqu’à sa vente', 'Dédouane chaque commande'],
              brief: ['Conserve votre stock', 'Dédouane chaque commande'],
            },
          ],
          value: 'Aucune facture de stockage ni de livraison en Chine. Vos frais logistiques s’arrêtent à la porte de l’entrepôt.',
          valueShort: 'Aucune facture de stockage ni de livraison en Chine.',
        },
      ],
    },
  },
  tpdp: {
    eyebrow: 'Les bases',
    h2: 'TP, DP : de quoi parle-t-on ?',
    lead: 'Tous deux sont des prestataires de services, et leurs métiers se ressemblent beaucoup. Ce qui les distingue, c’est le terrain : Tmall et JD pour l’un, Douyin pour l’autre.',
    segLabel: 'Type de partenaire',
    tpToggle: 'TP, partenaire opérateur',
    dpToggle: 'DP, Douyin Partner',
    tpSummary:
      'Le TP opère votre boutique sur Tmall, souvent aussi sur JD : fiches produits, contenus, service client en mandarin, trafic et campagnes. Nous avons notre propre équipe TP, et faisons appel à un TP extérieur lorsqu’il connaît mieux votre catégorie.',
    dpSummary:
      'Le DP exerce le même métier sur Douyin. Il tient votre boutique, produit les vidéos courtes et les lives qui l’alimentent, et anime les créateurs qui vendent pour vous. Chez nous, même logique : notre équipe DP d’abord, un DP extérieur si ses lives vendent mieux votre catégorie.',
    tableCaption: 'Comparatif TP et DP',
    compare: [
      { label: 'Plateformes', tp: 'Tmall, souvent JD', dp: 'Douyin' },
      {
        label: 'Périmètre',
        tp: 'Boutique, fiches produits, service client et campagnes',
        dp: 'Boutique, vidéo courte, lives et créateurs',
      },
      { label: 'Qui l’assure', tp: 'Notre TP maison, ou un spécialiste', dp: 'Notre DP maison, ou un spécialiste' },
      { label: 'Votre contrat', tp: 'Un seul, avec nous', dp: 'Un seul, avec nous', tpOk: true, dpOk: true },
      {
        label: 'Votre stock',
        tp: 'Reste à vous, en entrepôt sous douane',
        dp: 'Reste à vous, en entrepôt sous douane',
        tpOk: true,
        dpOk: true,
      },
    ],
    journeyStart: 'Par défaut, notre équipe maison',
    journeyEnd: 'Un spécialiste extérieur, s’il connaît mieux votre catégorie',
    note: 'Dans les deux cas, la boutique ouvre au nom de votre marque et votre contrat est signé avec nous. Nous pilotons le TP ou le DP, et c’est devant vous que nous répondons des ventes.',
    noteStrong: 'Notre règle : l’équipe qui connaît votre catégorie tient la boutique, quel que soit son employeur.',
  },
  partner: {
    eyebrow: 'Qui opère vos boutiques',
    h2: 'La catégorie d’abord. L’audience avant tout.',
    lead: 'Nombre de TP et de DP savent tenir une boutique et acheter du trafic. C’est le minimum requis. Pour décider qui opérera les vôtres, notre équipe ou une équipe extérieure, nous exigeons deux qualités de plus.',
    catTitle: 'Il connaît votre catégorie',
    catBody:
      'Il gère déjà des marques de votre secteur. Gammes de prix, requêtes des acheteurs, calendrier des fêtes commerciales : il connaît tout cela sur le bout des doigts. Il sait aussi quels créateurs font réellement vendre et lesquels se contentent de publier. Sa courbe d’apprentissage ne pèse pas sur votre budget.',
    chipsLabel: 'Ce que maîtrise un spécialiste de la catégorie',
    chips: ['Gammes de prix', 'Requêtes des acheteurs', 'Calendrier commercial', 'Créateurs qui vendent'],
    audTag: 'Le critère décisif',
    audTitle: 'Il détient l’audience',
    audBody:
      'Il vend déjà aux acheteurs que vous visez. Ses boutiques, ses lives et son réseau de créateurs attirent chaque jour des clients de votre catégorie. Le trafic acheté s’éteint avec le budget. L’audience propre d’un partenaire, elle, continue d’acheter quand la publicité se tait.',
    chartTitle: 'Quand le budget publicitaire s’arrête',
    chartCut: 'Couper le budget publicitaire',
    chartRestore: 'Rétablir le budget',
    chartSr:
      'À l’arrêt des dépenses publicitaires, le trafic du partenaire qui l’achète s’effondre, tandis que le partenaire doté de sa propre audience en conserve l’essentiel.',
    chartMarker: 'Arrêt du budget publicitaire',
    axisX: 'Mois',
    axisY: 'Trafic en boutique',
    legendA: 'Partenaire qui achète son trafic',
    legendB: 'Partenaire doté de sa propre audience',
    chartCaption: 'Illustration de la tendance, sans données clients.',
    mistakeLabel: 'L’erreur classique',
    mistakeBody:
      'Une marque retient un TP ou un DP parce qu’il sait opérer une boutique et acheter du trafic. Le scénario est courant. Un ou deux ans plus tard, elle se retrouve avec une boutique phare soignée, une lourde facture média et une poignée de clients qui reviennent sans qu’une publicité les y pousse. Voilà pourquoi nous confions une boutique à une équipe extérieure dès lors qu’elle a vos acheteurs et que la nôtre ne les a pas.',
  },
  pitch: {
    eyebrow: 'Avant de signer',
    h2: 'Votre marque est-elle prête pour ce type d’accord ?',
    lead: 'Nous nous engageons auprès de votre marque pour plusieurs années, aussi posons-nous quelques conditions dès le départ. Cochez ce qui vous correspond déjà.',
    statusNone: 'Cochez ce qui vous correspond déjà.',
    statusSome: 'C’est un début. Le reste se discute.',
    statusAll: 'Vous êtes prêt. Parlons-en.',
    cta: 'En discuter avec nous',
    imgAlt: 'Deux partenaires chinois trient des propositions de marques imprimées et des échantillons',
    items: [
      {
        title: 'Nous pouvons nous engager sur trois ans',
        body: 'Nous demandons l’exclusivité sur vos canaux e-commerce, en général pour trois ans au moins. Dès le premier jour, nous affectons une équipe et un budget à vos boutiques, et cet effort ne se rentabilise qu’au fil de plusieurs saisons de fêtes.',
      },
      {
        title: 'Nous pouvons financer la mise en place',
        body: 'Frais de plateforme, contenus de lancement et autres dépenses de mise en place vous sont facturés. C’est ce qui maintient les boutiques à votre nom. Si vous changez un jour de distributeur, elles vous suivent.',
      },
      {
        title: 'Nous investirons dans le co-marketing',
        body: 'Bâtir une marque en Chine suppose du média, des KOL et des campagnes pour chaque fête commerciale. Nous constituons ensemble un budget de co-marketing, abondé par les deux parties, et le déployons avec vous.',
      },
      {
        title: 'Nous pouvons acheminer le stock jusqu’à un entrepôt sous douane',
        body: 'Vous expédiez la marchandise vers un entrepôt sous douane en Chine et réglez le fret. À partir de l’entrepôt, la logistique est à notre charge.',
      },
    ],
  },
  interludeRoles: 'Reste à voir comment le travail se répartit, une fois chacun installé autour de la table.',
  raci: {
    eyebrow: 'Rôles et responsabilités',
    h2: 'Qui fait quoi, tâche par tâche',
    lead: 'Un lancement en Chine mobilise plus d’intervenants que la plupart des marques ne l’imaginent. Vous ne traitez qu’avec nous. Filtrez par acteur pour voir qui pilote quoi.',
    filterLabel: 'Filtrer par acteur',
    everyone: 'Tous',
    leads: 'Pilote',
    supports: 'Contribue',
    leadsMeaning: 'répond du résultat',
    supportsMeaning: 'associé, sans être aux commandes',
    regionLabel: 'Responsabilités par tâche',
    taskCol: 'Tâche',
    notInvolved: 'Non concerné',
    lowercaseInline: true,
    inlineSep: ' : ',
    cols: {
      you: 'Vous',
      us: 'Nous',
      tp: 'TP ou DP extérieur',
      logistics: 'Entrepôt sous douane',
      online: 'Plateformes',
      offline: 'KOL et créateurs',
    },
    rows: [
      { group: 'Stratégie et contrat', task: 'Marque, produit et politique tarifaire', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Business plan, budgets des fêtes commerciales compris', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Signature de l’accord de distribution e-commerce exclusive', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Frais de mise en place', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Budget de co-marketing, financé à deux', cells: ['L', 'L', '', '', '', ''] },
      { task: 'Localisation de la marque', cells: ['S', 'L', '', '', '', ''] },
      {
        group: 'Boutiques sur Tmall, JD et Douyin',
        task: 'Ouverture des boutiques au nom de votre marque',
        cells: ['S', 'L', '', '', 'S', ''],
      },
      { task: 'Choix de l’équipe qui opère chaque boutique : la nôtre ou une équipe extérieure', cells: ['', 'L', 'S', '', '', ''] },
      { task: 'Exploitation des boutiques et service client', cells: ['', 'L', 'S’il est retenu', '', '', ''] },
      { task: 'Contenus d’ouverture de la boutique et contenus récurrents', cells: ['S', 'L', 'S', '', '', ''] },
      { task: 'Campagnes sur la plateforme et en dehors', cells: ['', 'L', 'S', '', 'S', 'S'] },
      { task: 'Démarches auprès des plateformes pour le trafic des fêtes', cells: ['', 'L', 'S', '', 'S', ''] },
      {
        group: 'Réseaux sociaux et KOL',
        task: 'Comptes de la marque au quotidien : RedNote, Douyin, WeChat, Bilibili',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Choix et brief des KOL et des KOC', cells: ['S', 'L', '', '', '', 'S'] },
      { task: 'Création et publication des contenus', cells: ['', 'S', '', '', '', 'L'] },
      { task: 'Vente en live avec les créateurs', cells: ['', 'L', 'S', '', '', 'S'] },
      {
        group: 'Stock et logistique',
        task: 'Fret de votre pays jusqu’à l’entrepôt sous douane',
        cells: ['L', '', '', 'S', '', ''],
      },
      { task: 'Stockage en Chine', cells: ['', 'L', '', 'S', '', ''] },
      { task: 'Préparation des commandes et livraison au client', cells: ['', 'L', '', 'S', '', ''] },
    ],
  },
  steps: {
    eyebrow: 'La mission',
    h2: 'Travailler avec nous, concrètement',
    lead: 'La plupart des marques franchissent avec nous ces six étapes, chacune à son rythme.',
    involved: 'Intervenants : ',
    items: [
      {
        title: 'Nous apprenons à connaître la marque',
        body: 'Tout commence par de longs échanges : votre produit, vos marges, vos ambitions en Chine. Nous passons aussi votre catégorie au crible, car des marques locales l’occupent sans doute déjà en force.',
        who: ['you', 'us'],
      },
      {
        title: 'Nous rédigeons le plan et signons l’accord',
        body: 'Un business plan qui chiffre les frais de mise en place et le budget de co-marketing, et une marque adaptée au consommateur chinois. Vient ensuite l’accord : l’exclusivité sur vos canaux e-commerce, en général pour trois ans au moins.',
        who: ['us', 'you'],
      },
      {
        title: 'Nous choisissons qui opère chaque boutique',
        body: 'Par défaut, nos équipes TP et DP prennent les boutiques en main. Lorsqu’un partenaire extérieur vend déjà dans votre catégorie et en a les acheteurs, c’est à lui que nous les confions (la recherche commence dans Compass, notre base de partenaires rencontrés en personne).',
        who: ['us', 'tp'],
      },
      {
        title: 'Vous expédiez, nous prenons le relais',
        body: 'Vous envoyez la marchandise vers un entrepôt sous douane en Chine et réglez le fret. Dès lors, le stockage, la préparation des commandes et la livraison au client sont à notre charge.',
        who: ['you', 'us', 'logistics'],
      },
      {
        title: 'Nous ouvrons les boutiques et lançons la marque',
        body: 'Les boutiques ouvrent au nom de votre marque sur Tmall, JD et Douyin. Suivent les contenus, les campagnes, les KOL, puis les démarches auprès de chaque plateforme pour décrocher du trafic pendant les fêtes.',
        who: ['us', 'online', 'offline'],
      },
      {
        title: 'Nous faisons grandir la marque avec vous',
        body: 'Les ventes progressent de fête en fête. Après chacune, nous passons les chiffres en revue avec vous et réorientons le budget de co-marketing vers ce qui s’est vendu. Notre commission ne grossit qu’avec vos ventes.',
        who: ['us', 'you'],
      },
    ],
  },
  growth: {
    eyebrow: 'À quoi ressemble la croissance',
    h2: 'En Chine, les ventes progressent de fête en fête',
    lead: 'La courbe monte, mais jamais en ligne droite. Une large part des ventes de l’année se joue en quelques fêtes commerciales, et chacune réclame son propre budget, année après année.',
    chartTitle: 'Deux ans d’une marque type sur Tmall et JD',
    chartSr:
      'Les ventes hebdomadaires progressent sur deux ans, avec de forts pics au 618 en juin et au Double 11 en novembre, des pics plus modestes au 3.8 et au Double 12, un ralentissement autour du Nouvel An chinois et un bref creux après chaque fête. L’investissement marketing suit la même cadence : un budget permanent régulier, auquel s’ajoute un budget de fête engagé dès les semaines de préchauffage qui précèdent chaque pic.',
    salesLabel: 'Ventes hebdomadaires',
    investLabel: 'Investissement marketing',
    legendSales: 'Ventes',
    legendTrend: 'Tendance de fond',
    legendAlwaysOn: 'Budget permanent',
    legendFestival: 'Budget des fêtes',
    years: ['Première année', 'Deuxième année'],
    months: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    festivals: {
      d38: '3.8, fête des Reines',
      s618: '618',
      d11: 'Double 11',
      d12: 'Double 12',
      cny: 'Nouvel An chinois',
    },
    phases: {
      normal: 'Rythme de croisière. Contenus et publicité entretiennent la boutique.',
      warmup: 'Préchauffage. Le budget de la fête s’engage avant que les ventes ne décollent.',
      peak: 'Pic de la fête. Des semaines de ventes concentrées en quelques jours.',
      dip: 'Creux d’après-fête. Les acheteurs ont anticipé, l’activité retombe.',
      cny: 'Nouvel An chinois. La logistique ralentit, les ventes aussi.',
    },
    caption: 'Illustration de la tendance, sans données clients.',
    note: 'Les fêtes commerciales ne relèvent pas d’un coût de lancement ponctuel. Chacune exige du média, des offres et des créations nouvelles, et les plateformes réservent leur trafic gratuit aux marques qui les ont sollicitées tôt. À inscrire au budget chaque année, pas seulement la première.',
    noteStrong: 'Notre conseil : inscrivez chaque fête au budget de co-marketing avant l’ouverture des boutiques.',
  },
  hire: {
    eyebrow: 'Travailler avec nous',
    h2: 'Un seul accord pour tous vos canaux e-commerce',
    lead: 'Nous travaillons d’une seule façon : comme distributeur e-commerce exclusif de votre marque en Chine.',
    items: [
      {
        title: 'Distribution e-commerce exclusive',
        body: 'Nous ouvrons vos boutiques à votre nom, les opérons avec nos équipes ou avec un spécialiste que nous faisons entrer, et gérons les plateformes, les KOL et la logistique en Chine. Notre rémunération : une commission sur les ventes.',
        cta: 'Parlons-en',
      },
    ],
  },
  interludeFaq: 'Vous êtes encore là ? Tant mieux. C’est ici que la plupart des lecteurs arrivent directement.',
  faq: {
    eyebrow: 'Tarifs et FAQ',
    h2: 'Les premières questions des marques',
    fresh: 'Dernière révision : 9 octobre 2026.',
    ours: {
      q: 'Comment êtes-vous rémunérés ?',
      a: 'Par une commission sur l’ensemble de vos ventes e-commerce en Chine. S’y ajoutent des frais de mise en place, facturés une seule fois (frais de plateforme, contenus de lancement, etc.), et un budget de co-marketing que nous alimentons à deux pour construire la marque. Nous n’achetons pas votre stock. En contrepartie, nous demandons l’exclusivité sur vos canaux e-commerce, en général pour trois ans au moins.',
      modes: [
        { label: 'Ventes e-commerce', value: 'Commission' },
        { label: 'Ouverture des boutiques', value: 'Frais de mise en place, facturés une fois' },
        { label: 'Construction de la marque', value: 'Budget de co-marketing partagé' },
        { label: 'Votre stock', value: 'Reste à vous' },
      ],
    },
    tp: {
      q: 'Qui paie la logistique ?',
      a: 'Vous expédiez la marchandise vers un entrepôt sous douane en Chine et réglez le fret depuis votre pays. Une fois le stock arrivé, le reste est à nos frais : stockage, préparation des commandes et livraison au client.',
      html: 'Vous expédiez la marchandise vers un entrepôt sous douane en Chine et réglez le fret depuis votre pays. Une fois le stock arrivé, le reste est à nos frais : stockage, préparation des commandes et livraison au client.',
      figures: [
        { value: 'Vous', label: 'le fret jusqu’à l’entrepôt sous douane en Chine' },
        { value: 'Nous', label: 'le stockage, la préparation et la livraison' },
      ],
    },
    items: [
      {
        q: 'À qui appartiennent les boutiques ?',
        a: 'À vous. Elles ouvrent au nom de votre marque, c’est pourquoi nous vous facturons les frais de mise en place au lieu de les absorber. Si vous changez un jour de distributeur, les boutiques vous suivent.',
      },
      {
        q: 'Pourquoi demandez-vous l’exclusivité ?',
        a: 'Parce que nous investissons avant que les ventes n’arrivent : l’équipe, les contenus, les démarches auprès des plateformes. L’exclusivité sur vos canaux e-commerce, en général pour trois ans au moins, laisse à cet effort le temps de porter ses fruits.',
      },
      {
        q: 'Avez-vous vos propres équipes TP et DP ?',
        a: 'Oui, ainsi qu’une équipe marketing maison. Ce sont elles qui opèrent vos boutiques par défaut. Lorsqu’un TP ou un DP extérieur connaît mieux votre catégorie, ou en a déjà les acheteurs, nous faisons appel à lui et le pilotons. Vous ne traitez toujours qu’avec nous.',
      },
      {
        q: 'Allez-vous acheter notre stock ?',
        a: 'Non. Votre marchandise reste dans un entrepôt sous douane en Chine jusqu’à sa vente. Vous l’y acheminez, et nous prenons ensuite en charge le stockage et la livraison.',
      },
      {
        q: 'À quoi sert le budget de co-marketing ?',
        a: 'À construire la marque en Chine : média, campagnes KOL et KOC, offres des fêtes commerciales et contenus qui les portent. Chacun y met sa part, et nous le planifions puis le déployons ensemble.',
      },
      {
        q: 'Combien devrons-nous investir ?',
        a: 'Tout dépend de la catégorie et des canaux. Le business plan fixe les frais de mise en place et le budget de co-marketing, avant toute signature. Pour une première estimation, essayez nos calculateurs de coûts Tmall Global, JD Worldwide et Douyin.',
        html: 'Tout dépend de la catégorie et des canaux. Le business plan fixe les frais de mise en place et le budget de co-marketing, avant toute signature. Pour une première estimation, essayez nos calculateurs de coûts <a href="/tools/tmall-global-setup-and-run">Tmall Global</a>, <a href="/tools/jd-worldwide-setup-and-run">JD Worldwide</a> et <a href="/tools/douyin-cost-calculator">Douyin</a>.',
      },
    ],
  },
  cta: {
    eyebrow: 'Prochaine étape',
    h2: 'Dites-nous ce que vous vendez, nous vous dirons ce qu’il faut pour le vendre en Chine.',
    body: 'Un membre senior de l’équipe vous répond sous un jour ouvré. Vous pouvez aussi commencer par explorer : notre base de partenaires est en libre consultation.',
    primary: 'Nous contacter',
    secondary: 'Explorer Compass',
  },
};

export default copy;
