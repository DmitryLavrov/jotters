import React from 'react'
import NoteCard from './noteCard'
import Spinner from '../../../common/spinner'
import { useTranslation } from 'react-i18next'

const PublicNotesPage = ({notes}) => {
  const {t} = useTranslation()

  if (!notes) {
    return <Spinner/>
  }

  return (
    notes.length > 0
      ?
      <div className="cards-container">
        {notes.map(note => <NoteCard key={note._id}
                                     note={note}/>)}
      </div>
      :
      <p className="no-card">
        {t('NO_NOTES')}
      </p>
  )
}

export default PublicNotesPage
