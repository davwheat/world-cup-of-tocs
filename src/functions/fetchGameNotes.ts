import { Values } from '../data'

export default async function fetchGameNotes(notesUrl: string): Promise<IGameNotes> {
  try {
    const response = await fetch(notesUrl)
    const jsonData = await response.json()
    return jsonData
  } catch {
    return null
  }
}
