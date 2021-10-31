import React, { useEffect, useState } from 'react'
import InfoSidebar from '../components/Pages/infoPage/infoSidebar'
import Layout from '../components/common/layout'
import NotePage from '../components/common/notePage'
import API from '../api'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const InfoLayout = () => {
  const {i18n} = useTranslation()
  const [note, setNote] = useState()
  const [lng, setLng] = useState()

  useEffect(() => {
    setLng(i18n.language)
  }, [i18n.language])

  useEffect(() => {
      API.info
         .getInfoByLng(i18next.language)
         .then(data => setNote(data))
  }, [lng])

  return (
    <Layout>
      <InfoSidebar/>
      <NotePage note={note} type="INFO"/>
    </Layout>
  )
}

export default InfoLayout
