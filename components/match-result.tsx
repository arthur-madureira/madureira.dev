"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useSkillsStore } from "@/lib/store"
import { calculateMatch } from "@/lib/calculate-match"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

export function MatchResult() {
  const { skills, searchSkills } = useSkillsStore()

  const { matchPercentage, matchedSkills, missingSkills } = calculateMatch(skills, searchSkills)

  // Não mostrar o card se não houver habilidades de busca
  if (searchSkills.length === 0) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resultado do Match</CardTitle>
        <CardDescription>Compatibilidade entre suas habilidades e os requisitos do recrutador</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Compatibilidade</span>
              <span className="text-2xl font-bold">{matchPercentage}%</span>
            </div>
            <Progress value={matchPercentage} className="h-2" />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Habilidades correspondentes
              </h4>
              <div className="flex flex-wrap gap-2">
                {matchedSkills.length > 0 ? (
                  matchedSkills.map((skill) => (
                    <Badge key={skill.id} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {skill.name} ({skill.rating}/5)
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">Nenhuma habilidade correspondente</span>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                <XCircle className="h-4 w-4 text-red-500" />
                Habilidades faltantes
              </h4>
              <div className="flex flex-wrap gap-2">
                {missingSkills.length > 0 ? (
                  missingSkills.map((skill) => (
                    <Badge key={skill.id} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      {skill.name}
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">Nenhuma habilidade faltante</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
