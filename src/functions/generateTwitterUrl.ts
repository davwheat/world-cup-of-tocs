/**
 * Generate URL to a tweet based on a tweet ID and username
 */
export default function generateTwitterUrl(id: string, username = 'geofftech'): string {
  if (!username || !id) return null

  return `https://twitter.com/${username}/status/${id}`
}
