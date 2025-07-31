import Link from "next/link"
import { GradientButton } from "./gradient-button"

export function Navigation() {
  return (
    <nav className="bg-[#161b22] border-b border-[#30363d] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Fungily<span className="text-[#f78166]">NFT</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-white font-medium border-b-2 border-[#f78166] pb-1">
                Mint
              </Link>
              <span className="text-[#7d8590] hover:text-white cursor-pointer transition-colors">AMM Trading</span>
              <span className="text-[#7d8590] hover:text-white cursor-pointer transition-colors">Liquidity</span>
              <span className="text-[#7d8590] hover:text-white cursor-pointer transition-colors">Create</span>
            </div>
          </div>
          <GradientButton>Connect Wallet</GradientButton>
        </div>
      </div>
    </nav>
  )
}
