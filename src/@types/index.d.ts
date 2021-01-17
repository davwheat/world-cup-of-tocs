export {}

declare global {
  export enum VoteStates {
    UPCOMING = 'UPCOMING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
  }

  export interface IAPIResponse {
    apiVersion: string
    knockout: Record<number, ISinglePoll>
    groupStages: Record<number, ISinglePoll>
    quarterFinal: Record<number, ISinglePoll>
    semiFinal: Record<number, ISinglePoll>
    runnerUp: ISinglePoll
    final: ISinglePoll
  }

  export interface IGameData {
    knockout: Record<number, import('../models/SinglePoll').default>
    groupStages: Record<number, import('../models/SinglePoll').default>
    quarterFinal: Record<number, import('../models/SinglePoll').default>
    semiFinal: Record<number, import('../models/SinglePoll').default>
    runnerUp: import('../models/SinglePoll').default
    final: import('../models/SinglePoll').default
  }

  /**
   * Defines how a single poll should look
   */
  export interface ISinglePoll {
    /**
     * Timestamp of midnight UTC on the day of the poll */
    scheduledStartDay: number

    votingStatus: VoteStates

    twitterInfo?: ITwitterInfo

    /**
     * Actual votes for each TOC
     */
    votesInfo: IVotesInfo[]
  }

  export interface ITwitterInfo {
    /**
     * Tweet ID (not URL)
     */
    tweetId: string
    /**
     * Unix timestamp of poll start
     */
    startTime: number
    /**
     * Unix timestamp where poll will or did end
     */
    endTime: number
    /**
     * Duration of poll in minutes
     */
    durationMinutes: number
  }
  export interface IVotesInfo {
    /**
     * Two letter TOC reporting mark
     */
    tocReportingMark: import('../data/TocData').TOCCode
    votes: number
    /**
     * Voting history
     */
    votingHistory: IVotingHistoryEntry[]
  }

  export interface IVotingHistoryEntry {
    /**
     * UNIX timestamp of time when this vote count was active
     */
    timestamp: number
    votes: number
  }
}
