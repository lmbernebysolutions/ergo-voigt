import Link from "next/link"
import Image from "next/image" // Added Image import
import { MapPin, Phone, ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react" // Added ExternalLink
import { InfoCard } from "@/components/ui/InfoCard"
import { locations } from "@/data/locations"

export function LocationCards() {
  return (
    <section className="bg-slate-50 py-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            Wir sind für Sie da – an 3 Standorten
          </h2>
          <p className="mt-4 text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Finden Sie die Praxis in Ihrer Nähe im Erzgebirge.
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:grid md:gap-6 lg:gap-8 md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {locations.map((location) => (
            <div key={location.id} className="w-[85vw] flex-none snap-center group relative h-full">
              <InfoCard className="relative h-full flex flex-col items-start gap-4 hover:border-sky-100 hover:ring-2 hover:ring-sky-100 hover:ring-offset-2">
                {/* Partner Button (Absolute Top Right) */}
                {location.extraInfo && (
                  <a
                    href={location.extraInfo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-6 top-6 z-20 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-white p-1 shadow-md transition-transform hover:scale-105 hover:shadow-lg group/partner"
                    title={location.extraInfo.title}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      {location.extraInfo.logo && (
                        <Image
                          src={location.extraInfo.logo}
                          alt="Partner Logo"
                          fill
                          className="object-contain p-1"
                        />
                      )}
                    </div>
                    <ArrowUpRight className="absolute right-0.5 top-0.5 h-3.5 w-3.5 text-slate-400 transition-colors group-hover/partner:text-primary" />
                  </a>
                )}

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <MapPin className="h-6 w-6" />
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-950 group-hover:text-sky-700 transition-colors" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                    <Link href={`/praxis?standort=${location.id}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {location.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-slate-800" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>
                    {location.address.street}<br />
                    {location.address.zip} {location.address.city}
                  </p>
                </div>

                <div className="mt-auto flex w-full items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-sky-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </div>

                {/* Hinweistext */}
                <div className="mt-2 pt-2 border-t border-slate-100 w-full">
                  <p className="text-sm text-slate-500 text-center">
                    Klicken Sie hier für mehr Informationen
                  </p>
                </div>
              </InfoCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
