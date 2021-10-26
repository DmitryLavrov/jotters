const users = [
  {
    _id: 'u01',
    name: 'John Smith',
    email: 'a@a.a',
    password: '123'
  },
  {
    _id: 'u02',
    name: 'Julia Bumper',
    email: 'b@b.b',
    password: '123'
  },
  {
    _id: 'u03',
    name: 'Ivan Draga',
    email: 'c@c.c',
    password: '123'
  }
]

const fetchAll = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(users), 1000)
  })

const getById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(users.find(user => user._id === id)), 500)
  })

const addNewUser = (newUser) =>
  new Promise((resolve) => {
    setTimeout(() => {
      users.push(newUser)
      resolve(newUser)
    }, 500)
  })

const usersAPI = {
  users,
  fetchAll,
  getById,
  addNewUser
}

export default usersAPI
