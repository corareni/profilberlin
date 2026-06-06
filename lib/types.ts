export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustStat {
  number: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  id?: string;
}

export interface ContactFormData {
  vorname: string;
  nachname: string;
  email: string;
  telefon?: string;
  thema: string;
  nachricht?: string;
}
