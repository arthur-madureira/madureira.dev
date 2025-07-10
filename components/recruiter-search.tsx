"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import { useSkillsStore } from "@/lib/store"

export function RecruiterSearch() {
  const { searchSkills, addSearchSkill, removeSearchSkill } = useSkillsStore()
  const [skillInput, setSkillInput] = useState("")

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      addSearchSkill(skillInput.trim())
      setSkillInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddSkill()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Busca do Recrutador</CardTitle>
        <CardDescription>Adicione as habilidades que o recrutador está buscando para calcular o match</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Input
            placeholder="Adicionar habilidade (ex: React, Python, UX Design)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button onClick={handleAddSkill}>
            <Search className="h-4 w-4 mr-1" /> Adicionar
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {searchSkills.length === 0 ? (
            <p className="text-sm text-gray-500">Nenhuma habilidade adicionada à busca</p>
          ) : (
            searchSkills.map((skill) => (
              <Badge key={skill.id} variant="secondary" className="flex items-center gap-1">
                {skill.name}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeSearchSkill(skill.id)} />
              </Badge>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
