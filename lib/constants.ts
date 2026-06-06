import type {
  FAQItem,
  NavLink,
  ProcessStep,
  Service,
  TrustStat,
  WhyUsItem,
} from "./types";

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojzeqql";

export const COMPANY = {
  name: "Profil Vermögensmanagement GmbH",
  shortName: "Profil Vermögensmanagement",
  address: "Riehlstraße 3",
  city: "14057 Berlin",
  email: "info@profilberlin.de",
  website: "www.profilberlin.de",
  url: "https://www.profilberlin.de",
  manager: "Stefan Affeld",
  managerRole: "Geschäftsführer",
  founded: "1998",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Philosophie", href: "#philosophie", id: "philosophie" },
  { label: "Leistungen", href: "#leistungen", id: "leistungen" },
  { label: "Ansatz", href: "#ansatz", id: "ansatz" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export const TRUST_STATS: TrustStat[] = [
  { number: "25+", label: "Jahre Erfahrung" },
  { number: "100%", label: "Unabhängig" },
  { number: "0", label: "Provisionen" },
  { number: "1:1", label: "Persönliche Betreuung" },
  { number: "BaFin", label: "Reguliert & lizenziert" },
];

export const HERO_STATS: TrustStat[] = [
  { number: "25+", label: "Jahre Erfahrung im Markt" },
  { number: "100%", label: "Unabhängig & provisionsfrei" },
  { number: "14057", label: "Standort Berlin" },
];

export const PHILOSOPHY_VALUES = [
  "Unabhängigkeit",
  "Transparenz",
  "Langfristigkeit",
  "Nachhaltigkeit",
  "Diskretion",
] as const;

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Portfolioverwaltung",
    description:
      "Diskretionäre Verwaltung Ihres Vermögens nach individuell vereinbarten Anlagerichtlinien und präzisen Risikoparametern.",
  },
  {
    number: "02",
    title: "Anlageberatung",
    description:
      "Unabhängige, provisionsfreie Beratung zu Investitionsentscheidungen — auf Basis eigener, tiefgehender Kapitalmarktanalyse.",
  },
  {
    number: "03",
    title: "Vermögensplanung",
    description:
      "Ganzheitliche Planung Ihrer finanziellen Zukunft: Altersvorsorge, Nachlassplanung, Generationentransfer und Steueroptimierung.",
  },
  {
    number: "04",
    title: "Risikoanalyse",
    description:
      "Systematische Bewertung und aktive Steuerung aller Portfoliorisiken — transparent, nachvollziehbar und jederzeit dokumentiert.",
  },
  {
    number: "05",
    title: "Stiftungen & Institutionen",
    description:
      "Spezialisierte Betreuung für Family Offices, Stiftungen und institutionelle Anleger mit besonderen regulatorischen Anforderungen.",
  },
  {
    number: "06",
    title: "Reporting & Controlling",
    description:
      "Konsolidiertes, individuelles Reporting über alle Vermögenswerte und Assetklassen — klar, präzise und jederzeit abrufbar.",
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    icon: "Shield",
    title: "Vollständige Unabhängigkeit",
    text: "Wir erhalten keine Provisionen oder Vergütungen von Produktanbietern. Unser einziges Interesse ist Ihr Vermögen — und seine langfristige Entwicklung.",
  },
  {
    icon: "Clock",
    title: "Langfristiger Horizont",
    text: "Wir denken in Generationen, nicht in Quartalen. Unsere Anlageentscheidungen sind auf Kapitalerhalt und nachhaltiges Wachstum über Jahrzehnte ausgerichtet.",
  },
  {
    icon: "Users",
    title: "Persönliche Betreuung",
    text: "Kein Call-Center, kein wechselnder Berater. Sie haben einen direkten Ansprechpartner, der Ihre Situation kennt und langfristig für Sie da ist.",
  },
  {
    icon: "BarChart2",
    title: "Transparentes Pricing",
    text: "Unsere Vergütung ist klar, fair und ausschließlich honorarbasiert. Sie wissen jederzeit, was Sie zahlen — und wofür.",
  },
  {
    icon: "LayoutGrid",
    title: "Ganzheitlicher Blick",
    text: "Wir betrachten Ihr Gesamtvermögen: liquide Assets, Immobilien, Beteiligungen, Vorsorge und Verbindlichkeiten — alles in einer konsolidierten Sicht.",
  },
  {
    icon: "CheckCircle",
    title: "BaFin-reguliert",
    text: "Als zugelassene Vermögensverwaltung unterliegen wir der Aufsicht der BaFin und erfüllen alle regulatorischen Anforderungen nach deutschem Recht.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Erstgespräch & Bedarfsanalyse",
    description:
      "Wir lernen Sie kennen — Ihre Ziele, Ihre Lebenssituation und Ihren Zeithorizont. Kein Produkt, kein Pitch. Nur ein ehrliches Gespräch über das, was wirklich zählt.",
  },
  {
    number: "02",
    title: "Strategieentwicklung",
    description:
      "Auf Basis Ihrer individuellen Rahmenbedingungen entwickeln wir eine maßgeschneiderte Anlagestrategie mit klaren Renditezielen und Risikoparametern.",
  },
  {
    number: "03",
    title: "Umsetzung & Implementierung",
    description:
      "Wir setzen die vereinbarte Strategie konsequent und kosteneffizient um — mit Zugang zu allen relevanten Assetklassen und Märkten weltweit.",
  },
  {
    number: "04",
    title: "Laufende Betreuung & Reporting",
    description:
      "Regelmäßige Portfolio-Reviews, proaktive Kommunikation und laufende Anpassung an veränderte Markt- oder Lebenssituationen.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Was ist der Unterschied zur Bankberatung?",
    answer:
      "Als unabhängige Vermögensverwaltung sind wir nicht an ein Produktportfolio gebunden und erhalten keine Provisionen von Produktanbietern. Wir werden ausschließlich durch eine transparente Honorargebühr vergütet — und stehen damit immer auf Ihrer Seite.",
  },
  {
    question: "Ab welchem Vermögen ist eine Zusammenarbeit sinnvoll?",
    answer:
      "Eine Zusammenarbeit ist in der Regel ab einem investierbaren Vermögen von 250.000 Euro sinnvoll. Gerne besprechen wir Ihre individuelle Situation in einem unverbindlichen Erstgespräch.",
  },
  {
    question: "Wie werden Ihre Leistungen vergütet?",
    answer:
      "Unsere Vergütung erfolgt ausschließlich honorarbasiert — als prozentualer Anteil des verwalteten Vermögens oder als Pauschalhonorar. Keine versteckten Kosten, keine Provisionen, keine Kick-backs.",
  },
  {
    question: "Sind meine Gelder sicher?",
    answer:
      "Ihr Vermögen liegt stets auf Ihren eigenen Depots bei einer deutschen Depotbank. Wir haben nur eine Anlagevollmacht — Zugriff auf Ihre Gelder ist für uns nicht möglich. Wir sind als Finanzportfolioverwalter bei der BaFin zugelassen.",
  },
  {
    question: "Wie läuft ein Erstgespräch ab?",
    answer:
      "Das Erstgespräch ist kostenfrei und unverbindlich — persönlich in Berlin oder per Videokonferenz. Wir hören zu, stellen Fragen und erläutern unsere Arbeitsweise. Keine Produktpräsentationen, kein Verkaufsdruck.",
  },
  {
    question: "Wie oft werde ich über mein Portfolio informiert?",
    answer:
      "Sie erhalten regelmäßige schriftliche Reports sowie persönliche Quartals- oder Halbjahresgespräche. Bei bedeutenden Marktentwicklungen kommunizieren wir proaktiv — ohne auf Ihre Nachfrage zu warten.",
  },
];

export const CONTACT_TOPICS = [
  "Portfolioverwaltung",
  "Anlageberatung",
  "Vermögensplanung",
  "Stiftungen & Institutionen",
  "Allgemeine Anfrage",
] as const;

export const FOOTER_SERVICES = [
  "Portfolioverwaltung",
  "Anlageberatung",
  "Vermögensplanung",
  "Risikoanalyse",
  "Stiftungen & Institutionen",
] as const;
