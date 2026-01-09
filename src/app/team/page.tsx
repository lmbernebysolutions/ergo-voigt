import { TeamGrid } from "@/components/sections/TeamGrid"
import { teamMembers } from "@/data/team"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TeamPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden pb-12 pt-10 md:pb-16 min-h-[60vh] flex flex-col justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/team/team-hero-bg.png"
            alt="Hintergrund Team"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
          {/* Brand-Consistent Overlay for Legibility */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/90" />
        </div>

        <div className="pointer-events-none absolute inset-0 orb-sheen z-0 opacity-40" />
        {/* Watermark Logo Twist (Top Right, -12deg) */}
        <div className="pointer-events-none absolute -top-24 -right-24 z-0 opacity-[0.18] -rotate-12 mix-blend-overlay select-none hidden lg:block">
          <img src="/logo.png" alt="" className="w-[600px] h-[600px] object-contain" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90 drop-shadow-md">
            Team
          </p>
          <h1 className="mt-3 font-semibold text-white drop-shadow-lg" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}>
            Wir begleiten mit Fachwissen,<br/> Klarheit und Humor
          </h1>
          <p className="mt-4 leading-relaxed text-white/95 font-medium drop-shadow-md max-w-3xl mx-auto" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Unser Team vereint Kompetenz mit langjähriger Erfahrung. Auch die Angehörigenarbeit ist ein wichtiger Bestandteil unserer Arbeit. Wir bilden uns kontinuierlich fort und arbeiten nach abgestimmten Qualitätsstandards.
          </p>
        </div>
        <div className="relative mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/95 p-6 shadow-[0_28px_110px_-78px_oklch(0.55_0.15_260/_0.7)] ring-1 ring-white/60 backdrop-blur-sm">
            <CardTitle className="text-primary" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>
              Leitlinien unserer Zusammenarbeit
            </CardTitle>
            <CardContent className="px-0">
              <CardDescription className="mt-2 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>
                Fähigkeiten fördern und Lebensqualität verbessern. Selbstversorgung und Produktivität steigern. Mit alltagsnahen, individuellen Therapiezielen, wöchentlichen Dienstberatungen mit internen Weiterbildungen und regelmäßiger Teilnahme an berufsbezogenen Fortbildungen.
              </CardDescription>
              <ul className="mt-4 grid gap-3 text-sm text-foreground sm:grid-cols-2">
                {[
                  "Regelmäßige interne Supervision & Fortbildungen",
                  "Strukturierte Einarbeitung neuer Kolleg/innen",
                  "Interdisziplinäre Abstimmungen mit Ärzten & Pädagogen",
                  "Ruhige Räume mit weichen Farben und viel Licht",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-secondary/60 px-4 py-3 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <TeamGrid members={teamMembers} />
      </div>

      <section className="relative overflow-hidden py-16 lg:py-20 bg-slate-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.92_0.05_260/_0.35),transparent_30%),radial-gradient(circle_at_85%_15%,oklch(0.82_0.12_260/_0.25),transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[40px] bg-white p-12 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 lg:p-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-6">
              Kontakt
            </p>
            <h2 className="font-bold leading-tight text-slate-950 mb-8" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
              Wir sind für Sie da
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-slate-800 mb-12" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.7' }}>
              Sie haben Fragen zu unseren Therapeuten oder möchten einen Termin vereinbaren? Melden Sie sich gerne bei uns.
            </p>

            <div className="flex justify-center">
              <Link href="/praxis">
                <Button size="lg" className="h-14 rounded-full px-10 text-lg shadow-xl shadow-sky-100 font-bold">Termin vereinbaren</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
