// Mapping von Location-IDs zu verfügbaren Bildern für die Galerie
export const locationImageGalleries: Record<string, string[]> = {
  aue: [
    "/Aue/Gruppenraum.webp",
    "/Aue/Neurologie & Handtherapie : Orthopädie2.webp",
    "/Aue/Neurologie & Handtherapie : Orthopädie3.webp",
    "/Aue/Pädiatrie & Entwicklung1.webp",
    "/Aue/Therapeutisches Reiten.webp",
    "/Aue/Visualtraining (VT).webp",
  ],
  schwarzenberg: [
    "/Schwarzenberg/Praxis von Außen.webp",
    "/Schwarzenberg/Anmeldung.webp",
    "/Schwarzenberg/Schwarzenberg Praxis:Pädiatrie & Entwicklung (Kinder & Jugendliche).webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)2.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)3.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)3Bewegungsräume.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)4.webp",
    "/Schwarzenberg/Pädiatrie & Entwicklung (Kinder & Jugendliche)5.webp",
    "/Schwarzenberg/Linkshänderberatung.webp",
  ],
  loessnitz: [
    "/Lösnitz2/Warteraum.webp",
    "/Lösnitz2/Ruheraum.webp",
    "/Lösnitz2/Entspannungsraum.webp",
    "/Lösnitz2/Eingang.webp",
    "/Lösnitz2/Behandlungsraum.webp",
    "/Lösnitz2/BEMER Therapie.webp",
  ],
}

// Fallback: Wenn keine Galerie vorhanden, verwende das Hauptbild
export function getLocationImages(locationId: string, mainImage?: string): string[] {
  return locationImageGalleries[locationId] || (mainImage ? [mainImage] : [])
}
