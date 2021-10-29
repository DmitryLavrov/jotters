import React, { useEffect, useState } from 'react'
import NotesSidebar from '../components/Pages/notePage/notesSidebar'
import NotePage from '../components/Pages/notePage/notePage'
import { useParams } from 'react-router-dom'
import API from '../api'
import Layout from '../components/common/layout'

const NotesLayout = () => {
  const [jotter, setJotter] = useState()
  const [selectedNote, setSelectedNote] = useState()

  const {jotterId, noteId} = useParams()

  useEffect(() => {
    API.jotters.getById(jotterId).then((data) => {
      setJotter(data)
    })
    selectNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    selectNote(noteId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId])

  const selectNote = (id) => {
    // if (jotter) {
    API.notes.getById(id).then(data => setSelectedNote(data))
    // setSelectedNote(jotter.notes.find(note => note._id === id))
    // }
  }

  const deleteNote = (id) => {
    // setJotter({...jotter, notes: jotter.notes.filter(i => i._id !== id)})
  }

  // const addNewNote = (id) => {
  //
  // }

  return (
    <Layout title={jotter ? jotter.title : '...'}>
      <NotesSidebar jotter={jotter}
                    selectedNote={selectedNote}
                    deleteNote={deleteNote}/>
      <NotePage note={selectedNote}/>
    </Layout>
  )
}

export default NotesLayout
