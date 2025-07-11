// components/google-analytics.tsx
"use client"

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId: string
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  console.log('Loading Google Analytics with ID:', gaId)
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
        async
        onLoad={() => console.log('Google Analytics script loaded')}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
          console.log('Google Analytics configured with ID: ${gaId}');
        `}
      </Script>
    </>
  )
}
