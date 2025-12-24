"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Heart, Activity, Eye, Zap, Wind, Info, MapPin, ZoomIn } from "lucide-react"
import Image from "next/image"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { services } from "@/data/services"
import { getServiceImages } from "@/lib/serviceImages"

const therapyContent = [
    {
        id: "neurofeedback",
        title: "Neurofeedback (NFB)",
        description: "Eine sehr sanfte und schmerzfreie Therapie zur Messung und Verbesserung der Gehirnaktivität (z.B. Wahrnehmung, Denken, Aufmerksamkeit, Verhalten). Durch audiovisuelles Feedback lernt das Gehirn, seine Selbstregulierungsfähigkeit zu optimieren.",
        longDescription: "Neurofeedback ist eine Methode des Biofeedbacks, bei der Körpersignale und Hirnaktivitäten in Echtzeit über einen Bildschirm rückgemeldet werden. Es wird erfolgreich eingesetzt bei ADHS, Epilepsie, Tinnitus, Migräne und Schlafstörungen.",
        icon: Brain,
        details: ["Anerkannte Therapieform (über Rezept erstattungsfähig)", "Schmerzfrei und ohne bekannte Nebenwirkungen", "Dauer: ca. 45-60 Minuten pro Sitzung"]
    },
    {
        id: "bemer",
        title: "BEMER Therapie",
        description: "Physikalische Gefäßtherapie zur Verbesserung der Mikrozirkulation. Sie fördert die Durchblutung der kleinsten Gefäße und unterstützt so den Nährstoffaustausch und Abtransport von Stoffwechselprodukten.",
        longDescription: "Grundlage vieler chronischer Erkrankungen ist eine gestörte Durchblutung der Kapillaren. Die BEMER Therapie stimuliert die natürliche Pumpbewegung der Gefäße, was zu mehr Antrieb, höherer Leistungsfähigkeit und schnellerer Heilung beitragen kann.",
        icon: Zap,
        details: ["Einsatz bei Schmerzen, Burnout, Wundheilungsstörungen", "Unterstützt körpereigene Selbstheilungskräfte", "Dauer der Ganzkörper-Therapie: ca. 8 Minuten"]
    },
    {
        id: "visualtraining",
        title: "Visualtraining (VT)",
        description: "Individuelles, verhaltensorientiertes Sehtraining zur Verbesserung der Sehkraft, der visuellen Ausdauer und damit der persönlichen Leistungsfähigkeit.",
        longDescription: "Sehen ist ein komplexer Prozess, der Augenmotorik, Fixation, Scharfstellung und Koordination verknüpft. VT zielt darauf ab, visuelle Defizite durch gezielte Übungen und Wahrnehmungstraining nachhaltig zu beheben.",
        icon: Eye,
        details: ["Hilfreich bei Konzentrationsproblemen und Leseunlust", "Individueller Trainingsplan durch Optometristen", "Inklusive häuslichem Training"]
    },
    {
        id: "sturzpraevention",
        title: "Sturzprävention",
        description: "Maßnahmen und Strategien zur Verhinderung von Stürzen, insbesondere bei älteren Menschen oder Personen mit erhöhtem Risiko.",
        longDescription: "Durch gezielte Übungen zur Verbesserung von Balance, Kraft und Koordination erhöhen wir die Sicherheit und Lebensqualität. Auch Anpassungen der Wohnumgebung werden im Rahmen der Therapie thematisiert.",
        icon: Activity,
        details: ["Stärkung der Muskulatur und Reaktionsfähigkeit", "Erhöhung der Mobilität und Selbstständigkeit", "Besonders wichtig bei neurologischen Erkrankungen"]
    },
    {
        id: "pmr",
        title: "Progressive Muskelrelaxation (PMR)",
        description: "Entspannungstechnik nach Jacobson zur Reduktion von Stress und Angst durch systematische Muskelanspannung und -entspannung.",
        longDescription: "Die Methode basiert auf der Idee, dass körperliche Entspannung unmittelbar zu einer psychischen Beruhigung führt. Durch das bewusste Erleben von Spannung und Entspannung wird ein besseres Körperbewusstsein gefördert.",
        icon: Wind,
        details: ["Einsatz bei Stress, Schlafstörungen und chronischen Schmerzen", "Erhöhung der Stressresistenz", "Auch als zertifizierter Gesundheitskurs möglich"]
    },
    {
        id: "linkshaenderberatung",
        title: "Linkshänderberatung",
        description: "Spezifische Unterstützung für Linkshänder, um sich in einer rechtshändigen Welt ergonomisch und komfortabel zurechtzufinden.",
        longDescription: "Die Beratung umfasst die Analyse der Händigkeit, Empfehlungen für geeignete Hilfsmittel (Scheren, Stifte) sowie spezielles Schreibtraining zur Verbesserung der Körperhaltung.",
        icon: Info,
        details: ["Beratung für Kinder, Eltern, Lehrer und Erzieher", "Erstellung von ergonomischen Arbeitsplatz-Konzepten", "Abrechnung über ergotherapeutische Verordnung möglich"]
    },
    {
        id: "therapeutisches-reiten",
        title: "Therapeutisches Reiten",
        description: "Momentan sind leider alle vorhandenen Therapieplätze belegt. Eine Aufnahme auf die Warteliste ist zurzeit nicht möglich.",
        longDescription: "Die Arbeit mit dem Pferd fördert Motorik und psychische Entwicklung. Sobald sich die Kapazitäten ändern, informieren wir Sie an dieser Stelle.",
        icon: Heart,
        details: ["Ganzheitlicher Ansatz", "Aktuell keine freien Plätze", "Update erfolgt bei Änderung der Situation"],
        alert: true
    }
]

export default function TherapieangebotePage() {
    const [galleryState, setGalleryState] = useState<{ isOpen: boolean; serviceId: string; images: string[] }>({
        isOpen: false,
        serviceId: "",
        images: []
    })

    const openGallery = (serviceId: string) => {
        const service = services.find(s => s.id === serviceId)
        if (service) {
            const images = getServiceImages(service.id, service.image)
            setGalleryState({ isOpen: true, serviceId, images })
        }
    }

    return (
        <main className="bg-background text-foreground">
            <header className="relative overflow-hidden bg-gradient-to-br from-secondary/80 via-white to-background pb-16 pt-24 md:pb-24">
                <div className="pointer-events-none absolute inset-0 orb-sheen" />
                <div className="pointer-events-none absolute inset-0 logo-arc-watermark" />
                <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                        Therapieangebote
                    </p>
                    <h1 className="mt-4 font-semibold text-slate-950" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
                        Spezialisierte Expertise <br />für Ihre Lebensqualität
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-800" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.7' }}>
                        Ergänzend zu unseren klassischen Therapien bieten wir innovative Verfahren an, die wir evidenzbasiert und individuell auf Ihre Bedürfnisse zuschneiden.
                    </p>
                </div>
            </header>

            <section className="relative py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-1">
                        {therapyContent.map((therapy) => {
                            const serviceData = services.find(s => s.id === therapy.id)
                            const hasMultipleImages = serviceData && getServiceImages(serviceData.id, serviceData.image).length > 1

                            return (
                                <div
                                    key={therapy.id}
                                    id={therapy.id}
                                    className={`group relative overflow-hidden rounded-[48px] border border-white/60 bg-white/95 shadow-[0_32px_110px_-78px_oklch(0.55_0.15_260/_0.8)] transition-all hover:shadow-[0_40px_130px_-80px_oklch(0.55_0.15_260/_0.9)] ${therapy.alert ? 'ring-2 ring-primary/20' : ''}`}
                                >
                                    <div className="grid lg:grid-cols-[400px_1fr]">
                                        {/* Left Side: Visuals & Title (Compact & Landscape) */}
                                        <div className="bg-slate-50/50 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-start">
                                            {serviceData && (
                                                <div
                                                    className="group/img relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-[32px] shadow-md transition-all hover:shadow-xl group-hover:shadow-primary/10"
                                                    onClick={() => openGallery(serviceData.id)}
                                                >
                                                    <Image
                                                        src={serviceData.image}
                                                        alt={therapy.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                                        sizes="(max-width: 400px) 100vw, 400px"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                                                    {/* Gallery Hint */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
                                                        <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-primary shadow-2xl backdrop-blur-sm">
                                                            <ZoomIn className="h-4 w-4" />
                                                            Bildergalerie
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="mt-8">
                                                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${therapy.alert ? 'bg-primary/20' : 'bg-primary/10'} text-primary shadow-sm ring-1 ring-primary/10`}>
                                                    <therapy.icon className="h-7 w-7" />
                                                </div>
                                                <h2 className="font-bold text-slate-950 leading-tight" style={{ fontSize: '1.75rem' }}>
                                                    {therapy.title}
                                                </h2>
                                                {hasMultipleImages && (
                                                    <div className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary/60">
                                                        <div className="h-1 w-1 rounded-full bg-primary" />
                                                        Mehrere Bilder verfügbar
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Side: Detailed Content */}
                                        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                                            <div className="space-y-6">
                                                <p className="text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
                                                    {therapy.description}
                                                </p>
                                                <p className="leading-relaxed text-slate-700" style={{ fontSize: '1.125rem' }}>
                                                    {therapy.longDescription}
                                                </p>

                                                <div className="space-y-4">
                                                    <p className="font-bold uppercase tracking-wider text-primary text-[11px] lg:text-xs">Ihre Vorteile & Fokus:</p>
                                                    <ul className="grid gap-2 sm:grid-cols-1">
                                                        {therapy.details.map((detail, i) => (
                                                            <li key={i} className="flex items-center gap-3 py-1 transition-colors">
                                                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                                </div>
                                                                <span className="text-sm font-medium text-slate-700 leading-snug">{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="pt-8">
                                                    <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-primary/20">
                                                        <a href="/praxis">Beratung anfragen</a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-20 rounded-[48px] border border-white/60 bg-primary/10 p-12 md:p-16 text-center shadow-inner">
                        <h3 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)' }}>
                            Noch unsicher?
                        </h3>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-800 lg:text-xl">
                            Wir beraten Sie gerne ausführlich, welche Therapieform für Ihre individuelle Situation am besten geeignet ist. Ein Anruf klärt oft mehr als viele Worte.
                        </p>
                        <div className="mt-12 flex flex-wrap justify-center gap-6">
                            <a
                                href="mailto:thera@ergo-voigt.de"
                                className="flex items-center gap-3 rounded-full bg-white px-10 py-5 font-bold text-primary shadow-sm ring-1 ring-primary/10 transition hover:bg-slate-50 hover:shadow-md"
                            >
                                thera@ergo-voigt.de
                            </a>
                            <a
                                href="/praxis#standorte"
                                className="flex items-center gap-3 rounded-full bg-primary px-10 py-5 font-bold text-white shadow-xl transition hover:bg-primary/90 hover:scale-[1.02]"
                            >
                                <MapPin className="h-5 w-5" />
                                Unsere Standorte
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {galleryState.isOpen && (
                <ImageGallery
                    images={galleryState.images}
                    initialIndex={0}
                    title={services.find(s => s.id === galleryState.serviceId)?.title || ""}
                    onClose={() => setGalleryState({ ...galleryState, isOpen: false })}
                />
            )}
        </main>
    )
}
