"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { CheckCircle2, ZoomIn } from "lucide-react"
import { Service } from "@/data/services"
import { cn } from "@/lib/utils"
import { Modal } from "@/components/ui/Modal"
import { BentoCard } from "@/components/sections/BentoCard"
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
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-all md:hover:shadow-2xl md:hover:shadow-sky-100/50 md:hover:-translate-y-1 ring-1 ring-white/55 focus:outline-none focus:ring-4 focus:ring-primary/50"
      )}
    >
      {/* Background Image with Scroll Animation */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isVisible
            ? "opacity-20 scale-100 translate-x-0 z-0"
            : "opacity-[0.03] scale-[1.15] -translate-x-[30%] z-0"
        )}
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Blue Orbs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.96_0.04_260/_0.5),transparent_38%),radial-gradient(circle_at_80%_0%,oklch(0.86_0.12_260/_0.22),transparent_28%)]" />

      {/* Content */}
      <div className="relative p-7 min-h-[200px] flex flex-col justify-between">
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
  const imageTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isSpecial = services.length > 0 && services[0].category === "special"

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="mb-6 md:mb-8 lg:mb-10 text-center">
        <h3 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>{title}</h3>
        {subtitle && <p className="mt-2 text-slate-800" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>{subtitle}</p>}
      </div>

      <div className="grid gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCardWithScrollAnimation
            key={service.id}
            service={service}
            onClick={() => setSelectedId(service.id)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={selectedId !== null}
        onClose={() => {
          setSelectedId(null)
          setGalleryServiceId(null)
        }}
        maxWidth="2xl"
      >
        {selectedId && (() => {
          const service = services.find((s) => s.id === selectedId)!
          const galleryImages = getServiceImages(service.id, service.image)
          
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
            <div className="flex flex-col overflow-y-auto pt-0">
              <div 
                className="relative h-64 shrink-0 w-full group cursor-pointer"
                onPointerDown={handleImagePointerDown}
                onPointerUp={handleImagePointerUp}
                onPointerLeave={handleImagePointerUp}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 id="modal-title" className="font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                    {service.title}
                  </h3>
                </div>
                {/* Long Press Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-lg flex items-center gap-2">
                    <ZoomIn className="w-4 h-4" />
                    Gedrückt halten für Galerie
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
                  {service.description}
                </p>

                {service.details.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 font-semibold text-slate-950" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                      Therapeutische Anwendungsbereiche
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
