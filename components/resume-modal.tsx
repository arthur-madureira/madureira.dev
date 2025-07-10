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
    // Adicionar estilos CSS para impressão
    const printStyles = `
      <style>
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .print-container {
            width: 297mm;
            min-height: 210mm;
            margin: 0;
            padding: 15mm;
            box-sizing: border-box;
            background: white;
            font-size: 10pt;
            line-height: 1.3;
          }
          
          .print-hide {
            display: none !important;
          }
          
          .page-break {
            page-break-before: always;
          }
          
          h1 { font-size: 18pt; margin: 0 0 8pt 0; }
          h2 { font-size: 14pt; margin: 12pt 0 6pt 0; }
          h3 { font-size: 12pt; margin: 6pt 0 3pt 0; }
          h4 { font-size: 11pt; margin: 4pt 0 2pt 0; }
          
          p, li { font-size: 10pt; margin: 0 0 3pt 0; }
          
          .grid-cols-3 {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20pt;
          }
          
          .col-span-2 {
            grid-column: span 1;
          }
          
          @media screen and (max-width: 1200px) {
            .grid-cols-3 {
              grid-template-columns: 1fr;
              gap: 10pt;
            }
            .col-span-2 {
              grid-column: span 1;
            }
          }
          
          .text-center { text-align: center; }
          .font-bold { font-weight: bold; }
          .text-gray-600 { color: #666; }
          .border-b { border-bottom: 1px solid #999; }
          .mb-2 { margin-bottom: 6pt; }
          .mb-3 { margin-bottom: 9pt; }
          .mb-4 { margin-bottom: 12pt; }
          .space-y-0\.5 > * + * { margin-top: 1.5pt; }
          .list-disc { list-style-type: disc; }
          .list-inside { list-style-position: inside; }
          .ml-2 { margin-left: 6pt; }
        }
      </style>
    `;
    
    // Criar uma nova janela para impressão
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const resumeContent = document.querySelector('.resume-content')?.innerHTML;
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Currículo - Arthur Madureira</title>
            ${printStyles}
          </head>
          <body>
            <div class="print-container">
              ${resumeContent}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto overflow-x-hidden p-0">
        <DialogHeader className="p-4 pb-3 border-b print:hidden">
          <DialogTitle className="text-center mb-3">Currículo - Arthur Madureira</DialogTitle>
          <div className="flex justify-center">
            <Button onClick={handleDownload} size="sm">
              <Download className="h-4 w-4 mr-2" />
              Baixar PDF
            </Button>
          </div>
        </DialogHeader>

        {/* A4 Landscape Format Resume */}
        <div 
          className="resume-content bg-white text-black mx-auto my-4 shadow-lg print:shadow-none print:mx-0 print:my-0 overflow-hidden w-full"
          style={{ 
            maxWidth: 'min(297mm, 90vw)',
            minHeight: '210mm',
            padding: 'min(15mm, 4vw)',
            fontSize: 'clamp(8pt, 1.2vw, 10pt)',
            lineHeight: '1.3',
            boxSizing: 'border-box'
          }}
        >
          {/* Header - Otimizado e responsivo */}
          <div className="mb-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 gap-2">
              <div className="text-center lg:text-left">
                <h1 className="text-xl lg:text-2xl font-bold mb-1">Arthur Madureira</h1>
                <p className="text-sm lg:text-base text-gray-600">Desenvolvedor Full Stack</p>
              </div>
              <div className="text-center lg:text-right text-xs text-gray-600">
                <div className="flex items-center gap-1 justify-center lg:justify-end mb-1">
                  <Mail className="h-3 w-3" />
                  <span>arthur@email.com</span>
                </div>
                <div className="flex items-center gap-1 justify-center lg:justify-end mb-1">
                  <Phone className="h-3 w-3" />
                  <span>(84) 99999-9999</span>
                </div>
                <div className="flex items-center gap-1 justify-center lg:justify-end">
                  <MapPin className="h-3 w-3" />
                  <span>Natal, RN</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-xs text-gray-600 border-t pt-2">
              <div className="flex items-center gap-1">
                <Github className="h-3 w-3" />
                <span>github.com/arthurmadureira</span>
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-3 w-3" />
                <span>linkedin.com/in/arthurmadureira</span>
              </div>
            </div>
          </div>

          {/* Layout principal - responsivo para telas menores */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
            {/* Coluna 1 - Experiência */}
            <div className="lg:col-span-2">
              {/* Resumo Profissional */}
              <section className="mb-4">
                <h2 className="text-base font-bold border-b border-gray-400 pb-1 mb-2">Resumo Profissional</h2>
                <p className="text-xs leading-relaxed">
                  Desenvolvedor Full Stack com mais de 5 anos de experiência em desenvolvimento web e mobile. Especializado
                  em React, Node.js, Python e tecnologias cloud. Apaixonado por criar soluções inovadoras e eficientes, com
                  foco em arquiteturas escaláveis e experiência do usuário excepcional.
                </p>
              </section>

              {/* Experiência Profissional */}
              <section className="mb-4">
                <h2 className="text-base font-bold border-b border-gray-400 pb-1 mb-2">Experiência Profissional</h2>

                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-sm">Desenvolvedor Full Stack Sênior</h3>
                    <span className="text-xs text-gray-600">2022 - Presente</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">TechCorp Solutions - Natal, RN</p>
                  <ul className="text-xs list-disc list-inside space-y-0.5 ml-2">
                    <li>Desenvolvimento de aplicações web usando React, TypeScript e Node.js</li>
                    <li>Implementação de arquiteturas de microserviços com Docker e Kubernetes</li>
                    <li>Liderança técnica de equipe de 4 desenvolvedores</li>
                    <li>Melhoria de performance resultando em 40% de redução no tempo de carregamento</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-sm">Desenvolvedor Full Stack</h3>
                    <span className="text-xs text-gray-600">2020 - 2022</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">StartupXYZ - Natal, RN</p>
                  <ul className="text-xs list-disc list-inside space-y-0.5 ml-2">
                    <li>Desenvolvimento de MVP usando Python/Django e React</li>
                    <li>Integração com APIs de terceiros e serviços AWS</li>
                    <li>Implementação de testes automatizados aumentando cobertura para 85%</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-sm">Desenvolvedor Junior</h3>
                    <span className="text-xs text-gray-600">2018 - 2020</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">WebDev Agency - Natal, RN</p>
                  <ul className="text-xs list-disc list-inside space-y-0.5 ml-2">
                    <li>Desenvolvimento de websites responsivos com HTML, CSS e JavaScript</li>
                    <li>Manutenção e otimização de sistemas legados</li>
                    <li>Participação em projetos de e-commerce e landing pages</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Coluna 2 - Habilidades e Informações */}
            <div className="space-y-4">
              {/* Habilidades Técnicas */}
              <section>
                <h2 className="text-base font-bold border-b border-gray-400 pb-1 mb-2">Habilidades Técnicas</h2>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Frontend</h4>
                    <ul className="text-xs space-y-0.5">
                      <li>• React, Next.js, TypeScript</li>
                      <li>• HTML5, CSS3, Tailwind CSS</li>
                      <li>• JavaScript ES6+</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Backend</h4>
                    <ul className="text-xs space-y-0.5">
                      <li>• Node.js, Python, Java</li>
                      <li>• Django, Spring Boot</li>
                      <li>• REST APIs, GraphQL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Banco de Dados</h4>
                    <ul className="text-xs space-y-0.5">
                      <li>• PostgreSQL, MongoDB</li>
                      <li>• Redis, MySQL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">DevOps & Cloud</h4>
                    <ul className="text-xs space-y-0.5">
                      <li>• AWS, Docker, Kubernetes</li>
                      <li>• CI/CD, Git, Linux</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Formação */}
              <section>
                <h2 className="text-base font-bold border-b border-gray-400 pb-1 mb-2">Formação Acadêmica</h2>
                <div className="mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-sm">Bacharelado em Ciência da Computação</h3>
                    <span className="text-xs text-gray-600">2016 - 2020</span>
                  </div>
                  <p className="text-xs text-gray-600">Universidade Federal do Rio Grande do Norte (UFRN)</p>
                </div>
              </section>

              {/* Certificações */}
              <section>
                <h2 className="text-base font-bold border-b border-gray-400 pb-1 mb-2">Certificações</h2>
                <ul className="text-xs space-y-0.5">
                  <li>• AWS Certified Solutions Architect (2023)</li>
                  <li>• Google Cloud Professional Developer (2022)</li>
                  <li>• Scrum Master Certified (2021)</li>
                </ul>
              </section>

              {/* Idiomas */}
              <section>
                <h2 className="text-base font-bold border-b border-gray-400 pb-1 mb-2">Idiomas</h2>
                <ul className="text-xs space-y-0.5">
                  <li>• Português - Nativo</li>
                  <li>• Inglês - Fluente</li>
                  <li>• Espanhol - Intermediário</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}