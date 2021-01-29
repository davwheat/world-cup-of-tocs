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
  gameNotes: Record<number, string[] | null>
}

const KnockoutRounds: React.FC<Props> = ({ knockoutRoundData, gameNotes }) => {
  const classes = useStyles()

  if (!knockoutRoundData) return null

  return (
    <>
      <section className={classes.knockoutRoundsContainer}>
        {Object.keys(knockoutRoundData).map(key => (
          <GameRound data={knockoutRoundData[key]} key={key} note={gameNotes[key]} />
        ))}
      </section>
    </>
  )
}

export default KnockoutRounds
