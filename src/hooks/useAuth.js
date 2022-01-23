import React, { useContext, useState } from 'react'
import authService from '../services/authService'
import useError from './useError'
import localStorageService from '../services/localStorage.service'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({})
  const {handleError} = useError()

  const register = async (user) => {
    try {
      const {data, token} = await authService.register(user)
      localStorageService.setToken(token)
      // =========================
      console.log('currentUser:', data)
      // =========================
      setCurrentUser(data)
    } catch (err) {
      handleError(err)
      const {status, errors} = err.response.data
      if (status === '400') {
        const errorsObject = {
          name: errors?.name?.message ?? '',
          email: errors?.email?.message ?? '',
          password: errors?.password?.message ?? '',
          passwordConfirm: errors?.passwordConfirm?.message ?? ''
        }
        throw errorsObject
      }
    }
  }

  const login = async (user) => {
    try {
      const {data, token} = await authService.login(user)
      localStorageService.setToken(token)
      // =========================
      console.log('currentUser:', data)
      // =========================
      setCurrentUser(data)
    } catch (err) {
      handleError(err)
      const {status, errors} = err.response.data
      if (status === '401') {
        const errorsObject = {
          email: errors?.email?.message ?? '',
          password: errors?.password?.message ?? '',
        }
        throw errorsObject
      }
    }
  }


  return (
    <AuthContext.Provider value={{register, login, currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
