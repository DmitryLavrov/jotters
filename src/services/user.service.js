import httpService from './http.service'
import localStorageService from './localStorage.service'
const userEndpoint = 'users/'

const userService = {
  fetch: async () => {
    const {data} = await httpService.get(userEndpoint,
      {withCredentials: true})
    return data
  },

  get: async (id) => {
    const {data} = await httpService.get(userEndpoint + id,
      {withCredentials: true})
    return data
  },

  getCurrentUser: async () => {
    const {data} = await httpService.get(userEndpoint + localStorageService.getCurrentUserId())
    return data
  }
}

export default userService
