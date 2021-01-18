/**
 * Calculates the percentage of votes won to 2 decimal places.
 *
 * **Note:** the percentage is returned after being multiplied by 100.
 * This is so that it can be displayed to the user straight away.
 * See examples for more info.
 *
 * @example
 * // returns 50
 * generateVotePercentage(5, 10)
 *
 * @example
 * // returns 33.33
 * generateVotePercentage(1, 3)
 *
 * @example
 * // returns 0
 * generateVotePercentage(0, 0)
 *
 * @export
 * @param {number} votes Vote count for this option
 * @param {number} totalVotes Total amount of votes for all options
 * @return {number} Percentage of votes
 */
export default function generateVotePercentage(votes: number, totalVotes: number): number {
  if (votes === 0 || totalVotes === 0) return 0

  return Math.round((votes / totalVotes) * 100 * 100) / 100
}
