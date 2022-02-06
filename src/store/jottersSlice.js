import { createSlice } from '@reduxjs/toolkit'

import jotterService from '../services/jotter.service'
import errorService from '../services/errorService'

const initialState = {
  entities: null,
  isLoading: true
}

const slice = createSlice({
  name: 'jotters',
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

export const loadJotters = () => async (dispatch) => {
  dispatch(requested())
  try {
    const {data} = await jotterService.fetch()
    dispatch(received(data))
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const updateJotter = (jotter) => async (dispatch, state) => {
  dispatch(requested())
  try {
    const {data} = await jotterService.update(jotter._id, jotter)
    dispatch(received(state().jotters.entities.map(j => j._id === data._id ? data : j)))
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const addNewJotter = (jotter, userId) => async (dispatch, state) => {
  dispatch(requested())
  try {
    const {data} = await jotterService.add({...jotter, userId})
    dispatch(received([...state().jotters.entities, data]))
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const deleteJotter = (jotterId) => async (dispatch, state) => {
  dispatch(requested())
  try {
    await jotterService.delete(jotterId)
    dispatch(received(state().jotters.entities.filter(j => j._id !== jotterId)))
  } catch (err) {
    errorService.handleError(err)
    dispatch(requestFailed())
  }
}

export const getJottersList = () => (state) => {
  return state.jotters.entities
}

// export const getJotterById = (jotterId) => (state) => {
//   return state.jotters.entities ? state.jotters.entities.find(j => j._id === jotterId) : null
// }

export const getJottersLoadingStatus = () => (state) => {
  return state.jotters.isLoading
}

export default slice.reducer
