import React from 'react'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'
import { dateToString } from '../../../utils/dateToString'
import { htmlToPlain } from '../../../utils/htmlToPlain'

const NoteCard = ({note}) => {
  const {t} = useTranslation()
  const isOwnNote = note.userId === '619032cad8df581c4881d9a2'
  const summary = htmlToPlain(note.content).slice(note.title.length, note.title.length + 130) + '...'

  return (
    <div className="col p-0">
      <div className="card position-relative"
           style={isOwnNote ? {border: '3px solid var(--bs-info)'} : null}>

        {isOwnNote &&
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-info">
          {t('MY_NOTE')}
        </span>}


        <Link to={`/public/${note._id}`} type="button" className="btn ">
          <div className="card-body text-center">
            <p className="card-title text-truncate text-primary fs-4">
              {note.title}
            </p>

            <p className="card-text ellipsis">
              {summary}
            </p>

            <h6 className="card-subtitle mb-2 text-muted">
              {note.username}
            </h6>

            <p className="card-text">
              {dateToString(note.updatedAt)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NoteCard
