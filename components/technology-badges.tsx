"use client"

import { useState, type KeyboardEvent } from "react"
import { useSkillsStore } from "@/lib/store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

export function TechnologyBadges() {
  const { technologies, selectedTechnology, setSelectedTechnology } = useSkillsStore()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeSearch, setActiveSearch] = useState("")

  const handleTechClick = (techId: string) => {
    if (selectedTechnology === techId) {
      setSelectedTechnology(null)
    } else {
      setSelectedTechnology(techId)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setActiveSearch(searchTerm.toLowerCase())
    } else if (e.key === "Escape") {
      setSearchTerm("")
      setActiveSearch("")
    }
  }

  // Função para verificar se uma tecnologia corresponde à busca
  const matchesTech = (tech: (typeof technologies)[0]) => {
    if (!activeSearch) return true

    // Verificar se o nome da tecnologia contém o termo de busca
    if (tech.name.toLowerCase().includes(activeSearch)) return true

    // Verificar se alguma tag contém o termo de busca
    return tech.tags.some((tag) => tag.toLowerCase().includes(activeSearch))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tecnologias</CardTitle>
        <CardDescription>Principais tecnologias do mercado de desenvolvimento</CardDescription>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Buscar tecnologias ou tags (pressione Enter para filtrar)"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {activeSearch && (
          <p className="text-xs text-gray-500 mt-1">
            Filtrando por: "{activeSearch}" -
            <button
              className="text-blue-500 hover:underline ml-1"
              onClick={() => {
                setSearchTerm("")
                setActiveSearch("")
              }}
            >
              Limpar filtro
            </button>
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          <TooltipProvider>
            {technologies.map((tech) => {
              const matches = matchesTech(tech)
              const iconUrl = `https://cdn.simpleicons.org/${tech.iconSlug}/white`

              return (
                <Tooltip key={tech.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        "flex flex-col items-center justify-center w-20 h-20 rounded-lg transition-all",
                        tech.color,
                        "hover:scale-105",
                        selectedTechnology === tech.id
                          ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 ring-black dark:ring-white"
                          : "",
                        activeSearch && !matches ? "opacity-50 grayscale bg-gray-400" : "opacity-100",
                      )}
                      onClick={() => handleTechClick(tech.id)}
                      style={{
                        filter: activeSearch && !matches ? "grayscale(1)" : "none",
                      }}
                    >
                      <img
                        src={iconUrl || "/placeholder.svg"}
                        alt={tech.name}
                        width="32"
                        height="32"
                        className="mb-1"
                        style={{
                          filter: activeSearch && !matches ? "grayscale(1)" : "none",
                        }}
                      />
                      <span className="text-xs font-medium text-white">{tech.name}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="flex flex-wrap gap-1">
                      {tech.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
