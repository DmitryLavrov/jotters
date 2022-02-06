import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import 'react-quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css'
import './sass/main.scss'

import logService from './services/log.service'
import i18nService from './services/i18nextService'
import App from './App'

logService.init()
i18nService.init()

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
