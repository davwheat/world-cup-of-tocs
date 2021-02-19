/**
 * Rank table for rankings
 */
import { makeStyles, withStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React, { useEffect, useState } from 'react'
import { GetTocColor, GetTocName, TOCCode } from '../../data/TocData'
import SinglePoll from '../../models/SinglePoll'
import VotesInfo from '../../models/VotesInfo'
import { Paper } from '@material-ui/core'

interface TableEntryProps {
  rank: number
  toc: TOCCode
  votes: number
  percent: number
}

const tableStyles = makeStyles({
  tableCell: {
    color: '#fff',
    fontWeight: 600,
  },
})

const StyledTableCell = withStyles(() => ({
  body: {
    color: '#fff',
    fontWeight: 600,
    fontFamily: 'inherit',
  },
}))(TableCell)

const RankTableEntry: React.FC<TableEntryProps> = props => {
  const classes = tableStyles()
  return (
    <TableRow style={{ backgroundColor: GetTocColor(props.toc) as string }}>
      <StyledTableCell className={classes.tableCell} align="center">
        {props.rank + 1}
      </StyledTableCell>
      <StyledTableCell className={classes.tableCell} align="center">
        {GetTocName(props.toc)}
      </StyledTableCell>
      <StyledTableCell className={classes.tableCell} align="center">
        {props.votes}
      </StyledTableCell>
      <StyledTableCell className={classes.tableCell} align="center">
        {(props.percent * 100).toFixed(2)}%
      </StyledTableCell>
    </TableRow>
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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="center">TOC</StyledTableCell>
            <StyledTableCell align="center">Votes</StyledTableCell>
            <StyledTableCell align="center">%</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ranks.map((match, index) => {
            return <RankTableEntry rank={index} toc={match.tocReportingMark} votes={match.votes} percent={match.percentage} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RankTable
