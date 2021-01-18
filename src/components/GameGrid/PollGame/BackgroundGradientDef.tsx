import React from 'react'

import generateVotePercentage from '../../../functions/generateVotePercentage'

interface ITeamDataAdditions {
  isMainColorLight?: boolean
  /**
   * Alternate colour used for contrast on the vote "progress bar"
   */
  altColor?: string
  /**
   * Used to represent the gradient and use it as a background
   */
  gradientUuid?: string
}

export type TeamData = ITeamData & ITeamDataAdditions

interface BackgroundGradientProps {
  votes: number
  totalVotes: number
  teamData: TeamData
}

/**
 * Used to define the gradient used to show vote progress
 */
const BackgroundGradientDef: React.FC<BackgroundGradientProps> = ({ teamData, votes, totalVotes }) => {
  const votePct = `${generateVotePercentage(votes, totalVotes)}%`

  return (
    <linearGradient id={teamData.gradientUuid}>
      <stop offset="0%" stopColor={teamData.altColor} />
      <stop offset={votePct} stopColor={teamData.altColor} />
      <stop offset={votePct} stopColor={teamData.mainColor} />
      <stop offset="100%" stopColor={teamData.mainColor} />
    </linearGradient>
  )
}

export default BackgroundGradientDef
