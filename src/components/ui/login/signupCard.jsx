import React, { useState } from 'react'
import TextInput from '../../common/form/textInput'
import Spinner from '../../common/spinner'
import Notification from '../../common/modal/notification'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

const initUser = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
}

const SignupCard = ({header, onHideModal}) => {
  const {t} = useTranslation()
  const [data, setData] = useState(initUser)
  const [errors, setErrors] = useState({})
  const {signup} = useAuth()

  const history = useHistory()

  const handleChange = (field) => {
    setData(prev => ({
      ...prev,
      [field.name]: field.value
    }))
  }

  const handleSubmit = async (event) => {
    // =========================
    console.log('Signup user:', data)
    // =========================
    event.preventDefault()
    try {
      await signup(data)
      history.push('/')
      onHideModal()
    } catch (err) {
      setErrors(err)
    }
  }

  // =========================
  console.log('errors:', errors)
  // =========================

  return (
    <Notification onCancel={onHideModal}>
      {/*<div className="card">*/}
      <h5 className="card-header">{header}</h5>

      <div className="card-body">
        <form onSubmit={handleSubmit}>

          {data
            ? <>
              <TextInput name="name"
                         label={t('NAME')}
                         value={data.name}
                         onChange={handleChange}
                         error={errors.name}/>

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

              <TextInput name="passwordConfirm"
                         label={t('PASSWORD_CONFIRM')}
                         value={data.passwordConfirm}
                         onChange={handleChange}
                         error={errors.passwordConfirm}/>
            </>

            : <Spinner/>}

          <div className="d-flex justify-content-end gap-3">
            <button type="button"
                    className="btn btn-primary w-25"
                    onClick={onHideModal}>
              {t('CANCEL')}
            </button>

            <button type="submit"
                    className="btn btn-warning w-25 ms-5">
              {t('SAVE')}
            </button>
          </div>
        </form>

      </div>

      {/*</div>*/}
    </Notification>
  )
}

export default SignupCard
