export interface LocationFeature {
  label: string;
  value: string | string[];
  icon?: string;
}

export interface Location {
  id: string;
  name: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
  phone: string;
  email: string;
  features?: {
    accessibility?: string[];
    service?: string[];
    amenities?: string[];
    audience?: string[];
    planning?: string[];
    payment?: string[];
    parking?: string[];
  };
  extraInfo?: {
    title: string;
    description: string;
    link: string;
    linkText: string;
    logo?: string;
  };
}

export const locations: Location[] = [
  {
    id: "aue",
    name: "Praxis Aue",
    address: {
      street: "Altmarkt 5",
      zip: "08280",
      city: "Aue-Bad Schlema",
    },
    phone: "03771 3406810",
    email: "thera@ergo-voigt.de",
    features: {
      accessibility: [
        "Barrierefrei zugänglich",
        "Rollstuhlgerechter Parkplatz",
        "Kein rollstuhlgerechtes WC",
      ],
      service: ["Service/Leistungen vor Ort", "Von Frauen geführt"],
      amenities: ["WC", "Unisex-Toilette"],
      audience: ["LGBTQ+-freundlich", "Sicherer Ort für Transgender"],
      planning: ["Terminvereinbarung empfohlen"],
      payment: ["Nur Barzahlung"],
      parking: ["Gebührenpflichtige Parkhausplätze", "Gebührenpflichtige Parkplätze"],
    },
    extraInfo: {
      title: "Kosmetikstudio",
      description: "Gesund & Schön im Marktgässchen",
      link: "https://www.gesundschoen-aue.de/",
      linkText: "Zur Website",
      logo: "/Aue/logo-gesund-und-schoen.jpg"
    }
  },
  {
    id: "schwarzenberg",
    name: "Praxis Schwarzenberg",
    address: {
      street: "Robert-Koch-Straße 16a",
      zip: "08340",
      city: "Schwarzenberg/Erzgebirge",
    },
    phone: "03774 178954",
    email: "thera@ergo-voigt.de",
  },
  {
    id: "loessnitz",
    name: "Praxis Lößnitz",
    address: {
      street: "Heinestraße 1",
      zip: "08294",
      city: "Lößnitz",
    },
    phone: "03771 440452",
    email: "thera@ergo-voigt.de",
  },
];
