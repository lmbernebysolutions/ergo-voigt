"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { SafeImage } from "./SafeImage"

interface ImageGalleryProps {
  images: string[]
  imageTitles?: string[]
  initialIndex?: number
  title?: string
  onClose: () => void
}

export function ImageGallery({ images, imageTitles, initialIndex = 0, title, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  // Prevent body scroll when gallery is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsZoomed(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
  }

  const handleImageClick = () => {
    if (images.length > 1) {
      setIsZoomed(!isZoomed)
    }
  }

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Title */}
        {(imageTitles?.[currentIndex] || title) && (
          <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl text-white font-bold shadow-lg pointer-events-none">
            {imageTitles?.[currentIndex] || title}
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 min-w-[48px] min-h-[48px] bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm flex items-center justify-center"
          aria-label="Galerie schließen"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div
          className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 p-3 min-w-[48px] min-h-[48px] bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm flex items-center justify-center"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            ref={imageRef}
            className={`relative w-full h-full min-w-[90vw] max-w-[90vw] md:min-w-[80vw] md:max-w-[80vw] lg:min-w-[70vw] lg:max-w-[70vw] ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={handleImageClick}
          >
            <SafeImage
              src={currentImage}
              alt={title ? `${title} - Bild ${currentIndex + 1}` : `Bild ${currentIndex + 1}`}
              fill
              className={`object-contain transition-transform duration-300 ${
                isZoomed ? "scale-150" : "scale-100"
              }`}
              loading="lazy"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </motion.div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 z-50 p-3 min-w-[48px] min-h-[48px] bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm flex items-center justify-center"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Zoom Hint */}
          {images.length > 1 && !isZoomed && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-xs font-medium flex items-center gap-2">
              <ZoomIn className="w-4 h-4" />
              Klicken zum Zoomen
            </div>
          )}
        </div>

        {/* Thumbnail Navigation (Desktop) */}
        {images.length > 1 && (
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 max-w-4xl overflow-x-auto px-4 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsZoomed(false)
                }}
                className={`relative shrink-0 w-20 h-20 min-w-[48px] min-h-[48px] rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? "border-white scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
                aria-label={`Bild ${idx + 1} anzeigen`}
              >
                <SafeImage
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
