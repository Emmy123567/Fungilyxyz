"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Plus, Minus } from "lucide-react"
import { Navigation } from "./navigation"
import { GradientButton } from "./gradient-button"
import { StatusBadge } from "./status-badge"
import { mockCollections } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"

interface MintPageProps {
  collectionId: string
}

export function MintPage({ collectionId }: MintPageProps) {
  const [quantity, setQuantity] = useState(1)
  const collection = mockCollections.find((c) => c.id === Number.parseInt(collectionId))

  if (!collection) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Collection Not Found</h1>
          <Link href="/" className="text-[#58a6ff] hover:text-white">
            ← Back to Collections
          </Link>
        </div>
      </div>
    )
  }

  const progress = (collection.minted / collection.total) * 100
  const totalCost = Number.parseFloat(collection.price.replace(/[^\d.]/g, "")) * quantity

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Collections
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-[#30363d]">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                width={600}
                height={600}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-4 right-4">
                <StatusBadge status={collection.status} />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{collection.name}</h1>
              <p className="text-[#7d8590] text-lg leading-relaxed">{collection.description}</p>
            </div>

            <div className="bg-[#21262d] border border-[#30363d] rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[#7d8590]">Mint Price</span>
                <span className="text-3xl font-bold text-white">{collection.price}</span>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#7d8590]">Minted</span>
                  <span className="text-white font-medium">
                    {collection.minted.toLocaleString()} / {collection.total.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-[#30363d] rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-right text-sm text-[#7d8590] mt-1">{Math.round(progress)}% minted</div>
              </div>

              <div className="space-y-4">
                <label className="text-white font-medium">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-[#30363d] text-white hover:bg-[#484f58] transition-colors flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="w-20 text-center bg-[#0d1117] border-[#30363d] text-white"
                    min="1"
                    max="10"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 rounded-lg bg-[#30363d] text-white hover:bg-[#484f58] transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[#7d8590] text-sm">Max 10 per transaction</p>
              </div>

              <div className="bg-[#0d1117] rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#7d8590]">Subtotal</span>
                  <span className="text-white">{totalCost.toFixed(3)} ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7d8590]">Gas (est.)</span>
                  <span className="text-white">~0.005 ETH</span>
                </div>
                <div className="border-t border-[#30363d] pt-2">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-white font-bold text-lg">{(totalCost + 0.005).toFixed(3)} ETH</span>
                  </div>
                </div>
              </div>

              <GradientButton className="w-full" size="lg">
                {collection.status === "live"
                  ? `Mint ${quantity} NFT${quantity > 1 ? "s" : ""}`
                  : collection.status === "upcoming"
                    ? "Coming Soon"
                    : "Sold Out"}
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
