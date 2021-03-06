import React from 'react'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import Notification from '../../../modal/notification'
import {useAuth} from '../../../../hooks/useAuth'

const LogoutForm = ({onRemoveModal}) => {
  const {t} = useTranslation()
  const {logout} = useAuth()
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    logout()
    history.push('/')
    onRemoveModal()
  }

  const handleCancel = () => {
    onRemoveModal()
  }

  return (
    <Notification onRemoveModal={handleCancel}>
      <form onSubmit={handleSubmit}
            className="form">

        <h1 className="form__title">
          {t('LOG_OUT')}
        </h1>

        <div className="btn-block">
          <button type="button"
                  className="btn btn--primary w-33"
                  onClick={handleCancel}>
            {t('CANCEL')}
          </button>

          <button type="submit"
                  className="btn btn--secondary w-33">
            {t('SUBMIT')}
          </button>
        </div>
      </form>
    </Notification>
  )
}

export default LogoutForm
