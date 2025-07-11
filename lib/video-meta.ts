// Utilitário para buscar metadados de vídeo
import path from "path"
import { promises as fs } from "fs"

export async function fetchVideoMeta(videoSrc: string): Promise<{ title: string; description: string } | null> {
  // Extrai o nome do arquivo sem extensão
  const fileName = videoSrc.split('/').pop()?.replace(/\.[^/.]+$/, "")
  if (!fileName) return null
  const jsonPath = path.join(process.cwd(), "public", "videos", `${fileName}.json`)
  try {
    const data = await fs.readFile(jsonPath, "utf-8")
    return JSON.parse(data)
  } catch {
    return null
  }
}
