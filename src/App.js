import React from 'react'
import Routing from './routing/routing'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
