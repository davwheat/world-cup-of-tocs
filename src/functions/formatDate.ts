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

  return dayjs(unixTimestamp).utc().format('H[h] mm[m]')
}

export default FormatDate
