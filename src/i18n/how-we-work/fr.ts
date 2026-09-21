/**
 * Copie française de la page « Notre méthode ». Même structure que en.ts :
 * les hrefs restent les chemins anglais canoniques, le composant les localise.
 */
import type { HowWeWorkCopy } from './en';

const copy: HowWeWorkCopy = {
  meta: {
    title: 'Notre méthode : trouver votre TP ou DP en Chine | TheChinaPath',
    description:
      'Sans équipe TP ou DP, nous trouvons le partenaire Tmall, JD ou Douyin qui connaît votre catégorie et en détient l’audience, puis lui présentons votre marque.',
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
    { id: 'the-right-partner', label: 'Le bon partenaire' },
    { id: 'pitching', label: 'Convaincre un partenaire' },
    { id: 'the-steps', label: 'Les étapes' },
    { id: 'pricing-faq', label: 'Tarifs et FAQ' },
  ],
  hero: {
    kicker: 'Notre méthode',
    h1Before: 'En Chine, le ',
    h1Mark: 'mauvais partenaire',
    h1After: ' se paie en années.',
    ctaPrimary: 'Parlons-en',
    ctaSecondary: 'Nos raisons',
    proof: [
      { count: 15, suffix: '+', value: '15+', label: 'ans sur Tmall et JD' },
      { count: 75, suffix: '+', value: '75+', label: 'lancements de marques' },
      { value: 'Compass', label: 'notre base de partenaires, en libre consultation', href: '/compass' },
    ],
    imgAlt:
      'La dirigeante d’une marque étrangère face à l’équipe d’un partenaire chinois, autour d’une table de réunion dans un bureau de Shanghai',
    checkLabel: 'Ce que nous vérifions d’abord',
    checkRows: [
      { label: 'Connaît votre catégorie', key: true },
      { label: 'Touche déjà vos acheteurs', key: true },
      { label: 'Sait tenir une boutique', key: false },
    ],
    checkCaption: 'La plupart des marques s’en tiennent au dernier critère.',
  },
  why: {
    eyebrow: 'Pourquoi cette méthode',
    h2: 'La Chine pardonne mal une erreur de partenaire',
    lead: 'Quatre constats reviennent dans presque chaque lancement que nous observons. Notre méthode en découle.',
    reasons: [
      {
        title: 'Votre catégorie est déjà saturée',
        body: 'Le marché chinois de la consommation est d’une concurrence féroce. Quel que soit votre produit, une marque locale vous a précédé, sans doute plusieurs. Elles vont vite, tirent les prix vers le bas et connaissent l’acheteur mieux que vous. Un nom étranger éveille un peu de curiosité. Guère plus.',
        alt: 'Une cliente compare deux flacons de soin devant des rayons chargés de marques locales, dans une boutique de beauté chinoise',
      },
      {
        title: 'Le partenaire fait ou défait le lancement',
        body: 'Un TP ou un DP qui connaît votre catégorie et en détient déjà l’audience vous donne une longueur d’avance. Celui qui sait seulement opérer une boutique et acheter du trafic vous condamne à payer chaque visiteur. Pendant des années.',
        alt: 'Une animatrice de livestream présente un flacon de sérum face à la caméra d’un téléphone, dans un studio de live commerce chinois',
      },
      {
        title: 'Les meilleurs partenaires ont le luxe de refuser',
        body: 'Dans chaque catégorie, les TP et les DP les plus solides croulent sous les sollicitations. Des marques frappent à leur porte chaque semaine, et la plupart essuient un refus. Celles qui passent le filtre ont été examinées de près, puis se sont vu imposer un investissement minimum.',
        alt: 'Deux partenaires chinois trient des propositions de marques imprimées et des échantillons, l’un d’eux la mine sceptique',
      },
      {
        title: 'Aucune équipe boutique à vous vendre',
        body: 'Si nous disposions d’une équipe TP ou DP, toute marque rencontrée nous paraîtrait faite pour elle. Nous n’en avons pas. Une seule question compte donc : quel partenaire convient à la vôtre ?',
        alt: 'Une responsable de marque étrangère passe en revue les clauses d’un contrat avec l’équipe d’un partenaire chinois, autour d’un thé',
      },
    ],
    verdict: 'Nous travaillons donc pour vous, de votre côté de la table, sans partenaire maison à placer.',
  },
  role: {
    eyebrow: 'Notre place',
    h2: 'La place de chacun dans un lancement en Chine',
    lead: 'Un lancement en Chine réunit en général six acteurs. Voici ce qui revient à chacun, et où nous intervenons.',
    sideOurs: 'De votre côté',
    sideMarket: 'Côté marché',
    weDoLabel: 'Ce que nous prenons en charge',
    parties: {
      you: {
        name: 'Vous, la marque',
        body: 'La marque et le produit vous appartiennent, tout comme la chaîne d’approvisionnement qui les porte. Vous fixez le budget et signez avec le partenaire.',
      },
      us: {
        name: 'Nous',
        body: 'Nous siégeons de votre côté de la table. Nous choisissons vos partenaires de distribution, négocions à vos côtés, puis les pilotons au quotidien. Vos réseaux sociaux passent aussi entre nos mains.',
      },
      tp: {
        name: 'Votre TP ou DP',
        hint: 'Tmall, JD, Douyin',
        body: 'C’est lui qui fait tourner vos boutiques au quotidien, service client compris. Le TP opère sur Tmall et JD, le DP sur Douyin. Certains partenaires finissent par acheter du stock, jamais au démarrage.',
      },
      logistics: {
        name: 'Partenaire logistique',
        body: 'Il n’entre en jeu que si votre TP ou DP ne sait pas expédier en cross-border. Nous allons alors chercher celui qui convient à votre marque.',
      },
      online: {
        name: 'Distributeurs en ligne',
        hint: 'JD, Tmall Supermarket, Hema, etc.',
        body: 'Ils achètent votre stock et le revendent sur leurs propres canaux : la vente en propre de JD, Tmall Supermarket ou Hema. Nous tenons toute la relation à votre place, ce que le métier appelle la gestion de canal.',
      },
      offline: {
        name: 'Distributeurs offline',
        body: 'Ils placent votre marque en magasin et dans la vente en gros. Nous les pilotons à peu près comme les distributeurs en ligne. Même gestion de canal, autres rayons.',
      },
    },
    stance: {
      label: 'Notre position',
      title: 'De votre côté de la table, sur tous les canaux',
      body: 'Nous ne possédons aucune boutique, n’avons pas d’équipe TP ou DP, et aucun partenaire ne nous rémunère pour lui apporter des marques. Nous choisissons vos partenaires de distribution, siégeons à vos côtés pendant la négociation, puis les pilotons pour vous au quotidien. Lorsque le plan le justifie, nous devenons aussi votre distributeur exclusif en ligne.',
      points: [
        'Aucun partenaire maison à placer',
        'Une seule équipe pour tous les canaux',
        'Des campagnes qui jouent sur plusieurs canaux',
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
          key: 'online',
          icon: 'cart',
          name: 'Distributeurs en ligne',
          hint: 'JD, Tmall Supermarket, Hema, etc.',
          body: 'Ils achètent votre stock et le revendent sur leurs propres canaux : la vente en propre de JD, Tmall Supermarket ou Hema. Nous tenons toute la relation à votre place, ce que le métier appelle la gestion de canal.',
          summary: 'Ils achètent votre stock et le revendent. Nous les pilotons pour vous.',
          sow: [
            {
              who: 'Vous, la marque',
              items: [
                'Produit, chaîne d’approvisionnement et politique tarifaire',
                'Signer le contrat de distribution',
                'Valider les offres et les contenus',
              ],
              brief: ['Produit et prix', 'Signer le contrat'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Présenter votre marque au distributeur',
                'Négocier le contrat avec vous',
                'Gérer la réglementation et la logistique en Chine',
                'Produire tous les contenus dont il a besoin',
                'Mener les campagnes avec lui (création, argumentaire, média et offre), sur plusieurs canaux quand cela sert la marque',
                'Piloter la relation au quotidien',
              ],
              brief: ['Présentation et négociation', 'Réglementation et logistique', 'Contenus et campagnes', 'La relation au quotidien'],
            },
            {
              who: 'Le distributeur',
              items: [
                'Achète votre stock',
                'Le référence et le vend sur sa propre plateforme',
                'Gère les commandes, la livraison et le service client',
                'Mène avec nous ses opérations promotionnelles',
              ],
              brief: ['Achète votre stock', 'Le vend sur sa plateforme', 'Commandes et service client'],
            },
          ],
          value:
            'Votre marque décroche sa part de visibilité et de promotions chez le distributeur, sans qu’il vous faille une équipe en Chine.',
          valueShort: 'Votre place dans ses rayons, sans équipe à vous en Chine.',
        },
        {
          key: 'store',
          icon: 'store',
          name: 'Votre boutique de marque sur les marketplaces',
          tab: 'Votre boutique de marque',
          hint: 'Tmall, JD',
          body: 'Votre boutique officielle sur Tmall ou JD. Elle vous appartient, et un TP (partenaire opérateur) la fait tourner au quotidien.',
          summary: 'Votre boutique officielle sur Tmall ou JD, opérée par un TP.',
          sow: [
            {
              who: 'Vous, la marque',
              items: [
                'Produit, chaîne d’approvisionnement et stock',
                'Fixer le budget et signer avec le TP',
                'Valider le business plan',
              ],
              brief: ['Produit et stock', 'Budget et signature avec le TP'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Choisir le bon TP, dans notre réseau ou au terme d’une recherche dédiée',
                'Lui présenter votre marque',
                'Bâtir la stratégie de portefeuille et le business plan',
                'Trouver le meilleur dispositif logistique',
                'Produire les contenus d’ouverture de la boutique, puis les contenus récurrents',
                'Mener les campagnes sur la plateforme et en dehors',
                'Solliciter Tmall ou JD pour obtenir du trafic gratuit pendant les grandes fêtes commerciales',
              ],
              brief: ['Trouver le TP et le convaincre', 'Business plan et logistique', 'Contenus et campagnes', 'Trafic gratuit pendant les fêtes'],
            },
            {
              who: 'Votre TP',
              items: [
                'Ouvre la boutique et la fait tourner au quotidien',
                'Fiches produits, prix et publicité sur la plateforme',
                'Service client en mandarin',
                'Commandes et préparation, expédition cross-border comprise s’il est équipé',
                'Reporting des ventes',
              ],
              brief: ['Fait tourner la boutique', 'Fiches produits et publicité', 'Service client et commandes'],
            },
          ],
          value:
            'Un TP qui connaît déjà votre catégorie et ses acheteurs. En période de fêtes, s’y ajoute le trafic offert par la plateforme, en plus de celui que vous payez.',
          valueShort: 'Un TP rompu à votre catégorie, et du trafic offert pendant les fêtes.',
        },
        {
          key: 'social-commerce',
          icon: 'live',
          name: 'Social commerce',
          hint: 'Boutique Douyin, lives, créateurs',
          body: 'Votre boutique sur Douyin, alimentée par les vidéos courtes, les lives et les créateurs qui vendent pour vous. Un DP (Douyin Partner) la fait tourner au quotidien.',
          summary: 'Votre boutique Douyin, opérée par un DP.',
          sow: [
            {
              who: 'Vous, la marque',
              items: [
                'Produit, chaîne d’approvisionnement et stock',
                'Fixer le budget et signer avec le DP',
                'Échantillons pour les créateurs et les lives',
              ],
              brief: ['Produit et stock', 'Budget et signature avec le DP'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Choisir le bon DP, dans notre réseau ou au terme d’une recherche dédiée',
                'Lui présenter votre marque',
                'Bâtir le business plan et le dispositif logistique',
                'Produire en continu les contenus qui font vivre la boutique',
                'Mener les campagnes avec le DP, sur Douyin et en dehors',
                'Solliciter Douyin pour obtenir du trafic gratuit pendant les grandes fêtes commerciales',
              ],
              brief: ['Trouver le DP et le convaincre', 'Business plan et logistique', 'Contenus et campagnes', 'Trafic gratuit pendant les fêtes'],
            },
            {
              who: 'Votre DP',
              items: [
                'Fait tourner la boutique Douyin au quotidien',
                'Anime les lives',
                'Recrute et encadre les créateurs qui vendent pour vous',
                'Achète le trafic payant sur Douyin',
                'Service client et commandes',
              ],
              brief: ['Fait tourner la boutique', 'Lives et créateurs', 'Service client et commandes'],
            },
          ],
          value:
            'Un DP dont les lives et les créateurs vendent déjà dans votre catégorie. Vos ventes ne reposent plus sur le seul trafic payant.',
          valueShort: 'Des lives et des créateurs qui vendent déjà dans votre catégorie.',
        },
        {
          key: 'offline',
          icon: 'building',
          name: 'Distributeurs offline',
          hint: 'Magasins et vente en gros',
          body: 'Ils placent votre marque en magasin et dans la vente en gros. Nous les pilotons à peu près comme les distributeurs en ligne. Même gestion de canal, autres rayons.',
          summary: 'Ils placent votre marque en magasin et dans la vente en gros. Nous les pilotons pour vous.',
          sow: [
            {
              who: 'Vous, la marque',
              items: [
                'Produit, chaîne d’approvisionnement et politique tarifaire',
                'Signer le contrat de distribution',
                'Valider les offres et la PLV',
              ],
              brief: ['Produit et prix', 'Signer le contrat'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Présenter votre marque au distributeur',
                'Négocier le contrat avec vous',
                'Gérer la réglementation et la logistique en Chine',
                'Produire les contenus dont il a besoin',
                'Mener les campagnes avec lui',
                'Piloter la relation au quotidien',
              ],
              brief: ['Présentation et négociation', 'Réglementation et logistique', 'Contenus et campagnes', 'La relation au quotidien'],
            },
            {
              who: 'Le distributeur',
              items: [
                'Achète votre stock',
                'Place la marque en magasin et dans la vente en gros',
                'Anime sa propre force de vente et ses comptes enseignes',
                'Assure le stockage et la livraison des magasins',
              ],
              brief: ['Achète votre stock', 'Magasins et vente en gros', 'Livraison des magasins'],
            },
          ],
          value:
            'Les magasins et la vente en gros, sans monter de force de vente en Chine. Le distributeur reste briefé, alimenté en contenus et comptable de ses résultats.',
          valueShort: 'Magasins et vente en gros, sans force de vente à vous.',
        },
        {
          key: 'social',
          icon: 'megaphone',
          name: 'Réseaux sociaux',
          hint: 'RedNote, Douyin, WeChat, Bilibili',
          body: 'Les comptes de votre marque, et les créateurs qui parlent de vous. C’est là que le consommateur chinois se renseigne sur une marque, avant de l’acheter où que ce soit.',
          summary: 'Les comptes de votre marque, et les créateurs qui parlent de vous.',
          sow: [
            {
              who: 'Vous, la marque',
              items: ['Fixer le budget', 'Charte de marque et messages clés', 'Valider les campagnes'],
              brief: ['Budget et charte de marque', 'Validation des campagnes'],
            },
            {
              who: 'Nous',
              us: true,
              items: [
                'Animer au quotidien les comptes de la marque, sur toutes les plateformes',
                'Concevoir et produire les contenus',
                'Choisir les KOL et les KOC, puis les briefer',
                'Mener des campagnes de marque avec KOL et KOC, hors e-commerce',
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
          value: 'Une marque que le public recherche déjà. C’est elle qui fait vendre tous les autres canaux.',
          valueShort: 'Une marque que le public recherche déjà.',
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
      'Le TP opère votre boutique sur Tmall, souvent aussi sur JD : fiches produits, contenus, service client en mandarin, trafic et campagnes. Il se rémunère par des honoraires, le plus souvent assortis d’une commission sur les ventes.',
    dpSummary:
      'Le DP exerce le même métier sur Douyin. Il tient votre boutique, produit les vidéos courtes et les lives qui l’alimentent, et anime les créateurs qui vendent pour vous. Sa rémunération suit peu ou prou le schéma d’un TP.',
    tableCaption: 'Comparatif TP et DP',
    compare: [
      { label: 'Plateformes', tp: 'Tmall, souvent JD', dp: 'Douyin' },
      {
        label: 'Périmètre',
        tp: 'Boutique, fiches produits, service client et campagnes',
        dp: 'Boutique, vidéo courte, lives et créateurs',
      },
      {
        label: 'Rémunération',
        tp: 'Honoraires, en général assortis d’une commission',
        dp: 'Honoraires, en général assortis d’une commission',
      },
      { label: 'Achète votre stock', tp: 'En général, non', dp: 'En général, non', tpOk: false, dpOk: false },
      { label: 'Peut devenir distributeur', tp: 'Oui, plus tard', dp: 'Oui, plus tard', tpOk: true, dpOk: true },
    ],
    journeyStart: 'Première année : prestations seules',
    journeyEnd: 'Ensuite : il peut devenir votre distributeur',
    note: 'En règle générale, le stock reste chez vous. Un TP ou un DP peut devenir votre distributeur par la suite et se mettre à acheter de la marchandise, mais seulement une fois qu’il maîtrise votre chaîne d’approvisionnement et mesure la réalité de votre engagement. Comptez en général un an de prestations, souvent davantage.',
    noteStrong:
      'Notre conseil : visez d’abord un contrat de prestations, et considérez la distribution comme une étape qui se mérite.',
  },
  partner: {
    eyebrow: 'Le bon partenaire',
    h2: 'La catégorie d’abord. L’audience avant tout.',
    lead: 'Nombre de TP et de DP savent tenir une boutique et acheter du trafic. C’est le minimum requis, et c’est là que s’arrête la recherche de la plupart des marques.',
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
      'Une marque retient un TP ou un DP parce qu’il sait opérer une boutique et acheter du trafic. Le scénario est courant. Un ou deux ans plus tard, elle se retrouve avec une boutique phare soignée, une lourde facture média et une poignée de clients qui reviennent sans qu’une publicité les y pousse.',
  },
  pitch: {
    eyebrow: 'Côté partenaire',
    h2: 'Êtes-vous prêt à convaincre un bon partenaire ?',
    lead: 'Les TP et les DP qui s’imposent dans votre catégorie en mesurent l’encombrement : ils font le tri. Cochez ce qui vous correspond déjà.',
    statusNone: 'Cochez ce qui vous correspond déjà.',
    statusSome: 'C’est un début. Nous pouvons vous aider pour le reste.',
    statusAll: 'Vous êtes prêt. Reste à trouver le partenaire.',
    cta: 'Lancer la recherche de partenaire',
    imgAlt: 'Deux partenaires chinois trient des propositions de marques imprimées et des échantillons',
    items: [
      {
        title: 'Notre dossier de présentation est prêt',
        body: 'Un bon partenaire lit votre dossier avec l’œil d’un investisseur exigeant. Il voudra aussi rencontrer les personnes qui portent la marque.',
      },
      {
        title: 'Nous connaissons notre niveau d’investissement',
        body: 'Un partenaire sérieux examine votre marque, puis annonce le minimum qu’il juge raisonnable. Arrivez à ce rendez-vous avec votre propre chiffre.',
      },
      {
        title: 'Une première année en prestations seules nous convient',
        body: 'Le stock viendra plus tard, voire jamais. La plupart des partenaires veulent observer votre chaîne d’approvisionnement pendant un an avant d’envisager le moindre achat.',
      },
      {
        title: 'Nous savons refuser un oui trop facile',
        body: 'Si un partenaire n’a pas besoin d’être convaincu, demandez-vous pourquoi il a encore de la place dans son portefeuille.',
      },
    ],
  },
  interludeRoles:
    'Voilà pour le partenaire. Reste à voir comment le travail se répartit, une fois chacun installé autour de la table.',
  raci: {
    eyebrow: 'Rôles et responsabilités',
    h2: 'Qui fait quoi, tâche par tâche',
    lead: 'Un lancement en Chine mobilise plus d’intervenants que la plupart des marques ne l’imaginent. Filtrez par acteur pour voir ce que chacun pilote.',
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
      tp: 'TP ou DP',
      logistics: 'Partenaire logistique',
      online: 'Distributeurs en ligne',
      offline: 'Distributeurs offline',
    },
    rows: [
      { group: 'Stratégie et planification', task: 'Marque, produit et chaîne d’approvisionnement', cells: ['L', '', '', '', '', ''] },
      { task: 'Budget et niveau d’investissement', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Business plan, budgets des fêtes commerciales compris', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Stratégie de portefeuille : quels produits pour quel canal', cells: ['S', 'L', 'S', '', '', ''] },
      { task: 'Localisation de la marque', cells: ['S', 'L', '', '', '', ''] },
      {
        group: 'TP ou DP, sur Tmall, JD et Douyin',
        task: 'Recherche du TP ou DP, dans notre réseau ou au-delà',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Présentation de votre marque au partenaire', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Choix du partenaire et signature', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Exploitation des boutiques et service client', cells: ['', '', 'L', '', '', ''] },
      { task: 'Contenus d’ouverture de la boutique et contenus récurrents', cells: ['', 'L', 'S', '', '', ''] },
      { task: 'Campagnes sur la plateforme et en dehors', cells: ['', 'L', 'L', '', '', ''] },
      { task: 'Démarches auprès de la plateforme pour le trafic des fêtes', cells: ['', 'L', 'S', '', '', ''] },
      {
        group: 'Distributeurs en ligne : JD, Tmall Supermarket, Hema',
        task: 'Présentation de votre marque au distributeur',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Négociation et signature du contrat', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Achat du stock et vente aux consommateurs', cells: ['', '', '', '', 'L', ''] },
      { task: 'Tous les contenus dont le distributeur a besoin', cells: ['', 'L', '', '', 'S', ''] },
      { task: 'Campagnes conjointes : création, argumentaire, média et offre', cells: ['', 'L', '', '', 'S', ''] },
      { task: 'Relation au quotidien', cells: ['', 'L', '', '', 'S', ''] },
      { group: 'Distributeurs offline', task: 'Présentation de votre marque au distributeur', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Négociation et signature du contrat', cells: ['L', 'S', '', '', '', ''] },
      { task: 'Vente en magasin et en gros', cells: ['', '', '', '', '', 'L'] },
      { task: 'Contenus et campagnes avec le distributeur', cells: ['', 'L', '', '', '', 'S'] },
      { task: 'Relation au quotidien', cells: ['', 'L', '', '', '', 'S'] },
      {
        group: 'Réglementation et logistique',
        task: 'Réglementation chinoise applicable aux distributeurs',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Logistique cross-border', cells: ['', 'Trouve le partenaire', 'S’il est équipé', 'À défaut', '', ''] },
      { task: 'Logistique en Chine pour les distributeurs', cells: ['', 'L', '', 'S', '', ''] },
      {
        group: 'Réseaux sociaux et campagnes de marque',
        task: 'Comptes de la marque au quotidien : RedNote, Douyin, WeChat, Bilibili',
        cells: ['S', 'L', '', '', '', ''],
      },
      { task: 'Campagnes de marque avec KOL et KOC, hors e-commerce', cells: ['S', 'L', '', '', '', ''] },
      { task: 'Événements offline', cells: ['', 'L', '', '', '', ''] },
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
        body: 'Tout commence par de longs échanges : votre produit, vos marges, votre budget, vos ambitions en Chine. Nous passons aussi votre catégorie au crible, car des marques locales l’occupent sans doute déjà en force.',
        who: ['you', 'us'],
      },
      {
        title: 'Nous rédigeons le plan',
        body: 'Un business plan, et une marque adaptée au consommateur chinois. Le plan arrête aussi votre capacité d’investissement, car tout partenaire sérieux fixe un minimum avant de donner son accord.',
        who: ['us', 'you'],
      },
      {
        title: 'Nous trouvons votre TP ou DP et lui présentons votre marque',
        body: 'C’est l’étape la plus longue, et elle ne souffre aucun raccourci. Nous construisons le dossier de présentation, puis le soumettons aux partenaires de notre réseau qui connaissent votre catégorie et en détiennent déjà l’audience (la recherche commence dans Compass). Ils vous examinent, et les meilleurs prennent leur temps.',
        who: ['us', 'you', 'tp'],
      },
      {
        title: 'Nous réglons la logistique',
        body: 'Si votre TP ou DP ne sait pas expédier en cross-border, nous trouvons un partenaire qui en est capable et qui convient à votre marque. Une erreur à ce stade se paie en délais de livraison, en passages en douane et, tôt ou tard, sur votre marge.',
        who: ['us', 'logistics'],
      },
      {
        title: 'Nous lançons et pilotons le marketing',
        body: 'Les contenus de vos boutiques e-commerce. Des campagnes e-commerce montées avec votre TP ou DP. Les campagnes et la gestion des comptes sur les réseaux sociaux. Et des événements offline, lorsqu’ils valent la dépense.',
        who: ['us', 'tp'],
      },
      {
        title: 'Nous faisons grandir le dispositif avec vous',
        body: 'Lorsque votre partenaire a pris confiance dans votre chaîne d’approvisionnement, il peut proposer de devenir votre distributeur et d’acheter du stock, ce qui est bon signe. Nous pouvons alors intervenir comme distributeur exclusif en ligne, et faire entrer des distributeurs offline lorsque vous visez les magasins et la vente en gros, avant de les piloter pour vous.',
        who: ['us', 'tp', 'offline'],
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
    noteStrong: 'Notre conseil : prévoyez le budget des fêtes dans le business plan, avant de signer quoi que ce soit.',
  },
  hire: {
    eyebrow: 'Travailler avec nous',
    h2: 'Un volet, ou l’ensemble',
    lead: 'Confiez-nous la seule recherche de partenaire, ou tout le dispositif. À vous de décider.',
    items: [
      {
        title: 'Recherche de partenaire',
        body: 'Nous trouvons le TP ou DP adapté et lui présentons votre marque. La recherche commence dans Compass, notre base de TP, de DP et de distributeurs rencontrés en personne.',
        cta: 'Nos critères',
      },
      {
        title: 'Marketing e-commerce',
        body: 'Nous rédigeons le plan, localisons la marque et pilotons contenus et campagnes aux côtés de votre partenaire, sur les plateformes e-commerce et les réseaux sociaux, avec des événements offline en complément.',
        cta: 'Ce que nous pilotons',
      },
      {
        title: 'Distribution exclusive en ligne',
        body: 'Lorsque le plan le justifie, nous devenons votre distributeur exclusif pour la vente en ligne en Chine.',
        cta: 'Nous en parler',
      },
      {
        title: 'Recherche de distributeurs offline',
        body: 'Nous trouvons les distributeurs qui placent votre marque en magasin et dans la vente en gros.',
        cta: 'Notre méthode de sélection',
      },
    ],
  },
  interludeFaq: 'Vous êtes encore là ? Tant mieux. C’est ici que la plupart des lecteurs arrivent directement.',
  faq: {
    eyebrow: 'Tarifs et FAQ',
    h2: 'Les premières questions des marques',
    fresh: 'Dernière révision : 21 septembre 2026.',
    ours: {
      q: 'Comment êtes-vous rémunérés ?',
      a: 'La recherche de partenaire fait l’objet d’un forfait. Le marketing e-commerce, la gestion de canal et les réseaux sociaux se facturent au mois ou au projet, selon le périmètre. Comme distributeur exclusif, nous prenons une marge sur les produits, convenue dès le départ. Nous chiffrons après un premier échange, une fois votre catégorie et le périmètre connus.',
      modes: [
        { label: 'Recherche de partenaire', value: 'Forfait projet' },
        { label: 'Marketing et gestion de canal', value: 'Honoraires mensuels ou projet' },
        { label: 'Distribution exclusive', value: 'Marge sur les produits' },
      ],
    },
    tp: {
      q: 'Combien facture un TP ou un DP ?',
      a: 'En général, deux étages. Des honoraires mensuels fixes par boutique, souvent de 30 000 à 80 000 RMB selon le périmètre, auxquels s’ajoute une commission sur les ventes nettes, le plus souvent de 5 à 12 %. La mise en place, la production de contenus et le média se facturent à part. Ces fourchettes, courantes pour un TP, ont été révisées en septembre 2026. Sur Douyin, un DP facture selon la même logique. Notre calculateur de coûts Douyin en donne une première estimation.',
      html: 'En général, deux étages. Des honoraires mensuels fixes par boutique, souvent de 30 000 à 80 000 RMB selon le périmètre, auxquels s’ajoute une commission sur les ventes nettes, le plus souvent de 5 à 12 %. La mise en place, la production de contenus et le média se facturent à part. Ces fourchettes, courantes pour un TP, ont été révisées en septembre 2026. Sur Douyin, un DP facture selon la même logique. Notre <a href="/tools/douyin-cost-calculator">calculateur de coûts Douyin</a> en donne une première estimation.',
      figures: [
        { value: '30 000 à 80 000 RMB', label: 'd’honoraires mensuels fixes par boutique' },
        { value: '5 à 12 %', label: 'de commission sur les ventes nettes' },
      ],
    },
    items: [
      {
        q: 'Pourquoi n’avez-vous pas votre propre équipe TP ou DP ?',
        a: 'Parce qu’elle fausserait nos conseils. Sans équipe boutique à faire tourner, nous pouvons recommander le partenaire qui convient réellement à votre marque.',
      },
      {
        q: 'Peut-on vous confier uniquement la recherche de partenaire ?',
        a: 'Oui. Vous pourrez ajouter le marketing e-commerce plus tard, ou faire de nous votre distributeur exclusif en ligne.',
      },
      {
        q: 'Le TP ou le DP achètera-t-il notre stock ?',
        a: 'En général, non. Les TP et les DP sont des prestataires de services, et la plupart ne détiennent jamais votre stock. Certains deviennent distributeurs par la suite, une fois votre chaîne d’approvisionnement comprise et votre niveau d’investissement mesuré. Prévoyez d’abord au moins un an de prestations.',
      },
      {
        q: 'Quel investissement un partenaire nous demandera-t-il ?',
        a: 'Tout dépend de la catégorie et du partenaire. Un TP ou un DP sérieux examine votre marque, puis annonce le minimum qu’il juge raisonnable. Nous vous aidons à arrêter votre propre chiffre dans le business plan, avant cette discussion. Pour une première estimation, essayez nos calculateurs de coûts Tmall Global, JD Worldwide et Douyin.',
        html: 'Tout dépend de la catégorie et du partenaire. Un TP ou un DP sérieux examine votre marque, puis annonce le minimum qu’il juge raisonnable. Nous vous aidons à arrêter votre propre chiffre dans le business plan, avant cette discussion. Pour une première estimation, essayez nos calculateurs de coûts <a href="/tools/tmall-global-setup-and-run">Tmall Global</a>, <a href="/tools/jd-worldwide-setup-and-run">JD Worldwide</a> et <a href="/tools/douyin-cost-calculator">Douyin</a>.',
      },
      {
        q: 'Vendez-vous pour nous dans le commerce physique ?',
        a: 'Pas comme agent commercial. C’est le distributeur offline qui place votre marque en magasin et dans la vente en gros. Nous lui présentons la marque, négocions le contrat à vos côtés, puis le pilotons au quotidien : contenus, campagnes et suivi de la relation.',
      },
      {
        q: 'Qui prend en charge la logistique ?',
        a: 'Votre TP ou DP, s’il gère la logistique cross-border. Sinon, un partenaire logistique que nous trouvons pour vous.',
      },
    ],
  },
  cta: {
    eyebrow: 'Prochaine étape',
    h2: 'Dites-nous ce que vous vendez, nous vous dirons quels partenaires méritent d’être sollicités.',
    body: 'Un membre senior de l’équipe vous répond sous un jour ouvré. Vous pouvez aussi commencer par explorer : notre base de partenaires est en libre consultation.',
    primary: 'Nous contacter',
    secondary: 'Explorer Compass',
  },
};

export default copy;
