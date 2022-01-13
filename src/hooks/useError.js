import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useError = () => {
  const [error, setError] = useState()

  useEffect(() => {
    if (error) {
      toast.error(error)
      setError(null)
    }
  }, [error])

  const handleError = (err) => {
    if (err.response?.data) {
      err.message = 'Status ' + err.response.data.status + '. ' + err.response.data.message
    }
    setError(err.message)
  }

  return {handleError}
}

export default useError
