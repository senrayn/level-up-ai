import { cn } from "@/lib/utils/cn"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-[rgba(255,255,255,0.05)]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
