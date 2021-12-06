import React, { useContext, useState } from 'react'
import authService from '../services/authService'
import useError from './useError'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({})
  const {handleError} = useError()

  const signup = async (user) => {
    try {
      // await createUser(user)
      const newUser = await authService.signup(user)
      setCurrentUser(newUser)
    } catch (err) {
      handleError(err)
      const {status, errors} = err.response.data
      if (status === '400') {
        const errorObject = {
          name: errors?.name?.message ?? '',
          email: errors?.email?.message ?? '',
          password: errors?.password?.message ?? '',
          passwordConfirm: errors?.passwordConfirm?.message ?? ''
        }
        // =========================
        console.log('errorObject:', errorObject)
        // =========================
        throw errorObject
      }
    }
  }

  const login = () => {

  }


  return (
    <AuthContext.Provider value={{signup, login, currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
