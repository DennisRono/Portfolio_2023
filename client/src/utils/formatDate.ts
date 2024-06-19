export function formatDate(dateString: string) {
  let date = new Date(dateString)
  function addOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return day + 'th'
    switch (day % 10) {
      case 1:
        return day + 'st'
      case 2:
        return day + 'nd'
      case 3:
        return day + 'rd'
      default:
        return day + 'th'
    }
  }
  let options: any = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  let formatter = new Intl.DateTimeFormat('en-US', options)
  let formattedDate = formatter.format(date)
  let day = date.getDate()
  let ordinalDay = addOrdinalSuffix(day)
  formattedDate = formattedDate.replace(/\d+/, ordinalDay)
  return formattedDate
}
