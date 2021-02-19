import React from 'react'

import GameRound from './Rounds/GameRound'

import { makeStyles } from '@material-ui/styles'
import getLatestActiveGame from '../../functions/getLatestActiveGame'
import { Paragraph } from '../../typography'

const useStyles = makeStyles({
  activeGameContainer: {
    marginTop: -16,
    display: 'flex',
    justifyContent: 'center',
  },
})

interface Props {
  data: IGameData
  gameNotes: IGameNotes
}

const ActiveGame: React.FC<Props> = ({ data, gameNotes }) => {
  const classes = useStyles()

  if (!data) return null

  const [activeGame, keysToActiveGame] = getLatestActiveGame(data)

  if (!activeGame) {
    return (
      <div className={classes.activeGameContainer}>
        <Paragraph>No game is currently in progress.</Paragraph>
      </div>
    )
  }

  let gameNote: string[] = null

  // Locate the game note from the path to the active game, provided by getLatestActiveGame
  if (gameNotes) {
    gameNote = keysToActiveGame.length > 1 ? gameNotes[keysToActiveGame[0]][keysToActiveGame[1]] : gameNotes[keysToActiveGame[0]][0]
  }

  return (
    <div className={classes.activeGameContainer}>
      <GameRound large noDate data={activeGame} note={gameNote} />
    </div>
  )
}

export default ActiveGame
