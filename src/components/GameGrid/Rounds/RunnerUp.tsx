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

type RunnerUpData = Record<number, SinglePoll>

interface Props {
  RunnerUpData: RunnerUpData
}

const RunnerUp: React.FC<Props> = ({ RunnerUpData }) => {
  const classes = useStyles()

  if (!RunnerUpData) return null

  return (
    <>
      <section className={classes.RunnerUpContainer}>
        {Object.keys(RunnerUpData).map(key => (
          <GameRound data={RunnerUpData[key]} key={key} />
        ))}
      </section>
    </>
  )
}

export default RunnerUp
