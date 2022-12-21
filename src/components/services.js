export function secondsToTime(n) {
  const given_seconds = n
  const hours = Math.floor(given_seconds / 3600)
  const minutes = Math.floor((given_seconds - hours * 3600) / 60)
  const seconds = given_seconds - hours * 3600 - minutes * 60

  const timeString =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')
  return timeString
}

