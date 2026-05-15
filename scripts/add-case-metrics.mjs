#!/usr/bin/env node
/** One-shot: add metric line to the 17 case studies that were missing it. */
import { readFileSync, writeFileSync } from 'node:fs';

const metrics = {
  'bassetti': {
    en: 'Bassetti.cn relaunched on China-hosted WordPress with ICP and local performance.',
    fr: 'Bassetti.cn relancé sur WordPress hébergé en Chine, avec licence ICP et performances locales.',
  },
  'beyondtiktok': {
    en: 'Lead-generation site built for TikTok services with SEO and Google Ads driving qualified traffic.',
    fr: 'Site de génération de leads pour les services TikTok, alimenté par SEO et Google Ads.',
  },
  'exlantix': {
    en: 'Visual identity and brand experience system delivered for the EXLANTIX premium line.',
    fr: "Système d'identité visuelle et d'expérience de marque livré pour la ligne premium EXLANTIX.",
  },
  'iguzzini': {
    en: 'Cross-border Tmall flagship live for the lighting brand, designed for Chinese architects and luxury consumers.',
    fr: "Flagship Tmall cross-border lancé pour la marque d'éclairage, pensé pour les architectes et consommateurs premium chinois.",
  },
  'jac': {
    en: '250+ exterior and interior EV images produced for global reseller and partner use.',
    fr: 'Plus de 250 visuels EV (extérieurs et intérieurs) produits pour les revendeurs et partenaires mondiaux.',
  },
  'jac-automobile': {
    en: 'Olympic J-Bot AI campaign picked up by JAC international teams on Facebook and Instagram on their own.',
    fr: 'Campagne IA J-Bot olympique reprise spontanément par les équipes JAC internationales sur Facebook et Instagram.',
  },
  'jaguar-land-rover': {
    en: 'Year-round social programme with a measurable lift in engagement and a young Chinese fan community.',
    fr: "Programme social annuel, hausse mesurable de l'engagement et communauté de jeunes fans en Chine.",
  },
  'kerry-davinci': {
    en: 'Pricing disputes resolved in 3 months. Sales fraud eliminated in 6 months. Year-one online revenue growth.',
    fr: "Conflits tarifaires résolus en 3 mois. Fraude commerciale éliminée en 6 mois. Croissance du CA en ligne dès l'année 1.",
  },
  'langnese': {
    en: 'Long-running sales decline reversed. New regional channels opened across China.',
    fr: 'Déclin commercial durable inversé. Nouveaux canaux régionaux ouverts en Chine.',
  },
  'master-martini': {
    en: 'Professional baker community built across South East Asia social accounts.',
    fr: 'Communauté de boulangers professionnels bâtie sur les comptes sociaux Asie du Sud-Est.',
  },
  'mission-foods': {
    en: 'Halloween launch drove follower growth across WeChat, Weibo and RED with Gen Z snacking content.',
    fr: 'Le lancement Halloween a porté la croissance des abonnés sur WeChat, Weibo et RED avec un contenu Gen Z.',
  },
  'pierre-fabre': {
    en: '3D Digital Growth Model and a competitive intelligence pack delivered to Pierre Fabre leadership.',
    fr: 'Modèle 3D Digital Growth et dossier de veille concurrentielle livrés au comité de direction Pierre Fabre.',
  },
  'roc': {
    en: 'Localized Chinese name, brand story, and full visual identity system shipped for ROC dermo-skincare.',
    fr: "Nom chinois, récit de marque et système d'identité visuelle complet livrés pour ROC dermo-cosmétique.",
  },
  'shiseido-rq-pyology': {
    en: 'New dermo-cosmetic brand built end to end for Shiseido, from positioning to packaging.',
    fr: 'Nouvelle marque dermo-cosmétique construite de bout en bout pour Shiseido, du positionnement au packaging.',
  },
  'sohomd': {
    en: 'Organic traffic doubled. Lead generation lifted across the telepsychiatry platform.',
    fr: 'Trafic organique doublé. Génération de leads en hausse sur la plateforme de télépsychiatrie.',
  },
  'valio': {
    en: 'Eila sub-brand launched with localized Chinese name and a full visual identity system.',
    fr: "Sous-marque eila lancée avec nom chinois et système d'identité visuelle complet.",
  },
  'viessmann': {
    en: "Tmall and JD storefronts run end to end for Viessmann's climate solutions: content, media, livestream, service.",
    fr: 'Boutiques Tmall et JD pilotées de bout en bout pour les solutions de climatisation Viessmann : contenu, média, livestream, service.',
  },
};

function setMetric(file, value) {
  let t;
  try { t = readFileSync(file, 'utf8'); } catch { return false; }
  if (/^metric:/m.test(t)) return false;
  const escaped = value.replace(/"/g, '\\"');
  const out = t.replace(/^(summary:.*$)/m, `$1\nmetric: "${escaped}"`);
  if (out === t) return false;
  writeFileSync(file, out);
  return true;
}

let count = 0;
for (const [slug, { en, fr }] of Object.entries(metrics)) {
  if (setMetric(`src/content/cases/${slug}.md`, en)) count++;
  if (setMetric(`src/content/cases-fr/${slug}.md`, fr)) count++;
}
console.log(`Added metric to ${count} case files`);
