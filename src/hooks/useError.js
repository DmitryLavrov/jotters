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
    setError(err.response?.data?.message ? err.response.data.message : err.message)
  }

  return {handleError}
}

export default useError
