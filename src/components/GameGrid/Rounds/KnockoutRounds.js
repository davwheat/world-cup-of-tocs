import React from 'react'

import { GetTocColor, GetTocName } from '../../../data/TocData'

import FormatDate from '../../../functions/formatDate'
import { makeStyles } from '@material-ui/styles'
import { Whisper } from '../../../typography'
import PollGame from '../PollGame'
import Graph from '../Graph'
import { mockGraph } from './mockGraph'

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

/**
 *
 * @param {object} props
 * @param {import("../../../models/SinglePoll")[]} props.knockoutRoundData
 */
export default function KnockoutRounds(props) {
  const classes = useStyles()
  const { knockoutRoundData } = props

  return (
    <section className={classes.knockoutRoundsContainer}>
      {Object.keys(knockoutRoundData).map(key => {
        const gamePoll = knockoutRoundData[key]

        const teamInfo = {
          team1: GetTocName(gamePoll.votesInfo[0].tocReportingMark),
          team2: GetTocName(gamePoll.votesInfo[1].tocReportingMark),
          team1color: GetTocColor(gamePoll.votesInfo[0].tocReportingMark),
          team2color: GetTocColor(gamePoll.votesInfo[1].tocReportingMark),
        }

        return (
          <div className={classes.gameContainer} key={key}>
            <Whisper center bold>
              {FormatDate(gamePoll.scheduledStartDay)}
            </Whisper>
            <PollGame teamInfo={teamInfo} />
            <Graph poll={gamePoll} />
          </div>
        )
      })}
    </section>
  )
}
