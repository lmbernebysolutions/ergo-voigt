"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, GraduationCap } from "lucide-react"
import { TeamMember } from "@/data/team"
import { cn } from "@/lib/utils"

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  )
}

function TeamCard({ member }: { member: TeamMember }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group relative flex flex-col items-center rounded-[48px] bg-white p-8 text-center shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative mb-8 aspect-square w-full max-w-[280px] overflow-hidden rounded-[40px] border-8 border-slate-50 shadow-inner">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 280px, 280px"
          loading="lazy"
        />
      </div>

      <h3 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>{member.name}</h3>
      <p className="font-medium text-sky-600" style={{ fontSize: 'clamp(0.875rem, 2vw, 0.875rem)' }}>{member.role}</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-slate-100 bg-slate-50 py-3 min-h-[48px] text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
      >
        <span>{isOpen ? "Weniger anzeigen" : "Qualifikationen"}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <div className="pt-4 text-left">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <GraduationCap className="h-4 w-4" />
                Weiterbildungen
              </div>
              <ul className="space-y-2">
                {member.qualifications.map((qual, idx) => (
                  <li key={idx} className="text-sm text-slate-800 leading-relaxed">
                    • {qual}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
