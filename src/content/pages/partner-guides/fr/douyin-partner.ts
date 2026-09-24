/**
 * /fr/compass/trouver-un-douyin-partner-en-chine (version française).
 * Requête visée : « trouver un Douyin Partner (DP) ».
 *
 * Les montants viennent de notre calculateur de coûts Douyin
 * (src/pages/tools/douyin-cost-calculator.astro), présentés comme tels.
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'dp',
  locale: 'fr',
  title: 'Trouver et choisir un Douyin Partner (DP) | TheChinaPath',
  description:
    'Ce que fait un Douyin Partner, comment il se rémunère, comment le juger sur ses lives et garder boutique et compte publicitaire à votre nom.',
  crumb: 'Trouver un DP en Chine',
  reviewed: '24 septembre 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'Recherche de DP',
    rows: [{ text: 'Trouver le bon' }, { text: 'Douyin Partner (DP) en Chine', style: 'highlight' }],
    lead: 'Le Douyin Partner, ou DP, fait tourner votre boutique Douyin : vidéo courte, lives de marque, collaborations avec les créateurs et publicité. Les meilleurs savent déjà quels animateurs et quels créateurs font vendre dans votre catégorie. Leur travail se juge en direct, dès ce soir.',
    image: {
      src: '/Images/compass/channel-social.webp',
      alt: 'Sous un anneau lumineux, une animatrice de live s’adresse à un téléphone fixé sur trépied, des échantillons alignés devant elle',
    },
    stats: heroStats('ans de rendez-vous avec des partenaires en Chine'),
    primary: 'Recevoir une liste de DP',
    secondary: 'Voir comment fonctionne Compass',
  },

  answer: {
    eyebrow: 'En bref',
    title: 'Jugez un DP sur les lives qu’il anime aujourd’hui',
    body: [
      'Pour choisir un Douyin Partner, demandez à chaque candidat les comptes de marque qu’il gère dans votre catégorie, puis suivez leurs lives et leurs vidéos courtes avec l’œil d’un acheteur. Interrogez-le sur sa façon de recruter les créateurs et sur ses dépenses publicitaires. Demandez ensuite au nom de qui sont ouverts la boutique et le compte publicitaire. La question des honoraires ne vient qu’après.',
      'Sur Douyin, le contenu fait la vente. Le DP tient donc de la maison de production adossée à un trading desk bien plus que du gérant de boutique. D’où la prudence qui s’impose face à un Tmall Partner qui « fait aussi Douyin ».',
      'Douyin certifie lui aussi ces agences et les classe selon leurs capacités. De quoi dresser une première liste. Le reste, il faudra le voir de vos propres yeux.',
    ],
  },

  role: {
    eyebrow: 'Le métier sur Douyin',
    title: 'Ce que le Douyin Partner prend réellement en charge',
    intro: 'Douyin désigne ces sociétés comme des prestataires de services e-commerce (抖音电商服务商). Les marques, elles, parlent de DP.',
    items: [
      {
        name: 'La boutique',
        body: 'L’ouverture de la boutique Douyin (抖店), les fiches produits, les prix et le service client, ou Douyin Global pour la marchandise vendue en transfrontalier.',
      },
      {
        name: 'Les lives de marque',
        body: 'Votre propre live, souvent à l’antenne plusieurs heures par jour, et les vidéos produits courtes qui alimentent à la fois le live et la boutique. Cela suppose des animateurs, des scripts et un studio, qu’il faut bien faire tourner.',
      },
      {
        name: 'Les créateurs',
        body: 'Le recrutement de créateurs via Xingtu (巨量星图) pour le contenu, et via le programme d’affiliation de Douyin (精选联盟) pour les ventes à la commission.',
      },
      {
        name: 'La publicité',
        body: 'Qianchuan (巨量千川), la régie publicitaire de Douyin dédiée aux boutiques. Vous approvisionnez directement le compte, le DP le pilote.',
      },
    ],
  },

  routes: {
    eyebrow: 'Repérer des candidats',
    title: 'Où trouver les bons DP',
    intro: 'Les meilleurs DP ne font guère de publicité. On les découvre le plus souvent à travers les lives qu’ils animent.',
    table: {
      headers: ['Filière', 'Ce qu’elle apporte', 'Ses angles morts'],
      rows: [
        [
          'La place de marché des prestataires de Douyin',
          'Des prestataires certifiés, triables par capacité et par catégorie.',
          'La note de capacité reflète la taille. Elle ne dit pas si leurs animateurs sauront vendre votre produit.',
        ],
        [
          'Les lives qui retiennent votre attention',
          'Le meilleur argumentaire qui soit. Repérez un live de marque qui vend dans votre catégorie, puis cherchez qui le gère.',
          'Certaines marques animent leurs lives en interne, et les bons DP affichent souvent complet.',
        ],
        [
          'Les TP qui « font aussi Douyin »',
          'Un seul contrat pour deux plateformes.',
          'Tenir une boutique et animer un live relèvent de deux métiers. Jugez leurs lives Douyin pour eux-mêmes.',
        ],
        [
          'MCN et agences de créateurs',
          'Un accès direct aux créateurs.',
          'Ils vendent du temps d’antenne de créateurs. Rares sont ceux qui pilotent une boutique, un live quotidien et un compte publicitaire avec un seul compte de résultat.',
        ],
        [
          'Compass',
          'Des DP dont nous avons suivi les lives dans nos catégories, avec nos notes sur leurs animateurs, leurs créateurs et leurs dépenses publicitaires.',
          'La couverture est dense dans nos huit catégories, clairsemée au-delà.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Évaluer un DP',
    title: 'Sept vérifications avant de confier votre compte Douyin',
    intro: 'Un DP travaille pour l’essentiel en public, face caméra. Avant d’en inscrire un sur une liste courte, nous suivons ses lives deux ou trois soirs. Faites de même, avant de lire la moindre diapositive.',
    table: {
      headers: ['Vérification', 'Réponse sérieuse', 'Signal d’alerte'],
      rows: [
        [
          'Des lives à regarder',
          'Les comptes de marque qu’ils gèrent aujourd’hui, dans votre catégorie ou une catégorie voisine. Regardez deux sessions de chacun.',
          'Des vidéos d’études de cas, et aucun compte actif cité.',
        ],
        [
          'L’équipe d’animateurs',
          'Des animateurs salariés qui se relaient par roulement, encadrés par un formateur, avec un script par produit.',
          'Des animateurs indépendants engagés à la séance.',
        ],
        [
          'Résultats avec les créateurs',
          'Les créateurs qu’ils ont recrutés dans votre catégorie, avec ventes, retours et coût par commande.',
          'Des nombres d’abonnés et des chiffres « d’exposition », et rien d’autre.',
        ],
        [
          'Rentabilité publicitaire',
          'Le retour sur dépenses Qianchuan par campagne, et ce qu’ils couperaient en premier.',
          'Un plan qui ne tient que si le budget publicitaire augmente chaque mois.',
        ],
        [
          'Chiffres après retours',
          'Le GMV (ventes brutes) net des remboursements et des retours, extrait directement du back-office de la boutique.',
          'Le seul GMV brut. Sur Douyin, les retours peuvent amputer une belle soirée d’une bonne partie de ses ventes.',
        ],
        [
          'Allégations et conformité',
          'Des scripts contrôlés au regard de la loi chinoise sur la publicité et des règles de Douyin encadrant les allégations dans votre catégorie.',
          'Des animateurs qui promettent des résultats à l’antenne. Douyin le sanctionne, les autorités aussi.',
        ],
        [
          'Propriété',
          'La boutique et le compte de marque au nom de votre société, de même que le compte publicitaire Qianchuan.',
          'Un compte ouvert au nom de l’entité du DP, ou un live qui appartient à titre personnel à l’animateur.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'La rémunération',
    title: 'Comment se paient les Douyin Partners',
    intro: 'La plupart des DP facturent un forfait mensuel assorti d’une commission sur le GMV. Notre calculateur de coûts Douyin situe ce forfait autour de 30 000 RMB par mois (environ 3 700 euros) pour une structure légère, et jusqu’à 100 000 RMB (environ 12 200 euros) pour une grande marque internationale, avec alors une commission de 5 à 8 %.',
    table: {
      headers: ['Poste de coût', 'Fonctionnement', 'Points de vigilance'],
      rows: [
        [
          'Forfait mensuel',
          'Un montant fixe qui couvre la boutique, le calendrier des lives, la publicité et le service client.',
          'Un forfait muet sur le nombre d’heures de live et de vidéos qu’il inclut.',
        ],
        [
          'Commission sur le GMV',
          'Un pourcentage des ventes générées par le DP, en plus du forfait.',
          'Une commission assise sur le GMV brut. Indexez-la sur les ventes nettes des retours.',
        ],
        [
          'Commission des créateurs',
          'Versée aux créateurs sur les ventes qu’ils génèrent et facturée en dehors du contrat du DP. Les créateurs de premier plan prélèvent de 30 à 50 %, et facturent souvent en plus un droit de passage fixe (坑位费).',
          'Un plan de lancement qui repose sur une seule grosse session avec un créateur.',
        ],
        [
          'Achats média',
          'Les dépenses Qianchuan, que vous versez directement sur le compte publicitaire.',
          'Un DP qui propose d’avancer les dépenses publicitaires. Ces montages finissent souvent mal.',
        ],
        [
          'Cofinancement',
          'Une enveloppe annuelle, en sus du forfait, réservée aux temps forts : Double 11, lancement ou campagne phare.',
          'Une enveloppe de cofinancement sans plan d’utilisation.',
        ],
      ],
    },
    warnColumn: true,
    link: { label: 'Chiffrer votre projet avec notre calculateur de coûts Douyin', href: '/tools/douyin-cost-calculator' },
  },

  mistakes: {
    eyebrow: 'Les écueils',
    title: 'Trois façons de brûler un budget Douyin',
    intro: 'Sur Douyin, les échecs coûtent cher parce qu’ils sont rapides. Voici où part l’argent, le plus souvent.',
    image: {
      src: '/Images/compass/dp-mistakes.webp',
      alt: 'Un studio de live désert après la fermeture, l’anneau lumineux éteint, des échantillons de soins encore alignés sur la table',
    },
    items: [
      {
        name: 'Tout miser sur un gros créateur',
        body: 'Un créateur de premier plan peut écouler un lot en une soirée, moyennant 30 à 50 % de commission et un droit de passage. Sans live de marque pour prendre le relais, les ventes retombent dès le lendemain.',
      },
      {
        name: 'Du trafic sans contenu',
        body: 'Un DP médiocre engloutit votre budget en publicité et baptise le pic « croissance ». Avant de valider la dépense, exigez de voir les contenus que ces publicités sont censées pousser.',
      },
      {
        name: 'Un compte qui ne vous appartient pas',
        body: 'Si le live et ses abonnés sont rattachés au compte du DP, ils restent chez lui le jour où vous partez.',
      },
    ],
  },

  compass: {
    eyebrow: 'Notre méthode',
    title: 'Nous ne proposons que des DP dont nous avons suivi les lives',
    lead: 'Compass classe chaque Douyin Partner selon les catégories qu’il vend. Nos notes y ajoutent la qualité de ses animateurs et de ses créateurs, et le taux de conversion réel de ses lives. Nous ne percevons aucune commission des partenaires. Huit catégories grand public sont couvertes : beauté, alimentaire et boissons, mode, maison, bien-être, puériculture, animalerie et compléments alimentaires.',
    steps: compassSteps(
      'Nous interrogeons Compass pour isoler les DP qui vendent déjà votre catégorie sur Douyin. Vous recevez les trois à cinq qui justifient un rendez-vous, chacun accompagné d’une note sur ses atouts et ses faiblesses. Les marges de négociation sur les honoraires y figurent aussi.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Choisir un Douyin Partner : vos questions',
    items: [
      {
        q: 'Qu’est-ce qu’un DP sur Douyin ?',
        a: 'DP signifie Douyin Partner : l’agence qui gère pour une marque sa boutique Douyin, ses lives, ses collaborations avec les créateurs et sa publicité. Douyin parle, lui, de prestataire de services e-commerce.',
      },
      {
        q: 'Combien coûte un Douyin Partner ?',
        a: 'La plupart facturent un forfait mensuel et une commission. Notre calculateur situe le forfait entre 30 000 et 100 000 RMB par mois environ (soit 3 700 à 12 200 euros), avec une commission de 5 à 8 % pour une grande marque internationale. Publicité et commissions des créateurs viennent en sus.',
      },
      {
        q: 'Mon Tmall Partner peut-il aussi gérer Douyin ?',
        a: 'Certains en sont capables. Demandez à suivre les lives Douyin qu’ils animent aujourd’hui et jugez-les sur pièces. Tenir une boutique et animer un live sont deux métiers distincts.',
      },
      {
        q: 'Faut-il commencer par les créateurs ou par un live de marque ?',
        a: 'La plupart des marques ont besoin des deux. Les créateurs apportent l’audience, le live de marque des ventes régulières, jour après jour. Livrées à elles-mêmes, les sessions avec des créateurs produisent des pics plutôt qu’une activité suivie.',
      },
      {
        q: 'À quel rythme une nouvelle boutique Douyin doit-elle vendre ?',
        a: 'Plus lentement que ne le laissent entendre la plupart des présentations. Les premiers mois servent à bâtir les contenus, une grille de lives et un réseau de créateurs. Un DP qui promet des chiffres spectaculaires dès le premier mois compte le plus souvent les acheter avec votre budget publicitaire.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Nous écrire',
    title: 'Présentez-nous votre projet Douyin',
    lead: 'Vous ouvrez une première boutique, ou votre DP dépense plus qu’il ne vend ? Indiquez-nous votre catégorie et l’état du compte. Un bref échange suffit d’ordinaire pour savoir si un partenaire mieux adapté figure dans nos fichiers.',
    primary: 'Recevoir une liste de DP',
    secondary: 'Découvrir notre méthode',
  },
};

export default copy;
