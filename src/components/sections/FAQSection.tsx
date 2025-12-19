"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { FAQItem } from "@/data/faq"
import { cn } from "@/lib/utils"

interface FAQSectionProps {
  items: FAQItem[]
  className?: string
}

export function FAQSection({ items, className }: FAQSectionProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", className)}>
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
          <HelpCircle className="h-6 w-6" />
        </div>
        <h2 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Häufige Fragen</h2>
        <p className="mt-2 text-slate-800" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>Alles Wichtige für Ihren Besuch bei uns.</p>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <FAQItemComponent key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.question.slice(0, 10)}`}
        className="flex w-full items-center justify-between px-6 py-4 min-h-[48px] text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl"
      >
        <span className="font-semibold text-slate-950" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)' }}>{item.question}</span>
        <div className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors",
          isOpen ? "bg-sky-100 text-sky-600" : "bg-slate-100 text-slate-500"
        )}>
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              id={`faq-answer-${item.question.slice(0, 10)}`}
              className="px-6 pb-6 pt-0 text-slate-800 leading-relaxed" 
              style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
