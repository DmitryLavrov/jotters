import httpService from './http.service'
const jotterEndpoint = 'jotters/'

const jotterService = {
  fetch: async (userId) => {
    const {data} = await httpService.get(jotterEndpoint,
      {params: {userId}, withCredentials: true})
    return data
  },

  get: async (id) => {
    const {data} = await httpService.get(jotterEndpoint + id,
      {withCredentials: true})
    return data
  },

  update: async (id, body) => {
    const {data} = await httpService.patch(jotterEndpoint + id,
      body,
      {withCredentials: true})
    return data
  },

  delete: async (id) => {
    await httpService.delete(jotterEndpoint + id,
      {withCredentials: true})
  },

  add: async (body) => {
    const {data} = await httpService.post(jotterEndpoint,
      body,
      {withCredentials: true})
    return data
  }
}

export default jotterService
