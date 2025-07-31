"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

export function GradientButton({ children, className, size = "md", onClick }: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95",
        sizeClasses[size],
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x" />
      <div className="absolute inset-[2px] bg-[#21262d] rounded-md flex items-center justify-center">
        <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
          {children}
        </span>
      </div>
    </button>
  )
}
