import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

interface InfoCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const InfoCard = forwardRef<HTMLDivElement, InfoCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
InfoCard.displayName = "InfoCard"
