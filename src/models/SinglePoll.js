module.exports = class SinglePoll {
  /**
   * UTC midnight on day of the poll
   *
   * @type {number}
   *
   * @memberof SinglePoll
   */
  scheduledStartDay

  /**
   * Describes whether the poll is yet to begin (tweet not posted), is in progress, or has closed to new votes.
   *
   * @type {"UPCOMING"|"IN_PROGRESS"|"DONE"}
   *
   * @memberof SinglePoll
   */
  votingStatus

  /**
   * Tweet info about a poll. `null` if not started.
   *
   * @type {import('./TwitterInfo')|null}
   *
   * @memberof SinglePoll
   */
  twitterInfo

  /**
   * Voting info about a poll. `null` if not started, otherwise has length of 2: `0` being the first option, and `1` being the second.
   *
   * @type {(import('./VotesInfo'))[]|null}
   *
   * @memberof SinglePoll
   */
  votesInfo

  /**
   * Creates an instance of `SinglePoll`.
   *
   * @param {object} data
   * @param {number|string} data.scheduledStartDay                            A date string from Twitter API, or a Unix timestamp.
   * @param {"UPCOMING"|"IN_PROGRESS"|"DONE"} [data.votingStatus="UPCOMING"]  A date string from Twitter API, or a Unix timestamp.
   * @param {import('./TwitterInfo')|null} [data.twitterInfo=null]    An instance of `TwitterInfo`, if a tweet exists, otherwise `null`.
   * @param {import('./VotesInfo')[]|null} data.votesInfo             An array of length two containing instances of `VotesInfo`.
   *
   * @memberof SinglePoll
   */
  constructor(data) {
    const { scheduledStartDay, votingStatus, twitterInfo, votesInfo } = data

    this.scheduledStartDay = typeof scheduledStartDay === 'number' ? scheduledStartDay : new Date(scheduledStartDay).getTime()
    this.votingStatus = votingStatus ? votingStatus : 'UPCOMING'
    this.twitterInfo = twitterInfo ? twitterInfo : null
    this.votesInfo = votesInfo ? votesInfo : null
  }
}
