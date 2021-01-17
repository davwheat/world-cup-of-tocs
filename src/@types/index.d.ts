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
    /** Set to the midnight unix epoch of the day of the poll */
    scheduledStartDay: number

    votingStatus: VoteStates

    twitterInfo?: {
      /** Tweet ID (not URL) */
      tweetId: string
      /** Actual UNIX epoch of poll start */
      startTime: number
      /** Actual UNIX epoch of poll end */
      endTime: number
      /** Time duration of poll */
      durationMinutes: number
    }

    /** Actual votes for each. Index 0 is the first option, Index 1 the other, etc */
    votesInfo: [
      {
        /** Two letter ToC report mark, i.e. name */
        tocReportingMark: import('../data/TocData').TOCCode
        votes: number
        /** Votes history */
        votingHistory: {
          /* UNIX epoch number of time when votes taken. Will be subtracted from startTime. */
          timestamp: number
          votes: number
        }
      },
      {
        /** Two letter ToC report mark, i.e. name */
        tocReportingMark: import('../data/TocData').TOCCode
        votes: number
        /** Votes history */
        votingHistory: {
          /* UNIX epoch number of time when votes taken. Will be subtracted from startTime. */
          timestamp: number
          votes: number
        }
      },
    ]
  }
}
