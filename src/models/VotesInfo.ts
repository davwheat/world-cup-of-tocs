import { TOCCode } from '../data/TocData'

export default class VotesInfo {
  /**
   * A valid TOC reporting mark.
   *
   * @memberof VotesInfo
   */
  tocReportingMark: TOCCode

  /**
   * Number of votes for this TOC. `null` if poll hasn't started.
   *
   * @memberof VotesInfo
   */
  votes: number | null

  /**
   * Vote history over time. Usually taken every few mins, but depends on Twitter API's update rate. `null` if poll hasn't started.
   *
   * @memberof VotesInfo
   */
  votingHistory: VotingHistoryEntry[] | null

  /**
   * Creates an instance of VotesInfo.
   *
   * @memberof VotesInfo
   */
  constructor({ tocReportingMark, votes = null, votingHistory = null }: ConstructorArgs) {
    this.tocReportingMark = tocReportingMark
    this.votes = votes
    this.votingHistory = votingHistory
  }
}

type ConstructorArgs = {
  /**
   * A valid TOC reporting mark.
   */
  tocReportingMark: TOCCode
  /**
   * Number of votes for this TOC. `null` if poll hasn't started.
   */
  votes: number | null
  /**
   * Vote history over time. Usually taken every few mins, but depends on Twitter API's update rate. `null` if poll hasn't started.
   */
  votingHistory: VotingHistoryEntry[] | null
}

type VotingHistoryEntry = {
  timestamp: number
  votes: number
}
