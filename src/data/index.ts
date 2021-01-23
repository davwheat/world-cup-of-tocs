const Values = {
  api: {
    // process.env.NODE_ENV !== 'production' ? 'localhost:1234' : 'https://toc-api.davwheat.dev'
    hostname: 'https://toc-api.davwheat.dev',
  },
} as const

const Colors = {
  primary: '#0087dc',
  dark: '#203647',
  offWhite: '#fff',
} as const

const Breakpoints = {
  upTo: {
    large: '(max-width: 767px)',
    medium: '(max-width: 579px)',
  },
  downTo: {
    medium: '(min-width: 768px)',
    small: '(min-width: 580px)',
  },
} as const

const Sizing = {
  pollGame: {
    width: 350,
    height: 65,
    barHeight: 30,
  },
} as const

export { Colors, Breakpoints, Values, Sizing }
