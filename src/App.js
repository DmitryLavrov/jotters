import React, {Suspense} from 'react'

import {i18nInit} from './utils/i18next'
import Spinner from './components/common/spinner'
import Routing from './routing/routing'

i18nInit()

function App() {
  return (
    <Suspense fallback={Spinner}>
      <Routing/>
    </Suspense>
  )
}

export default App
