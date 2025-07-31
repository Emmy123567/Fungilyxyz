"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Minus, Plus, Clock, Users, Zap, TrendingUp, Shield, Star, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MintPage({ params }: { params: { collectionId: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  })

  // Mock data - in real app this would come from API
  const collection = {
    name: "Cosmic Creatures",
    description:
      "A collection of 10,000 unique cosmic creatures exploring the universe. Each creature has unique traits and abilities that unlock special features in our upcoming game.",
    image: "/placeholder.svg?height=500&width=500",
    bannerImage: "/placeholder.svg?height=300&width=800",
    creator: {
      name: "ArtistDAO",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
      followers: "12.5K",
    },
    currentPhase: "Whitelist",
    price: 0.05,
    minted: 2847,
    totalSupply: 10000,
    maxPerWallet: 5,
    userMinted: 0,
    floorPrice: 0.12,
    volume24h: 45.7,
    holders: 3421,
    socialLinks: {
      twitter: "https://twitter.com/cosmiccreatures",
      discord: "https://discord.gg/cosmiccreatures",
      website: "https://cosmiccreatures.io",
    },
  }

  const progress = (collection.minted / collection.totalSupply) * 100
  const phaseColor =
    collection.currentPhase === "Live"
      ? "bg-green-600"
      : collection.currentPhase === "Whitelist"
        ? "bg-orange-600"
        : "bg-gray-600"

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const recentMints = [
    { id: "#9876", price: "0.05 ETH", time: "2m ago", buyer: "0x1234...5678" },
    { id: "#9875", price: "0.05 ETH", time: "5m ago", buyer: "0xabcd...efgh" },
    { id: "#9874", price: "0.05 ETH", time: "8m ago", buyer: "0x9876...5432" },
  ]

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
              <Button className="bg-white text-purple-900 hover:bg-purple-50">Connect Wallet</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={collection.bannerImage || "/placeholder.svg"}
          alt="Collection Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-4">
          <Badge className={`${phaseColor} text-white border-0 text-lg px-4 py-2`}>
            {collection.currentPhase} Phase
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Collection Header */}
            <div className="flex items-start gap-6">
              <div className="relative">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  width={120}
                  height={120}
                  className="rounded-2xl border-4 border-white/20"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-white">{collection.name}</h1>
                  {collection.creator.verified && (
                    <div className="bg-blue-600 rounded-full p-1">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={collection.creator.avatar || "/placeholder.svg"}
                      alt={collection.creator.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-white font-medium">{collection.creator.name}</span>
                  </div>
                  <div className="text-purple-200">{collection.creator.followers} followers</div>
                </div>
                <p className="text-purple-100 leading-relaxed mb-4">{collection.description}</p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Website
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Discord
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">{collection.floorPrice} ETH</div>
                  <div className="text-purple-200 text-sm">Floor Price</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">{collection.volume24h} ETH</div>
                  <div className="text-purple-200 text-sm">24h Volume</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">{collection.holders.toLocaleString()}</div>
                  <div className="text-purple-200 text-sm">Holders</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-white">{Math.round(progress)}%</div>
                  <div className="text-purple-200 text-sm">Minted</div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="mint" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/10">
                <TabsTrigger value="mint" className="data-[state=active]:bg-white data-[state=active]:text-purple-900">
                  Mint
                </TabsTrigger>
                <TabsTrigger
                  value="activity"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-900"
                >
                  Activity
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-900"
                >
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mint" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Mint Your NFT</h3>
                      <p className="text-purple-200">Join the cosmic adventure</p>
                    </div>

                    {/* Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-white mb-2">
                        <span>Minted</span>
                        <span>
                          {collection.minted.toLocaleString()} / {collection.totalSupply.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={progress} className="h-3" />
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="border-white/30 text-white hover:bg-white hover:text-purple-900"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <div className="text-center">
                        <Input
                          type="number"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(
                              Math.max(1, Math.min(collection.maxPerWallet, Number.parseInt(e.target.value) || 1)),
                            )
                          }
                          className="w-20 text-center bg-white/20 border-white/30 text-white text-lg font-bold"
                          min="1"
                          max={collection.maxPerWallet}
                        />
                        <p className="text-purple-200 text-sm mt-1">Quantity</p>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.min(collection.maxPerWallet, quantity + 1))}
                        className="border-white/30 text-white hover:bg-white hover:text-purple-900"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="bg-white/5 rounded-lg p-4 mb-6">
                      <div className="flex justify-between text-white mb-2">
                        <span>Price per NFT:</span>
                        <span>{collection.price} ETH</span>
                      </div>
                      <div className="flex justify-between text-white mb-2">
                        <span>Quantity:</span>
                        <span>{quantity}</span>
                      </div>
                      <div className="flex justify-between text-purple-200 text-sm mb-2">
                        <span>Gas Fee (est.):</span>
                        <span>~0.005 ETH</span>
                      </div>
                      <div className="border-t border-white/10 pt-2">
                        <div className="flex justify-between text-white font-bold text-lg">
                          <span>Total Cost:</span>
                          <span>{(collection.price * quantity + 0.005).toFixed(3)} ETH</span>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-white text-purple-900 hover:bg-purple-50 text-lg py-6 font-semibold">
                      <Zap className="w-5 h-5 mr-2" />
                      Connect Wallet & Mint
                    </Button>

                    <p className="text-center text-purple-200 text-sm mt-4">
                      You have minted {collection.userMinted} / {collection.maxPerWallet} NFTs
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Mints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentMints.map((mint, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{mint.id.slice(-2)}</span>
                            </div>
                            <div>
                              <p className="text-white font-medium">{mint.id}</p>
                              <p className="text-purple-200 text-sm">{mint.buyer}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">{mint.price}</p>
                            <p className="text-purple-200 text-sm">{mint.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Collection Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                      <p className="text-purple-200">Analytics chart would go here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Countdown */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {collection.currentPhase} Phase Ends In
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                    <div className="text-purple-200 text-sm">Days</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                    <div className="text-purple-200 text-sm">Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                    <div className="text-purple-200 text-sm">Minutes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                    <div className="text-purple-200 text-sm">Seconds</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your NFTs */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Your NFTs</CardTitle>
                <CardDescription className="text-purple-200">0 NFTs owned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-purple-200 py-8">
                  <Star className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No NFTs minted yet</p>
                  <p className="text-sm mt-2">Your minted NFTs will appear here</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href={`/trade/${params.collectionId}`}>
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Trade NFTs
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
