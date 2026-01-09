"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ZoomIn } from "lucide-react"

import { BentoCard } from "@/components/sections/BentoCard"
import { ArcDivider } from "@/components/sections/Hero"
import { HeroSection } from "@/components/sections/HeroSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Modal } from "@/components/ui/Modal"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { LocationCards } from "@/components/sections/LocationCards"
import { NewsSection } from "@/components/sections/NewsSection"
import { FAQSectionWithTabs } from "@/components/sections/FAQSectionWithTabs"
import { faqCategories } from "@/data/faq"
import { services } from "@/data/services"
import { getServiceImages } from "@/lib/serviceImages"

function ServiceCardWithScrollAnimation({
  service,
  onClick,
}: {
  service: (typeof services)[0]
  onClick: () => void
}) {
  const IconComponent = service.icon
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting
          setIsVisible(visible)
        })
      },
      {
        threshold: 0.01,
        rootMargin: "0px",
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [service.title])

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${service.title} - Mehr erfahren`}
      className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-all md:hover:shadow-2xl md:hover:shadow-sky-100/50 md:hover:-translate-y-1 ring-1 ring-white/55 focus:outline-none focus:ring-4 focus:ring-primary/50 h-full flex flex-col"
    >
      {/* Background Image with Scroll Animation */}
      <div
        className="absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] z-0"
        style={{
          zIndex: 0,
          opacity: isVisible ? 0.2 : 0.03,
          transform: isVisible
            ? "scale(1) translateX(0%)"
            : "scale(1.15) translateX(-30%)",
          willChange: 'transform, opacity',
        }}
      >
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          loading="lazy"
        />
      </div>

      {/* Blue Orbs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.96_0.04_260/_0.5),transparent_38%),radial-gradient(circle_at_80%_0%,oklch(0.86_0.12_260/_0.22),transparent_28%)]" />

      {/* Content */}
      <div className="relative p-7 min-h-[200px] flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-5">
          {IconComponent && (
            <div className="flex size-14 items-center justify-center rounded-full bg-blue-100 text-primary shadow-[0_8px_24px_-12px_oklch(0.55_0.15_260/_0.5)]">
              <IconComponent className="size-7" strokeWidth={2.5} aria-hidden />
            </div>
          )}
          {service.tag && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_10px_32px_-26px_oklch(0.55_0.15_260/_0.7)]">
              {service.tag}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-950 group-hover:text-sky-600 transition-colors mb-2 break-words" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
            {service.title}
          </h4>
          <p className="leading-relaxed text-slate-800 line-clamp-3 font-medium" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>
            {service.teaser}
          </p>
        </div>
        <div className="mt-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-20px_oklch(0.55_0.15_260/_0.4)] transition-all group-hover:bg-primary/90 group-hover:scale-[1.02]">
            Mehr erfahren
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)
  const [galleryServiceId, setGalleryServiceId] = useState<string | null>(null)
  const imageTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const specialServices = services.filter((s) => s.category === "special")

  return (
    <main className="space-y-0 bg-background text-foreground">
      <HeroSection />

      {/* Location Cards */}
      <LocationCards />

      <NewsSection />

      <section className="bg-slate-50 py-16 lg:py-24">
        <FAQSectionWithTabs categories={faqCategories} />
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" asChild className="rounded-full px-8 font-bold border-primary text-primary hover:bg-primary/10">
            <Link href="/faq">Alle FAQs ansehen</Link>
          </Button>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,oklch(0.92_0.05_260/_0.26),transparent_35%),radial-gradient(circle_at_90%_10%,oklch(0.82_0.12_260/_0.22),transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Leistungen im Überblick
            </p>
            <h2 className="mt-4 font-bold leading-tight text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
              Therapieangebote mit spürbarer Nähe
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.7' }}>
              Wir arbeiten evidenzbasiert und alltagsnah – mit individuellen
              Trainingsplänen und enger Abstimmung mit Ärzten, Pädagogen und
              Angehörigen.
            </p>
          </div>

          <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:flex-wrap md:justify-center md:gap-6 md:pb-0 md:mx-0 md:px-0 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {specialServices.map((service) => (
              <Link
                key={service.id}
                href={`/therapieangebote#${service.id}`}
                className="w-[85vw] flex-none snap-center md:w-[calc(50%-0.75rem)] group relative flex flex-col"
              >
                <ServiceCardWithScrollAnimation
                  service={service}
                  onClick={() => { }}
                />
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4">
            <Button size="lg" asChild className="rounded-full px-8 shadow-lg shadow-sky-100 font-bold">
              <Link href="/therapieangebote">Therapieangebote entdecken</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 font-bold">
              <Link href="/leistungen">Alle Fachbereiche ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal für spezielle Leistungen */}
      <Modal
        isOpen={selectedServiceId !== null}
        onClose={() => {
          setSelectedServiceId(null)
          setGalleryServiceId(null)
        }}
        maxWidth="6xl"
      >
        {selectedServiceId && (() => {
          const service = specialServices.find((s) => s.id === selectedServiceId)!
          const galleryImages = getServiceImages(service.id, service.image)
          const hasMultipleImages = galleryImages.length > 1

          const handleImageLongPress = () => {
            setGalleryServiceId(service.id)
          }

          const handleImagePointerDown = () => {
            imageTimeoutRef.current = setTimeout(() => {
              handleImageLongPress()
            }, 500)
          }

          const handleImagePointerUp = () => {
            if (imageTimeoutRef.current) {
              clearTimeout(imageTimeoutRef.current)
            }
          }

          return (
            <div className="max-h-[90vh] overflow-y-auto p-0">
              <div className="grid lg:grid-cols-[400px_1fr]">
                {/* Left Side: Visuals */}
                <div className="bg-slate-50/50 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col">
                  <div
                    className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-[24px] shadow-md transition-all hover:shadow-xl group"
                    onPointerDown={handleImagePointerDown}
                    onPointerUp={handleImagePointerUp}
                    onPointerLeave={handleImagePointerUp}
                    onClick={() => setGalleryServiceId(service.id)}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 400px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                    {/* Gallery Hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-primary shadow-2xl backdrop-blur-sm">
                        <ZoomIn className="h-4 w-4" />
                        Bildergalerie öffnen
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    {hasMultipleImages && (
                      <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary/60">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        Mehrere Bilder verfügbar
                      </div>
                    )}
                    <h3 id="modal-title" className="font-bold text-slate-950 leading-tight text-2xl lg:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col p-6 lg:p-10">
                  <p className="text-lg leading-relaxed text-slate-700 mb-6 font-medium">
                    {service.description}
                  </p>

                  {service.longDescription && (
                    <p className="leading-relaxed text-slate-700 mb-8" style={{ fontSize: '1rem' }}>
                      {service.longDescription}
                    </p>
                  )}

                  {service.details.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-bold uppercase tracking-wider text-primary text-xs">
                        Therapeutische Schwerpunkte
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-1">
                        {service.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 py-1 text-sm text-slate-600"
                          >
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* FAQs Accordion */}
                  {service.faqs && service.faqs.length > 0 && (
                    <div className="pt-8 mt-4 border-t border-slate-100">
                      <p className="mb-4 font-bold uppercase tracking-wider text-primary text-xs">Häufige Fragen</p>
                      <Accordion type="single" collapsible className="w-full">
                        {service.faqs.map((faq, idx) => (
                          <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-100">
                            <AccordionTrigger className="text-slate-900 font-semibold hover:text-primary hover:no-underline text-left text-sm py-3">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed text-sm">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}

                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-8 font-bold shadow-lg shadow-primary/20">
                      <Link href="/praxis">Beratung anfragen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}
      </Modal>

      {/* Gallery Modal für spezielle Leistungen */}
      {galleryServiceId && (() => {
        const service = specialServices.find((s) => s.id === galleryServiceId)!
        const galleryImages = getServiceImages(service.id, service.image)

        return (
          <ImageGallery
            images={galleryImages}
            initialIndex={0}
            title={service.title}
            onClose={() => setGalleryServiceId(null)}
          />
        )
      })()}

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/70 via-white to-background py-14">
        <div className="pointer-events-none absolute inset-0 logo-watermark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Warum wir
              </p>
              <h2 className="font-semibold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                Klar strukturiert, warm begleitet
              </h2>
              <p className="max-w-2xl leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
                Unsere Praxis verbindet klare Prozesse mit Empathie. Wir planen
                Therapieeinheiten transparent, stimmen uns mit Ärzt/innen ab und
                schaffen Räume, die Ruhe geben.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="font-bold">
                  <Link href="/team">Team kennenlernen</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-white/80 text-primary hover:bg-primary/10 font-bold"
                >
                  <Link href="/praxis">Kontakt</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Therapie mit Plan",
                  description:
                    "Transparente Ziele, kurze Wartezeiten und verständliche Dokumentation für alle Beteiligten.",
                },
                {
                  title: "Sanfte Räume",
                  description:
                    "Helle Farben, gebogene Formen und ruhige Wartebereiche laden zum Durchatmen ein.",
                },
                {
                  title: "Interdisziplinär",
                  description:
                    "Enge Zusammenarbeit mit Ärzten, Frühförderstellen, Schulen und Kliniken.",
                },
                {
                  title: "Familiennah",
                  description:
                    "Wir hören zu, geben Alltagstipps und beziehen Angehörige aktiv mit ein.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="ring-1 ring-white/60 bg-white/92 p-5 shadow-[0_22px_90px_-70px_oklch(0.55_0.15_260/_0.65)]"
                >
                  <CardTitle className="text-lg text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardContent className="px-0">
                    <CardDescription className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-20 bg-slate-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.92_0.05_260/_0.35),transparent_30%),radial-gradient(circle_at_85%_15%,oklch(0.82_0.12_260/_0.25),transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 lg:p-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-6">
              Nächster Schritt
            </p>
            <h2 className="font-bold leading-tight text-slate-950 mb-8" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
              Wir finden einen Termin,<br /> der zu Ihnen passt
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-slate-800 mb-12" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.7' }}>
              Schreiben Sie uns eine kurze Nachricht oder rufen Sie an. Wir
              melden uns mit einem Terminvorschlag und allen Infos zur
              Verordnung.
            </p>

            <div className="flex justify-center">
              <Link href="/praxis">
                <Button size="lg" className="h-14 rounded-full px-10 text-lg shadow-xl shadow-sky-100 font-bold">Kontakt</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
