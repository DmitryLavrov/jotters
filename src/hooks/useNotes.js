import jotterService from '../services/jotter.service'
import noteService from '../services/noteService'
import sortArrayBy from '../utils/sortArrayBy'
import useError from './useError'

const useNotes = (notes, setNotes, setSelectedNote) => {
  const {handleError} = useError()

  const getJotter = async (id) => {
    try {
      const {data} = await jotterService.get(id)
      return data
    } catch (err) {
      handleError(err)
    }
  }

  const fetchNotes = async (jotterId) => {
    try {
      const {data} = await noteService.fetch(jotterId)
      return data
    } catch (err) {
      handleError(err)
    }
  }

  const getNote = async (id) => {
    return notes.find(n => n._id === id)
  }

  const updateNote = async (note) => {
    try {
      const {data} = await noteService.update(note._id, note)
      setNotes(prev => sortArrayBy('byDate', prev.map(n => (n._id === note._id ? data : n))))
      setSelectedNote(note)
    } catch (err) {
      handleError(err)
    }
  }

  const addNewNote = async (note) => {
    try {
      const {data} = await noteService.add(note)
      setNotes(prev => sortArrayBy('byDate', [...prev, data]))
      return data
    } catch (err) {
      handleError(err)
    }
  }

  const deleteNote = async (note) => {
    try {
      await noteService.delete(note._id)
    } catch (err) {
      handleError(err)
    }
  }

  return {getJotter, fetchNotes, getNote, updateNote, addNewNote, deleteNote}
}

export default useNotes
