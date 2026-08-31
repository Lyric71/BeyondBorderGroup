/**
 * /build-in-china — deutsche Fassung.
 *
 * Direkt auf Deutsch geschrieben, Register FAZ / Handelsblatt, nicht aus dem
 * Englischen übersetzt. Zahlen und die Fünf-Lücken-Systematik sind in
 * docs/restructure/content-sources.md, Abschnitt 6, belegt.
 */
import type { BuildInChinaCopy } from './types';

const copy: BuildInChinaCopy = {
  meta: {
    title: 'Website, WeChat und Mini-Programm in China | TheChinaPath',
    description:
      'Warum Ihre Website in China langsam oder unsichtbar bleibt: Baidu-Indexierung, ICP-Lizenz und die Wahl zwischen WeChat-Mini-Programm und mobiler Website. Umgesetzt von ChinaWebFoundry, unserem Web-Team in Shanghai.',
  },

  hero: {
    crumbHome: 'Startseite',
    crumbSection: 'Website und Social Media',
    eyebrow: 'Website und Social Media',
    titleBefore: 'Ihre Website funktioniert überall. ',
    titleEm: 'Nur',
    titleAfter: ' nicht in China.',
    lead: 'Acht Sekunden Ladezeit aus Shanghai, sofern die Seite überhaupt erscheint. Baidu hat sie nie indexiert. Und auf chinesischer Seite fällt in Meetings inzwischen das Wort „Mini-Programm“.',
    bodyBefore:
      'Das ist nicht ein Problem, sondern fünf, die gleichzeitig auftreten und jeweils eine andere Antwort verlangen. Diese Seite benennt sie. Gebaut wird die Website von ',
    cwfAnchor: 'ChinaWebFoundry, unserem Web-Team in Shanghai',
    bodyAfter: '.',
    ctaPrimary: 'Mit ChinaWebFoundry sprechen',
    ctaSecondary: 'Mini-Programm oder Website?',
    shotAria: 'chinawebfoundry.com öffnen',
    shotCta: 'Zur Website',
    shotAlt:
      'Startseite von ChinaWebFoundry, einer Shanghaier Webagentur: ICP-Lizenzstatus, Baidu-Ranking und eine Ladezeit von 1,2 Sekunden',
    scrollAria: 'Zu den fünf Lücken scrollen',
    scrollLabel: 'Scrollen',
  },

  gapsSection: {
    eyebrow: 'Das eigentliche Problem',
    title: 'Fünf Lücken öffnen sich gleichzeitig.',
    lead: 'Die meisten ausländischen Marken starten in China mit einer Übersetzung ihrer globalen Website. Ein halbes Jahr später ist die Pipeline leer. Hier sind die Lücken, ungefähr in der Reihenfolge, in der sie wehtun.',
    hint: 'Eine Lücke öffnen, um sie zu lesen.',
    figureAlt:
      'Eine Marketingverantwortliche am Schreibtisch in Shanghai in der Abenddämmerung, vor einer Seite, die nicht lädt',
    figureCaption: 'Ein halbes Jahr im Markt, und noch immer keine Anfragen.',
  },

  gaps: [
    {
      id: 'content',
      icon: 'content',
      tag: 'Inhalte',
      title: 'Ihre Inhalte überzeugen nicht',
      body: 'Chinesische Käufer suchen nach Belegen, die ausländische Teams weit unten vergraben: Glaubwürdigkeit der Gründer, Zertifizierungen, Partnerlogos, Auszeichnungen. Ein muttersprachlicher Autor setzt sie dorthin, wo ein chinesischer Leser sie erwartet.',
    },
    {
      id: 'ux',
      icon: 'ux',
      tag: 'Bedienung',
      title: 'Ihre Oberfläche wirkt fremd',
      body: 'Mobil zuerst, meist im integrierten Browser von WeChat. Lange, dichte Seiten, Vertrauenssignale gleich im ersten Bildschirm. Westlicher Minimalismus wirkt dort unfertig.',
    },
    {
      id: 'baidu',
      icon: 'baidu',
      tag: 'Baidu',
      title: 'Baidu sieht Sie nicht',
      body: 'Andere Ranking-Signale, andere Indexierungsregeln. Ohne ICP-Lizenz und chinesisches Hosting indexiert Baidu eine Website nicht sauber. Was bei Google funktioniert, lässt sich nicht übertragen.',
      cite: 'Baidu hält rund die Hälfte des chinesischen Suchmarktes. Google liegt unter 3 Prozent. Quelle: Statcounter Global Stats, China, 2024.',
    },
    {
      id: 'ai',
      icon: 'ai',
      tag: 'KI-Modelle',
      title: 'Für viele Käufer haben KI-Modelle die Suche längst ersetzt',
      body: 'Doubao, Kimi, DeepSeek und Baidus Wenxin beantworten heute Fragen, die früher in ein Suchfeld gingen. Geklickt wird selten weiter. Sind Ihre Seiten nicht so aufgebaut, dass eine KI sie zitieren kann, kommen Sie schlicht nicht vor.',
    },
    {
      id: 'infra',
      icon: 'infra',
      tag: 'Infrastruktur',
      title: 'Chinesisches Hosting ist nur das Fundament',
      body: 'Träge Ladezeiten, funktionslose Plug-ins, Skripte, die hinter der Great Firewall stillschweigend scheitern. Steht das Fundament, entscheidet die Wirkung der Marke über den Kunden.',
    },
  ],

  icp: {
    eyebrow: 'Was Ihnen niemand erklärt',
    title: 'Die ICP-Lizenz, ohne Umschweife.',
    lead: 'Eine Registriernummer des chinesischen Ministeriums für Industrie und Informationstechnologie, gebunden an genau eine Domain und einen Host auf dem Festland. Näher an einem Kfz-Kennzeichen als an einem Zertifikat. Ohne sie darf kein Server in China Ihre Domain ausliefern.',
    steps: [
      {
        step: 'Chinesische Gesellschaft',
        detail: 'Die Lizenz hält eine Gesellschaft chinesischen Rechts, nicht die Agentur.',
      },
      {
        step: 'Antrag',
        detail: 'Eingereicht über Ihren chinesischen Host, mit Domain und einer realen Adresse.',
      },
      {
        step: 'Prüfung durch das MIIT',
        detail: 'Mehrere Wochen Wartezeit. Sie bestimmt den Terminplan.',
      },
      {
        step: 'Nummer erteilt',
        detail: 'Ihre 备案号 steht im Fußbereich der Seite. Das Hosting wird freigeschaltet.',
      },
    ],
    figureAlt: 'Ein geschnittener Firmenstempel und roter Abdruck neben den Antragsunterlagen',
    figureCaption: 'Der Antrag ist Papierkram, und dieser Papierkram bestimmt den Terminplan.',
    unlockTitle: 'Was die Lizenz freigibt',
    unlocks: [
      'Saubere Indexierung durch Baidu',
      'Hosting auf dem chinesischen Festland',
      'Anbindung an WeChat und Mini-Programme',
      'Zahlungen auf einer Festland-Domain',
    ],
    trapTitle: 'Der Fallstrick',
    trapBody:
      'Die Lizenz liegt bei einer Gesellschaft chinesischen Rechts. Wer sie hält, wiegt deshalb schwerer, als es zunächst aussieht. Lassen Sie einen Dienstleister sie auf seinen Namen beantragen, stellen Sie womöglich zwei Jahre später fest, dass Sie den Host ohne dessen Zustimmung nicht wechseln können.',
    trapKicker:
      'Starten Sie den Antrag vor dem Design, nicht danach. Die Wartezeit läuft problemlos parallel.',
  },

  choose: {
    figureAlt:
      "Schaufenster eines WeChat-Mini-Programms auf Chinesisch: Capsule-Button, Aktionsbanner, Kategorie-Shortcuts, Produktkarten mit Yuan-Preisen und eine Tab-Leiste am unteren Rand",
    figureCaption:
      "So begegnet eine Käuferin dem Mini-Programm tatsächlich: innerhalb von WeChat, ohne Download, ohne Anmeldeschranke, der Capsule-Button oben rechts geparkt, wo Ihre Oberfläche ihn nicht überdecken kann.",
    eyebrow: 'Die zweite Frage, die immer kommt',
    title: 'WeChat-Mini-Programm oder mobile Website?',
    lead: 'Zwei verschiedene Probleme, und die falsche Wahl kostet leise. Viele Marken haben am Ende beides. Fast keine braucht am Anfang beides. Vier Fragen bringen die meisten Teams zu einer Antwort.',
    questions: [
      {
        q: 'Muss die Zahlung innerhalb von WeChat abschließen, ohne Weiterleitung?',
        yes: 'mp',
        hint: 'WeChat Pay in der Sitzung',
      },
      {
        q: 'Sollen Sie auf Baidu oder in den KI-Modellen gefunden werden?',
        yes: 'site',
        hint: 'Sichtbarkeit in der Suche',
      },
      {
        q: 'Kommen Käufer wieder, und zählen Mitgliedschaft oder Guthaben?',
        yes: 'mp',
        hint: 'Wiederkauf und Bindung',
      },
      {
        q: 'Wird jemand vor Ort fast jede Woche neue Inhalte veröffentlichen?',
        yes: 'site',
        hint: 'Redaktioneller Takt',
      },
    ],
    yes: 'Ja',
    no: 'Nein',
    reset: 'Antworten zurücksetzen',
    verdictEyebrow: 'Zwischenstand',
    verdictEmptyTitle: 'Beantworten Sie die vier',
    verdictEmptyBody:
      'Noch nichts gewertet. Gehen Sie die Fragen durch, die Empfehlung schärft sich unterwegs.',
    verdictMp: 'WeChat-Mini-Programm',
    verdictMpBody:
      'Zahlung und Wiederkauf tragen hier das meiste Gewicht. Bauen Sie zuerst innerhalb von WeChat und heben Sie sich die mobile Website für die zweite Stufe auf.',
    verdictSite: 'Mobile Website',
    verdictSiteBody:
      'Sie müssen gefunden werden und Sie haben etwas zu veröffentlichen. Fangen Sie mit der Website an und starten Sie die ICP-Lizenz sofort, denn die Wartezeit bestimmt alles Weitere.',
    verdictEven: 'Zuerst die Website',
    verdictEvenBody:
      'Die Antworten halten sich die Waage, was meist für die Website spricht. Sie lässt sich messen, und ein Mini-Programm obendrauf ist das kleinere zweite Projekt als umgekehrt.',
    verdictPartial: 'Tendenz',
    verdictPartialBody: 'Weiter so. Noch zwei Antworten, dann steht es fest.',
    meterLeft: 'Mini-Programm',
    meterRight: 'Mobile Website',
    rule: 'Faustregel: Sucht der Käufer, bauen Sie die Website. Folgt er Ihnen schon, bauen Sie das Mini-Programm. Wissen Sie es nicht, nehmen Sie die Website, denn sie ist die messbare Variante.',
    surfaces: [
      {
        key: 'mp',
        name: 'WeChat-Mini-Programm',
        cn: '小程序',
        blurb: 'Lebt in WeChat. Außerhalb praktisch unsichtbar.',
        right: [
          'Der Verkauf muss über WeChat Pay abschließen',
          'Mitgliedschaft, Stufen und Guthaben gehören zum Modell',
          'Käufer kommen aus Gruppenchats, Pushes und QR-Codes im Laden',
          'Der Ablauf ist transaktional und die Kundschaft kehrt zurück',
        ],
        wrong: [
          'Sie müssen vor allem gefunden werden',
          'Niemand im Team kann eine zweite Oberfläche dauerhaft bespielen',
        ],
      },
      {
        key: 'site',
        name: 'Mobile Website',
        cn: '移动站',
        blurb:
          'Auffindbar, verlinkbar, indexierbar. Kann eine WeChat-Zahlung nicht allein abschließen.',
        right: [
          'Sichtbarkeit in der Suche ist das Ziel, bei Baidu wie in den KI-Modellen',
          'Inhalte ändern sich oft und ein lokaler Marketer muss sie veröffentlichen können',
          'Sie wollen eine Adresse, die sich überall teilen lässt, nicht nur in WeChat',
          'Die Kaufentscheidung dauert und beruht auf Recherche',
        ],
        wrong: [
          'Die Zahlung muss in WeChat abschließen, ohne Weiterleitung',
          'Ihr gesamtes Publikum sitzt bereits in einem offiziellen Account',
        ],
      },
    ],
    rightWhen: 'Richtig, wenn',
    wrongWhen: 'Falsch, wenn',
  },

  proof: {
    eyebrow: 'Was sich ändert',
    title: 'Steht das Fundament, bewegen sich die Zahlen schnell.',
    loadLabel: 'Mediane Ladezeit der live gegangenen Websites, gemessen aus Shanghai.',
    bounceLabel:
      'Mediane Absprungrate vorher und nachher, Websites ausländischer Marken in China, erste 90 Tage.',
    source:
      'Von ChinaWebFoundry über alle live gegangenen Kundenwebsites gemessen. Die Absprungrate vergleicht dieselben Marken vorher und nachher.',
  },

  door: {
    eyebrow: 'Wer sie baut',
    title: 'Websites bauen wir nicht. Die Kollegen den Gang runter schon.',
    bodyOneBefore: '',
    cwfAnchor: 'ChinaWebFoundry',
    bodyOneAfter:
      ' sitzt im selben Büro wie das Team, das Ihren Tmall-Store und Ihre Distributorensuche führt. Gleiche Gruppe, gleiches Haus, gleiche Wochenrunde. Das zählt, denn China-Projekte scheitern meist an der Übergabe zwischen denen, die den Kanal kennen, und denen, die den Code schreiben.',
    bodyTwo:
      'Der nächste Schritt ist ein China Site Scan. Sie prüfen Ihre Domain vom Festland aus und schicken zurück, was tatsächlich passiert: Ladezeit aus Shanghai, was Baidu indexiert hat, welche Skripte hinter der Great Firewall scheitern. Kostenlos, und in wenigen Tagen erledigt.',
    ctaPrimary: 'Mit ChinaWebFoundry sprechen',
    ctaSecondary: 'Lieber mit uns sprechen',
    scanAria: 'Beispiel einer Website-Prüfung',
    scanTitle: 'China Site Scan',
    scanLive: 'läuft',
    scanRows: [
      {
        label: 'Ladezeit, gemessen aus Shanghai',
        to: 8.4,
        decimals: 1,
        suffix: 's',
        note: 'Ziel: unter 2,5 s',
        pct: 94,
        tone: 'bad',
      },
      {
        label: 'Von Baidu indexierte Seiten',
        to: 0,
        decimals: 0,
        suffix: '',
        note: 'keine ICP-Lizenz hinterlegt',
        pct: 100,
        tone: 'bad',
      },
      {
        label: 'Hinter der Great Firewall blockierte Skripte',
        to: 6,
        decimals: 0,
        suffix: '',
        note: 'Schriften, Karten, Tag Manager',
        pct: 64,
        tone: 'warn',
      },
    ],
    scanAiLabel: 'Für chinesische KI-Modelle lesbar',
    scanAiValue: 'Nein',
    scanAiNote: 'Doubao, Kimi, DeepSeek',
    scanFoot:
      'Echte Prüfung, anonymisiert. Vier von fünf geprüften Marken fallen bei mindestens drei Zeilen durch.',
  },
};

export default copy;
