import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

export interface Skill {
  id: string
  name: string
  rating: number
  howLearned: string
}

export interface SearchSkill {
  id: string
  name: string
}

export interface Project {
  id: string
  title: string
  description: string
  link: string
  technologies: string[]
  image?: string
}

export interface Technology {
  id: string
  name: string
  iconSlug: string // Slug para o Simple Icons
  tags: string[]
  category: "frontend" | "backend" | "fullstack" | "mobile" | "devops" | "database" | "language" | "framework" | "cloud"
  color: string
}

interface SkillsState {
  developerName: string
  setDeveloperName: (name: string) => void
  skills: Skill[]
  addSkill: (name: string, rating: number, howLearned: string) => void
  removeSkill: (id: string) => void
  updateSkillRating: (id: string, rating: number) => void
  updateSkillHowLearned: (id: string, howLearned: string) => void
  searchSkills: SearchSkill[]
  addSearchSkill: (name: string) => void
  removeSearchSkill: (id: string) => void
  projects: Project[]
  addProject: (project: Omit<Project, "id">) => void
  removeProject: (id: string) => void
  updateProject: (id: string, project: Omit<Project, "id">) => void
  technologies: Technology[]
  selectedTechnology: string | null
  setSelectedTechnology: (id: string | null) => void
}

export const useSkillsStore = create<SkillsState>((set) => ({
  developerName: "Arthur Madureira",
  setDeveloperName: (name) => set({ developerName: name }),
  selectedTechnology: null,
  setSelectedTechnology: (id) => set({ selectedTechnology: id }),

  skills: [
    { id: uuidv4(), name: "React", rating: 5, howLearned: "Cursos online e projetos práticos" },
    { id: uuidv4(), name: "JavaScript", rating: 4, howLearned: "Bootcamp de desenvolvimento web" },
    { id: uuidv4(), name: "TypeScript", rating: 4, howLearned: "Documentação oficial e prática em projetos" },
    { id: uuidv4(), name: "Node.js", rating: 3, howLearned: "Projetos pessoais e tutoriais" },
    { id: uuidv4(), name: "Python", rating: 5, howLearned: "Faculdade e projetos de ciência de dados" },
    { id: uuidv4(), name: "Java", rating: 4, howLearned: "Cursos universitários e projetos corporativos" },
    { id: uuidv4(), name: "Spring Boot", rating: 3, howLearned: "Projetos profissionais e documentação" },
    { id: uuidv4(), name: "AWS", rating: 3, howLearned: "Certificações e experiência prática" },
    { id: uuidv4(), name: "Docker", rating: 4, howLearned: "Projetos DevOps e cursos online" },
    { id: uuidv4(), name: "Next.js", rating: 4, howLearned: "Projetos freelance e documentação oficial" },
  ],
  addSkill: (name, rating, howLearned) =>
    set((state) => ({ skills: [...state.skills, { id: uuidv4(), name, rating, howLearned }] })),
  removeSkill: (id) => set((state) => ({ skills: state.skills.filter((skill) => skill.id !== id) })),
  updateSkillRating: (id, rating) =>
    set((state) => ({
      skills: state.skills.map((skill) => (skill.id === id ? { ...skill, rating } : skill)),
    })),
  updateSkillHowLearned: (id, howLearned) =>
    set((state) => ({
      skills: state.skills.map((skill) => (skill.id === id ? { ...skill, howLearned } : skill)),
    })),

  searchSkills: [],
  addSearchSkill: (name) => set((state) => ({ searchSkills: [...state.searchSkills, { id: uuidv4(), name }] })),
  removeSearchSkill: (id) => set((state) => ({ searchSkills: state.searchSkills.filter((skill) => skill.id !== id) })),

  projects: [],
  addProject: (project) => set((state) => ({ projects: [...state.projects, { id: uuidv4(), ...project }] })),
  removeProject: (id) => set((state) => ({ projects: state.projects.filter((project) => project.id !== id) })),
  updateProject: (id, project) =>
    set((state) => ({
      projects: state.projects.map((p) => (p.id === id ? { ...p, ...project } : p)),
    })),

  technologies: [
    {
      id: uuidv4(),
      name: "React",
      iconSlug: "react",
      tags: ["JavaScript", "Frontend", "Biblioteca", "UI"],
      category: "frontend",
      color: "bg-blue-500",
    },
    {
      id: uuidv4(),
      name: "JavaScript",
      iconSlug: "javascript",
      tags: ["Frontend", "Backend", "Linguagem", "Web"],
      category: "language",
      color: "bg-yellow-500",
    },
    {
      id: uuidv4(),
      name: "TypeScript",
      iconSlug: "typescript",
      tags: ["JavaScript", "Tipagem", "Linguagem", "Microsoft"],
      category: "language",
      color: "bg-blue-600",
    },
    {
      id: uuidv4(),
      name: "Node.js",
      iconSlug: "nodedotjs",
      tags: ["JavaScript", "Backend", "Runtime", "Server"],
      category: "backend",
      color: "bg-green-600",
    },
    {
      id: uuidv4(),
      name: "Python",
      iconSlug: "python",
      tags: ["Backend", "Data Science", "Linguagem", "Scripting"],
      category: "language",
      color: "bg-blue-800",
    },
    {
      id: uuidv4(),
      name: "Java",
      iconSlug: "openjdk", // Corrigido para o slug correto
      tags: ["Backend", "Enterprise", "Linguagem", "JVM"],
      category: "language",
      color: "bg-red-600",
    },
    {
      id: uuidv4(),
      name: "Spring Boot",
      iconSlug: "spring",
      tags: ["Java", "Backend", "Framework", "Enterprise"],
      category: "framework",
      color: "bg-green-500",
    },
    {
      id: uuidv4(),
      name: "Angular",
      iconSlug: "angular",
      tags: ["TypeScript", "Frontend", "Framework", "Google"],
      category: "frontend",
      color: "bg-red-500",
    },
    {
      id: uuidv4(),
      name: "Vue.js",
      iconSlug: "vuedotjs",
      tags: ["JavaScript", "Frontend", "Framework", "UI"],
      category: "frontend",
      color: "bg-emerald-500",
    },
    {
      id: uuidv4(),
      name: "Next.js",
      iconSlug: "nextdotjs",
      tags: ["React", "Frontend", "Framework", "SSR"],
      category: "frontend",
      color: "bg-black",
    },
    {
      id: uuidv4(),
      name: "Django",
      iconSlug: "django",
      tags: ["Python", "Backend", "Framework", "Web"],
      category: "backend",
      color: "bg-green-800",
    },
    {
      id: uuidv4(),
      name: "Ruby on Rails",
      iconSlug: "rubyonrails",
      tags: ["Ruby", "Backend", "Framework", "Web"],
      category: "backend",
      color: "bg-red-700",
    },
    {
      id: uuidv4(),
      name: "PHP",
      iconSlug: "php",
      tags: ["Backend", "Web", "Linguagem", "Server"],
      category: "language",
      color: "bg-indigo-600",
    },
    {
      id: uuidv4(),
      name: "Laravel",
      iconSlug: "laravel",
      tags: ["PHP", "Backend", "Framework", "MVC"],
      category: "framework",
      color: "bg-red-500",
    },
    {
      id: uuidv4(),
      name: ".NET",
      iconSlug: "dotnet",
      tags: ["C#", "Backend", "Framework", "Microsoft"],
      category: "framework",
      color: "bg-purple-600",
    },
    {
      id: uuidv4(),
      name: "C#",
      iconSlug: "csharp", // Mantido como csharp que é o correto
      tags: ["Backend", "Linguagem", "Microsoft", ".NET"],
      category: "language",
      color: "bg-purple-700",
    },
    {
      id: uuidv4(),
      name: "AWS",
      iconSlug: "amazonwebservices", // Corrigido para o slug completo
      tags: ["Cloud", "DevOps", "Infraestrutura", "Serviços"],
      category: "cloud",
      color: "bg-orange-500",
    },
    {
      id: uuidv4(),
      name: "Docker",
      iconSlug: "docker",
      tags: ["DevOps", "Containerização", "Infraestrutura", "CI/CD"],
      category: "devops",
      color: "bg-blue-600",
    },
    {
      id: uuidv4(),
      name: "Kubernetes",
      iconSlug: "kubernetes",
      tags: ["DevOps", "Orquestração", "Containers", "Infraestrutura"],
      category: "devops",
      color: "bg-blue-500",
    },
    {
      id: uuidv4(),
      name: "GraphQL",
      iconSlug: "graphql",
      tags: ["API", "Query Language", "Backend", "Frontend"],
      category: "fullstack",
      color: "bg-pink-600",
    },
  ],
}))
