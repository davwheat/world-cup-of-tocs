import TwitterInfo from './TwitterInfo'
import VotesInfo from './VotesInfo'

export default class SinglePoll implements ISinglePoll {
  /**
   * UTC midnight on day of the poll
   *
   * @memberof SinglePoll
   */
  scheduledStartDay: number

  /**
   * Describes whether the poll is yet to begin (tweet not posted), is in progress, or has closed to new votes.
   *
   * @memberof SinglePoll
   */
  votingStatus: VoteStates

  /**
   * Tweet info about a poll. `null` if not started.
   *
   * @memberof SinglePoll
   */
  twitterInfo: TwitterInfo | null

  /**
   * Voting info about a poll. `null` if not started, otherwise has length of 2: `0` being the first option, and `1` being the second.
   *
   * @memberof SinglePoll
   */
  votesInfo: VotesInfo | null

  /**
   * Creates an instance of `SinglePoll`.
   *
   * @memberof SinglePoll
   */
  constructor({ scheduledStartDay, votingStatus = VoteStates.UPCOMING, twitterInfo = null, votesInfo = null }: ConstructorArgs) {
    this.scheduledStartDay = typeof scheduledStartDay === 'number' ? scheduledStartDay : new Date(scheduledStartDay).getTime()
    this.votingStatus = votingStatus
    this.twitterInfo = twitterInfo
    this.votesInfo = votesInfo
  }
}

type ConstructorArgs = {
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
  votesInfo?: VotesInfo
}
