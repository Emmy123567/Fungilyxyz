"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { TrendingUp, BarChart3, Coins, ShoppingCart, Activity, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TradePage({ params }: { params: { collectionId: string } }) {
  const [buyQuantity, setBuyQuantity] = useState(1)
  const [selectedNFTs, setSelectedNFTs] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("recent")
  const [filterBy, setFilterBy] = useState("all")

  // Mock data
  const collection = {
    name: "Cosmic Creatures",
    floorPrice: 0.12,
    volume24h: 45.7,
    priceChange24h: 8.5,
    totalVolume: 1247.3,
    holders: 3421,
    currentPrice: 0.125,
    listed: 234,
    avgSalePrice: 0.118,
  }

  const ownedNFTs = [
    {
      id: 1,
      tokenId: "#1234",
      name: "Cosmic Creature #1234",
      image: "/placeholder.svg?height=200&width=200",
      rarity: "Rare",
      lastSale: 0.11,
      estimatedValue: 0.125,
    },
    {
      id: 2,
      tokenId: "#5678",
      name: "Cosmic Creature #5678",
      image: "/placeholder.svg?height=200&width=200",
      rarity: "Epic",
      lastSale: 0.15,
      estimatedValue: 0.18,
    },
    {
      id: 3,
      tokenId: "#9012",
      name: "Cosmic Creature #9012",
      image: "/placeholder.svg?height=200&width=200",
      rarity: "Common",
      lastSale: 0.08,
      estimatedValue: 0.095,
    },
  ]

  const recentActivity = [
    { type: "sale", tokenId: "#8765", price: 0.125, time: "2m ago", from: "0x1234...5678", to: "0xabcd...efgh" },
    { type: "listing", tokenId: "#4321", price: 0.13, time: "5m ago", from: "0x9876...5432", to: null },
    { type: "sale", tokenId: "#1111", price: 0.118, time: "8m ago", from: "0xaaaa...bbbb", to: "0xcccc...dddd" },
    { type: "offer", tokenId: "#2222", price: 0.11, time: "12m ago", from: "0xeeee...ffff", to: "0x1111...2222" },
  ]

  const toggleNFTSelection = (nftId: number) => {
    setSelectedNFTs((prev) => (prev.includes(nftId) ? prev.filter((id) => id !== nftId) : [...prev, nftId]))
  }

  const selectedNFTsData = ownedNFTs.filter((nft) => selectedNFTs.includes(nft.id))
  const totalEstimatedValue = selectedNFTsData.reduce((sum, nft) => sum + nft.estimatedValue, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-pink-600">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Fungily
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/explore" className="text-white/80 hover:text-white">
                Explore
              </Link>
              <Link href={`/mint/${params.collectionId}`} className="text-white/80 hover:text-white">
                Mint
              </Link>
              <Button className="bg-white text-purple-900 hover:bg-purple-50">Connect Wallet</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href={`/mint/${params.collectionId}`} className="text-purple-200 hover:text-white">
              ← Back to Collection
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{collection.name}</h1>
          <p className="text-purple-200">Trade NFTs with built-in liquidity pools and bonding curve pricing</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Floor Price</p>
                  <p className="text-white text-xl font-bold">{collection.floorPrice} ETH</p>
                </div>
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">24h Volume</p>
                  <p className="text-white text-xl font-bold">{collection.volume24h} ETH</p>
                </div>
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">24h Change</p>
                  <p className="text-green-400 text-xl font-bold">+{collection.priceChange24h}%</p>
                </div>
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Listed</p>
                  <p className="text-white text-xl font-bold">{collection.listed}</p>
                </div>
                <Coins className="w-6 h-6 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Holders</p>
                  <p className="text-white text-xl font-bold">{collection.holders.toLocaleString()}</p>
                </div>
                <Coins className="w-6 h-6 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Avg Sale</p>
                  <p className="text-white text-xl font-bold">{collection.avgSalePrice} ETH</p>
                </div>
                <Activity className="w-6 h-6 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Trading Interface */}
          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">NFT Liquidity Pool</CardTitle>
                    <CardDescription className="text-purple-200">
                      Trade NFTs instantly with bonding curve pricing
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-600 text-white">Active Pool</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="buy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-white/10">
                    <TabsTrigger
                      value="buy"
                      className="data-[state=active]:bg-white data-[state=active]:text-purple-900"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy NFTs
                    </TabsTrigger>
                    <TabsTrigger
                      value="sell"
                      className="data-[state=active]:bg-white data-[state=active]:text-purple-900"
                    >
                      <Coins className="w-4 h-4 mr-2" />
                      Sell NFTs
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="buy" className="space-y-6 mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Quantity to Buy</label>
                        <Input
                          type="number"
                          value={buyQuantity}
                          onChange={(e) => setBuyQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                          min="1"
                          max="10"
                          className="bg-white/20 border-white/30 text-white"
                        />
                        <p className="text-purple-200 text-sm mt-1">Max 10 NFTs per transaction</p>
                      </div>
                      <div>
                        <label className="text-white text-sm font-medium mb-2 block">Current Pool Price</label>
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-2xl font-bold text-white">{collection.currentPrice} ETH</div>
                          <div className="text-green-400 text-sm">+2.1% from last trade</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <h4 className="text-white font-medium mb-4">Order Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-white">
                          <span>Price per NFT:</span>
                          <span>{collection.currentPrice} ETH</span>
                        </div>
                        <div className="flex justify-between text-white">
                          <span>Quantity:</span>
                          <span>{buyQuantity}</span>
                        </div>
                        <div className="flex justify-between text-purple-200 text-sm">
                          <span>Slippage (est.):</span>
                          <span>~0.5%</span>
                        </div>
                        <div className="flex justify-between text-purple-200 text-sm">
                          <span>Gas Fee (est.):</span>
                          <span>~0.008 ETH</span>
                        </div>
                        <div className="border-t border-white/10 pt-2 mt-3">
                          <div className="flex justify-between text-white font-bold text-lg">
                            <span>Total Cost:</span>
                            <span>{(collection.currentPrice * buyQuantity + 0.008).toFixed(3)} ETH</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy {buyQuantity} NFT{buyQuantity > 1 ? "s" : ""} from Pool
                    </Button>
                  </TabsContent>

                  <TabsContent value="sell" className="space-y-6 mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-medium">Select NFTs to Sell ({selectedNFTs.length} selected)</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedNFTs([])}
                        className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                      >
                        Clear Selection
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {ownedNFTs.map((nft) => (
                        <div
                          key={nft.id}
                          className={`relative cursor-pointer rounded-lg border-2 transition-all ${
                            selectedNFTs.includes(nft.id)
                              ? "border-white bg-white/10"
                              : "border-white/20 hover:border-white/40"
                          }`}
                          onClick={() => toggleNFTSelection(nft.id)}
                        >
                          <Image
                            src={nft.image || "/placeholder.svg"}
                            alt={nft.name}
                            width={200}
                            height={200}
                            className="w-full aspect-square object-cover rounded-t-lg"
                          />
                          <div className="p-3">
                            <p className="text-white font-medium text-sm truncate">{nft.tokenId}</p>
                            <div className="flex items-center justify-between mt-1">
                              <Badge
                                className={`text-xs ${
                                  nft.rarity === "Epic"
                                    ? "bg-purple-600"
                                    : nft.rarity === "Rare"
                                      ? "bg-blue-600"
                                      : "bg-gray-600"
                                } text-white`}
                              >
                                {nft.rarity}
                              </Badge>
                              <span className="text-purple-200 text-xs">{nft.estimatedValue} ETH</span>
                            </div>
                          </div>
                          {selectedNFTs.includes(nft.id) && (
                            <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                              <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {selectedNFTs.length > 0 && (
                      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h4 className="text-white font-medium mb-4">Sell Summary</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-white">
                            <span>Selected NFTs:</span>
                            <span>{selectedNFTs.length}</span>
                          </div>
                          <div className="flex justify-between text-white">
                            <span>Pool Price (avg):</span>
                            <span>{(collection.currentPrice * 0.95).toFixed(3)} ETH</span>
                          </div>
                          <div className="flex justify-between text-purple-200 text-sm">
                            <span>Pool Fee (2%):</span>
                            <span>-{(totalEstimatedValue * 0.02).toFixed(4)} ETH</span>
                          </div>
                          <div className="border-t border-white/10 pt-2 mt-3">
                            <div className="flex justify-between text-white font-bold text-lg">
                              <span>You'll Receive:</span>
                              <span>{(totalEstimatedValue * 0.93).toFixed(3)} ETH</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold"
                      disabled={selectedNFTs.length === 0}
                    >
                      <Coins className="w-5 h-5 mr-2" />
                      Sell {selectedNFTs.length} NFT{selectedNFTs.length !== 1 ? "s" : ""} to Pool
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Price Chart */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Bonding Curve & Price History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <p className="text-purple-200">Interactive price chart coming soon</p>
                    <p className="text-purple-300 text-sm mt-2">
                      Real-time bonding curve visualization with trading history
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Portfolio */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Your Portfolio</CardTitle>
                <CardDescription className="text-purple-200">
                  {ownedNFTs.length} NFTs • {ownedNFTs.reduce((sum, nft) => sum + nft.estimatedValue, 0).toFixed(2)} ETH
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ownedNFTs.slice(0, 3).map((nft) => (
                    <div key={nft.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Image
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{nft.tokenId}</p>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={`text-xs ${
                              nft.rarity === "Epic"
                                ? "bg-purple-600"
                                : nft.rarity === "Rare"
                                  ? "bg-blue-600"
                                  : "bg-gray-600"
                            } text-white`}
                          >
                            {nft.rarity}
                          </Badge>
                          <span className="text-purple-200 text-sm">{nft.estimatedValue} ETH</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {ownedNFTs.length > 3 && (
                    <p className="text-center text-purple-200 text-sm">+{ownedNFTs.length - 3} more NFTs</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                  <div className="flex gap-2">
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white">
                        <Filter className="w-4 h-4" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="listings">Listings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge
                          className={`${
                            activity.type === "sale"
                              ? "bg-green-600"
                              : activity.type === "listing"
                                ? "bg-blue-600"
                                : activity.type === "offer"
                                  ? "bg-orange-600"
                                  : "bg-gray-600"
                          } text-white text-xs`}
                        >
                          {activity.type}
                        </Badge>
                        <div>
                          <p className="text-white text-sm font-medium">{activity.tokenId}</p>
                          <p className="text-purple-200 text-xs">{activity.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{activity.price} ETH</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Pool Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-purple-200">Pool Liquidity:</span>
                  <span className="text-white font-medium">847 NFTs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">ETH Reserve:</span>
                  <span className="text-white font-medium">105.7 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">24h Trades:</span>
                  <span className="text-white font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Pool Fee:</span>
                  <span className="text-white font-medium">2%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
