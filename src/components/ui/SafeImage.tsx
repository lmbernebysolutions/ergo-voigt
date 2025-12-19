"use client"

import Image from "next/image"
import { ComponentProps } from "react"

/**
 * Wrapper für next/image, der Bilder mit Umlauten in Dateinamen korrekt handhabt
 * Verwendet unoptimized für Bilder mit Umlauten, um Probleme auf Vercel zu vermeiden
 */
export function SafeImage({
  src,
  ...props
}: ComponentProps<typeof Image>) {
  // Prüfe ob der Pfad Umlaute enthält
  const hasUmlauts = /[äöüÄÖÜß]/.test(src as string)
  
  // Wenn Umlaute vorhanden, verwende unoptimized
  if (hasUmlauts) {
    return (
      <Image
        {...props}
        src={src}
        unoptimized
      />
    )
  }
  
  // Ansonsten normale Optimierung
  return <Image {...props} src={src} />
}
