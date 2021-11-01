import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import API from '../api'
import Layout from '../components/common/layout'
import NotePage from '../components/common/notePage'
import NotesSidebar from '../components/Pages/notePage/notesSidebar'

const NotesLayout = () => {
  const [jotter, setJotter] = useState()
  const [notes, setNotes] = useState()
  const [selectedNote, setSelectedNote] = useState()

  const {jotterId, noteId} = useParams()
  const history = useHistory()

  useEffect(() => {
      API.jotters.getById(jotterId).then((data) => {
        setJotter(data)
      })
  }, [jotterId])

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jotter])

  useEffect(() => {
    if (noteId) {
      API.notes.getById(noteId).then(data => setSelectedNote(data))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId])

  const fetchNotes = () => {
    if (jotter) {
      API.notes.fetchAllByJotterId(jotter._id).then(data => {
        setNotes(data)
        if ((data.length > 0) && isWrongSelectedNote(data)) {
          history.push(`/jotters/${jotterId}/${data[0]._id}`)
        }
      })
    }
  }

  const isWrongSelectedNote = (notes) => {
    if (!selectedNote) return true
    // noinspection RedundantIfStatementJS
    if (notes.map(note => note._id).includes(selectedNote._id)) return false
    return true
  }

  const onUpdate = () => {
    fetchNotes()
  }

  const onDeleteNote = (id) => {
    // setJotter({...jotter, notes: jotter.notes.filter(i => i._id !== id)})
  }

  // const addNewNote = (id) => {
  //
  // }

  return (
    <Layout title={jotter ? jotter.title : '...'}>
      <NotesSidebar notes={notes}
                    onDeleteNote={onDeleteNote}/>
      {(notes && notes.length === 0)
        ? <p>Создайте новую заметку</p>
        : <NotePage note={selectedNote} type="PRIVATE" onUpdate={onUpdate}/>
      }
    </Layout>
  )
}

export default NotesLayout
