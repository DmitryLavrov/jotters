import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import jotterService from '../services/jotter.service'
import noteService from '../services/noteService'
import sortArrayBy from '../utils/sortArrayBy'

const useNotes = (notes, setNotes, setSelectedNote) => {
  const [error, setError] = useState()

  useEffect(() => {
    if (error) {
      toast.error(error)
      setError(null)
    }
  }, [error])

  const getJotter = async (id) => {
    try {
      const {data} = await jotterService.get(id)
      return data
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  const fetchNotes = async (jotterId) => {
    try {
      const {data} = await noteService.fetch(jotterId)
      return data
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
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
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  const addNewNote = async (note) => {
    try {
      const {data} = await noteService.add(note)
      setNotes(prev => sortArrayBy('byDate', [...prev, data]))
      return data
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  const deleteNote = async (note) => {
    try {
      await noteService.delete(note._id)
    } catch (err) {
      setError(err.response?.data?.message ? err.response.data.message : err.message)
    }
  }

  return {getJotter, fetchNotes, getNote, updateNote, addNewNote, deleteNote}
}

export default useNotes
