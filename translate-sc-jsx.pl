use strict;
use warnings;
use utf8;
binmode STDOUT, ':utf8';
my $file = $ARGV[0] or die "usage\n";
open my $fh, '<:encoding(UTF-8)', $file or die;
my @lines = <$fh>;
close $fh;

my @subs = (
  ['Social Commerce in China for Foreign Brands', "Social Commerce en Chine pour les marques étrangères"],
  ['Social commerce in China for foreign brands. Douyin, RedNote, WeChat and Weibo stores, KOL programs, weekly livestreams, run by senior operators.', "Social commerce en Chine pour les marques étrangères. Boutiques Douyin, RedNote, WeChat et Weibo, programmes KOL, livestreams hebdomadaires, tenus par des opérateurs seniors."],
  ['A young Chinese livestream host on a Douyin set, ring light glowing, holding a skincare bottle mid-pitch', "Une jeune animatrice de livestream chinoise sur un plateau Douyin, ring light allumée, présente un flacon de skincare en plein argumentaire"],
  ['<a href="/">Home</a>', '<a href="/fr/">Accueil</a>'],
  ['<a href="/#services">Grow in China</a>', '<a href="/fr/#services">Se développer en Chine</a>'],
  ['aria-label="Breadcrumb"', 'aria-label="Fil d\'Ariane"'],
  ['<span class="eyebrow eyebrow--on-dark cbs-reveal">Social commerce</span>', '<span class="eyebrow eyebrow--on-dark cbs-reveal">Social commerce</span>'],
  ['<span class="cbs-hero__title-row">In China, people don\'t go to the store.</span>', '<span class="cbs-hero__title-row">En Chine, on ne va plus à la boutique.</span>'],
  ['<span class="cbs-hero__title-row cbs-hero__title-row--accent">The store comes to their feed.</span>', '<span class="cbs-hero__title-row cbs-hero__title-row--accent">La boutique vient au fil.</span>'],
  ['<span class="cbs-hero__title-row cbs-hero__title-row--highlight">We run that operation.</span>', '<span class="cbs-hero__title-row cbs-hero__title-row--highlight">Nous tenons cette opération.</span>'],
  ['Social commerce in China isn\'t a layer on top of e-commerce. It\'s the primary', "Le social commerce en Chine n'est pas une couche posée sur l'e-commerce. C'est la première"],
  ['way most consumer brands sell here now. We run it for Shiseido, Pierre Fabre,', "voie de vente pour la plupart des marques de consommation. Nous l'opérons pour Shiseido, Pierre Fabre,"],
  ['Camper, Bassetti, Mous, MacuSee and others. The whole operation, not the deck.', "Camper, Bassetti, Mous, MacuSee et d'autres. L'opération entière, jamais une simple présentation."],
  ['>Talk to us<', '>Nous parler<'],
  ['>See how we work<', '>Voir notre méthode<'],
  ['years running Douyin and RedNote for foreign brands', "ans à tenir Douyin et RedNote pour des marques étrangères"],
  ['active social commerce stores and accounts', "boutiques et comptes social commerce actifs"],
  ['<span class="cbs-hero__meta-num">One team</span>', '<span class="cbs-hero__meta-num">Une équipe</span>'],
  ['Strategy, content, livestream and ads end to end', "Stratégie, contenu, livestream et achat média, de bout en bout"],
  ['aria-label="Scroll to next section"', 'aria-label="Aller à la section suivante"'],
  ['>Scroll<', '>Faire défiler<'],
  ['<span class="eyebrow">Our approach</span>', '<span class="eyebrow">Notre approche</span>'],
  ['<h2>Two things to know before we touch your social commerce</h2>', '<h2>Deux constats avant que nous touchions à votre social commerce</h2>'],
  ['Most brands approach Douyin and RedNote the way they approach any new market.', "La plupart des marques abordent Douyin et RedNote comme n'importe quel nouveau marché."],
  ['Neither platform rewards that approach. Two things shape how we work instead.', "Aucune des deux plateformes ne récompense cette approche. Deux principes structurent notre manière de faire."],
  ['<span class="cbs-truth__badge-eyebrow">Why it matters</span>', '<span class="cbs-truth__badge-eyebrow">Pourquoi cela compte</span>'],
  ['aria-label="Daily content workflow"', 'aria-label="Flux de production de contenu quotidien"'],
  ['aria-label="What we run, daily"', 'aria-label="Ce que nous opérons, au quotidien"'],
  ['<span class="eyebrow">Why brands choose us</span>', '<span class="eyebrow">Pourquoi les marques nous choisissent</span>'],
  ['<h2>Most social commerce agencies have never run a store. We have.</h2>', '<h2>La plupart des agences social commerce n\'ont jamais tenu de boutique. Nous, si.</h2>'],
  ['Our team comes from Publicis Commerce China. We have built and run Douyin', "Notre équipe vient de Publicis Commerce China. Nous avons bâti et opéré des boutiques Douyin"],
  ['and RedNote stores for Shiseido, Pierre Fabre, Camper and others. We know', "et RedNote pour Shiseido, Pierre Fabre, Camper et d'autres. Nous savons"],
  ['which creators convert because we have briefed them. We know what Qianchuan', "quels créateurs convertissent parce que nous les avons briefés. Nous savons ce que Qianchuan"],
  ['rewards because we have spent against it every day.', "valorise parce que nous y avons dépensé chaque jour."],
  ['<p>Most of the consultants who talk about Douyin and RedNote have never actually run a store on either one. We have, and that changes what we tell you.</p>', '<p>La plupart des consultants qui parlent de Douyin et RedNote n\'y ont jamais tenu de boutique. Nous, si, et cela change ce que nous vous disons.</p>'],
  ['We have lost an 11.11 and won the next one. When we tell you what works', "Nous avons perdu un 11.11 et remporté celui qui a suivi. Quand nous vous indiquons ce qui fonctionne"],
  ['in March, it is because we were inside the platform in February.', "en mars, c'est parce que nous étions à l'intérieur de la plateforme en février."],
  ['>Meet the team<', '>Rencontrer l\'équipe<'],
  ['<span class="eyebrow">What you can expect</span>', '<span class="eyebrow">Ce que vous pouvez attendre</span>'],
  ['<span class="eyebrow">What we do</span>', '<span class="eyebrow">Ce que nous faisons</span>'],
  ['<h2>Six things, run by one team</h2>', '<h2>Six terrains, une seule équipe</h2>'],
  ['Not four agencies, four briefs and four invoices. One operator across content,', "Plutôt que quatre agences, quatre briefs et quatre factures. Un seul opérateur sur le contenu,"],
  ['commerce, creators and media. The strategy that goes into the deck is the one', "le commerce, les créateurs et le média. La stratégie qui figure dans la présentation est celle"],
  ['that runs on the platform on Monday.', "qui tourne sur la plateforme dès lundi."],
  ['>Learn more', '>En savoir plus'],
  ['<span class="eyebrow">Decision point</span>', '<span class="eyebrow">Point de décision</span>'],
  ['<h2>Who owns the inventory. Two ways we run your social store.</h2>', '<h2>Qui tient le stock. Deux manières de faire tourner votre boutique sociale.</h2>'],
  ['The first commercial question on any Douyin or RedNote store is who owns the', "La première question commerciale d'une boutique Douyin ou RedNote, c'est de savoir qui détient le"],
  ['stock. That answer shapes the contract, the margin and how you book China', "stock. La réponse cadre le contrat, la marge et la façon de comptabiliser le chiffre d'affaires chinois."],
  ['revenue. We work in two models. Pick the one that fits how you want China on', "Nous travaillons sur deux modèles. Choisissez celui qui colle à votre manière d'inscrire la Chine"],
  ['your books.', "dans vos comptes."],
  ['Most common', "Le plus fréquent"],
  ['<span class="cbs-tabs__when-label">Best when</span>', '<span class="cbs-tabs__when-label">À privilégier quand</span>'],
  ['<span class="cbs-owns__label">Who owns what</span>', '<span class="cbs-owns__label">Qui tient quoi</span>'],
  ['Talk about the {m.name}', 'Échanger sur le {m.name}'],
  ['<span class="cbs-tabs__list-label">You receive</span>', '<span class="cbs-tabs__list-label">Vous recevez</span>'],
  ['<span class="cbs-tabs__list-label">We handle</span>', '<span class="cbs-tabs__list-label">Nous prenons en charge</span>'],
  ['<span class="eyebrow">How to pick</span>', '<span class="eyebrow">Comment trancher</span>'],
  ['<h3>One question, two answers</h3>', '<h3>Une question, deux réponses</h3>'],
  ['<p>Do you want to own the customer relationship on Douyin and RedNote, or do you want a clean wholesale exit? That is what decides the model.</p>', '<p>Voulez-vous tenir la relation client sur Douyin et RedNote, ou préférez-vous une sortie nette en gros ? C\'est cette question qui tranche le modèle.</p>'],
  ['<span class="cbs-compare__head-label">DP model</span>', '<span class="cbs-compare__head-label">Modèle DP</span>'],
  ['<span class="cbs-compare__head-sub">You own the inventory</span>', '<span class="cbs-compare__head-sub">Vous tenez le stock</span>'],
  ['<span class="cbs-compare__head-label">Distributor model</span>', '<span class="cbs-compare__head-label">Modèle distributeur</span>'],
  ['<span class="cbs-compare__head-sub">We own the inventory</span>', '<span class="cbs-compare__head-sub">Nous tenons le stock</span>'],
  ['The model that fits depends on two things: how big you want China social', "Le modèle qui colle dépend de deux variables : la place que vous voulez accorder au social commerce chinois"],
  ['commerce to be in your global revenue, and how much cash flow you can put behind', "dans votre chiffre d'affaires global, et la trésorerie que vous pouvez aligner derrière"],
  ['that ambition. Brands with high ambition and the working capital to fund', "cette ambition. Les marques très ambitieuses qui peuvent financer le stock"],
  ['inventory and media usually pick DP. Brands wanting steady China revenue without', "et le média choisissent en général le DP. Celles qui visent un chiffre d'affaires régulier sans"],
  ['tying up cash usually pick distributor. Some brands run both in parallel across', "immobiliser leur trésorerie optent pour le distributeur. Certaines marques tiennent les deux en parallèle sur"],
  ['different categories. None of this is a maturity ladder.', "des catégories différentes. Rien de tout cela ne forme une échelle de maturité."],
  ['<span class="eyebrow">How we work</span>', '<span class="eyebrow">Notre méthode</span>'],
  ['<h2>Four rhythms that run your social commerce</h2>', '<h2>Quatre cadences qui font tourner votre social commerce</h2>'],
  ['Once the model is set, the work does not stop, it just changes shape. Four', "Une fois le modèle posé, le travail ne s'arrête pas, il change de forme. Quatre"],
  ['rhythms run in parallel, all year.', "cadences tournent en parallèle, toute l'année."],
  ['<span class="cbs-tabs__when-label">Outcome</span>', '<span class="cbs-tabs__when-label">Résultat</span>'],
  ['<span class="cbs-tabs__list-label">What we do</span>', '<span class="cbs-tabs__list-label">Ce que nous faisons</span>'],
  ['<span class="cbs-tabs__list-label">Deliverables</span>', '<span class="cbs-tabs__list-label">Livrables</span>'],
  ['<span class="eyebrow">If you want social without commerce</span>', '<span class="eyebrow">Pour du social sans commerce</span>'],
  ['<h2>Powered by TheRedScroll</h2>', '<h2>Adossé à TheRedScroll</h2>'],
  ['Some brands want a Chinese social presence (WeChat, Weibo, Douyin content,', "Certaines marques veulent une présence sociale chinoise (WeChat, Weibo, contenu Douyin,"],
  ['RedNote notes) without the full commerce operation behind it. TheRedScroll is', "notes RedNote) sans l'opération commerce complète derrière. TheRedScroll est"],
  ['our sister agency built for exactly that. Daily content, community and KOL', "notre agence sœur conçue précisément pour cela. Contenu quotidien, communauté et seeding KOL,"],
  ['seeding, without a storefront sitting underneath.', "sans boutique en dessous."],
  ['<span class="cbs-sister__chip">Sister product</span>', '<span class="cbs-sister__chip">Produit sœur</span>'],
  ['<h3 class="cbs-sister__title">Off-platform social, run by the same operators.</h3>', '<h3 class="cbs-sister__title">Social hors plateformes, tenu par les mêmes opérateurs.</h3>'],
  ['When the store is not the priority but the brand still needs to show up in', "Lorsque la boutique n'est pas la priorité mais que la marque doit rester présente dans"],
  ['the feed, TheRedScroll handles the content and the community. Same group,', "le fil, TheRedScroll prend en charge le contenu et la communauté. Même groupe,"],
  ['same standards, separate brand, smaller monthly retainer.', "mêmes standards, marque distincte, retainer mensuel plus léger."],
  ['channels covered: WeChat, Weibo, Douyin, RedNote', "canaux couverts : WeChat, Weibo, Douyin, RedNote"],
  ['years of Chinese social experience inside the group', "années d'expérience sur le social chinois au sein du groupe"],
  ['<span class="cbs-sister__stat-num">In-house</span>', '<span class="cbs-sister__stat-num">En interne</span>'],
  ['native team, content shot in studio', "équipe native, contenu tourné en studio"],
  ['Visit TheRedScroll', "Voir TheRedScroll"],
  ['Brief us on your social plan', "Confiez-nous votre plan social"],
  ['<h2>Twenty questions, answered straight</h2>', '<h2>Vingt questions, réponses directes</h2>'],
  ['The questions we get on the first call, with the answers we give once we know', "Les questions qui nous arrivent au premier rendez-vous, avec les réponses que nous formulons une fois la marque connue."],
  ['the brand. Filter by topic.', "À filtrer par sujet."],
  ['aria-label="Filter FAQs by category"', 'aria-label="Filtrer la FAQ par catégorie"'],
  ["{c === 'All' ?", "{c === \"Toutes\" ?"],
  ['<span class="eyebrow eyebrow--on-dark cbs-reveal">Let\'s talk</span>', '<span class="eyebrow eyebrow--on-dark cbs-reveal">Parlons-en</span>'],
  ['Let\'s talk', "Parlons-en"],
  ['<h2 class="cbs-cta__title">Ready to sell where China actually shops?</h2>', '<h2 class="cbs-cta__title">Prêts à vendre là où la Chine fait vraiment ses achats ?</h2>'],
  ['Tell us the category, the budget range, the platforms you are considering and', "Dites-nous la catégorie, la fourchette budgétaire, les plateformes envisagées et"],
  ['whether you are aiming at a festival window or a steady-state launch. A senior', "si vous visez une fenêtre festival ou un lancement de régime stable. Un membre senior"],
  ['member of the team replies within one working day. You will not be passed', "de l'équipe vous répond sous un jour ouvré. Vous ne serez pas renvoyé"],
  ['through a sales funnel or an auto-responder.', "vers un tunnel commercial ni un répondeur automatique."],
  ['>Start the conversation<', '>Lancer la conversation<'],
  ['>See our case studies<', '>Voir nos études de cas<'],
  ['href="/contact"', 'href="/fr/nous-contacter"'],
  ['href="/work"', 'href="/fr/nos-realisations"'],
  ['href="/about#team"', 'href="/fr/qui-nous-sommes#team"'],
);

my $count = 0;
my $in_block = 0;
for my $i (0..$#lines) {
  my $line = $lines[$i];
  if ($line =~ /<style\b/) { $in_block = 1; }
  if ($line =~ /<script\b/ && $line !~ /set:html/) { $in_block = 1; }
  if ($in_block) {
    if ($line =~ /<\/style>|<\/script>/) { $in_block = 0; }
    next;
  }
  for my $pair (@subs) {
    my ($from, $to) = @$pair;
    my $n = ($line =~ s/\Q$from\E/$to/g);
    $count += $n;
  }
  $lines[$i] = $line;
}

open my $out, '>:encoding(UTF-8)', $file or die;
print $out join('', @lines);
close $out;
print "Applied $count\n";
