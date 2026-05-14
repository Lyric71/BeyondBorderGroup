$ErrorActionPreference = 'Stop'
$file = "c:\Users\cyril\Project\BeyondBorderGroup\src\pages\fr\entrer-en-chine\marque-et-localisation.astro"
$content = [System.IO.File]::ReadAllText($file)

$pairs = @()

$old = @"
    h: 'Comprendre le consommateur chinois',
    body:
      "Le consommateur chinois ne se résume pas à un public unique. Les goûts varient d'une ville à l'autre, d'une génération à l'autre, d'une plateforme à l'autre. Nous étudions ces nuances en amont, avant de poser la première pierre de la marque.",
"@
$new = @"
    h: 'Cerner le consommateur chinois',
    body:
      "Le consommateur chinois ne forme pas un public homogène. Les habitudes d'achat se déplacent d'une métropole à la suivante, divergent selon les générations, s'inversent souvent d'une plateforme à sa rivale. Ces écarts s'analysent en amont, avant que la moindre brique de marque ne soit posée.",
"@
$pairs += ,@($old, $new)

$old = @"
    h: 'Trouver le bon nom chinois',
    body:
      "La plupart des consommateurs chinois ne lisent pas les langues étrangères. Un nom réussi se prononce sans effort et véhicule une connotation flatteuse. Un nom maladroit plafonne durablement la croissance, sans rattrapage possible.",
"@
$new = @"
    h: 'Bâtir un nom chinois qui porte',
    body:
      "Une large majorité des acheteurs chinois lit difficilement l'alphabet latin. Un nom efficace se prononce d'instinct et charrie une connotation flatteuse. À l'inverse, un nom mal calibré fige durablement le plafond de croissance, sans véritable possibilité de rattrapage.",
"@
$pairs += ,@($old, $new)

$old = @"
    h: 'Transcréer plutôt que traduire',
    body:
      "Adapter une marque en Chine dépasse largement la question linguistique. Récit, image, expérience: chaque dimension doit épouser les codes locaux. Le résultat se lit comme natif, jamais comme une importation.",
"@
$new = @"
    h: 'Transcréer, plutôt que traduire',
    body:
      "Adapter une marque en Chine dépasse de très loin la question linguistique. Récit, univers visuel et parcours d'achat doivent épouser les codes locaux jusque dans le détail. Le résultat se lit alors comme une marque née sur place, et non comme un import maquillé à la hâte.",
"@
$pairs += ,@($old, $new)

# Promises
$old = @"
    title: "Une recherche qui façonne la marque",
    desc: "Données catégorielles, études consommateurs et observation des plateformes alimentent la stratégie. Aucune décision ne relève de la seule intuition.",
"@
$new = @"
    title: "Une recherche qui structure la marque",
    desc: "Données sectorielles, études consommateurs et fonctionnement réel des plateformes irriguent chaque arbitrage stratégique. Aucune ligne de la marque ne tient à la seule intuition.",
"@
$pairs += ,@($old, $new)

$old = @"
    title: "Un nom chinois que les acheteurs sauront prononcer",
    desc: "Sélections phonétiques, sémantiques et culturelles, croisées avec le registre des marques et soumises à votre cible avant que la suite ne s'enclenche.",
"@
$new = @"
    title: "Un nom chinois que vos acheteurs prononceront sans hésiter",
    desc: "Présélections phonétiques, sémantiques et culturelles, passées au filtre du registre des marques puis éprouvées auprès du public cible avant que les autres chantiers ne démarrent.",
"@
$pairs += ,@($old, $new)

$old = @"
    title: "Des supports prêts pour chaque point de contact",
    desc: "Packaging, photographie, vidéo, social et retail, pensés en Chine pour Tmall, Douyin, RED et la presse. Aucune adaptation tardive.",
"@
$new = @"
    title: "Des supports calibrés pour chaque point de contact",
    desc: "Packaging, photographie, vidéo, contenus sociaux et matériel retail, conçus sur place et taillés d'emblée pour Tmall, Douyin, Xiaohongshu et les relations presse. Aucune adaptation rattrapée à la dernière minute.",
"@
$pairs += ,@($old, $new)

# Services
$old = @"
    desc: "Nous cartographions votre catégorie en Chine, repérons les espaces que vos concurrents laissent libres et y installons la marque. La décision qui détermine toutes les suivantes.",
    points: [
      "Cartographie concurrentielle de votre catégorie",
      "Analyse des segments et territoires à conquérir",
      "Un positionnement net, formulé pour le marché chinois",
      "Une architecture de messages exploitable au quotidien par vos équipes",
    ],
"@
$new = @"
    desc: "Cartographie de la catégorie sur le marché chinois, repérage du territoire que la concurrence laisse vacant, installation de la marque sur cette zone. La décision qui commande toutes les suivantes.",
    points: [
      "Cartographie concurrentielle sur l'ensemble de la catégorie",
      "Lecture des segments et des territoires à conquérir",
      "Positionnement net, formulé pour le marché chinois",
      "Architecture de messages exploitable au quotidien par les équipes en place",
    ],
"@
$pairs += ,@($old, $new)

$old = @"
    desc: "Un nom chinois bien choisi favorise la reconnaissance, la mémorisation et le bouche-à-oreille. Mal choisi, il génère une friction à chaque tentative de prononciation. Nous composons des noms qui résistent à l'épreuve linguistique, culturelle et commerciale.",
    points: [
      "Présélections phonétiques, sémantiques et culturelles",
      "Vérification de disponibilité au registre des marques, classe par classe",
      "Tests consommateurs dans les villes ciblées",
      "Un nom qui traverse le packaging, la recherche et la voix sans se déformer",
    ],
"@
$new = @"
    desc: "Un bon nom chinois facilite la reconnaissance et alimente le bouche-à-oreille. Mal calibré, il oppose une friction supplémentaire à chaque essai de prononciation. Nos propositions tiennent au plan sonore comme au plan culturel, et passent l'examen du registre des marques avant toute mise en avant.",
    points: [
      "Présélections croisant sonorité, sémantique et références culturelles",
      "Vérification de disponibilité auprès du registre des marques, classe par classe",
      "Tests qualitatifs auprès du public cible dans les villes visées",
      "Un nom qui tient à l'écrit, à la recherche et à l'oral, sans déformation",
    ],
"@
$pairs += ,@($old, $new)

$old = @"
    desc: "Logo, couleur, typographie, composition: nous bâtissons un système visuel cohérent, pensé pour la Chine, et le consignons dans une charte que vos équipes et vos partenaires appliquent sans interprétation.",
    points: [
      "Système de logo conçu pour les plateformes et le packaging chinois",
      "Palettes chromatiques et systèmes typographiques calibrés pour le contexte local",
      "Charte de marque et standards de design destinés aux partenaires et aux agences",
      "Gabarits pour le social, l'eCommerce et le offline",
    ],
"@
$new = @"
    desc: "Logo, palette, typographie, composition. Le système visuel se conçoit pour la Chine, puis se consigne dans une charte que les équipes internes comme les partenaires appliquent sans avoir à interpréter.",
    points: [
      "Système de logo pensé pour les plateformes et le packaging chinois",
      "Palettes chromatiques et choix typographiques ajustés au contexte local",
      "Charte de marque et standards de design destinés aux partenaires et aux agences",
      "Modèles prêts à l'emploi pour le social, l'e-commerce et le retail physique",
    ],
"@
$pairs += ,@($old, $new)

$old = @"
    desc: "Packaging, vidéo, photographie, design d'espace: l'arsenal nécessaire à la marque pour exister en Chine, produit sur place pour le marché chinois et calibré pour Tmall, Douyin, RED, le retail et la presse.",
    points: [
      "Packaging calibré pour le retail et l'eCommerce chinois",
      "Photographie et vidéo de marque produites en Chine",
      "Architecture de stands, de pop-up et de points de vente",
      "Kits créatifs prêts à l'emploi pour le social et les KOL",
    ],
"@
$new = @"
    desc: "Packaging, vidéo, photographie, scénographie. L'ensemble des supports nécessaires à l'existence de la marque sur le terrain chinois, produits sur place et calibrés d'emblée pour Tmall, Douyin, Xiaohongshu, la distribution physique et les relations presse.",
    points: [
      "Packaging ajusté aux contraintes du retail et de l'e-commerce chinois",
      "Photographies et films de marque tournés en Chine",
      "Conception de stands, de pop-up stores et de points de vente",
      "Kits créatifs prêts à l'emploi pour les réseaux sociaux et les KOL",
    ],
"@
$pairs += ,@($old, $new)

# Starts
$old = @"
    name: 'Nouveau lancement',
    tag: "Aucune présence en Chine pour l'instant",
    desc: "La marque s'installe en Chine pour la première fois. Son capital s'est construit ailleurs: aucun nom chinois, aucun support local, aucune notoriété sur le terrain.",
    when: "Le produit est défini, le budget arrêté, le lancement prévu dans 6 à 12 mois. Nous bâtissons la marque depuis la stratégie, taillée pour la Chine dès la première ligne.",
    bullets: [
      "Études catégorielles et consommateurs dans les villes visées",
      "Positionnement et architecture de messages rédigés pour le marché chinois",
      "Présélection de noms chinois, marque vérifiée au registre et testée auprès des consommateurs",
      "Identité visuelle aboutie et charte de marque, opérationnelles le jour du lancement",
      "Kit de supports pour le packaging, le social, Tmall, Douyin et RED",
    ],
    pricing: "Forfait projet, calibré selon la catégorie et le nombre de références.",
"@
$new = @"
    name: 'Nouveau lancement',
    tag: "Aucune implantation en Chine à ce jour",
    desc: "Première arrivée sur le marché chinois. La marque dispose d'un capital solide ailleurs, mais ne possède localement ni nom, ni supports adaptés, ni la moindre notoriété de terrain.",
    when: "Le produit est arrêté, l'enveloppe budgétaire validée, le calendrier laisse six à douze mois avant la mise sur le marché. La marque se construit alors depuis la stratégie, façonnée pour la Chine dès la première ligne.",
    bullets: [
      "Études sectorielles et études consommateurs dans les villes visées",
      "Positionnement et architecture de messages rédigés pour le marché chinois",
      "Sélection finale de noms chinois, vérifiés au registre et éprouvés en test consommateur",
      "Identité visuelle aboutie et charte de marque, opérationnelles dès le jour du lancement",
      "Kit de supports calibré pour le packaging, le social, Tmall, Douyin et Xiaohongshu",
    ],
    pricing: "Forfait au projet, calibré sur la catégorie et le nombre de références.",
"@
$pairs += ,@($old, $new)

$old = @"
    name: 'Refonte',
    tag: 'Vous êtes déjà sur le marché',
    desc: "La marque est installée en Chine depuis plusieurs années. Acheteurs, distribution et nom chinois fonctionnent. Le système visuel a vieilli, les supports ne suivent plus le rythme des plateformes.",
    when: "Vous cherchez à accélérer sur Douyin et RED, votre packaging accuse son âge face aux acteurs locaux, votre boutique Tmall ne dit plus qui vous êtes. Nous remettons l'identité à niveau sans entamer le capital de marque déjà constitué.",
    bullets: [
      "Audit de la marque actuelle au regard de l'état de votre catégorie en Chine",
      "Système visuel rafraîchi, en cohérence avec la marque globale",
      "Packaging et supports de boutique remis aux standards des plateformes actuelles",
      "Charte et gabarits actualisés pour les équipes en marché",
      "Plan de déploiement coordonné, online et offline",
    ],
    pricing: "Forfait projet, plus contenu qu'une refonte intégrale.",
"@
$new = @"
    name: 'Refonte',
    tag: 'Implantation déjà rodée',
    desc: "Plusieurs années sur le marché chinois, une clientèle acquise, une distribution stabilisée, un nom chinois qui produit ses effets. Le système visuel, lui, a pris des rides ; les supports peinent à suivre la cadence des plateformes.",
    when: "L'objectif consiste à accélérer sur Douyin et Xiaohongshu, à retrouver une parité visuelle face à des acteurs locaux dont le packaging a évolué, ou à remettre la boutique Tmall en phase avec la marque d'aujourd'hui. L'identité monte d'un cran sans entamer l'équité de marque déjà constituée.",
    bullets: [
      "Audit de la marque actuelle au regard de la catégorie sur le marché chinois",
      "Système visuel remis à jour, en cohérence avec la marque mondiale",
      "Packaging et supports de boutique réalignés sur les exigences des plateformes",
      "Charte et modèles graphiques actualisés pour les équipes locales",
      "Plan de déploiement coordonné entre digital et points de vente physiques",
    ],
    pricing: "Forfait au projet, plus contenu qu'une refonte intégrale.",
"@
$pairs += ,@($old, $new)

$old = @"
    name: 'Rebranding',
    tag: 'Repartir après un faux pas',
    desc: "Un élément s'est brisé. Nom chinois inadapté, référence culturelle mal calibrée, lancement timide qui n'a jamais trouvé son public. La marque doit repartir sans sacrifier les références et les partenariats qui tiennent encore debout.",
    when: "Vous cherchez une remise à zéro réelle, pas un pansement esthétique. Nous reconstruisons la marque autour de ce qui tient, remplaçons le reste et orchestrons la transition auprès des partenaires, des plateformes et des consommateurs.",
    bullets: [
      "Diagnostic des causes profondes de l'enrayement",
      "Nouveau positionnement, nouveau nom chinois si la situation l'exige, avec recherche d'antériorité",
      "Identité visuelle reconstruite, débarrassée des associations héritées",
      "Supports de transition pour conserver les acheteurs déjà acquis",
      "Plan de communication coordonné entre plateformes, distributeurs et presse",
    ],
    pricing: "Forfait projet, calibré une fois l'audit terminé.",
"@
$new = @"
    name: 'Rebranding',
    tag: 'Reprise après une sortie de route',
    desc: "Quelque chose a cédé. Nom chinois mal calibré, référence culturelle malheureuse, lancement trop discret qui n'a jamais trouvé son public. La marque doit repartir sans sacrifier les références produit ni les partenariats qui tiennent encore debout.",
    when: "Une refonte de fond s'impose, le cataplasme cosmétique ne convient plus. La marque se reconstruit autour de ce qui a survécu, le reste se remplace, la transition se pilote auprès des partenaires, des plateformes et des consommateurs.",
    bullets: [
      "Diagnostic des causes profondes de l'enlisement",
      "Nouveau positionnement et, si la situation l'exige, nouveau nom chinois avec recherche d'antériorité",
      "Identité visuelle refondue pour effacer les associations héritées",
      "Supports de transition pour amener la clientèle existante vers la nouvelle marque",
      "Plan de communication coordonné entre plateformes, distributeurs et relations presse",
    ],
    pricing: "Forfait au projet, calibré au terme de l'audit.",
"@
$pairs += ,@($old, $new)

$old = @"
    name: 'Marque fille',
    tag: 'Nouvelle ligne sous une marque mère',
    desc: "Une marque déjà installée en Chine prépare le lancement d'une nouvelle ligne. Autre catégorie, autre public, autre positionnement de prix, mais une seule maison mère.",
    when: "Il faut une marque fille capable de tenir seule, sans renoncer à l'héritage de la maison mère. Nous définissons l'architecture, nommons la nouvelle ligne et produisons les supports qui lui permettent de jouer dans sa catégorie.",
    bullets: [
      "Audit de l'architecture de marque et stratégie de la marque fille",
      "Naming de la nouvelle ligne, articulé à la marque mère",
      "Système visuel qui signale la filiation sans dupliquer la marque parente",
      "Packaging et supports de lancement pour la gamme de nouvelles références",
      "Plan go-to-market coordonné avec l'équipe de la marque mère",
    ],
    pricing: "Forfait projet, calibré sur le périmètre de la marque fille.",
"@
$new = @"
    name: 'Marque fille',
    tag: 'Nouvelle ligne sous une marque mère',
    desc: "La marque mère a déjà ses repères sur le marché chinois. Il s'agit désormais de lancer une ligne en dessous : catégorie distincte, public distinct, niveau de prix distinct, mais une seule maison.",
    when: "La marque fille doit tenir seule sur ses appuis tout en captant l'équité bâtie par la maison mère. L'architecture est posée, le nom de la nouvelle ligne arrêté, les supports produits pour qu'elle prenne sa place dans sa catégorie.",
    bullets: [
      "Audit de l'architecture de marque et choix d'une stratégie de marque fille",
      "Création du nom de la nouvelle ligne, en filiation lisible avec la marque mère",
      "Système visuel qui signale l'appartenance à la famille sans la décalquer",
      "Packaging et supports de lancement pour la nouvelle gamme de références",
      "Plan de mise sur le marché bâti avec l'équipe de la marque mère",
    ],
    pricing: "Forfait au projet, calibré sur l'ambition fixée à la marque fille.",
"@
$pairs += ,@($old, $new)

# Steps
$old = @"
    title: 'Découvrir',
    desc: "Avant d'écrire la moindre ligne, nous écoutons. Études consommateurs, cartographie de la catégorie, analyse concurrentielle et lecture sans complaisance de la place que la marque occupe en Chine, comparée à celle qu'elle pourrait revendiquer.",
"@
$new = @"
    title: 'Découvrir',
    desc: "Une phase d'écoute ouvre le chantier. Études consommateurs, cartographie de la catégorie, analyse concurrentielle et lecture sans complaisance de la place qu'occupe la marque en Chine, mise en regard de celle qu'elle pourrait revendiquer.",
"@
$pairs += ,@($old, $new)

$old = @"
    title: 'Construire',
    desc: "Positionnement, nom chinois, identité visuelle et charte de marque: le socle stratégique, rédigé et dessiné pour le marché chinois, avec une marque vérifiée au registre avant remise des livrables.",
"@
$new = @"
    title: 'Construire',
    desc: "Positionnement, nom chinois, identité visuelle et charte. Le socle stratégique se rédige et se dessine pour le marché chinois, avec dépôt vérifié au registre des marques avant la remise des livrables finaux.",
"@
$pairs += ,@($old, $new)

$old = @"
    title: 'Activer',
    desc: "Packaging, photographie, vidéo et kits créatifs calibrés pour les plateformes. Tout ce qu'il faut à vos équipes et à vos partenaires pour lancer sur Tmall, Douyin, RED, le retail et la presse d'une seule voix.",
"@
$new = @"
    title: 'Activer',
    desc: "Packaging, photographie, films et kits créatifs calibrés pour les plateformes. Le dispositif passe alors entre les mains des équipes internes et des partenaires, qui activent Tmall, Douyin, Xiaohongshu, la distribution physique et les relations presse d'une seule voix.",
"@
$pairs += ,@($old, $new)

# hubPoints
$old = @"
  "Produire. Image, vidéo, prise de vue réelle, 3D et motion design, à l'échelle industrielle.",
  "Plateforme. Modèles entraînés sur l'univers de marque, hébergés sur serveurs GPU dédiés.",
  "Conseiller. Stratégie, transcréation et formation des équipes à l'usage des outils d'IA.",
"@
$new = @"
  "Produire. Image, vidéo, prise de vue réelle, 3D et motion design, à l'échelle industrielle.",
  "Outiller. Modèles d'IA entraînés sur l'univers de marque, hébergés sur des serveurs GPU dédiés.",
  "Accompagner. Stratégie, transcréation et formation des équipes à l'usage des nouveaux outils.",
"@
$pairs += ,@($old, $new)

# FAQs - polish the ones that still read as too spoken
$old = @"
    q: "Pourquoi localiser la marque plutôt que se contenter d'une traduction ?",
    a: "La traduction déplace les mots; la localisation déplace la marque. Le consommateur chinois arrive avec ses propres références, ses codes visuels et ses plateformes. Privée de ces signaux, une marque étrangère paraît polie mais hors sujet. Le travail consiste à préserver ce qui fait votre singularité, puis à reconstruire le reste, jusqu'à ce qu'un acheteur chinois la reconnaisse comme sienne.",
"@
$new = @"
    q: "Pourquoi localiser la marque, plutôt que se contenter d'une traduction ?",
    a: "Traduire déplace des mots ; localiser déplace une marque. Le consommateur chinois arrive avec ses propres références, ses codes visuels et ses plateformes. Privée de ces signaux, une marque étrangère paraît courtoise mais à côté du sujet. L'enjeu consiste à préserver la singularité du capital de marque, puis à reconstruire le reste jusqu'à ce qu'un acheteur chinois la regarde comme sienne.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Marque étrangère ou marque locale: vers quel positionnement pencher ?",
    a: "Ni l'un, ni l'autre, en réalité. Les marques étrangères apportent un signal de qualité et de prestige; les marques locales offrent la fluidité culturelle et un rapport prix-valeur affûté. Les gagnantes empruntent aux deux. Conservez le récit de qualité et d'héritage, bâtissez la fluidité culturelle par-dessus: la marque doit sonner locale, même quand le logo ne l'est pas.",
"@
$new = @"
    q: "Marque étrangère ou marque locale : vers quel positionnement pencher ?",
    a: "Ni tout à fait l'un, ni tout à fait l'autre. La marque étrangère adresse un signal de qualité et de prestige ; la marque locale livre une aisance culturelle et un rapport qualité-prix imbattable. Les acteurs qui s'imposent empruntent aux deux registres : ils conservent le récit d'origine et d'exigence, puis greffent par-dessus la fluidité culturelle nécessaire pour que la marque sonne locale, même quand le logo, lui, ne l'est pas.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Qu'est-ce qui fait la réussite d'un nom de marque chinois ?",
    a: "Trois qualités: une prononciation aisée, une mémorisation immédiate et un sens qui flatte le produit, à défaut de le servir. Si un consommateur peut le lire à voix haute dès la première rencontre, la marque tient une chance. Dans le cas contraire, l'entreprise passera son temps à se justifier.",
"@
$new = @"
    q: "Qu'est-ce qui distingue un nom chinois qui fonctionne d'un autre qui s'enlise ?",
    a: "Trois qualités le séparent. Une prononciation aisée, une mémorisation immédiate, un sens qui flatte le produit ou, à tout le moins, ne lui fait pas tort. Lorsqu'un consommateur parvient à le lire à voix haute dès la première exposition, la marque tient une chance ; dans le cas contraire, elle consacrera l'essentiel de son temps à se justifier.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Et si le nom de la marque ne se traduit tout simplement pas ?",
    a: "Cas de figure habituel plutôt qu'exception. La plupart des noms étrangers sonnent maladroits ou véhiculent un sens fâcheux dès qu'on les force en mandarin. La voie pertinente consiste à créer un nom chinois autonome, doté de sa propre logique, de sa sonorité et de son récit, qui coexiste avec la marque latine. Apple a choisi 苹果, BMW a choisi 宝马. La piste reste ouverte à toutes les marques étrangères.",
"@
$new = @"
    q: "Et si le nom de la marque ne se prête pas du tout à la traduction ?",
    a: "Cas de figure habituel plutôt qu'exception. La majorité des noms étrangers sonnent gauchement, voire portent un sens malheureux dès qu'on les force en mandarin. La voie pertinente consiste à créer un nom chinois autonome, doté de sa logique propre, de sa sonorité et de son récit, qui cohabite avec la marque latine. Apple a choisi 苹果, BMW a choisi 宝马. La même piste reste ouverte à toute marque étrangère.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Faut-il garder le nom latin, le nom chinois, ou les deux ?",
    a: "Les deux, dans la quasi-totalité des cas. Le nom latin protège la marque globale; le nom chinois accomplit le travail quotidien sur le marché. Sur le packaging, la signalétique et la recherche, le nom chinois prend la tête. Sur la communication corporate et les signaux de positionnement premium, le nom latin reprend la main.",
"@
$new = @"
    q: "Conserver le nom latin, le nom chinois, ou les deux ?",
    a: "Les deux, dans la quasi-totalité des cas. Le nom latin protège la marque à l'international ; le nom chinois assume le travail quotidien sur le marché. Le second prend la tête sur le packaging, la signalétique et la barre de recherche. Le premier reprend la main dans la communication corporate et sur les signaux de positionnement premium.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Qu'est-ce qui fait qu'un logo fonctionne en Chine, au-delà de l'esthétique ?",
    a: "Il doit rester lisible en vignette, sur un avatar WeChat de 1,5 cm, sur un packaging coincé en rayon d'une ville de rang 3, sur un sticker Douyin. Il doit survivre à une impression médiocre. Il doit porter un sens, même privé de couleur. La plupart des logos étrangers passent le premier test et échouent aux trois suivants.",
"@
$new = @"
    q: "Qu'est-ce qui rend un logo efficace en Chine, au-delà de la simple esthétique ?",
    a: "Il doit rester lisible en vignette, sur un avatar WeChat de quinze millimètres, sur un packaging serré en rayon d'une ville de rang 3, sur un sticker Douyin. Il doit résister à une impression de qualité moyenne. Il doit conserver son sens, même privé de couleur. La plupart des logos étrangers franchissent la première épreuve et trébuchent sur les trois autres.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Où les marques étrangères ratent-elles le plus souvent leur identité visuelle en Chine ?",
    a: "Au moment où elles livrent leur charte globale en l'état. La palette pensée pour le retail européen perd sa saturation sous les néons d'un supermarché chinois. La typographie qui respire en imprimé s'asphyxie à l'écran. La photographie héros conçue pour l'affichage urbain refuse le recadrage vertical. L'adaptation du système ne relève pas de l'option.",
"@
$new = @"
    q: "Où les marques étrangères trébuchent-elles le plus souvent sur leur identité visuelle en Chine ?",
    a: "Au moment précis où elles déploient leur charte mondiale en l'état. La palette pensée pour la distribution européenne perd sa saturation sous les néons d'un supermarché chinois. La typographie qui respire à l'imprimé s'asphyxie sur écran mobile. La photographie principale conçue pour l'affichage urbain refuse le recadrage vertical. L'adaptation du système n'a rien d'optionnel.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Comment échapper au cliché des couleurs porte-bonheur ?",
    a: "En les convoquant avec intention, jamais par défaut. Le rouge fonctionne lorsqu'il s'appuie sur une raison; l'or fonctionne lorsqu'il gagne sa place. La version paresseuse aligne tout en rouge et or au moment du Nouvel An. La version solide active un seul code culturel avec finesse et laisse le reste de l'identité accomplir son propre travail.",
"@
$new = @"
    q: "Comment éviter le cliché du rouge et de l'or à toutes les sauces ?",
    a: "En les convoquant à dessein, jamais par réflexe. Le rouge fonctionne lorsqu'un argument le justifie ; l'or trouve sa place lorsqu'il la gagne. La version paresseuse aligne tout en rouge et or au moment du Nouvel An chinois. La version aboutie active un seul code culturel avec retenue et laisse le reste de l'identité accomplir son propre travail.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Le packaging global peut-il s'installer en Chine tel quel ?",
    a: "Le flacon, parfois. Le graphisme, rarement. Le packaging chinois obéit à ses propres conventions: claims de face, codes ingrédients, pictogrammes réglementaires, hiérarchie des langues, formats de rayon différents des vôtres. Les graphismes doivent être adaptés avant le lancement. C'est la pièce de marque la plus visible qu'un consommateur chinois aura jamais en main.",
"@
$new = @"
    q: "Le packaging mondial peut-il s'importer tel quel en Chine ?",
    a: "Le contenant, parfois. Le graphisme, rarement. Le packaging chinois obéit à ses propres conventions : promesses produit en façade, codes d'ingrédients spécifiques, pictogrammes réglementaires, hiérarchie des langues, formats de rayon différents des nôtres. Les visuels doivent être retravaillés avant la mise en distribution. Reste, après tout, l'élément de marque le plus tangible qu'un consommateur chinois tiendra jamais entre les mains.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Comment maintenir la cohérence de marque entre Tmall, Douyin, RED et le offline ?",
    a: "Par une charte de marque chinoise, distincte de la charte globale. Elle décrit la marque dans les formats que les plateformes locales utilisent vraiment, avec gabarits, contre-exemples et notes de ton. Elle est ensuite remise à chaque partenaire qui touche à la marque: TP, agence KOL, designer retail, agence de presse. La cohérence est un problème de logistique qui se déguise en problème créatif.",
"@
$new = @"
    q: "Comment tenir la cohérence de la marque entre Tmall, Douyin, Xiaohongshu et le point de vente physique ?",
    a: "Par une charte de marque chinoise, distincte de la charte mondiale. Elle décrit la marque dans les formats que les plateformes utilisent réellement, modèles à l'appui, avec contre-exemples et notes de ton. Elle se transmet ensuite à chaque partenaire qui touche à la marque : TP, agence d'influence, designer retail, attaché de presse. La cohérence est un sujet de logistique habillé en sujet créatif.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Peut-on réutiliser les photographies de marque globales ?",
    a: "Une partie, après retouche. Les images d'ambiance et de lifestyle voyagent mal: casting, intérieurs et gestuelle sonnent étrangers. La photographie produit, elle, voyage correctement si l'éclairage et les surfaces respectent les standards des plateformes. Une prise de vue à Shanghai ou Shenzhen reste indispensable, au minimum pour la campagne héros annuelle.",
"@
$new = @"
    q: "Peut-on réemployer les photographies de marque mondiales ?",
    a: "Une partie, à condition d'accepter la retouche. Les images d'ambiance et de lifestyle voyagent mal : casting, intérieurs et gestuelle restent étrangers à l'œil chinois. La photographie produit, elle, traverse les frontières sans difficulté dès lors que la lumière et les matières respectent les normes des plateformes. Une production sur place, à Shanghai ou à Shenzhen, demeure incontournable, au minimum pour la campagne phare annuelle.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Combien de temps demande une construction de marque complète en Chine ?",
    a: "Stratégie et naming, 4 à 6 semaines. Identité visuelle, 6 à 8. Supports incluant packaging et création clé, 8 à 12. Prévoir un mois supplémentaire pour les recherches d'antériorité, les tests consommateurs et les itérations. De bout en bout, 3 à 5 mois constituent un calendrier honnête. Tout prestataire qui promet 6 semaines vend un gabarit déguisé.",
"@
$new = @"
    q: "Combien de temps demande une construction de marque complète en Chine ?",
    a: "Quatre à six semaines pour la stratégie et le naming. Six à huit pour l'identité visuelle. Huit à douze pour les supports, packaging et création principale compris. À cela s'ajoute un mois de marge pour les recherches d'antériorité, les tests consommateurs et les itérations. De bout en bout, trois à cinq mois composent un calendrier honnête. Tout prestataire qui promet six semaines vend un gabarit recyclé.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "À quelle fréquence faut-il refondre la marque ?",
    a: "Refonte majeure tous les 4 à 6 ans, rafraîchissement léger tous les 2. Le marché chinois évolue vite: tendances visuelles, interfaces des plateformes et références consommateurs se déplacent sur des cycles plus courts qu'en Europe ou aux États-Unis. Un rendez-vous annuel s'impose, en complément de la grande remise à plat quinquennale.",
"@
$new = @"
    q: "À quelle fréquence convient-il de refondre la marque ?",
    a: "Refonte majeure tous les quatre à six ans, rafraîchissement léger tous les deux. Le marché chinois avance vite : tendances graphiques, interfaces des plateformes et imaginaire des consommateurs se renouvellent sur des cycles plus courts qu'en Europe ou qu'aux États-Unis. Un rendez-vous annuel s'impose, en complément de la grande remise à plat quinquennale.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "À qui appartient la charte: à l'équipe ou à l'agence ?",
    a: "À l'annonceur, dans tous les cas. L'agence la construit; l'équipe interne en demeure propriétaire. La clause se rédige au contrat dès le premier jour, avec la propriété des fichiers de production, des fichiers de travail et des licences de polices. Certaines marques se sont retrouvées exclues de leurs propres supports faute d'avoir verrouillé ce point. Mieux vaut anticiper la situation.",
"@
$new = @"
    q: "À qui appartient la charte : à l'annonceur ou à l'agence ?",
    a: "À l'annonceur, sans exception. L'agence la construit ; l'équipe interne en détient la propriété. La clause se rédige au contrat dès la signature, avec la propriété des fichiers livrés, celle des fichiers de travail et les licences typographiques. Trop de marques se sont retrouvées verrouillées en dehors de leurs propres supports faute d'avoir cadré ce point. Mieux vaut anticiper.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Combien coûte vraiment une construction de marque complète en Chine ?",
    a: "Une fourchette plutôt qu'un chiffre. Une construction ciblée (stratégie, nom chinois, identité rafraîchie, packaging pour une gamme de références) se situe le plus souvent entre 30 000 et 80 000 USD. Un programme multi-références incluant photographie et vidéo originales double fréquemment ce montant. En dessous de 20 000 USD, l'offre relève du gabarit recyclé.",
"@
$new = @"
    q: "Combien coûte, en réalité, une construction de marque complète en Chine ?",
    a: "Une fourchette plutôt qu'un chiffre net. Une construction ciblée (stratégie, nom chinois, identité rafraîchie, packaging pour une gamme limitée de références) s'établit le plus souvent entre 30 000 et 80 000 USD. Un programme étendu, plurigammes, avec production originale de photographies et de films, double fréquemment ce montant. En dessous de 20 000 USD, l'offre relève du gabarit recyclé.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Quelle répartition de budget entre stratégie, identité et supports ?",
    a: "Environ 25 % pour la stratégie et le naming, 30 % pour l'identité, 45 % pour les supports. La plupart des marques étrangères sous-pondèrent ce dernier poste et se retrouvent avec un beau logo dépourvu de support. Mieux vaut partir des supports: l'identité prend ensuite forme autour de ce qui sera réellement produit.",
"@
$new = @"
    q: "Comment répartir l'enveloppe entre stratégie, identité et supports ?",
    a: "Un quart de l'enveloppe à la stratégie et au naming, 30 % à l'identité, 45 % aux supports. La plupart des marques étrangères sous-dotent ce dernier poste et se retrouvent avec un beau logo dépourvu de support pour vivre. La logique gagnante consiste à partir des supports : l'identité prend ensuite forme autour de ce qui sera réellement produit.",
"@
$pairs += ,@($old, $new)

$old = @"
    q: "Faut-il déposer le nom chinois sans attendre ?",
    a: "Oui, dès que le nom est arrêté. La Chine fonctionne sur le principe du premier déposant. Des squatteurs surveillent les communiqués de presse et déposent les marques dans la semaine. Le rachat ultérieur d'un nom détourné coûte généralement plus cher que la construction elle-même. Le dépôt se fait en caractères chinois, en alphabet latin et en pinyin, dans les classes où la marque vend et dans les classes adjacentes évidentes.",
"@
$new = @"
    q: "Faut-il déposer le nom chinois au plus tôt ?",
    a: "Oui, dès le jour où le nom est arrêté. La Chine applique la règle du premier déposant. Des spécialistes du dépôt opportuniste surveillent les communiqués de presse et déposent les marques dans la semaine qui suit. Le rachat ultérieur d'un nom détourné coûte généralement davantage que la construction de marque elle-même. Le dépôt se réalise en caractères chinois, en alphabet latin et en pinyin, sur les classes effectivement exploitées comme sur les classes adjacentes évidentes.",
"@
$pairs += ,@($old, $new)

# Phase labels
$old = "const phaseLabels = ['Première phase', 'Deuxième phase', 'Troisième phase'];"
$new = "const phaseLabels = ['Première phase', 'Deuxième phase', 'Troisième phase'];"
$pairs += ,@($old, $new)

# Apply
$report = @()
foreach ($p in $pairs) {
  $o = $p[0] -replace "`r`n", "`n"
  $n = $p[1] -replace "`r`n", "`n"
  $cN = $content -replace "`r`n", "`n"
  if ($cN.Contains($o)) {
    $cN = $cN.Replace($o, $n)
    $content = $cN
    $report += "OK"
  } else {
    $report += "MISS"
  }
}
$report | ForEach-Object { $_ }
Write-Output "---"
# Write file back without BOM, using UTF8 no BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($file, $content, $utf8NoBom)
Write-Output "Done"
