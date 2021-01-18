import React from 'react'

import GameRound from './Rounds/GameRound'

import { makeStyles } from '@material-ui/styles'
import getLatestActiveGame from '../../functions/getLatestActiveGame'

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

  return (
    <div className={classes.activeGameContainer}>
      <GameRound large noDate data={activeGame} />
    </div>
  )
}

export default ActiveGame
