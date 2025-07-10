"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, ExternalLink, Edit, Trash2 } from "lucide-react"
import { useSkillsStore } from "@/lib/store"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export function ProjectsSection() {
  const { projects, addProject, removeProject, updateProject } = useSkillsStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    technologies: "",
    image: "/placeholder.svg?height=200&width=300",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProject = () => {
    if (formData.title.trim() && formData.description.trim()) {
      const technologies = formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== "")

      if (editingProject) {
        updateProject(editingProject, {
          title: formData.title,
          description: formData.description,
          link: formData.link,
          technologies,
          image: formData.image,
        })
      } else {
        addProject({
          title: formData.title,
          description: formData.description,
          link: formData.link,
          technologies,
          image: formData.image,
        })
      }

      resetForm()
      setIsDialogOpen(false)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      link: "",
      technologies: "",
      image: "/placeholder.svg?height=200&width=300",
    })
    setEditingProject(null)
  }

  const handleEditProject = (id: string) => {
    const project = projects.find((p) => p.id === id)
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        link: project.link,
        technologies: project.technologies.join(", "),
        image: project.image || "/placeholder.svg?height=200&width=300",
      })
      setEditingProject(id)
      setIsDialogOpen(true)
    }
  }

  const handleDialogClose = () => {
    resetForm()
    setIsDialogOpen(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Meus Projetos</span>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>{editingProject ? "Editar Projeto" : "Adicionar Novo Projeto"}</DialogTitle>
                <DialogDescription>Preencha os detalhes do seu projeto abaixo.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Título do Projeto</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Ex: Sistema de Gestão de Tarefas"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto brevemente..."
                    rows={3}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="link">Link do Projeto</Label>
                  <Input
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="https://github.com/username/project"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="technologies">Tecnologias Utilizadas</Label>
                  <Input
                    id="technologies"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleInputChange}
                    placeholder="React, Node.js, MongoDB (separadas por vírgula)"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={handleDialogClose}>
                  Cancelar
                </Button>
                <Button onClick={handleAddProject}>{editingProject ? "Atualizar" : "Adicionar"} Projeto</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <CardDescription>Projetos que você desenvolveu com links para demonstração</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4 col-span-2">
              Nenhum projeto adicionado. Clique no botão + para adicionar.
            </p>
          ) : (
            projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border">
                <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-7 w-7 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black"
                      onClick={() => handleEditProject(project.id)}
                    >
                      <Edit className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-7 w-7 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black"
                      onClick={() => removeProject(project.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Ver projeto <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
