"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

interface ResumeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  const handleDownload = () => {
    // Aqui você implementaria a lógica de download do PDF
    console.log("Downloading resume...")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-center mb-4">Currículo - Arthur Madureira</DialogTitle>
          <div className="flex justify-center">
            <Button onClick={handleDownload} size="sm">
              <Download className="h-4 w-4 mr-2" />
              Baixar PDF
            </Button>
          </div>
        </DialogHeader>

        {/* A4 Format Resume */}
        <div className="bg-white text-black p-8 mx-6 mb-6 shadow-lg" style={{ aspectRatio: "210/297" }}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Arthur Madureira</h1>
            <p className="text-lg text-gray-600 mb-4">Desenvolvedor Full Stack</p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>arthur@email.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>(84) 99999-9999</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Natal, RN</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-600 mt-2">
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <span>github.com/arthurmadureira</span>
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/arthurmadureira</span>
              </div>
            </div>
          </div>

          {/* Resumo Profissional */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Resumo Profissional</h2>
            <p className="text-sm leading-relaxed">
              Desenvolvedor Full Stack com mais de 5 anos de experiência em desenvolvimento web e mobile. Especializado
              em React, Node.js, Python e tecnologias cloud. Apaixonado por criar soluções inovadoras e eficientes, com
              foco em arquiteturas escaláveis e experiência do usuário excepcional.
            </p>
          </section>

          {/* Experiência Profissional */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Experiência Profissional</h2>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">Desenvolvedor Full Stack Sênior</h3>
                <span className="text-sm text-gray-600">2022 - Presente</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">TechCorp Solutions - Natal, RN</p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Desenvolvimento de aplicações web usando React, TypeScript e Node.js</li>
                <li>Implementação de arquiteturas de microserviços com Docker e Kubernetes</li>
                <li>Liderança técnica de equipe de 4 desenvolvedores</li>
                <li>Melhoria de performance resultando em 40% de redução no tempo de carregamento</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">Desenvolvedor Full Stack</h3>
                <span className="text-sm text-gray-600">2020 - 2022</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">StartupXYZ - Natal, RN</p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Desenvolvimento de MVP usando Python/Django e React</li>
                <li>Integração com APIs de terceiros e serviços AWS</li>
                <li>Implementação de testes automatizados aumentando cobertura para 85%</li>
              </ul>
            </div>
          </section>

          {/* Habilidades Técnicas */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Habilidades Técnicas</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="space-y-1">
                  <li>• React, Next.js, TypeScript</li>
                  <li>• HTML5, CSS3, Tailwind CSS</li>
                  <li>• JavaScript ES6+</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="space-y-1">
                  <li>• Node.js, Python, Java</li>
                  <li>• Django, Spring Boot</li>
                  <li>• REST APIs, GraphQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Banco de Dados</h4>
                <ul className="space-y-1">
                  <li>• PostgreSQL, MongoDB</li>
                  <li>• Redis, MySQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">DevOps & Cloud</h4>
                <ul className="space-y-1">
                  <li>• AWS, Docker, Kubernetes</li>
                  <li>• CI/CD, Git, Linux</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formação */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Formação Acadêmica</h2>
            <div className="mb-3">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">Bacharelado em Ciência da Computação</h3>
                <span className="text-sm text-gray-600">2016 - 2020</span>
              </div>
              <p className="text-sm text-gray-600">Universidade Federal do Rio Grande do Norte (UFRN)</p>
            </div>
          </section>

          {/* Certificações */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Certificações</h2>
            <ul className="text-sm space-y-1">
              <li>• AWS Certified Solutions Architect (2023)</li>
              <li>• Google Cloud Professional Developer (2022)</li>
              <li>• Scrum Master Certified (2021)</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}
