/**
 * Version française des chaînes communes aux trois guides partenaires.
 *
 * ` ` est l'espace fine insécable exigée par la typographie française
 * avant `? ! : ;`, dans les guillemets et devant `%`.
 */
import type { HeroStat } from '../../compass/types';

export const heroStats = (label: string): HeroStat[] => [
  { value: '15', counter: 15, label },
  { value: '3 à 5', label: 'noms par liste courte, le plus souvent' },
  { value: 'Zéro', label: 'commission perçue auprès des partenaires' },
];

export const compassSteps = (match: string) => [
  {
    label: 'Le brief',
    body: 'Un entretien de trente minutes à une heure. Nous passons en revue votre catégorie, votre degré de maturité, les canaux visés et ce qui a déjà été tenté.',
  },
  { label: 'La sélection', body: match },
  {
    label: 'Les mises en relation',
    body: 'Ces sociétés nous connaissent pour la plupart. Vous vous présentez donc avec une recommandation, et c’est d’ordinaire la direction qui vous reçoit, plutôt que l’équipe chargée du démarchage.',
  },
];

export const compassTiming = 'Entre le brief et la liste courte, comptez en général deux à trois semaines.';

export const whoPaysFaq = {
  q: 'Qui rémunère Compass ?',
  a: 'Les marques, et elles seules. Nous ne percevons jamais la moindre commission des distributeurs ni des partenaires de plateforme : aucun nom de votre liste courte n’a payé pour y figurer. Nos missions sont facturées au projet, sur devis, après un premier échange.',
};
