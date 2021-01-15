import dayjs from 'dayjs'

export default function FormatDate(unixTimestamp) {
  return dayjs(new Date(unixTimestamp)).utc().format('ddd D MMM')
}
