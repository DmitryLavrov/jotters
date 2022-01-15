import React, { useEffect, useState } from 'react'
import InfoSidebar from '../pages/infoPage/infoSidebar'
import Layout from './common/layout'
import NotePage from '../pages/common/notePage'
import { useTranslation } from 'react-i18next'
import useInfo from '../../hooks/useInfo'

const InfoLayout = () => {
  const {i18n} = useTranslation()
  const [note, setNote] = useState()
  const [lng, setLng] = useState()
  const {getInfo, updateInfo} = useInfo()

  useEffect(() => {
    setLng(i18n.language)
  }, [i18n.language])

  useEffect(() => {
    getInfo(lng).then(data => setNote(data))
  }, [lng])

  const handleUpdateInfo = async (info) => {
    await updateInfo(info)
  }

  return (
    <Layout>
      <InfoSidebar/>
      <NotePage note={note} onUpdate={handleUpdateInfo} type="INFO"/>
    </Layout>
  )
}

export default InfoLayout
