"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ChainSelectorProps {
  selectedChain: string
  onChainChange: (chain: string) => void
}

const chains = [
  { value: "all", label: "All Chains", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { value: "ethereum", label: "Ethereum", color: "bg-blue-500" },
  { value: "polygon", label: "Polygon", color: "bg-purple-500" },
  { value: "arbitrum", label: "Arbitrum", color: "bg-blue-400" },
]

export function ChainSelector({ selectedChain, onChainChange }: ChainSelectorProps) {
  const selectedChainData = chains.find((chain) => chain.value === selectedChain)

  return (
    <Select value={selectedChain} onValueChange={onChainChange}>
      <SelectTrigger className="w-40 bg-[#21262d] border-[#30363d] text-white h-12">
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full ${selectedChainData?.color}`}></div>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-[#21262d] border-[#30363d]">
        {chains.map((chain) => (
          <SelectItem key={chain.value} value={chain.value} className="text-white hover:bg-[#30363d]">
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${chain.color}`}></div>
              {chain.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
