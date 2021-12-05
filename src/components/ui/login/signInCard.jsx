import React, { useState } from 'react'
import TextInput from '../../common/form/textInput'
import Spinner from '../../common/spinner'
import Notification from '../../common/modal/notification'
import { useTranslation } from 'react-i18next'

const SignInCard = ({header, settingsData, onSubmit, onHideModal}) => {
  const {t} = useTranslation()
  const [data, setData] = useState(settingsData)

  const handleChange = (field) => {
    setData(prev => ({
      ...prev,
      [field.name]: field.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(data)
    onHideModal()
  }






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
                         error=""/>

              <TextInput name="email"
                         label={t('EMAIL')}
                         value={data.email}
                         onChange={handleChange}
                         error=""/>

              <TextInput name="password"
                         label={t('PASSWORD')}
                         value={data.password}
                         onChange={handleChange}
                         error=""/>
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

export default SignInCard
