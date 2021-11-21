import React from 'react'
import { useTranslation } from 'react-i18next'

import Notification from './notification'

const Confirmation = ({header, context, action, onConfirm, onCancel}) => {
  const {t} = useTranslation()

  return (
    <Notification onCancel={onCancel}>
      <h5 className="card-header">{header}</h5>

      <div className="card-body">

        <h3 className="mb-3 text-center">
          {context}
        </h3>

        <div className="d-flex justify-content-between">
          <button type="button"
                  className="btn btn-primary w-25"
                  onClick={onCancel}>
            {t('CANCEL')}
          </button>

          <button type="button"
                  className="btn btn-warning w-25 ms-5"
                  onClick={onConfirm}>
            {action}
          </button>
        </div>

    </div>
    </Notification>
  )
}

export default Confirmation
