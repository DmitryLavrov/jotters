import jotterService from '../services/jotter.service'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

const useJotters = (jotters, setJotters) => {
  const [error, setError] = useState()

  useEffect(() => {
    if (error) {
      toast.error(error)
      setError(null)
    }
  }, [error])

  const fetchJotters = async (userId) => {
    try {
      const {data} = await jotterService.fetch(userId)
      return data
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  const updateJotter = async (jotter) => {
    try {
      const {data} = await jotterService.update(jotter._id, jotter)
      setJotters(prev => prev.map(j => j._id === jotter._id ? data : j))
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  const addNewJotter = async (jotter, userId) => {
    try {
      const {data} = await jotterService.add({...jotter, userId})
      setJotters(prev => [...prev, data])
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  const deleteJotter = async (jotterId) => {
    try {
      await jotterService.delete(jotterId)
      setJotters(prev => prev.filter(j => (j._id !== jotterId)))
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  const getJotter = (id) => {
    return jotters.find(j => j._id === id)
  }

  return {fetchJotters, updateJotter, addNewJotter, deleteJotter, getJotter}
}

export default useJotters
