/**
 * /de/compass/vertriebspartner-in-china-finden (Deutsch).
 * Suchanfrage: „Distributor in China finden“ / „Vertriebspartner China“.
 * Register: Wirtschaftsressort, Sie-Anrede. Beträge in RMB bleiben RMB.
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'distributor',
  locale: 'de',
  title: 'Distributor in China finden: So gehen Sie vor | TheChinaPath',
  description:
    'Wo Marken in China Vertriebspartner finden, wie acht Prüfungen echte Distributoren von Zwischenhändlern trennen und was vor der Unterschrift feststehen muss.',
  crumb: 'Distributor in China finden',
  reviewed: '24. September 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'Distributor finden',
    rows: [{ text: 'So finden Sie einen' }, { text: 'Distributor in China', style: 'highlight' }],
    lead: 'Einen Vertrag verdient nur der Distributor, der Produkte wie Ihre schon heute an genau die Händler verkauft, die Sie im Blick haben, und das mit Zahlen belegen kann. Schwierig ist, ihn unter den Dutzenden herauszufiltern, die das nur von sich behaupten.',
    image: {
      src: '/Images/compass/channel-offline.webp',
      alt: 'Ein Außendienstler eines Distributors und ein Einkäufer knien vor einem Supermarktregal und kontrollieren die Platzierung',
    },
    stats: heroStats('Jahre Erfahrung mit Distributoren in China'),
    primary: 'Auswahlliste anfordern',
    secondary: 'So funktioniert Compass',
  },

  answer: {
    eyebrow: 'Kurz gesagt',
    title: 'Entscheidend ist, wer Ihre Kategorie schon verkauft',
    body: [
      'Einen Distributor in China findet man über die Kategorie: Gesucht ist ein Unternehmen, das Produkte wie Ihre bereits über die Kanäle vertreibt, auf die Sie setzen. Dann folgt die Prüfung. Gewerbelizenz einsehen, zwei Marken aus dem Portfolio anrufen, das Lager besichtigen, Abverkaufsdaten verlangen. Mit jedem Schritt wird die Liste kürzer.',
      'Die Kategorie wiegt schwerer als die Größe. Bei einem nationalen Importeur mit prall gefülltem Markenkatalog wird Ihre Marke zu einer Zeile auf der Preisliste. Ein regionaler Anbieter, der seit sechs Jahren importierte Hautpflege an Watsons liefert, setzt dagegen ein eigenes Vertriebsteam darauf an.',
      'Vor der Suche sollten Sie eines klären. Hinter dem Wort „Distributor“ stehen in China ganz unterschiedliche Geschäftsmodelle, und Sie müssen wissen, welches Sie brauchen.',
    ],
  },

  role: {
    eyebrow: 'Wen Sie beauftragen',
    title: 'Vier Unternehmenstypen, die sich Distributor nennen',
    intro: 'Gemeinsam ist ihnen nur, dass sie Ihnen die Ware abkaufen. Danach trennen sich die Wege.',
    items: [
      {
        name: 'Importeure',
        body: 'Sie besitzen die Importlizenzen, erledigen die Verzollung und kleben das chinesische Etikett auf Ihre Verpackung. Manche verkaufen auch. Viele schieben nur Kartons weiter. Das kann genügen, wenn Sie es vorher wissen.',
      },
      {
        name: 'Nationale Distributoren',
        body: 'Sie sind in mehreren Regionen präsent, oft mit Key-Account-Teams, die Ketten wie Sam’s Club oder Ole’ beliefern. Die Reichweite ist echt. Ihre Marke muss sich dort aber gegen alles andere im Sortiment behaupten.',
      },
      {
        name: 'Regionale Distributoren',
        body: 'Sie beherrschen eine Provinz oder eine Gruppe von Städten und kennen Einkäufer wie Großhändler persönlich. Hinter so mancher „landesweiten Abdeckung“ verbirgt sich ein Flickenteppich solcher Regionalhändler.',
      },
      {
        name: 'Online-Distributoren',
        body: 'Sie kaufen Ware ein und verkaufen sie an JD im Eigenhandel, an Tmall Supermarket und Hema weiter, teils auch über eigene Stores. Ihr Geschäft lebt von guten Drähten zu den Plattformeinkäufern und von schnellem Nachschub.',
      },
    ],
  },

  routes: {
    eyebrow: 'Wo Marken suchen',
    title: 'Sechs Wege zu Kandidaten und ihre blinden Flecken',
    intro: 'Namen liefern alle sechs. Wir haben jeden dieser Wege selbst beschritten, und der Ertrag fällt sehr unterschiedlich aus.',
    table: {
      headers: ['Weg', 'Was er bringt', 'Was er nicht zeigt'],
      rows: [
        [
          'Messen',
          'In wenigen Tagen persönliche Gespräche mit Hunderten Einkäufern: auf der CIIE in Shanghai jeden November, auf der Frühjahrsausgabe der China Food and Drinks Fair in Chengdu und, für Beauty, auf der CBE in Shanghai.',
          'Am Stand stehen die Leute aus dem Business Development. Wer Ihre Marke später verkaufen würde, bleibt im Büro.',
        ],
        [
          'B2B-Plattformen (Alibaba.com, 1688)',
          'Tausende Einträge, nach Kategorie durchsuchbar.',
          'Die Plattformen sind auf den Einkauf in China ausgelegt. Dort präsentieren sich vor allem Fabriken und Händler, die Abnehmer im Ausland suchen, also das Gegenteil dessen, was Sie brauchen.',
        ],
        [
          'Außenwirtschaftsagenturen und Kammern',
          'Geprüfte Kontakte und Matchmaking-Tage, häufig gefördert. Germany Trade & Invest (GTAI), Business France und die Auslandshandelskammern in Shanghai veranstalten sie.',
          'Auf den Listen stehen vor allem Mitglieder und frühere Teilnehmer. Über das erste Treffen hinaus begleitet kaum jemand eine Marke.',
        ],
        [
          'Abgegriffene Datenbanken',
          'Eine Tabelle mit tausend Namen, noch vor der Mittagspause.',
          'Welche Kategorien ein Unternehmen wirklich verkauft und ob dort noch jemand ans Telefon geht, verraten sie nicht.',
        ],
        [
          'LinkedIn und Kaltakquise per E-Mail',
          'Direkter Draht zu namentlich bekannten Entscheidern.',
          'Chinesische Distributoren kommunizieren über WeChat. Antworten kommen selten, und ein rasches Ja von einem Fremden sollte stutzig machen.',
        ],
        [
          'Empfehlungen von Marken und Betreibern',
          'Das verlässlichste Signal: jemand, der den Distributor bei der Arbeit gesehen hat.',
          'Ohne bestehende Kontakte kaum zu haben. Ein solches Netz wächst über Jahre und viele Treffen, deshalb haben wir unseres in Compass festgehalten.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Vor der Unterschrift',
    title: 'Acht Prüfungen trennen den Distributor vom Zwischenhändler',
    intro: 'Die ersten sechs erledigen Sie am Schreibtisch, bevor überhaupt ein Gespräch stattfindet. Für die letzten zwei braucht es ein Treffen, am besten beim Distributor im Büro. Wenn Sie von dieser Seite nur eines ausdrucken, dann diese Tabelle.',
    table: {
      headers: ['Prüfpunkt', 'Überzeugende Antwort', 'Warnsignal'],
      rows: [
        [
          'Gewerbelizenz',
          'Eintrag im staatlichen Unternehmensregister (National Enterprise Credit Information Publicity System), Import oder Großhandel Ihrer Kategorie im Geschäftszweck, dazu einige Jahre am Markt.',
          'Erst im Vorjahr gegründet, ein winziges Stammkapital oder ein Geschäftszweck, der von Elektronik bis Wein alles abdeckt.',
        ],
        [
          'Gerichtsakten und Bonität',
          'Eine saubere Akte auf Qichacha oder Tianyancha, den beiden großen Auskunfts-Apps für chinesische Firmen, allenfalls eine Handvoll üblicher Handelsstreitigkeiten.',
          'Ein Eintrag als säumiger Schuldner (失信被执行人) oder eine Reihe von Klagen, in denen Lieferanten offene Rechnungen einfordern.',
        ],
        [
          'Kategorielizenzen',
          'Die Genehmigungen, die Ihre Kategorie verlangt, bei Lebensmitteln etwa die Lizenz für den Lebensmittelhandel, und zwar auf den eigenen Namen.',
          '„Die Lizenz hat unser Partner.“ Dann verhandeln Sie in Wahrheit mit ihm.',
        ],
        [
          'Markenportfolio',
          'Die Marken, die er aktuell vertreibt, und bei zweien davon ein Ansprechpartner, den Sie anrufen dürfen.',
          'Große Logos auf den Folien, aber niemand, den Sie anrufen können.',
        ],
        [
          'Listungen im Handel',
          'Namentlich genannte Key Accounts, also die großen Ketten, und die Filialen, in denen Ihr Produkt stehen würde. Sie können hingehen und sich selbst ein Bild machen.',
          '„Wir decken ganz China ab.“ Das tut niemand.',
        ],
        [
          'Online-Präsenz',
          'Stores oder Lieferanteneinträge auf JD, Tmall oder Douyin, die Sie selbst aufspüren können.',
          'Eine Website, ein WeChat-Account, aber kein Kanal, über den tatsächlich etwas verkauft wird.',
        ],
        [
          'Abverkaufsdaten',
          'Scan- oder Abverkaufsdaten einer vergleichbaren Marke (was tatsächlich über die Ladenkasse ging), zur Not mit geschwärztem Namen.',
          'Nur Sell-in-Zahlen, also die Mengen, die der Distributor den Marken abgenommen hat. Was im Lager steht, ist noch nicht verkauft.',
        ],
        [
          'Das Team für Ihre Marke',
          'Konkrete Namen, ihre Standorte und der Anteil ihrer Arbeitszeit, der auf Ihre Marke entfällt.',
          'Den Pitch hält der Gründer, die Arbeit erledigt ein Junior, den Sie nie kennenlernen.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'Die Konditionen',
    title: 'Was vor dem ersten Container feststehen muss',
    intro: 'Der Distributor verdient an der Marge: Er kauft bei Ihnen und verkauft mit Aufschlag an den Handel weiter. Wie hoch der Aufschlag ausfällt, hängt vom Kanal ab und davon, wer Listungsgebühren, Marketing und Ausfallrisiko schultert. Vergleichen Sie Angebote deshalb am Preis, zu dem Ihr Produkt am Ende im Regal steht. Rund um die Marge wird alles verhandelt, und das meiste davon gehört in den Vertrag.',
    warnColumn: true,
    table: {
      headers: ['Kondition', 'Was Sie vereinbaren', 'Worauf Sie achten sollten'],
      rows: [
        [
          'Exklusivität',
          'Getrennt nach Kanal und Region, jeweils gekoppelt an ein Umsatzziel.',
          'Landesweite Exklusivität für alle Kanäle vom ersten Tag an. Schnell zugesagt, kaum wieder einzufangen.',
        ],
        [
          'Mindestabnahme',
          'Eine Erstbestellung im Umfang eines realistischen Launch-Plans, danach Quartalsziele.',
          'Überhaupt keine Mindestmenge. Dann kann der Distributor Ihre Marke in aller Ruhe verstauben lassen.',
        ],
        [
          'Listungsgebühren (进场费)',
          'Wer die Eintritts- und Platzierungsgebühren der Händler trägt und wie sie wieder hereingeholt werden.',
          'Rechnungen für „Marktunterstützung“ ohne Obergrenze, die erst eintreffen, wenn die Ware im Regal steht.',
        ],
        [
          'Marketingbeitrag',
          'Eine klare Aufteilung des Budgets, ein Plan pro Quartal und Nachweise über die Ausgaben.',
          'Ein Distributor, der alles von Ihnen bezahlt haben will, ohne sich auf Mengen festzulegen.',
        ],
        [
          'Zahlungsbedingungen',
          'Vorkasse oder Akkreditiv für die ersten Aufträge, ein Zahlungsziel erst nach einer gewissen gemeinsamen Historie.',
          'Lange Zahlungsziele von Anfang an, noch dazu für ein Unternehmen, das Sie von einer Messe kennen.',
        ],
        [
          'Marke und Registrierungen',
          'Marke und Produktregistrierungen laufen auf Ihren Namen. Melden Sie die Marke in China vor dem ersten Treffen an, denn dort gehört sie dem, der sie zuerst anmeldet.',
          'Ein Distributor, der zuvorkommend anbietet, die Marke für Sie anzumelden. Manche tun das auf den eigenen Namen.',
        ],
        [
          'Ausstieg',
          'Kündigungsrecht bei verfehlten Zielen, Rückkauf der Restbestände und Übergabe der Listungen.',
          'Keine Ausstiegsklausel oder eine, die nur mit Zustimmung des Distributors greift.',
        ],
      ],
    },
    note: 'Den Ausstieg regelt man, solange sich alle noch mögen. Wer ohne Ziele und ohne Hintertür unterschreibt, verbringt das zweite Jahr oft mit Trennungsverhandlungen, und die Regalfläche geht derweil an andere.',
    link: { label: 'Distributor oder eigener Store? Unser Vergleich', href: '/insights/china-distributor-vs-own-store' },
  },

  mistakes: {
    eyebrow: 'Was schiefgeht',
    title: 'Woran Distributor-Verträge meist scheitern',
    intro: 'Wenn wir einen verfahrenen Distributor-Vertrag entwirren sollen, ist er fast immer auf eine von wenigen bekannten Arten gescheitert. Beim ersten Treffen deutete nichts darauf hin.',
    image: {
      src: '/Images/compass/problem-pallets.webp',
      alt: 'Eingeschweißte Paletten mit Importware stehen unverkauft in einem schummrigen Lager',
    },
    items: [
      {
        name: 'Auf den größten Namen setzen',
        body: 'Der größte Importeur der Messe führt Hunderte Marken. Ihre wird eine Zeile auf der Preisliste, und der Vertrieb forciert, was in diesem Quartal die beste Provision bringt.',
      },
      {
        name: 'Dem Pitch vertrauen',
        body: 'Eine glänzende Präsentation, lauter namhafte Logos. Danach lag die Ware der Marke achtzehn Monate im Lager, und das Launch-Fenster schloss sich.',
      },
      {
        name: 'Einen Importeur verkaufen lassen',
        body: 'Der Importeur hatte ein Lager und eine makellose Zollbilanz, aber kein Vertriebsteam. Die Ware kam an und blieb stehen.',
      },
    ],
  },

  compass: {
    eyebrow: 'Unser Vorgehen',
    title: 'Auf unsere Liste kommen nur Distributoren, die wir getroffen haben',
    lead: 'Compass ist unsere private Datenbank mit Distributoren, Tmall Partnern, Douyin Partnern und Importeuren in ganz China. Jedes Unternehmen darin haben wir persönlich getroffen und vor Ort geprüft. Einsortiert wird es nach den Kategorien, die es nachweislich verkauft. Wir decken acht Konsumkategorien ab: Beauty, Lebensmittel und Getränke, Mode, Wohnen, Wellness, Baby und Kleinkind, Heimtier und Nahrungsergänzung.',
    steps: compassSteps(
      'Wir suchen in Compass nach Distributoren, die Ihre Kategorie bereits verkaufen. Sie erhalten die drei bis fünf, die ein Treffen wert sind, jeweils mit einer knappen Einschätzung ihrer Stärken und Schwächen. Dazu vermerken wir, wo sich in der Verhandlung Druck lohnt.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Fragen von Marken',
    title: 'Distributor in China: die häufigsten Fragen',
    items: [
      {
        q: 'Wie lange dauert es, einen Distributor in China zu finden?',
        a: 'Die Suche selbst kann schnell gehen. Eine Compass-Auswahlliste liegt in der Regel zwei bis drei Wochen nach dem Briefing vor. Länger dauern Treffen, Muster, Registrierungen und Vertragsverhandlungen, und das Tempo gibt die Kategorie vor: Lebensmittel und Kosmetik müssen vor der ersten Lieferung registriert sein.',
      },
      {
        q: 'Sollte ich einem Distributor in China Exklusivität gewähren?',
        a: 'Manchmal, und dann nur in engen Grenzen. Binden Sie die Exklusivität an einen Kanal und eine Region und hinterlegen Sie ein Umsatzziel. Wird es verfehlt, sollten Sie die Exklusivität zurückholen können.',
      },
      {
        q: 'Brauche ich einen Distributor, wenn ich grenzüberschreitend verkaufe?',
        a: 'Nicht zwingend. Ein Cross-Border-Store auf Tmall Global oder JD Worldwide kommt ohne aus, den Betrieb übernimmt dann ein Tmall Partner. Viele Marken beginnen im Cross-Border-Geschäft und holen einen Distributor an Bord, sobald sie in den General Trade (reguläre, verzollte Einfuhr) und in den stationären Handel wechseln.',
      },
      {
        q: 'Lässt sich ein Distributor über Alibaba finden?',
        a: 'Firmen finden Sie dort durchaus. Alibaba.com und 1688 wurden allerdings für den Einkauf in China gebaut, entsprechend stammen die meisten Einträge von Fabriken und Händlern auf der Suche nach Abnehmern im Ausland.',
      },
      {
        q: 'Welche Marge verlangt ein Distributor in China?',
        a: 'Das hängt vom Kanal ab und davon, wer welche Kosten übernimmt. Wer zusätzlich Listungsgebühren, Marketing und Ausfallrisiko trägt, verlangt mehr als ein Distributor, der nur Kartons bewegt. Vergleichen Sie die Angebote am Regalpreis, bei dem Ihr Produkt am Ende ankommt, und daran, wer auf dem Weg dorthin welchen Posten trägt.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Kontakt',
    title: 'Nennen Sie uns Ihre Kategorie',
    lead: 'Das erste Gespräch dauert nicht lange. Danach wissen Sie, ob wir den passenden Distributor in unserer Datenbank haben. Falls nicht, sagen wir das offen und nennen Ihnen, wenn möglich, eine bessere Adresse.',
    primary: 'Auswahlliste anfordern',
    secondary: 'So arbeiten wir',
  },
};

export default copy;
