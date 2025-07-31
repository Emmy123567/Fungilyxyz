"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Plus, Minus, TrendingUp, Droplets, Zap, Users } from "lucide-react"
import { Navigation } from "./navigation"
import { GradientButton } from "./gradient-button"
import { StatusBadge } from "./status-badge"
import { mockCollections } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CollectionPageProps {
  collectionId: string
}

export function CollectionPage({ collectionId }: CollectionPageProps) {
  const [quantity, setQuantity] = useState(1)
  const collection = mockCollections.find((c) => c.id === Number.parseInt(collectionId))

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Collection Not Found</h1>
          <Link href="/" className="text-purple-200 hover:text-white transition-colors">
            ← Back to Collections
          </Link>
        </div>
      </div>
    )
  }

  const progress = (collection.minted / collection.total) * 100
  const totalCost = Number.parseFloat(collection.price.replace(/[^\d.]/g, "")) * quantity

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-purple-200 hover:text-white mb-8 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collections
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Collection Image & Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative rounded-xl overflow-hidden bg-[#21262d] border border-[#30363d]">
              <div className="aspect-square relative">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-4 right-4">
                <StatusBadge mintPhase={collection.mintPhase} />
              </div>
              {collection.hasLiquidity && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600/80 text-white border-0">
                    <Droplets className="w-4 h-4 mr-1" />
                    AMM Pool Active
                  </Badge>
                </div>
              )}
            </div>

            {/* Collection Stats */}
            <Card className="bg-[#21262d] border border-[#30363d]">
              <CardHeader>
                <CardTitle className="text-white">Collection Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#7d8590]">Total Supply</span>
                  <span className="text-white font-medium">{collection.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7d8590]">Minted</span>
                  <span className="text-white font-medium">{collection.minted.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7d8590]">Creator</span>
                  <span className="text-white font-medium">{collection.creator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7d8590]">Royalties</span>
                  <span className="text-white font-medium">{collection.royalties}%</span>
                </div>
                {collection.hasLiquidity && (
                  <div className="flex justify-between">
                    <span className="text-[#7d8590]">Liquidity Pool</span>
                    <span className="text-green-400 font-medium">{collection.liquidityPercent}%</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{collection.name}</h1>
              <p className="text-[#7d8590] text-lg leading-relaxed mb-6">{collection.description}</p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Instant Trading
                </Badge>
                {collection.hasLiquidity && (
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                    <Droplets className="w-3 h-3 mr-1" />
                    AMM Liquidity
                  </Badge>
                )}
                <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Bonding Curve
                </Badge>
                <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">
                  <Users className="w-3 h-3 mr-1" />
                  {collection.mintPhase === "whitelist" ? "Whitelist" : "Public"}
                </Badge>
              </div>
            </div>

            <div>
              <Tabs defaultValue="mint" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#21262d] border border-[#30363d]">
                  <TabsTrigger
                    value="mint"
                    className="data-[state=active]:bg-[#30363d] data-[state=active]:text-white text-[#7d8590]"
                  >
                    {collection.mintPhase === "trading" ? "Buy from AMM" : "Mint"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="liquidity"
                    className="data-[state=active]:bg-[#30363d] data-[state=active]:text-white text-[#7d8590]"
                  >
                    Liquidity Pool
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-[#30363d] data-[state=active]:text-white text-[#7d8590]"
                  >
                    Details
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mint" className="mt-6">
                  <Card className="bg-[#21262d] border border-[#30363d]">
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[#7d8590]">
                          {collection.mintPhase === "trading" ? "Current AMM Price" : "Mint Price"}
                        </span>
                        <span className="text-3xl font-bold text-white">{collection.price}</span>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[#7d8590]">Progress</span>
                          <span className="text-white font-medium">
                            {collection.minted.toLocaleString()} / {collection.total.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-[#30363d] rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="text-right text-sm text-[#7d8590] mt-1">{Math.round(progress)}% complete</div>
                      </div>

                      {collection.mintPhase !== "ended" && (
                        <>
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
                            {collection.mintPhase === "trading" && (
                              <div className="flex justify-between">
                                <span className="text-[#7d8590]">AMM Fee (2%)</span>
                                <span className="text-white">~{(totalCost * 0.02).toFixed(4)} ETH</span>
                              </div>
                            )}
                            <div className="flex justify-between">
                              <span className="text-[#7d8590]">Gas (est.)</span>
                              <span className="text-white">~0.005 ETH</span>
                            </div>
                            <div className="border-t border-[#30363d] pt-2">
                              <div className="flex justify-between">
                                <span className="text-white font-medium">Total</span>
                                <span className="text-white font-bold text-lg">
                                  {(
                                    totalCost +
                                    (collection.mintPhase === "trading" ? totalCost * 0.02 : 0) +
                                    0.005
                                  ).toFixed(3)}{" "}
                                  ETH
                                </span>
                              </div>
                            </div>
                          </div>

                          <GradientButton className="w-full" size="lg">
                            {collection.mintPhase === "live"
                              ? `Mint ${quantity} NFT${quantity > 1 ? "s" : ""}`
                              : collection.mintPhase === "trading"
                                ? `Buy ${quantity} NFT${quantity > 1 ? "s" : ""} from AMM`
                                : collection.mintPhase === "whitelist"
                                  ? "Join Whitelist"
                                  : "Coming Soon"}
                          </GradientButton>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="liquidity" className="mt-6">
                  <Card className="bg-[#21262d] border border-[#30363d]">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-blue-400" />
                        NFT-AMM Liquidity Pool
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {collection.hasLiquidity ? (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0d1117] rounded-lg p-4">
                              <div className="text-[#7d8590] text-sm">Pool NFTs</div>
                              <div className="text-white text-xl font-bold">
                                {Math.floor(collection.total * (collection.liquidityPercent / 100))}
                              </div>
                            </div>
                            <div className="bg-[#0d1117] rounded-lg p-4">
                              <div className="text-[#7d8590] text-sm">Pool ETH</div>
                              <div className="text-white text-xl font-bold">
                                {(
                                  collection.total *
                                  Number.parseFloat(collection.price.replace(/[^\d.]/g, "")) *
                                  (collection.liquidityPercent / 100)
                                ).toFixed(1)}{" "}
                                ETH
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-4 h-4 text-green-400" />
                              <span className="text-green-400 font-medium">Bonding Curve Active</span>
                            </div>
                            <p className="text-[#7d8590] text-sm">
                              Price increases by {collection.bondingCurve?.priceIncrease}% with each purchase. Instant
                              liquidity ensures you can always buy or sell.
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <Droplets className="w-12 h-12 text-[#7d8590] mx-auto mb-4" />
                          <h3 className="text-white font-medium mb-2">No Liquidity Pool</h3>
                          <p className="text-[#7d8590] text-sm">This collection doesn't have an AMM pool configured.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="details" className="mt-6">
                  <Card className="bg-[#21262d] border border-[#30363d]">
                    <CardHeader>
                      <CardTitle className="text-white">Collection Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">Mint Configuration</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#7d8590]">Mint Type</span>
                            <span className="text-white">{collection.mintType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#7d8590]">Current Phase</span>
                            <span className="text-white capitalize">{collection.mintPhase}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#7d8590]">Max per Wallet</span>
                            <span className="text-white">10</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2">Tokenomics</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#7d8590]">Creator Royalties</span>
                            <span className="text-white">{collection.royalties}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#7d8590]">Protocol Fee</span>
                            <span className="text-white">2%</span>
                          </div>
                          {collection.hasLiquidity && (
                            <div className="flex justify-between">
                              <span className="text-[#7d8590]">Liquidity Allocation</span>
                              <span className="text-white">{collection.liquidityPercent}% of supply</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2">Smart Contract</h4>
                        <div className="bg-[#0d1117] rounded-lg p-3">
                          <code className="text-[#7d8590] text-xs break-all">
                            0x1234567890abcdef1234567890abcdef12345678
                          </code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
