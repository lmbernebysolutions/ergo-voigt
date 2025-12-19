"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { FAQCategory, FAQItem } from "@/data/faq"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface FAQSectionWithTabsProps {
  categories: FAQCategory[]
  className?: string
}

export function FAQSectionWithTabs({ categories, className }: FAQSectionWithTabsProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || "")

  return (
    <div className={cn("mx-auto max-w-4xl", className)}>
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
          <HelpCircle className="h-6 w-6" />
        </div>
        <h2 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
          Häufige Fragen
        </h2>
        <p className="mt-2 text-slate-800" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>
          Alles Wichtige für Ihren Besuch bei uns.
        </p>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="mb-8 w-full justify-start bg-slate-100/50 p-1.5 rounded-2xl h-auto flex-wrap gap-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="px-4 py-2.5 text-sm font-semibold rounded-xl min-h-[48px] data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all"
              style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="space-y-4">
              {category.items.map((item, idx) => (
                <FAQItemComponent key={idx} item={item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
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
        <span className="font-semibold text-slate-950 pr-4" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)' }}>
          {item.question}
        </span>
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
