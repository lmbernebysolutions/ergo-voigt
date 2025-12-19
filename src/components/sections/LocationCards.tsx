import Link from "next/link"
import { MapPin, Phone, ArrowRight } from "lucide-react"
import { InfoCard } from "@/components/ui/InfoCard"
import { locations } from "@/data/locations"

export function LocationCards() {
  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            Wir sind für Sie da – an 3 Standorten
          </h2>
          <p className="mt-4 text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Finden Sie die Praxis in Ihrer Nähe im Erzgebirge.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-3">
          {locations.map((location) => (
            <Link key={location.id} href={`/praxis?standort=${location.id}`} className="group">
              <InfoCard className="h-full flex flex-col items-start gap-4 hover:border-sky-100 hover:ring-2 hover:ring-sky-100 hover:ring-offset-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <MapPin className="h-6 w-6" />
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-950 group-hover:text-sky-700 transition-colors" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                    {location.name}
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
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500 text-center">
                    Klicken Sie hier für mehr Informationen
                  </p>
                </div>
              </InfoCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
