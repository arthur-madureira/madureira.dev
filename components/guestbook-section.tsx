import { GiscusComments } from "./giscus-comments"
import { MessageSquare, Heart, Users } from "lucide-react"

export function GuestbookSection() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Livro de Visitas
          </h2>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
          Deixe seu comentário, feedback ou apenas diga olá! Sua mensagem será muito bem-vinda.
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Comunidade</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>Feedback</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <GiscusComments className="min-h-[200px]" />
      </div>
    </section>
  )
}
