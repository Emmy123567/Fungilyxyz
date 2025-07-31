export interface Collection {
  id: number
  name: string
  description: string
  image: string
  mintPhase: "live" | "whitelist" | "upcoming" | "trading" | "ended"
  price: string
  minted: number
  total: number
  chain: string
  creator: string
  category: string
  hasLiquidity: boolean
  liquidityPercent: number
  royalties: number
  mintType: "Fixed" | "Tiered" | "Free"
  bondingCurve?: {
    priceIncrease: number
    currentMultiplier: number
  }
}
