"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ChainSelector } from "./chain-selector"
import { PhaseSelector } from "./phase-selector"

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedChain: string
  onChainChange: (chain: string) => void
  selectedPhase: string
  onPhaseChange: (phase: string) => void
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  selectedChain,
  onChainChange,
  selectedPhase,
  onPhaseChange,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="relative flex-1 max-w-md animate-slide-up stagger-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 animate-pulse" />
        <Input
          placeholder="Search NFT collections..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 glass text-white placeholder:text-white/60 focus:neon-glow h-12 hover-glow transition-all duration-300"
        />
      </div>
      <div className="animate-slide-up stagger-2">
        <ChainSelector selectedChain={selectedChain} onChainChange={onChainChange} />
      </div>
      <div className="animate-slide-up stagger-3">
        <PhaseSelector selectedPhase={selectedPhase} onPhaseChange={onPhaseChange} />
      </div>
    </div>
  )
}
