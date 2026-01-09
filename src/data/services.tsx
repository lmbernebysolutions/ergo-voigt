import { LucideIcon } from "lucide-react"
import { HandHeart, Brain, Home, Activity, Heart, Eye, Shield, Wind, Hand, Sparkles, Footprints, Info, Zap } from "lucide-react"
import { ReactNode } from "react"

export interface Service {
  id: string;
  category: "standard" | "special";
  title: string;
  teaser: string;
  description: string | ReactNode;
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
    image: "/Neurologie_Psychotherapie/Neurologie1.jpeg",
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
    image: "/Neurologie_Psychotherapie/Neurologie1.jpeg",
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
      "Epilepsie",
      "Tinnitus",
      "Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung",
      "Lern- und Leistungsstörungen",
      "Autismus",
      "Schlaganfall",
      "Tic-Störungen, Tourette-Syndrom",
      "Angststörungen",
      "Depressionen",
      "Demenz",
      "Migräne",
      "Stimmungsschwankungen",
    ],
    benefits: [
      "Erhöhung der Stresstoleranz/ Frustrationstoleranz",
      "Verbesserung von Aufmerksamkeit und Konzentration",
      "Erhöhung der Aufnahmefähigkeit",
      "Verbesserung der Schlafsituation",
      "Verbesserung der Fähigkeit, zwischen Aufmerksamkeitszuständen besser wechseln zu können",
      "innere Blockaden und Dysbalancen identifizieren und aufbrechen",
      "schneller in eine Entspannungsphase wechseln",
      "ggf. Medikamentendosen reduzieren",
    ],
    faqs: [
      {
        question: "Wie funktioniert das Neurofeedbacktraining?",
        answer: "Für die Messung der Gehirnaktivität werden EEG-Elektroden am Kopf angebracht, die das Messergebnis an einen Computer weiterleiten. Das EEG wird währenddessen in Echtzeit analysiert, sodass der Computer aus den EEG-Signalen ein audiovisuelles Feedback errechnen kann. Dieses ist wiederum an ein computergesteuertes Belohnungsprinzip gekoppelt und wird auf einem zweiten Bildschirm angezeigt. Das Gehirn beginnt sofort auf die Feedbacksignale zu reagieren und die Gehirnaktivität verändert sich. Die Veränderungen werden von den EEG-Elektroden aufgezeichnet und über die Signalverarbeitung wieder zurückgemeldet. So entwickelt sich ein permanenter Kreislauf, an den sich das Gehirn ständig neu anpassen muss. Durch dieses Training lernt das Gehirn, seine Selbstregulierungsfähigkeit zu optimieren. Dabei verbessern sich die Symptome der Fehlregulierungen und Erfolgserlebnisse entstehen, die das Gehirn motivieren, neu erlernte Selbstregulierungsprozesse immer schneller und nachhaltiger zu erreichen sowie diese auch in den Alltag zu transferieren."
      },
      {
        question: "Werden die Kosten für die Behandlung von den gesetzlichen und privaten Krankenkassen übernommen?",
        answer: "Ja, das Neurofeedbacktraining ist eine anerkannte Therapieform. Sie wird im Rahmen einer ergotherapeutischen Behandlung (Rezept) von der Krankenkasse erstattet."
      },
      {
        question: "Welcher Arzt kann Neurofeedback verordnen?",
        answer: "Grundsätzlich kann jeder niedergelassene Arzt oder Psychotherapeut mit einer Kassenzulassung Neurofeedback im Rahmen einer ergotherapeutischen Behandlung verordnen."
      },
      {
        question: "Muss Neurofeedback speziell auf dem Rezept vermerkt werden?",
        answer: "Nein, muss es nicht. Die Verordnung (Rezept) kann mit den gängigen, dem Arzt vertrauten Heilmitteln (psychisch-funktionell oder sensomotorisch-perzeptiv) ausgestellt werden."
      },
      {
        question: "Kann ich Neurofeedback auch ohne Verordnung (Rezept) bekommen?",
        answer: "Ja, das Neurofeedback ist kein eigenständiges Heilmittel nach den momentan vorherrschenden Heilmittel-Richtlinien der gesetzlichen Krankenkassen. Sie gilt als individuelle Gesundheitsleistung (IGeL)."
      },
      {
        question: "Wieviel kostet eine Neurofeedbackbehandlung, wenn ich sie ohne Rezept in Anspruch nehmen möchte?",
        answer: "Der momentane Satz für eine Neurofeedbackbehandlung (1h) liegt bei 79,00 €."
      },
      {
        question: "Wer darf Neurofeedbacksitzungen durchführen?",
        answer: "Personen mit medizinischem Hintergrund, die eine Ausbildung zum zertifizierten Neurofeedbacktherapeuten absolviert haben, dürfen diese Behandlung durchführen. Um die Kosten von der Krankenkasse jedoch erstattet zu bekommen, muss die Person eine ergotherapeutische Ausbildung mit Zusatzqualifikation abgeschlossen haben. Nur diese Personen können im therapeutischen Bereich mit Neurofeedback arbeiten."
      },
      {
        question: "Wie lange dauert eine Sitzung?",
        answer: "Die Sitzungen dauern mit allen Vor- und Nachbereitungen ca. 45-60 Minuten."
      },
      {
        question: "Sind die Behandlungen schmerzhaft oder unangenehm?",
        answer: "Die Behandlungen sind vollkommen schmerzfrei."
      },
      {
        question: "Gibt es Nebenwirkungen?",
        answer: "Nein, bisher sind keine bekannt."
      },
      {
        question: "Wie fühlt man sich nach einer Neurofeedbacksitzung?",
        answer: "Viele Patienten berichten bereits nach wenigen Sitzungen von einer Verbesserung der Stimmung und einem Wohlgefühl. Sie fühlen sich im Kopf „aufgeräumter“."
      },
      {
        question: "Wie viele Behandlungen sind notwendig?",
        answer: "Normalerweise sind es 20 – 40 Sitzungen. Für die Beendigung der Therapie ist eine Verbesserung der vorhandenen Symptome im Alltag ausschlaggebend."
      },
      {
        question: "Wie lange dauert es, bis Neurofeedback wirkt?",
        answer: "Erste Erfolge können sich bereits nach den ersten Trainingseinheiten einstellen."
      },
      {
        question: "Kann Neurofeedback Medikamente (z. B. Ritalin®) ersetzen?",
        answer: "Es ist durchaus möglich, dass im Laufe der Behandlungsserie (20-30 Sitzungen) auf eine Medikation nach und nach verzichtet werden kann (natürlich immer in Absprache mit dem behandelnden Arzt)."
      },
      {
        question: "Wie lange hält die Wirkung einer Neurofeedbacktherapie bzw. eines Neurofeedbacktrainings an?",
        answer: "Neurofeedback gleicht einem langfristigen Lernprozess, ähnlich wie beim Schwimmen oder Fahrradfahren lernen. Das Gehirn verändert seine Aktivitätenmuster nachhaltig. Studien zeigten diese Effekte auch noch nach 6 Monaten."
      },
      {
        question: "Ab welchem Alter ist Neurofeedback möglich?",
        answer: "Eine strikte Altersgrenze wird nicht gezogen, da das Training keiner bewussten Anforderung unterliegt. Gängig gilt z.Z. das Vorschulalter als Mindestalter. Ein Höchstalter gibt es nicht, besonders älteren Menschen mit nachlassenden geistigen Fähigkeiten kann Neurofeedback helfen."
      },
      {
        question: "Ist es ratsam, als Erwachsener ein Neurofeedbacktraining zu beginnen?",
        answer: "Gerade im Erwachsenenalter kann es sinnvoll sein, seine Konzentrationsleistung zu verbessern. Neuste Untersuchungen haben eine deutliche Verbesserung der Merkfähigkeit nach einem Neurofeedbacktraining nachgewiesen."
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
      "Allgemeine Schmerzen",
      "Burnout-Syndrom",
      "Chronisches Erschöpfungssyndrom (CFS – Chronic-Fatique-Syndrom)",
      "Durchblutungsstörungen (Raynaud-Syndrom)",
      "Durchblutungsstörungen (Ulcus cruris „Offenes Bein“)",
      "Entzündungen",
      "Hautkrankheiten",
      "COVID Long/ Post",
      "Kreislaufstörungen",
      "Psychovegetative Störungen",
      "Rheuma",
      "Stoffwechselstörungen (z.B. Diabetes mellitus)",
      "Wundheilungsstörungen/ Narbenbildung",
      "Muskelverspannung",
      "Gelenkschmerzen",
      "Polyneuropathien (PNP)",
    ],
    benefits: [
      "Verbesserung der Mikrozirkulation: Durch die gezielte Stimulation der Gefäßwände werden die Kapillaren erweitert und verengt, um eine effizientere Versorgung der Zellen mit Nährstoffen und Sauerstoff zu ermöglichen.",
      "Unterstützung der Zellfunktionen: Eine optimierte Mikrozirkulation trägt dazu bei, dass die Zellen ihre Funktionen besser ausführen können, was sich positiv auf verschiedene gesundheitliche Aspekte auswirken kann.",
      "Förderung der Selbstheilungskräfte: Indem die Durchblutung verbessert wird, werden auch die Selbstheilungskräfte des Körpers unterstützt, was zu einer schnelleren Regeneration und Genesung beitragen kann.",
      "Mehr Antrieb und höhere Leistungsfähigkeit, Wohlbefinden",
      "Bessere Gemütsverfassung",
      "Bessere Belastbarkeit, erhöhte sportliche Leistung",
      "Bessere Konzentrationsfähigkeit",
      "Höhere Muskelkraft",
      "Weniger Infekte",
      "Linderung von Schmerzen, geringerer Bedarf von Schmerzmitteln",
      "schnellere Heilung von Verletzungen und Erkrankungen aller Art",
    ],
    faqs: [
      {
        question: "Wie wirkt die BEMER Therapie?",
        answer: "Die BEMER-Geräte (Matte/Applikator) arbeiten mit einem speziellen elektromagnetischen Signal, das auf den Körper wirkt und die natürliche Pumpbewegung der Kapillaren stimuliert. Diese magnetischen Impulse werden über spezielle Applikatoren, die auf der Matte platziert sind, an den Körper weitergegeben. Durch diese gezielte Stimulation wird die Mikrozirkulation in den kleinsten Blutgefäßen angeregt und verbessert. Dadurch wird die Durchblutung gefördert und die Versorgung der Zellen mit Sauerstoff und Nährstoffen optimiert. Durch die gezielte Anregung der Zellfunktionen werden die körpereigenen Regulationsmechanismen/ Selbstheilungskräfte aktiviert und gestärkt."
      },
      {
        question: "Wie lange dauert eine BEMER Behandlung?",
        answer: "Die Dauer der Ganzkörper-Therapie beträgt normalerweise 8 Minuten. Die Lokal-Therapien können zwischen 8 und 20 Minuten variieren (je nach Beschwerden und Behandlungsart). Optimalerweise wird die BEMER Therapie mit anderen regulationsmedizinischen Therapieformen wie Akupunktur o.ä. angewandt."
      },
      {
        question: "Kann ich BEMER mit anderen Therapien kombinieren?",
        answer: "Es ist sogar sinnvoll, die BEMER Therapie mit anderen regulationsmedizinischen Therapien zu kombinieren. Durch die durchblutungssteigernde Wirkung der BEMER Therapie können andere Therapiemethoden in ihrer Wirkung verstärkt werden. So können Akupunktur, Neuraltherapie, orthomolekulare Infusionen und manuelle Therapien bessere Therapieeffekte erzielen, wenn man diese Therapien auf einer BEMER Therapiematte durchführt."
      },
      {
        question: "Werden die Kosten für die Behandlung von den gesetzlichen und privaten Krankenkassen übernommen?",
        answer: "Nein. Die Behandlung ist ausschließlich eine Selbstzahlerleistung. Im Rahmen einer ergotherapeutischen Behandlung kann, je nach Beschwerdebild, die BEMER Therapie zum Einsatz kommen."
      },
      {
        question: "Wieviel kostet eine BEMER Behandlung, wenn ich sie ohne Rezept in Anspruch nehmen möchte?",
        answer: "Je nach Zeitaufwand und Erkrankung variiert der Betrag zwischen 39,00 € und 69,00 €."
      },
      {
        question: "Sind die Behandlungen schmerzhaft oder unangenehm?",
        answer: "Die Behandlungen sind vollkommen schmerzfrei."
      },
      {
        question: "Gibt es Nebenwirkungen?",
        answer: "Nein. Für die BEMER Therapiegeräte besteht eine gesetzliche Meldepflicht von unerwünschten Ereignissen oder besonderen Vorkommnissen. Seit 1998 wurden weltweit keine Nebenwirkungen oder besondere Vorkommnisse mitgeteilt bzw. festgestellt."
      },
      {
        question: "In welchen Fällen darf die Therapie nicht angewendet werden?",
        answer: "Bei Patienten die eine immunsuppressive Therapie im Zusammenhang mit einer Transplantation, zum Beispiel nach Allogen-Zelltransplantation oder Knochenmark- oder Stammzellentransplantation durchgeführt haben. Aktive medizinische Implantate, die zu einer Stimulation führen (z. B. Herzschrittmacher, Defibrillatoren, Gehirnstimulatoren, Muskelstimulatoren) oder zur Abgabe von Medikamenten gedacht sind (Medikamentenpumpen, wie zum Beispiel: Insulinpumpen) schließen eine Anwendung der BEMER Therapie aus. Im Zweifel fragen Sie immer Ihren behandelnden Arzt!"
      },
      {
        question: "Kann es mit der Physikalischen Gefäßtherapie zu Wechselwirkungen mit anderen Medikamenten oder Therapien kommen?",
        answer: "Unter bestimmten Umständen und bei täglicher Anwendung kann es zu Wechselwirkungen kommen. Daher empfehlen wir, Beschwerden, Symptome oder Erkrankungen vor der Anwendung der BEMER Geräte mit einem Arzt/ Therapeuten abzuklären. Von sonstigen Gerinnungshemmern wie ASS oder nichtsteroiden Arzneimitteln oder sonstigen Blutdrucksenkern ist keine Wechselwirkung mit der BEMER Anwendung bekannt."
      },
      {
        question: "Wie fühlt man sich nach einer BEMER Behandlung?",
        answer: "Viele Patienten berichten während der Behandlung von einem leichten Kribbeln oder einem „schwebenden“ Gefühl. Einige Zeit nach der Behandlung kommt es im Optimalfall zur Verringerung der Beschwerden."
      },
      {
        question: "Wie oft darf man bemern?",
        answer: "Optimal ist eine zweimalige tägliche Anwendung, dabei beginnt man immer mit niedriger Intensität, um eine zu starke Erstreaktion zu vermeiden! Bei empfindlichen Menschen genügen anfangs oft weinigere und kürzere Anwendungen, einmal täglich oder einmal alle drei bis vier Tage."
      },
      {
        question: "Wie lange ist die Anwendungsdauer?",
        answer: "Sie können die Bemer-Therapie langfristig anwenden. Im Laufe der Zeit sind die oft anfangs sehr deutlichen Empfindungen während und nach der Anwendung geringer, da sie nach und nach auf ein besseres gesundheitliches Niveau kommen. Eine Höchstmenge oder Überdosierung ist nicht gegeben."
      },
      {
        question: "Wie lange dauert es, bis die Bemer Therapie wirkt?",
        answer: "Ab der ersten Behandlung können sich bereits Verbesserungen einstellen, da es sofort zu einer verbesserten Durchblutung kommt."
      },
      {
        question: "Wie lange hält der Therapieerfolg an?",
        answer: "Die Physikalische Gefäßtherapie ist zur langfristigen und regelmäßigen Anwendung konzipiert. Die positiven Wirkungen der BEMER Therapie bleiben so über einen längeren Zeitraum erhalten."
      },
      {
        question: "Wer darf die BEMER Therapie durchführen?",
        answer: "BEMER Produkte sind medizinische Geräte der FDA-Klasse 2 und können von jeder Person nach einer Schulung angewendet werden."
      },
      {
        question: "Gibt es wissenschaftliche Studien über den BEMER?",
        answer: "Ja. Über die Jahre wurde die Physikalische Gefäßtherapie anhand von diversen Fragestellungen wissenschaftlich untersucht, und diese Ergebnisse wurden publiziert. Zum Beispiel die wissenschaftliche Datenbank „Pubmed“ (https://pubmed.ncbi.nlm.nih.gov/) enthält mehrere wissenschaftliche Studien zu unterschiedlichen Anwendungsgebieten."
      }
    ],
    image: "/Lösnitz2/BEMER Therapie.webp",
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
      "häufiges Anecken/ Ungeschicklichkeit",
      "Schwierigkeiten, die Konzentration zu halten (ADS/ ADHS)",
      "Kopfschmerzen",
      "den Kopf häufig schief haltend",
      "ein kurzer Arbeits- / bzw. Schreibabstand zwischen Auge und Heft/ Arbeit",
      "schnelles Ermüden beim Lesen/ Leseunlust",
      "Schwierigkeiten beim Textverständnis",
      "Schwierigkeiten, das Tafelbild zu erfassen",
      "Buchstaben dazu erfinden oder verwechseln, auch bei bekannten Wörtern",
      "Augenreiben/ Augenschmerzen",
      "unregelmäßiges Schriftbild",
      "Schreiben auf der Linie fällt schwer",
      "doppelt Sehen/ verschwommenes Sehen",
    ],
    benefits: [
      "Verbesserung von Aufmerksamkeit und Konzentration",
      "Erhöhung der Aufnahmefähigkeit",
      "verbesserte Lese- und Schreibfähigkeiten durch effizienteres Auge-Hand-Zusammenspiel und schnelleres Erfassen von Texten",
      "weniger starke Augenermüdung und Kopfschmerzen, besonders nach langen Phasen visueller Anforderungen",
      "verbesserte sportliche Leistung durch präzisere Auge-Hand-Koordination und bessere Tiefenwahrnehmung",
      "gestärktes Vertrauen in die eigene visuelle Wahrnehmung",
      "Reduzierung oder Beseitigung von Doppelbildern",
    ],
    faqs: [
      {
        question: "Wie funktioniert das VT?",
        answer: "Anders als bei herkömmlichen Sehübungen zielt Visualtraining nicht nur darauf ab, die Augenmuskulatur zu trainieren. Diese ist in der Regel bereits leistungsfähig genug. Es geht vielmehr darum, gezielte Maßnahmen gegen spezifische visuelle Defizite zu ergreifen. Visualtraining wird individuell abgestimmt, ein aufbauender Trainingsplan durch einen Optometristen erstellt und unter der Anleitung eines Sehtrainers durchgeführt. Dieses Training ist nicht mit allgemeinen Sehübungen zu verwechseln, die manchmal in der Öffentlichkeit beschrieben werden."
      },
      {
        question: "Muss eine Voruntersuchung durch einen Augenarzt und einen Optometristen vor der Behandlung erfolgen?",
        answer: "Unbedingt. Eine Abklärung, ob evtl. krankhafte Veränderungen am Auge vorliegen, ist vor einem VT notwendig. Ebenso eine Vorstellung bei einem Optometristen. Dieser führt eine umfassende Diagnostik durch und erstellt den für uns bindenden Trainingsplan."
      },
      {
        question: "Werden die Kosten für diese Untersuchungen von den gesetzlichen und privaten Krankenkassen übernommen?",
        answer: "Die Untersuchung durch einen Augenarzt (organische Abklärung) wird von den Kassen getragen. Die Untersuchung bei einem Optometristen (Sehanalyse, Funktionsprüfung, Binokularprüfung, Beurteilung des vorderen und hinteren Augenabschnitts) nicht. Die Untersuchung durch einen Optometristen ist sehr umfangreich und kann zwischen 60 und 90 min. dauern."
      },
      {
        question: "Werden die Kosten für diese VT von den gesetzlichen und privaten Krankenkassen übernommen?",
        answer: "Nein, VT ist grundsätzlich eine Selbstzahlerleistung. Der Arzt kann aber, bei vorliegender Diagnose einer Wahrnehmungsverarbeitungsstörung eine Verodnung ausstellen. Die augenärztliche Voruntersuchung zahlt die Kasse, die optometrische Analyse und das Training selbst in der Regel nicht."
      },
      {
        question: "Wieviel kostet ein VT, wenn ich es ohne Rezept in Anspruch nehmen möchte?",
        answer: "Der momentane Satz für eine VT (30 min.) liegt bei 49,00 €."
      },
      {
        question: "Wie wird das VT durchgeführt?",
        answer: "In einer ruhigen und entspannten Umgebung wird das Training durchgeführt. Dabei kommen verschiedene, individuelle Sehübungen, Wahrnehmungsübungen und PC Anwendungen wie das EYBAB zum Einsatz. EYEBAB nutzt ein spielbasiertes Lernkonzept, das durch abwechslungsreiche Aufgaben und interaktive Herausforderungen motiviert und den Spaß am Training fördert. Das VT wird sowohl in der Praxis als auch zu Hause durchgeführt (Hausaufgaben)."
      },
      {
        question: "Wer darf VT durchführen?",
        answer: "Personen mit medizinischem Hintergrund, die eine Zusatzqualifizierung bei einem Optometristen absolviert haben."
      },
      {
        question: "Wie lange dauert ein VT in der Praxis?",
        answer: "Die Sitzungen dauern mit allen Vor- und Nachbereitungen ca. 30 min."
      },
      {
        question: "Wie häufig muss ein VT durchgeführt werden?",
        answer: "In der Praxis werden wöchentlich, aber auch 14-tägig bzw. alle 3 Wochen Termine angeboten. Zu diesen Terminen werden die Übungen angeleitet und kontrolliert. Das häusliche Training sollte bestenfalls täglich (einige Minuten) erfolgen. Ein individueller Trainingsplan wird dafür vom Optometristen erstellt. Dieser legt die Reihenfolge der Übungen, was trainiert werden soll, mit welchen Mitteln dies durchgeführt werden soll sowie die Dauer der Übungen fest."
      },
      {
        question: "Sind die Behandlungen schmerzhaft oder unangenehm?",
        answer: "Die Behandlungen sind vollkommen schmerzfrei."
      },
      {
        question: "Gibt es Nebenwirkungen?",
        answer: "Nein, bisher sind keine bekannt."
      },
      {
        question: "Wie viele VT Sitzungen sind notwendig?",
        answer: "Dies hängt je nach Beschwerdebild und dem „Übungsfleiß“ der Person ab. Eine Kontrolle der Erfolge des VT wird halbjährlich bzw. ganzjährig vom Optometristen durchgeführt. Die Termine in der Praxis hängen ebenfalls vom Beschwerdebild, dem „Übungsfleiß“ und der Anzahl der Übungen ab."
      },
      {
        question: "Ab welchem Alter ist ein VT möglich?",
        answer: "Eine strikte Altersgrenze wird nicht gezogen. Gängig gilt z.Z. das Vorschulalter als Mindestalter. Ein Höchstalter gibt es nicht, da auch ältere Menschen mit nachlassenden visuellen Fähigkeiten von dem VT profitieren können."
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
      "Ältere Menschen, da sie ein höheres Risiko für Stürze haben",
      "Neurologische Erkrankungen, wie Parkinson, Schlaganfall oder Multiple Sklerose",
      "Kardiovaskuläre Erkrankungen wie Herzprobleme oder Blutdruckschwankungen",
      "Muskel- und Skeletterkrankungen, wie Arthritis oder Osteoporose können die Mobilität einschränken und das Risiko von Stürzen erhöhen",
      "Sehstörungen: Probleme mit dem Sehvermögen, wie Grauer Star oder Glaukom, können die Wahrnehmung der Umgebung beeinträchtigen",
      "Medikamenteneinnahme: Bestimmte Medikamente können Schwindel oder Müdigkeit verursachen, was das Sturzrisiko erhöht",
      "Kognitive Beeinträchtigungen wie Demenz oder andere kognitive Störungen können das Urteilsvermögen und die Reaktionsfähigkeit beeinträchtigen.",
    ],
    benefits: [
      "Verbesserung von Gleichgewicht und Koordination",
      "Verbesserung der Reaktionsfähigkeit",
      "Stärkung der Muskulatur – dadurch Steigerung der Kraft",
      "bessere Trittfestigkeit",
      "Erhöhung der Mobilität",
      "höherer Selbstständigkeit",
      "verbesserte Lebensqualität",
    ],
    faqs: [
      {
        question: "Wie funktioniert Sturzprävention?",
        answer: "Dazu gehören körperliche Übungen zur Verbesserung der Balance und Kraft, die Anpassung der Wohnumgebung, um Stolperfallen zu beseitigen, sowie die Schulung in sicherem Gehen und Bewegen"
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
      "Stress abbauen und die Symptome von Angst lindern",
      "allgemeines Wohlbefinden steigern",
      "Schlafqualität verbessern",
      "Schmerzlinderung",
      "Blutdruck senken und das Herz-Kreislauf-System entlasten",
    ],
    faqs: [
      {
        question: "Wie funktioniert das PMR?",
        answer: "Bei der progressiven Muskelrelaxation werden verschiedene Muskelgruppen systematisch angespannt und anschließend entspannt. Dies geschieht in der Regel in einer bestimmten Reihenfolge. Durch das bewusste Anspannen und Entspannen der Muskeln wird ein besseres Körperbewusstsein gefördert und die Fähigkeit zur Entspannung verbessert."
      },
      {
        question: "Werden die Kosten für eine PMR von den gesetzlichen und privaten Krankenkassen übernommen?",
        answer: "Ja und nein. Eine PMR kann im Rahmen einer ergotherapeutischen Behandlung (Rezept) zum Einsatz kommen. Dies wird dann von der Krankenkasse übernommen. Falls keine ergotherapeutische Verordnung vorliegt, kann man auch im Rahmen von unseren zertifizierten Gesundheitskursen teilnehmen bzw. dies auch als Einzelsitzung in unserer Einrichtung wahrnehmen. Bitte fragen Sie bei Ihrer Krankenkasse nach, welche Kursangebote sie mit Gutscheinen unterstützt."
      },
      {
        question: "Wieviel kostet eine PMR, wenn ich es ohne Rezept in Anspruch nehmen möchte?",
        answer: "Eine private Einzelsitzung (60 min.) kostet 79,00 €. Im Rahmen eines Kursangebotes richtet sich der Betrag nach der Anzahl der Kursteilnehmer. Fragen Sie gern in unserer Einrichtung nach."
      },
      {
        question: "Wie lange dauert eine PMR?",
        answer: "Die Sitzungen dauern mit allen Vor- und Nachbereitungen ca. 60 min."
      },
      {
        question: "Ist die Durchführung einer PMR schmerzhaft oder unangenehm?",
        answer: "Die Übungen sind vollkommen schmerzfrei."
      },
      {
        question: "Gibt es Nebenwirkungen?",
        answer: "Nein, bisher sind keine bekannt."
      },
      {
        question: "Ab welchem Alter kann die PMR durchgeführt werden?",
        answer: "Eine strikte Altersgrenze wird nicht gezogen. Gängig gilt z.Z. das Grundschulalter als Mindestalter, wobei es für Kinder spezifischere Entspannungsmethoden gibt. Ein Höchstalter gibt es nicht."
      }
    ],
    image: "/Lösnitz2/BEMER Therapie.webp",
  },
  {
    id: "linkshaenderberatung",
    category: "special",
    title: "Linkshänderberatung",
    icon: Hand, // Using Hand or Info
    teaser: "Spezifische Beratung für Linkshänder.",
    description: "Unsere Linkshänderberatung bietet spezifische Unterstützung, damit sich Linkshänder in einer rechtshändigen Welt ergonomisch und komfortabel zurechtfinden. Das Angebot umfasst die Analyse der Händigkeit, Empfehlungen für geeignete Hilfsmittel sowie spezielles Schreibtraining zur Verbesserung der Körperhaltung und Vermeidung von Fehlhaltungen.",
    details: [
      "Erkennung der Händigkeit: Die Beratung beginnt mit einer Analyse bzw. Testungen der Händigkeit.",
      "Hilfsmittel und Materialien: Es werden geeignete Schreibutensilien, Scheren, Computerzubehör und andere Hilfsmittel empfohlen, die speziell für Linkshänder entwickelt wurden, um die Nutzung zu erleichtern.",
      "Schreibtechniken: Linkshänder haben oft spezielle Herausforderungen beim Schreiben. Die Beratung umfasst Techniken und Tipps zur Verbesserung der Schreibhaltung bzw. ein Schreibtraining.",
      "Anpassung der Umgebung: Empfehlungen zur Anpassung des Arbeitsplatzes oder des Schreibtischs, um eine ergonomische und komfortable Nutzung zu gewährleisten.",
      "Aufklärung: Informationen über die Unterschiede zwischen Links- und Rechtshändern, um Missverständnisse zu vermeiden und das Bewusstsein für die Bedürfnisse von Linkshändern zu schärfen.",
      "Unterstützung in der Schule: Beratung für Lehrer und Erzieher, um eine inklusive Lernumgebung zu schaffen, die den Bedürfnissen von Linkshändern gerecht wird.",
      "Psychologische Unterstützung: In einigen Fällen kann auch eine psychologische Beratung sinnvoll sein, um mit möglichen Frustrationen oder Herausforderungen umzugehen, die Linkshänder im Alltag erleben.",
    ],
    faqs: [
      {
        question: "Werden die Kosten für die Beratung von den gesetzlichen und privaten Krankenkassen übernommen?",
        answer: "Ja und nein. Die Beratung kann im Rahmen einer ergotherapeutischen Behandlung von der Krankenkasse erstattet werden. Dafür muss ein Arzt eine Verordnung für Ergotherapie ausstellen."
      },
      {
        question: "Welcher Arzt kann verordnen?",
        answer: "Grundsätzlich kann jeder niedergelassene Arzt mit einer Kassenzulassung eine motorisch-funktionelle Behandlung verordnen."
      },
      {
        question: "Muss die Beratung speziell auf dem Rezept vermerkt werden?",
        answer: "Nein, muss es nicht."
      },
      {
        question: "Kann ich eine Linkshänderberatung auch ohne Verordnung (Rezept) bekommen?",
        answer: "Ja, eine Linkshänderberatung ist kein eigenständiges Heilmittel nach den momentan vorherrschenden Heilmittel-Richtlinien der gesetzlichen Krankenkassen. Sie gilt als individuelle Gesundheitsleistung (IGeL)."
      },
      {
        question: "Wieviel kostet eine Beratung, wenn ich sie ohne Rezept in Anspruch nehmen möchte?",
        answer: "Der momentane Satz für eine Beratung/Testung (1h) liegt bei 79,00 €."
      }
    ],
    image: "/Schwarzenberg/Linkshänderberatung.webp",
  },
  {
    id: "therapeutisches-reiten",
    category: "special",
    title: "Therapeutisches Reiten",
    icon: Footprints, // Using Footprints as "Horse" proxy
    teaser: "Momentan sind leider alle vorhandenen Therapieplätze belegt.",
    description: (
      <>
        <strong>Momentan sind leider alle vorhandenen Therapieplätze belegt.</strong> Aus personellen Gründen ist z.Z. eine Aufnahme auf die Warteliste nicht möglich. Die Arbeit mit dem Pferd fördert Motorik, Wahrnehmung und psychische Entwicklung ganzheitlich. Leider haben wir aktuell keine Kapazitäten.
      </>
    ),
    details: [], // Empty details to hide the section if needed or handled in UI
    benefits: [], // Empty benefits
    alert: true,
    faqs: [], // No FAQs as requested
    image: "/Aue/Therapeutisches Reiten.webp",
  },
];
