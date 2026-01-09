"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet"

const navItems = [
  { label: "Start", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "Praxis", href: "/praxis" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Therapieangebote", href: "/therapieangebote" },
  { label: "Team", href: "/team" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_-26px_oklch(0.55_0.15_260/_0.35)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full pr-3 transition hover:bg-primary/8"
          aria-label="Zur Startseite Ergotherapie Voigt"
        >
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl p-2.5 lg:h-20 lg:w-20 lg:p-3">
            <img
              src="/logo.png"
              alt="Ergotherapie Anne-Karen Voigt Logo"
              className="h-full w-full object-contain transition duration-200 group-hover:scale-105"
            />
          </div>
          <div className="leading-tight">
            <div className="font-bold tracking-tight text-foreground" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}>
              Ergotherapie Voigt
            </div>
            <div className="font-semibold uppercase tracking-[0.28em] text-primary" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
              Praxen im Erzgebirge
            </div>
          </div>
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group relative inline-flex items-center justify-center rounded-full px-3 py-3 min-h-[48px] transition hover:bg-primary/8 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {pathname === item.href ? (
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/10" />
                  ) : null}
                  <span className="relative z-10">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex lg:flex-none">
          <Button asChild className="shadow-[0_12px_30px_-16px_oklch(0.55_0.15_260)] font-bold">
            <Link href="/praxis">Kontakt</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Menü öffnen"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="p-0"
            aria-labelledby="mobile-menu-title"
          >
            <SheetTitle id="mobile-menu-title" className="sr-only">
              Navigation
            </SheetTitle>
            <SheetDescription className="sr-only">
              Hauptnavigation der Website
            </SheetDescription>
            <div className="flex h-full flex-col">
              {/* Header with Logo Only */}
              <div className="flex items-center justify-center border-b border-slate-100 px-6 py-5">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <img
                    src="/logo.png"
                    alt="Ergotherapie Anne-Karen Voigt Logo"
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 min-h-[48px] text-sm font-medium transition-all ${pathname === item.href
                          ? "bg-primary/10 text-primary shadow-sm"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                      >
                        {pathname === item.href && (
                          <div className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>

              {/* Footer CTA */}
              <div className="border-t border-slate-100 p-4">
                <SheetClose asChild>
                  <Button asChild className="w-full shadow-[0_12px_30px_-16px_oklch(0.55_0.15_260)] font-bold">
                    <Link href="/praxis">Kontakt</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
