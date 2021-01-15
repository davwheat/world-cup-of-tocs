import React from 'react'

import { Whisper } from '../../../typography'
import PollGame from '../PollGame'
import Graph from '../Graph'

import { makeStyles } from '@material-ui/styles'

import { GetTocColor, GetTocName } from '../../../data/TocData'

import FormatDate from '../../../functions/formatDate'
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
    width: 300,
    maxWidth: '100%',
  },
})

/**
 *
 * @param {object} props
 * @param {import("../../../models/SinglePoll")[]} props.knockoutRoundData
 */
export default function KnockoutRounds(props) {
  const classes = useStyles()

  /**
   * @type {SinglePoll[]}
   */
  const knockoutRoundData = props.knockoutRoundData

  return (
    <section className={classes.knockoutRoundsContainer}>
      {Object.keys(knockoutRoundData).map(key => {
        /**
         * @type {SinglePoll}
         */
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
            <PollGame
              teamInfo={teamInfo}
              hasStarted={gamePoll.votingStatus !== 'UPCOMING'}
              voteInfo={{
                votes1: gamePoll.votesInfo[0].votes,
                votes2: gamePoll.votesInfo[1].votes,
              }}
              tweetId={gamePoll.twitterInfo && gamePoll.twitterInfo.tweetId}
            />
            <Graph poll={gamePoll} />
          </div>
        )
      })}
    </section>
  )
}
