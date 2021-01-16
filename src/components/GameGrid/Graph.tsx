import React from 'react'

import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { makeStyles } from '@material-ui/styles'
import { GetTocColor, GetTocName } from '../../data/TocData'
// import { mockGraph } from './Rounds/mockGraph'

import dayjs from 'dayjs'
import dayjsUtc from 'dayjs/plugin/utc'
import FormatDate from '../../functions/formatDate'
import { AxisInterval, AxisType } from 'recharts/types/util/types'
import { CurveType } from 'recharts/types/shape/Curve'

/***************************************************
 ***************** CONFIG SETTINGS *****************
 ***************************************************/

/**
 * Gap between each tick on y axis (votes)
 */
const yAxisTickGap = 500

/**
 * Gap between each tick on x axis in hours
 */
const xAxisTickGap = 1

/***************************************************
 *************** END CONFIG SETTINGS ***************
 ***************************************************/

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

interface CommonAxisPropsInterface {
  type: 'number' | 'category'
  fontSize: number
  interval: AxisInterval
}

interface CommonLinePropsInterface {
  dot: boolean
  type: CurveType
  strokeWidth: number
}

const useStyles = makeStyles({
  graphContainer: {
    marginTop: 8,
    fontSize: 14,
    // Axes labels
    '& .recharts-cartesian-axis .recharts-label': {
      fontWeight: 600,
    },
    // Tooltip TOC name
    '& .recharts-tooltip-item-name': {
      fontWeight: 600,
    },
    // Legend icon/line
    '& .recharts-legend-item .recharts-surface': {
      // Better align the example line with the text
      transform: `translateY(-2px)`,
    },
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

  const team1Code = poll.votesInfo[0].tocReportingMark
  const team2Code = poll.votesInfo[1].tocReportingMark

  const team1Name = GetTocName(team1Code)
  const team2Name = GetTocName(team2Code)

  const team1Color = GetTocColor(team1Code)
  const team2Color = GetTocColor(team2Code)
  const differenceColor = '#666'

  let timeElapsed = 0
  let maxVotes = 0

  const data = [
    ...poll.votesInfo[0].votingHistory.map((thisResult, i) => {
      const thisTime = thisResult.timestamp
      const pollStartTime = poll.twitterInfo.startTime

      const team1Result = thisResult.votes
      const team2Result = poll.votesInfo[1].votingHistory[i].votes
      const difference = Math.abs(team1Result - team2Result)

      const timeSinceStart = thisTime - pollStartTime
      const timeSinceStartString = FormatDate.HoursMins(timeSinceStart)

      if (timeSinceStart > timeElapsed) timeElapsed = timeSinceStart
      if (team1Result > maxVotes) maxVotes = team1Result
      if (team2Result > maxVotes) maxVotes = team2Result

      return {
        label: timeSinceStartString,
        x: timeSinceStart,
        team1Result,
        team2Result,
        difference,
      }
    }),
  ]

  let hoursElapsed = Math.floor(timeElapsed / 1000 / 60 / 60)

  const commonAxisProps: CommonAxisPropsInterface = {
    type: 'number',
    fontSize: 12,
    interval: 0,
  }

  const commonLineProps: CommonLinePropsInterface = {
    // Disables point rendering: we have too many data points to enable this
    dot: false,
    type: 'monotone',
    strokeWidth: 1,
  }

  const tooltipVoteCountFormatter = value => `${value} votes`
  const tooltipTimeElapsedFormatter = value => `${FormatDate.HoursMins.Long(value)} elapsed`

  return (
    <ResponsiveContainer width="100%" height={300} className={classes.graphContainer}>
      <LineChart throttleDelay={50} data={data} margin={{ top: 5, right: 20, bottom: 12, left: 0 }}>
        <Legend iconType="plainline" verticalAlign="top" height={24} align="center" />

        <CartesianGrid stroke="#bbb" strokeDasharray="2 2" />

        <XAxis
          ticks={[...Array(Math.ceil((hoursElapsed + 1) / xAxisTickGap))].map((_, i) => i * 1000 * 60 * 60 * xAxisTickGap)}
          tickFormatter={(value: number) => {
            // Convert ms to hours
            const hour = value / 1000 / 60 / 60
            return `${hour}h`
          }}
          domain={[0, 'dataMax']}
          dataKey="x"
          label={{ value: 'Time elapsed', position: 'insideBottom', offset: -8 }}
          {...commonAxisProps}
        />

        <YAxis
          ticks={[...Array(Math.ceil((maxVotes + 100) / yAxisTickGap))].map((_, i) => i * yAxisTickGap)}
          domain={[0, (dataMax: number) => Math.ceil((dataMax + 100) / yAxisTickGap) * yAxisTickGap]}
          label={{ value: 'Votes', position: 'insideLeft', angle: -90 }}
          {...commonAxisProps}
        />

        <Tooltip separator=" - " formatter={tooltipVoteCountFormatter} labelFormatter={tooltipTimeElapsedFormatter} />

        <Line name={team1Name} dataKey="team1Result" stroke={team1Color} {...commonLineProps} />
        <Line name={team2Name} dataKey="team2Result" stroke={team2Color} {...commonLineProps} />
        <Line name={'Difference'} dataKey="difference" stroke={differenceColor} {...commonLineProps} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
