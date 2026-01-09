// Mapping von Service-IDs zu verfügbaren Bildern für die Galerie
// Nur leistungsspezifische Bilder, keine Praxisbilder
export const serviceImageGalleries: Record<string, string[]> = {
  // Standard-Leistungen
  paediatrie: [
    "/Aue/Pädiatrie & Entwicklung1.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)2.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)3.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)4.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)5.webp",
  ],
  neurologie: [
    "/Neurologie_Psychotherapie/Neurologie1.jpeg",
  ],
  geriatrie: [
    "/Geriatrie (Aktives Hirnleistungstraining - Feinmotorik).webp",
  ],
  orthopaedie: [
    "/Aue/Neurologie & Handtherapie : Orthopädie2.webp",
    "/Aue/Neurologie & Handtherapie : Orthopädie3.webp",
  ],
  psychiatrie: [
    // Bilder wurden entfernt/verschoben
  ],
  // Spezielle Leistungen
  neurofeedback: [
    "/Neurofeedback.webp",
  ],
  bemer: [
    "/Lösnitz2/BEMER Therapie.webp",
  ],
  visualtraining: [
    "/Aue/Visualtraining (VT).webp",
  ],
  sturzpraevention: [
    "/Sturzprävention.webp",
    "/Geriatrie (Aktives Hirnleistungstraining - Feinmotorik).webp",
  ],
  pmr: [
    "/Lösnitz2/BEMER Therapie.webp",
  ],
  linkshaenderberatung: [
    "/Schwarzenberg/Linkshänderberatung.webp",
  ],
  "therapeutisches-reiten": [
    "/Aue/Therapeutisches Reiten.webp",
    "/Neurologie_Psychotherapie/Therapeutisches Reiten.jpeg",
  ],
}

// Fallback: Wenn keine Galerie vorhanden, verwende das Hauptbild mehrfach
export function getServiceImages(serviceId: string, mainImage: string): string[] {
  return serviceImageGalleries[serviceId] || [mainImage]
}
