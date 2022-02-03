import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import 'react-quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css'
import './sass/main.scss'

import logService from './services/log.service'
import App from './App'

import './utils/i18next'

logService.init()

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
