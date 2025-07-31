import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: "sm" | "default" | "lg"
}

export function GradientButton({ children, className, size = "default", ...props }: GradientButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 font-medium transition-all duration-200 hover:scale-105",
        className,
      )}
      size={size}
      {...props}
    >
      {children}
    </Button>
  )
}
