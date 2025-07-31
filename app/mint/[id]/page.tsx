import { MintPage } from "@/components/mint-page"

export default function Page({ params }: { params: { id: string } }) {
  return <MintPage collectionId={params.id} />
}
