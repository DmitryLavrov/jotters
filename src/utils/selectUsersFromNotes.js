export default function selectUsersFromNotes(notes) {
  const usernameList = notes.map(note => ({
    _id: note.userId,
    name: note.username,
    selected: true
  }))

  return usernameList
  .filter((item, index, self) => (
    index === self.findIndex(i => i._id === item._id)
  ))
  // .reduce((acc, i) => {
  //   return {...acc, [i._id]: {name: i.name, selected:true} }
  // }, {})
}
