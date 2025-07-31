import Image from "next/image"
import Link from "next/link"
import type { Collection } from "@/lib/types"
import { StatusBadge } from "./status-badge"
import { GradientButton } from "./gradient-button"
import { Badge } from "@/components/ui/badge"
import { Droplets, TrendingUp } from "lucide-react"

interface CollectionCardProps {
  collection: Collection
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collection/${collection.id}`}>
      <div className="group bg-[#21262d] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff] transition-all duration-300 hover:scale-105 h-[480px] flex flex-col">
        <div className="relative h-64 overflow-hidden flex-shrink-0">
          <div className="flip-container w-full h-full">
            <div className="flip-inner w-full h-full">
              <div className="flip-front w-full h-full">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flip-back w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h4 className="font-bold text-lg mb-2 line-clamp-1">{collection.name}</h4>
                  <p className="text-sm opacity-90 mb-3 line-clamp-3">{collection.description}</p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {collection.hasLiquidity && (
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 text-xs">
                        <Droplets className="w-3 h-3 mr-1" />
                        AMM Pool
                      </Badge>
                    )}
                    <Badge className="bg-green-600/20 text-green-300 border-green-600/30 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {collection.liquidityPercent}% Liquidity
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <StatusBadge mintPhase={collection.mintPhase} />
          </div>
          {collection.hasLiquidity && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-blue-600/80 text-white border-0 text-xs">
                <Droplets className="w-3 h-3 mr-1" />
                AMM
              </Badge>
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">{collection.name}</h3>
          <p className="text-[#7d8590] text-sm mb-3 line-clamp-1">by {collection.creator}</p>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <span className="text-[#7d8590] text-xs">
                {collection.mintPhase === "trading" ? "Floor Price" : "Presale Price"}
              </span>
              <div className="text-white font-bold line-clamp-1">{collection.price}</div>
            </div>
            <div className="text-right">
              <span className="text-[#7d8590] text-xs">Sold</span>
              <div className="text-white font-bold line-clamp-1">
                {collection.minted.toLocaleString()}/{collection.total.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between text-xs text-[#7d8590] mb-1">
              <span>Progress</span>
              <span>{Math.round((collection.minted / collection.total) * 100)}%</span>
            </div>
            <div className="w-full bg-[#30363d] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(collection.minted / collection.total) * 100}%` }}
              />
            </div>
          </div>

          {collection.bondingCurve && (
            <div className="mb-3 p-2 bg-[#0d1117] rounded-lg">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7d8590]">Bonding Curve</span>
                <span className="text-green-400">+{collection.bondingCurve.priceIncrease}%</span>
              </div>
            </div>
          )}

          <div className="mt-auto">
            <GradientButton className="w-full" size="sm">
              {collection.mintPhase === "live"
                ? "Buy Now"
                : collection.mintPhase === "trading"
                  ? "Trade on AMM"
                  : collection.mintPhase === "whitelist"
                    ? "Join Whitelist"
                    : "Coming Soon"}
            </GradientButton>
          </div>
        </div>
      </div>
    </Link>
  )
}
