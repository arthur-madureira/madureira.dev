import { VideoPageClient } from "@/components/video-page-client"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: "Vídeo",
    description: "Vídeo do sistema"
  }
}

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <VideoPageClient slug={slug} />
  )
}
