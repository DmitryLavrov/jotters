import React, { useEffect, useState } from 'react'
import InfoSidebar from '../pages/infoPage/infoSidebar'
import Layout from '../common/layout'
import NotePage from '../common/notePage'
import { useTranslation } from 'react-i18next'
import infoService from '../../services/info.service'
import { toast } from 'react-toastify'

const InfoLayout = () => {
  const {i18n} = useTranslation()
  const [note, setNote] = useState()
  const [lng, setLng] = useState()

  useEffect(() => {
    setLng(i18n.language)
  }, [i18n.language])

  useEffect(() => {
    getInfo(lng).then(data => setNote(data))
  }, [lng])

  const getInfo = async lng => {
    try {
      if (['en', 'ru'].includes(lng)) {
        const {data} = await infoService.get(lng)
        return data
      }
    } catch (err) {
      toast.error(err.response?.data?.message ? err.response.data.message : err.message)
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
