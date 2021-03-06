import React, { useState } from 'react'

import Graph from '../Graph'
import PollGame from '../PollGame'
import Link from '../../Link'
import Modal from '../../Modal'
import BulletListWrapper from '../../BulletListWrapper'
import { Paragraph, Whisper } from '../../../typography'
import Linkify from 'react-linkify'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import FormatDate from '../../../functions/formatDate'
import SinglePoll from '../../../models/SinglePoll'
import { VoteStates } from '../../../@types/enums'

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
  viewNotesButton: {
    display: 'block',
    lineHeight: 1.2,
    fontSize: 16,
    margin: 'auto',
    marginTop: 7,
    marginBottom: 8,
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
  note?: string[]
}

/**
 * Shows a `PollGame` and `Graph` for a specified game, provided as a `SinglePoll`.
 */
const GameRound: React.FC<Props> = ({ data, noDate, large, note }) => {
  const classes = useStyles()
  const [showNotesModal, setShowNotesModal] = useState(false)

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
        {data.votingStatus !== VoteStates.UPCOMING && (
          <Paragraph center>
            Total Votes: {data.votesInfo[0].votes + data.votesInfo[1].votes}, <abbr title="Vote difference (delta)">Δ</abbr>:&nbsp;
            {data.votesInfo[0].votes > data.votesInfo[1].votes
              ? data.votesInfo[0].votes - data.votesInfo[1].votes
              : data.votesInfo[1].votes - data.votesInfo[0].votes}
          </Paragraph>
        )}
        <PollGame
          teamData={data.getTeamData()}
          hasStarted={data.votingStatus !== VoteStates.UPCOMING}
          voteInfo={{
            votes1: data.votesInfo[0].votes,
            votes2: data.votesInfo[1].votes,
          }}
          tweetId={data.twitterInfo && data.twitterInfo.tweetId}
        />
        {note && (
          // eslint-disable-next-line
          <Link className={classes.viewNotesButton} onClick={() => setShowNotesModal(true)}>
            View game notes
          </Link>
        )}
        {showNotesModal && (
          <Modal title="Game notes" onClose={() => setShowNotesModal(false)}>
            <Paragraph bold>These notes explain any issues or info regarding the data from this poll.</Paragraph>
            <BulletListWrapper>
              {note.map((n, i) => (
                <li key={i}>
                  <Linkify component={Link} properties={{ target: '_blank', url: Linkify.MATCH }}>
                    {n}
                  </Linkify>
                </li>
              ))}
            </BulletListWrapper>
          </Modal>
        )}
      </div>

      {/* Don't try to SSR graph */}
      {typeof window !== 'undefined' && <Graph poll={data} large={large} />}
    </div>
  )
}

export default GameRound
