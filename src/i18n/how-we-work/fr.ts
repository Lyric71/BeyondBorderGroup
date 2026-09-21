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
    { id: 'our-role', label: 'Notre rôle' },
    { id: 'who-does-what', label: 'Qui fait quoi' },
    { id: 'why', label: 'Pourquoi' },
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
    lead: 'La plupart des marques étrangères présentes en Chine vendent par l’intermédiaire d’un TP (partenaire opérateur) sur Tmall et JD, ou d’un DP (Douyin Partner) sur Douyin. Dans les deux cas, c’est le partenaire qui tient la boutique. Nous n’avons pas d’équipe TP ou DP. Notre métier : repérer celui qui doit tenir la vôtre, puis vous ouvrir sa porte. Nous construisons ensuite la demande.',
    ctaPrimary: 'Parlons-en',
    ctaSecondary: 'Nos raisons',
    proof: [
      { count: 15, suffix: '+', value: '15+', label: 'ans sur Tmall et JD' },
      { count: 200, suffix: '+', value: '200+', label: 'lancements de marques' },
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
    lead: 'Un lancement en Chine réunit en général six acteurs. Voici ce qui revient à chacun.',
    sideOurs: 'De votre côté',
    sideMarket: 'Côté marché',
    parties: {
      you: {
        name: 'Vous, la marque',
        body: 'La marque et le produit vous appartiennent, tout comme la chaîne d’approvisionnement qui les porte. Vous fixez le budget et signez avec le partenaire.',
      },
      us: {
        name: 'Nous',
        body: 'Nous rédigeons le plan et trouvons votre TP ou DP. Nous lui présentons ensuite votre marque, puis pilotons votre marketing e-commerce à ses côtés. Lorsque la situation s’y prête, nous devenons aussi votre distributeur exclusif en ligne.',
      },
      tp: {
        name: 'Votre TP ou DP',
        body: 'C’est lui qui fait tourner vos boutiques au quotidien, service client compris. Le TP opère sur Tmall et JD, le DP sur Douyin. Nous bâtissons les campagnes avec lui. Certains partenaires finissent par acheter du stock, jamais au démarrage.',
      },
      logistics: {
        name: 'Partenaire logistique',
        body: 'Il n’entre en jeu que si votre TP ou DP ne sait pas expédier en cross-border. Nous allons alors chercher celui qui convient à votre marque.',
      },
      online: {
        name: 'Distributeurs en ligne',
        hint: 'JD, Tmall Supermarket, Hema, etc.',
        body: 'Ils achètent votre stock et le revendent sur leurs propres canaux : la vente en propre de JD, Tmall Supermarket, Hema et leurs semblables. Nous repérons le bon interlocuteur et lui présentons votre marque. Il nous arrive aussi d’endosser ce rôle, comme distributeur exclusif en ligne.',
      },
      offline: {
        name: 'Distributeurs offline',
        body: 'Ils placent votre marque en magasin et dans la vente en gros. Nous les trouvons pour vous, sans jamais intervenir nous-mêmes comme agent commercial sur ce terrain.',
      },
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
      offline: 'Distributeurs offline',
    },
    rows: [
      { task: 'Marque, produit et chaîne d’approvisionnement', cells: ['L', '', '', '', ''] },
      { task: 'Budget et niveau d’investissement', cells: ['L', 'S', '', '', ''] },
      { task: 'Business plan', cells: ['S', 'L', '', '', ''] },
      { task: 'Localisation de la marque', cells: ['S', 'L', '', '', ''] },
      { task: 'Recherche du TP ou DP et présentation de la marque', cells: ['S', 'L', '', '', ''] },
      { task: 'Choix du partenaire et signature', cells: ['L', 'S', '', '', ''] },
      { task: 'Exploitation des boutiques et service client', cells: ['', '', 'L', '', ''] },
      { task: 'Contenus des boutiques e-commerce', cells: ['', 'L', 'S', '', ''] },
      { task: 'Campagnes e-commerce', cells: ['', 'L', 'L', '', ''] },
      { task: 'Campagnes sur les réseaux sociaux et gestion des comptes', cells: ['', 'L', '', '', ''] },
      { task: 'Événements offline', cells: ['', 'L', '', '', ''] },
      { task: 'Logistique cross-border', cells: ['', 'Trouve le partenaire', 'S’il est équipé', 'À défaut', ''] },
      { task: 'Magasins et vente en gros', cells: ['', 'Les trouve', '', '', 'L'] },
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
        body: 'Lorsque votre partenaire a pris confiance dans votre chaîne d’approvisionnement, il peut proposer de devenir votre distributeur et d’acheter du stock, ce qui est bon signe. Nous pouvons alors intervenir comme distributeur exclusif en ligne, et faire entrer des distributeurs offline lorsque vous visez les magasins et la vente en gros.',
        who: ['us', 'tp', 'offline'],
      },
    ],
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
    fresh: 'Dernière révision : 19 septembre 2026.',
    ours: {
      q: 'Comment êtes-vous rémunérés ?',
      a: 'La recherche de partenaire fait l’objet d’un forfait. Le marketing e-commerce se facture au mois ou au projet, selon le périmètre. Comme distributeur exclusif, nous prenons une marge sur les produits, convenue dès le départ. Nous chiffrons après un premier échange, une fois votre catégorie et le périmètre connus.',
      modes: [
        { label: 'Recherche de partenaire', value: 'Forfait projet' },
        { label: 'Marketing e-commerce', value: 'Honoraires mensuels ou projet' },
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
        a: 'Non. Nous n’intervenons jamais comme agent commercial sur les canaux offline. Nous trouvons les bons distributeurs, et ce sont eux qui placent votre marque en magasin et dans la vente en gros.',
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
