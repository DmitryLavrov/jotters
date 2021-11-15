import React, { useEffect, useState } from 'react'
import InfoSidebar from '../components/Pages/infoPage/infoSidebar'
import Layout from '../components/common/layout'
import NotePage from '../components/common/notePage'
import { useTranslation } from 'react-i18next'
import infoService from '../services/info.service'
import { toast } from 'react-toastify'

const InfoLayout = () => {
  const {i18n} = useTranslation()
  const [note, setNote] = useState()
  const [lng, setLng] = useState()

  useEffect(() => {
    setLng(i18n.language)
  }, [i18n.language])

  useEffect(() => {
    getInfo(lng)
  }, [lng])

  const getInfo = async lng => {
    try {
      if (['en', 'ru'].includes(lng)) {
        const info = await infoService.get(lng)
        setNote(info.data)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <Layout>
      <InfoSidebar/>
      <NotePage note={note} type="INFO"/>
    </Layout>
  )
}

export default InfoLayout
