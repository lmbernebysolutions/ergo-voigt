"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ZoomIn } from "lucide-react"
import { Service } from "@/data/services"
import { cn } from "@/lib/utils"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { getServiceImages } from "@/lib/serviceImages"

interface ServiceGridProps {
  services: Service[]
  title: string
  subtitle?: string
}

function ServiceCardWithScrollAnimation({
  service,
  onClick,
}: {
  service: Service
  onClick: () => void
}) {
  return (
    <div
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
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-all md:hover:shadow-2xl md:hover:shadow-sky-100/50 md:hover:-translate-y-1 ring-1 ring-white/55 focus:outline-none focus:ring-4 focus:ring-primary/50 h-full flex flex-col"
      )}
    >
      {/* Background Image - Static for simplicity as per requirement to fix glitch, or keep if stable. Keeping simple for now to ensure robustness */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover opacity-[0.08] group-hover:scale-105 transition-transform duration-700"
          aria-hidden="true"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Blue Orbs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.96_0.04_260/_0.5),transparent_38%),radial-gradient(circle_at_80%_0%,oklch(0.86_0.12_260/_0.22),transparent_28%)]" />

      {/* Content */}
      <div className="relative p-7 min-h-[200px] flex flex-col justify-between z-10">
        {service.icon && (
          <div className="flex items-center gap-3 mb-5">
            <div className="flex size-14 items-center justify-center rounded-full bg-blue-100 text-primary shadow-[0_8px_24px_-12px_oklch(0.55_0.15_260/_0.5)]">
              <service.icon className="size-7" strokeWidth={2.5} aria-hidden />
            </div>
            {service.tag && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_10px_32px_-26px_oklch(0.55_0.15_260/_0.7)]">
                {service.tag}
              </span>
            )}
          </div>
        )}
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

export function ServiceGrid({ services, title, subtitle }: ServiceGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [galleryServiceId, setGalleryServiceId] = useState<string | null>(null)

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="mb-6 md:mb-8 lg:mb-10 text-center">
        <h3 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>{title}</h3>
        {subtitle && <p className="mt-2 text-slate-800" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>{subtitle}</p>}
      </div>

      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:flex-wrap md:justify-center md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {services.map((service) => (
          <div key={service.id} className="w-[85vw] flex-none snap-center md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)]">
            <ServiceCardWithScrollAnimation
              service={service}
              onClick={() => setSelectedId(service.id)}
            />
          </div>
        ))}
      </div>

      {/* Modal - Redesigned to match Therapieangebote */}
      <Modal
        isOpen={selectedId !== null}
        onClose={() => {
          setSelectedId(null)
          setGalleryServiceId(null)
        }}
        maxWidth="4xl"
      >
        {selectedId && (() => {
          const service = services.find((s) => s.id === selectedId)!
          const galleryImages = getServiceImages(service.id, service.image)
          const hasMultipleImages = galleryImages.length > 1
          const Icon = service.icon

          return (
            <div className="max-h-[90vh] overflow-y-auto p-0">
              <div className="grid lg:grid-cols-[320px_1fr]">
                {/* Left Side: Visuals & Title & Details */}
                <div className="bg-slate-50/50 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-start">
                  <div>
                    <div
                      className="group/img relative aspect-[4/3] w-full md:w-[70%] lg:w-full mx-auto lg:mx-0 cursor-pointer overflow-hidden rounded-[24px] shadow-md transition-all hover:shadow-xl group-hover:shadow-primary/10"
                      onClick={() => setGalleryServiceId(service.id)}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                      {/* Gallery Hint - Clickable Button style */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover/img:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-primary shadow-2xl backdrop-blur-sm">
                          <ZoomIn className="h-4 w-4" />
                          Bildergalerie
                        </div>
                      </div>
                    </div>

                    {hasMultipleImages && (
                      <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary/60">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        Mehrere Bilder verfügbar
                      </div>
                    )}
                  </div>

                  {/* Details / Anwendungsbereiche (Moved to Left Side as Tags) */}
                  {service.details.length > 0 && (
                    <div className="mt-8 space-y-3">
                      <p className="font-bold uppercase tracking-wider text-primary text-[10px] lg:text-[11px]">
                        {service.category === 'standard' ? 'Schwerpunkte:' : 'Anwendungsbereiche:'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.details.map((detail, i) => (
                          // If detail is long OR contains a colon (Topic: Description), render as list item style
                          // otherwise as tag
                          (detail.length > 40 || detail.includes(':')) ? (
                             <div key={i} className="flex items-start gap-2 text-xs text-slate-600 w-full mb-1">
                                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                                <span>{detail.split(":")[0]}</span>
                             </div>
                          ) : (
                            <span key={i} className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-100">
                              {detail}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Detailed Content */}
                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                  <div className="space-y-6">
                    <div>
                      {Icon && (
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/10">
                          <Icon className="h-6 w-6" />
                        </div>
                      )}
                      <h2 className="font-bold text-slate-950 leading-tight mb-4" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                        {service.title}
                      </h2>

                      <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 font-medium">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-sm md:text-base leading-relaxed text-slate-700" style={{ fontSize: '0.95rem' }}>
                          {service.longDescription}
                        </p>
                      )}
                    </div>

                    {/* For standard services, we might display the details list more elaborately if they are long descriptions */}
                    {service.details.some(d => d.length > 40) && (
                        <div className="space-y-3 pt-4 border-t border-slate-100">
                            <p className="font-bold uppercase tracking-wider text-primary text-[10px] lg:text-[11px]">Detailinformationen:</p>
                            <ul className="grid gap-2">
                                {service.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                                            <span className="text-[10px] font-bold">{idx + 1}</span>
                                        </div>
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="pt-6">
                      <Button asChild size="default" className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/20">
                        <Link href="/praxis">Termin vereinbaren</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}
      </Modal>

      {/* Gallery Modal */}
      {galleryServiceId && (() => {
        const service = services.find((s) => s.id === galleryServiceId)!
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
    </div>
  )
}
