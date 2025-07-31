import { CollectionPage } from "@/components/collection-page"

export default function Page({ params }: { params: { id: string } }) {
  return <CollectionPage collectionId={params.id} />
}
