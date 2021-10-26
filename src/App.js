import React from 'react'
import Routing from './routing/routing'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  )
}

export default App
