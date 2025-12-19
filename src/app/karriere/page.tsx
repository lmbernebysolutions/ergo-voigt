import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    title: "Arbeitszeit & Freiheit",
    description:
      "Flexible Arbeitszeiten, Teilzeitmodelle und verlässliche Pausen. Hausbesuche planen wir gemeinsam.",
  },
  {
    title: "Fortbildung & Supervision",
    description:
      "Jährliches Fortbildungsbudget, interne Hospitationen und regelmäßige Supervisionen.",
  },
  {
    title: "Teamkultur",
    description:
      "Kurze Wege, wertschätzendes Miteinander, offene Fehlerkultur und viel Humor.",
  },
  {
    title: "Ausstattung",
    description:
      "Moderne Therapieausstattung, digitale Dokumentation, lichtdurchflutete Räume mit weichen Farben.",
  },
]

export default function KarrierePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/75 via-white to-background pb-12 pt-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 orb-sheen" />
        <div className="pointer-events-none absolute inset-0 warm-orb" />
        <div className="pointer-events-none absolute inset-0 logo-arc-watermark" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Karriere
          </p>
          <h1 className="mt-3 font-semibold text-slate-950" style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}>
            Werde Teil unseres Teams
          </h1>
          <p className="mt-4 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Wir suchen Ergotherapeut:innen, die empathisch, neugierig und
            teamorientiert arbeiten möchten. Auch Berufseinsteiger:innen sind
            willkommen.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild className="font-bold">
              <a href="mailto:karriere@ergotherapie-voigt.de">
                Initiativ bewerben
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-6xl px-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <Card
                key={item.title}
                className="border border-white/60 bg-white/95 p-4 md:p-6 shadow-[0_32px_110px_-78px_oklch(0.55_0.15_260/_0.8)]"
              >
                <CardTitle className="text-foreground" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                  {item.title}
                </CardTitle>
                <CardContent className="px-0">
                  <CardDescription className="mt-2 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: '1.65' }}>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 md:mt-8 rounded-[28px] border border-white/60 bg-primary/8 p-4 md:p-6 text-left shadow-[0_30px_110px_-80px_oklch(0.55_0.15_260/_0.65)]">
            <h2 className="font-semibold text-foreground" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
              Deine Bewerbung
            </h2>
            <p className="mt-2 leading-relaxed text-slate-800" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: '1.65' }}>
              Schick uns kurz deinen Lebenslauf, Startdatum und deine
              Schwerpunkte. Wir melden uns schnell mit einem Kennenlerntermin –
              digital oder vor Ort.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
