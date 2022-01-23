import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Layout from './common/layout'
import Note from '../pages/main/common/note'
import PublicNotesSidebar from '../pages/sidebar/publicNoteSidebar'
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
      <Note note={note} type="PUBLIC"/>
    </Layout>
  )
}

export default PublicNoteLayout
