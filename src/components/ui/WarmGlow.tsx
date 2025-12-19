import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface WarmGlowProps extends HTMLAttributes<HTMLDivElement> {
  color?: "amber" | "blue"
}

export function WarmGlow({ className, color = "amber", ...props }: WarmGlowProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[100px] pointer-events-none -z-10",
        color === "amber" ? "bg-amber-100/60" : "bg-blue-100/50",
        className
      )}
      {...props}
    />
  )
}
