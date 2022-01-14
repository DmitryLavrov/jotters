import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'

import './bootstrap-yeti.css'
import 'react-quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css'
import './sass/main.scss'

import App from './App'

import './utils/i18next'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
