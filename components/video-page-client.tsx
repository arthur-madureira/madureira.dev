"use client"

import { useEffect, useState } from "react"

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
      })
      .catch(() => {
        setMeta(null)
        setLoading(false)
      })
  }, [slug])

  useEffect(() => {
    if (meta?.title) {
      document.title = meta.title
    }
  }, [meta?.title])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Carregando...</div>
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center max-w-full max-h-full">
        {meta?.title && (
          <h1 className="text-4xl font-bold text-center mb-4 px-6">{meta.title}</h1>
        )}
        
        <video 
          controls 
          className="max-w-full max-h-[70vh] object-contain shadow-lg rounded-lg"
        >
          <source src={`/videos/${slug}.mp4`} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        
        {meta?.description && (
          <p className="text-gray-700 text-center text-lg mt-4 px-6 max-w-4xl">{meta.description}</p>
        )}
      </div>
    </div>
  )
}
