import React, {useEffect, useState} from 'react'
import Navbar from '../components/common/navbar'
import NotesSidebar from '../components/notesSidebar'
import NotePage from '../components/notePage'
import {useParams} from 'react-router-dom'
import API from '../api'
import {useTranslation} from 'react-i18next'

const NotesLayout = () => {
  const {t} = useTranslation()
  const [jotter, setJotter] = useState()
  const [selectedNote, setSelectedNote] = useState()

  const {jotterId, noteId} = useParams()

  useEffect(() => {
    API.jotters.getById(jotterId).then((data) => setJotter(data))
  }, [])

  useEffect(() => {
    selectNote(noteId)
  }, [noteId])

  const selectNote = (id) => {
    if (jotter && jotter.notes) {
      setSelectedNote(jotter.notes.find(note => note._id === id))
    }
  }

  const sidebar = (isVisible) => (
    <NotesSidebar jotter={jotter} selectedNote={selectedNote}
                  isMobile={true} isVisible={isVisible}/>)

  return (
    <div className="container">
      <Navbar sidebar={sidebar} title={jotter ? jotter.title : '...'}/>

      <div className="container-fluid bg-light">
        <div className="row">
          <div className="d-none d-lg-block col-lg-4 col-xl-3 pt-2 pb-2 bg-light">
            <NotesSidebar jotter={jotter} selectedNote={selectedNote}/>
          </div>

          <div className="col-md-12 col-lg-8 col-xl-9 pt-2 pb-2 bg-light">
            {selectedNote
              ? <NotePage note={selectedNote}/>
              : <h1 className="text-center mt-3">{t('SELECT_NOTE')}</h1>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotesLayout
