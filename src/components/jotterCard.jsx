import React from 'react'
import {Link} from 'react-router-dom'

const JotterCard = ({jotter}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title text-truncate">{jotter.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Доступ: {jotter.access}
            <button type="button" className="btn btn-link"><i className="bi bi-gear"/></button>
          </h6>
          <p className="card-text">Заметок: {jotter.notes.length}
            <br/>Изменения: {jotter.lastChanges}</p>
          <div className="d-flex justify-content-center">
            <Link to={`/jotters/${jotter._id}`}>
              <button type="button" className="btn btn-outline-primary">
                Открыть
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JotterCard
