/**
 * Holds info about a tweet. Used within `SinglePoll`.
 *
 * @export
 * @class TwitterInfo
 */
export default class TwitterInfo implements ITwitterInfo {
  /**
   * ID of the poll's tweet
   */
  tweetId: string

  /**
   * When the poll opened for votes (Unix UTC timestamp).
   */
  startTime: number

  /**
   * When the poll closed for new votes (Unix UTC timestamp).
   */
  endTime: number

  /**
   * Overall length of the poll in minutes.
   */
  durationMinutes: number

  /**
   * Creates an instance of TwitterInfo.
   */
  constructor({ tweetId, startTime, endTime, durationMinutes }: IConstructorArgs) {
    this.tweetId = tweetId
    this.startTime = typeof startTime === 'number' ? startTime : new Date(startTime).getTime()
    this.endTime = typeof endTime === 'number' ? endTime : new Date(endTime).getTime()
    this.durationMinutes = durationMinutes
  }
}

interface IConstructorArgs {
  /**
   * ID of the poll's tweet
   */
  tweetId: string
  /**
   * When the poll began accepting votes
   */
  startTime: number
  /**
   * When the poll stopped/will stop accepting votes
   */
  endTime: number
  /**
   * Poll duration in minutes
   */
  durationMinutes: number
}
