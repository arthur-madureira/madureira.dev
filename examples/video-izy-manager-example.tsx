// Exemplo de uso do vídeo "Vídeo Apresentação Izy Manager.mp4"

import { VideoPlayer } from '@/components/video-player'

export function IzyManagerDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Apresentação Izy Manager</h2>
      
      {/* Opção 1: Usando nome sem espaços (RECOMENDADO) */}
      <VideoPlayer 
        src="/videos/video-apresentacao-izy-manager.mp4"
        title="Vídeo Apresentação Izy Manager"
        width={800}
        height={450}
      />
      
      {/* Opção 2: Usando nome com espaços */}
      <VideoPlayer 
        src="/videos/Vídeo Apresentação Izy Manager.mp4"
        title="Vídeo Apresentação Izy Manager"
        width={800}
        height={450}
      />
      
      {/* Opção 3: HTML5 video tag direto */}
      <video 
        controls 
        width={800} 
        height={450}
        className="rounded-lg shadow-lg"
      >
        <source src="/videos/video-apresentacao-izy-manager.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      {/* Opção 4: Link direto para download */}
      <a 
        href="/videos/video-apresentacao-izy-manager.mp4" 
        download
        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        📥 Baixar Vídeo Apresentação
      </a>
    </div>
  )
}

// Exemplo de uso em um componente de projetos
export function ProjectShowcase() {
  return (
    <div className="project-card">
      <h3>Izy Manager</h3>
      <p>Sistema de gerenciamento empresarial</p>
      
      {/* Vídeo como demonstração do projeto */}
      <div className="mt-4">
        <video 
          controls 
          poster="/images/izy-manager-thumb.jpg"
          className="w-full max-w-md rounded-lg"
        >
          <source src="/videos/video-apresentacao-izy-manager.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
