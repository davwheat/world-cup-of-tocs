import React from 'react'

import Graph from '../Graph'
import PollGame from '../PollGame'
import { Paragraph, Whisper } from '../../../typography'

import { makeStyles } from '@material-ui/styles'

import { GetTocColor, GetTocName } from '../../../data/TocData'
import FormatDate from '../../../functions/formatDate'
import clsx from 'clsx'
import SinglePoll from '../../../models/SinglePoll'

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

/**
 * Shows a `PollGame` and `Graph` for a specified game, provided as a `SinglePoll`.
 *
 * @export
 * @param {Props} props
 * @return {React.ReactNode}
 */
const GameRound: React.FC<Props> = ({ data, noDate, large }) => {
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
            Ending in {FormatDate.HoursMinsLong(new Date(data.twitterInfo.endTime).getTime() - new Date().getTime())}
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
      {typeof window !== 'undefined' && <Graph poll={data} large={large} />}
    </div>
  )
}

export default GameRound
