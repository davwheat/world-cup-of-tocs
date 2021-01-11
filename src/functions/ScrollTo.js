function ScrollTo(top) {
  window.scroll({
    top: top,
    behavior: 'smooth',
  })
}

ScrollTo.ID = function ScrollToID(elementId) {
  if (!elementId) return false

  const element = document.getElementById(elementId)
  if (!element) return false

  ScrollTo.Element(element)

  return true
}

ScrollTo.Element = function ScrollToElement(element) {
  if (!element) return false

  const rect = element.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  ScrollTo(rect.top + window.scrollY + rect.height / 2 - viewHeight / 2)

  return true
}

ScrollTo.Ref = function ScrollToRef(ref) {
  const element = ref.current
  if (!element) return false

  ScrollTo.Element(element)

  return true
}

export default ScrollTo
