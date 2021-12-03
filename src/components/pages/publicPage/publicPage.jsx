import React from 'react'
import NoteCard from './noteCard'
import Spinner from '../../common/spinner'
import { useTranslation } from 'react-i18next'

const PublicPage = ({notes}) => {
  const {t} = useTranslation()

  if (!notes) {
    return <Spinner/>
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-center">

      {notes.length > 0
        ?
        notes.map(note => <NoteCard key={note._id} note={note}/>)

        :
        <p className="w-100 text-center my-5">
          {t('NO_NOTES')}
        </p>
      }

    </div>
  )
}

export default PublicPage
