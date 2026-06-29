import { cn } from "@/lib/utils/cn"

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "default" | "narrow" | "wide"
}

export function PageContainer({
  className,
  maxWidth = "default",
  children,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 py-8",
        maxWidth === "narrow" && "max-w-4xl",
        maxWidth === "default" && "max-w-7xl",
        maxWidth === "wide" && "max-w-[90rem]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
