import { VoteStates } from '../@types/enums'
import SinglePoll from '../models/SinglePoll'

const LatestToOldestStages: Array<keyof IGameData> = ['final', 'runnerUp', 'semiFinal', 'quarterFinal', 'groupStages', 'knockout']

/**
 * Returns a array of tuples, with each array element an active game.
 * In each tuple, [0] is the active `SinglePoll`, and [1] being the path to the active game.
 *
 * If the active game is under `knockout[2]`, then `[1]` would be `['knockout', 2]`. If it was
 * final`, then `[1]` would be `['final']`.
 */
export default function getLatestActiveGame(data: IGameData): Array<[SinglePoll, [string, number] | [string]]> {
  const returnValues: Array<[SinglePoll, [string, number] | [string]]> = []

  let activeStage: string = null
  let activeIndex: number = null

  LatestToOldestStages.every(stage => {
    const allGames = data[stage]

    activeStage = stage
    activeIndex = null

    // final and runnerUp are instances of SinglePoll
    if (allGames instanceof SinglePoll) {
      if (allGames.votingStatus === VoteStates.IN_PROGRESS) {
        returnValues.push([allGames, [activeStage]])
        // return false
      }

      return true
    } else {
      // Get keys in desc. order (15, 14, 13, ..., 0)
      const keys: number[] = Object.keys(allGames).reduceRight((arr, thisVal) => [...arr, Number(thisVal)], [])

      return keys.every(key => {
        activeIndex = key

        if (allGames[key].votingStatus === 'IN_PROGRESS') {
          returnValues.push([allGames[key], [activeStage, activeIndex]])
          // eturn false
        }

        return true
      })
    }
  })

  return returnValues
}
