import type { TOCCode, TOCColors, TOCName } from '../data/TocData'
import SinglePoll from '../models/SinglePoll'
import type { VoteStates } from './enums'

declare global {
  // We need this to add more properties to `window` so TS doesn't complain
  interface Window {
    cookiehub: {
      /**
       * Opens the CookieHub cookie settings window where users can change their cookie preferences.
       */
      openSettings: () => void
    }
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
    knockout: Record<number, SinglePoll>
    groupStages: Record<number, SinglePoll>
    quarterFinal: Record<number, SinglePoll>
    semiFinal: Record<number, SinglePoll>
    runnerUp: SinglePoll
    final: SinglePoll
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
    tocReportingMark: TOCCode
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

  export interface ITeamData {
    name: TOCName
    code: TOCCode
    mainColor: TOCColors
  }
}
