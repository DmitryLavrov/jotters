import React from 'react'
import { Link } from 'react-router-dom'
import { dateToString } from '../../../utils/dateToString'

const NoteCard = ({note}) => {
  return (
    <div className="col p-0">
      <div className="card">
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
            {dateToString(note.updateDate)}
          </p>

          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-outline-danger">
              Удалить
            </button>

            <Link to={`/public/${note._id}`} type="button" className="btn btn-outline-primary">
              Открыть
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
