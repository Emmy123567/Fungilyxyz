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
import { Upload, Calendar, DollarSign, Settings, Zap, CheckCircle, AlertCircle } from "lucide-react"
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
    <div className="min-h-screen bg-black">
      <nav className="bg-[#161b22] border-b border-[#30363d]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Fungily<span className="text-[#f78166]">NFT</span>
            </Link>
            <Button variant="outline" className="border-[#30363d] text-white hover:bg-[#21262d] bg-transparent">
              Save Draft
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Launch Your NFT Collection</h1>
          <p className="text-[#7d8590]">Create your collection with built-in liquidity pools</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    currentStep >= step.id ? "bg-white text-black border-white" : "border-[#30363d] text-white"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                </div>
                <div className="ml-3 hidden md:block">
                  <p className={`text-sm font-medium ${currentStep >= step.id ? "text-white" : "text-[#7d8590]"}`}>
                    Step {step.id}
                  </p>
                  <p className={`text-xs ${currentStep >= step.id ? "text-[#7d8590]" : "text-[#484f58]"}`}>
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block w-16 h-0.5 ml-4 ${currentStep > step.id ? "bg-white" : "bg-[#30363d]"}`}
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
            <Card className="bg-[#21262d] border-[#30363d]">
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
                      className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="symbol" className="text-white">
                      Symbol *
                    </Label>
                    <Input
                      id="symbol"
                      placeholder="FNGY"
                      className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your collection..."
                    className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590] min-h-[120px]"
                  />
                </div>

                <div>
                  <Label className="text-white">Upload Images</Label>
                  <div className="mt-2">
                    <div className="border-2 border-dashed border-[#30363d] rounded-lg p-12 text-center hover:border-[#58a6ff] transition-colors">
                      <Upload className="w-16 h-16 text-[#7d8590] mx-auto mb-4" />
                      <p className="text-white text-lg mb-2">Drop files here or click to upload</p>
                      <p className="text-[#7d8590] text-sm mb-4">Support for PNG, JPG, GIF up to 10MB each</p>
                      <Button
                        variant="outline"
                        className="border-[#30363d] text-white hover:bg-[#21262d] bg-transparent"
                      >
                        Upload Images
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="bg-[#21262d] border-[#30363d]">
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
                    <Input id="startDate" type="datetime-local" className="bg-[#0d1117] border-[#30363d] text-white" />
                  </div>
                  <div>
                    <Label htmlFor="endDate" className="text-white">
                      Mint End Date *
                    </Label>
                    <Input id="endDate" type="datetime-local" className="bg-[#0d1117] border-[#30363d] text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="whitelist"
                      checked={whitelistEnabled}
                      onCheckedChange={setWhitelistEnabled}
                      className="border-[#30363d]"
                    />
                    <Label htmlFor="whitelist" className="text-white font-medium">
                      Enable Whitelist Phase
                    </Label>
                    <Badge variant="secondary" className="bg-[#f78166] text-white">
                      Recommended
                    </Badge>
                  </div>

                  {whitelistEnabled && (
                    <div className="ml-6 space-y-4 p-6 bg-[#0d1117] rounded-lg border border-[#30363d]">
                      <h4 className="text-white font-medium flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Whitelist Phase Configuration
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-white">Whitelist Start *</Label>
                          <Input type="datetime-local" className="bg-[#0d1117] border-[#30363d] text-white" />
                        </div>
                        <div>
                          <Label className="text-white">Whitelist End *</Label>
                          <Input type="datetime-local" className="bg-[#0d1117] border-[#30363d] text-white" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-white">Max per Wallet</Label>
                          <Input
                            type="number"
                            placeholder="5"
                            className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                          />
                        </div>
                        <div>
                          <Label className="text-white">Whitelist Price (ETH)</Label>
                          <Input
                            type="number"
                            step="0.001"
                            placeholder="0.05"
                            className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 p-6 bg-[#0d1117] rounded-lg border border-[#30363d]">
                    <h4 className="text-white font-medium">Public Phase Configuration</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Public Start *</Label>
                        <Input type="datetime-local" className="bg-[#0d1117] border-[#30363d] text-white" />
                      </div>
                      <div>
                        <Label className="text-white">Public End *</Label>
                        <Input type="datetime-local" className="bg-[#0d1117] border-[#30363d] text-white" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Max per Wallet</Label>
                        <Input
                          type="number"
                          placeholder="10"
                          className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Public Price (ETH)</Label>
                        <Input
                          type="number"
                          step="0.001"
                          placeholder="0.1"
                          className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card className="bg-[#21262d] border-[#30363d]">
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
                      className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                    />
                    <p className="text-[#7d8590] text-sm mt-1">Maximum number of NFTs in your collection</p>
                  </div>
                  <div>
                    <Label className="text-white">Max NFTs Per Wallet *</Label>
                    <Input
                      type="number"
                      placeholder="20"
                      className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590]"
                    />
                    <p className="text-[#7d8590] text-sm mt-1">Prevents whale accumulation</p>
                  </div>
                </div>

                <div>
                  <Label className="text-white font-medium">Pricing Type</Label>
                  <RadioGroup value={pricingType} onValueChange={setPricingType} className="mt-3">
                    <div className="flex items-center space-x-3 p-4 bg-[#0d1117] rounded-lg border border-[#30363d]">
                      <RadioGroupItem value="fixed" id="fixed" className="border-[#30363d]" />
                      <div className="flex-1">
                        <Label htmlFor="fixed" className="text-white font-medium">
                          Fixed Price
                        </Label>
                        <p className="text-[#7d8590] text-sm">Same price for all NFTs throughout the mint</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-[#0d1117] rounded-lg border border-[#30363d]">
                      <RadioGroupItem value="tiered" id="tiered" className="border-[#30363d]" />
                      <div className="flex-1">
                        <Label htmlFor="tiered" className="text-white font-medium">
                          Tiered Pricing
                        </Label>
                        <p className="text-[#7d8590] text-sm">Price increases as more NFTs are minted</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {pricingType === "tiered" && (
                  <div className="bg-[#f78166]/20 border border-[#f78166]/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-[#f78166] mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Tiered Pricing Configuration</p>
                        <p className="text-[#7d8590] text-sm">
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
            <Card className="bg-[#21262d] border-[#30363d]">
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
                    <div className="flex justify-between text-sm text-[#7d8590] mt-2">
                      <span>0%</span>
                      <span className="text-white font-medium bg-white/10 px-2 py-1 rounded">
                        {royaltyPercentage[0]}%
                      </span>
                      <span>10%</span>
                    </div>
                    <p className="text-[#7d8590] text-sm mt-2">
                      You'll earn {royaltyPercentage[0]}% on every secondary sale
                    </p>
                  </div>
                </div>

                <div>
                  <Label className="text-white font-medium">Royalty Receiver Wallet Address</Label>
                  <Input
                    placeholder="0x..."
                    className="bg-[#0d1117] border-[#30363d] text-white placeholder:text-[#7d8590] mt-2"
                  />
                  <p className="text-[#7d8590] text-sm mt-1">Address that will receive royalty payments</p>
                </div>

                <div className="border-t border-[#30363d] pt-8">
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
                        <div className="flex justify-between text-sm text-[#7d8590] mt-2">
                          <span>0%</span>
                          <span className="text-white font-medium bg-white/10 px-2 py-1 rounded">
                            {liquidityPercentage[0]}%
                          </span>
                          <span>50%</span>
                        </div>
                        <p className="text-[#7d8590] text-sm mt-2">
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
                        <div className="flex justify-between text-sm text-[#7d8590] mt-2">
                          <span>0%</span>
                          <span className="text-white font-medium bg-white/10 px-2 py-1 rounded">
                            {fundsPercentage[0]}%
                          </span>
                          <span>100%</span>
                        </div>
                        <p className="text-[#7d8590] text-sm mt-2">
                          {fundsPercentage[0]}% of mint proceeds will be added as ETH liquidity
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#50fa7b]/20 border border-[#50fa7b]/30 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#50fa7b] mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Automatic Liquidity Benefits</p>
                        <p className="text-[#7d8590] text-sm">
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
            <Card className="bg-[#21262d] border-[#30363d]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Review & Deploy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-[#0d1117] rounded-lg p-6 border border-[#30363d]">
                  <h3 className="text-white font-medium text-lg mb-4">Deployment Summary</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-[#7d8590] text-sm font-medium mb-2">Collection Details</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#7d8590]">Name:</span>
                          <span className="text-white">My Awesome NFTs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7d8590]">Symbol:</span>
                          <span className="text-white">FNGY</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7d8590]">Total Supply:</span>
                          <span className="text-white">10,000</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#7d8590] text-sm font-medium mb-2">Estimated Costs</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#7d8590]">Contract Deploy:</span>
                          <span className="text-white">~0.05 ETH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7d8590]">IPFS Storage:</span>
                          <span className="text-white">~0.01 ETH</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span className="text-[#7d8590]">Total:</span>
                          <span className="text-white">~0.06 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-[#30363d] text-white hover:bg-[#21262d] bg-transparent flex-1"
                  >
                    Preview Launch
                  </Button>
                  <Button className="bg-white text-black hover:bg-[#f0f6fc] flex-1">Deploy Collection</Button>
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
              className="border-[#30363d] text-white hover:bg-[#21262d] bg-transparent"
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
              disabled={currentStep === 5}
              className="bg-white text-black hover:bg-[#f0f6fc]"
            >
              {currentStep === 5 ? "Deploy" : "Next Step"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
