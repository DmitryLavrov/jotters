import React, { useEffect, useState } from 'react'
import InfoSidebar from '../pages/sidebar/infoSidebar'
import Layout from './common/layout'
import Note from '../pages/main/common/note'
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
      <Note note={note} onUpdate={handleUpdateInfo} type="INFO"/>
    </Layout>
  )
}

export default InfoLayout
