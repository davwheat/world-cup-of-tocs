import dayjs from 'dayjs'

const FormatDate = (unixTimestamp: number): string => {
  // 0 means API is possibly broken and has defaulted to time 0, whereas null is explicitly used by us to indicate upcoming matches.
  if (unixTimestamp === 0) {
    return 'Date unknown'
  }
  if (unixTimestamp === null) {
    return 'Date TBC'
  }

  return dayjs(unixTimestamp).utc().format('ddd D MMM')
}

FormatDate.HoursMins = (unixTimestamp: number): string => {
  if (unixTimestamp === 0) {
    return 'Date unknown'
  }
  if (unixTimestamp === null) {
    return 'Date TBC'
  }

  return dayjs(unixTimestamp).utc().format('H:mm')
}

FormatDate.HoursMinsLong = (unixTimestamp: number): string => {
  if (unixTimestamp === 0) {
    return 'Date unknown'
  }
  if (unixTimestamp === null) {
    return 'Date TBC'
  }

  /* return dayjs(unixTimestamp).utc().format('H[h] mm[m]') */

  const inHours = unixTimestamp / 1000 / 60 / 60

  // From https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript
  // MAY NOT WORK FOR NEGATIVES!
  // No idea how to use dayjs, and using dates is problematic as it means the hours number loops back past 24hrs

  // eslint-disable-next-line no-bitwise
  return `${Math.floor(inHours)}hr ${Math.floor((inHours - Math.floor(inHours)) * 60)}m`
}

export default FormatDate
