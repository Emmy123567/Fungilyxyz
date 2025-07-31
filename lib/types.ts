export interface Collection {
  id: string
  name: string
  description: string
  image: string
  creator: string
  price: string
  minted: number
  total: number
  mintPhase: "upcoming" | "whitelist" | "live" | "trading"
  chain: string
  royalties: number
  mintType: string
  hasLiquidity: boolean
  liquidityPercent: number
  bondingCurve?: {
    priceIncrease: number
  }
  tokenInfo?: {
    address: string
    name: string
    symbol: string
    decimals: number
    totalSupply: string
  }
}

export interface MintPhase {
  name: string
  startDate: Date
  endDate: Date
  price: string
  maxPerWallet: number
}
