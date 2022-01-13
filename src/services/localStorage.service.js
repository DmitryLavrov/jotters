const JWT_TOKEN = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'

export function setToken(token) {
  localStorage.setItem(JWT_TOKEN, token)
}

export function getToken() {
  return localStorage.getItem(JWT_TOKEN)
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY)
}

export function getExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY)
}

const localStorageService = {
  setToken,
  getToken,
  getRefreshToken,
  getExpiresDate
}

export default localStorageService
