/**
 * /de/compass/tmall-partner-in-china-finden (Deutsch).
 * Suchanfrage: „Tmall Partner (TP) finden“.
 *
 * Die Gebühren entsprechen den Standardwerten unserer Rechner für Tmall Global
 * und JD Worldwide (src/pages/tools/*) und sind im Text als solche ausgewiesen.
 * RMB bleibt RMB, der Gegenwert steht in Euro (rund 8,2 RMB je Euro).
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'tp',
  locale: 'de',
  title: 'Tmall Partner (TP) finden und prüfen | TheChinaPath',
  description:
    'Was ein Tmall Partner leistet, wie TPs verdienen, woran Sie erkennen, ob einer Ihre Kategorie kennt, und welche Klauseln sichern, dass der Store Ihnen gehört.',
  crumb: 'TP in China finden',
  reviewed: '24. September 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'TP finden',
    rows: [{ text: 'So finden Sie einen' }, { text: 'Tmall Partner (TP) in China', style: 'highlight' }],
    lead: 'Ein Tmall Partner, kurz TP, führt Ihren Store im Alltag: Produktseiten, Kundenservice, Kampagnen, bezahlte Reichweite. Nehmen Sie einen, der schon Stores in Ihrer Kategorie betreibt, und zwar solche, die Sie auf Tmall öffnen und selbst beurteilen können.',
    image: {
      src: '/Images/compass/channel-store.webp',
      alt: 'Zwei E-Commerce-Manager in Hangzhou am Schreibtisch, einer deutet auf einen Monitor voller Produktseiten',
    },
    stats: heroStats('Jahre Erfahrung mit Partnern in China'),
    primary: 'TP-Auswahlliste anfordern',
    secondary: 'So funktioniert Compass',
  },

  answer: {
    eyebrow: 'Kurz gesagt',
    title: 'Wählen Sie den TP, dessen Stores Sie prüfen können',
    body: [
      'Einen Tmall Partner finden Sie, indem Sie jeden Kandidaten nach den Stores fragen, die er gerade in Ihrer Kategorie betreibt. Diese Stores öffnen Sie auf Tmall und sehen sie sich an wie eine Kundin. Vor der Unterschrift treffen Sie die Leute, die Ihren Store tatsächlich führen würden, und lesen die Ausstiegsklauseln zweimal. Der Store selbst muss auf Ihr Unternehmen laufen.',
      'Alibaba zertifiziert TPs und bewertet sie auf einem eigenen Dienstleistermarktplatz. Als Startpunkt taugt das. Ob ein TP je ein Produkt wie Ihres verkauft hat, verrät die Bewertung allerdings kaum.',
      'Große börsennotierte Betreiber führen Stores für Dutzende internationaler Marken. Ein kleinerer Spezialist betreut vielleicht sechs Stores, alle aus derselben Kategorie. Beides kann aufgehen. Den Ausschlag gibt, wie viel von seiner Arbeitswoche das Team Ihrer Marke widmet.',
    ],
  },

  role: {
    eyebrow: 'Die Aufgabe',
    title: 'Was ein Tmall Partner für Sie übernimmt',
    intro: 'Ursprünglich hieß TP Taobao Partner: So bezeichnete Alibaba die externen Agenturen, die es zertifiziert. Inzwischen nennen Marken jede Agentur so, die in ihrem Auftrag Stores auf Tmall oder Tmall Global betreibt. Manche wickeln für Tmall Global auch die Lieferungen aus dem Zolllager ab, andere überlassen das einem Logistikpartner. Klären Sie das vorab.',
    items: [
      {
        name: 'Store-Aufbau und Produktseiten',
        body: 'Gestaltung des Stores, Produktseiten, Preisgefüge und sämtliche chinesischen Texte darauf.',
      },
      {
        name: 'Kundenservice',
        body: 'Beratung per Chat vor und nach dem Kauf, auf Chinesisch. In den Festivalwochen oft bis nach Mitternacht.',
      },
      {
        name: 'Kampagnen',
        body: '618, Double 11 und die Kategorie-Aktionen der Plattform, Monate vorher mit den Kategoriemanagern von Tmall abgestimmt.',
      },
      {
        name: 'Bezahlter Traffic',
        body: 'Such- und Displayanzeigen über Alimama, die Werbeplattform von Alibaba. Das Werbekonto finanzieren Sie direkt, der TP bespielt es.',
      },
    ],
  },

  routes: {
    eyebrow: 'Wo Sie suchen',
    title: 'Fünf Wege zu geeigneten TPs',
    intro: 'Für eine lange Liste genügt ein Nachmittag. Sie auf die zwei, drei Namen zu verdichten, die Sie persönlich treffen wollen, kostet mehr Zeit. Wer es eilig hat, springt gleich zu den Prüfungen.',
    table: {
      headers: ['Weg', 'Was er bringt', 'Was er nicht zeigt'],
      rows: [
        [
          'Alibabas Dienstleistermarktplatz',
          'Zertifizierte Partner mit Plattformbewertung, nach Kriterien filterbar.',
          'Die Bewertung misst die allgemeine Servicequalität. Welche Kategorien ein TP wirklich beherrscht, zeigt sie kaum.',
        ],
        [
          'Das Onboarding-Team von Tmall Global',
          'Namen, die Ihnen im Zuge der Händlerbewerbung genannt werden.',
          'Eine kurze Liste, die jene Partner bevorzugt, mit denen die Plattform am häufigsten arbeitet. Gut möglich, dass diese Partner schon Ihre Wettbewerber betreuen.',
        ],
        [
          'Branchenveranstaltungen',
          'Viele TPs pitchen im selben Saal.',
          'Auf der Bühne klingen alle gleich. Was sie können, sieht man erst im Store-Backend.',
        ],
        [
          'Andere Marken',
          'Die beste Referenz überhaupt: ein Markenmanager, der mit seinem TP zwei Double 11 überstanden hat.',
          'Wettbewerber schweigen. Und wer in einer anderen Kategorie verkauft, weiß nicht, was der TP in Ihrer taugt.',
        ],
        [
          'Compass',
          'TPs, mit denen wir selbst zusammengearbeitet haben, sortiert nach den Kategorien, die sie betreiben.',
          'Aufgenommen wird nur, wen wir getroffen haben. In unseren acht Kategorien ist das Netz dicht, jenseits davon dünn.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Einen TP prüfen',
    title: 'Sieben Prüfungen, bevor Sie Ihren Store aus der Hand geben',
    intro: 'Tmall-Stores sind öffentlich einsehbar, und das ist ein Glücksfall. Die Arbeit eines TP lässt sich leichter beurteilen als die fast jeder anderen Agentur, und für die meisten Prüfungen genügen ein Laptop und eine Stunde.',
    table: {
      headers: ['Prüfpunkt', 'Überzeugende Antwort', 'Warnsignal'],
      rows: [
        [
          'Laufende Stores in Ihrer Kategorie',
          'Drei oder vier Stores, die Sie noch heute aufrufen können.',
          '„Das unterliegt der Vertraulichkeit.“ Jeder TP betreibt öffentlich sichtbare Stores.',
        ],
        [
          'Zustand des Stores',
          'Aufgeräumte Seiten, laufende Kampagnen. Schreiben Sie den Kundenservice als Käufer an: Die Antwort sollte binnen Minuten kommen.',
          'Veraltete Banner, halb übersetzte Texte, Antworten erst nach Stunden.',
        ],
        [
          'Ergebnisse zu 618 und Double 11',
          'Screenshots aus Business Advisor (生意参谋) eines vergleichbaren Stores für 618 oder Double 11, zur Not anonymisiert.',
          'Allein der GMV (Bruttoumsatz) als Schlagzeile, ohne Rabatte, Retouren oder Werbekosten.',
        ],
        [
          'Werbeeffizienz',
          'Der Return on Ad Spend je Kampagnentyp und eine klare Antwort auf die Frage, was zuerst gestrichen würde.',
          'Das Versprechen, „Traffic einzukaufen“, ohne jeden Maßstab für den Erfolg.',
        ],
        [
          'Das Team',
          'Namentlich benannte Verantwortliche für Store, Design, Werbung und Kundenservice, und wie viele weitere Stores jeder von ihnen betreut.',
          'Ein glänzendes Pitch-Team, das nach der Unterschrift verschwindet.',
        ],
        [
          'Erfahrung in der Kategorie',
          'Stores, die sie in Ihrer Kategorie aufgebaut haben, und sicherer Umgang mit den Regeln für Registrierung und Werbeaussagen, die dort gelten.',
          'Eine „verwandte“ Kategorie. Wer Kosmetik kann, kann noch lange keine Nahrungsergänzung, und umgekehrt.',
        ],
        [
          'Eigentum und Ausstieg',
          'Der Store ist auf Ihr Unternehmen registriert, samt Daten und Inhalten, und der Vertrag regelt die Übergabe.',
          'Ein Store auf der Firma des TP oder Inhalte, die er für sich beansprucht.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'Die Kosten',
    title: 'So werden Tmall Partner bezahlt',
    intro: 'Üblich sind eine monatliche Pauschale und eine Provision auf den Umsatz. Unsere Rechner für Tmall Global und JD Worldwide gehen von 35.000 RMB im Monat aus (rund 4.300 Euro), zuzüglich 10 Prozent des GMV. Diese Werte taugen als Maßstab für echte Angebote, die je nach Store-Größe und Leistungsumfang darüber oder darunter liegen.',
    warnColumn: false,
    table: {
      headers: ['Modell', 'Vergütung', 'Geeignet für'],
      rows: [
        [
          'Service (代运营)',
          'Monatliche Pauschale plus Provision auf den GMV. Die Ware bleibt Ihr Eigentum, die Werbung bezahlen Sie.',
          'Marken, die Preis und Auftritt selbst steuern wollen und den Warenbestand finanzieren können.',
        ],
        [
          'Distribution (经销)',
          'Der TP kauft Ihnen die Ware ab und verdient beim Weiterverkauf an der Marge.',
          'Marken, die in China keinen Bestand halten wollen und dafür weniger Kontrolle über den Preis hinnehmen.',
        ],
        [
          'Kommission (代销)',
          'Der TP verkauft Ihre Ware und rechnet nach dem Verkauf ab, abzüglich seines Anteils.',
          'Testphasen, in denen keine Seite Kapital binden möchte.',
        ],
      ],
    },
    note: 'Bezahlte Medien laufen über ein Werbekonto, das Sie selbst finanzieren. Wenn ein TP anbietet, die Werbeausgaben vorzustrecken, geht das meist schief. Viele Marken planen zudem ein jährliches Co-Budget für Höhepunkte wie Double 11 oder einen Launch ein. Und halten Sie die Übergabe vertraglich fest: Inhalte, Kundendaten und Werbekonten müssen mit Ihnen gehen, wenn die Zusammenarbeit endet.',
    link: { label: 'Eigene Zahlen durchrechnen: der Tmall-Global-Rechner', href: '/tools/tmall-global-setup-and-run' },
  },

  mistakes: {
    eyebrow: 'Was schiefgeht',
    title: 'Woran TP-Verträge zerbrechen',
    intro: 'Ruft uns eine Marke an, weil sie ihren TP loswerden will, folgt die Geschichte fast immer einem dieser Muster.',
    image: {
      src: '/Images/compass/tp-mistakes.webp',
      alt: 'Ein verlassenes E-Commerce-Büro bei Nacht, ein Monitor zeigt noch eine abfallende Umsatzkurve',
    },
    items: [
      {
        name: 'Ein TP ohne Erfahrung in Ihrer Kategorie',
        body: 'Versprochen war Betrieb auf Flagship-Niveau. Im vierten Monat stand fest, dass das Team die Kategorie nie verkauft hatte, und die Produktseiten hatten bei Preisen, Bewertungen und Suchranking schon Schaden genommen.',
      },
      {
        name: 'GMV um jeden Preis',
        body: 'Misst man einen TP allein am GMV, greift er zu tiefen Rabatten. Die Zahl stimmt, und die Kundschaft lernt, auf den nächsten Gutschein zu warten.',
      },
      {
        name: 'Ein Store, der Ihnen nicht gehört',
        body: 'Läuft der Store auf die Firma des TP, bedeutet die Trennung einen Neuanfang: neuer Store, keine Bewertungen, keine Verkaufshistorie.',
      },
    ],
  },

  compass: {
    eyebrow: 'Unser Vorgehen',
    title: 'Auf unsere Liste kommen nur TPs, deren Stores wir kennen',
    lead: 'Compass ordnet jeden Tmall Partner den Kategorien zu, in denen wir ihn bei der Arbeit erlebt haben. Daneben stehen unsere Notizen zu den Plattformteams, mit denen er zusammenarbeitet, und zur Frage, wie seine Stores durch die letzten Shopping-Festivals gekommen sind. Von Partnern nehmen wir keine Provision. Wir decken acht Konsumkategorien ab: Beauty, Lebensmittel und Getränke, Mode, Wohnen, Wellness, Baby und Kleinkind, Heimtier und Nahrungsergänzung.',
    steps: compassSteps(
      'Wir suchen in Compass nach TPs, die Ihre Kategorie bereits betreiben. Sie erhalten die drei bis fünf, die ein Treffen wert sind, jeweils mit einer knappen Einschätzung ihrer Stärken und Schwächen und Hinweisen, wo sich bei den Gebühren nachverhandeln lässt.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Fragen von Marken',
    title: 'Tmall Partner: die häufigsten Fragen',
    items: [
      {
        q: 'Was bedeutet TP auf Tmall?',
        a: 'TP steht für Taobao Partner. Mit diesem Namen bezeichnete Alibaba die externen Agenturen, die es für den Betrieb von Marken-Stores zertifiziert. Heute meint der Begriff in der Praxis jede Agentur, die für eine Marke einen Store auf Tmall oder Tmall Global führt.',
      },
      {
        q: 'Was kostet ein Tmall Partner?',
        a: 'Üblich sind eine monatliche Pauschale und eine Provision auf den GMV. Unsere Rechner gehen von 35.000 RMB im Monat aus (rund 4.300 Euro), zuzüglich 10 Prozent des GMV. Echte Angebote liegen je nach Store-Größe und Leistungsumfang darüber oder darunter. Hinzu kommen die bezahlten Medien, die Sie selbst finanzieren.',
      },
      {
        q: 'Kann ich einen Tmall-Store auch ohne TP betreiben?',
        a: 'Ja, wenn Sie ein Team in China haben, das die Plattform kennt. Die meisten ausländischen Marken beginnen mit einem TP und holen einzelne Funktionen ins Haus, sobald der Store rund läuft.',
      },
      {
        q: 'Kümmert sich derselbe TP auch um Tmall Global?',
        a: 'Viele betreuen beides. Für Cross-Border-Ware und Fulfillment gelten auf Tmall Global eigene Regeln, lassen Sie sich also Stores auf beiden Plattformen zeigen.',
      },
      {
        q: 'Wie lange dauert ein Wechsel des TP?',
        a: 'Rechnen Sie mit einer Übergabe von mehreren Wochen. Store-Zugänge, Content-Dateien, Werbekonten und die Leitfäden des Kundenservice müssen umziehen. Den Wechsel sollten Sie möglichst nicht in die Vorbereitung auf 618 oder Double 11 legen.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Kontakt',
    title: 'Erzählen Sie uns von Ihrem Store',
    lead: 'Ihr erster Store steht an, oder Ihr TP ist abgetaucht? Schicken Sie uns den Link zum Store oder, falls es noch keinen gibt, einfach die Kategorie. Nach einem kurzen Gespräch wissen Sie, ob wir den passenden Partner in der Datenbank haben.',
    primary: 'TP-Auswahlliste anfordern',
    secondary: 'So arbeiten wir',
  },
};

export default copy;
