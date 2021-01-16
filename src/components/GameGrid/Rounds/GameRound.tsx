import React from 'react'

import { SinglePoll, default as Graph } from '../Graph'
import PollGame from '../PollGame'
import { Paragraph, Whisper } from '../../../typography'

import { makeStyles } from '@material-ui/styles'

import { GetTocColor, GetTocName } from '../../../data/TocData'
import FormatDate from '../../../functions/formatDate'
import clsx from 'clsx'

interface Props {
  data: SinglePoll
  noDate: boolean
  large: boolean
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
  large: {
    display: 'flex',
    width: '100%',
  },
})

export default function GameRound(props: Props) {
  const { data, noDate, large } = props
  const classes = useStyles()

  const teamInfo = {
    team1: GetTocName(data.votesInfo[0].tocReportingMark),
    team2: GetTocName(data.votesInfo[1].tocReportingMark),
    team1color: GetTocColor(data.votesInfo[0].tocReportingMark),
    team2color: GetTocColor(data.votesInfo[1].tocReportingMark),
  }

  return (
    <div className={clsx(classes.gameContainer, large && classes.large)}>
      {!noDate && (
        <Whisper center bold>
          {FormatDate(data.scheduledStartDay)}
        </Whisper>
      )}
      <div>
        {large && (
          <Paragraph bold center>
            Ending in {FormatDate.HoursMins.Long(new Date(data.twitterInfo.endTime).getTime() - new Date().getTime())}
          </Paragraph>
        )}
        <PollGame
          teamInfo={teamInfo}
          hasStarted={data.votingStatus !== 'UPCOMING'}
          voteInfo={{
            votes1: data.votesInfo[0].votes,
            votes2: data.votesInfo[1].votes,
          }}
          tweetId={data.twitterInfo && data.twitterInfo.tweetId}
        />
      </div>

      {/* Don't try to SSR graph */}
      {typeof window !== 'undefined' && <Graph poll={data} />}
    </div>
  )
}
