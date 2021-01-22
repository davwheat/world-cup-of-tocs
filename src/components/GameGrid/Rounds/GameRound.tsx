import React from 'react'

import Graph from '../Graph'
import PollGame from '../PollGame'
import { Paragraph, Whisper } from '../../../typography'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import FormatDate from '../../../functions/formatDate'
import SinglePoll from '../../../models/SinglePoll'

const useStyles = makeStyles({
  knockoutRoundsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    marginTop: 8,
    width: 500,
    maxWidth: '100%',
  },
  large: {
    width: '100%',
  },
})

interface Props {
  data: SinglePoll
  /**
   * Removes the small date above the game.
   * @default false
   */
  noDate?: boolean
  /**
   * Show a larger graph. Used for the active game box.
   * @default false
   */
  large?: boolean
}

/**
 * Shows a `PollGame` and `Graph` for a specified game, provided as a `SinglePoll`.
 */
const GameRound: React.FC<Props> = ({ data, noDate, large }) => {
  const classes = useStyles()

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
            Ending in {FormatDate.HoursMinsLong(new Date(data.twitterInfo.endTime).getTime() - new Date().getTime())}
          </Paragraph>
        )}
        {data.scheduledStartDay <= Date.now() && (
          <Paragraph center>
            Total Votes: {data.votesInfo[0].votes + data.votesInfo[1].votes}, <abbr title="Vote difference (delta)">Δ</abbr>:&nbsp;
            {data.votesInfo[0].votes > data.votesInfo[1].votes
              ? data.votesInfo[0].votes - data.votesInfo[1].votes
              : data.votesInfo[1].votes - data.votesInfo[0].votes}
          </Paragraph>
        )}
        <PollGame
          teamData={data.getTeamData()}
          hasStarted={data.votingStatus !== 'UPCOMING'}
          voteInfo={{
            votes1: data.votesInfo[0].votes,
            votes2: data.votesInfo[1].votes,
          }}
          tweetId={data.twitterInfo && data.twitterInfo.tweetId}
        />
      </div>

      {/* Don't try to SSR graph */}
      {typeof window !== 'undefined' && <Graph poll={data} large={large} />}
    </div>
  )
}

export default GameRound
