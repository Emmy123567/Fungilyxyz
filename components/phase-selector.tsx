"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PhaseSelectorProps {
  selectedPhase: string
  onPhaseChange: (phase: string) => void
}

const phases = [
  { value: "all", label: "All Phases", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { value: "live", label: "Live Mint", color: "bg-green-500" },
  { value: "whitelist", label: "Whitelist", color: "bg-orange-500" },
  { value: "upcoming", label: "Upcoming", color: "bg-blue-500" },
  { value: "trading", label: "AMM Trading", color: "bg-purple-500" },
]

export function PhaseSelector({ selectedPhase, onPhaseChange }: PhaseSelectorProps) {
  const selectedPhaseData = phases.find((phase) => phase.value === selectedPhase)

  return (
    <Select value={selectedPhase} onValueChange={onPhaseChange}>
      <SelectTrigger className="w-48 bg-[#21262d] border-[#30363d] text-white h-12">
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full ${selectedPhaseData?.color}`}></div>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-[#21262d] border-[#30363d]">
        {phases.map((phase) => (
          <SelectItem key={phase.value} value={phase.value} className="text-white hover:bg-[#30363d]">
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${phase.color}`}></div>
              {phase.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
