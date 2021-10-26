import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'

// import 'bootstrap/dist/css/bootstrap.css'
import './bootstrap-yeti.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'flag-icon-css/css/flag-icon.min.css'
import 'react-quill/dist/quill.snow.css'
import './index.css'

import App from './App'
import { i18nInit } from './utils/i18next'

i18nInit()

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback='loading...'>
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
