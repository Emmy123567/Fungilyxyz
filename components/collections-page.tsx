"use client"

import { useState } from "react"
import { SearchBar } from "./search-bar"
import { CollectionsGrid } from "./collections-grid"
import { mockCollections } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Droplets } from "lucide-react"

export function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedChain, setSelectedChain] = useState("all")
  const [selectedPhase, setSelectedPhase] = useState("all")

  const filteredCollections = mockCollections.filter((collection) => {
    const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesChain = selectedChain === "all" || collection.chain === selectedChain
    const matchesPhase = selectedPhase === "all" || collection.mintPhase === selectedPhase
    return matchesSearch && matchesChain && matchesPhase
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-[#7d8590] text-sm mb-4">
          <span>Home</span>
          <span>/</span>
          <span className="text-white">NFT Presale Platform</span>
        </div>

        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-4">Fungily NFT Presale System</h1>
          <p className="text-[#7d8590] text-lg max-w-4xl">
            Next-gen presale platform with NFT-AMM integration. Unlike traditional presales, Fungily collections are
            dynamic and liquidity-backed with instant trading post-presale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Instant Trading</span>
            </div>
            <p className="text-[#7d8590] text-sm">NFTs tradeable immediately after presale via bonding curves</p>
          </div>

          <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Built-in Liquidity</span>
            </div>
            <p className="text-[#7d8590] text-sm">Automated liquidity pools with algorithmic floor pricing</p>
          </div>

          <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Dynamic Pricing</span>
            </div>
            <p className="text-[#7d8590] text-sm">Real-time price discovery via NFT-AMM bonding curves</p>
          </div>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedChain={selectedChain}
          onChainChange={setSelectedChain}
          selectedPhase={selectedPhase}
          onPhaseChange={setSelectedPhase}
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-[#7d8590]">
          Showing {filteredCollections.length} of {mockCollections.length} collections
        </p>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
            {filteredCollections.filter((c) => c.mintPhase === "live").length} Live Presales
          </Badge>
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
            {filteredCollections.filter((c) => c.hasLiquidity).length} With AMM
          </Badge>
        </div>
      </div>

      <CollectionsGrid collections={filteredCollections} />
    </div>
  )
}
