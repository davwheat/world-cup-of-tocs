import dayjs from 'dayjs'

function FormatDate(unixTimestamp) {
  return dayjs(unixTimestamp).utc().format('ddd D MMM')
}

FormatDate.HoursMins = function FormatDateToHoursMins(unixTimestamp) {
  return dayjs(unixTimestamp).utc().format('H:mm')
}

FormatDate.HoursMins.Long = function FormatDateToHoursMins(unixTimestamp) {
  return dayjs(unixTimestamp).utc().format('H[h] mm[m]')
}

export default FormatDate
