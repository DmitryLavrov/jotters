import React from 'react'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'
import { dateToString } from '../../../utils/dateToString'

const NoteCard = ({note}) => {
  const {t} = useTranslation()
  const isOwnNote = note.userId === 'u01'

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
              {note.summary}
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
