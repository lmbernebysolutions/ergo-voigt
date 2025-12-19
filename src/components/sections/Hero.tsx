import Link from "next/link"
import { ArrowRight, HeartHandshake, Stethoscope, Waves } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/80 via-background to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-sheen absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,oklch(0.9_0.1_260/_0.32),transparent_38%),radial-gradient(circle_at_80%_5%,oklch(0.84_0.12_260/_0.24),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/12 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,oklch(0.78_0.1_260/_0.28),transparent_52%),radial-gradient(ellipse_at_30%_60%,oklch(0.94_0.05_260/_0.3),transparent_46%)] mix-blend-soft-light opacity-80" />
        <div className="absolute inset-x-0 -bottom-32 h-[320px] bg-[radial-gradient(ellipse_at_center,oklch(0.96_0.02_260/_0.8),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-[0_12px_40px_-28px_oklch(0.55_0.15_260/_0.8)]">
            Ganzheitliche Ergotherapie seit 2009
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Selbstständigkeit stärken, Schritt für Schritt – mit Ergotherapie,
              die Nähe zeigt.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Wir begleiten Kinder, Jugendliche und Erwachsene mit viel Herz,
              moderner Therapie und klaren Zielen. In unserer Praxis in Leipzig
              empfangen wir Sie in vertrauensvoller Atmosphäre.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/praxis">
                Termin anfragen
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white/80 text-primary hover:bg-primary/10"
            >
              <Link href="/leistungen">Leistungen ansehen</Link>
            </Button>
          </div>

          <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                label: "Familiäre Begleitung",
                detail: "Therapiepläne, die Eltern & Angehörige einbinden",
              },
              {
                icon: Stethoscope,
                label: "Interdisziplinär",
                detail: "Kooperation mit Ärzten, Schulen & Reha-Partnern",
              },
              {
                icon: Waves,
                label: "Sanfte Atmosphäre",
                detail: "Ruhige Räume, viel Licht und warme Blautöne",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_26px_80px_-60px_oklch(0.55_0.15_260/_0.72)]"
              >
                <item.icon className="mt-1 size-5 text-primary" aria-hidden />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 size-28 rounded-full bg-primary/12 blur-2xl" />
          <div className="absolute -right-10 bottom-10 size-32 rounded-full bg-secondary/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/90 p-6 shadow-[0_34px_130px_-70px_oklch(0.55_0.15_260/_0.7)] backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Praxisblick
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  Ankommen & wohlfühlen
                </p>
              </div>
              <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Leipzig-Mockau
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-secondary/70 px-4 py-3 text-sm font-medium text-foreground">
                <span>Handtherapie & Neurologie</span>
                <span className="text-primary">schmerzfrei greifen lernen</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-medium text-foreground shadow-[0_18px_60px_-45px_oklch(0.55_0.15_260/_0.35)]">
                <span>Pädiatrie & Wahrnehmung</span>
                <span className="text-primary">spielen, fühlen, wachsen</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-secondary/70 px-4 py-3 text-sm font-medium text-foreground">
                <span>Hausbesuche & Pflege</span>
                <span className="text-primary">mobil & empathisch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ArcDivider() {
  return (
    <div className="relative -mt-10 h-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-[-12%] top-0 h-28 rounded-[120px] bg-[radial-gradient(ellipse_at_50%_120%,oklch(0.96_0.02_260/_0.9),transparent_70%)] opacity-75" />
      <div className="absolute left-1/2 top-4 h-24 w-[155%] -translate-x-1/2 rounded-[120px] bg-gradient-to-b from-primary/14 via-secondary/50 to-transparent blur-[3px]" />
      <div className="absolute left-1/2 top-10 h-24 w-[135%] -translate-x-1/2 rotate-1 rounded-[120px] bg-[radial-gradient(ellipse_at_center,oklch(0.86_0.08_260/_0.2),transparent_62%)] opacity-70" />
    </div>
  )
}
