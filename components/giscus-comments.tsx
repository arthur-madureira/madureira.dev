"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface GiscusCommentsProps {
  className?: string
}

export function GiscusComments({ className }: GiscusCommentsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement("script")
    scriptElem.src = "https://giscus.app/client.js"
    scriptElem.async = true
    scriptElem.crossOrigin = "anonymous"

    scriptElem.setAttribute("data-repo", process.env.NEXT_PUBLIC_GISCUS_REPO || "")
    scriptElem.setAttribute("data-repo-id", process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "")
    scriptElem.setAttribute("data-category", process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "")
    scriptElem.setAttribute("data-category-id", process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "")
    scriptElem.setAttribute("data-mapping", "pathname")
    scriptElem.setAttribute("data-strict", "0")
    scriptElem.setAttribute("data-reactions-enabled", "1")
    scriptElem.setAttribute("data-emit-metadata", "0")
    scriptElem.setAttribute("data-input-position", "bottom")
    scriptElem.setAttribute("data-theme", "dark")
    scriptElem.setAttribute("data-lang", "pt")
    scriptElem.setAttribute("data-loading", "lazy")

    ref.current.appendChild(scriptElem)
  }, [theme])

  // Atualizar tema quando mudar
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
    if (iframe) {
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: theme === "dark" ? "dark" : "light" } } },
        'https://giscus.app'
      )
    }
  }, [theme])

  return <div className={className} ref={ref} />
}
