"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, CheckCircle2, ZoomIn, ExternalLink, Calendar, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { Modal } from "@/components/ui/Modal"
import { locations } from "@/data/locations"
import { getLocationImages } from "@/lib/locationImages"

// Google Business Profile URLs (Embeds & Profile Links)
const googleBusinessProfiles: Record<string, { embed: string, google: string, apple: string }> = {
  aue: {
    embed: "https://maps.google.com/maps?q=Altmarkt+5,+08280+Aue-Bad+Schlema&t=&z=15&ie=UTF8&iwloc=&output=embed",
    google: "https://www.google.com/maps/search/?api=1&query=Ergotherapie+Voigt+Altmarkt+5+08280+Aue-Bad+Schlema",
    apple: "https://maps.apple.com/?q=Ergotherapie+Voigt&address=Altmarkt%205,08280,Aue-Bad%20Schlema"
  },
  schwarzenberg: {
    embed: "https://maps.google.com/maps?q=Robert-Koch-Stra%C3%9Fe+16a,+08340+Schwarzenberg&t=&z=15&ie=UTF8&iwloc=&output=embed",
    google: "https://www.google.com/maps/search/?api=1&query=Ergotherapie+Voigt+Robert-Koch-Stra%C3%9Fe+16a+08340+Schwarzenberg",
    apple: "https://maps.apple.com/?q=Ergotherapie+Voigt&address=Robert-Koch-Stra%C3%9Fe%2016a,08340,Schwarzenberg"
  },
  loessnitz: {
    embed: "https://maps.google.com/maps?q=Heinestra%C3%9Fe+1,+08294+L%C3%B6%C3%9Fnitz&t=&z=15&ie=UTF8&iwloc=&output=embed",
    google: "https://www.google.com/maps/search/?api=1&query=Ergotherapie+Voigt+Heinestra%C3%9Fe+1+08294+L%C3%B6%C3%9Fnitz",
    apple: "https://maps.apple.com/?q=Ergotherapie+Voigt&address=Heinestra%C3%9Fe%201,08294,L%C3%B6%C3%9Fnitz"
  },
}

// Separate component for useSearchParams to wrap in Suspense
function PraxisContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [galleryLocationId, setGalleryLocationId] = useState<string | null>(null)
  const [clickedLocationId, setClickedLocationId] = useState<string | null>(null)
  const [isMapMenuOpen, setIsMapMenuOpen] = useState(false)

  // Öffne Modal automatisch wenn standort Query-Parameter vorhanden
  useEffect(() => {
    const standort = searchParams.get("standort")
    if (standort && locations.some(l => l.id === standort)) {
      setClickedLocationId(standort)
    }
  }, [searchParams])

  const handleCloseModal = () => {
    setClickedLocationId(null)
    setIsMapMenuOpen(false)
    // Wenn wir von einer anderen Seite kamen (Deep Link), gehen wir zurück
    // Ansonsten (interne Navigation) bleiben wir auf der Seite und entfernen nur den Parameter
    if (searchParams.get("standort")) {
      router.back()
    } else {
      router.push("/praxis", { scroll: false })
    }
  }

  return (
    <main className="bg-slate-50 text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/80 via-white to-background pb-12 pt-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 orb-sheen" />
        {/* Watermark Logo Twist (Top Right, -12deg) */}
        <div className="pointer-events-none absolute -top-24 -right-24 z-0 opacity-[0.04] -rotate-12 mix-blend-multiply select-none hidden lg:block">
          <img src="/logo.png" alt="" className="w-[600px] h-[600px] object-contain" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Unsere Praxen
          </p>
          <h1 className="mt-3 font-semibold text-slate-950" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}>
            Drei Standorte im Erzgebirge
          </h1>
          <p className="mt-4 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Wir sind an drei Standorten für Sie da. Jede Praxis bietet individuelle Therapieräume,
            moderne Ausstattung und eine vertrauensvolle Atmosphäre.
          </p>
        </div>
      </section>

      {/* Praxis Cards Grid */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => {
            const locationImages = getLocationImages(location.id)
            const mainImage = locationImages[0] || "/Aue/Auepraxis1.webp"

            return (
              <Card
                key={location.id}
                className="group relative overflow-hidden border-0 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-100/50 hover:-translate-y-2 cursor-pointer"
                onClick={() => setClickedLocationId(location.id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setClickedLocationId(location.id)
                  }
                }}
              >
                <div className="grid grid-cols-1 gap-6">
                  {/* Bild-Sektion */}
                  <div className="relative h-64">
                    <div
                      className="relative h-full w-full cursor-pointer group/image"
                      onClick={(e) => {
                        e.stopPropagation()
                        setGalleryLocationId(location.id)
                      }}
                    >
                      <Image
                        src={mainImage}
                        alt={location.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Click Hint - Mobile always visible, Desktop on hover */}
                      {locationImages.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-primary shadow-2xl backdrop-blur-sm">
                            <ZoomIn className="h-4 w-4" />
                            Bildergalerie
                          </div>
                        </div>
                      )}

                      {/* Bildzähler */}
                      {locationImages.length > 1 && (
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg">
                          1 / {locationImages.length}
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Kontakt & CTA Sektion */}
                  <div className="relative flex flex-col gap-4 p-6 justify-start">
                    {/* Partner Button (Absolute Top Right of Content) */}
                    {location.extraInfo && (
                      <a
                        href={location.extraInfo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white p-1 shadow-sm transition-transform hover:scale-105 hover:shadow-md group/partner"
                        title={location.extraInfo.title}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-lg">
                          {location.extraInfo.logo && (
                            <Image
                              src={location.extraInfo.logo}
                              alt="Partner Logo"
                              fill
                              className="object-contain p-0.5"
                            />
                          )}
                        </div>
                        <ArrowUpRight className="absolute right-0.5 top-0.5 h-3 w-3 text-slate-400 transition-colors group-hover/partner:text-primary" />
                      </a>
                    )}

                    {/* Titel */}
                    <div>
                      <h3 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                        {location.name}
                      </h3>
                    </div>

                    {/* Kontaktinformationen */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">
                            {location.address.street}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {location.address.zip} {location.address.city}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary shrink-0" />
                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                          className="text-slate-700 hover:text-primary transition-colors text-sm"
                        >
                          {location.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary shrink-0" />
                        <a
                          href={`mailto:${location.email}`}
                          className="text-slate-700 hover:text-primary transition-colors text-sm break-all"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>

                    {/* Hinweistext */}
                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-500 text-center">
                        Klicken Sie hier für mehr Informationen
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Expanded Location Modal */}
      {clickedLocationId && (() => {
        const location = locations.find((l) => l.id === clickedLocationId)!
        const locationImages = getLocationImages(location.id)
        const mainImage = locationImages[0] || "/2025-07-01.webp"

        return (
          <Modal
            isOpen={clickedLocationId !== null}
            onClose={handleCloseModal}
            maxWidth="4xl"
          >
            <div className="flex flex-col md:flex-row h-full md:h-auto md:min-h-[500px] overflow-hidden bg-white">
              {/* Left Column: Visuals (Image + Map) */}
              <div className="w-full md:w-[45%] flex flex-col bg-slate-100 border-r border-slate-100">
                {/* Main Image */}
                <div 
                  className="relative aspect-video w-full shrink-0 cursor-pointer group/image"
                  onClick={() => setGalleryLocationId(location.id)}
                >
                  <Image
                    src={mainImage}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                  
                  {/* Gallery Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-sm transition-transform group-hover/image:scale-105">
                      <ZoomIn className="h-3.5 w-3.5 text-primary" />
                      <span>Bildergalerie</span>
                    </div>
                    {locationImages.length > 1 && (
                      <div className="rounded-full bg-black/50 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                         1 / {locationImages.length}
                      </div>
                    )}
                  </div>
                </div>

                {/* Integrated Map */}
                <div className="flex-1 relative bg-slate-200 min-h-[200px]">
                  <iframe
                    src={googleBusinessProfiles[location.id]?.embed || googleBusinessProfiles.aue.embed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    title={`Karte von ${location.name}`}
                  />
                  
                  {/* Map Overlay Menu */}
                  <div className="absolute bottom-3 right-3 z-10">
                    {!isMapMenuOpen ? (
                      <button 
                        onClick={() => setIsMapMenuOpen(true)}
                        className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md backdrop-blur hover:bg-white hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        In Maps öffnen
                      </button>
                    ) : (
                      <div className="flex flex-col gap-1.5 rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-100 animate-in slide-in-from-bottom-2 duration-200">
                        <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Öffnen mit
                        </div>
                        <a 
                          href={googleBusinessProfiles[location.id]?.google || googleBusinessProfiles.aue.google}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#4285F4] transition-colors"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                          Google Maps
                        </a>
                        <a 
                          href={googleBusinessProfiles[location.id]?.apple || googleBusinessProfiles.aue.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        >
                          <svg viewBox="0 0 384 512" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                          Apple Maps
                        </a>
                        <button 
                          onClick={() => setIsMapMenuOpen(false)}
                          className="mt-1 w-full border-t border-slate-100 py-2 text-[10px] font-medium text-slate-400 hover:text-slate-600"
                        >
                          Abbrechen
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Information */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                  {/* Header */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-950 leading-tight">
                      {location.name}
                    </h2>
                    <div className="mt-2 flex items-center gap-2 text-slate-500 font-medium">
                      <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>{location.address.street}, {location.address.zip} {location.address.city}</span>
                    </div>
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-slate-100 transition-all group"
                    >
                      <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Telefon</p>
                        <p className="font-semibold text-slate-900 truncate">{location.phone}</p>
                      </div>
                    </a>

                    <a 
                      href={`mailto:${location.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-slate-100 transition-all group"
                    >
                      <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</p>
                        <p className="font-semibold text-slate-900 truncate">{location.email}</p>
                      </div>
                    </a>
                  </div>

                  {/* Google & Partner Integration */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-900 text-sm">Online & Partner</h3>
                        <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Google Review Button */}
                        <a 
                            href={googleBusinessProfiles[location.id]?.google || googleBusinessProfiles.aue.google}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2.5 rounded-xl bg-white shadow-sm border border-slate-200/60 hover:border-blue-200 hover:shadow-md transition-all group"
                        >
                            <div className="h-9 w-9 shrink-0 rounded-full bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4]">
                                <span className="font-bold text-lg">G</span>
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors">Jetzt bewerten</p>
                                <p className="text-[10px] text-slate-500">Google Profil</p>
                            </div>
                            <ExternalLink className="ml-auto h-3 w-3 text-slate-300 group-hover:text-[#4285F4]" />
                        </a>

                        {/* Partner Link (Aue Only) */}
                        {location.extraInfo && (
                            <a 
                                href={location.extraInfo.link}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex items-center gap-3 p-2.5 rounded-xl bg-white shadow-sm border border-slate-200/60 hover:border-pink-200 hover:shadow-md transition-all group"
                            >
                                <div className="h-9 w-9 shrink-0 rounded-full overflow-hidden border border-slate-100 relative">
                                    {location.extraInfo.logo && (
                                        <Image src={location.extraInfo.logo} alt="Partner" fill className="object-contain p-0.5" />
                                    )}
                                </div>
                                <div className="text-left min-w-0">
                                    <p className="text-xs font-bold text-slate-900 truncate group-hover:text-pink-500 transition-colors">{location.extraInfo.title}</p>
                                    <p className="text-[10px] text-slate-500">Partner ansehen</p>
                                </div>
                                <ExternalLink className="ml-auto h-3 w-3 text-slate-300 group-hover:text-pink-500" />
                            </a>
                        )}
                    </div>
                  </div>

                  {/* Features (Compact) */}
                  {location.features && (
                    <div className="pt-2">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="services" className="border-b-0">
                                <AccordionTrigger className="py-2 text-sm font-semibold text-slate-600 hover:text-primary hover:no-underline">
                                    Ausstattung & Services anzeigen
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-2 gap-2 pt-2">
                                        {location.features.accessibility && (
                                            <div className="text-xs text-slate-600 flex items-center gap-2">
                                                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                                                Barrierefrei
                                            </div>
                                        )}
                                        {location.features.parking && (
                                            <div className="text-xs text-slate-600 flex items-center gap-2">
                                                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                                                Parkplätze
                                            </div>
                                        )}
                                        {/* More items implied/simplified for compact view */}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Modal>
        )
      })()}

      {/* Gallery Modal */}
      {galleryLocationId && (() => {
        const location = locations.find((l) => l.id === galleryLocationId)!
        const galleryImages = getLocationImages(location.id)

        return (
          <ImageGallery
            images={galleryImages}
            initialIndex={0}
            title={location.name}
            onClose={() => setGalleryLocationId(null)}
          />
        )
      })()}
    </main>
  )
}

export default function PraxisPage() {
  return (
    <Suspense fallback={
      <main className="bg-slate-50 text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-600">Lade...</p>
        </div>
      </main>
    }>
      <PraxisContent />
    </Suspense>
  )
}
