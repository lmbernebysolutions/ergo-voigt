// Mapping von Service-IDs zu verfügbaren Bildern für die Galerie
// Nur leistungsspezifische Bilder, keine Praxisbilder
export const serviceImageGalleries: Record<string, string[]> = {
  // Standard-Leistungen
  paediatrie: [
    "/Aue/Pädiatrie & Entwicklung1.webp",
    "/Aue/Pädiatrie & Entwicklung2.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)2.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)3.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)4.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)5.webp",
  ],
  neurologie: [
    "/Aue/Neurologie & Handtherapie : Orthopädie.webp",
    "/Aue/Neurologie & Handtherapie : Orthopädie2.webp",
    "/Aue/Neurologie & Handtherapie : Orthopädie3.webp",
  ],
  geriatrie: [
    "/Geriatrie (Aktives Hirnleistungstraining - Feinmotorik).webp",
  ],
  orthopaedie: [
    "/Aue/Neurologie & Handtherapie : Orthopädie.webp",
    "/Aue/Neurologie & Handtherapie : Orthopädie2.webp",
    "/Aue/Neurologie & Handtherapie : Orthopädie3.webp",
  ],
  psychiatrie: [
    // Keine spezifischen Psychiatrie-Bilder vorhanden, nur Hauptbild wird verwendet
  ],
  // Spezielle Leistungen
  neurofeedback: [
    "/Neurofeedback.webp",
  ],
  bemer: [
    "/Lösnitz2/BEMER Therapie : Progressive Muskelrelaxation (PMR.webp",
  ],
  visualtraining: [
    "/Aue/Visualtraining (VT).webp",
  ],
  sturzpraevention: [
    "/Sturzprävention.webp",
    "/Geriatrie (Aktives Hirnleistungstraining - Feinmotorik).webp",
  ],
  pmr: [
    "/Lösnitz2/BEMER Therapie : Progressive Muskelrelaxation (PMR.webp",
  ],
  linkshaenderberatung: [
    "/Schwarzenberg/Linkshänderberatung.webp",
  ],
  "therapeutisches-reiten": [
    "/Aue/reiten.webp",
  ],
}

// Fallback: Wenn keine Galerie vorhanden, verwende das Hauptbild mehrfach
export function getServiceImages(serviceId: string, mainImage: string): string[] {
  return serviceImageGalleries[serviceId] || [mainImage]
}
