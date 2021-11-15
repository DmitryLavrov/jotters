import httpService from './http.service'
const infoEndpoint = 'info/'

const infoService = {
  get: async (lng) => {
    const {data} = await httpService.get(infoEndpoint + lng, {withCredentials: true})
    return data
  },

  update: async (lng, content) => {
    const {data} = await httpService.patch(infoEndpoint + lng, {content}, {withCredentials: true})
    return data
  }
}

export default infoService
