import Link from "next/link"
import { BookOpen, Home } from "lucide-react"

export function SimpleNavigation() {
  return (
    <nav className="fixed top-4 right-4 z-50">
      <div className="flex gap-2">
        <Link 
          href="/"
          className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all group"
          title="Início"
        >
          <Home className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
        </Link>
        
        <Link 
          href="/guestbook"
          className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all group"
          title="Livro de Visitas"
        >
          <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
        </Link>
      </div>
    </nav>
  )
}
