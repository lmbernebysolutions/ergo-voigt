import Link from "next/link"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { locations } from "@/data/locations"

const navigation = [
  { label: "Praxis", href: "/praxis" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Therapieangebote", href: "/therapieangebote" },
  { label: "Team", href: "/team" },
  { label: "Kontakt", href: "/praxis" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-slate-50 border-t border-slate-200">
      {/* Background Logo Twist */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 z-0 opacity-[0.03] rotate-12 mix-blend-multiply select-none block">
        <img src="/logo.png" alt="" className="w-[600px] h-[600px] object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[1fr_2fr]">
          {/* Brand & Nav */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">
                  Ergotherapie Voigt
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Erzgebirge
                </div>
              </div>
            </div>
            
            <nav className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm ring-1 ring-slate-200 transition-all hover:text-pink-600 hover:shadow-md hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div key={location.id} className="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="font-bold text-slate-900">{location.address.city.split('-')[0].split('/')[0]}</h3>
                
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      {location.address.street}<br />
                      {location.address.zip} {location.address.city}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors font-medium">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors break-all">
                      {location.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Ergotherapie Anne-Karen Voigt. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-slate-900">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-slate-900">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
