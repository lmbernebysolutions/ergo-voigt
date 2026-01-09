import { LucideIcon } from "lucide-react"
import { HandHeart, Brain, Home, Activity, Heart, Eye, Shield, Wind, Hand, Sparkles, Footprints, Info, Zap } from "lucide-react"

export interface Service {
  id: string;
  category: "standard" | "special";
  title: string;
  teaser: string;
  description: string;
  longDescription?: string; // Detailed description from MDC
  details: string[]; // List of specific applications
  benefits?: string[]; // "Folgende Ziele können erreicht werden"
  faqs?: { question: string; answer: string }[];
  image: string; // Path to image
  tag?: string; // Optional tag for BentoCard display
  icon?: LucideIcon; // Icon for BentoCard display
  alert?: boolean; // For "Therapy full" alerts
}

export const services: Service[] = [
  // Standard Services (Leistungen)
  {
    id: "paediatrie",
    category: "standard",
    title: "Pädiatrie",
    tag: "KINDER & JUGENDLICHE",
    icon: HandHeart,
    teaser: "In der Pädiatrie werden Kinder & Jugendliche behandelt, die in ihrer Entwicklung verzögert oder behindert sind.",
    description: "In der Ergotherapie bei Kindern werden verschiedene Bereiche behandelt, um die Entwicklung und das Wohlbefinden der Kinder zu fördern. Dazu gehören: Motorische Fähigkeiten, kognitive Fähigkeiten, soziale Fähigkeiten, Alltagsfähigkeiten und sensorische Integration.",
    details: [
      "Motorische Fähigkeiten: Verbesserung der grob- und feinmotorischen Fähigkeiten",
      "Kognitive Fähigkeiten: Unterstützung bei der Entwicklung von Konzentration und Aufmerksamkeit",
      "Soziale Fähigkeiten: Förderung der Interaktion und Kommunikation",
      "Alltagsfähigkeiten: Hilfe bei der Bewältigung von alltäglichen Aufgaben",
      "Sensorische Integration: Unterstützung bei der Verarbeitung von Sinneseindrücken",
    ],
    image: "/Aue/Pädiatrie & Entwicklung1.webp",
  },
  {
    id: "neurologie",
    category: "standard",
    title: "Neurologie",
    tag: "ERWACHSENE",
    icon: Brain,
    teaser: "In der Neurologie stehen u.a. das Wiedererlangen sowie der Erhalt der Handlungsfähigkeit im Vordergrund.",
    description: "In der Ergotherapie in der Neurologie werden verschiedene Aspekte behandelt, um die Lebensqualität von Menschen mit neurologischen Erkrankungen zu verbessern. Die Therapie wird individuell auf die Bedürfnisse des Patienten abgestimmt.",
    details: [
      "Motorische Fähigkeiten: Verbesserung der Beweglichkeit, Kraft und Koordination",
      "Kognitive Fähigkeiten: Unterstützung bei Gedächtnis und Aufmerksamkeit",
      "Alltagsfähigkeiten: Hilfe bei der Wiedererlangung von Selbstversorgung",
      "Sensomotorische Integration: Förderung der Körperwahrnehmung",
      "Emotionale Unterstützung: Begleitung bei der Bewältigung von Herausforderungen",
    ],
    image: "/Neurologie_Psychotherapie/Neurologie4.jpeg",
  },
  {
    id: "geriatrie",
    category: "standard",
    title: "Geriatrie",
    tag: "MOBILITÄT",
    icon: Home,
    teaser: "Die Geriatrie behandelt Menschen mit körperlichen & geistigen Einschränkungen aufgrund ihres Alters.",
    description: "In der Ergotherapie in der Geriatrie werden verschiedene Aspekte behandelt, um die Lebensqualität älterer Menschen zu verbessern und ihre Selbstständigkeit zu fördern. Die Therapie wird individuell auf die Bedürfnisse abgestimmt.",
    details: [
      "Alltagsfähigkeiten: Unterstützung bei der Selbstversorgung",
      "Motorische Fähigkeiten: Verbesserung der Beweglichkeit zur Sturzvermeidung",
      "Kognitive Fähigkeiten: Förderung von Gedächtnis und Aufmerksamkeit",
      "Soziale Interaktion: Förderung sozialer Kontakte gegen Isolation",
      "Anpassung der Umgebung: Beratung zur Wohnraumanpassung",
    ],
    image: "/Geriatrie (Aktives Hirnleistungstraining - Feinmotorik).webp",
  },
  {
    id: "orthopaedie",
    category: "standard",
    title: "Orthopädie/ Handtherapie",
    tag: "MOBILITÄT",
    icon: Activity,
    teaser: "Patienten, die eine Störung/ Verletzung des Bewegungsapparates aufweisen, werden in der Orthopädie/ Handtherapie behandelt.",
    description: "In der Ergotherapie bei motorischen Patienten werden verschiedene Aspekte behandelt, um die motorischen Fähigkeiten und die allgemeine Lebensqualität zu verbessern. Dazu gehören Grobmotorik, Feinmotorik und Koordination.",
    details: [
      "Grobmotorik: Verbesserung der großen Bewegungen",
      "Feinmotorik: Förderung der kleinen, präzisen Bewegungen",
      "Koordination: Verbesserung der Hand-Augen-Koordination",
      "Krafttraining: Stärkung der Muskulatur",
      "Schmerzlinderung: Anwendung von Techniken zur Schmerzlinderung",
      "Hilfsmittelberatung: Unterstützung bei der Auswahl von Hilfsmitteln",
    ],
    image: "/Aue/Neurologie & Handtherapie : Orthopädie2.webp",
  },
  {
    id: "psychiatrie",
    category: "standard",
    title: "Psychiatrie/Psychotherapie",
    tag: "KOOPERATION",
    icon: Heart,
    teaser: "Patienten, die unter psychischen Symptomen leiden, werden in der Psychiatrie/Psychotherapie behandelt.",
    description: "In der Ergotherapie bei psychisch kranken Menschen werden verschiedene Aspekte behandelt, um die psychische Gesundheit und die Lebensqualität zu verbessern. Dazu gehören Alltagsfähigkeiten, soziale Fähigkeiten und emotionale Regulation.",
    details: [
      "Alltagsfähigkeiten: Unterstützung bei der Strukturierung des Alltags",
      "Soziale Fähigkeiten: Förderung der Kommunikation",
      "Emotionale Regulation: Strategien zur Stressbewältigung",
      "Kognitive Fähigkeiten: Verbesserung von Konzentration",
      "Selbstwertgefühl und Motivation: Stärkung der Eigenverantwortung",
      "Kreative Ausdrucksformen: Kunst- oder Musiktherapie",
    ],
    image: "/Neurologie_Psychotherapie/Psychotherpie1.jpeg",
  },

  // Special Services (Therapieangebote / Besonderes)
  {
    id: "neurofeedback",
    category: "special",
    title: "Neurofeedback (NFB)",
    icon: Brain,
    teaser: "Sanfte und schmerzfreie Therapie zur Messung und Verbesserung der Gehirnaktivität.",
    description: "Neurofeedback ist eine sehr sanfte und schmerzfreie Methode des Biofeedbacks zur Messung und Verbesserung der Gehirnaktivität. Dabei werden über einen Bildschirm Körpersignale und Hirnaktivitäten an den Patienten rückgemeldet. Durch dieses audiovisuelle Feedback lernt das Gehirn, seine Selbstregulierungsfähigkeit zu optimieren und seine Aktivitätsmuster nachhaltig zu verändern.",
    details: [
      "AD(H)S",
      "Epilepsie",
      "Tinnitus",
      "Lern- und Leistungsstörungen",
      "Autismus",
      "Schlaganfall",
      "Tic-Störungen / Tourette",
      "Angststörungen / Depressionen",
      "Migräne / Schlafstörungen",
    ],
    benefits: [
      "Erhöhung der Stress-/Frustrationstoleranz",
      "Verbesserung von Aufmerksamkeit und Konzentration",
      "Erhöhung der Aufnahmefähigkeit",
      "Verbesserung der Schlafsituation",
      "Innere Blockaden identifizieren und aufbrechen",
      "Ggf. Medikamentendosen reduzieren (in Absprache mit Arzt)",
    ],
    faqs: [
      {
        question: "Wie funktioniert das Neurofeedbacktraining?",
        answer: "Für die Messung der Gehirnaktivität werden EEG-Elektroden am Kopf angebracht. Der Computer analysiert die Signale in Echtzeit und gibt ein audiovisuelles Feedback (z.B. in einem Film oder Spiel). Das Gehirn reagiert sofort darauf und lernt durch Belohnung, seine Aktivität zu optimieren."
      },
      {
        question: "Werden die Kosten übernommen?",
        answer: "Ja, Neurofeedback ist eine anerkannte Therapieform und wird im Rahmen einer ergotherapeutischen Behandlung (Rezept) von der Krankenkasse erstattet."
      },
      {
        question: "Welcher Arzt kann verordnen?",
        answer: "Jeder niedergelassene Arzt oder Psychotherapeut mit Kassenzulassung kann Neurofeedback im Rahmen einer ergotherapeutischen Behandlung (meist psychisch-funktionell oder sensomotorisch-perzeptiv) verordnen."
      },
      {
        question: "Gibt es Nebenwirkungen?",
        answer: "Nein, bisher sind keine bekannt. Die Behandlung ist vollkommen schmerzfrei."
      },
      {
        question: "Wie viele Behandlungen sind notwendig?",
        answer: "Normalerweise sind es 20 – 40 Sitzungen. Erste Erfolge können sich bereits nach wenigen Einheiten einstellen."
      },
      {
        question: "Kann Neurofeedback Medikamente ersetzen?",
        answer: "Es ist möglich, dass im Laufe der Behandlungsserie (20-30 Sitzungen) auf eine Medikation nach und nach verzichtet werden kann – immer in Absprache mit dem behandelnden Arzt."
      },
      {
        question: "Ab welchem Alter ist Neurofeedback möglich?",
        answer: "Gängig gilt z.Z. das Vorschulalter als Mindestalter. Ein Höchstalter gibt es nicht, auch ältere Menschen profitieren davon."
      }
    ],
    image: "/Neurofeedback.webp",
  },
  {
    id: "bemer",
    category: "special",
    title: "BEMER Therapie",
    icon: Zap,
    teaser: "Physikalische Gefäßtherapie zur Verbesserung der Mikrozirkulation.",
    description: "Die BEMER Therapie ist eine physikalische Gefäßtherapie zur Verbesserung der Mikrozirkulation. Sie stimuliert die natürliche Pumpbewegung der kleinsten Gefäße und fördert so die Durchblutung, den Nährstoffaustausch und den Abtransport von Stoffwechselprodukten. Dies kann zu mehr Antrieb, höherer Leistungsfähigkeit und schnellerer Heilung beitragen. BEMER ist keine alleinige Heilmethode, aber eine effektive unterstützende Maßnahme bei vielen chronischen Erkrankungen.",
    details: [
      "Allgemeine Schmerzen / Chronische Schmerzen",
      "Durchblutungsstörungen",
      "Entzündungen / Wundheilungsstörungen",
      "Erschöpfung / Burnout",
      "Hypertonie (Bluthochdruck)",
      "Schlafstörungen",
      "Rheuma / Arthrose",
      "Stoffwechselstörungen (Diabetes)",
      "Polyneuropathien",
    ],
    benefits: [
      "Verbesserung der Mikrozirkulation",
      "Unterstützung der Zellfunktionen",
      "Förderung der Selbstheilungskräfte",
      "Mehr Antrieb und Leistungsfähigkeit",
      "Bessere Konzentrationsfähigkeit",
      "Linderung von Schmerzen",
      "Schnellere Heilung von Verletzungen",
    ],
    faqs: [
      {
        question: "Wie wirkt die BEMER Therapie?",
        answer: "BEMER-Geräte senden ein spezielles elektromagnetisches Signal, das die natürliche Pumpbewegung der Kapillaren stimuliert. Dies verbessert die Mikrozirkulation und damit die Versorgung der Zellen mit Sauerstoff."
      },
      {
        question: "Wie lange dauert eine Behandlung?",
        answer: "Die Ganzkörper-Therapie dauert normalerweise 8 Minuten. Lokal-Therapien können zwischen 8 und 20 Minuten variieren."
      },
      {
        question: "Werden die Kosten übernommen?",
        answer: "Nein, die BEMER Therapie ist eine Selbstzahlerleistung (IGeL). Je nach Aufwand liegen die Kosten zwischen 39,00 € und 69,00 €."
      },
      {
        question: "Gibt es Nebenwirkungen?",
        answer: "Nein. Seit 1998 sind keine Nebenwirkungen bekannt. Die Behandlung ist schmerzfrei."
      },
      {
        question: "Kann ich BEMER mit anderen Therapien kombinieren?",
        answer: "Ja, das ist sogar sinnvoll. Durch die durchblutungssteigernde Wirkung können andere Therapien (z.B. Akupunktur, manuelle Therapie) verstärkt werden."
      },
      {
        question: "Wann darf die Therapie nicht angewendet werden?",
        answer: "Bei immunsuppressiver Therapie nach Transplantationen oder bei aktiven medizinischen Implantaten (z.B. Herzschrittmacher, Insulinpumpen) ist die Anwendung ausgeschlossen."
      }
    ],
    image: "/Lösnitz2/BEMER Therapie : Progressive Muskelrelaxation (PMR.webp",
  },
  {
    id: "visualtraining",
    category: "special",
    title: "Visualtraining (VT)",
    icon: Eye,
    teaser: "Individuelles Sehtraining zur Verbesserung der Sehkraft und visuellen Ausdauer.",
    description: "Individuelles, verhaltensorientiertes Sehtraining zur Verbesserung der Sehkraft, der visuellen Ausdauer und damit der persönlichen Leistungsfähigkeit.",
    longDescription: "Sehen ist ein Prozess, der verschiedene Wahrnehmungen verknüpft: Augenmotorik, Fixation, Akkommodation und Visualisation. VT zielt darauf ab, visuelle Defizite durch gezielte Übungen und Wahrnehmungstraining nachhaltig zu beheben.",
    details: [
      "Konzentrationsprobleme (ADS/ADHS)",
      "Lese-Rechtschreib-Schwäche / Leseunlust",
      "Kopfschmerzen / Augenreiben",
      "Verschwommenes oder doppeltes Sehen",
      "Schnelles Ermüden beim Lesen",
      "Schwierigkeiten beim Textverständnis",
      "Häufiges Anecken / Ungeschicklichkeit",
    ],
    benefits: [
      "Verbesserung der visuellen Ausdauer",
      "Steigerung der persönlichen Leistungsfähigkeit",
      "Besseres Textverständnis",
      "Reduktion von Kopfschmerzen und Ermüdung",
    ],
    faqs: [
      {
        question: "Muss eine Voruntersuchung erfolgen?",
        answer: "Ja, unbedingt. Eine Abklärung beim Augenarzt (organisch) und eine umfassende Diagnostik bei einem Optometristen sind notwendig. Der Optometrist erstellt den Trainingsplan."
      },
      {
        question: "Werden die Kosten übernommen?",
        answer: "Nein, VT ist eine Selbstzahlerleistung. Die augenärztliche Voruntersuchung zahlt die Kasse, die optometrische Analyse und das Training selbst in der Regel nicht."
      },
      {
        question: "Wie wird das VT durchgeführt?",
        answer: "Das Training findet in der Praxis (ca. 30 Min.) und zu Hause (täglich einige Minuten) statt. Es kommen individuelle Sehübungen und PC-Anwendungen (z.B. EYEBAB) zum Einsatz."
      },
      {
        question: "Wie lange dauert es, bis sich ein Erfolg einstellt?",
        answer: "Das hängt vom Beschwerdebild und dem Übungsfleiß ab und kann nicht pauschalisiert werden. Eine Erfolgskontrolle erfolgt halbjährlich."
      }
    ],
    image: "/Aue/Visualtraining (VT).webp",
  },
  {
    id: "sturzpraevention",
    category: "special",
    title: "Sturzprävention",
    icon: Shield,
    teaser: "Maßnahmen und Strategien zur Verhinderung von Stürzen, insbesondere bei älteren Menschen.",
    description: "Sturzprävention umfasst Maßnahmen und Strategien, die darauf abzielen, Stürze zu verhindern, insbesondere bei älteren Menschen oder Personen mit erhöhtem Risiko. Ziel ist es, die Sicherheit und Lebensqualität zu erhöhen und Verletzungen zu vermeiden. Wir trainieren gezielt Kraft, Balance und Reaktionsfähigkeit und beraten auch zur Wohnraumanpassung.",
    details: [
      "Ältere Menschen mit erhöhtem Sturzrisiko",
      "Neurologische Erkrankungen (Parkinson, Schlaganfall, MS)",
      "Muskel- und Skeletterkrankungen (Arthrose, Osteoporose)",
      "Gangunsicherheit",
      "Kognitive Beeinträchtigungen",
    ],
    benefits: [
      "Verbesserung von Gleichgewicht und Koordination",
      "Verbesserung der Reaktionsfähigkeit",
      "Stärkung der Muskulatur und Kraft",
      "Bessere Trittfestigkeit",
      "Erhöhung der Mobilität und Selbstständigkeit",
      "Verbesserte Lebensqualität",
    ],
    faqs: [
      {
        question: "Wie funktioniert Sturzprävention?",
        answer: "Dazu gehören körperliche Übungen zur Verbesserung der Balance und Kraft, die Anpassung der Wohnumgebung (Stolperfallen beseitigen) sowie die Schulung in sicherem Gehen und Bewegen."
      }
    ],
    image: "/Sturzprävention.webp",
  },
  {
    id: "pmr",
    category: "special",
    title: "Progressive Muskelrelaxation (PMR)",
    icon: Wind,
    teaser: "Entspannungstechnik zur Reduktion von Stress und Angst.",
    description: "Die Progressive Muskelrelaxation (PMR) nach Jacobson ist eine Entspannungstechnik zur Reduktion von Stress und Angst. Die Methode basiert auf der Idee, dass körperliche Entspannung auch zu psychischer Entspannung führt. Dabei werden verschiedene Muskelgruppen systematisch angespannt und wieder entspannt, um ein besseres Körperbewusstsein zu fördern und nachhaltig Stress abzubauen.",
    details: [
      "Stress und Angststörungen",
      "Depressionen",
      "Schlafstörungen",
      "Chronische Schmerzen",
      "Herz-Kreislauf-Erkrankungen",
      "Verdauungsstörungen",
    ],
    benefits: [
      "Stressabbau und Linderung von Angst",
      "Steigerung des allgemeinen Wohlbefindens",
      "Verbesserung der Schlafqualität",
      "Schmerzlinderung",
      "Senkung des Blutdrucks",
    ],
    faqs: [
      {
        question: "Wie funktioniert PMR?",
        answer: "Muskelgruppen werden in einer bestimmten Reihenfolge bewusst angespannt und entspannt. Dies fördert die Körperwahrnehmung und die Fähigkeit, selbstständig in einen Entspannungszustand zu wechseln."
      },
      {
        question: "Werden die Kosten übernommen?",
        answer: "Im Rahmen einer ergotherapeutischen Behandlung (Rezept) ja. Ohne Rezept kann PMR als Selbstzahlerleistung oder im Rahmen von zertifizierten Gesundheitskursen (ggf. mit Kassenzuschuss) besucht werden."
      },
      {
        question: "Wie lange dauert eine Sitzung?",
        answer: "Eine Sitzung dauert ca. 60 Minuten. Die Übungen sind vollkommen schmerzfrei."
      },
      {
        question: "Ab welchem Alter ist PMR möglich?",
        answer: "Gängig gilt das Grundschulalter als Mindestalter. Ein Höchstalter gibt es nicht."
      }
    ],
    image: "/Lösnitz2/BEMER Therapie : Progressive Muskelrelaxation (PMR.webp",
  },
  {
    id: "linkshaenderberatung",
    category: "special",
    title: "Linkshänderberatung",
    icon: Hand, // Using Hand or Info
    teaser: "Spezifische Beratung für Linkshänder.",
    description: "Unsere Linkshänderberatung bietet spezifische Unterstützung, damit sich Linkshänder in einer rechtshändigen Welt ergonomisch und komfortabel zurechtfinden. Das Angebot umfasst die Analyse der Händigkeit, Empfehlungen für geeignete Hilfsmittel sowie spezielles Schreibtraining zur Verbesserung der Körperhaltung und Vermeidung von Fehlhaltungen.",
    details: [
      "Erkennung der Händigkeit (Testung)",
      "Hilfsmittel und Materialien (Scheren, Stifte)",
      "Schreibtechniken und Schreibtraining",
      "Arbeitsplatzanpassung (Schule/Büro)",
      "Aufklärung für Eltern, Lehrer und Erzieher",
      "Psychologische Unterstützung bei Frustration",
    ],
    faqs: [
      {
        question: "Werden die Kosten übernommen?",
        answer: "Ja, wenn eine ergotherapeutische Verordnung (motorisch-funktionell) vorliegt. Ohne Rezept ist es eine Selbstzahlerleistung (IGeL)."
      },
      {
        question: "Muss die Beratung speziell auf dem Rezept stehen?",
        answer: "Nein, eine normale Verordnung für Ergotherapie (motorisch-funktionell) reicht aus."
      },
      {
        question: "Was kostet eine Beratung ohne Rezept?",
        answer: "Der Satz für eine Beratung/Testung (1h) liegt bei ca. 79,00 €."
      }
    ],
    image: "/Schwarzenberg/Linkshänderberatung.webp",
  },
  {
    id: "therapeutisches-reiten",
    category: "special",
    title: "Therapeutisches Reiten",
    icon: Footprints, // Using Footprints as "Horse" proxy
    teaser: "Momentan sind alle vorhandenen Therapieplätze belegt.",
    description: "Momentan sind leider alle vorhandenen Therapieplätze belegt. Aus personellen Gründen ist z.Z. eine Aufnahme auf die Warteliste nicht möglich. Die Arbeit mit dem Pferd fördert Motorik, Wahrnehmung und psychische Entwicklung ganzheitlich. Leider haben wir aktuell keine Kapazitäten.",
    details: [
      "Ganzheitliche Förderung",
      "Motorik & Wahrnehmung",
      "Psychische Stabilität",
    ],
    alert: true,
    faqs: [
      {
        question: "Gibt es freie Plätze?",
        answer: "Nein, momentan sind alle Plätze belegt und wir können keine neuen Patienten auf die Warteliste aufnehmen. Bitte sehen Sie von Nachfragen ab."
      }
    ],
    image: "/Aue/reiten.webp",
  },
];
