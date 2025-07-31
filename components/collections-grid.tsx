import { CollectionCard } from "./collection-card"
import type { Collection } from "@/lib/types"

interface CollectionsGridProps {
  collections: Collection[]
}

export function CollectionsGrid({ collections }: CollectionsGridProps) {
  if (collections.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-white mb-2">No collections found</h3>
        <p className="text-[#7d8590]">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  )
}
