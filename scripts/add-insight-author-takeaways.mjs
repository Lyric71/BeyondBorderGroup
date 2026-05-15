#!/usr/bin/env node
/**
 * One-shot: set `author` and `keyTakeaways` on 12 priority insights (EN + FR).
 * Pulls FR slugs from src/i18n/insight-slugs.mjs to avoid hand-coding the pair.
 *
 * The 12 articles were picked to spread named attribution across the team
 * (Cyril Drouin for strategy and analysis, Liyan Ye for brand voice) so the
 * E-E-A-T graph reads authentically rather than as one-author-on-everything.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { insightEnToFr } from '../src/i18n/insight-slugs.mjs';

const items = {
  'china-e-commerce-platforms-2025': {
    author: 'Cyril Drouin',
    en: [
      "China's eCommerce wins on integration, not user count. 1.12 billion internet users matter less than how Tmall, Douyin, JD and Xiaohongshu hand traffic to each other.",
      'Tmall and JD remain the trust base. Douyin owns discovery. Xiaohongshu owns search. Pinduoduo owns price. Pick the right one to enter on, not all four at once.',
      'Foreign brands still budget for Tmall the way Western retailers budget for Amazon. China rewards a portfolio approach, not a flagship-only bet.',
      'Cross-border setup buys speed, not staying power. Plan for a 2 to 3 year shift to onshore once category economics make it pay.',
    ],
    fr: [
      "Le e-commerce chinois gagne par l'intégration, pas par la taille de l'audience. Les 1,12 milliard d'internautes pèsent moins que la manière dont Tmall, Douyin, JD et Xiaohongshu se passent le trafic.",
      "Tmall et JD restent le socle de confiance. Douyin capte la découverte. Xiaohongshu capte la recherche. Pinduoduo capte le prix. Choisissez la bonne porte d'entrée, pas les quatre en parallèle.",
      'Les marques étrangères budgètent encore Tmall comme un Amazon chinois. Le marché récompense une logique de portefeuille, pas un pari flagship unique.',
      "Le cross-border achète de la vitesse, pas de la durée. Préparez un basculement en onshore sur 2 à 3 ans dès que l'économie de la catégorie le permet.",
    ],
  },
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans': {
    author: 'Cyril Drouin',
    en: [
      'The national playbook is broken. Slower growth, cautious consumers, and stronger domestic competition mean one hero SKU plus one celebrity no longer scales.',
      'Pride in domestic brands has flipped categories like EVs, beauty, and sportswear. Foreign logos alone no longer drive premium.',
      "The right question is no longer 'How do we win China?'. It is 'Where do we deserve to matter, and why?'",
      'Pick three regions and three category occasions. Resource them properly. The rest of the country gets distribution, not investment.',
    ],
    fr: [
      "Le playbook national ne fonctionne plus. Croissance qui ralentit, consommateurs plus prudents, marques chinoises plus fortes : le SKU phare plus la célébrité unique n'imprime plus.",
      'La fierté domestique a basculé la beauté, les EV et le sportswear. Le logo étranger seul ne tire plus le premium.',
      "La bonne question n'est plus « Comment gagner la Chine ? » mais « Où méritons-nous de compter, et pourquoi ? »",
      'Trois régions, trois moments de catégorie. Vraiment financés. Le reste du pays touche la distribution, pas le budget.',
    ],
  },
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025': {
    author: 'Cyril Drouin',
    en: [
      'Move from symbolic localisation to structural choices: where to show up, with which assortment, at which price.',
      'A regional growth strategy beats a national plan because tier 1, new tier 1, and new-new tier 1 shoppers behave nothing alike.',
      'Local KOL clusters convert in cities where national celebrities barely register.',
      'Test new categories with a 6-month budget on 2 regions, not a national splash. Decide based on category data, not gut.',
    ],
    fr: [
      "Passez d'une localisation symbolique à des choix structurels : où s'installer, avec quel assortiment, à quel prix.",
      'Une stratégie régionale bat un plan national parce que les acheteurs de tier 1, new tier 1 et new-new tier 1 ne se comportent plus pareil.',
      'Les clusters de KOL locaux convertissent dans des villes où les célébrités nationales ne suffisent plus.',
      "Testez les nouvelles catégories sur 2 régions et 6 mois, pas en lancement national. Décidez sur les chiffres, pas à l'instinct.",
    ],
  },
  'douyin-live-commerce-2025-store-led-livestream-strategy': {
    author: 'Cyril Drouin',
    en: [
      'Douyin is no longer a celebrity livestream play. Repeatable growth comes from store-led rooms that run like daily studios.',
      'Zara built weekly multi-hour Douyin shows and exported the format to other markets. Treat live as always-on retail, not a campaign event.',
      "Douyin's ad stack now plugs directly into commerce ops. Traffic spend and store conversion are managed together, not in separate dashboards.",
      'Budget for a content rhythm: 3 to 5 live sessions per week, 10 to 15 short videos, a paid layer underneath. The compounding sits in the calendar, not in a hero moment.',
    ],
    fr: [
      'Douyin ne se joue plus en livestream de célébrité. La croissance répétable vient de studios marque qui tournent comme des plateaux quotidiens.',
      "Zara a fait tourner sur Douyin des shows hebdomadaires de plusieurs heures, puis a exporté le format ailleurs. Pensez live comme commerce permanent, pas comme événement campagne.",
      "La stack publicitaire de Douyin se branche désormais directement sur les opérations e-commerce. Trafic payé et conversion magasin se pilotent ensemble.",
      "Construisez un rythme : 3 à 5 lives par semaine, 10 à 15 vidéos courtes, un étage paid en dessous. La capitalisation tient au calendrier, pas au coup d'éclat.",
    ],
  },
  'taobao-flash-sale-and-chinas-30-minute-retail': {
    author: 'Cyril Drouin',
    en: [
      'Alibaba is rewiring Taobao around 30-minute fulfilment. Ele.me has been rebranded as Taobao Flash Sale and folded into the Taobao app.',
      'Instant commerce stops being a food-delivery feature and becomes a daily shopping habit for skincare, supplements, and household essentials.',
      'Foreign brands with thin Chinese store networks face a structural disadvantage. Local players with dense distribution win on speed.',
      'If your category is impulse-driven, plan a hybrid model now: cross-border for SKU breadth, a local partner for instant-delivery share.',
    ],
    fr: [
      "Alibaba recâble Taobao autour de la livraison en 30 minutes. Ele.me devient Taobao Flash Sale et s'intègre dans l'app Taobao.",
      'Le commerce instantané sort du périmètre food delivery et devient une habitude quotidienne en soin, compléments et produits du quotidien.',
      'Les marques étrangères au réseau magasins trop fin sont désavantagées structurellement. Les acteurs locaux à distribution dense gagnent sur la vitesse.',
      "Si votre catégorie tourne à l'impulsion, montez un modèle hybride dès maintenant : cross-border pour la profondeur SKU, partenaire local pour la part instantanée.",
    ],
  },
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands': {
    author: 'Cyril Drouin',
    en: [
      'PIPL is no longer a paper risk. CAC enforcement against Dior signals the start of real fines for cross-border data handling.',
      "Consent flows that pass under GDPR-style frameworks do not cover PIPL's separate-consent rules for sensitive data.",
      'Most foreign brands sit on marketing stacks (Salesforce, HubSpot, Adobe) hosted overseas with Chinese consumer data flowing through them. That is the exposure.',
      'China-first stack design (regional instance, local data residency, separate consent) is now table stakes for any brand running a Tmall or WeChat flagship.',
    ],
    fr: [
      "PIPL n'est plus un risque sur le papier. La sanction CAC contre Dior signale le début des amendes réelles sur le transfert transfrontalier de données.",
      "Les parcours de consentement valables sous des cadres type RGPD ne couvrent pas la règle PIPL de consentement séparé pour les données sensibles.",
      "La plupart des marques étrangères tournent sur des stacks marketing (Salesforce, HubSpot, Adobe) hébergés à l'étranger, traversés par des données de consommateurs chinois. C'est là que se loge l'exposition.",
      "Stack China-first (instance régionale, résidence locale, consentement séparé) : c'est désormais le minimum pour toute marque qui opère un flagship Tmall ou WeChat.",
    ],
  },
  'how-jd-mall-turns-offline-stores-into-experience-hubs': {
    author: 'Cyril Drouin',
    en: [
      'JD Mall turns appliance retail into hands-on experience. Customers cook, clean, test, instead of browse.',
      "5 km strategy: each JD Mall acts as a neighborhood hub with kids' classes, mini-program services, and weekend events.",
      'Staff are recast as KOL-style creators. Many run their own Xiaohongshu accounts from the store, turning weekdays into virtual store days.',
      'Foreign brands in appliances, beauty tech, and home living need a JD Mall plan: in-store demos, staff content kits, and online-offline pricing alignment.',
    ],
    fr: [
      "JD Mall transforme l'électroménager en expérience à toucher. Les clients cuisinent, nettoient, testent, au lieu de regarder.",
      "Stratégie des 5 km : chaque JD Mall fonctionne comme un hub de quartier, avec ateliers enfants, services mini-programme et événements le week-end.",
      'Les vendeurs deviennent créateurs façon KOL. Beaucoup tiennent leur propre compte Xiaohongshu depuis le magasin, faisant des jours creux des journées de boutique virtuelle.',
      "Les marques étrangères en électroménager, beauty tech et home ont besoin d'un plan JD Mall : démos en magasin, kits contenus pour les vendeurs, alignement de prix online-offline.",
    ],
  },
  'what-taobao-instant-commerce-means-for-non-chinese-brands': {
    author: 'Cyril Drouin',
    en: [
      'Alibaba is merging Taobao with instant delivery. Taobao Flash Sale and Taobao Instant Commerce now share riders, stores, and the front door.',
      'Volume sits with local players in impulse categories. Speed is becoming hygiene, not a bonus, in tier-1 cities.',
      'Platform roles diverge: Taobao owns habit and fulfilment, Douyin owns attention, JD leans on logistics trust.',
      'Pure cross-border brands should not build their own instant grid. Use tactical partnerships and protect community on Douyin and Xiaohongshu.',
    ],
    fr: [
      "Alibaba fusionne Taobao et livraison instantanée. Taobao Flash Sale et Taobao Instant Commerce partagent désormais coursiers, magasins et porte d'entrée.",
      "Le volume reste chez les acteurs locaux sur les catégories d'impulsion. La vitesse devient une norme dans les villes de premier rang, plus un bonus.",
      'Les plateformes se spécialisent : Taobao tient la fréquence et la logistique, Douyin tient l\'attention, JD s\'appuie sur la confiance logistique.',
      "Une marque cross-border pure n'a aucun intérêt à construire son propre réseau instantané. Partenariats tactiques, et protection de la communauté sur Douyin et Xiaohongshu.",
    ],
  },
  'brand-localization-for-china-without-losing-your-dna': {
    author: 'Liyan Ye',
    en: [
      'Quality is now table stakes in China. Foreign brands no longer get a premium for being foreign. Relevance does the heavy lifting.',
      'Three layers: the non-negotiable core, the China design space, and platform-native execution. Get the order right or you dilute the brand.',
      'Apple keeps the visual language but localises festival rhythms. Coca-Cola keeps the red but its Chinese name Kěkǒukělè does the cultural work.',
      "Translating a website is not localisation. The work is rebuilding how the brand lives inside China's content-commerce loop.",
    ],
    fr: [
      "La qualité est désormais un acquis en Chine. Les marques étrangères ne touchent plus la prime du « venu d'ailleurs ». La pertinence fait le travail.",
      "Trois couches : le noyau non négociable, l'espace de design Chine, l'exécution native plateforme. Si l'ordre se brouille, la marque se dilue.",
      "Apple garde son langage visuel mais cale ses moments sur les rythmes chinois. Coca-Cola garde le rouge mais c'est son nom chinois Kěkǒukělè qui fait le travail culturel.",
      "Traduire un site web n'est pas une localisation. Le vrai travail consiste à reconstruire la manière dont la marque vit dans la boucle contenu-commerce chinoise.",
    ],
  },
  'double-11-2025-ai-ecommerce-efficiency-china': {
    author: 'Cyril Drouin',
    en: [
      'Double 11 2025 reads as an operations test, not a GMV test. Platforms have quietly retired the single headline number.',
      "AI now orchestrates promotions, ranking, forecasting, and last-mile routing. The smartest operator on the day wins, not the heaviest discount.",
      'Creative throughput is the new bottleneck. Brands shipping 50+ variants per campaign at speed beat the ones burning four weeks on hero assets.',
      "Service quality, delivery speed, and return rates are the public KPIs now. Build for November 12, not just for 11.11.",
    ],
    fr: [
      "Le Double 11 2025 se lit comme un test d'opérations, pas un test de GMV. Les plateformes ont discrètement enterré le chiffre unique.",
      "L'IA orchestre désormais les promotions, le classement, la prévision et le dernier kilomètre. L'opérateur le plus fin l'emporte sur celui qui solde le plus dur.",
      'Le débit créatif devient le goulot. Les marques qui sortent 50 variantes par campagne et vite battent celles qui brûlent quatre semaines sur un visuel hero.',
      'Qualité de service, vitesse de livraison, taux de retour : voilà les KPI publics désormais. Construisez pour le 12 novembre, pas seulement pour le 11.11.',
    ],
  },
  'double-11-2025-old-media-strategy-china-ecommerce': {
    author: 'Cyril Drouin',
    en: [
      'Variety-show galas, comedy sketches, and outdoor brand boards are back at Double 11. Not nostalgia. A way to cut through scroll fatigue.',
      'Platforms need a shared moment again. Tab takeovers and stacked coupons stopped making 11.11 feel like an event.',
      'Owning the jokes before consumers do means brands sit at the centre of the cultural noise, not at the edge.',
      'TV-era formats now run on digital rails: galas livestream, sketches loop on Douyin, OOH gets a Xiaohongshu kicker.',
    ],
    fr: [
      "Galas façon variété, sketches comiques, panneaux OOH : tout cela revient au Double 11. Pas par nostalgie. Pour percer la fatigue du scroll.",
      "Les plateformes ont besoin d'un moment partagé à nouveau. Tab takeover et empilage de coupons ne suffisaient plus à faire du 11.11 un événement.",
      "Saisir les blagues avant que les consommateurs ne le fassent place les marques au centre du bruit culturel, pas en lisière.",
      "Les formats télé tournent désormais sur des rails digitaux : galas en livestream, sketches qui bouclent sur Douyin, affichage OOH avec une relance sur Xiaohongshu.",
    ],
  },
  'how-chinas-advertising-laws-impact-global-brands': {
    author: 'Cyril Drouin',
    en: [
      'Three regulators run advertising in China: SAMR (general), CAC (online and social), NRTA (broadcast and livestream). All three apply to a cross-border campaign.',
      'Absolute terms (best, most, highest) need substantiated proof. Foreign skincare claims and supplement claims get flagged fastest.',
      'Healthcare, education, real estate, and alcohol have category-specific rules that override the general advertising law. Localise creative per vertical.',
      'Platform pre-clearance flows on Tmall, JD, Douyin, and WeChat layer on top. A line that passes SAMR can still bounce on Douyin.',
    ],
    fr: [
      "Trois régulateurs encadrent la publicité en Chine : SAMR (général), CAC (online et social), NRTA (broadcast et livestream). Une campagne cross-border tombe sous les trois.",
      "Les termes absolus (meilleur, plus, le plus haut) exigent des preuves substantielles. Les revendications soin et compléments sont les plus rapidement signalées.",
      "Santé, éducation, immobilier, alcool : règles sectorielles qui priment sur la loi générale. Adaptez la création par vertical, pas en horizontal.",
      "Les workflows de pré-validation Tmall, JD, Douyin et WeChat se superposent par-dessus. Une ligne qui passe SAMR peut encore rebondir sur Douyin.",
    ],
  },
};

function setFields(file, author, takeaways) {
  let t;
  try { t = readFileSync(file, 'utf8'); } catch { return false; }
  const m = t.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return false;
  let fm = m[1];
  const body = m[2];

  // Set author
  if (/^author:/m.test(fm)) {
    fm = fm.replace(/^author:.*$/m, `author: "${author}"`);
  } else {
    fm = fm + `\nauthor: "${author}"`;
  }

  // Set keyTakeaways block (replace if present)
  const takeawayBlock = ['keyTakeaways:', ...takeaways.map((b) => `  - "${b.replace(/"/g, '\\"')}"`)].join('\n');
  if (/^keyTakeaways:/m.test(fm)) {
    fm = fm.replace(/^keyTakeaways:[\s\S]*?(?=^\w|\n*$)/m, takeawayBlock + '\n');
  } else {
    fm = fm + '\n' + takeawayBlock;
  }

  const out = '---\n' + fm + '\n---\n' + body;
  writeFileSync(file, out);
  return true;
}

let count = 0;
for (const [enSlug, { author, en, fr }] of Object.entries(items)) {
  if (setFields(`src/content/insights/${enSlug}.md`, author, en)) count++;
  const frSlug = insightEnToFr[enSlug];
  if (frSlug && setFields(`src/content/insights-fr/${frSlug}.md`, author, fr)) count++;
}
console.log(`Updated ${count} insight files (12 EN + 12 FR expected)`);
