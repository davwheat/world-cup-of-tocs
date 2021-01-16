import React from 'react'

import GameRound from './GameRound'
import { Shout } from '../../../typography'

import { makeStyles } from '@material-ui/styles'

import { SinglePoll } from '../Graph'
import TextContainer from '../../TextContainer'
import Loud from '../../../typography/loud'

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

interface KnockoutRoundData {
  [key: number]: SinglePoll
}

interface Props {
  knockoutRoundData: KnockoutRoundData
}

export default function KnockoutRounds(props: Props) {
  const { knockoutRoundData } = props
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
