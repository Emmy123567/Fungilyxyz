interface StatusBadgeProps {
  mintPhase: "live" | "whitelist" | "upcoming" | "trading" | "ended"
}

export function StatusBadge({ mintPhase }: StatusBadgeProps) {
  const getStatusConfig = (phase: string) => {
    switch (phase) {
      case "live":
        return { color: "bg-green-500", text: "Live Mint", pulse: true }
      case "whitelist":
        return { color: "bg-orange-500", text: "Whitelist", pulse: true }
      case "upcoming":
        return { color: "bg-blue-500", text: "Upcoming", pulse: false }
      case "trading":
        return { color: "bg-purple-500", text: "AMM Trading", pulse: true }
      case "ended":
        return { color: "bg-gray-500", text: "Ended", pulse: false }
      default:
        return { color: "bg-gray-500", text: "Unknown", pulse: false }
    }
  }

  const config = getStatusConfig(mintPhase)

  return (
    <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
      <div className={`w-2 h-2 rounded-full ${config.color} ${config.pulse ? "animate-pulse" : ""}`} />
      <span className="text-white text-xs font-medium">{config.text}</span>
    </div>
  )
}
