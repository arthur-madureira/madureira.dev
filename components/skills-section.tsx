"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Plus, X, Save, ChevronDown, ChevronUp, Edit } from "lucide-react"
import { useSkillsStore } from "@/lib/store"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function SkillsSection() {
  const { skills, addSkill, removeSkill, updateSkillRating, updateSkillHowLearned } = useSkillsStore()
  const [newSkill, setNewSkill] = useState("")
  const [newSkillRating, setNewSkillRating] = useState(3)
  const [newSkillHowLearned, setNewSkillHowLearned] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const [editingSkillId, setEditingSkillId] = useState<string | null>(null)
  const [openSkillId, setOpenSkillId] = useState<string | null>(null)

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill(newSkill.trim(), newSkillRating, newSkillHowLearned.trim())
      setNewSkill("")
      setNewSkillRating(3)
      setNewSkillHowLearned("")
      setIsAdding(false)
    }
  }

  const handleSaveHowLearned = (id: string, howLearned: string) => {
    updateSkillHowLearned(id, howLearned)
    setEditingSkillId(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Minhas Habilidades</span>
          <Button variant="ghost" size="sm" onClick={() => setIsAdding(!isAdding)}>
            {isAdding ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </Button>
        </CardTitle>
        <CardDescription>Defina suas habilidades, nível de proficiência e como as aprendeu</CardDescription>
      </CardHeader>
      <CardContent>
        {isAdding && (
          <div className="space-y-3 mb-4 p-3 border rounded-md bg-gray-50 dark:bg-gray-900">
            <div className="space-y-2">
              <label htmlFor="skill-name" className="text-sm font-medium">
                Nome da habilidade
              </label>
              <Input
                id="skill-name"
                placeholder="Ex: React, Python, UX Design"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Nível de proficiência</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 cursor-pointer ${
                      star <= newSkillRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setNewSkillRating(star)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="how-learned" className="text-sm font-medium">
                Como aprendi
              </label>
              <Textarea
                id="how-learned"
                placeholder="Descreva como você adquiriu essa habilidade..."
                value={newSkillHowLearned}
                onChange={(e) => setNewSkillHowLearned(e.target.value)}
                rows={3}
              />
            </div>

            <Button onClick={handleAddSkill} className="w-full">
              <Save className="h-4 w-4 mr-1" /> Adicionar Habilidade
            </Button>
          </div>
        )}

        <div className="space-y-3">
          {skills.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4">
              Nenhuma habilidade adicionada. Clique no botão + para adicionar.
            </p>
          ) : (
            skills.map((skill) => (
              <Collapsible
                key={skill.id}
                open={openSkillId === skill.id}
                onOpenChange={(open) => setOpenSkillId(open ? skill.id : null)}
                className="border rounded-md overflow-hidden"
              >
                <div className="flex items-center justify-between p-3">
                  <div className="font-medium">{skill.name}</div>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 cursor-pointer ${
                            star <= skill.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                          onClick={() => updateSkillRating(skill.id, star)}
                        />
                      ))}
                    </div>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        {openSkillId === skill.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <Button variant="ghost" size="sm" onClick={() => removeSkill(skill.id)} className="h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CollapsibleContent>
                  <div className="p-3 pt-0 bg-gray-50 dark:bg-gray-900">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-medium">Como aprendi</h4>
                      {editingSkillId !== skill.id && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => setEditingSkillId(skill.id)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                      )}
                    </div>

                    {editingSkillId === skill.id ? (
                      <div className="space-y-2">
                        <Textarea
                          defaultValue={skill.howLearned}
                          id={`edit-how-learned-${skill.id}`}
                          rows={3}
                          className="text-sm"
                        />
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => setEditingSkillId(null)}>
                            Cancelar
                          </Button>
                          <Button
                            size="sm"
                            onClick={() =>
                              handleSaveHowLearned(
                                skill.id,
                                (document.getElementById(`edit-how-learned-${skill.id}`) as HTMLTextAreaElement).value,
                              )
                            }
                          >
                            Salvar
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.howLearned || "Nenhuma informação adicionada."}
                      </p>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
