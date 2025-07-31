export interface Collection {
  id: number
  name: string
  description: string
  image: string
  creator: string
  price: string
  minted: number
  total: number
  mintPhase: "upcoming" | "whitelist" | "live" | "trading" | "ended"
  chain: string
  hasLiquidity: boolean
  liquidityPercent: number
  royalties: number
  mintType: string
  bondingCurve?: {
    priceIncrease: number
  }
}
