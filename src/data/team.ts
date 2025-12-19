export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string; // Path to image (avatar)
  qualifications: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "ak-voigt",
    name: "Anne-Karen Voigt",
    role: "Praxisleitung & Ergotherapeutin",
    image: "/team/01 Ergo-Team.jpg",
    qualifications: [
      "Staatlich anerkannte Ergotherapeutin seit 2000",
      "Handtherapeutin",
      "Neurofeedback-Therapeutin",
      "Bobath-Therapeutin",
      "Fachtherapeutin für Pädiatrie",
      "Marburger Konzentrationstraining",
    ],
  },
  {
    id: "c-wagner",
    name: "Claudia Wagner",
    role: "Ergotherapeutin",
    image: "/team/02 Claudia Wagner.jpg",
    qualifications: [
      "Schwerpunkt Pädiatrie",
      "Sensorische Integrationstherapie",
      "Linkshänderberatung",
      "Elternberatung",
      "Entspannungspädagogin",
    ],
  },
  {
    id: "j-lenk",
    name: "Jessica Lenk",
    role: "Ergotherapeutin",
    image: "/team/03 Jessica Lenk.jpg",
    qualifications: [
      "Schwerpunkt Pädiatrie",
      "Sensorische Integration",
      "Entwicklungsförderung",
    ],
  },
  {
    id: "m-koehler",
    name: "Madeleine Köhler",
    role: "Ergotherapeutin",
    image: "/team/04 Madeleiene Köhler.jpg",
    qualifications: [
      "Schwerpunkt Neurologie",
      "Handtherapie",
      "Rehabilitation",
    ],
  },
  {
    id: "j-weickert",
    name: "Josefine Weickert",
    role: "Ergotherapeutin",
    image: "/team/05 Josefine Weickert.jpg",
    qualifications: [
      "Schwerpunkt Geriatrie & Hausbesuche",
      "Sturzprophylaxe",
      "Gedächtnistraining",
      "Basale Stimulation",
      "Palliativbegleitung",
    ],
  },
  {
    id: "k-stuebner",
    name: "Katja Stübner",
    role: "Ergotherapeutin",
    image: "/team/07 Katja Stübner.jpg",
    qualifications: [
      "Schwerpunkt Pädiatrie",
      "Entwicklungsförderung",
      "Elternberatung",
    ],
  },
  {
    id: "a-rudolph",
    name: "Antje Rudolph",
    role: "Ergotherapeutin",
    image: "/team/08 Antje Rudolph.jpg",
    qualifications: [
      "Schwerpunkt Neurologie",
      "Handtherapie",
      "Rehabilitation",
    ],
  },
  {
    id: "m-weiland",
    name: "Melanie Weiland",
    role: "Ergotherapeutin",
    image: "/team/11 Melanie Weiland.jpg",
    qualifications: [
      "Schwerpunkt Pädiatrie",
      "Sensorische Integration",
      "Entwicklungsförderung",
    ],
  },
  {
    id: "d-tautenhahn",
    name: "Doreen Tautenhahn",
    role: "Ergotherapeutin",
    image: "/team/12 Doreen Tautenhahn.jpg",
    qualifications: [
      "Neurologie",
      "Spiegeltherapie",
      "Handrehabilitation",
      "Kinesio-Taping",
    ],
  },
  {
    id: "l-poenig",
    name: "Lynn Pönig",
    role: "Ergotherapeutin",
    image: "/team/13 Lynn Pönig.jpg",
    qualifications: [
      "Schwerpunkt Pädiatrie",
      "Entwicklungsförderung",
      "Elternberatung",
    ],
  },
  {
    id: "a-eitler",
    name: "Anna Eitler",
    role: "Ergotherapeutin",
    image: "/team/14 Anna Eitler.jpg",
    qualifications: [
      "Schwerpunkt Neurologie",
      "Handtherapie",
      "Rehabilitation",
    ],
  },
  {
    id: "c-meier",
    name: "Cornelia Meier",
    role: "Ergotherapeutin",
    image: "/team/Cornelia Meier.jpg",
    qualifications: [
      "Schwerpunkt Geriatrie",
      "Hausbesuche",
      "Sturzprophylaxe",
    ],
  },
];
