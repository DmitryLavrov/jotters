export function dateToString(milliseconds) {
  const date = new Date(milliseconds)
  return date.toISOString().slice(0, 10)
}
