import { VoteStates } from '../@types/enums'
import { GetTocColor, GetTocName } from '../data/TocData'
import TwitterInfo from './TwitterInfo'
import VotesInfo from './VotesInfo'

export default class SinglePoll implements ISinglePoll {
  /**
   * UTC midnight on day of the poll
   */
  scheduledStartDay: number

  /**
   * Describes whether the poll is yet to begin (tweet not posted), is in progress, or has closed to new votes.
   */
  votingStatus: VoteStates

  /**
   * Tweet info about a poll. `null` if not started.
   */
  twitterInfo: TwitterInfo | null

  /**
   * Voting info about a poll. `null` if not started, otherwise has length of 2: `0` being the first option, and `1` being the second.
   */
  votesInfo: VotesInfo[] | null

  /**
   * Creates an instance of `SinglePoll`.
   */
  constructor({ scheduledStartDay, votingStatus = VoteStates.UPCOMING, twitterInfo = null, votesInfo = null }: IConstructorArgs) {
    this.scheduledStartDay = typeof scheduledStartDay === 'number' ? scheduledStartDay : new Date(scheduledStartDay).getTime()
    this.votingStatus = votingStatus
    this.twitterInfo = twitterInfo
    this.votesInfo = votesInfo
  }

  getTeamData(): [ITeamData, ITeamData] {
    const team1Data: ITeamData = {
      code: this.votesInfo[0].tocReportingMark,
      name: GetTocName(this.votesInfo[0].tocReportingMark),
      mainColor: GetTocColor(this.votesInfo[0].tocReportingMark),
    }

    const team2Data: ITeamData = {
      code: this.votesInfo[1].tocReportingMark,
      name: GetTocName(this.votesInfo[1].tocReportingMark),
      mainColor: GetTocColor(this.votesInfo[1].tocReportingMark),
    }

    return [team1Data, team2Data]
  }
}

interface IConstructorArgs {
  /**
   * The day that the game is scheduled to start, represented as a Unix timestamp at midnight UTC on the day, or a ISO date string.
   */
  scheduledStartDay: number | string
  /**
   * The state of the tweet/poll.
   * @default VoteStates.UPCOMING
   */
  votingStatus?: VoteStates
  /**
   * An instance of `TwitterInfo`.
   * @default null
   */
  twitterInfo?: TwitterInfo
  /**
   * An array of two `VotesInfo` class instances.
   * @default null
   */
  votesInfo?: VotesInfo[]
}
