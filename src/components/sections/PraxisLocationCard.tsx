"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, ArrowUpRight, ZoomIn, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getLocationImages } from "@/lib/locationImages"
import { Location } from "@/data/locations"

interface PraxisLocationCardProps {
  location: Location
  onOpenModal: () => void
  onOpenGallery: () => void
  googleProfile: { embed: string; google: string; apple: string }
}

export function PraxisLocationCard({ 
  location, 
  onOpenModal, 
  onOpenGallery,
  googleProfile 
}: PraxisLocationCardProps) {
  const [isMapMenuOpen, setIsMapMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const locationImages = getLocationImages(location.id)
  const mainImage = locationImages[0] || "/Aue/Auepraxis1.webp"

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMapMenuOpen(false)
      }
    }
    if (isMapMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMapMenuOpen])

  return (
    <Card
      className="group relative overflow-visible border-0 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-100/50 hover:-translate-y-2 cursor-pointer bg-white"
      onClick={onOpenModal}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpenModal()
        }
      }}
    >
      <div className="grid grid-cols-1 gap-6">
        {/* Bild-Sektion */}
        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <div
            className="relative h-full w-full cursor-pointer group/image"
            onClick={(e) => {
              e.stopPropagation()
              onOpenGallery()
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
            
            {/* Click Hint */}
            {locationImages.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
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
        <div className="relative flex flex-col gap-4 p-6 pt-0 justify-start">
          {/* Partner Button (Absolute Top Right of Content) */}
          {location.extraInfo && (
            <a
              href={location.extraInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-6 -top-6 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white p-1 shadow-sm transition-transform hover:scale-105 hover:shadow-md group/partner"
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
            {/* Address with Map Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMapMenuOpen(!isMapMenuOpen)
                }}
                className="flex items-start gap-3 w-full text-left rounded-lg p-2 -ml-2 hover:bg-slate-50 transition-colors group/map"
              >
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover/map:text-blue-600 transition-colors" />
                <div>
                  <p className="font-medium text-slate-900 text-sm group-hover/map:text-blue-700 transition-colors">
                    {location.address.street}
                  </p>
                  <p className="text-slate-600 text-sm group-hover/map:text-blue-600/80 transition-colors">
                    {location.address.zip} {location.address.city}
                  </p>
                </div>
              </button>

              {/* Map Selection Menu */}
              {isMapMenuOpen && (
                <div 
                  className="absolute left-0 top-full z-30 mt-2 w-48 flex flex-col gap-1.5 rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-100 animate-in slide-in-from-top-2 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Öffnen mit
                  </div>
                  <a 
                    href={googleProfile.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[#4285F4] transition-colors"
                    onClick={() => setIsMapMenuOpen(false)}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google Maps
                  </a>
                  <a 
                    href={googleProfile.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    onClick={() => setIsMapMenuOpen(false)}
                  >
                    <svg viewBox="0 0 384 512" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                    Apple Maps
                  </a>
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors w-full">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a
                href={`tel:${location.phone.replace(/\s/g, "")}`}
                className="text-slate-700 hover:text-primary transition-colors text-sm font-medium w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {location.phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors w-full">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a
                href={`mailto:${location.email}`}
                className="text-slate-700 hover:text-primary transition-colors text-sm break-all w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {location.email}
              </a>
            </div>
          </div>

          {/* Hinweistext */}
          <div className="mt-auto pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center">
              Details ansehen
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
