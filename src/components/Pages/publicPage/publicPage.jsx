import React from 'react'
import NoteCard from './noteCard'
import Spinner from '../../common/spinner'

const PublicPage = ({notes}) => {

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-center">

      {notes
        ? notes.map(note => <NoteCard key={note._id} note={note}/>)
        : <Spinner/>
      }

    </div>
  )
}

export default PublicPage
