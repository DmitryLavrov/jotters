const jotters = [
  {
    _id: 'j01',
    userId: 'u01',
    title: 'Мой первый блокнот',
    updateDate: '2021-09-21',
    color: '#AAAAAA'
  },
  {
    _id: 'j02',
    userId: 'u01',
    title: 'Мой следующий блокнот',
    updateDate: '2021-09-23',
    color: '#77AAAA'
  },
  {
    _id: 'j03',
    userId: 'u01',
    title: 'Мой блокнот 2',
    updateDate: '2021-09-25',
    color: '#AA77AA'
  },
  {
    _id: 'j04',
    userId: 'u02',
    title: 'Мой блокнот 3',
    updateDate: '2021-09-26',
    color: '#AAAA77'
  },
  {
    _id: 'j05',
    userId: 'u02',
    title: 'Мой блокнот 4',
    updateDate: '2021-09-22',
    color: '#7777AA'
  },
  {
    _id: 'j06',
    userId: 'u03',
    title: 'Мой блокнот 5',
    updateDate: '2021-09-21',
    color: '#AA7777'
  }
]

if (!localStorage.getItem('jotters')) {
  localStorage.setItem('jotters', JSON.stringify(jotters))
}

const fetchAllByUserId = (userId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const jotters = JSON.parse(localStorage.getItem('jotters'))
      const jottersOfUser = jotters.filter(jotter => jotter.userId === userId)
                                   .map(jotter => {
                                       return {
                                         ...jotter,
                                         updateDate: typeof jotter.updateDate === 'string'
                                           ? Date.parse(jotter.updateDate)
                                           : jotter.updateDate,
                                         notesNumber: getNotesNumberFromLocalStorage(jotter._id)
                                       }
                                     }
                                   )
      resolve(jottersOfUser)
    }, 1000)
  })

const getNotesNumberFromLocalStorage = (jotterId) => {
  if (!localStorage.getItem('notes')) {
    return 0
  }
  return JSON.parse(localStorage.getItem('notes')).filter(note => note.jotterId === jotterId).length
}

const fetchPublicByUserId = (userId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const jotters = JSON.parse(localStorage.getItem('jotters'))
      const jottersOfUser = jotters.filter(jotter => ((jotter.userId === userId) && hasPublicNotes(jotter._id)))
                                   .map(jotter => {
                                       return {
                                         ...jotter,
                                         updateDate: typeof jotter.updateDate === 'string'
                                           ? Date.parse(jotter.updateDate)
                                           : jotter.updateDate,
                                         notesNumber: getNotesNumberFromLocalStorage(jotter._id)
                                       }
                                     }
                                   )
      resolve(jottersOfUser)
    }, 1000)
  })

const hasPublicNotes = (jotterId) => {
  if (!localStorage.getItem('notes')) {
    return false
  }
  return JSON.parse(localStorage.getItem('notes'))
                     .filter(note =>
                       ((note.jotterId === jotterId)
                       && (note.private === false))).length > 0
}

const getById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const jotter = JSON.parse(localStorage.getItem('jotters')).find(jotter => jotter._id === id)
      if (jotter) {
        jotter.notesNumber = getNotesNumberFromLocalStorage(jotter._id)
      }
      resolve(jotter)
    }, 500)
  })

const addNewJotter = (userId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const jotters = JSON.parse(localStorage.getItem('jotters'))
      const newJotter = {
        _id: 'j' + Math.random().toString().slice(-6),
        userId: userId,
        title: 'New Jotter',
        updateDate: Date.now(),
        color: '#777777',
        notesNumber: 0
      }
      jotters.push(newJotter)
      localStorage.setItem('jotters', JSON.stringify(jotters))
      resolve(jotters.filter(jotter => jotter.userId === userId)
                     .map(jotter => ({
                       ...jotter,
                       notesNumber: getNotesNumberFromLocalStorage(jotter.id)
                     })))
    }, 500)
  })

const deleteJotter = (id, userId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const oldJotters = JSON.parse(localStorage.getItem('jotters'))
      const jotters = oldJotters.filter(jotter => jotter._id !== id)
      localStorage.setItem('jotters', JSON.stringify(jotters))
      resolve(jotters.filter(jotter => jotter.userId === userId)
                     .map(jotter => ({
                       ...jotter,
                       notesNumber: getNotesNumberFromLocalStorage(jotter.id)
                     })))
    }, 500)
  })

const jottersAPI = {
  jotters,
  fetchAllByUserId,
  fetchPublicByUserId,
  getById,
  addNewJotter,
  deleteJotter
}

export default jottersAPI
