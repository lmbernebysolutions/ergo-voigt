import Link from "next/link"

const praxisLinks = [
  { label: "Praxis", href: "/praxis" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Therapieangebote", href: "/therapieangebote" },
  { label: "Team", href: "/team" },
  { label: "Kontakt", href: "/praxis" },
]

const legalLinks = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "Barrierefreiheit", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-secondary/60 py-16">
      <div className="pointer-events-none absolute inset-0 logo-watermark" />
      <div className="pointer-events-none absolute inset-0 orb-overlay opacity-80" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 shadow-[0_12px_40px_-24px_oklch(0.55_0.15_260/_0.8)]">
              <img
                src="/logo.png"
                alt="Logo Ergotherapie Anne-Karen Voigt"
                className="h-10 w-10 object-contain lg:h-12 lg:w-12"
              />
            </div>
            <div className="leading-tight">
              <div className="font-bold tracking-tight text-foreground" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                Ergotherapie Voigt
              </div>
              <div className="font-semibold uppercase tracking-[0.28em] text-primary" style={{ fontSize: 'clamp(0.6875rem, 1.5vw, 0.6875rem)' }}>
                Erzgebirge
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-800 space-y-4">
            <div>
              <p className="font-semibold text-foreground">Praxis Aue</p>
              <p>Altmarkt 5</p>
              <p>08280 Aue-Bad Schlema</p>
              <p className="text-xs mt-1">Tel: 03771 3406810</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Praxis Schwarzenberg</p>
              <p>Robert-Koch-Straße 16a</p>
              <p>08340 Schwarzenberg</p>
              <p className="text-xs mt-1">Tel: 03774 178954</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Praxis Lößnitz</p>
              <p>Heinestraße 1</p>
              <p>08294 Lößnitz</p>
              <p className="text-xs mt-1">Tel: 03771 440452</p>
            </div>
            <div className="pt-2">
              <p>E-Mail: thera@ergo-voigt.de</p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:col-span-2 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
              Praxis Links
            </h3>
            <ul className="space-y-3 text-sm text-foreground">
              {praxisLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-full px-2 py-1 transition hover:bg-primary/10 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
              Rechtliches
            </h3>
            <ul className="space-y-3 text-sm text-foreground">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-full px-2 py-1 transition hover:bg-primary/10 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
