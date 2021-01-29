import { Values } from '../data'

export default async function fetchGameNotes(): Promise<IGameNotes> {
  try {
    const response = await fetch(`${Values.api.hostname}/v1/game_notes`)
    const jsonData = await response.json()
    return jsonData
  } catch {
    return null
  }
}
