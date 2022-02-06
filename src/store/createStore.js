import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jotters from './jottersSlice'

const rootReducer = combineReducers({
  jotters
})

function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export default createStore
