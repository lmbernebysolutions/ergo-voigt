"use client"

import { FAQSectionWithTabs } from "@/components/sections/FAQSectionWithTabs"
import { allFaqCategories } from "@/data/allFaqs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-secondary/80 via-white to-background pb-16 pt-24 md:pb-24">
        <div className="pointer-events-none absolute inset-0 orb-sheen" />
        <div className="pointer-events-none absolute inset-0 logo-watermark-soft" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Wissenswertes
          </p>
          <h1 className="mt-4 font-semibold text-slate-950" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
            Häufig gestellte Fragen
          </h1>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.7' }}>
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um die Ergotherapie, 
            Abläufe, Kosten und unsere speziellen Angebote.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQSectionWithTabs categories={allFaqCategories} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.92_0.05_260/_0.35),transparent_30%),radial-gradient(circle_at_85%_15%,oklch(0.82_0.12_260/_0.25),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl text-center px-4">
          <h2 className="font-bold leading-tight text-slate-950 mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Noch Fragen offen?
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-slate-800 mb-10 text-lg">
            Wir sind gerne persönlich für Sie da. Rufen Sie uns an oder schreiben Sie uns eine E-Mail.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild className="rounded-full px-8 text-lg font-bold shadow-lg shadow-sky-100">
              <Link href="/praxis">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
