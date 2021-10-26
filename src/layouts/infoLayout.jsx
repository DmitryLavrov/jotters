import React, { useEffect, useState } from 'react'
import InfoPage from '../components/Pages/infoPage/infoPage'
import InfoSidebar from '../components/Pages/infoPage/infoSidebar'
import Layout from '../components/common/layout'
import { useTranslation } from 'react-i18next'

const InfoLayout = () => {
  const {i18n} = useTranslation()
  const [lng, setLng] = useState()

  useEffect(() => {
    setLng(i18n.language)
  }, [i18n.language])

  return <Layout sidebar={<InfoSidebar/>}
                 page={<InfoPage/>}
                 lng={lng}/>
}

export default InfoLayout
