import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import API from '../api'
import Layout from '../components/common/layout'
import NotePage from '../components/common/notePage'
import PublicNotesSidebar from '../components/Pages/publicNotePage/publicNoteSidebar'

const PublicNoteLayout = () => {
  const [note, setNote] = useState()

  const {noteId} = useParams()

  useEffect(() => {
    API.notes.getById(noteId).then((data) => setNote(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout title={note ? note.title : '...'}>
      <PublicNotesSidebar note={note}/>
      <NotePage note={note} type="PUBLIC"/>
    </Layout>
  )
}

export default PublicNoteLayout
