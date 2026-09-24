/**
 * /de/compass/douyin-partner-in-china-finden (Deutsch).
 * Suchanfrage: „Douyin Partner (DP) finden“.
 *
 * Die Gebühren stammen aus unserem Douyin-Kostenrechner
 * (src/pages/tools/douyin-cost-calculator.astro) und sind im Text als solche
 * ausgewiesen. RMB bleibt RMB, der Gegenwert steht in Euro (rund 8,2 RMB je Euro).
 */
import type { PartnerGuideCopy } from '../types';
import { compassSteps, compassTiming, heroStats, whoPaysFaq } from './shared';

const copy: PartnerGuideCopy = {
  key: 'dp',
  locale: 'de',
  title: 'Douyin Partner (DP) finden und prüfen | TheChinaPath',
  description:
    'Was ein Douyin Partner leistet, wie DPs verdienen, wie Sie einen an seinen Livestreams messen und welche Klauseln Ihnen Shop und Werbekonto sichern.',
  crumb: 'DP in China finden',
  reviewed: '24. September 2026',
  reviewedIso: '2026-09-24',

  hero: {
    eyebrow: 'DP finden',
    rows: [{ text: 'So finden Sie einen' }, { text: 'Douyin Partner (DP) in China', style: 'highlight' }],
    lead: 'Ein Douyin Partner, kurz DP, betreibt Ihren Douyin-Shop: Kurzvideos, Livestreams der Marke, Kooperationen mit Creatorn, bezahlte Reichweite. Die guten wissen längst, welche Hosts und Creator in Ihrer Kategorie verkaufen. Ob das stimmt, sehen Sie schon heute Abend, live.',
    image: {
      src: '/Images/compass/channel-social.webp',
      alt: 'Eine Livestream-Moderatorin spricht unter einem Ringlicht in ein Smartphone auf dem Stativ, vor ihr eine Reihe Produktmuster',
    },
    stats: heroStats('Jahre Erfahrung mit Partnern in China'),
    primary: 'DP-Auswahlliste anfordern',
    secondary: 'So funktioniert Compass',
  },

  answer: {
    eyebrow: 'Kurz gesagt',
    title: 'Messen Sie einen DP an den Livestreams, die er heute fährt',
    body: [
      'Einen Douyin Partner finden Sie, indem Sie sich von jedem Kandidaten die Markenaccounts nennen lassen, die er in Ihrer Kategorie betreut. Deren Livestreams und Kurzvideos schauen Sie sich dann an wie eine Kundin. Fragen Sie, wie er Creator bucht und wie viel er für Werbung ausgibt. Danach klären Sie, auf wessen Namen Shop und Werbekonto laufen. Erst dann geht es ums Geld.',
      'Auf Douyin verkauft der Content. Ein DP gleicht deshalb eher einer Produktionsfirma mit angeschlossenem Handelstisch als einem Store-Manager. Aus demselben Grund sollten Sie einen Tmall Partner, der „Douyin gleich mitmacht“, doppelt prüfen.',
      'Auch Douyin zertifiziert solche Agenturen und stuft sie nach Leistungsfähigkeit ein. Für die lange Liste ist das ein brauchbarer Anfang. Zuschauen müssen Sie trotzdem selbst.',
    ],
  },

  role: {
    eyebrow: 'Die Aufgabe auf Douyin',
    title: 'Was ein Douyin Partner tatsächlich betreibt',
    intro: 'Douyin spricht von E-Commerce-Dienstleistern (抖音电商服务商), die Marken von DPs.',
    items: [
      {
        name: 'Der Shop',
        body: 'Aufbau des Douyin-Shops (抖店), Produktseiten, Preise und Kundenservice, bei Cross-Border-Ware auch Douyin Global.',
      },
      {
        name: 'Marken-Livestreams',
        body: 'Ein eigener Livestream der Marke, oft mehrere Stunden am Tag auf Sendung, dazu kurze Produktvideos, die Publikum in den Stream und in den Shop lenken. Dahinter stehen Hosts, Skripte und ein Studio, das jemand betreiben muss.',
      },
      {
        name: 'Creator',
        body: 'Buchungen über Xingtu (巨量星图) für Content und über das Affiliate-Programm von Douyin (精选联盟) für Verkäufe gegen Provision.',
      },
      {
        name: 'Bezahlter Traffic',
        body: 'Qianchuan (巨量千川), das Werbesystem von Douyin für Shops. Das Konto finanzieren Sie direkt, der DP bespielt es.',
      },
    ],
  },

  routes: {
    eyebrow: 'Kandidaten finden',
    title: 'Wo sich gute DPs finden lassen',
    intro: 'Gute DPs machen selten Werbung in eigener Sache. Man stößt auf sie über die Livestreams, die sie betreiben.',
    table: {
      headers: ['Weg', 'Was er bringt', 'Was er nicht zeigt'],
      rows: [
        [
          'Douyins Dienstleistermarktplatz',
          'Zertifizierte Anbieter, filterbar nach Leistungsstufe und Kategorie.',
          'Die Leistungsstufe sagt etwas über die Größe. Ob die Hosts Ihr Produkt verkaufen können, verrät sie nicht.',
        ],
        [
          'Livestreams, die Sie überzeugen',
          'Das ehrlichste Verkaufsargument überhaupt. Suchen Sie einen Marken-Livestream in Ihrer Kategorie, der gut verkauft, und fragen Sie, wer dahintersteht.',
          'Manche Marken produzieren ihre Livestreams selbst, und gute DPs sind oft ausgebucht.',
        ],
        [
          'TPs, die „Douyin gleich mitmachen“',
          'Ein Vertrag für zwei Plattformen.',
          'Einen Store zu führen und einen Livestream zu betreiben sind zwei verschiedene Handwerke. Prüfen Sie die Douyin-Streams gesondert.',
        ],
        [
          'MCNs und Creator-Agenturen',
          'Direkter Zugang zu Creatorn.',
          'Verkauft wird Creator-Zeit. Shop, täglichen Livestream und Werbekonto als ein Geschäft mit eigener Ergebnisrechnung führen die wenigsten.',
        ],
        [
          'Compass',
          'DPs, deren Livestreams wir in unseren Kategorien beobachtet haben, mit Notizen zu Hosts, Creatorn und Werbebudgets.',
          'In unseren acht Kategorien ist das Netz dicht, jenseits davon dünn.',
        ],
      ],
    },
  },

  checks: {
    eyebrow: 'Einen DP prüfen',
    title: 'Sieben Prüfungen, bevor Sie Ihren Douyin-Account aus der Hand geben',
    intro: 'Ein DP arbeitet größtenteils öffentlich, vor laufender Kamera. Bevor einer auf unsere Auswahlliste kommt, verfolgen wir seine Livestreams an mehreren Abenden. Tun Sie das auch, bevor Sie die erste Folie lesen.',
    table: {
      headers: ['Prüfpunkt', 'Überzeugende Antwort', 'Warnsignal'],
      rows: [
        [
          'Livestreams zum Anschauen',
          'Markenaccounts, die er derzeit betreut, in Ihrer Kategorie oder einer verwandten. Sehen Sie sich von jedem zwei Übertragungen an.',
          'Nur Case-Study-Videos, aber kein einziger laufender Account mit Namen.',
        ],
        [
          'Die Hosts',
          'Festangestellte Hosts im Schichtbetrieb, mit Trainer und einem Skript für jedes Produkt.',
          'Freie Hosts, die von Sendung zu Sendung gebucht werden.',
        ],
        [
          'Ergebnisse mit Creatorn',
          'Creator, die er in Ihrer Kategorie gebucht hat, samt Umsatz, Retouren und Kosten pro Bestellung.',
          'Followerzahlen und „Reichweite“, sonst nichts.',
        ],
        [
          'Werbeeffizienz',
          'Der Return on Spend in Qianchuan je Kampagne und eine klare Antwort darauf, was zuerst gestrichen würde.',
          'Ein Plan, der nur aufgeht, wenn das Werbebudget Monat für Monat wächst.',
        ],
        [
          'Umsatz nach Retouren',
          'GMV (Bruttoumsatz) nach Erstattungen und Retouren, direkt aus dem Shop-Backend.',
          'Nur der Brutto-GMV. Auf Douyin fressen Retouren leicht einen großen Teil eines guten Abends auf.',
        ],
        [
          'Werbeaussagen und Compliance',
          'Skripte, die gegen das chinesische Werbegesetz und die Douyin-Regeln zu Werbeaussagen in Ihrer Kategorie geprüft sind.',
          'Hosts, die live Wirkungen versprechen. Douyin ahndet das, die Aufsicht ebenso.',
        ],
        [
          'Eigentum',
          'Shop und Markenaccount laufen auf Ihr Unternehmen, das Qianchuan-Werbekonto ebenfalls.',
          'Ein Account auf der Gesellschaft des DP oder ein Livestream-Kanal, der dem Host privat gehört.',
        ],
      ],
    },
  },

  terms: {
    eyebrow: 'Die Kosten',
    title: 'So werden Douyin Partner bezahlt',
    intro: 'Üblich sind eine monatliche Pauschale und eine Provision auf den GMV. Unser Douyin-Kostenrechner veranschlagt die Pauschale für ein schlankes Setup mit rund 30.000 RMB im Monat (etwa 3.700 Euro) und für internationale Marken mit bis zu 100.000 RMB (etwa 12.200 Euro). In diesem Segment liegt die Provision bei 5 bis 8 Prozent.',
    warnColumn: true,
    table: {
      headers: ['Kostenposition', 'So funktioniert es', 'Worauf Sie achten sollten'],
      rows: [
        [
          'Pauschale',
          'Ein fester Monatsbetrag für Shop, Sendeplan, Werbung und Kundenservice.',
          'Eine Pauschale, die offenlässt, wie viele Live-Stunden und Videos sie abdeckt.',
        ],
        [
          'Provision auf den GMV',
          'Ein Anteil am Umsatz, den der DP erzielt, zusätzlich zur Pauschale.',
          'Provision auf den Brutto-GMV. Koppeln Sie sie an den Umsatz nach Retouren.',
        ],
        [
          'Creator-Provision',
          'Geht an die Creator für den Umsatz, den sie bringen, und wird getrennt vom DP abgerechnet. Top-Creator verlangen 30 bis 50 Prozent, oft zuzüglich einer Platzierungsgebühr (坑位费).',
          'Ein Launch-Plan, der an einer einzigen großen Creator-Session hängt.',
        ],
        [
          'Bezahlte Medien',
          'Qianchuan-Budget, das Sie selbst direkt auf das Werbekonto einzahlen.',
          'Ein DP, der anbietet, die Werbeausgaben vorzustrecken. Solche Arrangements scheitern meist.',
        ],
        [
          'Co-Budget',
          'Ein Jahresbudget zusätzlich zur Pauschale, reserviert für große Momente: Double 11, einen Launch, eine Leitkampagne.',
          'Ein Co-Budget ohne Plan dahinter.',
        ],
      ],
    },
    link: { label: 'Eigene Zahlen durchrechnen: der Douyin-Kostenrechner', href: '/tools/douyin-cost-calculator' },
  },

  mistakes: {
    eyebrow: 'Was schiefgeht',
    title: 'Drei Arten, ein Douyin-Budget zu verbrennen',
    intro: 'Fehler auf Douyin kosten viel Geld, weil sie so schnell passieren. Das Geld versickert meist an diesen Stellen.',
    image: {
      src: '/Images/compass/dp-mistakes.webp',
      alt: 'Ein leeres Livestream-Studio nach Feierabend, das Ringlicht ausgeschaltet, Hautpflegeproben noch in einer Reihe auf dem Tisch',
    },
    items: [
      {
        name: 'Alles auf einen großen Creator',
        body: 'Ein Top-Creator verkauft eine ganze Charge an einem Abend ab, gegen 30 bis 50 Prozent Provision plus Platzierungsgebühr. Fehlt der eigene Marken-Livestream dahinter, bricht der Absatz am nächsten Morgen wieder ein.',
      },
      {
        name: 'Traffic ohne Substanz',
        body: 'Ein schwacher DP steckt Ihr Budget in Anzeigen und verkauft den Ausschlag als Wachstum. Lassen Sie sich den beworbenen Content zeigen, bevor Sie das Geld freigeben.',
      },
      {
        name: 'Ein Account, der Ihnen nicht gehört',
        body: 'Liegen Livestream und Follower auf dem Account des DP, bleiben sie bei ihm, wenn Sie gehen.',
      },
    ],
  },

  compass: {
    eyebrow: 'Unser Vorgehen',
    title: 'Auf unsere Liste kommen nur DPs, deren Livestreams wir kennen',
    lead: 'Compass ordnet jeden Douyin Partner den Kategorien zu, in denen er verkauft. Daneben stehen unsere Notizen zu seinen Hosts und Creatorn und dazu, wie viel Umsatz seine Livestreams tatsächlich erzielen. Von Partnern nehmen wir keine Provision. Wir decken acht Konsumkategorien ab: Beauty, Lebensmittel und Getränke, Mode, Wohnen, Wellness, Baby und Kleinkind, Heimtier und Nahrungsergänzung.',
    steps: compassSteps(
      'Wir suchen in Compass nach DPs, die Ihre Kategorie auf Douyin bereits verkaufen. Sie erhalten die drei bis fünf, die ein Treffen wert sind, jeweils mit einer Einschätzung ihrer Stärken und Schwächen. Auch wo sich bei den Gebühren nachverhandeln lässt, steht darin.',
    ),
    timing: compassTiming,
  },

  faq: {
    eyebrow: 'Fragen von Marken',
    title: 'Douyin Partner: die häufigsten Fragen',
    items: [
      {
        q: 'Was ist ein DP auf Douyin?',
        a: 'DP steht für Douyin Partner: die Agentur, die für eine Marke Douyin-Shop, Livestreams, Creator-Kooperationen und Werbung betreibt. Douyin selbst spricht vom E-Commerce-Dienstleister.',
      },
      {
        q: 'Was kostet ein Douyin Partner?',
        a: 'Üblich sind eine monatliche Pauschale und eine Provision. Unser Rechner veranschlagt die Pauschale mit rund 30.000 bis 100.000 RMB im Monat (etwa 3.700 bis 12.200 Euro), bei internationalen Marken mit 5 bis 8 Prozent Provision. Werbung und Creator-Provisionen kommen hinzu.',
      },
      {
        q: 'Kann mein Tmall Partner Douyin mit übernehmen?',
        a: 'Manche können das. Lassen Sie sich die Douyin-Livestreams zeigen, die er heute betreibt, und beurteilen Sie diese gesondert. Einen Store zu führen und einen Livestream zu betreiben sind zwei verschiedene Aufgaben.',
      },
      {
        q: 'Soll ich mit Creatorn oder mit einem eigenen Marken-Livestream beginnen?',
        a: 'Die meisten Marken brauchen beides. Creator bringen Reichweite, der eigene Livestream sorgt Tag für Tag für stetigen Absatz. Creator-Sessions allein erzeugen eher Strohfeuer als ein tragfähiges Geschäft.',
      },
      {
        q: 'Wie schnell sollte ein neuer Douyin-Shop verkaufen?',
        a: 'Langsamer, als die meisten Pitches versprechen. Die ersten Monate gehen in den Aufbau von Content, Sendeplan und einem Stamm an Creatorn. Wer im ersten Monat große Zahlen verspricht, will sie meist mit Ihrem Werbebudget kaufen.',
      },
      whoPaysFaq,
    ],
  },

  closing: {
    eyebrow: 'Kontakt',
    title: 'Erzählen Sie uns von Ihren Douyin-Plänen',
    lead: 'Ihr erster Shop steht an, oder Ihr DP gibt mehr aus, als er verkauft? Nennen Sie uns die Kategorie und den Stand des Accounts. Meist reicht ein kurzes Gespräch, um zu wissen, ob wir jemanden in der Datenbank haben, der besser passt.',
    primary: 'DP-Auswahlliste anfordern',
    secondary: 'So arbeiten wir',
  },
};

export default copy;
