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

const fetchAllByUserId = (userId) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(
      jotters.filter(jotter => jotter.userId === userId)
             .map(jotter => {
                return {
                  ...jotter,
                  updateDate: typeof jotter.updateDate === 'string' ? Date.parse(jotter.updateDate) : jotter.updateDate
                }
             })
    ), 1000)
  })

const getById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(jotters.find(jotter => jotter._id === id)), 500)
  })

const addNewJotter = (newJotter) =>
  new Promise((resolve) => {
    setTimeout(() => {
      jotters.push(newJotter)
      resolve(newJotter)
    }, 500)
  })

const jottersAPI = {
  jotters,
  fetchAllByUserId,
  getById,
  addNewJotter
}

export default jottersAPI

// export default {
//   fetchAll,
//   getById
// }
