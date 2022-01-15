import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Layout from './common/layout'
import NotePage from '../pages/common/notePage'
import PublicNotesSidebar from '../pages/publicNotePage/publicNoteSidebar'
import useNotes from '../../hooks/useNotes'

const PublicNoteLayout = () => {
  const [note, setNote] = useState()
  const {getNote} = useNotes()
  const {noteId} = useParams()

  useEffect(() => {
    getNote(noteId).then((data) => setNote(data))
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
