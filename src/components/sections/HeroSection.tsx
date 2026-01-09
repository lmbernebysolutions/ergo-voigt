"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin } from "lucide-react"
import { PrimaryButton } from "@/components/ui/PrimaryButton"
import { WarmGlow } from "@/components/ui/WarmGlow"
import { locations } from "@/data/locations"
import Stack from "@/components/ui/Stack"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { getLocationImages, locationImageGalleries } from "@/lib/locationImages"

// Bilder für die Standorte - verwende erste Bilder aus jedem Ordner
const SLIDES = [
  {
    locationId: "aue",
    img: "/Aue/Auepraxis1.webp",
    color: "bg-red-500",
  },
  {
    locationId: "schwarzenberg",
    img: "/Schwarzenberg/Schwarzenberg Praxis 2.webp",
    color: "bg-blue-500",
  },
  {
    locationId: "loessnitz",
    img: "/Lösnitz2/Praxis Lösnitz.webp",
    color: "bg-slate-800",
  },
]
const StackCard = ({ slide, locationName, locationId }: { slide: any, locationName: string, locationId: string }) => (
  <div className="relative w-full h-full">
    <Image
      src={slide.img}
      alt={locationName}
      fill
      className="object-cover pointer-events-none"
      priority
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
    />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    <Link 
      href={`/praxis?standort=${locationId}`}
      className="absolute bottom-4 left-4 z-20 cursor-pointer"
    >
      <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-2 rounded-full shadow-xl hover:bg-black/80 transition-all">
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${slide.color}`}>
          <MapPin className="h-4 w-4" />
        </div>
        <span className="text-sm font-bold text-white whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ fontSize: 'clamp(0.875rem, 2vw, 0.875rem)' }}>
          {locationName}
        </span>
      </div>
    </Link>
  </div>
)

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [galleryLocationId, setGalleryLocationId] = useState<string | null>(null)
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0)

  const cards = SLIDES.map(slide => (
    <StackCard 
      key={slide.locationId} 
      slide={slide} 
      locationName={locations.find(l => l.id === slide.locationId)?.name || ""}
      locationId={slide.locationId}
    />
  ))

  const handleCardClick = (locationId: string, imageIndex: number) => {
    // Check if mobile
    if (window.innerWidth < 768) {
       setGalleryLocationId("all")
       setGalleryInitialIndex(0)
    } else {
       setGalleryInitialIndex(imageIndex)
       setGalleryLocationId(locationId)
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-secondary/80 via-white to-background py-8 md:py-12 lg:py-12 lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      <div className="pointer-events-none absolute inset-0 orb-sheen" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:flex-row lg:gap-16 xl:gap-24">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="relative z-10 lg:w-[48%] flex flex-col justify-center text-center lg:text-left">
            {/* Logo Background Arc - rechts oben hinter dem Text */}
            <div className="pointer-events-none absolute inset-0 logo-background-arc" />
             {/* ... Header and P ... */}
             <h1 className="mb-6 font-bold leading-[1.1] text-slate-950" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}>
              Der Mensch steht{" "}
              <div className="relative inline-block text-sky-600">
                im Mittelpunkt.
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-sky-600" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </h1>

            <p className="mb-8 max-w-lg leading-relaxed text-slate-800 mx-auto lg:mx-0" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
              Fähigkeiten fördern und Lebensqualität verbessern. Selbstversorgung
              und Produktivität steigern – an unseren 3 Standorten im Erzgebirge.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <Link href="/praxis">
                <PrimaryButton className="h-12 min-h-[48px] px-6 md:px-8 text-base shadow-sky-200">
                  Praxen entdecken
                </PrimaryButton>
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex h-12 min-h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 md:px-8 text-base font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Unsere Fachbereiche
              </Link>
            </div>
          </div>

          {/* RIGHT: GALLERY STACK */}
          <div className="relative w-full lg:w-[52%] flex justify-center lg:justify-end">
            <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full border-[40px] border-blue-50 opacity-60 blur-sm hidden lg:block" />
            
            <div className="flex flex-col items-center w-full max-w-[420px]">
              <div className="relative aspect-video w-full h-[200px] sm:h-[240px] md:h-[280px] lg:aspect-square lg:h-auto">
                 <Stack 
                   cards={cards}
                   randomRotation={true}
                   sensitivity={150}
                   sendToBackOnClick={false}
                   mobileClickOnly={true}
                   pauseOnHover={true}
                   autoplay={true}
                   autoplayDelay={4000}
                   onCardClick={handleCardClick}
                   cardLocationIds={SLIDES.map(s => s.locationId)}
                 />
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center md:block hidden">
                Tippen zum Wechseln
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery for Location Images */}
      {galleryLocationId && (() => {
        let locationImages: string[] = []
        let locationName = ""

        if (galleryLocationId === "all") {
           // Flatten all images
           locationImages = Object.values(locationImageGalleries).flat()
           locationName = "Alle Standorte"
        } else {
           locationImages = getLocationImages(galleryLocationId)
           locationName = locations.find(l => l.id === galleryLocationId)?.name || ""
        }
        
        // Helper to generate a title from filename
        const getImageTitle = (path: string) => {
           // Extract filename: "/Aue/Pädiatrie & Entwicklung1.webp" -> "Pädiatrie & Entwicklung1"
           const filename = path.split('/').pop()?.split('.')[0] || ""
           // Clean up: remove digits at end, replace & with "und" maybe? Keep it simple.
           const cleanName = filename.replace(/\d+$/, '').replace(/_/g, ' ')
           // Combine with Location Name
           // e.g. "Praxis Aue - Pädiatrie & Entwicklung"
           // If filename is generic like "Auepraxis", just show Location Name
           if (cleanName.toLowerCase().includes(locationName.toLowerCase().replace('praxis ', '').toLowerCase())) {
             return locationName
           }
           // Use only the City name part of locationName for brevity? "Praxis Aue" -> "Aue"
           const city = locationName.replace('Praxis ', '')
           return `${city} - ${cleanName}`
        }

        const imageTitles = locationImages.map(getImageTitle)

        return (
          <ImageGallery
            images={locationImages}
            imageTitles={imageTitles}
            initialIndex={galleryInitialIndex}
            title={locationName} 
            onClose={() => setGalleryLocationId(null)}
          />
        )
      })()}
    </section>
  )
}
