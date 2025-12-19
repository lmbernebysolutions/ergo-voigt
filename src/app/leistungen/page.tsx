"use client"

import { Check } from "lucide-react"
import { ServiceGrid } from "@/components/sections/ServiceGrid"
import { services } from "@/data/services"
import { faqs } from "@/data/faq"
import { FAQSectionWithTabs } from "@/components/sections/FAQSectionWithTabs"
import { faqCategories } from "@/data/faq"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const detailCards = [
  {
    icon: Check,
    title: "Koordiniert mit Ärzten",
    description:
      "Wir sprechen mit verordnenden Ärzt:innen, Reha-Teams und Schulen, um Ziele abzustimmen und Wartezeiten kurz zu halten.",
    tag: "Netzwerk",
  },
  {
    icon: Check,
    title: "Sanfte Räume",
    description:
      "Pastellblaue Akzente, viel Tageslicht und runde Formen schaffen Sicherheit und Ruhe während der Therapie.",
    tag: "Atmosphäre",
  },
  {
    icon: Check,
    title: "Messbare Fortschritte",
    description:
      "Transparente Dokumentation und Zwischenauswertungen – so sehen Sie, was sich im Alltag verändert.",
    tag: "Transparenz",
  },
]

export default function LeistungenPage() {
  return (
    <main className="bg-background text-foreground">
      <header className="relative overflow-hidden bg-gradient-to-br from-secondary/90 via-white to-background pb-12 pt-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 orb-sheen" />
        <div className="pointer-events-none absolute inset-0 logo-watermark-soft" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Leistungen
          </p>
          <h1 className="mt-3 font-semibold text-slate-950" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}>
            Der Mensch steht bei uns im Mittelpunkt
          </h1>
          <p className="mt-4 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Unser Leitbild: Fähigkeiten fördern und Lebensqualität verbessern. Selbstversorgung und Produktivität steigern. Mit alltagsnahen, individuellen Therapiezielen, wöchentlichen Dienstberatungen mit internen Weiterbildungen und regelmäßiger Teilnahme an berufsbezogenen Fortbildungen.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" asChild className="font-bold">
              <a href="#kontakt-hinweis">Termin anfragen</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceGrid 
          services={services.filter(s => s.category === "standard")} 
          title="Fachbereiche"
          subtitle="Unsere Kernkompetenzen für Ihre Gesundheit."
        />

        <div className="my-12 md:my-16 lg:my-20">
          <FAQSectionWithTabs categories={faqCategories} />
        </div>
      </div>

      <section
        id="kontakt-hinweis"
        className="relative overflow-hidden bg-gradient-to-r from-secondary/70 via-white to-secondary/70 py-12 md:py-16 lg:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,oklch(0.92_0.05_260/_0.35),transparent_35%),radial-gradient(circle_at_85%_10%,oklch(0.82_0.12_260/_0.25),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 logo-watermark-soft" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Gut zu wissen
              </p>
              <h2 className="font-semibold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                Kooperation und Austausch
              </h2>
              <p className="max-w-2xl leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
                Wir arbeiten eng zusammen mit behandelnden Ärzten, Psychotherapeuten, Optometristen, Osteopathen und Frühförderstellen. Zusätzlich pflegen wir die Zusammenarbeit mit logopädischen und physiotherapeutischen Praxen für eine ganzheitliche Betreuung.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="font-bold">
                  <a href="/praxis">Kontakt</a>
                </Button>
                <Button
                  variant="secondary"
                  asChild
                  className="bg-white/80 text-primary hover:bg-primary/10 font-bold"
                >
                  <a href="/team">Team kennenlernen</a>
                </Button>
              </div>
            </div>
            <Card className="relative overflow-hidden rounded-3xl bg-white/95 p-10 shadow-[0_22px_90px_-60px_oklch(0.55_0.15_260/_0.68)] ring-1 ring-white/55 transition hover:shadow-[0_26px_110px_-70px_oklch(0.55_0.15_260/_0.8)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.96_0.04_260/_0.5),transparent_38%),radial-gradient(circle_at_80%_0%,oklch(0.86_0.12_260/_0.22),transparent_28%)]" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-primary shadow-[0_8px_24px_-12px_oklch(0.55_0.15_260/_0.5)]">
                    <Check className="size-8" strokeWidth={2.5} aria-hidden />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {detailCards
                        .filter((card) => card.tag !== "Netzwerk")
                        .map((card) => (
                          <span
                            key={card.tag}
                            className="inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_10px_32px_-26px_oklch(0.55_0.15_260/_0.7)] whitespace-nowrap"
                          >
                            {card.tag}
                          </span>
              ))}
            </div>
                    <h3 className="font-semibold leading-tight text-slate-950 mb-4" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>
                      Unsere Arbeitsweise
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Koordiniert mit Ärzten:</strong>{" "}
                    {detailCards[0].description}
                  </p>
                  <p>
                    <strong className="text-foreground">Sanfte Räume:</strong>{" "}
                    {detailCards[1].description}
                  </p>
                  <p>
                    <strong className="text-foreground">Messbare Fortschritte:</strong>{" "}
                    {detailCards[2].description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
