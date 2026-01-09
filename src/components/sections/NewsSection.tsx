"use client"

import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const news = [
  {
    date: "15. Jan 2024",
    title: "Neue Kurse für Progressive Muskelrelaxation",
    description: "Ab Februar starten wieder neue Präventionskurse. Sichern Sie sich jetzt Ihren Platz.",
  },
  {
    date: "02. Jan 2024",
    title: "Wir suchen Verstärkung!",
    description: "Unser Team in Aue wächst. Bewerben Sie sich jetzt als Ergotherapeut/in.",
  },
  {
    date: "20. Dez 2023",
    title: "Frohe Weihnachten",
    description: "Wir wünschen all unseren Patienten und Partnern ein besinnliches Fest.",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Neuigkeiten
          </p>
          <h2 className="mt-4 font-bold leading-tight text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            Aktuelles aus unseren Praxen
          </h2>
        </div>

        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:grid md:gap-6 md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {news.map((item, index) => (
            <div key={index} className="w-[85vw] max-w-[350px] md:max-w-none md:w-auto flex-none snap-center">
              <Card className="h-full bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
