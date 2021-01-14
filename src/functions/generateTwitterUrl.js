/**
 *
 * @param {string} id Tweet ID
 * @param {string} [username="geofftech"] Twitter username, defaulting to Geoff
 */
export default function generateTwitterUrl(id, username = 'geofftech') {
  if (!username || !id) return null

  return `https://twitter.com/${username}/status/${id}`
}
