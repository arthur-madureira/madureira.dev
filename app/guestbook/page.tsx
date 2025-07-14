import { GuestbookSection } from "@/components/guestbook-section"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guestbook | Arthur Madureira",
  description: "Connect with me through the guestbook.",
}

export default function GuestbookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao portfólio
        </Link>
        
        <GuestbookSection />
      </div>
    </main>
  )
}
