import type { TOCCode } from '../data/TocData'

export default class VotesInfo implements IVotesInfo {
  /**
   * A valid TOC reporting mark.
   */
  public tocReportingMark: TOCCode

  /**
   * Number of votes for this TOC. `null` if poll hasn't started.
   */
  public votes: number | null

  /**
   * Vote history over time. Usually taken every few mins, but depends on Twitter API's update rate. `null` if poll hasn't started.
   */
  public votingHistory: IVotingHistoryEntry[] | null

  /**
   * Creates an instance of VotesInfo.
   */
  public constructor({ tocReportingMark, votes = null, votingHistory = null }: IConstructorArgs) {
    this.tocReportingMark = tocReportingMark
    this.votes = votes
    this.votingHistory = votingHistory
  }
}

interface IConstructorArgs {
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
  votingHistory: IVotingHistoryEntry[] | null
}
