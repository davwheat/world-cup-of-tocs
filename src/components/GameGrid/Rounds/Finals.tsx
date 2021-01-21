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
  FinalData: SinglePoll
}

const Finals: React.FC<Props> = ({ FinalData }) => {
  const classes = useStyles()

  if (!FinalData) return null

  return (
    <>
      <section className={classes.FinalsContainer}>
        <GameRound data={FinalData}  />
      </section>
    </>
  )
}

export default Finals
