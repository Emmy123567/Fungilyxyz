"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Plus, Search } from "lucide-react"

export function Navigation() {
  return (
    <nav className="border-b border-[#30363d] bg-[#0d1117] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-white font-bold text-xl">Fungily</span>
              <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 text-xs">Presale</Badge>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-[#7d8590] hover:text-white transition-colors">
                Collections
              </Link>
              <Link href="/create" className="text-[#7d8590] hover:text-white transition-colors">
                Create
              </Link>
              <Link href="#" className="text-[#7d8590] hover:text-white transition-colors">
                Analytics
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-[#7d8590] hover:text-white">
              <Search className="w-4 h-4" />
            </Button>
            <Link href="/create">
              <Button
                variant="outline"
                size="sm"
                className="border-[#30363d] text-white hover:bg-[#21262d] bg-transparent"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
