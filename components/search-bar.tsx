"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

      <div className="flex gap-2">
        <Select value={selectedChain} onValueChange={onChainChange}>
          <SelectTrigger className="w-32 bg-[#21262d] border-[#30363d] text-white">
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent className="bg-[#21262d] border-[#30363d]">
            <SelectItem value="all">All Chains</SelectItem>
            <SelectItem value="Ethereum">Ethereum</SelectItem>
            <SelectItem value="Base">Base</SelectItem>
            <SelectItem value="Polygon">Polygon</SelectItem>
            <SelectItem value="Arbitrum">Arbitrum</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedPhase} onValueChange={onPhaseChange}>
          <SelectTrigger className="w-32 bg-[#21262d] border-[#30363d] text-white">
            <SelectValue placeholder="Phase" />
          </SelectTrigger>
          <SelectContent className="bg-[#21262d] border-[#30363d]">
            <SelectItem value="all">All Phases</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="whitelist">Whitelist</SelectItem>
            <SelectItem value="live">Live</SelectItem>
            <SelectItem value="trading">Trading</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="icon"
          className="border-[#30363d] text-[#7d8590] hover:text-white bg-transparent"
        >
          <Filter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
