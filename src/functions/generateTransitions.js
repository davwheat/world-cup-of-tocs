const Durations = Object.freeze({
  long: 250,
  medium: 200,
  short: 125,
})

const DefaultDuration = Durations['medium']
const DefaultEasing = 'ease-in-out'

/**
 * Generates a transition object to be used for CSS-in-JS.
 *
 * Implement with a `...` spread operator on the function.
 *
 * @example { "myCoolClass": { ...generateTransition("color", "medium", "ease-out") } }
 *
 * @export
 * @param {string|string[]} property property/array of properties to be transitioned
 * @param {"long"|"medium"|"short"|number|Array.<"long"|"medium"|"short"|number>} [duration=medium] transition duration (if number, use ms)
 * @param {string|string[]} [easing=ease-in-out]
 * @returns {{ transition: string }}
 */
export default function generateTransitions(property, duration, easing) {
  const propsIsArray = Array.isArray(property),
    durationIsArray = Array.isArray(duration),
    easingIsArray = Array.isArray(easing)

  if (propsIsArray) {
    // we have multiple transitions to generate
    let endTransition = { transition: '' }

    property.forEach((prop, i) => {
      let _easing = easing || DefaultEasing,
        _duration

      /*
        if we have multiple easing/duration values, use, in desc. order:
      
        1. value at same index as this property
        2. last value
        3. default value
      */

      if (durationIsArray) {
        // use manual ms input, failing that use string-based values as explained above
        _duration = typeof duration[i] === 'number' ? duration[i] : Durations[duration[i]] || Durations[easing[easing.length - 1]] || DefaultDuration
      } else {
        _duration = typeof duration === 'number' ? duration : Durations[duration] || DefaultDuration
      }

      if (easingIsArray) {
        _easing = easing[i] || easing[easing.length - 1] || DefaultEasing
      }

      let thisTrans = createTransitionValue(prop, _duration, _easing)

      // append this transition's string value, with comma if there has been values before it
      endTransition.transition = endTransition.transition + (endTransition.transition === '' ? thisTrans : `, ${thisTrans}`)
    })

    return endTransition
  } else {
    // only one value to transition

    let _easing = easing || DefaultEasing,
      _duration

    /*
      if we have multiple easing/duration values, use, in desc. order:
    
      1. value at same index 0
      3. default value
    */

    if (durationIsArray) {
      // use manual ms input, failing that use string-based values as explained above
      _duration = typeof duration[0] === 'number' ? duration[0] : Durations[duration[0]] || DefaultDuration
    } else {
      _duration = typeof duration === 'number' ? duration : Durations[duration] || DefaultDuration
    }

    if (easingIsArray) {
      _easing = easing[0] || DefaultEasing
    }

    return {
      transition: createTransitionValue(property, _duration, _easing),
    }
  }
}

function createTransitionValue(property, durationMs, easing) {
  if (durationMs < 5) console.warn('`createTransitionValue` called with duration < 5ms. Are you sure this was passed in milliseconds?')

  return `${property} ${durationMs}ms ${easing}`
}
