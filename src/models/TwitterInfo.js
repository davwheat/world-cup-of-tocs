/**
 * Holds info about a tweet. Used within `SinglePoll`.
 *
 * @export
 * @class TwitterInfo
 */
module.exports = class TwitterInfo {
  /**
   * ID of the poll's tweet
   *
   * @type {string}
   *
   * @memberof TwitterInfo
   */
  tweetId

  /**
   * When the poll opened for votes (UTC timestamp).
   *
   * @type {number}
   *
   * @memberof TwitterInfo
   */
  startTime

  /**
   * When the poll closed for new votes (UTC timestamp).
   *
   * @type {number}
   *
   * @memberof TwitterInfo
   */
  endTime

  /**
   * Overall length of the poll in minutes.
   *
   * @type {number}
   *
   * @memberof TwitterInfo
   */
  durationMinutes

  /**
   * Creates an instance of TwitterInfo.
   * @param {object} data
   * @param {string} data.tweetId         ID of the poll's tweet
   * @param {string} data.startTime       When the poll began accepting votes
   * @param {string} data.endTime         When the poll stopped/will stop accepting votes
   * @param {string} data.durationMinutes Poll duration in minutes
   * @memberof TwitterInfo
   */
  constructor(data) {
    const { tweetId, startTime, endTime, durationMinutes } = data

    this.tweetId = tweetId
    this.startTime = typeof startTime === 'number' ? startTime : new Date(startTime).getTime()
    this.endTime = typeof endTime === 'number' ? endTime : new Date(endTime).getTime()
    this.durationMinutes = durationMinutes
  }
}
