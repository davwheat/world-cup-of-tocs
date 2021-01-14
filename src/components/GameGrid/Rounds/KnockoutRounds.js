import React from 'react'

import { GetTocColor, GetTocName } from '../../../data/TocData'

import FormatDate from '../../../functions/formatDate'
import { makeStyles } from '@material-ui/styles'
import { Whisper } from '../../../typography'
import PollGame from '../PollGame'
import Graph from "../Graph";

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
  },
})

export default function KnockoutRounds({ knockoutRoundData }) {
  const classes = useStyles()

  return (
    <section className={classes.knockoutRoundsContainer}>
      {knockoutRoundData.map((round, i) => {
        const teamInfo = {
          team1: GetTocName(round.team1),
          team2: GetTocName(round.team2),
          team1color: GetTocColor(round.team1),
          team2color: GetTocColor(round.team2),
        }

        return (
          <div className={classes.gameContainer} key={i}>
            <Whisper center bold>
              {FormatDate(round.date)}
            </Whisper>
            <PollGame teamInfo={teamInfo} />
            {/*<Graph />*/}
          </div>
        )
      })}
    </section>
  )
}
