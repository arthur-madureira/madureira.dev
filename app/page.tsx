import { DeveloperInfo } from "@/components/developer-info"
import { TechnologyBadges } from "@/components/technology-badges"
import { SelectedTechnology } from "@/components/selected-technology"
import { GuestbookCTA } from "@/components/guestbook-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
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
            <GuestbookCTA />
          </div>
        </div>
      </div>
    </main>
  )
}
