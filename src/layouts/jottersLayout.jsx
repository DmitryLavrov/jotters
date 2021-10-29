import React, { useEffect, useState } from 'react'
import JottersSidebar from '../components/Pages/jottersPage/jottersSidebar'
import JottersPage from '../components/Pages/jottersPage/jottersPage'
import API from '../api'
import Layout from '../components/common/layout'

const JottersLayout = () => {
  const [jotters, setJotters] = useState()


  useEffect(() => {
    API.jotters.fetchAllByUserId('u01').then(data => setJotters(data))
  }, [])

  const addNewJotter = (jotter) => {
    // API.jotters.addNewJotter(jotter).then((data) => setJotters(data))
    setJotters([...jotters, jotter])
  }

  const deleteJotter = (id) => {
    // setShowModal(true)
    setJotters(jotters.filter(i => i._id !== id))
  }

  return (
    <Layout>
      <JottersSidebar addNewJotter={addNewJotter}/>
      <JottersPage jotters={jotters}
                   deleteJotter={deleteJotter}/>
    </Layout>
  )
}

export default JottersLayout
