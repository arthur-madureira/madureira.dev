"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  alt?: string
  className?: string
  poster?: string
  preload?: "none" | "metadata" | "auto"
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, alt, className, poster, preload = "metadata", ...props }, ref) => {
    // Garantir que o src tenha o prefixo /videos/ se não tiver
    const videoSrc = src.startsWith('/videos/') ? src : `/videos/${src}`
    
    return (
      <video
        ref={ref}
        className={cn(
          "w-full h-auto rounded-lg shadow-lg",
          className
        )}
        preload={preload}
        poster={poster}
        {...props}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        <source src={videoSrc.replace('.mp4', '.ogg')} type="video/ogg" />
        {alt && <p>{alt}</p>}
        Seu navegador não suporta a reprodução de vídeos HTML5.
      </video>
    )
  }
)

VideoPlayer.displayName = "VideoPlayer"

export { VideoPlayer }
export type { VideoPlayerProps }
