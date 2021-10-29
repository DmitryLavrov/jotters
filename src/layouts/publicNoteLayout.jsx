import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../api'
import PublicNotePage from '../components/Pages/publicNotePage/publicNotePage'
import PublicNotesSidebar from '../components/Pages/publicNotePage/publicNoteSidebar'
import Layout from '../components/common/layout'

const PublicNoteLayout = () => {
  const [note, setNote] = useState()

  const {noteId} = useParams()

  useEffect(() => {
    API.notes.getById(noteId).then((data) => setNote(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout title={note ? note.title : '...'}>
      <PublicNotesSidebar/>
      <PublicNotePage note={note}/>
    </Layout>
  )
}

export default PublicNoteLayout
