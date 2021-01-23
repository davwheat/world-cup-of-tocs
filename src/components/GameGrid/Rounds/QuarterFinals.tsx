import React from 'react'

import GameRound from './GameRound'

import { makeStyles } from '@material-ui/styles'

import SinglePoll from '../../../models/SinglePoll'

const useStyles = makeStyles({
  quarterFinalsContainer: {
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

type QuarterFinalData = Record<number, SinglePoll>

interface Props {
  quarterFinalData: QuarterFinalData
  gameNotes: Record<number, string[] | null>
}

const QuarterFinals: React.FC<Props> = ({ quarterFinalData, gameNotes }) => {
  const classes = useStyles()

  if (!quarterFinalData) return null

  return (
    <>
      <section className={classes.quarterFinalsContainer}>
        {Object.keys(quarterFinalData).map(key => (
          <GameRound data={quarterFinalData[key]} key={key} note={gameNotes[key]} />
        ))}
      </section>
    </>
  )
}

export default QuarterFinals
