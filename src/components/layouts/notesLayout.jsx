import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from '../common/layout'
import NotePage from '../common/notePage'
import NotesSidebar from '../pages/notePage/notesSidebar'
import Confirmation from '../common/modal/confirmation'
import useNotes from '../../hooks/useNotes'
import sortArrayBy from '../../utils/sortArrayBy'
import settings from '../../assets/images/settings.svg'

const NotesLayout = () => {
  const {t} = useTranslation()
  const [jotter, setJotter] = useState()
  const [notes, setNotes] = useState()
  const [selectedNote, setSelectedNote] = useState()
  const [isVisibleConfirmation, setIsVisibleConfirmation] = useState(false)
  const {getJotter, fetchNotes, getNote, updateNote, addNewNote, deleteNote} = useNotes(notes, setNotes)

  const {jotterId, noteId} = useParams()
  const history = useHistory()

  useEffect(() => {
    getJotter(jotterId).then((data) => {
      setJotter(data)
      fetchNotes(jotterId).then(data => {
        setNotes(sortArrayBy('byDate', data))
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jotterId])

  useEffect(() => {
    if (notes && noteId) {
        getNote(noteId).then(data => setSelectedNote(data))
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId])

  useEffect(() => {
    if (!noteId && notes && (notes.length > 0)) {
      history.push(`/jotters/${jotterId}/${notes[0]._id}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes])

  const handleUpdate = async (content) => {
    await updateNote({_id: selectedNote._id, content})
  }

  const handleCreateNewNote = async () => {
    const newNote = await addNewNote({jotterId, title: t('MY_NEW_NOTE')})
    history.push(`/jotters/${jotterId}/${newNote._id}`)
  }

  const handleDeleteNote = async () => {
    if (selectedNote) {
      await deleteNote(selectedNote)

      if (notes && (notes.length > 0)) {
        history.push(`/jotters/${jotterId}/${notes[0]._id}`)
      } else {
        history.push(`/jotters/${jotterId}`)
      }
    }
    setIsVisibleConfirmation(false)
  }

  const handleBtnSettings = (action) => {
    if (action === 'delete') {
      setIsVisibleConfirmation(true)
    }
  }

  const paramsBtnSettings = {
    name: 'settings',
    image: settings,
    title: t('SETTINGS'),
    items: [
      {
        action: 'settings',
        name: t('SETTINGS'),
        onClick: handleBtnSettings,
        disabled: false
      },
      {
        action: 'delete',
        name: t('DELETE_NOTE'),
        onClick: handleBtnSettings,
        disabled: false
      }
    ]
  }


  return (
    <>
      <Layout title={jotter ? jotter.title : '...'}>
        <NotesSidebar notes={notes}
                      onCreateNewNote={handleCreateNewNote}/>

        {(notes && notes.length === 0)
          ?
          <p className="w-100 text-center my-5">
            {t('CREATE_NEW_NOTE')}
          </p>

          :
          <NotePage note={selectedNote}
                    type="PRIVATE"
                    onUpdate={handleUpdate}
                    paramsBtnSettings={paramsBtnSettings}/>
        }
      </Layout>

      {isVisibleConfirmation &&
      <Confirmation header={t('DELETE')}
                    context={`${t('DELETE_NOTE')}`}
                    action={t('DELETE')}
                    onConfirm={handleDeleteNote}
                    onCancel={() => setIsVisibleConfirmation(false)}/>
      }
    </>
  )
}

export default NotesLayout
