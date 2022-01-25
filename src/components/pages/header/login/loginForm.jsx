import React, { useState } from 'react'
import TextInput from '../../../forms/formElements/textInput'
import Spinner from '../../../common/spinner'
import Notification from '../../../modal/notification'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

const initUser = {
  email: '',
  password: ''
}

const LoginForm = ({onHideModal}) => {
  const {t} = useTranslation()
  const [data, setData] = useState(initUser)
  const [errors, setErrors] = useState({email: 'Error-email'})
  const {login} = useAuth()

  const history = useHistory()

  const handleChange = (field) => {
    setData(prev => ({
      ...prev,
      [field.name]: field.value
    }))
  }

  const handleSubmit = async (event) => {
    // =========================
    console.log('handleSubmit Login user:', data)
    // =========================
    event.preventDefault()
    try {
      await login(data)
      history.push('/')
      onHideModal()
    } catch (err) {
      setErrors(err)
    }
  }

  return (
    <Notification onCancel={onHideModal}>
      <form onSubmit={handleSubmit}
            className="form">

        <h1 className="form__title">
          {t('LOG_IN')}
        </h1>

        {data
          ? <>
            <TextInput name="email"
                       label={t('EMAIL')}
                       value={data.email}
                       onChange={handleChange}
                       error={errors.email}/>

            <TextInput name="password"
                       label={t('PASSWORD')}
                       value={data.password}
                       onChange={handleChange}
                       error={errors.password}/>
          </>

          : <Spinner/>}

        <div className="btn-block">
          <button type="button"
                  className="btn btn--primary w-33"
                  onClick={onHideModal}>
            {t('CANCEL')}
          </button>

          <button type="submit"
                  className="btn btn--secondary w-33">
            {t('SAVE')}
          </button>
        </div>
      </form>
    </Notification>
  )
}

export default LoginForm
