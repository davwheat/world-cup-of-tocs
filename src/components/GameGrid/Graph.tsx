import { makeStyles } from '@material-ui/styles'
import dayjs from 'dayjs'
import dayjsUtc from 'dayjs/plugin/utc'
import React from 'react'
import { GetTocColor, GetTocName } from '../../data/TocData'
import { LineChart } from 'amazing-react-charts'
// import { mockGraph } from './Rounds/mockGraph'

dayjs.extend(dayjsUtc)

export enum VoteStates {
  UPCOMING = 'UPCOMING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

/**
 * Defines how a **single** poll should look
 */
export interface SinglePoll {
  /** Set to the midnight unix epoch of the day of the poll */
  scheduledStartDay: number

  votingStatus: VoteStates /*"UPCOMING" | "IN_PROGRESS" | "DONE";*/

  twitterInfo?: {
    /** Tweet ID (not URL) */
    tweetId: string
    /** Actual UNIX epoch of poll start */
    startTime: number
    /** Actual UNIX epoch of poll end */
    endTime: number
    /** Time duration of poll */
    durationMinutes: number
  }

  /** Actual votes for each. Index 0 is the first option, Index 1 the other, etc */
  votesInfo: {
    /** Two letter ToC report mark, i.e. name */
    tocReportingMark: string
    votes: number
    /** Votes hisotory */
    votingHistory: {
      /* UNIX epoch number of time when votes taken. Will be subtracted from startTime. */
      timestamp: number
      votes: number
    }[]
  }[] // As long as options
}

/** What is received from the API */
export interface NewAPI extends GameData {
  apiVersion: string
}

export interface GameData {
  knockout: SinglePoll[]
  groupStages: SinglePoll[]
  quarterFinal: SinglePoll[]
  semiFinal: SinglePoll[]
  runnerUp: SinglePoll
  final: SinglePoll
}

interface NewGraphProps {
  /** Poll for this graph */
  poll: SinglePoll
  isClose?: boolean
  /** Explicitly use a longer graph */
  useLongGraph?: boolean
}

const useStyles = makeStyles({
  graphContainer: {
    padding: 8,
    minWidth: 300,
    width: '100%',
  },
})

/**
 * Create a single graph for one poll
 * @param props Props
 */
const Graph: React.FunctionComponent<NewGraphProps> = function Graph(props) {
  const { poll } = props
  // const poll = mockGraph

  if (poll.votingStatus === VoteStates.UPCOMING) {
    return null // As the vote is not yet open
  }

  const classes = useStyles()

  const data = [
    {
      name: GetTocName(poll.votesInfo[0].tocReportingMark),
      values: poll.votesInfo[0].votingHistory.map(thisResult => ({
        label: dayjs(new Date(thisResult.timestamp - poll.votesInfo[0].votingHistory[0].timestamp))
          .utc()
          .format('H:mm'),
        result: thisResult.votes,
      })),
    },
    {
      name: GetTocName(poll.votesInfo[1].tocReportingMark),
      values: poll.votesInfo[1].votingHistory.map(thisResult => ({
        label: dayjs(new Date(thisResult.timestamp - poll.votesInfo[1].votingHistory[0].timestamp))
          .utc()
          .format('H:mm'),
        result: thisResult.votes,
      })),
    },
    {
      name: 'Difference',
      values: poll.votesInfo[0].votingHistory.map((thisResult, index) => {
        console.log(thisResult.timestamp - poll.votesInfo[0].votingHistory[0].timestamp)

        return {
          label: dayjs(thisResult.timestamp - poll.votesInfo[0].votingHistory[0].timestamp)
            .utc()
            .format('H:mm'),
          result: Math.abs(thisResult.votes - poll.votesInfo[1].votingHistory[index].votes),
        }
      }),
    },
  ]

  // Ok, so we need to line graphs:
  return (
    <div className={classes.graphContainer}>
      <LineChart
        data={data}
        axisNames={{ x: 'Hours:mins', y: 'Votes' }}
        colors={[GetTocColor(poll.votesInfo[0].tocReportingMark), GetTocColor(poll.votesInfo[1].tocReportingMark), '#444']}
      />
    </div>
  )
}

export default Graph
