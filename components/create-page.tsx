"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Navigation } from "./navigation"
import { GradientButton } from "./gradient-button"

export function CreatePage() {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    description: "",
    totalSupply: "",
    price: "",
    chain: "",
    hasLiquidity: false,
    liquidityPercent: "",
    royalties: "",
    mintType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating presale:", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Create Your Presale
            </h1>
            <p className="text-gray-300">Launch your NFT collection with built-in AMM liquidity</p>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Presale Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Collection Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="My Awesome Collection"
                    />
                  </div>
                  <div>
                    <Label htmlFor="symbol" className="text-white">
                      Token Symbol
                    </Label>
                    <Input
                      id="symbol"
                      value={formData.symbol}
                      onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="MAC"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Describe your collection..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="totalSupply" className="text-white">
                      Total Supply
                    </Label>
                    <Input
                      id="totalSupply"
                      type="number"
                      value={formData.totalSupply}
                      onChange={(e) => setFormData({ ...formData, totalSupply: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="10000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price" className="text-white">
                      Price (ETH)
                    </Label>
                    <Input
                      id="price"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white"
                      placeholder="0.05"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="chain" className="text-white">
                      Blockchain
                    </Label>
                    <Select
                      value={formData.chain}
                      onValueChange={(value) => setFormData({ ...formData, chain: value })}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue placeholder="Select blockchain" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="arbitrum">Arbitrum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="mintType" className="text-white">
                      Mint Type
                    </Label>
                    <Select
                      value={formData.mintType}
                      onValueChange={(value) => setFormData({ ...formData, mintType: value })}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue placeholder="Select mint type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="public">Public Presale</SelectItem>
                        <SelectItem value="whitelist">Whitelist Presale</SelectItem>
                        <SelectItem value="dutch">Dutch Auction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="hasLiquidity"
                    checked={formData.hasLiquidity}
                    onCheckedChange={(checked) => setFormData({ ...formData, hasLiquidity: checked })}
                  />
                  <Label htmlFor="hasLiquidity" className="text-white">
                    Enable AMM Liquidity
                  </Label>
                </div>

                {formData.hasLiquidity && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="liquidityPercent" className="text-white">
                        Liquidity Percentage
                      </Label>
                      <Input
                        id="liquidityPercent"
                        type="number"
                        value={formData.liquidityPercent}
                        onChange={(e) => setFormData({ ...formData, liquidityPercent: e.target.value })}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="25"
                      />
                    </div>
                    <div>
                      <Label htmlFor="royalties" className="text-white">
                        Royalties (%)
                      </Label>
                      <Input
                        id="royalties"
                        type="number"
                        value={formData.royalties}
                        onChange={(e) => setFormData({ ...formData, royalties: e.target.value })}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="5"
                      />
                    </div>
                  </div>
                )}

                <GradientButton className="w-full py-3">Create Presale</GradientButton>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
