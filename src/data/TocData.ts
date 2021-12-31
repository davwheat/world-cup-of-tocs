/**
 * Defines the main color used for TOC branding, defined by their reporting mark.
 */
const TocColors: Record<TOCCode, `#${string}`> = {
  vt: '#004354',
  em: '#4c2f48',
  me: '#f1bc1e',
  aw: '#e20000',
  ln: '#014133',
  cc: '#b7007c',
  cs: '#1d2e35',
  il: '#1e90ff',
  gc: '#1d1d1b',
  sr: '#1c4074',
  es: '#ffd700',
  cr: '#00bfff',
  xc: '#660f21',
  tl: '#e9438d',
  gn: '#0099ff',
  tp: '#010385',
  hx: '#523e63',
  gw: '#0a493e',
  lo: '#ff7518',
  le: '#d70428',
  gr: '#ce0e2d',
  ie: '#43a93b',
  nt: '#223262',
  ni: '#00d899',
  sn: '#8cc63e',
  se: '#00afe8',
  sw: '#0192cc',
  ht: '#de005c',
  gx: '#eb1e2d',
  lm: '#ff8200',
  xr: '#0019a8',
  sx: '#6b717a',

  // Tube lines
  ba: '#B36305',
  no: '#000000',
  tf: '#0019A8',
  ju: '#42474b',
  ce: '#dc241f',
  di: '#007D32',
  ci: '#FFD329',
  hc: '#F4A9BE',
  vi: '#0098d8',
  mt: '#9b0058',
  tr: '#00bd19',
  ov: '#ef7b10',
  dl: '#00afad',
  pi: '#0019a8',
  wc: '#95CDBA',
  ca: '#E21836',
  '??': '#666',
} as const

/**
 * Defines a list of TOC names mapped to their reporting marks.
 *
 * This is the single source of truth for all TOCs, so do not type it using `TOCCode` and `TOCName`. Doing so means that we lose type validation.
 */
const TocCodeToNameMap = {
  vt: 'Avanti West Coast',
  em: 'East Midlands Railway',
  me: 'Merseyrail',
  aw: 'Transport for Wales',
  ln: 'London Northwestern',
  cc: 'c2c',
  cs: 'Caledonian Sleeper',
  il: 'Island Line',
  gc: 'Grand Central',
  sr: 'ScotRail',
  es: 'Eurostar',
  cr: 'Chiltern Railways',
  xc: 'CrossCountry',
  tl: 'Thameslink',
  gn: 'Great Northern',
  tp: 'TransPennine Express',
  hx: 'Heathrow Express',
  gw: 'GWR',
  lo: 'London Overground',
  le: 'Greater Anglia',
  gr: 'LNER',
  nt: 'Northern Trains',
  sn: 'Southern',
  se: 'Southeastern',
  sw: 'South Western Railway',
  ht: 'Hull Trains',
  gx: 'Gatwick Expressssss',
  lm: 'West Midlands Railway',
  xr: 'TfL Rail',
  sx: 'Stansted Express',
  // Unofficial below
  ni: 'Translink',
  ie: 'Irish Rail',

  // Tube lines
  ju: 'Jubilee',
  tr: 'Trams',
  ba: 'Bakerloo',
  dl: 'DLR',
  ci: 'Circle',
  hc: 'Hammersmith & City',
  wc: 'Waterloo & City',
  pi: 'Piccadilly',
  mt: 'Metropolitan',
  no: 'Northern',
  ce: 'Central',
  vi: 'Victoria',
  di: 'District',
  ov: 'Overground',
  tf: 'TfL Rail',
  ca: 'Cable Car',
  // Used if unknown
  '??': 'Unknown',
} as const

/**
 * A valid TOC reporting code
 *
 * @example "sn" // Southern
 * @example "tl" // Thameslink
 */
export type TOCCode = keyof typeof TocCodeToNameMap

/**
 * A valid TOC name
 *
 * @example "Southern"
 * @example "Thameslink"
 */
export type TOCName = typeof TocCodeToNameMap[TOCCode]

/**
 * A valid TOC main branding colour, in hex format
 *
 * @example "#8cc63e" // Southern
 */
export type TOCColors = typeof TocColors[TOCCode]

/**
 * Get a TOC's name from their two letter reporting mark (case insensitive).
 *
 * Returns "Unknown" if supplied an invalid mark.
 *
 * @example <caption>Example correct usage</caption>
 * // returns "Southern"
 * GetTocName("sn")
 * @example <caption>Example using case insensitivity</caption>
 * // returns "Thameslink"
 * GetTocName("tL")
 * @example <caption>Example using invalid argument</caption>
 * // returns "Unknown"
 * GetTocName("invalid")
 */
function GetTocName(code: TOCCode): TOCName {
  const c = code.toString().toLowerCase()
  return TocCodeToNameMap[c] || TocCodeToNameMap['??']
}

/**
 * Get a TOC's main branding color from their corresponding two letter reporting mark (case insensitive).
 *
 * Returns "#000" if supplied an invalid mark.
 *
 * @example <caption>Example correct usage</caption>
 * // returns "#8cc63e"
 * GetTocColor("sn")
 * @example <caption>Example using case insensitivity</caption>
 * // returns "#e9438d"
 * GetTocColor("tL")
 * @example <caption>Example using invalid argument</caption>
 * // returns "#000"
 * GetTocColor("invalid")
 */
function GetTocColor(code: TOCCode): TOCColors {
  const c = code.toString().toLowerCase()
  return TocColors[c] || '#000'
}

export { GetTocName, GetTocColor }
