import React from 'react'

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { AxisInterval } from 'recharts/types/util/types'
import type { CurveType } from 'recharts/types/shape/Curve'

import { makeStyles } from '@material-ui/styles'
import SinglePoll from '../../models/SinglePoll'

import FormatDate from '../../functions/formatDate'

import dayjs from 'dayjs'
import dayjsUtc from 'dayjs/plugin/utc'
import { VoteStates } from '../../@types/enums'

dayjs.extend(dayjsUtc)

/***************************************************
 ***************** CONFIG SETTINGS *****************
 ***************************************************/

/**
 * Gap between each tick on y axis (votes)
 */
const yAxisTickGap = 500 as const

/**
 * Gap between each tick on x axis in hours
 */
const xAxisTickGap = 1 as const

/**
 * The colour of the difference line on the graph
 */
const differenceColor = '#666' as const

/***************************************************
 *************** END CONFIG SETTINGS ***************
 ***************************************************/

interface Props {
  /**
   * Poll for this graph
   */
  poll: SinglePoll
  isClose?: boolean
  /**
   * Use a taller graph
   */
  large?: boolean
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
 */
const Graph: React.FC<Props> = ({ poll, large }) => {
  if (poll.votingStatus === VoteStates.UPCOMING) {
    return null
  } // As the vote is not yet open

  const classes = useStyles()

  const [team1Data, team2Data] = poll.getTeamData()

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

  const hoursElapsed = Math.floor(timeElapsed / 1000 / 60 / 60)

  const commonAxisProps: CommonAxisPropsInterface = {
    type: 'number',
    fontSize: 12,
    interval: 0,
  }

  const commonLineProps: CommonLinePropsInterface = {
    // Disables point rendering: we have too many data points to enable this
    dot: false,
    type: 'linear',
    strokeWidth: 1,
  }

  const tooltipVoteCountFormatter = (value: number) => `${value} votes`
  const tooltipTimeElapsedFormatter = (value: number) => `${FormatDate.HoursMinsLong(value)} elapsed`

  /**
   * Creates an array with `length`, where each element is equal to its
   * index multiplied by the `multiplier`.
   *
   * `length` is always rounded up, if decimal.
   *
   * @example createArrayOfLengthAndMultiplier(3, 2) = [0, 2, 4]
   * @example createArrayOfLengthAndMultiplier(5, 6) = [0, 6, 12]
   * @example createArrayOfLengthAndMultiplier(2.3, 0) = [0, 0, 0]
   */
  const createArrayOfLengthAndMultiplier = (length: number, multiplier: number): number[] => [...Array(Math.ceil(length))].map((_, i) => i * multiplier)

  return (
    <ResponsiveContainer width="100%" height={large ? 400 : 300} className={classes.graphContainer}>
      <LineChart
        throttleDelay={50} // Delays tooltip showing to prevent insane CPU usage when hovering
        data={data}
        margin={{ bottom: 12 }}
      >
        <Legend iconType="plainline" verticalAlign="top" height={24} align="center" />

        <CartesianGrid stroke="#bbb" strokeDasharray="2 2" />

        <XAxis
          ticks={createArrayOfLengthAndMultiplier((hoursElapsed + 1) / xAxisTickGap, 1000 * 60 * 60 * xAxisTickGap)}
          tickFormatter={(value: number) => {
            const hour = value / 1000 / 60 / 60 // Convert ms to hours
            return `${hour}h`
          }}
          domain={[0, 'dataMax']}
          dataKey="x"
          label={{ value: 'Time elapsed', position: 'insideBottom', offset: -8 }}
          {...commonAxisProps}
        />

        <YAxis
          ticks={createArrayOfLengthAndMultiplier((maxVotes + 100) / yAxisTickGap, yAxisTickGap)}
          domain={[0, (dataMax: number) => Math.ceil((dataMax + 100) / yAxisTickGap) * yAxisTickGap]}
          label={{ value: 'Votes', position: 'insideLeft', angle: -90 }}
          {...commonAxisProps}
        />

        <Tooltip separator=" - " formatter={tooltipVoteCountFormatter} labelFormatter={tooltipTimeElapsedFormatter} />

        <Line name={team1Data.name} dataKey="team1Result" stroke={team1Data.mainColor} {...commonLineProps} />
        <Line name={team2Data.name} dataKey="team2Result" stroke={team2Data.mainColor} {...commonLineProps} strokeDasharray="4 2" />
        <Line name={'Difference'} dataKey="difference" stroke={differenceColor} {...commonLineProps} strokeDasharray="1 1" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
