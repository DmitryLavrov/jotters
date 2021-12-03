import jotterService from '../services/jotter.service'
import useError from './useError'

const useJotters = (jotters, setJotters) => {
  const {handleError} = useError()

  const fetchJotters = async (userId) => {
    try {
      const {data} = await jotterService.fetch(userId)
      return data
    } catch (err) {
      handleError(err)
    }
  }

  const updateJotter = async (jotter) => {
    try {
      const {data} = await jotterService.update(jotter._id, jotter)
      setJotters(prev => prev.map(j => j._id === jotter._id ? data : j))
    } catch (err) {
      handleError(err)
    }
  }

  const addNewJotter = async (jotter, userId) => {
    try {
      const {data} = await jotterService.add({...jotter, userId})
      setJotters(prev => [...prev, data])
    } catch (err) {
      handleError(err)
    }
  }

  const deleteJotter = async (jotterId) => {
    try {
      await jotterService.delete(jotterId)
      setJotters(prev => prev.filter(j => (j._id !== jotterId)))
    } catch (err) {
      handleError(err)
    }
  }

  const getJotter = (id) => {
    return jotters.find(j => j._id === id)
  }

  return {fetchJotters, updateJotter, addNewJotter, deleteJotter, getJotter}
}

export default useJotters
