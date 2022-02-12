import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jotters from './jotterSlice'
import notes from './noteSlice'
import info from './infoSlice'

const rootReducer = combineReducers({
  info,
  jotters,
  notes
})

function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export default createStore
