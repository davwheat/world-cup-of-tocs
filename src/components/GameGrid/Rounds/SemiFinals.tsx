import React from 'react'

import GameRound from './GameRound'

import { makeStyles } from '@material-ui/styles'

import SinglePoll from '../../../models/SinglePoll'

const useStyles = makeStyles({
  knockoutRoundsContainer: {
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

type KnockoutRoundData = Record<number, SinglePoll>

interface Props {
  knockoutRoundData: KnockoutRoundData
}

const SemiFinals: React.FC<Props> = ({ semiFinalData }) => {
  const classes = useStyles()

  if (!semiFinalData) return null

  return (
    <>
      <section className={classes.knockoutRoundsContainer}>
        {Object.keys(semiFinalData).map(key => (
          <GameRound data={semiFinalData[key]} key={key} />
        ))}
      </section>
    </>
  )
}

export default SemiFinals
