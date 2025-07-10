// Hook para tracking de vídeos
import { useState, useEffect } from 'react'

interface VideoAnalytics {
  videoId: string
  views: number
  totalPlayTime: number
  completionRate: number
  averageViewDuration: number
  uniqueViews: number
  lastViewed: Date
}

export function useVideoAnalytics(videoId: string) {
  const [analytics, setAnalytics] = useState<VideoAnalytics | null>(null)

  // Função para registrar evento de vídeo
  const trackVideoEvent = async (eventType: string, data: any) => {
    try {
      const response = await fetch('/api/analytics/video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoId,
          eventType,
          data,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      })

      if (!response.ok) {
        throw new Error('Erro ao registrar evento')
      }
    } catch (error) {
      console.error('Erro no tracking:', error)
    }
  }

  // Função para carregar analytics
  const loadAnalytics = async () => {
    try {
      const response = await fetch(`/api/analytics/video/${videoId}`)
      const data = await response.json()
      setAnalytics(data)
    } catch (error) {
      console.error('Erro ao carregar analytics:', error)
    }
  }

  useEffect(() => {
    loadAnalytics()
  }, [videoId])

  return {
    analytics,
    trackVideoEvent,
    loadAnalytics,
  }
}
