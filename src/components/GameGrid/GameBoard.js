import React from 'react'

import PollGame from './PollGame'
import { Paragraph, Shout, Whisper } from '../../typography'

import FormatDate from '../../functions/formatDate'

import KnownGameData from '../../data/GameData'
import { GetTocColor, GetTocName } from '../../data/TocData'
import { makeStyles } from '@material-ui/styles'
import TextContainer from '../TextContainer'

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
    width: 'max-content',
    textAlign: 'center',
  },
})

export default function GameBoard() {
  const classes = useStyles()

  return (
    <>
      <TextContainer>
        <Shout>Knockout rounds</Shout>
        <Paragraph>Knockout rounds begin on Friday 15 January and end on Saturday 30 January.</Paragraph>
      </TextContainer>

      <section className={classes.knockoutRoundsContainer}>
        {KnownGameData.KnockoutRounds.map((round, i) => {
          const teamInfo = {
            team1: GetTocName(round.team1),
            team2: GetTocName(round.team2),
            team1color: GetTocColor(round.team1),
            team2color: GetTocColor(round.team2),
          }

          return (
            <div className={classes.gameContainer} key={i}>
              <Whisper bold>{FormatDate(round.date)}</Whisper>
              <PollGame teamInfo={teamInfo} />
            </div>
          )
        })}
      </section>
    </>
  )
}
