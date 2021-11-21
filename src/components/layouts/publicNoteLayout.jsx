import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import API from '../../api'
import Layout from '../common/layout'
import NotePage from '../common/notePage'
import PublicNotesSidebar from '../pages/publicNotePage/publicNoteSidebar'

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
