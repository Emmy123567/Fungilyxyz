"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { GradientButton } from "./gradient-button"
import { mockCollections } from "@/lib/mock-data"
import type { Collection } from "@/lib/types"

interface CollectionPageProps {
  collectionId: string
}

export function CollectionPage({ collectionId }: CollectionPageProps) {
  const router = useRouter()
  const [collection, setCollection] = useState<Collection | null>(null)
  const [amount, setAmount] = useState("")
  const [timeLeft, setTimeLeft] = useState({
    days: 17,
    hours: 14,
    minutes: 39,
    seconds: 19,
  })

  useEffect(() => {
    const found = mockCollections.find((c) => c.id === collectionId)
    setCollection(found || null)
  }, [collectionId])

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  if (!collection) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Collection not found</div>
      </div>
    )
  }

  const progress = (collection.minted / collection.total) * 100

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-purple-900 via-blue-900 to-pink-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-8 top-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Collections
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 flex items-center gap-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
              <Image src={collection.image || "/placeholder.svg"} alt={collection.name} fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 text-white">DISRUPT | EXPOSE | RECLAIM</h1>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold">{collection.name} Presale</h2>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">#2</Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Audit</Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">Sale live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="bg-[#21262d] border-[#30363d]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">About</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{collection.description}</p>
                <p className="text-gray-300 leading-relaxed mb-4">Buy now or stay in the dark.</p>
              </CardContent>
            </Card>

            {/* Video Section */}
            <Card className="bg-[#21262d] border-[#30363d]">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                      </div>
                      <h3 className="text-xl font-bold">DISRUPT | EXPOSE | RECLAIM</h3>
                      <p className="text-gray-400 mt-2">Watch on YouTube</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Token Information */}
            {collection.tokenInfo && (
              <Card className="bg-[#21262d] border-[#30363d]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Token</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-[#30363d]">
                      <span className="text-gray-400">Address</span>
                      <div className="flex items-center gap-2">
                        <span className="text-pink-400 font-mono text-sm">{collection.tokenInfo.address}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(collection.tokenInfo!.address)}
                          className="h-6 w-6 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-yellow-400 text-sm">
                        <span>⚠️</span>
                        <span>Do not send ETH to the token address</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-400">Name</span>
                        <span className="text-white">{collection.tokenInfo.name}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-400">Symbol</span>
                        <span className="text-white">{collection.tokenInfo.symbol}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-400">Decimals</span>
                        <span className="text-white">{collection.tokenInfo.decimals}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-400">Total Supply</span>
                        <span className="text-white">{collection.tokenInfo.totalSupply}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Countdown Timer */}
            <Card className="bg-[#21262d] border-[#30363d]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Presale Ends In</h3>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="bg-pink-500 text-white font-bold text-lg py-2 px-1 rounded">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>6.4203 ETH ($23.9K)</span>
                    <span>34.4 ETH ($128K)</span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Amount</label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="0"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-[#0d1117] border-[#30363d] text-white"
                      />
                      <Button variant="outline" size="sm" className="border-[#30363d] text-pink-400 bg-transparent">
                        MAX
                      </Button>
                    </div>
                  </div>

                  <GradientButton className="w-full">Connect Wallet</GradientButton>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-[#21262d] border-[#30363d]">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full" />
                    <div>
                      <div className="font-medium">Waiting for pool start</div>
                      <div className="text-sm text-gray-400">No one can purchase</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full" />
                    <div>
                      <div className="font-medium">Pool Start</div>
                      <div className="text-sm text-gray-400">Pool starts at 2025.06.18 13:00 (UTC)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-500 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-400">Pool Ended</div>
                      <div className="text-sm text-gray-400">Pool ends at 2025.08.18 13:00 (UTC)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-[#21262d] border-[#30363d]">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400">Sale live</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sale Type</span>
                    <span className="text-pink-400">Public</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Unsold Tokens</span>
                    <span className="text-white">209,847,795.8096 INS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Buy</span>
                    <span className="text-white">0.01 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Max Buy</span>
                    <span className="text-white">2 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Raised</span>
                    <span className="text-white">6.4203 ETH (18.66%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Contributors</span>
                    <span className="text-white">30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vesting For Presale</span>
                    <span className="text-white">10% each 7 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
