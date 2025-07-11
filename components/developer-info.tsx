"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react"
import { useSkillsStore } from "@/lib/store"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ResumeModal } from "./resume-modal"

export function DeveloperInfo() {
  const { developerName } = useSkillsStore()
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  // Mobile long-press handlers
  const handleLongPress = (callback: () => void) => {
    let pressTimer: NodeJS.Timeout

    const handleTouchStart = () => {
      pressTimer = setTimeout(() => {
        callback()
      }, 500) // 500ms for long press
    }

    const handleTouchEnd = () => {
      clearTimeout(pressTimer)
    }

    return {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchEnd,
    }
  }

  const handleGithubClick = () => {
    window.open("https://github.com/arthur-madureira", "_blank")
  }

  const handleLinkedinClick = () => {
    window.open("https://linkedin.com/in/arthur-madureira", "_blank")
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:arthur@email.com"
  }

  return (
    <>
      <Card className="border-none shadow-md">
        <CardHeader className="text-center pb-2">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Developer" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">{developerName}</CardTitle>
          <CardDescription className="flex items-center justify-center gap-1 text-sm">
            <MapPin className="h-3 w-3" /> Natal, RN - Brasil
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Especializado em
              tecnologias modernas e arquiteturas escaláveis.
            </p>
          </div>

          <div className="flex justify-center space-x-2">
            <TooltipProvider delayDuration={200} skipDelayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleGithubClick}
                    {...handleLongPress(() => {})}
                    className="transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  <p className="font-medium">Visualizar repositórios no GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleLinkedinClick}
                    {...handleLongPress(() => {})}
                    className="transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  <p className="font-medium">Conectar-se no LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleEmailClick}
                    {...handleLongPress(() => {})}
                    className="transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  <p className="font-medium">Enviar mensagem por e-mail</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsResumeModalOpen(true)}
                    {...handleLongPress(() => setIsResumeModalOpen(true))}
                    className="transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <FileText className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  <p className="font-medium">Visualizar e baixar currículo</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium text-sm mb-2">Sobre mim</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Desenvolvedor com experiência em desenvolvimento web e mobile, localizado em Natal, Rio Grande do Norte.
              Focado em criar experiências de usuário excepcionais e código de alta qualidade.
            </p>
          </div>
        </CardContent>
      </Card>

      <ResumeModal open={isResumeModalOpen} onOpenChange={setIsResumeModalOpen} />
    </>
  )
}
