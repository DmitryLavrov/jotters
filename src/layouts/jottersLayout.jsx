import React, {useEffect, useState} from 'react'
import Navbar from '../components/common/navbar'
import JottersSidebar from '../components/jottersSidebar'
import JottersPage from '../components/jottersPage'
import API from '../api'

const JottersLayout = () => {
  const [jotters, setJotters] = useState()

  useEffect(() => {
    API.jotters.fetchAll().then(data => setJotters(data))
  }, [])

  const sidebar = (isVisibleMobileSidebar) => <JottersSidebar isMobile={true} isOpen={isVisibleMobileSidebar}/>

  return (
    <div className="container">
      <Navbar sidebar={sidebar}/>

      <div className="container-fluid bg-light">
        <div className="row justify-content-end">
          <div className="col-lg-8 col-xl-9 pt-2 pb-2 bg-light">
            <input type="text" className="form-control" placeholder="Поиск по названию"/>
          </div>
        </div>

        <div className="row">
          <div className="d-none d-lg-block col-lg-4 col-xl-3 pt-2 pb-2 bg-light">
            <JottersSidebar/>
          </div>

          <div className="col-md-12 col-lg-8 col-xl-9 pt-2 pb-2 bg-light">
            <JottersPage jotters={jotters}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JottersLayout
