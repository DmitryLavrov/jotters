import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Notification from '../../common/modal/notification'
import Spinner from '../../common/spinner'
import Radio from '../../common/form/radio'

const NoteSettingsCard = ({header, settingsData, onSubmit, onHideModal}) => {
  const {t} = useTranslation()
  const [data, setData] = useState({...settingsData, public: settingsData.public.toString()})

  const handleChange = (field) => {
    setData(prev => ({
      ...prev,
      [field.name]: field.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({...data, public: data.public === 'true'})
    onHideModal()
  }

  return (
    <Notification onCancel={onHideModal}>
      <h5 className="card-header">{header}</h5>

      <div className="card-body">
        <form onSubmit={handleSubmit}>

          {data
            ? <>
              <Radio name="public"
                     label={t('ACCESS')}
                     onChange={handleChange}
                     radioButtons={[
                       {label: t('PRIVATE'), checked: data.public === 'false', value: 'false'},
                       {label: t('PUBLIC'), checked: data.public === 'true', value: 'true'}
                     ]}/>
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

    </Notification>
  )

}

export default NoteSettingsCard
