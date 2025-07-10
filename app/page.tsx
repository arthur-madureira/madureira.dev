import { DeveloperInfo } from "@/components/developer-info"
import { TechnologyBadges } from "@/components/technology-badges"
import { SelectedTechnology } from "@/components/selected-technology"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Portfólio de Arthur Madureira
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Desenvolvedor Full Stack especializado em soluções web modernas
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <DeveloperInfo />
            <div className="mt-8">
              <SelectedTechnology />
            </div>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <TechnologyBadges />
          </div>
        </div>
      </div>
    </main>
  )
}
