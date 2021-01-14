const Values = Object.freeze({
  api: {
    hostname: process.env.NODE_ENV !== 'production' ? 'localhost:1234' : 'https://toc-api.davwheat.dev/',
  },
})

const Colors = Object.freeze({
  toryPrimary: '#0087dc',
  dark: '#203647',
  offWhite: '#fff',
})

const Breakpoints = Object.freeze({
  upTo: {
    large: '(max-width: 767px)',
    medium: '(max-width: 579px)',
  },
  downTo: {
    medium: '(min-width: 768px)',
    small: '(min-width: 580px)',
  },
})

const Sizing = Object.freeze({
  pollGame: {
    width: 250,
    height: 65,
    barHeight: 30,
  },
})

export { Colors, Breakpoints, Values, Sizing }
