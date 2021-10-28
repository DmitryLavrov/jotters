import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import JotterToDelete from './jotterToDelete'
import { dateToString } from '../../../utils/dateToString'

const actionList = {
  delete: {
    header: 'Осторожно',
    title: 'Название блокнота',
    text: 'Этот блокнот будет удален',
    action: 'Удалить',
    cancel: 'Отмена'
  }
}

const JotterCard = ({jotter, deleteJotter}) => {
  const [isVisibleDeleteNotification, setIsVisibleDeleteNotification] = useState(false)
  const [action, setAction] = useState()

  const showDeleteNotification = () => {
    setAction({
      ...actionList.delete,
      title: `${jotter.title}`,
      id: jotter._id,
      onDelete: deleteJotter,
      onCancel: hideDeleteNotification
    })
    setIsVisibleDeleteNotification(true)
  }

  const hideDeleteNotification = () => {
    setIsVisibleDeleteNotification(false)
  }

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body text-center">
            <h5 className="card-title text-truncate">{jotter.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Доступ: {jotter.access}
              <button type="button" className="btn btn-link"><i className="bi bi-gear"/></button>
            </h6>
            <p className="card-text">Заметок: 10
              <br/>Изменения: {dateToString(jotter.updateDate)}</p>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-outline-danger" onClick={showDeleteNotification}>
                Удалить
              </button>
              <Link to={`/jotters/${jotter._id}`}>
                <button type="button" className="btn btn-outline-primary">
                  Открыть
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isVisibleDeleteNotification && <JotterToDelete {...action}/>}
    </>
  )
}

export default JotterCard
