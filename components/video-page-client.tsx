"use client"

import { useEffect, useState, useRef } from "react"
import { useGoogleAnalytics } from "@/hooks/use-google-analytics"

interface VideoPageClientProps {
  slug: string
}

export function VideoPageClient({ slug }: VideoPageClientProps) {
  const [meta, setMeta] = useState<{ title?: string; description?: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { trackVideoEvent, trackPageView } = useGoogleAnalytics()
  const [hasStarted, setHasStarted] = useState(false)

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
      // Track page view
      trackPageView(window.location.href, meta.title)
    }
  }, [meta?.title, trackPageView])

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current
    if (!video || !meta?.title) return

    const handlePlay = () => {
      if (!meta.title) return
      if (!hasStarted) {
        trackVideoEvent('video_start', meta.title, video.currentTime, video.duration)
        setHasStarted(true)
      } else {
        trackVideoEvent('video_play', meta.title, video.currentTime, video.duration)
      }
    }

    const handlePause = () => {
      if (!meta.title) return
      trackVideoEvent('video_pause', meta.title, video.currentTime, video.duration)
    }

    const handleEnded = () => {
      if (!meta.title) return
      trackVideoEvent('video_complete', meta.title, video.currentTime, video.duration)
    }

    const handleSeeked = () => {
      if (!meta.title) return
      trackVideoEvent('video_seek', meta.title, video.currentTime, video.duration)
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('seeked', handleSeeked)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [meta?.title, trackVideoEvent, hasStarted])

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
          ref={videoRef}
          controls 
          className="max-w-full max-h-[100vh] object-contain shadow-lg rounded-lg"
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
