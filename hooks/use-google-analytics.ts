// hooks/use-google-analytics.ts
"use client"

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
  }
}

export function useGoogleAnalytics() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackVideoEvent = (
    action: 'video_start' | 'video_play' | 'video_pause' | 'video_complete' | 'video_seek',
    videoTitle: string,
    currentTime?: number,
    duration?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'Video',
        event_label: videoTitle,
        video_current_time: currentTime,
        video_duration: duration,
        video_percent: duration ? Math.round((currentTime || 0) / duration * 100) : 0,
      })
    }
  }

  const trackPageView = (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: title,
        page_location: url,
      })
    }
  }

  return { trackEvent, trackVideoEvent, trackPageView }
}
