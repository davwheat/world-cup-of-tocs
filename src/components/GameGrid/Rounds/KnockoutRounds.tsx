import React from 'react'

import GameRound from './GameRound'

import { makeStyles } from '@material-ui/styles'

import TextContainer from '../../TextContainer'
import Loud from '../../../typography/loud'
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
  latestGame: {
    padding: 16,
    border: '2px solid #000',
  },
  latestGameContainer: {
    marginTop: -16,
    display: 'flex',
    justifyContent: 'center',
  },
})

type KnockoutRoundData = Record<number, SinglePoll>

interface Props {
  knockoutRoundData: KnockoutRoundData
}

const KnockoutRounds: React.FC<Props> = ({ knockoutRoundData }) => {
  const classes = useStyles()

  if (!knockoutRoundData) return null

  const latestGame =
    knockoutRoundData[
      Object.keys(knockoutRoundData)
        .sort((a, b) => Number(b) - Number(a))
        .find(k => knockoutRoundData[k].votingStatus === 'IN_PROGRESS')
    ]

  return (
    <>
      {latestGame && (
        <TextContainer innerClassName={classes.latestGame}>
          <Loud center>Active game</Loud>
          <div className={classes.latestGameContainer}>
            <GameRound large noDate data={latestGame} />
          </div>
        </TextContainer>
      )}

      {latestGame && <Loud center>Other games</Loud>}
      <section className={classes.knockoutRoundsContainer}>
        {Object.keys(knockoutRoundData).map(key => (
          <GameRound data={knockoutRoundData[key]} key={key} />
        ))}
      </section>
    </>
  )
}

export default KnockoutRounds
