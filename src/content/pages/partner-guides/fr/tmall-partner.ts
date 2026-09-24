/**
 * /fr/compass/trouver-un-tmall-partner-en-chine (version française).
 * Requête visée : « trouver un Tmall Partner (TP) ».
 *
 * Les montants reprennent les valeurs par défaut de nos calculateurs Tmall
 * Global et JD Worldwide (src/pages/tools/*), présentées comme telles.
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'tp',
  locale: 'fr',
  title: 'Trouver et choisir un Tmall Partner (TP) | TheChinaPath',
  description:
    'Ce que fait un Tmall Partner, comment il se rémunère, comment vérifier qu’il connaît votre catégorie et garder la boutique à votre nom.',
  crumb: 'Trouver un TP en Chine',
  reviewed: '24 septembre 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'Recherche de TP',
    rows: [{ text: 'Trouver le bon' }, { text: 'Tmall Partner (TP) en Chine', style: 'highlight' }],
    lead: 'Le Tmall Partner, ou TP, fait tourner votre boutique au jour le jour : fiches produits, service client, opérations commerciales et publicité. Retenez-en un qui exploite déjà des boutiques dans votre catégorie : il suffit de les ouvrir sur Tmall pour juger sur pièces.',
    image: {
      src: '/Images/compass/channel-store.webp',
      alt: 'Dans un bureau de Hangzhou, deux opérateurs e-commerce devant un écran de fiches produits, l’un pointant du doigt',
    },
    stats: heroStats('ans de rendez-vous avec des partenaires en Chine'),
    primary: 'Recevoir une liste de TP',
    secondary: 'Voir comment fonctionne Compass',
  },

  answer: {
    eyebrow: 'En bref',
    title: 'Retenez le TP dont les boutiques sont déjà en ligne',
    body: [
      'Pour choisir un Tmall Partner, demandez à chaque candidat la liste des boutiques qu’il exploite aujourd’hui dans votre catégorie, puis visitez-les sur Tmall avec l’œil d’un client. Avant de signer, rencontrez l’équipe qui tiendrait réellement la vôtre et relisez à deux fois les clauses de sortie. La boutique doit rester enregistrée au nom de votre société.',
      'Alibaba certifie les TP et leur attribue une note sur sa propre place de marché de prestataires. Libre à vous d’y puiser vos premiers noms. Mais cette note renseigne mal sur l’expérience d’un TP avec un produit comparable au vôtre.',
      'Des opérateurs cotés comme Baozun gèrent les boutiques de dizaines de marques internationales. Un spécialiste plus modeste n’en tient parfois que six, toutes dans la même catégorie. Les deux modèles fonctionnent. Tout se joue sur la part de temps que l’équipe consacrera réellement à votre marque.',
    ],
  },

  role: {
    eyebrow: 'Le métier',
    title: 'Ce que le Tmall Partner prend en charge',
    intro: 'Le sigle TP vient de Taobao Partner, le label qu’Alibaba accorde aux agences extérieures qu’il certifie. Les marques l’appliquent aujourd’hui à toute agence qui exploite pour leur compte une boutique Tmall ou Tmall Global. Certains TP assurent aussi la logistique en entrepôt sous douane pour Tmall Global, d’autres la sous-traitent : mieux vaut le demander.',
    items: [
      {
        name: 'Boutique et fiches produits',
        body: 'La conception de la boutique, les pages produits, l’architecture tarifaire et l’ensemble des textes en chinois.',
      },
      {
        name: 'Service client',
        body: 'Les échanges avant et après achat, en chinois, par messagerie. En période de grandes opérations commerciales, ils se poursuivent souvent après minuit.',
      },
      {
        name: 'Opérations commerciales',
        body: 'Le 618, le Double 11 et les temps forts sectoriels de la plateforme, préparés des mois à l’avance avec les responsables de catégorie de Tmall.',
      },
      {
        name: 'Publicité',
        body: 'Les campagnes sur le moteur de recherche et en display via Alimama, la régie publicitaire d’Alibaba. Vous approvisionnez directement le compte publicitaire, le TP le pilote.',
      },
    ],
  },

  routes: {
    eyebrow: 'Où chercher',
    title: 'Cinq filières pour repérer des TP',
    intro: 'Une longue liste se dresse en un après-midi. La ramener aux deux ou trois candidats que vous rencontrerez prend davantage de temps. Pour aller vite, passez directement aux vérifications.',
    table: {
      headers: ['Filière', 'Ce qu’elle apporte', 'Ses angles morts'],
      rows: [
        [
          'La place de marché des prestataires d’Alibaba',
          'Des partenaires certifiés, triables par critères, avec leur note sur la plateforme.',
          'La note mesure la qualité de service en général. Elle ne dit presque rien des catégories qu’un TP maîtrise.',
        ],
        [
          'L’équipe d’intégration des marchands de Tmall Global',
          'Des noms suggérés pendant la procédure d’admission.',
          'Peu de noms, choisis surtout parmi les partenaires avec lesquels la plateforme travaille le plus. Vos concurrents figurent peut-être déjà dans leur portefeuille.',
        ],
        [
          'Événements professionnels',
          'Les présentations d’une foule de TP, réunis dans une même salle.',
          'À la tribune, tous les TP se ressemblent. Les résultats ne se lisent que dans le back-office des boutiques.',
        ],
        [
          'D’autres marques',
          'La meilleure référence possible : un responsable de marque qui a traversé deux Double 11 aux côtés d’un TP.',
          'Vos concurrents se tairont. Et une marque d’une autre catégorie ignore ce que vaut ce TP dans la vôtre.',
        ],
        [
          'Compass',
          'Des TP que nous avons vus à l’œuvre, classés selon les catégories qu’ils exploitent.',
          'Nous ne référençons que des sociétés rencontrées : la couverture est dense dans nos huit catégories, clairsemée au-delà.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Évaluer un TP',
    title: 'Sept vérifications avant de confier votre boutique',
    intro: 'Les boutiques Tmall sont publiques, et c’est une aubaine. Le travail d’un TP s’évalue plus facilement que celui de presque toute autre agence, et la plupart de ces vérifications ne demandent qu’un ordinateur et une heure.',
    table: {
      headers: ['Vérification', 'Réponse sérieuse', 'Signal d’alerte'],
      rows: [
        [
          'Boutiques actives dans votre catégorie',
          'Trois ou quatre noms de boutiques que vous pouvez consulter dès aujourd’hui.',
          '« Confidentialité client. » Tout TP exploite des vitrines publiques.',
        ],
        [
          'Tenue des boutiques',
          'Des pages soignées, des opérations à jour. Écrivez au service client en vous faisant passer pour un acheteur : la réponse doit arriver en quelques minutes.',
          'Des bannières périmées, des textes à moitié traduits, des réponses qui se font attendre des heures.',
        ],
        [
          'Résultats des grandes opérations',
          'Des captures de Business Advisor (生意参谋) d’une boutique comparable pour le 618 ou le Double 11, anonymisées au besoin.',
          'Un GMV (ventes brutes) brandi seul, sans rien sur les remises, les retours ou les dépenses publicitaires.',
        ],
        [
          'Rentabilité publicitaire',
          'Le retour sur dépenses publicitaires par type de campagne, et une idée précise de ce qu’ils couperaient en premier.',
          'La promesse « d’acheter du trafic », sans aucun indicateur pour en juger.',
        ],
        [
          'L’équipe',
          'Un responsable de boutique, un graphiste, un opérateur publicitaire et un responsable du service client, tous nommés, avec le nombre de boutiques que chacun gère par ailleurs.',
          'Une équipe senior pour la présentation, qui disparaît après la signature.',
        ],
        [
          'Connaissance de la catégorie',
          'Des boutiques qu’ils ont fait croître dans votre catégorie, et une solide maîtrise des règles d’enregistrement et d’allégations qui s’y appliquent.',
          'Une catégorie « voisine ». Une expérience dans les cosmétiques ne vaut pas pour les compléments alimentaires, et réciproquement.',
        ],
        [
          'Propriété et sortie',
          'La boutique enregistrée au nom de votre société, avec ses données et ses contenus, et un plan de passation inscrit au contrat.',
          'Une boutique ouverte au nom de la société du TP, ou des contenus dont il revendique la propriété.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'La rémunération',
    title: 'Comment se paient les Tmall Partners',
    intro: 'La plupart des TP facturent un forfait mensuel assorti d’une commission sur les ventes. Nos calculateurs Tmall Global et JD Worldwide retiennent par défaut 35 000 RMB par mois (environ 4 300 euros), plus 10 % du GMV. Ces montants servent d’étalon pour juger les devis réels, qui s’en écartent dans un sens ou dans l’autre selon la taille de la boutique et l’étendue de la mission.',
    table: {
      headers: ['Modèle', 'Mode de rémunération', 'Indiqué lorsque'],
      rows: [
        [
          'Prestation de services (代运营)',
          'Un forfait mensuel et une commission sur le GMV. Le stock vous appartient, la publicité est à votre charge.',
          'Vous tenez à maîtriser le prix et l’image de marque, et vous pouvez financer le stock.',
        ],
        [
          'Distribution (经销)',
          'Le TP achète votre marchandise et se rémunère sur la marge à la revente.',
          'Vous préférez ne pas porter de stock en Chine et acceptez de moins contrôler les prix.',
        ],
        [
          'Dépôt-vente (代销)',
          'Le TP vend votre marchandise et vous règle après la vente, déduction faite de sa part.',
          'En phase de test, quand aucune des deux parties ne souhaite immobiliser de capitaux.',
        ],
      ],
    },
    warnColumn: false,
    note: 'La publicité transite par un compte que vous approvisionnez directement. Les montages où le partenaire avance les dépenses publicitaires finissent souvent mal. Beaucoup de marques réservent aussi une enveloppe annuelle de cofinancement pour les temps forts, Double 11 ou lancement. Inscrivez enfin la passation au contrat : contenus, données clients et comptes publicitaires doivent vous revenir à la fin de la collaboration.',
    link: { label: 'Chiffrer votre projet avec notre calculateur Tmall Global', href: '/tools/tmall-global-setup-and-run' },
  },

  mistakes: {
    eyebrow: 'Les écueils',
    title: 'Comment une relation avec un TP se dégrade',
    intro: 'Quand une marque nous sollicite pour remplacer son TP, son récit suit presque toujours l’un de ces scénarios.',
    image: {
      src: '/Images/compass/tp-mistakes.webp',
      alt: 'Un plateau e-commerce désert, la nuit, où un seul écran affiche encore une courbe de ventes en chute',
    },
    items: [
      {
        name: 'Un TP étranger à votre catégorie',
        body: 'Le TP promettait une exploitation digne d’une boutique officielle. Au quatrième mois, il est apparu que l’équipe n’avait jamais vendu la catégorie, et les fiches produits (prix, avis, rang dans les résultats de recherche) avaient déjà souffert.',
      },
      {
        name: 'Le GMV à tout prix',
        body: 'Des objectifs fixés sur le seul GMV poussent le TP vers les remises agressives. Le chiffre est atteint, mais les clients apprennent à guetter le prochain coupon.',
      },
      {
        name: 'Une boutique qui ne vous appartient pas',
        body: 'Si la boutique a été ouverte au nom de la société du TP, partir revient à repartir de zéro : nouvelle boutique, aucun avis, aucun historique de ventes.',
      },
    ],
  },

  compass: {
    eyebrow: 'Notre méthode',
    title: 'Nous ne proposons que des TP vus à l’œuvre',
    lead: 'Compass classe chaque Tmall Partner selon les catégories que nous l’avons vu exploiter. Nos notes y ajoutent les équipes de la plateforme avec lesquelles il travaille et la tenue de ses boutiques lors des dernières grandes opérations. Nous ne percevons aucune commission des partenaires. Huit catégories grand public sont couvertes : beauté, alimentaire et boissons, mode, maison, bien-être, puériculture, animalerie et compléments alimentaires.',
    steps: compassSteps(
      'Nous interrogeons Compass pour isoler les TP qui exploitent déjà votre catégorie. Vous recevez les trois à cinq qui justifient un rendez-vous, chacun accompagné d’une note brève sur ses atouts et ses faiblesses, ainsi que les marges de négociation sur les honoraires.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Choisir un Tmall Partner : vos questions',
    items: [
      {
        q: 'Que signifie TP sur Tmall ?',
        a: 'TP signifie Taobao Partner, le nom qu’Alibaba a donné aux agences extérieures qu’il certifie pour exploiter des boutiques au nom des marques. Dans les faits, le terme désigne aujourd’hui toute agence qui gère une boutique Tmall ou Tmall Global pour le compte d’une marque.',
      },
      {
        q: 'Combien coûte un Tmall Partner ?',
        a: 'La plupart facturent un forfait mensuel et une commission sur le GMV. Nos calculateurs retiennent par défaut 35 000 RMB par mois (environ 4 300 euros) plus 10 % du GMV, et les devis réels s’en écartent dans un sens ou dans l’autre selon la taille de la boutique et l’étendue de la mission. La publicité s’y ajoute, à votre charge.',
      },
      {
        q: 'Peut-on exploiter une boutique Tmall sans TP ?',
        a: 'Oui, à condition de disposer en Chine d’une équipe rompue à la plateforme. La plupart des marques étrangères commencent avec un TP, puis internalisent certaines fonctions une fois la boutique stabilisée.',
      },
      {
        q: 'Le même TP peut-il gérer Tmall Global ?',
        a: 'Beaucoup exploitent les deux. Tmall Global obéit à ses propres règles en matière de stock transfrontalier et de logistique : demandez à voir des boutiques qu’ils gèrent sur chacune des deux plateformes.',
      },
      {
        q: 'Combien de temps faut-il pour changer de TP ?',
        a: 'Prévoyez une passation de plusieurs semaines. Accès à la boutique, fichiers de contenus, comptes publicitaires, scripts du service client : tout doit changer de mains. Évitez autant que possible de changer à l’approche du 618 ou du Double 11.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Nous écrire',
    title: 'Présentez-nous votre boutique',
    lead: 'Vous ouvrez une première boutique, ou votre TP ne donne plus signe de vie ? Envoyez-nous le lien de la boutique, ou simplement votre catégorie si elle n’existe pas encore. Un bref échange suffit pour savoir si le bon partenaire figure dans nos fichiers.',
    primary: 'Recevoir une liste de TP',
    secondary: 'Découvrir notre méthode',
  },
};

export default copy;
