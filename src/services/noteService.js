import httpService from './http.service'
import getTitleFromContent from '../utils/getTitleFromContent'
const noteEndpoint = 'notes/'

const noteService = {
  fetch: async (jotterId) => {
    const {data} = await httpService.get(noteEndpoint,
      {params: {jotterId}, withCredentials: true})
    return data
  },

  get: async (id) => {
    const {data} = await httpService.get(noteEndpoint + id,
      {withCredentials: true})
    return data
  },

  update: async (id, body) => {
    const {data} = await httpService.patch(noteEndpoint + id,
      {...body, title: getTitleFromContent(body.content)},
      {withCredentials: true})
    return data
  },

  delete: async (id) => {
    await httpService.delete(noteEndpoint + id,
      {withCredentials: true})
  },

  add: async (body) => {
    const {data} = await httpService.post(noteEndpoint,
      body,
      {withCredentials: true})
    return data
  }
}

export default noteService
