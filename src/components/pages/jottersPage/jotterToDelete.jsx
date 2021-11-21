import React from 'react'
import Notification from '../../common/modal/notification'

const JotterToDelete = ({header, title, text, action, cancel, id, onDelete, onCancel}) => {
  return (
    <Notification onCancel={onCancel}>

      {/*<div className="card">*/}
        <h5 className="card-header">{header}</h5>

        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{text}</p>

          <span className="btn btn-secondary"
                onClick={onCancel}>
            {cancel}
          </span>

          <span className="btn btn-primary ms-3"
                onClick={() => onDelete(id)}>
            {action}
          </span>
        </div>
      {/*</div>*/}

    </Notification>
  )
}

export default JotterToDelete
