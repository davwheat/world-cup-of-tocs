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

type FinalData = Record<number, SinglePoll>

interface Props {
  FinalData: FinalData
}

const Finals: React.FC<Props> = ({ FinalData }) => {
  const classes = useStyles()

  if (!FinalData) return null

  return (
    <>
      <section className={classes.FinalsContainer}>
        {Object.keys(FinalData).map(key => (
          <GameRound data={FinalData[key]} key={key} />
        ))}
      </section>
    </>
  )
}

export default Finals
