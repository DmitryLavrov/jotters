import httpService from './http.service'
const userEndpoint = 'user/'

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
  }
}

export default userService
