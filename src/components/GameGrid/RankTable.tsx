/**
 * Rank table for rankings
 */
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { GetTocName } from '../../data/TocData'
import SinglePoll from '../../models/SinglePoll'
import VotesInfo from '../../models/VotesInfo'

interface TableEntryProps {
  rank: number
  toc: string
  votes: number
  percent: number
}

const tableStyles = makeStyles({
  tableBase: {
    border: '1px solid black',
    borderCollapse: 'collapse',
  },
})

const RankTableEntry: React.FC<TableEntryProps> = props => {
  const classes = tableStyles()
  return (
    <tr>
      <td>{props.rank + 1}</td>
      <td>{props.toc}</td>
      <td>{props.votes}</td>
      <td>{(props.percent * 100).toFixed(2)}%</td>
    </tr>
  )
}

interface TableProps {
  /** Poll for 1st place! */
  final: SinglePoll
  /** Poll for second place */
  runoff: SinglePoll
}

/** Extended VotesInfo that includes percetnage */
interface IVotesInfoExtended extends VotesInfo {
  /** Exact percent as a number between 0 and 1 */
  percentage: number
}

/** Stores the ranks. Index 0 is first place */
type TheState = Array<IVotesInfoExtended>

const RankTable: React.FC<TableProps> = props => {
  const [ranks, setranks] = useState<TheState>([])
  const classes = tableStyles()

  /** Create ranks */
  useEffect(() => {
    setranks([])

    // Same logic for both rounds. So just use an array!
    const orderedRanks = [props.final, props.runoff].map(match => {
      const totalVotesFirstPlace = match.votesInfo[0].votes + match.votesInfo[1].votes
      if (match.votesInfo[0].votes >= match.votesInfo[1].votes) {
        return [
          {
            ...match.votesInfo[0],
            percentage: match.votesInfo[0].votes / totalVotesFirstPlace,
          },
          {
            ...match.votesInfo[1],
            percentage: match.votesInfo[1].votes / totalVotesFirstPlace,
          },
        ]
      } else {
        return [
          {
            ...match.votesInfo[1],
            percentage: match.votesInfo[1].votes / totalVotesFirstPlace,
          },
          {
            ...match.votesInfo[0],
            percentage: match.votesInfo[0].votes / totalVotesFirstPlace,
          },
        ]
      }
    })

    setranks([...orderedRanks[0], ...orderedRanks[1]])
  }, [props])

  return (
    <table>
      <thead>
        <tr>Rank</tr>
        <tr>TOC</tr>
        <tr>Votes</tr>
        <tr>%</tr>
      </thead>
      <tbody>
        {ranks.map((match, index) => {
          return <RankTableEntry rank={index} toc={GetTocName(match.tocReportingMark)} votes={match.votes} percent={match.percentage} />
        })}
      </tbody>
    </table>
  )
}

export default RankTable
