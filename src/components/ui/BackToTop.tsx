"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Hide button if a modal is open (indicated by overflow: hidden on body)
  // Also handles scroll visibility
  useEffect(() => {
    const checkVisibility = () => {
      const isModalOpen = document.body.style.overflow === "hidden"
      
      if (isModalOpen) {
        setIsVisible(false)
      } else if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Check periodically for modal changes (since body style changes don't trigger events)
    const interval = setInterval(checkVisibility, 200)
    
    // Check on scroll
    window.addEventListener("scroll", checkVisibility)
    
    // Check immediately
    checkVisibility()

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", checkVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
