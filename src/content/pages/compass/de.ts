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
    closingEyebrow: 'Kontakt',
    closingTitle: 'Unverbindlich. Ohne langen Pitch.',
    closingLead:
      'Sie gehen nach China? Sie ersetzen einen Partner, der nicht mehr liefert? Sie suchen noch die richtige Vertriebsform für Ihre Kategorie? Das erste Gespräch ist kurz. Die meisten wissen nach einer halben Stunde, ob das die richtige Unterstützung für sie ist. Wenn nicht, können wir meist sagen, wer besser passt.',
    closingCtaPrimary: 'Briefen Sie uns zu Ihrer Kategorie',
    closingCtaSecondary: 'Zum Vertriebsangebot',
    toolsLine: {
      before: 'Das Plattformbudget steht noch nicht? Unsere ',
      link: 'kostenlosen Rechner',
      after: ' beziffern das erste Jahr auf Tmall Global, JD Worldwide und Douyin, noch vor dem ersten Briefing.',
    },
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
