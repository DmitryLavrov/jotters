import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import API from '../api'
import Layout from '../components/common/layout'
import NotePage from '../components/common/notePage'
import NotesSidebar from '../components/Pages/notePage/notesSidebar'
import Confirmation from '../components/common/modal/confirmation'

const NotesLayout = () => {
  const {t} = useTranslation()
  const [jotter, setJotter] = useState()
  const [notes, setNotes] = useState()
  const [selectedNote, setSelectedNote] = useState()
  const [isVisibleConfirmation, setIsVisibleConfirmation] = useState(false)

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
        if (!noteId && (data.length > 0) && isWrongSelectedNote(data)) {
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

  const onDeleteJotter = () => {
    setIsVisibleConfirmation(true)
  }

  const handleDeleteJotter = () => {
    API.jotters
       .deleteJotter(jotter._id, 'u01')
       .then(() => history.replace('/jotters'))
    setIsVisibleConfirmation(false)
  }

  const handleCreateNewNote = () => {
    API.notes
       .addNewNote(jotterId)
       .then((data) => {
         fetchNotes()
         history.push(`/jotters/${data.jotterId}/${data._id}`)
       })
  }

  return (
    <>
      <Layout title={jotter ? jotter.title : '...'}>
        <NotesSidebar notes={notes}
                      onDeleteNote={onDeleteNote}
                      onDeleteJotter={onDeleteJotter}
                      onCreateNewNote={handleCreateNewNote}/>
        {(notes && notes.length === 0)
          ?
          <p className="w-100 text-center my-5">
            {t('CREATE_NEW_NOTE')}
          </p>

          :
          <NotePage note={selectedNote}
                    type="PRIVATE"
                    onUpdate={onUpdate}/>
        }
      </Layout>

      {jotter && isVisibleConfirmation &&
      <Confirmation header={t('DELETE')}
                    context={`${t('DELETE_JOTTER')} ${jotter.title}`}
                    onConfirm={handleDeleteJotter}
                    onCancel={() => setIsVisibleConfirmation(false)}/>
      }
    </>
  )
}

export default NotesLayout
