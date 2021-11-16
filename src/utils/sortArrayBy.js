export default function sortArrayBy(sort, arr) {
  if (!Array.isArray(arr)) return

  const copyArr = [...arr]

  if (sort === 'byDate') {
    return copyArr.sort((a, b) => ( new Date(b.updatedAt) - new Date(a.updatedAt)))
  }

  if (sort === 'byName') {
    return copyArr.sort((a, b) => ((a.title > b.title) ? 1 : -1))
  }
}
