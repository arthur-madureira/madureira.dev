import Link from "next/link"
import { MessageSquare, ArrowRight } from "lucide-react"

export function GuestbookCTA() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
          <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Deixe sua marca no meu Livro de Visitas! 📝
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Gostou do que viu? Tem alguma sugestão ou feedback? Ou simplesmente quer dizer olá? 
            Visite meu livro de visitas e vamos conversar!
          </p>
          
          <Link 
            href="/guestbook"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Visitar Livro de Visitas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
