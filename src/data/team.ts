export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string; // Path to image (avatar)
  qualifications: string[];
  imageObjectPosition?: string;
  scale?: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ak-voigt",
    name: "Anne-Karen Voigt",
    role: "Praxisinhaberin & Ergotherapeutin",
    image: "/team/01 Ergo-Team.jpg",
    qualifications: [
      "Ergotherapeutin und Praxisinhaberin seit 1999",
      "Neurofeedback/ EEG-Biofeedback Therapeutin",
      "Sensorische Integrationstherapeutin nach J.Ayres",
      "Affolter-Therapie",
      "Alpha-Theta und Synchronie-Training",
      "Reflexintegration",
      "Diagnostik, Therapie und Beratung bei umschriebenen Entwicklungsstörungen",
      "IntraActPlus Konzept (Lern- und Leistungsstörungen)",
      "AD(H)S Beratung bei Kindern und Jugendlichen",
      "Auditive Wahrnehmungsverarbeitung (AUDIVA)",
      "Linkshänderberatung und Testung nach B. Sattler",
      "Visualtraining",
      "Progressive Muskelrelaxation nach Jacobson",
      "Handrehabilitation",
      "Neuropsychologisches Hirnleistungstraining",
      "Burnout/Depression/Neurose und Angststörung",
      "Validation nach Naomi Feil"
    ],
  },
  {
    id: "amelie-voigt",
    name: "Amelie Voigt",
    role: "Ergotherapeutin",
    image: "/team/15 Amelie Voigt.png",
    scale: 1.1,
    qualifications: [
      "Staatlich anerkannte Ergotherapeutin"
    ],
  },
  {
    id: "c-wagner",
    name: "Claudia Wagner",
    role: "Ergotherapeutin",
    image: "/team/02 Claudia Wagner.jpg",
    qualifications: [
      "Handrehabilitation",
      "Sensorische Integrationstherapeutin nach J.Ayres",
      "Diagnostik, Therapie und Beratung bei AD(H)S",
      "THOP-Programm (Verhaltensstörungen)",
      "Entwicklungsstörungen im Vorschulalter",
      "IntraActPlus Konzept",
      "Reflexintegration",
      "Visualtraining",
      "Linkshänderberatung und Testung nach B. Sattler",
      "Manuelle Reflextherapie nach Dr. Terrier",
      "Neurophysiologische Behandlungsverfahren bei Hemiplegie",
      "PNF in der Ergotherapie",
      "Neuropsychologisches Hirnleistungstraining",
      "Burnout/Depression/Neurose und Angststörung"
    ],
  },
  {
    id: "j-lenk",
    name: "Jessica Lenk",
    role: "Ergotherapeutin",
    image: "/team/03 Jessica Lenk.jpg",
    qualifications: [
      "In Ausbildung zur Schmerzspezialistin nach Liebscher und Bracht",
      "Handrehabilitation",
      "Arbeiten nach dem Bobath-Konzept",
      "Reflexintegration",
      "Visualtraining",
      "Neuropsychologisches Hirnleistungstraining"
    ],
  },
  {
    id: "m-koehler",
    name: "Madeleine Köhler",
    role: "Ergotherapeutin",
    image: "/team/04 Madeleiene Köhler.jpg",
    qualifications: [
      "Neurofeedback/ EEG-Biofeedback Therapeutin - speziell bei AD(H)S",
      "Auditive Wahrnehmungsverarbeitung (Warnke Verfahren)",
      "Reflexintegration",
      "Visualtraining"
    ],
  },
  {
    id: "j-weickert",
    name: "Josefine Weickert",
    role: "Ergotherapeutin",
    image: "/team/05 Josefine Weickert.jpg",
    qualifications: [
      "DOSB-Trainerin C Leistungssport/Pferdesport",
      "Therapeutisches Reiten",
      "Multimodale Therapie bei ADHS",
      "Entspannungstherapie bei Kindern"
    ],
  },
  {
    id: "d-zill",
    name: "Doreen Zill",
    role: "Ergotherapeutin",
    image: "",
    qualifications: [
      "Dozentin an der Fresenius Schule Zwickau",
      "Reflexintegration",
      "Hörverarbeitung nach dem Warnke Verfahren",
      "Triggerpunkttherapie (Schwerpunkt obere Extremität)",
      "Visualtraining",
      "Diagnostik, Therapie und Beratung bei AD(H)S"
    ],
  },
  {
    id: "k-stuebner",
    name: "Katja Stübner",
    role: "Ergotherapeutin",
    image: "/team/07 Katja Stübner.jpg",
    qualifications: [
      "Visualtraining"
    ],
  },
  {
    id: "a-rudolph",
    name: "Antje Rudolph",
    role: "Ergotherapeutin",
    image: "/team/08 Antje Rudolph.jpg",
    qualifications: [
      "Fachtherapeut Schule (Teilleistungsstörungen, Grafomotorik, Lernstörungen)",
      "Sensorische Integrationstherapeutin nach J.Ayres",
      "Neurofeedback/ EEG-Biofeedback Therapeutin",
      "Verhaltenstherapeutische Methoden bei „Problemkindern“",
      "Lern- und Leistungsstörungen",
      "Reflexintegration",
      "Visualtraining",
      "Neuropsychologisches Hirnleistungstraining",
      "Anbahnen von Willkürmotorik nach Bobath"
    ],
  },
  {
    id: "a-schuppert",
    name: "Anna Schuppert",
    role: "Ergotherapeutin (in Elternzeit)",
    image: "", // Placeholder
    qualifications: [
      "Reittherapie",
      "Behandlung von AD(H)S nach dem ALERT Programm",
      "Handtherapie",
      "Kinesio- und Leuko-Taping",
      "Verarbeitungsstörung der Wahrnehmungsbereich bei Kindern",
      "Klassische Massagen",
      "Musiktherapie"
    ],
  },
  {
    id: "m-weiland",
    name: "Melanie Weiland",
    role: "Ergotherapeutin",
    image: "/team/11 Melanie Weiland.jpg",
    qualifications: [
      "Dozentin an der Fresenius Schule Zwickau",
      "Handrehabilitation – in Ausbildung zur zertifizierten Handtherapeutin (AFH)",
      "Reflexintegration",
      "Visualtraining",
      "Lern- und Leistungsstörungen"
    ],
  },
  {
    id: "d-tautenhahn",
    name: "Doreen Tautenhahn",
    role: "Ergotherapeutin",
    image: "/team/12 Doreen Tautenhahn.jpg",
    qualifications: [
      "Neurofeedback/ EEG-Biofeedback Therapeutin",
      "Aufmerksamkeits-/ Konzentrations- und Verhaltenstrainerin (Attentioner und Marburger)",
      "Verhaltenstherapeutische Methoden bei „Problemkindern“",
      "Kommunikationstraining",
      "Bewegungsförderung für Kinder nach dem „KinderFit“ Konzept (ZPP zertifiziert)",
      "Reflexintegration",
      "Lern- und Leistungsstörungen (IntraActPlus Konzept)",
      "Alpha-Theta und Synchronie-Training",
      "Visualtraining/ Winkelfehlsichtigkeit",
      "Seminarleiterin für Progressive Muskelrelaxation (ZPP zertifiziert)",
      "Neuropsychologisches Hirnleistungstraining"
    ],
  },
  {
    id: "l-poenig",
    name: "Lynn Pönig",
    role: "Ergotherapeutin",
    image: "/team/13 Lynn Pönig.jpg",
    qualifications: [
      "Neurofeedback/ EEG-Biofeedback Therapeutin",
      "Teilleistungsstörungen (LRS, Dyskalkulie)",
      "Visualtraining"
    ],
  },
  {
    id: "a-eitler",
    name: "Anna Eitler",
    role: "Ergotherapeutin",
    image: "/team/14 Anna Eitler.jpg",
    qualifications: [
      "Kursleiterin für Progressive Muskelrelaxation (ZPP zertifiziert)",
      "NEKU Therapie in der Neurologie (speziell bei Parkinson)"
    ],
  },
  {
    id: "c-meier",
    name: "Cornelia Meier",
    role: "Büromanagement",
    image: "/team/Cornelia Meier.jpg",
    qualifications: [
      "Bürokauffrau",
      "Klientenmanagement",
      "Psychologische Kompetenz im Business",
      "Datenschutzbeauftragte",
      "Abrechnung/ Zuzahlung"
    ],
  },
];
