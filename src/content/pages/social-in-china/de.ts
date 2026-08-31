/**
 * /social-in-china — deutsche Fassung.
 *
 * Direkt auf Deutsch geschrieben, Register FAZ / Handelsblatt. Die Kundenzahlen
 * stammen aus dem TheRedScroll-Repository und sind in
 * docs/restructure/content-sources.md, Abschnitt 7, belegt.
 */
import type { SocialInChinaCopy } from './types';

const copy: SocialInChinaCopy = {
  meta: {
    title: 'Chinesische Social Media: WeChat, RedNote, Douyin, Weibo | TheChinaPath',
    description:
      'Wofür WeChat, RedNote, Douyin und Weibo jeweils wirklich taugen, wo Social verkauft und wo es nur Publikum aufbaut, und wer welchen Teil der Arbeit führen sollte.',
  },

  stages: ['Entdecken', 'Recherche', 'Entscheiden', 'Kaufen', 'Binden'],

  hero: {
    crumbHome: 'Startseite',
    crumbSection: 'Website und Social Media',
    eyebrow: 'Website und Social Media',
    titleBefore: 'In China ',
    titleEm: 'ist',
    titleAfter: ' Social der Laden.',
    lead: 'Dort wird gesucht, dort stehen die Bewertungen, dort läuft der Kundenservice, und dort schließt ein erheblicher Teil der Käufe ab. Wer diese Accounts als Redaktionsplan führt, hat den Markt falsch gelesen.',
    bodyBefore:
      'Hier steht, wofür jede Plattform taugt und wer welche Hälfte der Arbeit führen sollte. Das Tagesgeschäft liegt bei ',
    trsAnchor: 'TheRedScroll, unserer Social-Agentur',
    bodyAfter: '.',
    ctaPrimary: 'Mit TheRedScroll sprechen',
    ctaSecondary: 'Wer macht was',
    shotAria: 'theredscroll.com öffnen',
    shotCta: 'Zur Website',
    shotAlt:
      'Startseite von TheRedScroll, einer China-Social-Agentur für WeChat, RedNote, Douyin und Weibo',
    scrollAria: 'Zur Plattformkarte scrollen',
    scrollLabel: 'Scrollen',
  },

  map: {
    eyebrow: 'Die Plattformkarte',
    title: 'Vier Plattformen, vier verschiedene Aufgaben.',
    lead: 'Teuer wird es, wenn eine Botschaft über alle vier läuft. Jede besetzt einen anderen Moment desselben Kaufs, deshalb bleibt ein Beitrag, der auf einer funktioniert, auf den anderen zwangsläufig hinter den Erwartungen.',
    tablistAria: 'Chinesische Social-Plattformen',
    funnelTitle: 'Wo sie am stärksten wirkt',
    ownerSplit: 'Geteilte Fläche. Die Store-Seite liegt bei uns, die Publikumsseite bei ihnen.',
    ownerTrs: 'Läuft mit TheRedScroll.',
    ownerLink: 'Zur Abgrenzung',
    tailTitle: 'Und der lange Rest, länger als die meisten Präsentationen zugeben.',
    tailBody:
      'Manche Kategorien spielen fast ausschließlich dort. Hausgeräte auf Zhihu. Alles für Studierende auf Bilibili. Im Normalfall ignorieren, aber prüfen, bevor der Plan geschrieben wird.',
  },

  platforms: [
    {
      key: 'wechat',
      name: 'WeChat',
      cn: '微信',
      logo: '/Images/platforms/wechat-logo.svg',
      role: 'Wo Sie den Kunden halten',
      tint: '#07C160',
      body: 'Niemand stöbert in WeChat nach Marken. Man kommt über einen QR-Code, einen Gruppenchat, eine Empfehlung. Was WeChat besser kann als alles andere: die Beziehung danach halten und die Zahlung abwickeln. Offizieller Account, Mini-Programm, WeCom, Channels.',
      weights: [0, 1, 1, 2, 2],
      owner: 'Split',
      image: '/Images/social/wechat.png',
      alt: 'Eine Frau liest in einem Shanghaier Café eine WeChat-Unterhaltung auf ihrem Telefon',
    },
    {
      key: 'rednote',
      name: 'RedNote',
      cn: '小红书',
      logo: '/Images/platforms/rednote-logo.svg',
      role: 'Wo der Kauf recherchiert wird',
      tint: '#FF2442',
      body: 'Außerhalb Chinas Xiaohongshu. Halb Suchmaschine, halb Bewertungsportal. Wer Ihren Namen gehört hat, prüft hier, ob echte Menschen zufrieden waren. Beauty, Mode, Wellness und Reisen entscheiden sich hier. Gesucht wird wie bei Google, weshalb für Instagram geschriebene Inhalte hier verpuffen.',
      weights: [2, 2, 2, 1, 0],
      owner: 'TheRedScroll',
      image: '/Images/social/rednote.png',
      alt: 'Eine Kundin scrollt neben Pflegefläschchen und Trockenblumen durch einen RedNote-Beauty-Feed',
    },
    {
      key: 'douyin',
      name: 'Douyin',
      cn: '抖音',
      logo: '/Images/platforms/douyin-logo.svg',
      role: 'Wo aus Entdecken ein Verkauf wird',
      tint: '#FE2C55',
      body: 'Ein Laden mit angehängtem Video-Feed. Die Followerzahl zählt weit weniger als der Store: ein kurzes Video, das auf einer Produktkarte endet, ein Livestream, der in derselben Sitzung abschließt. Der Algorithmus gibt auch einem ganz neuen Account echte Reichweite, wenn der Inhalt sie verdient.',
      weights: [2, 1, 1, 2, 1],
      owner: 'Split',
      image: '/Images/social/douyin.png',
      alt: 'Eine Douyin-Moderatorin präsentiert im ringbeleuchteten Studio ein Pflegeprodukt vor der Kamera',
    },
    {
      key: 'weibo',
      name: 'Weibo',
      cn: '微博',
      logo: '/Images/platforms/weibo-logo.svg',
      role: 'Wo Nachrichten entstehen und Reputation hängt',
      tint: '#E6162D',
      body: 'Ruhiger als früher und noch immer das, was China einem öffentlichen Platz am nächsten kommt. Prominenten-Kooperationen werden hier zur Nachricht. Hashtags lassen sich in die Trendlisten einkaufen. Ein Markenproblem taucht hier zuerst auf, weshalb die meisten Marken Weibo als Reputationsschutz führen und nicht als Wachstumskanal.',
      weights: [2, 1, 0, 0, 1],
      owner: 'TheRedScroll',
      image: '/Images/platforms/weibo.png',
      alt: 'Eine Weibo-Trendtafel leuchtet an einem Regenabend über Passanten auf der Nanjing Road',
    },
  ],

  longTail: [
    {
      name: 'Bilibili',
      cn: '哔哩哔哩',
      logo: '/Images/platforms/bilibili-logo.svg',
      who: 'Studierende, Gaming, lange Formate',
    },
    {
      name: 'Kuaishou',
      cn: '快手',
      logo: '/Images/platforms/kuaishou-logo.svg',
      who: 'Kleinere Städte, Livestream',
    },
    {
      name: 'Zhihu',
      cn: '知乎',
      logo: '/Images/platforms/zhihu-logo.svg',
      who: 'Recherchelastige Käufe, Hausgeräte',
    },
    {
      name: 'Toutiao',
      cn: '今日头条',
      logo: '/Images/platforms/toutiao-logo.svg',
      who: 'Nachrichten-Feed, ältere Leser',
    },
    {
      name: 'Meituan',
      cn: '美团',
      logo: '/Images/platforms/meituan-logo.svg',
      who: 'Lokale Dienste, Gastronomie, Laufkundschaft',
    },
    {
      name: 'Pinduoduo',
      cn: '拼多多',
      logo: '/Images/platforms/pinduoduo-logo.svg',
      who: 'Preisgetriebenes Volumen',
    },
  ],

  splitSection: {
    eyebrow: 'Die ehrliche Fassung',
    title: 'Wo Social verkauft, und wo es nur den Boden bereitet.',
    lead: 'Zwei Unternehmen einer Gruppe bewerben sich schnell um dasselbe Briefing. Deshalb steht die Trennlinie hier schwarz auf weiß, und sie gilt in beide Richtungen.',
    testLabel: 'Unser Maßstab: Woran wird die Arbeit gemessen?',
    filterAria: 'Nach dem Maßstab der Arbeit filtern',
    filterBoth: 'Beides',
    filterGmv: 'Umsatz',
    filterAudience: 'Publikum',
    note: 'Wo es unscharf wird, und das wird es, entscheidet die Zahl am Monatsende. Ist es Umsatz, gehört die Arbeit uns. Ist es Publikum, gehört sie ihnen. Ein Livestream kann beides sein, je nachdem, warum Sie ihn fahren. Auch die Reihenfolge zählt: an ein Publikum zu verkaufen, das es noch gar nicht gibt, ist der häufigste Weg zu dem Schluss, chinesische Social Media funktionierten nicht.',
  },

  split: [
    {
      key: 'gmv',
      owner: 'Führt TheChinaPath',
      title: 'Social, das in einer Transaktion endet',
      metric: 'Am Umsatz gemessen',
      items: [
        'Douyin-Store: Aufbau, Katalog, Produktkarten und der Betrieb dahinter',
        'WeChat-Ministore, Kasse und die daran hängende Mitgliedschaftsmechanik',
        'Livestream, gebaut um in der Sitzung abzuschließen',
        'Festival-Kampagnen an einem Store: 618, Double 11, Neujahrsfest',
        'Bezahlte Medien, die den Store füttern, gemessen an dem, was der Store getan hat',
      ],
      why: 'Handelsarbeit im Social-Gewand. Sie liegt bei dem Team, das ohnehin Ihre Tmall- und JD-Operationen führt, weil Bestand, Preise und Aktionskalender dort liegen.',
    },
    {
      key: 'audience',
      owner: 'Führt TheRedScroll',
      title: 'Social, das den Boden darunter aufbaut',
      metric: 'Am Publikum gemessen',
      items: [
        'Tägliche Inhalte über alle Accounts, auf Chinesisch, von chinesischen Autoren',
        'Community-Betreuung, Kommentare, Direktnachrichten, Private-Domain-Arbeit in WeChat-Gruppen',
        'KOL- und KOC-Seeding, Casting, Briefing und die Beziehungen dahinter',
        'Markenkampagnen, gemessen an Reichweite, Tonalität und Suchvolumen',
        'Account-Aufbau, Verifizierung und die lange Arbeit an einer Gefolgschaft',
      ],
      why: 'Eine andere Disziplin auf einer anderen Uhr. Sie verzinst sich über Quartale und braucht muttersprachliche Autoren, die jede Woche liefern. Sie scheitert, wenn ein Handelsteam sie nebenbei betreibt.',
    },
  ],

  proof: {
    eyebrow: 'Wie das aussieht',
    title: 'Erst das Publikum, dann die Umsätze, die folgten.',
    followersLabel: 'Camper-Follower auf WeChat, RedNote und Weibo, über achtzehn Monate.',
    sameStoreLabel: 'Flächenbereinigter Umsatz von Camper im Jahresvergleich, im selben Zeitraum.',
    blueLabel: 'Neue Follower im ersten Monat für Blue Insurance, gestartet ohne jedes Publikum.',
    source:
      'Kundenarbeit von TheRedScroll. Die Follower- und Flächenumsatzzahlen von Camper decken dieselben achtzehn Monate ab, auf WeChat, RedNote und Weibo. Blue Insurance startete Hongkongs ersten digitalen Lebensversicherer ohne bestehendes Publikum.',
  },

  door: {
    eyebrow: 'Wer es führt',
    title: 'Fester Umfang, fester Preis, ein Team, das hier schon arbeitet.',
    bodyOneBefore: '',
    trsAnchor: 'TheRedScroll',
    bodyOneAfter:
      ' arbeitet so, wie Agenturen es weitgehend aufgegeben haben. Leistungen im Vertrag, Monatspreis im Vertrag, beides vereinbart, bevor jemand anfängt. Keine Stundenabrechnung, kein Umfang, der mitten im Quartal wegdriftet.',
    bodyTwo:
      'Der nächste Schritt ist ein Gespräch von dreißig Minuten. Bringen Sie Ihre Kategorie mit, Ihre Accounts, falls vorhanden, und das, was Sie bewegen wollen. Stellt sich heraus, dass es die Handelsseite ist, schicken sie Sie zu uns zurück, und niemand verliert einen Monat an der Übergabe.',
    ctaPrimary: 'Mit TheRedScroll sprechen',
    ctaSecondary: 'Lieber mit uns sprechen',
  },
};

export default copy;
