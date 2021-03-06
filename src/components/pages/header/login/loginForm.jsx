import React from 'react'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import TextInputLogin from '../../../formElements/textInputLogin.jsx'
import Spinner from '../../../common/spinner'
import Notification from '../../../modal/notification'
import {useAuth} from '../../../../hooks/useAuth'
import {useLogin} from '../../../../hooks/useLogin'

const LoginForm = ({onRemoveModal}) => {
  const {t} = useTranslation()
  const {data, setErrors, isValidForm, reset} = useLogin()
  const {login} = useAuth()
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isValidForm) return

    try {
      await login(data)
      reset()
      onRemoveModal()
      history.push('/')
    } catch (err) {
      setErrors(err)
    }
  }

  const handleCancel = () => {
    reset()
    onRemoveModal()
  }

  return (
    <Notification onRemoveModal={handleCancel}>
      <form onSubmit={handleSubmit}
            className="form">

        <h1 className="form__title">
          {t('LOG_IN')}
        </h1>

        {data
          ? <>
            <TextInputLogin name="email"
                            label={t('EMAIL')}/>

            <TextInputLogin name="password"
                            label={t('PASSWORD')}
                            type="password"/>
          </>

          : <Spinner/>}

        <div className="btn-block">
          <button type="button"
                  className="btn btn--primary w-33"
                  onClick={handleCancel}>
            {t('CANCEL')}
          </button>

          <button type="submit"
                  disabled={!isValidForm}
                  className="btn btn--secondary w-33">
            {t('SUBMIT')}
          </button>
        </div>
      </form>
    </Notification>
  )
}

export default LoginForm
