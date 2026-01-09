"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle, ArrowLeft, ChevronRight } from "lucide-react"
import { FAQCategory, FAQItem } from "@/data/faq"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface FAQSectionWithTabsProps {
  categories: FAQCategory[]
  className?: string
}

export function FAQSectionWithTabs({ categories, className }: FAQSectionWithTabsProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || "")
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(null)

  // Reset sub-category selection when main category changes
  useEffect(() => {
    setActiveSubCategoryId(null)
  }, [selectedCategory])

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
            {category.subCategories ? (
              // Sub-category logic (Drill-down)
              <div>
                <AnimatePresence mode="wait">
                  {!activeSubCategoryId ? (
                    <motion.div
                      key="grid"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="grid gap-4 sm:grid-cols-2"
                    >
                      {category.subCategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setActiveSubCategoryId(sub.id)}
                          className="flex items-center justify-between p-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:ring-primary/20 hover:bg-slate-50 transition-all text-left group"
                        >
                          <span className="font-bold text-slate-900">{sub.label}</span>
                          <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <ChevronRight className="h-5 w-5" />
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <button
                        onClick={() => setActiveSubCategoryId(null)}
                        className="mb-6 flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Zurück zur Übersicht
                      </button>
                      
                      <h3 className="mb-6 text-xl font-bold text-slate-950">
                        {category.subCategories.find(s => s.id === activeSubCategoryId)?.label}
                      </h3>

                      <div className="space-y-4">
                        {category.subCategories
                          .find(s => s.id === activeSubCategoryId)
                          ?.items.map((item, idx) => (
                            <FAQItemComponent key={idx} item={item} />
                          ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Standard list
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <FAQItemComponent key={idx} item={item} />
                ))}
              </div>
            )}
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
