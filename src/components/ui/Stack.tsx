"use client"

import { motion, useMotionValue, useTransform, PanInfo, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ZoomIn } from 'lucide-react';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  onLongPress: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({ children, onSendToBack, onLongPress, sensitivity, disableDrag = false }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDragging = useRef(false);

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    isDragging.current = false;
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function handlePointerDown() {
    isDragging.current = false;
    timeoutRef.current = setTimeout(() => {
      if (!isDragging.current) {
        onLongPress();
      }
    }, 500); // 500ms long press (only on desktop)
  }

  function handlePointerUp() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function handleDragStart() {
    isDragging.current = true;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  if (disableDrag) {
    return (
      <motion.div 
        className="absolute inset-0 cursor-pointer" 
        style={{ x: 0, y: 0 }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onClick={(e) => {
          // On mobile, onClick is handled by the card itself
          e.stopPropagation()
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards?: React.ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
  onCardClick?: (locationId: string, imageIndex: number) => void;
  cardLocationIds?: string[];
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
  onCardClick,
  cardLocationIds = []
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || (mobileClickOnly && !isMobile);
  const shouldOpenOnClick = mobileClickOnly && isMobile;

  const [stack, setStack] = useState<{ id: number; content: React.ReactNode }[]>([]);

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <>
      <div
        className="relative w-full h-full"
        style={{ perspective: 600 }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {stack.map((card, index) => {
          const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
          const isTop = index === stack.length - 1;
          
          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              onLongPress={() => {
                if (isTop && !isMobile) {
                  // On desktop, long press opens gallery
                  // FIX: Use card.id (original index + 1) to map back to the correct locationId
                  const originalIndex = card.id - 1
                  const locationId = cardLocationIds[originalIndex] || ""
                  if (onCardClick && locationId) {
                    onCardClick(locationId, 0)
                  }
                }
              }}
              sensitivity={sensitivity}
              disableDrag={shouldDisableDrag}
            >
              <motion.div
                className="rounded-3xl overflow-hidden w-full h-full bg-white shadow-xl border border-white/50 relative group"
                onClick={() => {
                  if (shouldOpenOnClick && isTop) {
                    // On mobile click, open gallery with all images for this location
                    // FIX: Use card.id (original index + 1) to map back to the correct locationId
                    const originalIndex = card.id - 1
                    const locationId = cardLocationIds[originalIndex] || ""
                    if (onCardClick && locationId) {
                      onCardClick(locationId, 0)
                    }
                  } else if (shouldEnableClick) {
                    sendToBack(card.id)
                  }
                }}
                animate={{
                  rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - stack.length * 0.06,
                  transformOrigin: '90% 90%',
                  zIndex: index
                }}
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping
                }}
                layoutId={`card-${card.id}`}
              >
                {card.content}
                
                {/* Hint Overlay only on top card */}
                {isTop && (
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none bg-black/10 ${
                    isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}>
                    <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm flex items-center gap-1.5">
                      <ZoomIn className="w-3 h-3" />
                      {isMobile ? "Klick für öffnen" : "Gedrückt halten"}
                    </div>
                  </div>
                )}
              </motion.div>
            </CardRotate>
          );
        })}
      </div>

      {/* Lightbox Overlay - wird jetzt durch ImageGallery in HeroSection gehandhabt */}
    </>
  );
}
