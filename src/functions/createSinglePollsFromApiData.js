/**
 * @typedef {Object} jsonData
 *
 * @property {Number} apiVersion
 * @property {Object[]} knockout
 * @property {Object[]} groupStages
 * @property {Object[]} quarterFinal
 * @property {Object[]} semiFinal
 * @property {Object[]} runnerUp
 * @property {Object[]} final
 */

import SinglePoll from '../models/SinglePoll'
import TwitterInfo from '../models/TwitterInfo'
import VotesInfo from '../models/VotesInfo'

/**
 * @param {jsonData} jsonData
 *
 * @returns {{ knockout: { number: SinglePoll }, groupStages: { number: SinglePoll }, quarterFinal: { number: SinglePoll }, semiFinal: { number: SinglePoll }, runnerUp: SinglePoll, final: SinglePoll }}
 **/
export default function createSinglePollsFromApiData(jsonData) {
  let newData = {
    knockout: {},
    groupStages: {},
    quarterFinal: {},
    semiFinal: {},
    runnerUp: null,
    final: null,
  }

  let { apiVersion, ...realJsonData } = jsonData

  const createAllSinglePolls = stage => key => {
    const thisJsonItem = realJsonData[stage][key]

    let poll = new SinglePoll({
      scheduledStartDay: thisJsonItem.scheduledStartDay,
      votingStatus: thisJsonItem.votingStatus,
      votesInfo: [
        new VotesInfo({
          tocReportingMark: thisJsonItem.votesInfo[0] ? thisJsonItem.votesInfo[0].tocReportingMark : '??',
          votes: thisJsonItem.votesInfo[0] ? thisJsonItem.votesInfo[0].votes : null,
          votingHistory: thisJsonItem.votesInfo[0] ? thisJsonItem.votesInfo[0].votingHistory : null,
        }),
        new VotesInfo({
          tocReportingMark: thisJsonItem.votesInfo[1] ? thisJsonItem.votesInfo[1].tocReportingMark : '??',
          votes: thisJsonItem.votesInfo[1] ? thisJsonItem.votesInfo[1].votes : null,
          votingHistory: thisJsonItem.votesInfo[1] ? thisJsonItem.votesInfo[1].votingHistory : null,
        }),
      ],
      twitterInfo: thisJsonItem.twitterInfo
        ? new TwitterInfo({
            tweetId: thisJsonItem.twitterInfo.tweetId,
            startTime: thisJsonItem.twitterInfo.startTime,
            endTime: thisJsonItem.twitterInfo.endTime,
            durationMinutes: thisJsonItem.twitterInfo.durationMinutes,
          })
        : null,
    })

    if (['final', 'runnerUp'].includes(stage)) {
      newData[stage] = poll
    } else {
      newData[stage][key] = poll
    }
  }

  Object.keys(jsonData).forEach(round => {
    Object.keys(jsonData[round]).forEach(createAllSinglePolls(round))
  })

  return newData
}
