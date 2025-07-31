import { CollectionsPage } from "@/components/collections-page"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <CollectionsPage />
    </div>
  )
}
