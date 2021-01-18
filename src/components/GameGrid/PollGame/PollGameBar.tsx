import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import generateTwitterUrl from '../../../functions/generateTwitterUrl'
import generateVotePercentage from '../../../functions/generateVotePercentage'
import { Sizing } from '../../../data'

import type { TeamData } from './BackgroundGradientDef'

const useStyles = makeStyles({
  rect: {
    '&:hover, &:focus, &:focus-within': {
      outline: '2px solid #f00',
      boxShadow: '0 0 0 2px #000',
    },
  },
  gameText: {
    fontSize: 14,
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    // shift down by 1px to make it look more centred
    transform: `translateY(1px)`,
    verticalAlign: 'middle',
    userSelect: 'none',
  },
  tocName: {
    fontWeight: 600,
    fontSize: 18,
    marginRight: 2,
  },
  lightText: {
    fill: '#fff',
  },
  darkText: {
    fill: '#000',
  },
})

interface Props {
  teamData?: TeamData
  hasStarted?: boolean
  votes?: number
  totalVotes?: number
  tweetId: string
  gameNumber: 1 | 2
}

const PollGameBar: React.FC<Props> = ({ teamData, tweetId, hasStarted = true, votes = 0, totalVotes = 0, gameNumber }) => {
  const classes = useStyles()

  const percentage = generateVotePercentage(votes, totalVotes)

  return (
    <a className={classes.rect} target="_blank" href={tweetId ? generateTwitterUrl(tweetId) : null} rel="noreferrer">
      {hasStarted ? <title>Game not started</title> : <title>{`${teamData.name} - ${votes} votes`}</title>}
      <rect
        x="0"
        y={gameNumber === 1 ? 0 : Sizing.pollGame.height - Sizing.pollGame.barHeight}
        height={Sizing.pollGame.barHeight}
        width={Sizing.pollGame.width}
        fill={hasStarted ? `url(#${teamData.gradientUuid})` : teamData.mainColor}
      />
      <text
        x={Sizing.pollGame.width / 2}
        y={gameNumber === 1 ? Sizing.pollGame.barHeight / 2 : Sizing.pollGame.height - Sizing.pollGame.barHeight / 2}
        className={clsx(classes.gameText, teamData.isMainColorLight ? classes.darkText : classes.lightText)}
      >
        <tspan className={classes.tocName}>{teamData.name}</tspan>
        {hasStarted && <tspan> ({percentage}%)</tspan>}
      </text>
    </a>
  )
}

export default PollGameBar
