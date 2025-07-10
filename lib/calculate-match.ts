import type { Skill, SearchSkill } from "./store"

interface MatchResult {
  matchPercentage: number
  matchedSkills: Array<Skill>
  missingSkills: Array<SearchSkill>
}

export function calculateMatch(developerSkills: Skill[], searchSkills: SearchSkill[]): MatchResult {
  // Se não houver habilidades de busca, retorna 0%
  if (searchSkills.length === 0) {
    return {
      matchPercentage: 0,
      matchedSkills: [],
      missingSkills: [],
    }
  }

  const matchedSkills: Skill[] = []
  const missingSkills: SearchSkill[] = []

  // Verificar cada habilidade buscada
  searchSkills.forEach((searchSkill) => {
    const matchingSkill = developerSkills.find((skill) => skill.name.toLowerCase() === searchSkill.name.toLowerCase())

    if (matchingSkill) {
      matchedSkills.push(matchingSkill)
    } else {
      missingSkills.push(searchSkill)
    }
  })

  // Calcular a porcentagem de match
  const matchPercentage = Math.round((matchedSkills.length / searchSkills.length) * 100)

  return {
    matchPercentage,
    matchedSkills,
    missingSkills,
  }
}
