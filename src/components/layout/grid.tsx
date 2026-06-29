import { cn } from "@/lib/utils/cn"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | "auto"
}

export function Grid({ className, cols = "auto", children, ...props }: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 lg:grid-cols-2",
        cols === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        cols === "auto" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
