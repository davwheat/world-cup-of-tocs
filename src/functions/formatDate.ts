import dayjs from 'dayjs'

const FormatDate = (unixTimestamp: number) => {
  return dayjs(unixTimestamp).utc().format('ddd D MMM')
}

FormatDate.HoursMins = (unixTimestamp: number) => {
  return dayjs(unixTimestamp).utc().format('H:mm')
}

FormatDate.HoursMinsLong = (unixTimestamp: number) => {
  return dayjs(unixTimestamp).utc().format('H[h] mm[m]')
}

export default FormatDate
