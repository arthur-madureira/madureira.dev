import { GuestbookSection } from "@/components/guestbook-section"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Livro de Visitas | Arthur Madureira",
  description: "Deixe seu comentário, feedback ou apenas diga olá! Conecte-se comigo através do livro de visitas.",
}

export default function GuestbookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portfólio
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Livro de Visitas
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Vamos conversar! Compartilhe seus pensamentos comigo.
              </p>
            </div>
          </div>
        </header>

        {/* Informações sobre o Giscus */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
            💡 Como funciona
          </h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            Este livro de visitas usa o <strong>GitHub Discussions</strong> para gerenciar os comentários. 
            Você pode fazer login com sua conta do GitHub para deixar uma mensagem, reagir aos comentários 
            de outras pessoas e participar das conversas.
          </p>
        </div>

        {/* Seção do Guestbook */}
        <GuestbookSection />

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Obrigado por visitar meu portfólio! 🚀
          </p>
        </footer>
      </div>
    </main>
  )
}
