import React from 'react'

import Color from 'color'
import { v4 as uuid } from 'uuid'
import { makeStyles } from '@material-ui/styles'
import { Sizing } from '../../../data'
import BackgroundGradientDef from './BackgroundGradientDef'
import type { TeamData } from './BackgroundGradientDef'
import PollGameBar from './PollGameBar'

const pollGameSizing = Sizing.pollGame

const useStyles = makeStyles({
  root: {
    overflow: 'visible',
    /** Centre align */
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

interface Props {
  voteInfo: {
    votes1?: number
    votes2?: number
  }
  teamData: [ITeamData, ITeamData]
  tweetId?: string
  hasStarted: boolean
  note?: string
}

/**
 * Represents a full PollGame with supplied data.
 *
 * Renders an SVG image with two bars, containing the team names, vote percentage, and with a background showing the proportion of votes.
 */
const PollGameOuter: React.FC<Props> = ({ voteInfo, teamData: oldTeamData, tweetId, hasStarted, note }) => {
  const classes = useStyles()

  const teamData: [TeamData, TeamData] = oldTeamData

  // Add "is light" values
  teamData[0].isMainColorLight = Color(teamData[0].mainColor).isLight()
  teamData[1].isMainColorLight = Color(teamData[1].mainColor).isLight()

  // Add other values from ITeamAdditions
  teamData[0] = {
    ...teamData[0],
    gradientUuid: uuid(),
    altColor: teamData[0].isMainColorLight ? Color(teamData[0].mainColor).darken(0.2).hex() : Color(teamData[0].mainColor).lighten(0.2).hex(),
  }

  teamData[1] = {
    ...teamData[1],
    gradientUuid: uuid(),
    altColor: teamData[1].isMainColorLight ? Color(teamData[1].mainColor).darken(0.2).hex() : Color(teamData[1].mainColor).lighten(0.2).hex(),
  }

  const totalVotes = voteInfo.votes1 + voteInfo.votes2

  return (
    <svg viewBox={`0 0 ${pollGameSizing.width} ${pollGameSizing.height}`} width={pollGameSizing.width} className={classes.root}>
      <defs>
        <BackgroundGradientDef teamData={teamData[0]} totalVotes={totalVotes} votes={voteInfo.votes1} />
        <BackgroundGradientDef teamData={teamData[1]} totalVotes={totalVotes} votes={voteInfo.votes2} />
      </defs>

      <PollGameBar gameNumber={1} tweetId={tweetId} hasStarted={hasStarted} teamData={teamData[0]} totalVotes={totalVotes} votes={voteInfo.votes1} />
      <PollGameBar gameNumber={2} tweetId={tweetId} hasStarted={hasStarted} teamData={teamData[1]} totalVotes={totalVotes} votes={voteInfo.votes2} />
    </svg>
  )
}

export default PollGameOuter
