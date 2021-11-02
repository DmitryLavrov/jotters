import React, { useState } from 'react'
import Notification from '../../common/modal/notification'
import { useTranslation } from 'react-i18next'

const JotterCardSettings = ({header, title, color, onSubmit, onHideModal}) => {
  const {t} = useTranslation()
  const [data, setData] = useState({title: title, color: color})

  const handleChange = (event) => {
    setData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
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
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {t('JOTTER_NAME')}
            </label>
            <input name="title"
                   value={data.title}
                   onChange={handleChange}
                   type="text"
                   className="form-control"
                   id="title"/>
          </div>

          <div className="mb-3">
            <label htmlFor="color" className="form-label">
              {t('COLOR')}
            </label>
            <input name="color"
                   value={data.color}
                   onChange={handleChange}
                   type="text"
                   className="form-control"
                   id="color"/>
          </div>

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

export default JotterCardSettings
