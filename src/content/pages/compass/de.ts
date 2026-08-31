/**
 * Deutsche Fassung von /compass und den vier Unterseiten.
 * Register: Wirtschaftsressort, Sie-Anrede, deutsche Anführungszeichen „…“.
 */
import type { CompassCopy } from './types';

const copy: CompassCopy = {
  facts: {
    headline: 'Eine Kontaktliste nennt Ihnen, wer existiert. Wir sagen Ihnen, wer passt.',
    problemBody: [
      'Wer „China Distributoren Datenbank“ googelt, landet bei abgegriffenen Listen mit einem Kontaktformular davor. Tausend Namen bis zum Mittag, kaum einer davon passend für Ihre Marke.',
      'Wir haben Marken erlebt, die einen Namen direkt aus so einer Liste unterschrieben haben. Vier Monate später stellt sich heraus: Der Partner hat die Kategorie nie wirklich geführt. Oder das besichtigte Lager war für den Vormittag angemietet.',
      'Der Schaden bleibt fast nie im laufenden Jahr. Verlorene Regalfläche. Ein Markenaufbau von vorn, den niemand eingeplant hatte. Ein Launch-Fenster, das sich nicht wieder öffnet.',
    ],
    yearsLabel: 'Jahre vor Ort',
    comparison: {
      eyebrow: 'Was uns unterscheidet',
      title: 'Eine Datenbank, kein weiteres Verzeichnis',
      axisHeader: 'Vergleichskriterium',
      columnHeaders: { scraped: 'Abgegriffene Verzeichnisse', ours: 'Compass' },
      rows: [
        {
          label: 'Wie Namen hineinkommen',
          scraped: 'Massenimporte aus öffentlichen Quellen',
          ours: 'Ein Termin nach dem anderen',
        },
        {
          label: 'Was wir wirklich über sie wissen',
          scraped: 'Ein Firmenname. Vielleicht eine E-Mail-Adresse.',
          ours: 'Echte Kategorien, echte Volumina, Zahlungsziele und die Passung zu Ihrer Marke',
        },
        { label: 'Jahre Aufbauarbeit', scraped: 'Ein paar Monate', ours: 'Fünfzehn' },
        {
          label: 'Was am Ende herauskommt',
          scraped: 'Eine Liste von Vielleicht',
          ours: 'Eine Auswahl, die ein Treffen wert ist',
        },
      ],
    },
    steps: {
      eyebrow: 'So arbeiten wir',
      title: 'Sie briefen uns. Wir kommen mit der Auswahlliste zurück.',
      quote:
        'Die Suche nach dem richtigen Partner in China verschlingt in der Regel ein Quartal. Wir fangen bei der Antwort an.',
      items: [
        {
          label: 'Das Briefing',
          body: 'Eine halbe bis eine Stunde am Telefon. Ihre Kategorie, Ihr Stand und das, was Sie in China wirklich erreichen wollen. Ein Cross-Border-Test. Ein Launch im Inlandsmarkt. Der stille Wechsel eines Distributors, der nicht mehr ans Telefon geht. Manchmal etwas, das uns noch nie begegnet ist, auch gut.',
        },
        {
          label: 'Die Auswahlliste',
          body: 'Wir kommen mit einer Landkarte der Akteure zurück, die in Ihrem Segment tatsächlich operieren, dazu drei bis fünf Partner, die ein Treffen wert sind. Jeder mit einer kurzen Einschätzung: Stärken, Schwachstellen und die Punkte, an denen sich in der Verhandlung Druck lohnt.',
        },
        {
          label: 'Die Vorstellung',
          body: 'Die meisten dieser Partner kennen uns bereits. Sie gehen mit einer Beziehung im Rücken hinein, und damit sitzt meist die erste Garnitur am Tisch statt des Pitch-Teams.',
        },
      ],
    },
    categories: [
      'Beauty',
      'Lebensmittel und Getränke',
      'Mode',
      'Wohnen',
      'Wellness',
      'Baby und Kleinkind',
      'Heimtier',
      'Nahrungsergänzung',
    ],
    categoriesClosing: 'Überwiegend B2C, dazu B2B, wenn der Einkäufer in China sitzt.',
    partnerTypes: [
      {
        name: 'Distributoren',
        body: 'Nationale und regionale Akteure, im General Trade, in Freihandelszonen und im Cross-Border-E-Commerce.',
      },
      {
        name: 'TPs',
        body: 'Tmall und Douyin Partner, die Flagship Stores, Content Commerce und Livestream betreiben.',
      },
      {
        name: 'Importeure',
        body: 'Lizenzen, Zollabwicklung und Lagerhaltung, für den General Trade wie für die Freihandelszone.',
      },
      {
        name: 'Offline-Betreiber',
        body: 'Key-Account-Einkäufer, regionale Großhändler und Gruppenkauf-Betreiber mit echtem Regalzugang.',
      },
    ],
    profileFields: [
      { name: 'Unternehmensdaten', body: 'Rechtsform, Sitz, Teamgröße, Eigentümerstruktur.' },
      {
        name: 'Echte Kategorien',
        body: 'Nicht das, was die Website behauptet. Die Kategorien, die wir sie haben führen sehen.',
      },
      {
        name: 'Kanäle mit echtem Volumen',
        body: 'Tmall, JD, Douyin, Pinduoduo, Xiaohongshu, offline, Cross-Border. Welche tragen das Geschäft, welche werden nur angetippt.',
      },
      {
        name: 'Präsenz',
        body: 'Städte, Provinzen, Lager und der Ort, an dem das Vertriebsteam tatsächlich sitzt.',
      },
      {
        name: 'Konditionen',
        body: 'Marge, Exklusivität, Zahlungsziele, Mindestabnahmen, Marketingbeteiligung.',
      },
      {
        name: 'Operative Kapazität',
        body: 'Volumen, das sie realistisch stemmen. Vorlaufzeiten. Kundenservice. Retouren.',
      },
      {
        name: 'Betreute Marken',
        body: 'Frühere und aktuelle, überall dort, wo wir direkten Einblick haben.',
      },
      {
        name: 'Reputationssignale',
        body: 'Was andere Marken über sie sagen, offiziell und hinter vorgehaltener Hand. Wo sie geliefert haben, wo sie zurückgeblieben sind.',
      },
      {
        name: 'Unsere Einschätzung',
        body: 'Empfehlen, empfehlen mit Vorbehalt, meiden, oder nur unter bestimmten Bedingungen.',
      },
    ],
    decidingQuestions: [
      'Cross-Border oder Inlandsmarkt?',
      'Tmall, JD, Douyin oder stationärer Handel?',
      'Welche Kategorien führen sie wirklich, verglichen mit denen auf ihrer Website?',
      'Lassen sie sich auf Exklusivität ein?',
      'Wie zahlen sie, und wie schnell?',
      'Haben wir sie mit einer Marke wie Ihrer erfolgreich erlebt, oder scheitern sehen?',
    ],
    failureStories: [
      {
        kind: 'Der Distributor',
        story:
          'Auf dem Papier tadellos. Ein glänzender Pitch. Danach achtzehn Monate auf der Ware gesessen, während der Marke ihr Launch-Fenster wegbrach.',
      },
      {
        kind: 'Der TP',
        story:
          'Flagship-Niveau versprochen. Die Kategorie nie geführt. Aufgefallen ist es im vierten Monat, als die Produktseiten bereits verbrannt waren.',
      },
      {
        kind: 'Der Importeur',
        story:
          'Lager, Transport, Zoll, alles sauber aufgesetzt. Keine echte Fähigkeit, irgendetwas an irgendwen zu verkaufen. Paletten rein. Paletten geblieben.',
      },
    ],
    noCommission: 'Keine Provision von Distributoren. Niemals.',
    signInPrompt: { before: 'Bereits Compass-Partner? Melden Sie sich an unter ', after: '.' },
  },

  index: {
    title: 'Compass: die geprüfte Datenbank für China-Partner | TheChinaPath',
    description:
      'Compass ist unsere private Datenbank geprüfter China-Distributoren, Tmall und Douyin Partner und Importeure. So entsteht Ihre Auswahlliste, in Wochen statt in einem Quartal.',
    eyebrow: 'Partner finden',
    h1: 'Sparen Sie sich 12 Monate Partnersuche.',
    lead: 'Compass ist unsere private Datenbank aus Distributoren, Tmall Partnern, Douyin Partnern und Importeuren. Jeden Einzelnen haben wir persönlich getroffen, vor Ort geprüft und in vielen Fällen an echten Markenprojekten begleitet.',
    body: 'Der falsche Partner in China kostet zwei Jahre. Manche Marken erholen sich davon nie ganz. Genau diesen Teil ersparen wir Ihnen.',
    ctaPrimary: 'Auswahlliste anfordern',
    ctaSecondary: 'So entsteht die Liste',
    heroAlt:
      'Zwei Manager gehen im Gespräch durch ein Distributionslager für Konsumgüter in Shanghai',
    heroChip: 'Persönlich getroffen. Vor Ort geprüft.',
    h1Rows: [
      { text: 'Sparen Sie sich 12 Monate' },
      { text: 'Partnersuche.', style: 'highlight' },
    ],
    heroStats: [
      { value: '15', counter: 15, label: 'Jahre vor Ort in China' },
      { value: 'Drei bis fünf', label: 'Partner pro Auswahlliste' },
      { value: 'Zwei bis drei', label: 'Wochen bis zur Liste' },
    ],
    crumbHome: 'Startseite',
    crumbSection: 'Partner finden',
    scrollCue: 'Scrollen',
    problemEyebrow: 'Das Problem',
    problemFigureAlt:
      'In Folie eingeschweißte Paletten mit unverkaufter Ware in einem schwach beleuchteten Lager',
    problemCaption: 'Paletten rein. Paletten geblieben.',
    stepAlts: [
      'Eine Markenmanagerin macht handschriftliche Notizen während eines Briefings per Video',
      'Ein Berater zeichnet eine Route auf einer China-Karte ein, daneben ausgedruckte Partnerprofile',
      'Eine Markenmanagerin gibt einem Vertriebsvorstand in einem Besprechungsraum in Shanghai die Hand',
    ],
    coverageEyebrow: 'Der Umfang',
    coverageTitle: 'Konsumkategorien, im Inlandsmarkt wie im Cross-Border.',
    coverageLead:
      'Distributoren, Tmall Partner, Douyin Partner, Importeure und Kanalspezialisten in ganz China. Online und stationär, national und regional, dazu Nischenspezialisten. Ein Name kommt nur hinein, wenn wir einen echten Grund haben, ihn zu kennen.',
    whoLabel: 'Wer erfasst ist',
    categoriesLabel: 'Kategorien',
    readMoreEyebrow: 'Mehr dazu',
    readMoreTitle: 'Die lange Antwort, in drei Teilen.',
    readMoreCta: 'Lesen',
    cards: [
      {
        title: 'Warum geprüft',
        body: 'Was in der Datenbank steckt, und was der falsche Partner eine Marke tatsächlich kostet.',
      },
      {
        title: 'Was drinsteht',
        body: 'Wer erfasst ist, was wir zu jedem festhalten, und warum wir keinen Zugang verkaufen.',
      },
      {
        title: 'So entsteht die Liste',
        body: 'Vom ersten Briefing bis zur Vorstellung, in Wochen statt in Monaten.',
      },
    ],
    cardAlts: [
      'Pitch-Termin mit einem Distributor, über den Konferenztisch hinweg gesehen',
      'Partnerprofile werden am Schreibtisch durchgesehen',
      'Zwei Kollegen gehen durch eine Distributionsanlage',
    ],
    closingEyebrow: 'Kontakt',
    closingTitle: 'Unverbindlich. Ohne langen Pitch.',
    closingLead:
      'Sie gehen nach China? Sie ersetzen einen Partner, der nicht mehr liefert? Sie suchen noch die richtige Vertriebsform für Ihre Kategorie? Das erste Gespräch ist kurz. Die meisten wissen nach einer halben Stunde, ob das die richtige Unterstützung für sie ist. Wenn nicht, können wir meist sagen, wer besser passt.',
    closingCtaPrimary: 'Briefen Sie uns zu Ihrer Kategorie',
    closingCtaSecondary: 'Zum Vertriebsangebot',
  },

  whyVetted: {
    title: 'Warum eine geprüfte China-Distributoren-Datenbank | Compass | TheChinaPath',
    description:
      'Die meisten China-Distributoren-Datenbanken sind abgegriffene Listen. Compass ist über fünfzehn Jahre entstanden, Termin für Termin, im Team, das Konsumgütermarken in den chinesischen Vertrieb bringt.',
    eyebrow: 'Warum geprüft',
    h1: 'Die meisten „China-Distributoren-Datenbanken“ sind abgegriffene Listen. Diese nicht.',
    lead: 'Compass ist Termin für Termin entstanden, in einem Team, das seit fünfzehn Jahren Konsumgütermarken in Chinas Vertriebs- und E-Commerce-Kanäle bringt. Jeder Name auf der Liste wurde persönlich geprüft, vor Ort besucht oder in einem echten Markenmandat direkt erprobt.',
    body: 'Das ist der Unterschied zwischen dem Wissen, dass es einen Partner gibt, und dem Wissen, ob er zu Ihrer Marke passt.',
    ctaPrimary: 'Sprechen wir über Ihre Auswahlliste',
    ctaSecondary: 'Sehen, was drinsteht',
    questionEyebrow: 'Das Problem, das uns immer wieder begegnete',
    questionTitle: 'Jede Marke, die nach China geht, stellt dieselbe Frage.',
    questionPull: 'Mit wem verkaufen wir?',
    questionBody:
      'Distributoren, TPs, Importeure, Cross-Border-Betreiber, Kategoriespezialisten. Die Liste ist lang, die Namen wechseln schnell, und von außen sehen sie alle gleich aus. Eine Präsentation bleibt eine Präsentation. Jede hat ihr Lagerfoto, ihre Wand voller Kundenlogos und einen sehr selbstbewussten Kundenbetreuer.',
    storiesEyebrow: 'Drei Arten, danebenzugreifen',
    storiesTitle: 'Jeden dieser Fälle haben wir mehr als einmal erlebt.',
    figureAlt:
      'Ein Prüfer zu Besuch und ein Betriebsleiter auf der Laderampe, vor gestapelten Paletten',
    figureCaption:
      'Jeder Name in der Datenbank begann mit einem Besuch wie diesem. Das ist der langsame Teil, und er ist der Grund, warum die Liste etwas taugt.',
    storiesCost:
      'Der Schaden endet selten nach einem schlechten Jahr. Verlorene Regalfläche. Verbrannte Produktseiten. Ein China-Einstieg, der von vorn beginnen muss.',
    buildingEyebrow: 'Woran wir bauen',
    buildingTitle: 'Fünfzehn Jahre Termine, aufgeschrieben.',
    buildingBody: [
      'Die Datenbank war kein Plan. Sie war ein Nebenprodukt. Unser Führungsteam arbeitet seit fünfzehn Jahren im Vertrieb und E-Commerce in China, und irgendwann warf diese Arbeit etwas ab, das niemand eingeplant hatte: sehr viele Daten.',
      'Jeder geprüfte Distributor. Jeder gebriefte TP. Jedes besichtigte Lager. Wir haben festgehalten, was sie tatsächlich tun, nicht was ihre Präsentation behauptet. Echte Kategorien. Echte Volumina. Der Ruf, den sie bei den Marken haben, mit denen sie bereits gearbeitet haben. Die, die wir sofort empfehlen, und die, von denen wir einen Kunden leise wegführen.',
      'Nach ein paar Jahren aus Tabellen und geteilten Dokumenten wurde daraus Compass.',
    ],
    questionsEyebrow: 'Warum eine Datenbank',
    questionsTitle: 'Ein Verzeichnis listet Namen. Eine Datenbank beantwortet Fragen.',
    questionsLead:
      'Diese Fragen entscheiden über eine Partnerschaft. Keine einzige lässt sich auf einer Unternehmenswebsite beantworten.',
    questionsCost:
      'Die Datenbank entscheidet nicht für Sie. Sie kürzt die Liste und sorgt dafür, dass die verbliebenen Namen Ihre Zeit wert sind.',
    nextCtaPrimary: 'Sprechen wir über Ihre Auswahlliste',
    nextCtaSecondary: 'Weiter: Was drinsteht',
  },

  whatIsInside: {
    title: 'Was in Compass steckt | TheChinaPath',
    description:
      'Profile geprüfter China-Distributoren, Tmall und Douyin Partner, Importeure und Kanalspezialisten. Echte Kategorien, echte Volumina, echte Konditionen und unsere Einschätzung zu jedem.',
    eyebrow: 'Was drinsteht',
    h1: 'Keine Namen und E-Mail-Adressen.',
    lead: 'Distributoren, Tmall Partner, Douyin Partner, Importeure und Kanalspezialisten in ganz China. Jeder bekommt ein strukturiertes Profil: die Kategorien, die er wirklich führt, echte Volumina, Konditionen, operative Kapazität und die Einschätzung unseres Teams, ob wir ihn empfehlen und für welche Art von Marke.',
    body: 'Genau dieses Detail entscheidet, ob ein Partner passt. Und genau dieses Detail schafft es nie in eine Verkaufspräsentation.',
    ctaPrimary: 'Sprechen wir über Ihre Auswahlliste',
    ctaSecondary: 'So entsteht die Liste',
    whoEyebrow: 'Wer erfasst ist',
    whoTitle: 'Distributoren, TPs, Importeure und Kanalspezialisten in ganz China.',
    whoLead:
      'Inlandsmarkt und Cross-Border. Online und stationär. Dazu Nischenspezialisten. Ein Name kommt nur hinein, wenn wir einen echten Grund haben, ihn zu kennen.',
    coverageLabel: 'Abgedeckte Kategorien',
    fieldsEyebrow: 'Was wir festhalten',
    fieldsTitle: 'Die Felder, die über die Passung einer Partnerschaft entscheiden.',
    fieldsLead:
      'Neun Feldgruppen bilden jedes Profil. Zusammen decken sie ab, was eine Verkaufspräsentation selten berührt. Die letzte lesen Kunden zuerst.',
    figureAlt:
      'Partnerakten, ausgedruckte Profilbögen und ein handschriftliches Notizbuch auf einem Schreibtisch',
    figureCaption:
      'Feldnotizen, Partnerakten, Gesprächsprotokolle. Das Arbeitsarchiv, aus dem die Datenbank entstanden ist.',
    notProductEyebrow: 'Eine berechtigte Frage',
    notProductTitle: 'Warum wir Ihnen keinen Zugang verkaufen.',
    notProductBody: [
      'Man fragt uns zu Recht, ob nicht ein Login zum Stöbern reiche. Die Antwort ist nein, und der Grund ist kein kommerzieller. Ein Profil ist eine Einschätzung, und eine Einschätzung ohne ihren Kontext ist schlechter als gar keine Information. „Empfehlen mit Vorbehalt“ sagt nichts, solange niemand erklärt, welche Vorbehalte gemeint sind und ob sie für eine Marke wie Ihre gelten.',
      'Dazu kommt die Haltbarkeit. Ein Profil von vor achtzehn Monaten kann bereits falsch sein. Partner verlieren Kunden, wechseln die Kategorie, werden übernommen, verlieren die eine Person, die sie gut gemacht hat. Eine Auswahlliste zu bauen heißt zur Hälfte suchen und zur Hälfte nachprüfen. Das Nachprüfen nimmt Ihnen kein Abonnement ab.',
    ],
    notProductClosing: {
      before:
        'Compass ist deshalb kein Produkt mit Stufen. Es ist das Werkzeug, mit dem unser Team arbeitet, sobald Sie uns briefen, und was Sie erhalten, ist das Ergebnis dieser Arbeit: eine kurze Partnerliste, eine schriftliche Einschätzung zu jedem und ein Gespräch über das Warum. Partner mit bestehendem Konto melden sich an unter ',
      after: '.',
    },
    nextCtaPrimary: 'Briefen Sie uns zu Ihrer Kategorie',
    nextCtaSecondary: 'Weiter: So entsteht die Liste',
  },

  howItWorks: {
    title: 'So entsteht eine Auswahlliste chinesischer Partner | Compass | TheChinaPath',
    description:
      'Sie briefen uns. Wir arbeiten die Datenbank durch und kommen in zwei bis drei Wochen mit einer Auswahlliste chinesischer Distributoren und Plattformpartner zurück, die ein Treffen wirklich wert sind.',
    eyebrow: 'So entsteht die Liste',
    h1: 'Ein belastbarer Ausgangspunkt, in Wochen statt in Monaten.',
    lead: 'Sie briefen uns. Wir arbeiten die Datenbank durch und kommen zügig mit einer kurzen oder einer langen Liste von Partnern zurück, die ein Treffen wert sind. Namen, die zu Ihrer Kategorie passen, zu Ihrem Stand und zu dem, was Sie in China wirklich vorhaben.',
    body: 'Wir können den Erfolg keiner Partnerschaft zusichern. Das kann keine Partnersuche. Zusichern können wir einen deutlich stärkeren Ausgangspunkt, als ihn die meisten Marken allein zusammenbekommen.',
    ctaPrimary: '30-Minuten-Gespräch buchen',
    ctaSecondary: 'Zum Ablauf',
    heroAlt:
      'Eine Markenmanagerin und ein Berater an der Ecke eines vollgestellten Tisches in einem Shanghaier Büro, die eine ausgedruckte Partnerliste durchgehen',
    heroChip: 'Zwei bis drei Wochen, von Anfang bis Ende',
    h1Rows: [
      { text: 'Ein belastbarer Ausgangspunkt,' },
      { text: 'in Wochen statt in Monaten.', style: 'highlight' },
    ],
    heroStats: [
      { value: '15', counter: 15, label: 'Jahre vor Ort in China' },
      { value: 'Zwei bis drei', label: 'Wochen von Anfang bis Ende' },
      { value: 'Drei bis fünf', label: 'Namen, im Detail geprüft' },
    ],
    crumbHome: 'Startseite',
    crumbSection: 'Compass',
    scrollCue: 'Scrollen',
    engagementEyebrow: 'Wie das Mandat läuft',
    engagementTitle: 'Vom ersten Gespräch zur Auswahlliste.',
    engagementLead:
      'Drei Schritte. Zwei bis drei Wochen. Am Ende ein Dokument und eine Arbeitssitzung. Schneller bei engem Briefing, etwas länger bei breitem Zuschnitt.',
    phases: [
      {
        title: 'Das Briefing',
        body: 'Eine Videokonferenz zum Auftakt, eine halbe bis eine Stunde. Wir fragen nach Ihrer Kategorie, Ihrem Stand, Ihren Kanalprioritäten, Ihrem Zeitplan und den Zwängen, mit denen Sie ohnehin schon arbeiten.',
      },
      {
        title: 'Die Datenbank',
        body: 'Wir ziehen die Namen, die zum Briefing passen, und gleichen jeden mit der heutigen Lage des Partners ab. Ein Profil von vor achtzehn Monaten kann bereits überholt sein. Hier bewegt sich vieles schnell.',
      },
      {
        title: 'Die Übergabe',
        body: 'Ein Dokument mit der Partnerliste, den Profilen und unserer Einschätzung zu jedem. Dazu eine Arbeitssitzung, um alles gemeinsam durchzugehen, Seite für Seite.',
      },
    ],
    phaseWhen: ['Tag eins', 'Woche eins und zwei', 'Woche drei'],
    phaseAlts: [
      'Ein Mann in einer Videokonferenz am Schreibtisch, zum Bildschirm gebeugt, der gleichzeitig mitschreibt',
      'Eine Frau an einem Zwei-Monitor-Arbeitsplatz gleicht eine Tabelle mit ausgedruckten Distributorenprofilen ab',
      'Drei Kolleginnen und Kollegen am Ende eines Besprechungstisches, eine Person zeigt auf eine Zeile im Ausdruck',
    ],
    optionsEyebrow: 'Kurze Liste, lange Liste oder beides',
    optionsTitle: 'Je nachdem, wo Sie stehen.',
    options: [
      {
        label: 'Kurze Liste',
        tagline: 'Drei bis fünf Namen',
        body: 'Im Detail aufbereitet und bereit für ein Treffen. Für Marken, die zügig vorgehen und eine Entscheidung in den nächsten ein bis zwei Monaten vorgemerkt haben.',
      },
      {
        label: 'Lange Liste',
        tagline: 'Fünfzehn bis zwanzig Namen',
        body: 'Ein breiterer Blick über Kategorien, Kanäle oder Regionen, mit strukturiertem Vergleich. Für Marken, die noch früher stehen und die richtige Vertriebsform erst suchen.',
      },
    ],
    optionsNote: 'Manche Marken wollen beides. Das Briefing entscheidet.',
    deliverablesEyebrow: 'Was Sie bekommen',
    deliverablesTitle: 'Ein Dokument, ein Gespräch und auf Wunsch die persönliche Vorstellung.',
    figureAlt:
      'Drei Personen an der Ecke eines Besprechungstisches in Shanghai, die eine ausgedruckte Partnerliste durchgehen',
    figureCaption:
      'Die Arbeitssitzung am Ende. Die Liste taugt wenig, wenn Sie dem Denken dahinter nicht trauen.',
    deliverables: [
      {
        name: 'Ein Profil je Partner',
        body: 'Echte Kategorien, Kanäle, Präsenz, Konditionen, betreute Marken und unsere Einschätzung zu jedem. Genug, um in ein Treffen zu gehen und genau zu wissen, was zu fragen und worauf zu achten ist.',
      },
      {
        name: 'Eine Arbeitssitzung',
        body: 'Wir gehen das Ganze mit Ihnen durch. Warum dieser Name. Warum jener nicht. Wo wir in der Verhandlung Druck machen würden. Die Liste taugt wenig, wenn Sie dem Denken dahinter nicht trauen.',
      },
      {
        name: 'Persönliche Vorstellung',
        body: 'Wenn Sie möchten, stellen wir Sie vor. Die meisten dieser Partner kennen uns bereits, damit sitzt meist die erste Garnitur am Tisch statt des Pitch-Teams.',
      },
    ],
    introAlt:
      'Zwei Personen geben sich in einer Bürolobby die Hand, eine dritte steht etwas abseits und stellt sie einander vor',
    limitsEyebrow: 'Was wir sagen können und was nicht',
    limitsTitle: 'Ehrlich zu den Grenzen.',
    limitsBody: [
      'Was wir können: Ihnen sagen, wer passt, auf Basis dessen, was wir selbst gesehen und bearbeitet haben, und dafür sorgen, dass die Namen auf Ihrer Liste ihren Platz verdient haben.',
      'Was wir nicht können: Ihnen sagen, wie die Partnerschaft in zwei Jahren aussieht. Das hängt vom ausgehandelten Vertrag ab, vom Team, das man auf Ihr Konto setzt, und von vielem, was erst nach der Unterschrift passiert.',
      'Trotzdem gesagt: Die meisten China-Einstiege, die entgleisen, entgleisen bei der Partnerwahl, nicht in der Umsetzung.',
    ],
    pricingEyebrow: 'Wie das Mandat abgerechnet wird',
    pricingTitle: 'Ein Projekt, ein Honorar.',
    pricingBody: [
      'Ein einzelnes Projekt, kein Retainer. Umfang und Honorar stehen fest, bevor die Arbeit beginnt; das Honorar nennen wir nach dem ersten Gespräch, sobald das Briefing klar ist. Drei Zuschnitte: nur kurze Liste, nur lange Liste, oder beides mit Marktkartierung.',
      'Im ersten Gespräch geht es vor allem um die Passung. Danach wissen Sie, ob das die richtige Unterstützung für Sie ist, und wir wissen, ob wir wirklich etwas bewegen können.',
    ],
    pricingCommissionTail:
      'Der Distributor zahlt uns keine Vermittlungsprovision. Das ist so gewollt und steht im Vertrag, denn eine Provision würde unser Interesse auf den Abschluss lenken statt auf den richtigen Partner.',
    timingEyebrow: 'Wann Sie zu uns kommen sollten',
    timingTitle: 'Je früher, desto besser.',
    timing: [
      {
        label: 'Vor dem Launch',
        body: 'Bevor etwas unterschrieben ist. Der sauberste Fall. Die Datenbank hat Raum, sich zu bewähren.',
      },
      {
        label: 'Beim Partnerwechsel',
        body: 'Ein Distributor, der auf der Ware sitzt. Ein TP, der die Kategorie nicht bewegt. Wir wissen, wer passt und wer nicht.',
      },
      {
        label: 'Nach der falschen Unterschrift',
        body: 'Manche Marken kommen erst spät. Dieselbe Arbeit an der Auswahlliste, größere Dringlichkeit, deutlich weniger Spielraum.',
      },
    ],
    nextCtaPrimary: '30-Minuten-Gespräch buchen',
    nextCtaSecondary: 'Zurück zu: Was drinsteht',
  },

  shortlist: {
    title: 'Ihre Auswahlliste chinesischer Partner | Compass | TheChinaPath',
    description:
      'Briefen Sie uns zu Ihrer Kategorie und Ihrem Stand. Wir kommen mit einer Auswahlliste chinesischer Distributoren und Plattformpartner zurück, in der Regel in zwei bis drei Wochen.',
    eyebrow: 'Ihre Auswahlliste',
    h1: 'Erzählen Sie uns kurz von Ihrer Marke.',
    lead: 'Ein paar schnelle Fragen, um ins Gespräch zu kommen. Das erste Gespräch ist kurz und für beide Seiten unverbindlich. Ein Partner aus der Geschäftsleitung antwortet innerhalb eines Werktags, kein Serienbrief aus einem Vorqualifizierungs-Bot.',
    formTitle: 'Ihr Briefing',
    fields: {
      name: 'Ihr Name',
      email: 'Geschäftliche E-Mail-Adresse',
      company: 'Unternehmen',
      website: 'Website',
      category: 'Kategorie',
      categoryPlaceholder: 'Kategorie wählen',
      categoryOther: 'Etwas anderes',
      stage: 'Wo Sie heute stehen',
      message: 'Was wollen Sie lösen?',
      messagePlaceholder:
        'Der Kanal, den Sie anpeilen, der Zeitplan, an dem Sie arbeiten, und alles, was bereits versucht wurde.',
      captchaBefore: 'Eine kurze Prüfung gegen Bots: Wie viel ergibt ',
      captchaAfter: '?',
      honeypot: 'Dieses Feld bitte leer lassen',
    },
    stages: [
      'Noch nicht in China, wir klären das Modell',
      'Wir gehen jetzt hinein und brauchen einen ersten Partner',
      'Wir verkaufen bereits und ersetzen einen Partner',
      'Wir verkaufen bereits und ergänzen einen Kanal oder eine Region',
    ],
    submit: 'Briefing senden',
    submitting: 'Briefing wird gesendet…',
    consent:
      'Mit dem Absenden erlauben Sie uns, zu Ihrer Anfrage auf Sie zurückzukommen. Ihre Angaben bleiben ausschließlich in unserem Team.',
    asideEyebrow: 'Wie es weitergeht',
    asideTitle: 'Drei Schritte, zwei bis drei Wochen.',
    errors: {
      captcha:
        'Das Ergebnis stimmt nicht ganz. Die Zahlen wurden gerade erneuert, bitte versuchen Sie es noch einmal.',
      required: 'Bitte tragen Sie Name, E-Mail-Adresse, Unternehmen, Kategorie und Stand ein.',
      message: 'Sagen Sie uns in ein bis zwei Sätzen, was Sie lösen wollen.',
      network:
        'Das Briefing ist nicht durchgegangen. Bitte versuchen Sie es gleich noch einmal. Klappt es weiterhin nicht, schreiben Sie uns direkt an hello@thechinapath.com.',
    },
    success: 'Briefing erhalten. Wir melden uns in Kürze. Weiterleitung…',
  },
};

export default copy;
