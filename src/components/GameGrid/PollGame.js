import React from 'react'

import Color from 'color'
import { v4 as uuid } from 'uuid'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import generateTwitterUrl from '../../functions/generateTwitterUrl'
import { Sizing } from '../../data'

const pollGameSizing = Sizing.pollGame

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
      outline: '2px solid #ffd1dc',
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

export default function PollGame({ voteInfo, teamInfo, tweetId, hasStarted }) {
  const classes = useStyles()

  const { team1, team2, team1color, team2color } = teamInfo

  const colors = {
    0: {
      isLight: Color(team1color).isLight(),
      normal: team1color,
      gradientUuid: uuid(),
    },
    1: {
      isLight: Color(team2color).isLight(),
      normal: team2color,
      gradientUuid: uuid(),
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

  function generateBackgroundGradient(index) {
    const votePct = gameData.votesPct[index] + '%'

    return (
      <linearGradient id={colors[index].gradientUuid}>
        <stop offset="0%" stopColor={colors[index].alt} />
        <stop offset={votePct} stopColor={colors[index].alt} />
        <stop offset={votePct} stopColor={colors[index].normal} />
        <stop offset="100%" stopColor={colors[index].normal} />
      </linearGradient>
    )
  }

  const gameData = {
    teams: { 0: team1, 1: team2 },
    votes: { 0: votes1, 1: votes2 },
    votesPct: { 0: generateVotePercentage(votes1), 1: generateVotePercentage(votes2) },
  }

  // Create alt colours
  colors[0].alt = colors[0].isLight ? Color(colors[0].normal).darken(0.2) : Color(colors[0].normal).lighten(0.2)
  colors[1].alt = colors[1].isLight ? Color(colors[1].normal).darken(0.2) : Color(colors[1].normal).lighten(0.2)

  return (
    <svg viewBox={`0 0 ${pollGameSizing.width} ${pollGameSizing.height}`} width={pollGameSizing.width} className={classes.root}>
      <defs>
        {generateBackgroundGradient(0)}
        {generateBackgroundGradient(1)}
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
