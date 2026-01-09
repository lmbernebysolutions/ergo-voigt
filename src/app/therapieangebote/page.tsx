"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, ZoomIn, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { services } from "@/data/services"
import { getServiceImages } from "@/lib/serviceImages"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TherapieangebotePage() {
    const [galleryState, setGalleryState] = useState<{ isOpen: boolean; serviceId: string; images: string[] }>({
        isOpen: false,
        serviceId: "",
        images: []
    })

    const specialServices = services.filter(s => s.category === "special")

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
                <div className="pointer-events-none absolute inset-0 logo-watermark" />
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
                        {specialServices.map((service) => {
                            const hasMultipleImages = getServiceImages(service.id, service.image).length > 1
                            const Icon = service.icon

                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className={`group relative overflow-hidden rounded-[48px] border border-white/60 bg-white/95 shadow-[0_32px_110px_-78px_oklch(0.55_0.15_260/_0.8)] transition-all hover:shadow-[0_40px_130px_-80px_oklch(0.55_0.15_260/_0.9)] ${service.alert ? 'ring-2 ring-primary/20' : ''}`}
                                >
                                    <div className="grid lg:grid-cols-[320px_1fr]">
                                        {/* Left Side: Visuals & Title & Details */}
                                        <div className="bg-slate-50/50 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-start">
                                            <div>
                                                <div
                                                    className="group/img relative aspect-[4/3] w-full md:w-[70%] lg:w-full mx-auto lg:mx-0 cursor-pointer overflow-hidden rounded-[24px] shadow-md transition-all hover:shadow-xl group-hover:shadow-primary/10"
                                                    onClick={() => openGallery(service.id)}
                                                >
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                                                        sizes="(max-width: 400px) 100vw, 400px"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                                                    {/* Gallery Hint */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover/img:opacity-100 transition-opacity duration-300">
                                                        <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-primary shadow-2xl backdrop-blur-sm">
                                                            <ZoomIn className="h-4 w-4" />
                                                            Bildergalerie
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-6">
                                                    {Icon && (
                                                        <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${service.alert ? 'bg-primary/20' : 'bg-primary/10'} text-primary shadow-sm ring-1 ring-primary/10`}>
                                                            <Icon className="h-6 w-6" />
                                                        </div>
                                                    )}
                                                    <h2 className="font-bold text-slate-950 leading-tight" style={{ fontSize: '1.5rem' }}>
                                                        {service.title}
                                                    </h2>
                                                    {hasMultipleImages && (
                                                        <div className="mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary/60">
                                                            <div className="h-1 w-1 rounded-full bg-primary" />
                                                            Mehrere Bilder verfügbar
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Details / Anwendungsbereiche (Moved to Left Side) */}
                                            {service.details.length > 0 && (
                                                <div className="mt-8 space-y-3">
                                                    <p className="font-bold uppercase tracking-wider text-primary text-xs lg:text-sm">Therapeutische Anwendungsbereiche:</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {(() => {
                                                            const isLongList = service.details.length > 10;
                                                            const displayItems = isLongList ? service.details.slice(0, 8) : service.details;
                                                            
                                                            return (
                                                                <>
                                                                    {displayItems.map((detail, i) => (
                                                                        <span key={i} className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-100">
                                                                            {detail}
                                                                        </span>
                                                                    ))}
                                                                    {isLongList && (
                                                                        <div className="w-full mt-2">
                                                                            <Accordion type="single" collapsible className="w-full">
                                                                                <AccordionItem value="more-details" className="border-none">
                                                                                    <AccordionContent className="p-0">
                                                                                        <div className="flex flex-wrap gap-1.5 pt-1.5">
                                                                                            {service.details.slice(8).map((detail, i) => (
                                                                                                <span key={i} className="inline-flex items-center rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-100">
                                                                                                    {detail}
                                                                                                </span>
                                                                                            ))}
                                                                                        </div>
                                                                                    </AccordionContent>
                                                                                    <AccordionTrigger className="text-primary hover:text-primary/80 text-xs font-semibold py-2 justify-start gap-2 hover:no-underline">
                                                                                        Mehr anzeigen
                                                                                    </AccordionTrigger>
                                                                                </AccordionItem>
                                                                            </Accordion>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            );
                                                        })()}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Side: Detailed Content */}
                                        <div className="flex flex-col justify-start p-6 md:p-8 lg:p-10">
                                            <div className="space-y-6">
                                                <div>
                                                    <p className="text-base leading-relaxed text-slate-700 md:text-lg mb-4 font-medium">
                                                        {service.description}
                                                    </p>
                                                    
                                                    {service.longDescription && (
                                                        <p className="leading-relaxed text-slate-600 text-sm md:text-base">
                                                            {service.longDescription}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Grid for Benefits and FAQs */}
                                                <div className="grid lg:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                                                    {/* Benefits / Ziele */}
                                                    {service.benefits && service.benefits.length > 0 && (
                                                        <div className="space-y-3">
                                                            <p className="font-bold uppercase tracking-wider text-primary text-xs lg:text-sm">Ziele der Behandlung:</p>
                                                            <ul className="grid gap-1.5 sm:grid-cols-1">
                                                                {(() => {
                                                                    const isLongBenefits = service.benefits.length > 6;
                                                                    const displayBenefits = isLongBenefits ? service.benefits.slice(0, 5) : service.benefits;
                                                                    
                                                                    return (
                                                                        <>
                                                                            {displayBenefits.map((benefit, i) => (
                                                                                <li key={i} className="flex items-start gap-2.5 py-0.5">
                                                                                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                                                                                        <CheckCircle2 className="h-2.5 w-2.5" />
                                                                                    </div>
                                                                                    <span className="text-sm font-medium text-slate-700 leading-snug">{benefit}</span>
                                                                                </li>
                                                                            ))}
                                                                            {isLongBenefits && (
                                                                                <Accordion type="single" collapsible className="w-full border-none">
                                                                                    <AccordionItem value="more-benefits" className="border-none">
                                                                                        <AccordionContent className="p-0">
                                                                                            <ul className="grid gap-1.5 sm:grid-cols-1 pt-1.5">
                                                                                                {service.benefits.slice(5).map((benefit, i) => (
                                                                                                    <li key={i} className="flex items-start gap-2.5 py-0.5">
                                                                                                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                                                                                                            <CheckCircle2 className="h-2.5 w-2.5" />
                                                                                                        </div>
                                                                                                        <span className="text-sm font-medium text-slate-700 leading-snug">{benefit}</span>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </AccordionContent>
                                                                                        <AccordionTrigger className="text-primary hover:text-primary/80 text-xs font-semibold py-2 justify-start gap-2 hover:no-underline">
                                                                                            Mehr Ziele anzeigen
                                                                                        </AccordionTrigger>
                                                                                    </AccordionItem>
                                                                                </Accordion>
                                                                            )}
                                                                        </>
                                                                    );
                                                                })()}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* FAQs Accordion */}
                                                    {service.faqs && service.faqs.length > 0 && (
                                                        <div>
                                                            <p className="mb-3 font-bold uppercase tracking-wider text-primary text-xs lg:text-sm">Häufige Fragen:</p>
                                                            <Accordion type="single" collapsible className="w-full">
                                                                {service.faqs.slice(0, 5).map((faq, idx) => (
                                                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-100">
                                                                        <AccordionTrigger className="text-slate-900 font-semibold hover:text-primary hover:no-underline text-left py-2 text-sm">
                                                                            {faq.question}
                                                                        </AccordionTrigger>
                                                                        <AccordionContent className="text-slate-600 leading-relaxed text-sm pb-3">
                                                                            {faq.answer}
                                                                        </AccordionContent>
                                                                    </AccordionItem>
                                                                ))}
                                                            </Accordion>
                                                            {service.faqs.length > 5 && (
                                                                <div className="mt-4">
                                                                    <a 
                                                                        href={`/faq?tab=${service.id}`}
                                                                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                                                    >
                                                                        Alle Fragen ansehen
                                                                        <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="pt-2">
                                                    <Button asChild size="default" className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/20">
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
