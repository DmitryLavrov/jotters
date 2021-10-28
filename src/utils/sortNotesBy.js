export default function sortNotesBy(sort, notes) {
  if (!notes) return

  const copyNotes = [...notes]

  if (sort === 'byDate') {
    return copyNotes.sort((a, b) => (b.updateDate - a.updateDate))
  }

  if (sort === 'byName') {
    return copyNotes.sort((a, b) => ((a.title > b.title) ? 1 : -1))
  }
}
