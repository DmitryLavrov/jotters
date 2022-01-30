const JWT_TOKEN = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USER_ID = 'user-id'

export function setToken(token, userId) {
  localStorage.setItem(JWT_TOKEN, token)
  localStorage.setItem(USER_ID, userId)
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

export function getCurrentUserId() {
  return localStorage.getItem(USER_ID)
}

export function removeAuthData() {
  localStorage.removeItem(JWT_TOKEN)
  localStorage.removeItem(USER_ID)
  localStorage.removeItem(REFRESH_KEY)
  localStorage.removeItem(EXPIRES_KEY)
}

const localStorageService = {
  setToken,
  getToken,
  getRefreshToken,
  getExpiresDate,
  getCurrentUserId,
  removeAuthData
}

export default localStorageService
