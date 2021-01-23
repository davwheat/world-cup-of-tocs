import React from 'react'

import GameRound from './GameRound'

import { makeStyles } from '@material-ui/styles'

import SinglePoll from '../../../models/SinglePoll'

const useStyles = makeStyles({
  semiFinalContainer: {
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

type SemiFinalRoundData = Record<number, SinglePoll>

interface Props {
  semiFinalData: SemiFinalRoundData
  gameNotes: Record<number, string[] | null>
}

const SemiFinals: React.FC<Props> = ({ semiFinalData, gameNotes }) => {
  const classes = useStyles()

  if (!semiFinalData) return null

  return (
    <>
      <section className={classes.semiFinalContainer}>
        {Object.keys(semiFinalData).map(key => (
          <GameRound data={semiFinalData[key]} key={key} note={gameNotes[key]} />
        ))}
      </section>
    </>
  )
}

export default SemiFinals
