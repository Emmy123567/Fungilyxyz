import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "default" | "lg"
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      default: "h-10 px-4",
      lg: "h-12 px-8 text-lg",
    }

    return (
      <Button
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)

GradientButton.displayName = "GradientButton"

export { GradientButton }
