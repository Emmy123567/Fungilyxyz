"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, Calendar, DollarSign, Settings, Zap, Info, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [whitelistEnabled, setWhitelistEnabled] = useState(false)
  const [royaltyPercentage, setRoyaltyPercentage] = useState([5])
  const [liquidityPercentage, setLiquidityPercentage] = useState([10])
  const [fundsPercentage, setFundsPercentage] = useState([20])
  const [pricingType, setPricingType] = useState("fixed")

  const steps = [
    { id: 1, name: "Collection Info", icon: Upload },
    { id: 2, name: "Mint Config", icon: Calendar },
    { id: 3, name: "Pricing & Supply", icon: DollarSign },
    { id: 4, name: "Royalties & Liquidity", icon: Settings },
    { id: 5, name: "Review & Deploy", icon: Zap },
  ]

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-pink-600">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Fungily
            </Link>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              Save Draft
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Launch Your NFT Collection</h1>
          <p className="text-purple-200">Create your collection with built-in liquidity pools</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    currentStep >= step.id ? "bg-white text-purple-900 border-white" : "border-white/30 text-white"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                </div>
                <div className="ml-3 hidden md:block">
                  <p className={`text-sm font-medium ${currentStep >= step.id ? "text-white" : "text-purple-200"}`}>
                    Step {step.id}
                  </p>
                  <p className={`text-xs ${currentStep >= step.id ? "text-purple-100" : "text-purple-300"}`}>
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block w-16 h-0.5 ml-4 ${currentStep > step.id ? "bg-white" : "bg-white/30"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {currentStep === 1 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Collection Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Collection Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="My Awesome NFTs"
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="symbol" className="text-white">
                      Symbol *
                    </Label>
                    <Input
                      id="symbol"
                      placeholder="FNGY"
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your collection, its utility, and what makes it unique..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 min-h-[120px]"
                  />
                </div>

                <div>
                  <Label className="text-white">Upload Images or Generative Layers</Label>
                  <div className="mt-2">
                    <div className="border-2 border-dashed border-white/30 rounded-lg p-12 text-center hover:border-white/50 transition-colors">
                      <Upload className="w-16 h-16 text-white/60 mx-auto mb-4" />
                      <p className="text-white/80 text-lg mb-2">Drop files here or click to upload</p>
                      <p className="text-purple-200 text-sm mb-4">Support for PNG, JPG, GIF up to 10MB each</p>
                      <div className="flex gap-4 justify-center">
                        <Button
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          Upload Static Images
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          Upload Generative Layers
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-blue-100 font-medium">IPFS Storage</p>
                      <p className="text-blue-200 text-sm">
                        Your images will be stored on IPFS for permanent decentralized hosting.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Mint Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="startDate" className="text-white">
                      Mint Start Date *
                    </Label>
                    <Input id="startDate" type="datetime-local" className="bg-white/20 border-white/30 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="endDate" className="text-white">
                      Mint End Date *
                    </Label>
                    <Input id="endDate" type="datetime-local" className="bg-white/20 border-white/30 text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="whitelist"
                      checked={whitelistEnabled}
                      onCheckedChange={setWhitelistEnabled}
                      className="border-white/30"
                    />
                    <Label htmlFor="whitelist" className="text-white font-medium">
                      Enable Whitelist Phase
                    </Label>
                    <Badge variant="secondary" className="bg-purple-600 text-white">
                      Recommended
                    </Badge>
                  </div>

                  {whitelistEnabled && (
                    <div className="ml-6 space-y-4 p-6 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="text-white font-medium flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Whitelist Phase Configuration
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-white">Whitelist Start *</Label>
                          <Input type="datetime-local" className="bg-white/20 border-white/30 text-white" />
                        </div>
                        <div>
                          <Label className="text-white">Whitelist End *</Label>
                          <Input type="datetime-local" className="bg-white/20 border-white/30 text-white" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-white">Max per Wallet</Label>
                          <Input
                            type="number"
                            placeholder="5"
                            className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                          />
                        </div>
                        <div>
                          <Label className="text-white">Whitelist Price (ETH)</Label>
                          <Input
                            type="number"
                            step="0.001"
                            placeholder="0.05"
                            className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 p-6 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-medium">Public Phase Configuration</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Public Start *</Label>
                        <Input type="datetime-local" className="bg-white/20 border-white/30 text-white" />
                      </div>
                      <div>
                        <Label className="text-white">Public End *</Label>
                        <Input type="datetime-local" className="bg-white/20 border-white/30 text-white" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Max per Wallet</Label>
                        <Input
                          type="number"
                          placeholder="10"
                          className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Public Price (ETH)</Label>
                        <Input
                          type="number"
                          step="0.001"
                          placeholder="0.1"
                          className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Pricing & Supply
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white">Total Supply Cap *</Label>
                    <Input
                      type="number"
                      placeholder="10000"
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    />
                    <p className="text-purple-200 text-sm mt-1">Maximum number of NFTs in your collection</p>
                  </div>
                  <div>
                    <Label className="text-white">Max NFTs Per Wallet *</Label>
                    <Input
                      type="number"
                      placeholder="20"
                      className="bg-white/20 border-white/30 text-white placeholder:text-purple-200"
                    />
                    <p className="text-purple-200 text-sm mt-1">Prevents whale accumulation</p>
                  </div>
                </div>

                <div>
                  <Label className="text-white font-medium">Pricing Type</Label>
                  <RadioGroup value={pricingType} onValueChange={setPricingType} className="mt-3">
                    <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                      <RadioGroupItem value="fixed" id="fixed" className="border-white/30" />
                      <div className="flex-1">
                        <Label htmlFor="fixed" className="text-white font-medium">
                          Fixed Price
                        </Label>
                        <p className="text-purple-200 text-sm">Same price for all NFTs throughout the mint</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                      <RadioGroupItem value="tiered" id="tiered" className="border-white/30" />
                      <div className="flex-1">
                        <Label htmlFor="tiered" className="text-white font-medium">
                          Tiered Pricing
                        </Label>
                        <p className="text-purple-200 text-sm">Price increases as more NFTs are minted</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {pricingType === "tiered" && (
                  <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                      <div>
                        <p className="text-orange-100 font-medium">Tiered Pricing Configuration</p>
                        <p className="text-orange-200 text-sm">
                          Configure price tiers in the next step. This creates scarcity and rewards early minters.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Royalties & Liquidity Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <Label className="text-white font-medium">Royalty % on Secondary Trades</Label>
                  <div className="mt-4">
                    <Slider
                      value={royaltyPercentage}
                      onValueChange={setRoyaltyPercentage}
                      max={10}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-purple-200 mt-2">
                      <span>0%</span>
                      <span className="text-white font-medium bg-white/10 px-2 py-1 rounded">
                        {royaltyPercentage[0]}%
                      </span>
                      <span>10%</span>
                    </div>
                    <p className="text-purple-200 text-sm mt-2">
                      You'll earn {royaltyPercentage[0]}% on every secondary sale
                    </p>
                  </div>
                </div>

                <div>
                  <Label className="text-white font-medium">Royalty Receiver Wallet Address</Label>
                  <Input
                    placeholder="0x..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 mt-2"
                  />
                  <p className="text-purple-200 text-sm mt-1">Address that will receive royalty payments</p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-white font-medium text-lg mb-6">Liquidity Pool Configuration</h3>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-white font-medium">% of NFTs to deposit into AMM pool after mint</Label>
                      <div className="mt-4">
                        <Slider
                          value={liquidityPercentage}
                          onValueChange={setLiquidityPercentage}
                          max={50}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-purple-200 mt-2">
                          <span>0%</span>
                          <span className="text-white font-medium bg-white/10 px-2 py-1 rounded">
                            {liquidityPercentage[0]}%
                          </span>
                          <span>50%</span>
                        </div>
                        <p className="text-purple-200 text-sm mt-2">
                          {liquidityPercentage[0]}% of minted NFTs will provide instant liquidity
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label className="text-white font-medium">% of raised funds to add to liquidity pool</Label>
                      <div className="mt-4">
                        <Slider
                          value={fundsPercentage}
                          onValueChange={setFundsPercentage}
                          max={100}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-purple-200 mt-2">
                          <span>0%</span>
                          <span className="text-white font-medium bg-white/10 px-2 py-1 rounded">
                            {fundsPercentage[0]}%
                          </span>
                          <span>100%</span>
                        </div>
                        <p className="text-purple-200 text-sm mt-2">
                          {fundsPercentage[0]}% of mint proceeds will be added as ETH liquidity
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-green-100 font-medium">Automatic Liquidity Benefits</p>
                        <p className="text-green-200 text-sm">
                          Your NFTs will have instant liquidity from day one, making them more attractive to collectors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 5 && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Review & Deploy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-white font-medium text-lg mb-4">Deployment Summary</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-purple-200 text-sm font-medium mb-2">Collection Details</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-purple-200">Name:</span>
                          <span className="text-white">My Awesome NFTs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-200">Symbol:</span>
                          <span className="text-white">FNGY</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-200">Total Supply:</span>
                          <span className="text-white">10,000</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-purple-200 text-sm font-medium mb-2">Estimated Costs</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-purple-200">Contract Deploy:</span>
                          <span className="text-white">~0.05 ETH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-200">IPFS Storage:</span>
                          <span className="text-white">~0.01 ETH</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span className="text-purple-200">Total:</span>
                          <span className="text-white">~0.06 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent flex-1"
                  >
                    Preview Launch
                  </Button>
                  <Button className="bg-white text-purple-900 hover:bg-purple-50 flex-1">Deploy Collection</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
              disabled={currentStep === 5}
              className="bg-white text-purple-900 hover:bg-purple-50"
            >
              {currentStep === 5 ? "Deploy" : "Next Step"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
