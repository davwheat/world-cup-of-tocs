import React from 'react'

import GameRound from './GameRound'

import { makeStyles } from '@material-ui/styles'

import SinglePoll from '../../../models/SinglePoll'

const useStyles = makeStyles({
  FinalsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    marginTop: 8,
    width: 500,
    maxWidth: '100%',
  },
})

interface Props {
  /** Only takes a single poll */
  finalData: SinglePoll
  gameNotes: string[] | null
}

const Finals: React.FC<Props> = ({ finalData, gameNotes }) => {
  const classes = useStyles()

  if (!finalData) return null

  return (
    <>
      <section className={classes.FinalsContainer}>
        <GameRound data={finalData} note={gameNotes} />
      </section>
    </>
  )
}

export default Finals
