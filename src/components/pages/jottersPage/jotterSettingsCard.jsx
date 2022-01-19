import React, { useState } from 'react'
import Notification from '../../common/modal/notification'
import { useTranslation } from 'react-i18next'
import Spinner from '../../common/spinner'
import TextInput from '../../common/form/textInput'

const JotterSettingsCard = ({header, settingsData, onSubmit, onHideModal}) => {
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
      <form onSubmit={handleSubmit}
            className="form">

        <h1 className="form__title">{header}</h1>

          {data
            ? <>
              <TextInput name="title"
                         label={t('JOTTER_NAME')}
                         value={data.title}
                         onChange={handleChange}
                         error=""/>

              <TextInput name="color"
                         label={t('COLOR')}
                         value={data.color}
                         onChange={handleChange}
                         error=""/>
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

export default JotterSettingsCard
