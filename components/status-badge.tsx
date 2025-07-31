import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  mintPhase: string
}

export function StatusBadge({ mintPhase }: StatusBadgeProps) {
  const getStatusColor = (phase: string) => {
    switch (phase) {
      case "live":
        return "bg-green-600 text-white"
      case "whitelist":
        return "bg-orange-600 text-white"
      case "upcoming":
        return "bg-blue-600 text-white"
      case "trading":
        return "bg-purple-600 text-white"
      case "ended":
        return "bg-gray-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getStatusText = (phase: string) => {
    switch (phase) {
      case "live":
        return "Live Mint"
      case "whitelist":
        return "Whitelist"
      case "upcoming":
        return "Upcoming"
      case "trading":
        return "Trading"
      case "ended":
        return "Ended"
      default:
        return "Unknown"
    }
  }

  return (
    <Badge className={`${getStatusColor(mintPhase)} border-0 text-xs font-medium`}>{getStatusText(mintPhase)}</Badge>
  )
}
