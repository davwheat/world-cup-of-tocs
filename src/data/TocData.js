/**
 * Defines the main color used for TOC branding, defined by their reporting mark.
 */
const TocColors = Object.freeze({
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
})

/**
 * Defines a list of TOC names mapped to their reporting marks.
 */
const TocCodeToNameMap = Object.freeze({
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
  // Unofficial
  ie: 'Irish Rail',
  nt: 'Northern Trains',
  // Unofficial
  ni: 'Translink',
  sn: 'Southern',
  se: 'Southeastern',
  sw: 'South Western Railway',
  ht: 'Hull Trains',
  gx: 'Gatwick Expressssss',
  lm: 'West Midlands Railway',
  xr: 'TfL Rail',
  sx: 'Stansted Express',
})

/**
 * Get a TOC's name from their two letter reporting mark.
 *
 * @param {string} code
 * @returns {string}
 */
function GetTocName(code) {
  let c = code.toString().toLowerCase()
  return TocCodeToNameMap[c] || 'Unknown'
}

function GetTocColor(code) {
  let c = code.toString().toLowerCase()
  return TocColors[c] || '#000'
}

export { GetTocName, GetTocColor }
