export interface FAQItem {
  question: string;
  answer: string;
  category?: string; // Optional für Rückwärtskompatibilität
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
  subCategories?: FAQCategory[]; // Optional for hierarchical structure
}

export const faqCategories: FAQCategory[] = [
  {
    id: "allgemein",
    label: "Allgemein",
    items: [
  {
        question: "Brauche ich eine Überweisung vom Arzt?",
        answer: "Ja, für die Ergotherapie benötigen Sie eine Heilmittelverordnung (Rezept) von Ihrem Hausarzt oder Facharzt. Diese darf bei Behandlungsbeginn in der Regel nicht älter als 28 Tage sein.",
  },
  {
        question: "Wie bekomme ich einen Termin?",
        answer: "Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Da wir während der Therapien nicht ans Telefon gehen können, sprechen Sie bitte auf den Anrufbeantworter. Wir rufen zeitnah zurück.",
      },
      {
        question: "Muss ich etwas zuzahlen?",
        answer: "Gesetzlich Versicherte müssen ab dem 18. Lebensjahr eine Zuzahlung leisten (10 Euro pro Verordnung + 10% der Behandlungskosten), sofern keine Befreiung vorliegt. Kinder und Jugendliche sind zuzahlungsfrei.",
      },
    ],
  },
  {
    id: "behandlung",
    label: "Behandlung",
    items: [
  {
        question: "Wie lange dauert eine Therapieeinheit?",
        answer: "Die Dauer richtet sich nach der ärztlichen Verordnung. Meistens dauert eine Einheit zwischen 30 und 60 Minuten, je nach Maßnahmenart (z.B. motorisch-funktionell oder psychisch-funktionell).",
      },
      {
        question: "Machen Sie auch Hausbesuche?",
        answer: "Ja, wenn der Arzt einen Hausbesuch verordnet hat, kommen wir gerne zu Ihnen nach Hause oder in die Pflegeeinrichtung.",
  },
  {
        question: "Wie viele Therapieeinheiten sind üblich?",
        answer: "Die Anzahl der Therapieeinheiten richtet sich nach der ärztlichen Verordnung und dem individuellen Behandlungsbedarf. In der Regel werden 6-12 Einheiten verordnet, bei Bedarf kann die Verordnung verlängert werden.",
      },
    ],
  },
  {
    id: "kosten",
    label: "Kosten & Versicherung",
    items: [
      {
        question: "Übernimmt meine Krankenkasse die Kosten?",
        answer: "Ja, Ergotherapie ist eine Leistung der gesetzlichen Krankenversicherung. Bei Vorliegen einer Heilmittelverordnung übernimmt Ihre Krankenkasse die Kosten. Privatversicherte sollten sich bei ihrer Versicherung über die Kostenübernahme informieren.",
      },
      {
        question: "Gibt es Zuzahlungen?",
        answer: "Gesetzlich Versicherte ab 18 Jahren müssen eine Zuzahlung leisten (10 Euro pro Verordnung + 10% der Behandlungskosten), sofern keine Befreiung vorliegt. Kinder und Jugendliche sind von der Zuzahlung befreit.",
      },
    ],
  },
];

// Rückwärtskompatibilität: Flache Liste für alte Komponenten
export const faqs: FAQItem[] = faqCategories.flatMap(category => category.items);
