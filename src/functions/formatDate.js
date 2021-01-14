import dayjs from 'dayjs'

export default function FormatDate(dateString) {
  return dayjs(dateString).format('ddd D MMM')
}
