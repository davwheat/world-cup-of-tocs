import React from 'react'

import { SinglePoll, default as Graph } from '../Graph'
import PollGame from '../PollGame'
import { Whisper } from '../../../typography'

import { makeStyles } from '@material-ui/styles'

import { GetTocColor, GetTocName } from '../../../data/TocData'
import FormatDate from '../../../functions/formatDate'

interface Props {
  data: SinglePoll
  noDate: boolean
}

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

export default function GameRound(props) {
  const { data: gamePoll, noDate } = props
  const classes = useStyles()

  const teamInfo = {
    team1: GetTocName(gamePoll.votesInfo[0].tocReportingMark),
    team2: GetTocName(gamePoll.votesInfo[1].tocReportingMark),
    team1color: GetTocColor(gamePoll.votesInfo[0].tocReportingMark),
    team2color: GetTocColor(gamePoll.votesInfo[1].tocReportingMark),
  }

  return (
    <div className={classes.gameContainer}>
      {!noDate && (
        <Whisper center bold>
          {FormatDate(gamePoll.scheduledStartDay)}
        </Whisper>
      )}
      <PollGame
        teamInfo={teamInfo}
        hasStarted={gamePoll.votingStatus !== 'UPCOMING'}
        voteInfo={{
          votes1: gamePoll.votesInfo[0].votes,
          votes2: gamePoll.votesInfo[1].votes,
        }}
        tweetId={gamePoll.twitterInfo && gamePoll.twitterInfo.tweetId}
      />

      {/* Don't try to SSR graph */}
      {typeof window !== 'undefined' && <Graph poll={gamePoll} />}
    </div>
  )
}
