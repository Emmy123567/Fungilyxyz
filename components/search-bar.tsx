"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedChain: string
  onChainChange: (value: string) => void
  selectedPhase: string
  onPhaseChange: (value: string) => void
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
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7d8590] w-4 h-4" />
        <Input
          placeholder="Search collections..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-[#21262d] border-[#30363d] text-white placeholder:text-[#7d8590]"
        />
      </div>

      <Select value={selectedChain} onValueChange={onChainChange}>
        <SelectTrigger className="w-full md:w-48 bg-[#21262d] border-[#30363d] text-white">
          <SelectValue placeholder="All Chains" />
        </SelectTrigger>
        <SelectContent className="bg-[#21262d] border-[#30363d]">
          <SelectItem value="all" className="text-white hover:bg-[#30363d]">
            All Chains
          </SelectItem>
          <SelectItem value="ethereum" className="text-white hover:bg-[#30363d]">
            Ethereum
          </SelectItem>
          <SelectItem value="polygon" className="text-white hover:bg-[#30363d]">
            Polygon
          </SelectItem>
          <SelectItem value="arbitrum" className="text-white hover:bg-[#30363d]">
            Arbitrum
          </SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedPhase} onValueChange={onPhaseChange}>
        <SelectTrigger className="w-full md:w-48 bg-[#21262d] border-[#30363d] text-white">
          <SelectValue placeholder="All Phases" />
        </SelectTrigger>
        <SelectContent className="bg-[#21262d] border-[#30363d]">
          <SelectItem value="all" className="text-white hover:bg-[#30363d]">
            All Phases
          </SelectItem>
          <SelectItem value="upcoming" className="text-white hover:bg-[#30363d]">
            Upcoming
          </SelectItem>
          <SelectItem value="whitelist" className="text-white hover:bg-[#30363d]">
            Whitelist
          </SelectItem>
          <SelectItem value="live" className="text-white hover:bg-[#30363d]">
            Live
          </SelectItem>
          <SelectItem value="trading" className="text-white hover:bg-[#30363d]">
            Trading
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
