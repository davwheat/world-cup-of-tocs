import React, { useCallback } from 'react'

import GameRound from './Rounds/GameRound'

import { makeStyles } from '@material-ui/styles'
import getLatestActiveGame from '../../functions/getLatestActiveGame'
import { Paragraph } from '../../typography'

const useStyles = makeStyles({
  activeGameContainer: {
    marginTop: -16,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 15,
  },
})

interface Props {
  data: IGameData
  gameNotes: IGameNotes
}

const ActiveGame: React.FC<Props> = ({ data, gameNotes }) => {
  const classes = useStyles()

  if (!data) return null

  const activeGames = getLatestActiveGame(data)

  if (activeGames.length === 0) {
    return (
      <div className={classes.activeGameContainer}>
        <Paragraph>No game is currently in progress.</Paragraph>
      </div>
    )
  }

  const gameNote: string[] = null

  // Locate the game note from the path to the active game, provided by getLatestActiveGame
  const getGameNote = useCallback(
    keysToActiveGame => {
      if (gameNotes) {
        return keysToActiveGame.length > 1 ? gameNotes[keysToActiveGame[0]][keysToActiveGame[1]] : gameNotes[keysToActiveGame[0]][0]
      } else {
        return null
      }
    },
    [gameNotes],
  )
  return (
    <div className={classes.activeGameContainer}>
      {activeGames.map(([theGame, keysToActiveGame]) => (
        <GameRound large noDate data={theGame} note={getGameNote(keysToActiveGame)} />
      ))}
    </div>
  )
}

export default ActiveGame
