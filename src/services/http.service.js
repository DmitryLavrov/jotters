import axios from 'axios'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndpoint

axios.interceptors.response.use(res => res,
  err => {
    const expectedError = err.response && err.response.status >= 400 && err.response.status < 500
    if (!expectedError) {
      err.message = 'Unexpected error: ' + err.message
    }
    return Promise.reject(err)
  })

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
}

export default httpService
