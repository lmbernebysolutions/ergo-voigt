import Link from "next/link"
import { LucideIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BentoCardProps = {
  icon: LucideIcon
  title: string
  description: string
  tag?: string
  href?: string
  actionLabel?: string
  className?: string
}

export function BentoCard({
  icon: Icon,
  title,
  description,
  tag,
  href,
  actionLabel = "Mehr erfahren",
  className,
}: BentoCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full overflow-visible ring-1 ring-white/55 bg-white/95 p-7 shadow-[0_22px_90px_-60px_oklch(0.55_0.15_260/_0.68)] transition hover:-translate-y-[4px] hover:shadow-[0_26px_110px_-70px_oklch(0.55_0.15_260/_0.8)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.96_0.04_260/_0.5),transparent_38%),radial-gradient(circle_at_80%_0%,oklch(0.86_0.12_260/_0.22),transparent_28%)]" />
      <CardHeader className="relative px-0 pb-5">
        <div className="flex items-start gap-3">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-primary shadow-[0_8px_24px_-12px_oklch(0.55_0.15_260/_0.5)]">
            <Icon className="size-7" strokeWidth={2.5} aria-hidden />
          </div>
          <div className="flex-1 space-y-2 min-w-0">
            {tag ? (
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_10px_32px_-26px_oklch(0.55_0.15_260/_0.7)] whitespace-nowrap">
                {tag}
              </span>
            ) : null}
            <CardTitle className="font-semibold leading-tight text-foreground" style={{ fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative flex flex-1 flex-col px-0">
        <CardDescription className="leading-relaxed text-muted-foreground" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', lineHeight: '1.65' }}>
          {description}
        </CardDescription>
        {href ? (
          <Button
            asChild
            variant="secondary"
            className="w-full justify-center rounded-full bg-primary/10 px-6 text-primary shadow-[0_12px_30px_-20px_oklch(0.55_0.15_260/_0.4)] transition-all hover:bg-primary/15 hover:scale-[1.02] sm:w-auto sm:self-start"
          >
            <Link href={href}>{actionLabel}</Link>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  )
}
