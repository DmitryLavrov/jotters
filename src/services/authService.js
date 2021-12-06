import httpService from './http.service'
const userEndpoint = 'users/'

const authService = {
  signup: async (body) => {
    const {data} = await httpService.post(userEndpoint + 'signup',
      body,
      {withCredentials: true})
    return data
  }
}

export default authService
