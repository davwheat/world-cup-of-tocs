import { Breakpoints } from '../data'

export default function isSmallViewport() {
  if (typeof window === 'undefined') return false

  // See for more info: https://stackoverflow.com/a/52855084/11091039
  // Supported in every browser, except IE (so basically anything that deserves to use the internet)
  return window.matchMedia(Breakpoints.upTo.medium).matches
}
