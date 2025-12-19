import { TeamGrid } from "@/components/sections/TeamGrid"
import { teamMembers } from "@/data/team"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/80 via-white to-background pb-12 pt-10 md:pb-16">
        <div className="pointer-events-none absolute inset-0 orb-sheen" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Team
          </p>
          <h1 className="mt-3 font-semibold text-slate-950" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}>
            Wir begleiten mit Ruhe, Klarheit und Humor
          </h1>
          <p className="mt-4 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Unser Team vereint Handtherapie, Pädiatrie, Neurologie und viel
            Erfahrung mit Angehörigenarbeit. Wir bilden uns kontinuierlich fort
            und arbeiten nach abgestimmten Qualitätsstandards.
          </p>
        </div>
        <div className="relative mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/96 p-6 shadow-[0_28px_110px_-78px_oklch(0.55_0.15_260/_0.7)] ring-1 ring-white/60">
            <CardTitle className="text-foreground" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>
              Leitlinien unserer Zusammenarbeit
            </CardTitle>
            <CardContent className="px-0">
              <CardDescription className="mt-2 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>
                Fähigkeiten fördern und Lebensqualität verbessern. Selbstversorgung und Produktivität steigern. Mit alltagsnahen, individuellen Therapiezielen, wöchentlichen Dienstberatungen mit internen Weiterbildungen und regelmäßiger Teilnahme an berufsbezogenen Fortbildungen.
              </CardDescription>
              <ul className="mt-4 grid gap-3 text-sm text-foreground sm:grid-cols-2">
                {[
                  "Regelmäßige interne Supervision & Fortbildungen",
                  "Strukturierte Einarbeitung neuer Kolleg:innen",
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
    </main>
  )
}
