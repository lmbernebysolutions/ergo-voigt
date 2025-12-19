"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, CheckCircle2, ZoomIn, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { Modal } from "@/components/ui/Modal"
import { locations } from "@/data/locations"
import { getLocationImages } from "@/lib/locationImages"

// Google Business Profile URLs (Place IDs müssen noch eingefügt werden)
const googleBusinessProfiles: Record<string, string> = {
  aue: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.1234567890!2d12.1234567!3d50.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzI0LjQiTiAxMsKwMDcnMjQuNCJF!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde",
  schwarzenberg: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.1234567890!2d12.1234567!3d50.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzI0LjQiTiAxMsKwMDcnMjQuNCJF!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde",
  loessnitz: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.1234567890!2d12.1234567!3d50.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzI0LjQiTiAxMsKwMDcnMjQuNCJF!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde",
}

export default function PraxisPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [galleryLocationId, setGalleryLocationId] = useState<string | null>(null)
  const [clickedLocationId, setClickedLocationId] = useState<string | null>(null)

  // Öffne Modal automatisch wenn standort Query-Parameter vorhanden
  useEffect(() => {
    const standort = searchParams.get("standort")
    if (standort && locations.some(l => l.id === standort)) {
      setClickedLocationId(standort)
    }
  }, [searchParams])

  const handleCloseModal = () => {
    setClickedLocationId(null)
    // Entferne Query-Parameter aus URL
    router.push("/praxis", { scroll: false })
  }

  return (
    <main className="bg-slate-50 text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/80 via-white to-background pb-12 pt-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 orb-sheen" />
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
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 shadow-lg flex items-center gap-1.5">
                            <ZoomIn className="w-3 h-3" />
                            Klick für öffnen
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
                  <div className="flex flex-col gap-4 p-6 justify-start">
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
            maxWidth="6xl"
          >
            <div className="max-h-[90vh] overflow-y-auto p-6">
              <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                {/* Linke Spalte: Bild + Google Maps */}
                <div className="space-y-6">
                  {/* Bild */}
                  <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <div
                      className="relative h-full w-full cursor-pointer group/image"
                      onClick={() => setGalleryLocationId(location.id)}
                    >
                      <Image
                        src={mainImage}
                        alt={location.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover/image:scale-110"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Click Hint - Mobile always visible, Desktop on hover */}
                      {locationImages.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 shadow-lg flex items-center gap-1.5">
                            <ZoomIn className="w-3 h-3" />
                            Klick für öffnen
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

                  {/* Google Business Profile */}
                  <Card className="border-0 shadow-xl shadow-slate-200/50 overflow-hidden">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        Google Bewertungen & Profil
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="relative w-full h-64">
                        <iframe
                          src={googleBusinessProfiles[location.id] || googleBusinessProfiles.aue}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-b-2xl"
                          title={`Google Business Profile - ${location.name}`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Rechte Spalte: Kontakt + Features */}
                <div className="space-y-4">
                  {/* Kontaktinformationen */}
                  <Card className="border-0 shadow-xl shadow-slate-200/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl text-slate-900">{location.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900">{location.address.street}</p>
                          <p className="text-slate-600">
                            {location.address.zip} {location.address.city}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary shrink-0" />
                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                          className="text-slate-700 hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary shrink-0" />
                        <a
                          href={`mailto:${location.email}`}
                          className="text-slate-700 hover:text-primary transition-colors break-all"
                        >
                          {location.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-2">
                    <Button
                      asChild
                      size="default"
                      className="w-full rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg font-bold"
                    >
                      <Link href={`/praxis?standort=${location.id}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        Termin anfragen
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="default"
                      className="w-full rounded-full border-primary text-primary hover:bg-primary/10 font-bold"
                    >
                      <Link href={`/praxis?standort=${location.id}`}>
                        Kontakt
                      </Link>
                    </Button>
                  </div>

                  {/* Features Checkliste */}
                  {location.features && (
                    <Card className="border-0 shadow-xl shadow-slate-200/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-slate-900">Ausstattung & Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                        {location.features.accessibility && (
                          <AccordionItem value="accessibility">
                            <AccordionTrigger className="text-slate-700">
                              Barrierefreiheit
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {location.features.accessibility.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {location.features.service && (
                          <AccordionItem value="service">
                            <AccordionTrigger className="text-slate-700">
                              Service & Leistungen
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {location.features.service.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {location.features.amenities && (
                          <AccordionItem value="amenities">
                            <AccordionTrigger className="text-slate-700">
                              Ausstattung
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {location.features.amenities.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {location.features.audience && (
                          <AccordionItem value="audience">
                            <AccordionTrigger className="text-slate-700">
                              Publikum
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {location.features.audience.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {location.features.parking && (
                          <AccordionItem value="parking">
                            <AccordionTrigger className="text-slate-700">
                              Parkplätze
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {location.features.parking.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {location.features.payment && (
                          <AccordionItem value="payment">
                            <AccordionTrigger className="text-slate-700">
                              Zahlungsarten
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {location.features.payment.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        </Accordion>
                      </CardContent>
                    </Card>
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
