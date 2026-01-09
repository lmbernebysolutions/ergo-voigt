"use client"

import { useState } from "react"
import Image from "next/image"
import { GraduationCap, ZoomIn, User } from "lucide-react"
import { TeamMember } from "@/data/team"
import { Modal } from "@/components/ui/Modal"

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:flex-wrap md:justify-center md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {members.map((member) => (
          <div key={member.id} className="w-[85vw] flex-none snap-center md:w-[calc(50%-1.25rem)] lg:w-[calc(50%-1.25rem)] xl:w-[calc(33.33%-1.66rem)] flex">
            <TeamCard 
              member={member} 
              onOpen={() => setSelectedMember(member)} 
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        maxWidth="3xl"
      >
        {selectedMember && (
          <div className="flex flex-col md:flex-row h-[600px] overflow-hidden">
            {/* Image Section */}
            <div className="relative h-64 md:h-full md:w-1/2 shrink-0 bg-slate-100 overflow-hidden">
              {/* Blurred Background for "Full Size" feel without white borders */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={selectedMember.image}
                  alt=""
                  fill
                  className="object-cover blur-3xl scale-125 opacity-50 saturate-150"
                />
              </div>
              
              {/* Actual Image - Fully Visible */}
              <div className="relative w-full h-full z-10" style={{ transform: selectedMember.scale ? `scale(${selectedMember.scale})` : undefined, transformOrigin: 'top' }}>
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  style={{ objectPosition: selectedMember.imageObjectPosition || "center" }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 md:p-10 bg-white overflow-y-auto">
              <div className="mb-6">
                <h3 className="font-bold text-slate-950 text-2xl md:text-3xl mb-2">
                  {selectedMember.name}
                </h3>
                <p className="font-medium text-primary text-lg">
                  {selectedMember.role}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  <GraduationCap className="h-4 w-4" />
                  Qualifikationen & Weiterbildungen
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {selectedMember.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 leading-relaxed text-sm">
                      <span className="block h-1.5 w-1.5 mt-2 rounded-full bg-primary/40 shrink-0" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

function TeamCard({ member, onOpen }: { member: TeamMember; onOpen: () => void }) {
  return (
    <div 
      className="group relative flex w-full flex-col items-center rounded-[48px] bg-white p-8 text-center shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer h-full"
      onClick={onOpen}
    >
      <div className="relative mb-8 aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[40px] border-8 border-slate-50 shadow-inner bg-slate-50">
        {member.image ? (
          <div className="w-full h-full" style={{ transform: member.scale ? `scale(${member.scale})` : undefined, transformOrigin: 'top' }}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: member.imageObjectPosition || "top" }}
              sizes="(max-width: 640px) 320px, 320px"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-200">
            <User className="h-24 w-24" />
          </div>
        )}
        {/* Hover Hint */}
        {member.image && (
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
          </div>
        )}
      </div>

      <h3 className="font-bold text-slate-950" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>{member.name}</h3>
      <p className="font-medium text-sky-600 mb-6" style={{ fontSize: 'clamp(0.875rem, 2vw, 0.875rem)' }}>{member.role}</p>

      <button
        className="mt-auto w-full rounded-full border border-slate-100 bg-slate-50 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
      >
        Qualifikationen ansehen
      </button>
    </div>
  )
}
