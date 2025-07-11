"use client"

import { useEffect, useState } from "react"
import { VideoPlayer } from "@/components/video-player"

interface VideoPageClientProps {
  slug: string
}

export function VideoPageClient({ slug }: VideoPageClientProps) {
  const [meta, setMeta] = useState<{ title?: string; description?: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/videos/${slug}.json`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setMeta(data)
        setLoading(false)
        // Atualiza o título da página imediatamente após carregar
        if (data?.title) {
          document.title = data.title
        }
      })
      .catch(() => {
        setMeta(null)
        setLoading(false)
      })
  }, [slug])

  useEffect(() => {
    // Garantir que o título seja atualizado quando meta mudar
    if (meta?.title) {
      document.title = meta.title
    }
  }, [meta])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Carregando...</div>
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {meta?.title && (
        <div className="flex-shrink-0 px-6 py-6 bg-white z-10">
          <h1 className="text-4xl font-bold text-center">{meta.title}</h1>
        </div>
      )}
      
      <div className="flex-1 flex items-center justify-center relative">
        <video 
          controls 
          className="max-w-full max-h-full object-contain"
        >
          <source src={`/videos/${slug}.mp4`} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      
      {meta?.description && (
        <div className="flex-shrink-0 px-6 py-3 bg-white z-10">
          <p className="text-gray-700 text-center text-sm">{meta.description}</p>
        </div>
      )}
    </div>
  )
}
