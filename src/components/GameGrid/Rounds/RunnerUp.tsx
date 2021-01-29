import React from 'react'

import GameRound from './GameRound'

import { makeStyles } from '@material-ui/styles'

import SinglePoll from '../../../models/SinglePoll'

const useStyles = makeStyles({
  RunnerUpContainer: {
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
  runnerUpData: SinglePoll
  gameNotes: string[] | null
}

const RunnerUp: React.FC<Props> = ({ runnerUpData, gameNotes }) => {
  const classes = useStyles()

  if (!runnerUpData) return null

  return (
    <>
      <section className={classes.RunnerUpContainer}>
        <GameRound data={runnerUpData} note={gameNotes} />
      </section>
    </>
  )
}

export default RunnerUp
