import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  mintPhase: "upcoming" | "whitelist" | "live" | "trading"
}

export function StatusBadge({ mintPhase }: StatusBadgeProps) {
  const variants = {
    upcoming: "bg-gray-600/20 text-gray-400 border-gray-600/30",
    whitelist: "bg-blue-600/20 text-blue-400 border-blue-600/30",
    live: "bg-green-600/20 text-green-400 border-green-600/30",
    trading: "bg-purple-600/20 text-purple-400 border-purple-600/30",
  }

  const labels = {
    upcoming: "Coming Soon",
    whitelist: "Whitelist",
    live: "Live",
    trading: "Trading",
  }

  return <Badge className={variants[mintPhase]}>{labels[mintPhase]}</Badge>
}
