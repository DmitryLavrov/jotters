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
      {/*<div className="card">*/}
      <h5 className="card-header">{header}</h5>

      <div className="card-body">
        <form onSubmit={handleSubmit}>

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

export default JotterSettingsCard
