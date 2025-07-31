import { CollectionPage } from "@/components/collection-page"

interface PageProps {
  params: {
    id: string
  }
}

export default function CollectionDetailPage({ params }: PageProps) {
  return <CollectionPage collectionId={params.id} />
}
