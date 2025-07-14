"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarModalProps {
  src?: string
  alt?: string
  fallback?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function AvatarModal({ 
  src, 
  alt, 
  fallback, 
  className,
  size = "md" 
}: AvatarModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // Fechar com tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16", 
    lg: "w-24 h-24",
    xl: "w-32 h-32"
  }

  const modalSizes = {
    sm: "max-w-xs",
    md: "max-w-sm",
    lg: "max-w-md", 
    xl: "max-w-lg"
  }

  return (
    <>
      {/* Avatar clicável */}
      <Avatar 
        className={cn(
          "cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg",
          sizeClasses[size],
          className
        )}
        onClick={openModal}
      >
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300"
          onClick={closeModal}
          data-state="open"
        >
          {/* Container da imagem */}
          <div 
            className={cn(
              "relative max-w-[90vw] max-h-[90vh] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-300",
              modalSizes[size]
            )}
            onClick={(e) => e.stopPropagation()}
            data-state="open"
          >
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200 border border-gray-200 dark:border-gray-600"
              aria-label="Fechar avatar ampliado"
            >
              <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Imagem ampliada */}
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              {src ? (
                <img
                  src={src}
                  alt={alt || "Avatar ampliado"}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
              ) : (
                <div 
                  className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                  style={{ aspectRatio: "1/1", minWidth: "300px", minHeight: "300px" }}
                >
                  <span className="text-6xl font-semibold text-gray-500 dark:text-gray-400">
                    {fallback}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
