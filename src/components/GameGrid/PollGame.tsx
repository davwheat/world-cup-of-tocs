import React from 'react'

import Color from 'color'
import { v4 as uuid } from 'uuid'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import generateTwitterUrl from '../../functions/generateTwitterUrl'
import { Sizing } from '../../data'
import { TOCColors, TOCName } from '../../data/TocData'

const pollGameSizing = Sizing.pollGame

type BackgroundGradientProps = {
  teamNumber: number
  gameData: {
    teams: Record<number, string>
    votes: Record<number, number>
    votesPct: Record<number, number>
  }
  colors: FullColorData
}

type TeamColorData = {
  isLight: boolean
  normal: string
  alt: string
  gradientUuid: string
}

type FullColorData = {
  0: TeamColorData
  1: TeamColorData
}

/**
 * Used to generate the gradient used to show vote progress
 */
const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ teamNumber, gameData, colors }) => {
  const votePct = `${gameData.votesPct[teamNumber]}%`

  return (
    <linearGradient id={colors[teamNumber].gradientUuid}>
      <stop offset="0%" stopColor={colors[teamNumber].alt} />
      <stop offset={votePct} stopColor={colors[teamNumber].alt} />
      <stop offset={votePct} stopColor={colors[teamNumber].normal} />
      <stop offset="100%" stopColor={colors[teamNumber].normal} />
    </linearGradient>
  )
}

const useStyles = makeStyles({
  root: {
    overflow: 'visible',
    /** Centre align */
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
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
  voteInfo: {
    votes1?: number
    votes2?: number
  }
  teamInfo: {
    team1: TOCName
    team2: TOCName
    team1color: TOCColors
    team2color: TOCColors
  }
  tweetId?: string
  hasStarted: boolean
}

const PollGame: React.FC<Props> = ({ voteInfo, teamInfo, tweetId, hasStarted }) => {
  const classes = useStyles()

  const { team1, team2, team1color, team2color } = teamInfo

  const colors: FullColorData = {
    0: {
      isLight: Color(team1color).isLight(),
      normal: team1color,
      gradientUuid: uuid(),
      alt: Color(team1color).isLight() ? Color(team1color).darken(0.2) : Color(team1color).lighten(0.2),
    },
    1: {
      isLight: Color(team2color).isLight(),
      normal: team2color,
      gradientUuid: uuid(),
      alt: Color(team2color).isLight() ? Color(team2color).darken(0.2) : Color(team2color).lighten(0.2),
    },
  }

  if (!hasStarted) {
    return (
      <svg viewBox={`0 0 ${pollGameSizing.width} ${pollGameSizing.height}`} width={pollGameSizing.width} className={classes.root}>
        <a className={classes.rect} target="_blank" href={tweetId ? generateTwitterUrl(tweetId) : null} rel="noreferrer">
          <title>Game not started</title>
          <rect x="0" y="0" height={pollGameSizing.barHeight} width={pollGameSizing.width} fill={team1color} />
          <text
            x={pollGameSizing.width / 2}
            y={pollGameSizing.barHeight / 2}
            className={clsx(classes.gameText, colors[0].isLight ? classes.darkText : classes.lightText)}
          >
            <tspan className={classes.tocName}>{team1}</tspan>
          </text>
        </a>
        <a className={classes.rect} target="_blank" href={tweetId ? generateTwitterUrl(tweetId) : null} rel="noreferrer">
          <title>Game not started</title>
          <rect x="0" y={pollGameSizing.height - pollGameSizing.barHeight} height={pollGameSizing.barHeight} width={pollGameSizing.width} fill={team2color} />
          <text
            x={pollGameSizing.width / 2}
            y={pollGameSizing.height - pollGameSizing.barHeight / 2}
            className={clsx(classes.gameText, colors[1].isLight ? classes.darkText : classes.lightText)}
          >
            <tspan className={classes.tocName}>{team2}</tspan>
          </text>
        </a>
      </svg>
    )
  }

  const { votes1, votes2 } = voteInfo

  const totalVotes = votes1 + votes2

  function generateVotePercentage(votes) {
    if (votes === 0) return 0

    return Math.round((votes / totalVotes) * 100 * 100) / 100
  }

  const gameData = {
    teams: { 0: team1, 1: team2 },
    votes: { 0: votes1, 1: votes2 },
    votesPct: { 0: generateVotePercentage(votes1), 1: generateVotePercentage(votes2) },
  }

  return (
    <svg viewBox={`0 0 ${pollGameSizing.width} ${pollGameSizing.height}`} width={pollGameSizing.width} className={classes.root}>
      <defs>
        <BackgroundGradient teamNumber={0} colors={colors} gameData={gameData} />
        <BackgroundGradient teamNumber={1} colors={colors} gameData={gameData} />
      </defs>
      <a className={classes.rect} target="_blank" href={generateTwitterUrl(tweetId)} rel="noreferrer">
        <title>{`${gameData.votes[0]} votes`}</title>
        <rect x="0" y="0" height={pollGameSizing.barHeight} width={pollGameSizing.width} fill={`url(#${colors[0].gradientUuid})`} />
        <text
          x={pollGameSizing.width / 2}
          y={pollGameSizing.barHeight / 2}
          className={clsx(classes.gameText, colors[0].isLight ? classes.darkText : classes.lightText)}
        >
          <tspan className={classes.tocName}>{gameData.teams[0]}</tspan> <tspan>({gameData.votesPct[0]}%)</tspan>
        </text>
      </a>
      <a className={classes.rect} target="_blank" href={generateTwitterUrl(tweetId)} rel="noreferrer">
        <title>{`${gameData.votes[1]} votes`}</title>
        <rect
          x="0"
          y={pollGameSizing.height - pollGameSizing.barHeight}
          height={pollGameSizing.barHeight}
          width={pollGameSizing.width}
          fill={`url(#${colors[1].gradientUuid})`}
        />
        <text
          x={pollGameSizing.width / 2}
          y={pollGameSizing.height - pollGameSizing.barHeight / 2}
          className={clsx(classes.gameText, colors[1].isLight ? classes.darkText : classes.lightText)}
        >
          <tspan className={classes.tocName}>{gameData.teams[1]}</tspan> <tspan>({gameData.votesPct[1]}%)</tspan>
        </text>
      </a>
    </svg>
  )
}

export default PollGame
