const comments = [
  {
    _id: 'c01',
    noteId: 'n01',
    commentId: null,
    text: 'Серьезный комментарий к первой заметке',
    date: '22.09.2021'
  },
  {
    _id: 'c02',
    noteId: 'n01',
    commentId: null,
    text: 'Другой комментарий к первой заметке',
    date: '23.09.2021'
  },
  {
    _id: 'c03',
    noteId: 'n01',
    commentId: 'n01',
    text: 'Замечания к серьезному комментарию к первой заметке',
    date: '22.09.2021'
  }
]

const fetchAllByNoteId = (noteId) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(comments.filter(comment => comment.noteId === noteId)), 1000)
  })

const getById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(comments.find(comment => comment._id === id)), 1000)
  })

const addNewNote = (newNote) =>
  new Promise((resolve) => {
    setTimeout(() => {
      comments.push(newNote)
      resolve(newNote)
    }, 1000)
  })

const commentsAPI = {
  fetchAllByNoteId,
  getById,
  addNewNote
}

export default commentsAPI
