import useError from './useError'
import userService from '../services/user.service'

const useUsers = () => {
  const {handleError} = useError()

  const fetchUsers = async () => {
    try {
      const {data} = await userService.fetch()
      return data
    } catch (err) {
      handleError(err)
    }
  }


  return {fetchUsers}
}

export default useUsers
