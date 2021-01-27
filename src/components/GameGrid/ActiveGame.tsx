import React from 'react'

import GameRound from './Rounds/GameRound'

import { makeStyles } from '@material-ui/styles'
import getLatestActiveGame from '../../functions/getLatestActiveGame'
import { Paragraph } from '../../typography'

interface Props {
  data: IGameData
}

const useStyles = makeStyles({
  activeGameContainer: {
    marginTop: -16,
    display: 'flex',
    justifyContent: 'center',
  },
})

const ActiveGame: React.FC<Props> = ({ data }) => {
  const classes = useStyles()

  if (!data) return null

  const activeGame = getLatestActiveGame(data)

  if (!activeGame) {
    return (
      <div className={classes.activeGameContainer}>
        <Paragraph>No active game is in progress.</Paragraph>
      </div>
    )
  }

  return (
    <div className={classes.activeGameContainer}>
      <GameRound large noDate data={activeGame} />
    </div>
  )
}

export default ActiveGame
