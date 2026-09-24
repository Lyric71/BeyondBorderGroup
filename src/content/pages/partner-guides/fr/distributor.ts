/**
 * /fr/compass/trouver-un-distributeur-en-chine (version française).
 * Requête visée : « comment trouver un distributeur en Chine ».
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'distributor',
  locale: 'fr',
  title: 'Trouver un distributeur en Chine : la méthode | TheChinaPath',
  description:
    'Où chercher un distributeur en Chine, comment écarter les simples négociants en huit vérifications, et quelles clauses fixer avant de signer.',
  crumb: 'Trouver un distributeur en Chine',
  reviewed: '24 septembre 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'Recherche de distributeur',
    rows: [{ text: 'Trouver le bon' }, { text: 'distributeur en Chine', style: 'highlight' }],
    lead: 'Le distributeur à signer vend déjà des produits proches des vôtres aux enseignes que vous visez, et il peut le démontrer chiffres en main. Tout l’enjeu est de le repérer parmi les dizaines de sociétés qui revendiquent le même profil sans en avoir les résultats.',
    image: {
      src: '/Images/compass/channel-offline.webp',
      alt: 'Accroupis devant un rayon de supermarché, un commercial de distributeur et un acheteur contrôlent l’implantation des produits',
    },
    stats: heroStats('ans de rendez-vous avec des distributeurs chinois'),
    primary: 'Recevoir une liste de distributeurs',
    secondary: 'Voir comment fonctionne Compass',
  },

  answer: {
    eyebrow: 'En bref',
    title: 'Privilégiez celui qui vend déjà votre catégorie',
    body: [
      'Un bon distributeur chinois se reconnaît d’abord à ceci : il écoule déjà votre catégorie dans les circuits que vous visez. Reste à le vérifier. Consultez sa licence commerciale, appelez deux des marques qu’il représente, visitez son entrepôt, réclamez ses données de sell-out. À chaque étape, la liste se réduit.',
      'La taille compte moins que la spécialité. Chez un importateur national au catalogue fourni, votre marque ne sera qu’une référence de plus sur la grille tarifaire. Un acteur régional qui place des soins importés chez Watsons depuis six ans mobilisera, lui, une force de vente pour la défendre.',
      'Encore faut-il savoir ce que l’on cherche. En Chine, le terme « distributeur » recouvre des métiers très différents.',
    ],
  },

  role: {
    eyebrow: 'Bien identifier son interlocuteur',
    title: 'Quatre métiers sous une même étiquette',
    intro: 'Tous ces acteurs achètent votre marchandise. La ressemblance s’arrête là.',
    items: [
      {
        name: 'Importateurs',
        body: 'Titulaires des licences d’importation, ils dédouanent la marchandise et apposent l’étiquette en chinois sur vos emballages. Certains vendent. Beaucoup se bornent à faire transiter des cartons, ce qui n’a rien de gênant si vous le savez d’emblée.',
      },
      {
        name: 'Distributeurs nationaux',
        body: 'Présents dans plusieurs régions, ils disposent souvent d’équipes grands comptes qui traitent avec des enseignes comme Sam’s Club ou Ole’. Leur maillage est réel, mais votre marque y dispute l’attention des commerciaux à toutes les autres.',
      },
      {
        name: 'Distributeurs régionaux',
        body: 'Solidement implantés dans une province ou un groupe de villes, ils connaissent chaque acheteur et chaque grossiste. Nombre de couvertures prétendument nationales ne sont en réalité qu’un assemblage de ces acteurs.',
      },
      {
        name: 'Distributeurs en ligne',
        body: 'Ils achètent la marchandise pour la revendre à JD en propre, à Tmall Supermarket et à Hema, ou dans leurs propres boutiques. Leur force tient à leurs relations avec les acheteurs des plateformes et à la rapidité du réassort.',
      },
    ],
  },

  routes: {
    eyebrow: 'Où chercher',
    title: 'Six filières pour trouver des candidats, avec leurs angles morts',
    intro: 'Chacune livre des noms. Nous les avons toutes utilisées un jour ou l’autre, et leur rendement varie du tout au tout.',
    table: {
      headers: ['Filière', 'Ce qu’elle apporte', 'Ses angles morts'],
      rows: [
        [
          'Salons professionnels',
          'Des centaines d’acheteurs croisés en deux ou trois jours : la CIIE à Shanghai chaque novembre, la China Food and Drinks Fair de Chengdu au printemps, le CBE à Shanghai pour la beauté.',
          'Les stands sont tenus par des chargés de développement. Les commerciaux qui porteraient votre marque sont restés au bureau.',
        ],
        [
          'Plateformes B2B (Alibaba.com, 1688)',
          'Des milliers de fiches, classées par catégorie.',
          'Ces sites servent à s’approvisionner en Chine. Usines et négociants y cherchent pour l’essentiel des acheteurs étrangers, soit exactement l’inverse de votre besoin.',
        ],
        [
          'Organismes publics et chambres de commerce',
          'Des contacts présélectionnés et des journées de rendez-vous d’affaires, souvent subventionnées. Business France, GTAI et les chambres de commerce étrangères de Shanghai en proposent.',
          'Les listes font la part belle aux adhérents et aux habitués. Peu d’organismes accompagnent une marque au-delà du premier rendez-vous.',
        ],
        [
          'Bases de données aspirées',
          'Un fichier de mille noms constitué en une matinée.',
          'Rien ne dit quelles catégories ces sociétés vendent vraiment, ni si quelqu’un y décroche encore le téléphone.',
        ],
        [
          'LinkedIn et prospection par e-mail',
          'Un contact direct avec des interlocuteurs identifiés.',
          'Les distributeurs chinois travaillent sur WeChat. Les réponses sont rares, et un accord trop rapide de la part d’un inconnu appelle la prudence.',
        ],
        [
          'Recommandations de marques et d’opérateurs',
          'Le meilleur indicateur qui soit : le témoignage de quelqu’un qui a vu le distributeur travailler.',
          'Presque impossible à obtenir sans introduction. Ce carnet d’adresses se bâtit en des années de rendez-vous, et c’est précisément pourquoi nous avons consigné le nôtre dans Compass.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Avant de signer',
    title: 'Huit vérifications pour distinguer un distributeur d’un simple négociant',
    intro: 'Les six premières se font depuis un bureau, avant même le premier appel. Les deux dernières supposent un rendez-vous, de préférence dans leurs locaux. Si vous ne deviez imprimer qu’un passage de cette page, choisissez ce tableau.',
    table: {
      headers: ['Vérification', 'Réponse sérieuse', 'Signal d’alerte'],
      rows: [
        [
          'Licence commerciale',
          'Une inscription au registre national des entreprises (National Enterprise Credit Information Publicity System), un objet social couvrant l’importation ou le commerce de gros de votre catégorie, et quelques années d’ancienneté.',
          'Une société immatriculée l’an dernier, un capital social dérisoire, ou un objet social qui mêle électronique et vins.',
        ],
        [
          'Contentieux et solvabilité',
          'Un historique vierge sur Qichacha ou Tianyancha, les deux grandes applications de renseignement sur les entreprises, ou quelques litiges commerciaux sans gravité.',
          'Une inscription sur la liste des débiteurs défaillants (失信被执行人), ou une série de procédures engagées par des fournisseurs impayés.',
        ],
        [
          'Autorisations sectorielles',
          'Les autorisations qu’impose votre catégorie, par exemple une licence d’exploitation alimentaire pour l’alimentaire, détenues en propre.',
          '« C’est notre partenaire qui détient la licence. » Votre véritable cocontractant, c’est alors ce partenaire.',
        ],
        [
          'Portefeuille de marques',
          'La liste des marques représentées aujourd’hui, avec deux contacts que vous pouvez appeler.',
          'Des logos prestigieux dans la présentation, et personne à contacter.',
        ],
        [
          'Référencements en magasin',
          'Des grands comptes cités nommément (les grandes enseignes) et les points de vente où votre produit serait présent. Il suffit de pousser la porte pour vérifier.',
          '« Nous couvrons toute la Chine. » Personne ne couvre toute la Chine.',
        ],
        [
          'Présence en ligne',
          'Des boutiques ou des fiches fournisseur sur JD, Tmall ou Douyin, que vous retrouvez sans aide.',
          'Un site internet, un compte WeChat, et aucun canal qui vende réellement.',
        ],
        [
          'Données de sell-out',
          'Des données de sortie de caisse ou d’écoulement (ce qui a réellement quitté les rayons) pour une marque comparable, quitte à en masquer le nom.',
          'Les seuls chiffres de sell-in, autrement dit les achats du distributeur auprès des marques. Une marchandise qui dort en entrepôt n’est pas vendue pour autant.',
        ],
        [
          'L’équipe affectée à votre marque',
          'Des noms, la ville où chacun travaille et la part de son temps qui vous sera consacrée.',
          'Le fondateur mène la présentation, puis un junior que vous ne croiserez jamais se charge du travail.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'Les conditions',
    title: 'Ce qu’il faut régler avant le départ du premier conteneur',
    intro: 'Le distributeur se rémunère sur sa marge : il vous achète la marchandise, puis la revend à la distribution en appliquant son coefficient. Celui-ci varie selon le canal et selon qui assume les droits de référencement, le marketing et le risque de crédit. Comparez donc les offres à l’aune du prix final en rayon. Tout ce qui gravite autour de la marge se négocie, et l’essentiel finit dans le contrat.',
    table: {
      headers: ['Clause', 'Ce qu’il faut prévoir', 'Points de vigilance'],
      rows: [
        [
          'Exclusivité',
          'Par canal et par région, chacune assortie d’un objectif de ventes.',
          'Une exclusivité nationale, tous canaux confondus, dès le premier jour. Elle se concède d’un trait de plume et se récupère à grand-peine.',
        ],
        [
          'Commandes minimales',
          'Une première commande dimensionnée sur un véritable plan de lancement, puis des objectifs trimestriels.',
          'L’absence de tout minimum, qui permet au distributeur de laisser votre marque en sommeil.',
        ],
        [
          'Droits de référencement (进场费)',
          'Qui règle les droits d’entrée et de placement exigés par les enseignes, et selon quelles modalités ils sont récupérés.',
          'Des factures de « soutien au marché » sans plafond, qui apparaissent une fois le produit en rayon.',
        ],
        [
          'Participation marketing',
          'Une clé de répartition du budget, un plan trimestriel et des justificatifs de dépenses.',
          'Un distributeur qui compte sur vous pour tout financer, sans s’engager sur le moindre volume.',
        ],
        [
          'Conditions de paiement',
          'Paiement anticipé ou crédit documentaire pour les premières commandes, puis des délais de paiement une fois la relation éprouvée.',
          'De longs délais de paiement d’emblée, accordés à une société rencontrée sur un salon.',
        ],
        [
          'Marque et enregistrements',
          'Votre marque et vos enregistrements produits à votre nom. Déposez la marque en Chine avant le premier rendez-vous : le pays applique la règle du premier déposant.',
          'Un distributeur qui se propose obligeamment d’enregistrer la marque à votre place. Certains la déposent à leur propre nom.',
        ],
        [
          'Sortie',
          'Une faculté de résiliation en cas d’objectifs manqués, le rachat du stock et le transfert des référencements.',
          'Aucune clause de sortie, ou une clause qui suppose l’accord du distributeur.',
        ],
      ],
    },
    warnColumn: true,
    note: 'Négociez la sortie tant que les relations sont au beau fixe. Les marques qui signent sans objectifs ni clause de sortie consacrent souvent leur deuxième année à négocier leur départ, pendant que le linéaire passe à un concurrent.',
    link: { label: 'Distributeur ou boutique en propre : lire notre comparatif', href: '/insights/china-distributor-vs-own-store' },
  },

  mistakes: {
    eyebrow: 'Les écueils',
    title: 'Pourquoi les contrats de distribution échouent',
    intro: 'Les partenariats de distribution qu’on nous demande de dénouer ont presque tous achoppé sur l’un de ces scénarios, toujours les mêmes. Aucun n’était décelable au premier rendez-vous.',
    image: {
      src: '/Images/compass/problem-pallets.webp',
      alt: 'Des palettes de marchandises importées, filmées et invendues, dans un entrepôt faiblement éclairé',
    },
    items: [
      {
        name: 'Signer avec le plus gros',
        body: 'Le plus gros importateur du salon représente des centaines de marques. La vôtre n’y est qu’une ligne sur une grille tarifaire, et la force de vente pousse ce qui lui rapporte le plus ce trimestre-là.',
      },
      {
        name: 'Se laisser éblouir par la présentation',
        body: 'Une plaquette léchée, tous les logos qu’il faut. Puis dix-huit mois pendant lesquels la marchandise est restée immobile dans l’entrepôt du distributeur, tandis que la fenêtre de lancement se refermait.',
      },
      {
        name: 'Confier la vente à un importateur',
        body: 'L’importateur disposait d’un entrepôt et d’un dossier douanier sans tache, mais d’aucune force de vente. La marchandise est entrée, et elle n’est jamais ressortie.',
      },
    ],
  },

  compass: {
    eyebrow: 'Notre méthode',
    title: 'Nous ne proposons que des distributeurs rencontrés en personne',
    lead: 'Compass est notre base privée de distributeurs, de Tmall Partners, de Douyin Partners et d’importateurs, dans toute la Chine. Chaque société n’y entre qu’après une rencontre en personne et une visite sur site, puis y est classée selon les catégories que nous l’avons vue vendre. Huit catégories grand public sont couvertes : beauté, alimentaire et boissons, mode, maison, bien-être, puériculture, animalerie et compléments alimentaires.',
    steps: compassSteps(
      'Nous interrogeons Compass pour isoler les distributeurs qui vendent déjà votre catégorie. Vous recevez les trois à cinq qui justifient un rendez-vous, chacun accompagné d’une note brève sur ses atouts et ses faiblesses, ainsi que les points sur lesquels peser dans la négociation.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Trouver un distributeur en Chine : vos questions',
    items: [
      {
        q: 'Combien de temps faut-il pour trouver un distributeur en Chine ?',
        a: 'La recherche en elle-même peut être rapide : une liste courte Compass est livrée en général deux à trois semaines après le brief. Rendez-vous, échantillons, enregistrements et négociation du contrat demandent davantage, à un rythme que fixe la catégorie. Dans l’alimentaire et les cosmétiques, les enregistrements doivent précéder la première expédition.',
      },
      {
        q: 'Faut-il accorder une exclusivité à un distributeur chinois ?',
        a: 'Parfois, et avec parcimonie. Cantonnez-la à un canal et à une région, assortie d’un objectif de ventes, et conservez le droit de la retirer si l’objectif n’est pas atteint.',
      },
      {
        q: 'Un distributeur est-il nécessaire pour vendre en cross-border ?',
        a: 'Pas forcément. Une boutique transfrontalière sur Tmall Global ou JD Worldwide peut s’en passer : un Tmall Partner assure alors les opérations. Nombre de marques débutent en cross-border et ne font appel à un distributeur qu’au moment d’aborder le commerce général (importations classiques, droits acquittés) et la distribution physique.',
      },
      {
        q: 'Peut-on trouver un distributeur sur Alibaba ?',
        a: 'On y trouve des sociétés, certes. Mais Alibaba.com et 1688 ont été pensés pour s’approvisionner en Chine : la plupart des fiches émanent d’usines et de négociants à la recherche d’acheteurs étrangers.',
      },
      {
        q: 'Quelle marge prend un distributeur chinois ?',
        a: 'Cela dépend du canal et de la répartition des charges. Un distributeur qui assume aussi les droits de référencement, le marketing et le risque de crédit sera plus exigeant qu’un simple logisticien. Comparez les offres sur le prix final en rayon, et sur la prise en charge de chaque coût tout au long de la chaîne.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Nous écrire',
    title: 'Présentez-nous votre catégorie',
    lead: 'Le premier échange est bref. À son issue, vous saurez si le bon distributeur figure dans nos fichiers. Si ce n’est pas le cas, nous vous le dirons franchement, et nous vous orienterons vers un interlocuteur compétent si nous en connaissons un.',
    primary: 'Recevoir une liste de distributeurs',
    secondary: 'Découvrir notre méthode',
  },
};

export default copy;
