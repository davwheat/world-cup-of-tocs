module.exports = class VotesInfo {
  /**
   * A valid TOC reporting mark.
   *
   * @type {string}
   *
   * @memberof VotesInfo
   */
  tocReportingMark

  /**
   * Number of votes for this TOC. `null` if poll hasn't started.
   *
   * @type {number | null}
   *
   * @memberof VotesInfo
   */
  votes

  /**
   * Vote history over time. Usually taken every few mins, but depends on Twitter API's update rate. `null` if poll hasn't started.
   *
   * @type {{ timestamp: number, votes: number }[] | null}
   *
   * @memberof VotesInfo
   */
  votingHistory

  /**
   * Creates an instance of VotesInfo.
   * @param {object} data
   * @param {string} data.tocReportingMark                                            A valid TOC reporting mark.
   * @param {string} [data.votes=null]                                                Number of votes for this TOC. `null` if poll hasn't started.
   * @param {{ timestamp: number, votes: number }[] | null} [data.votingHistory=null] Vote history over time. Usually taken every few mins, but depends on Twitter API's update rate. `null` if poll hasn't started.
   * @memberof VotesInfo
   */
  constructor(data) {
    const { tocReportingMark, votes, votingHistory } = data

    this.tocReportingMark = tocReportingMark
    this.votes = typeof votes === 'number' ? votes : null
    this.votingHistory = votingHistory ? votingHistory : null
  }
}
