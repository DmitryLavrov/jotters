import { createSlice } from '@reduxjs/toolkit'

import noteService from '../services/noteService'
import errorService from '../services/errorService'
import {sortArrayBy} from '../utils/helpers'

const initialState = {
  entities: null,
  isLoading: true
}

const slice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    requested(state) {
      state.isLoading = true
    },
    received(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    requestFailed(state) {
      state.isLoading = false
    }
  }
})

const {requested, received, requestFailed} = slice.actions

export const loadNotes = (jotterId) => async (dispatch) => {
  dispatch(requested())
  try {
    const {data} = await noteService.fetch(jotterId)
    dispatch(received(data))
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const updateNote = (note) => async (dispatch, state) => {
  dispatch(requested())
  try {
    const {data} = await noteService.update(note._id, note)
    dispatch(received(state().notes.entities.map(n => n._id === data._id ? data : n)))
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const addNewNote = (note) => async (dispatch, state) => {
  dispatch(requested())
  try {
    const {data} = await noteService.add(note)
    dispatch(received([...state().notes.entities, data]))
    return data
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const deleteNote = (noteId) => async (dispatch, state) => {
  dispatch(requested())
  try {
    await noteService.delete(noteId)
    dispatch(received(state().notes.entities.filter(n => n._id !== noteId)))
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const getNoteById = (noteId) => (state) => {
  return state.notes.entities ? state.notes.entities.find(n => n._id === noteId) : null
}

export const getNotesList = () => (state) => {
  return sortArrayBy('byDate', state.notes.entities)
}

export const getNotesLoadingStatus = () => (state) => {
  return state.notes.isLoading
}

export default slice.reducer
