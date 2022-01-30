import React from 'react'
import Routing from './routing/routing'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './hooks/useAuth'

function App() {
  return (
    <>
      <AuthProvider>

        <BrowserRouter>
          <Routing/>
        </BrowserRouter>

      </AuthProvider>
      <ToastContainer/>
    </>
  )
}

export default App
