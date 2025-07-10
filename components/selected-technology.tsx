"use client"

import { useSkillsStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function SelectedTechnology() {
  const { technologies, selectedTechnology, skills } = useSkillsStore()

  if (!selectedTechnology) return null

  const tech = technologies.find((t) => t.id === selectedTechnology)
  if (!tech) return null

  // Encontrar a habilidade correspondente (se existir)
  const skill = skills.find((s) => s.name.toLowerCase() === tech.name.toLowerCase())

  // URL do ícone do Simple Icons
  const iconUrl = `https://cdn.simpleicons.org/${tech.iconSlug}/${tech.color.replace("bg-", "")}`

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className={`p-3 rounded-lg ${tech.color} flex items-center justify-center`}>
          <img src={`https://cdn.simpleicons.org/${tech.iconSlug}/white`} alt={tech.name} width="32" height="32" />
        </div>
        <div>
          <CardTitle>{tech.name}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-1">
            {tech.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {skill ? (
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium mb-1">Nível de proficiência</h3>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${star <= skill.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Como aprendi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{skill.howLearned}</p>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Você ainda não adicionou {tech.name} às suas habilidades.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
