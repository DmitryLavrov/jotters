import React from 'react'
import InfoPage from '../components/Pages/infoPage/infoPage'
import InfoSidebar from '../components/Pages/infoPage/infoSidebar'
import Layout from '../components/common/layout'

const InfoLayout = () => {
  return (
    <Layout>
      <InfoSidebar/>
      <InfoPage/>
    </Layout>
  )
}

export default InfoLayout
