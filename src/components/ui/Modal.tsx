"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "full"
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  full: "max-w-full",
}

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  maxWidth = "2xl",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    // Store the previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement

    document.addEventListener("keydown", handleEscape)
    
    // Trap focus inside modal
    const modal = modalRef.current
    if (modal) {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (firstElement) {
        firstElement.focus()
      }

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      document.addEventListener("keydown", handleTab)

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.removeEventListener("keydown", handleTab)
        // Restore focus to previous element
        previousFocusRef.current?.focus()
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      previousFocusRef.current?.focus()
    }
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open (including touch devices)
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY
      
      // Prevent scrolling
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      
      // Also prevent touch scrolling on iOS
      document.body.style.touchAction = "none"
      
      return () => {
        // Restore scrolling
        document.body.style.overflow = ""
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        document.body.style.touchAction = ""
        
        // Restore scroll position
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 md:bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-0 md:p-4 lg:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose()
              }
            }}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full h-full md:h-auto md:max-h-[95vh] overflow-y-auto rounded-none md:rounded-3xl bg-white shadow-2xl flex flex-col",
                maxWidth === "full" ? "max-w-full" : "md:" + maxWidthClasses[maxWidth],
                className
              )}
            >
              {/* Fixed Close Button - Always Visible on Top */}
              <div className="sticky top-0 z-[70] flex justify-end p-4 pb-0 md:p-0 md:absolute md:top-4 md:right-4 pointer-events-none">
                <button
                  onClick={onClose}
                  className="pointer-events-auto rounded-full bg-white p-3 min-w-[48px] min-h-[48px] text-slate-700 shadow-2xl transition-all hover:bg-slate-50 hover:scale-110 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 flex items-center justify-center mt-safe-top mr-safe-right"
                  aria-label="Modal schließen"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
