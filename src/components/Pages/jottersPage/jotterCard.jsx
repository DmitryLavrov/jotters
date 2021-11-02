import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { dateToString } from '../../../utils/dateToString'
import { useTranslation } from 'react-i18next'
import settings from '../../../assets/images/settings.svg'
import JotterCardSettings from './jotterCardSettings'

const JotterCard = ({jotter, onUpdateJotter}) => {
  const {t} = useTranslation()
  const [isVisibleSettingsModal, setIsVisibleSettingsModal] = useState(false)

  const showSettings = () => {
    setIsVisibleSettingsModal(true)
  }

  const hideSettings = () => {
    setIsVisibleSettingsModal(false)
  }

  const handleUpdateSettings = (data) => {
    onUpdateJotter(jotter._id, data)
  }

  return (
    <>
      <div className="col">
        <div className="card position-relative">

          <span className="btn position-absolute ps-2 pt-1" onClick={showSettings}>
            <img src={settings} alt="Lang" height="18px"/>
          </span>

          <Link to={`/jotters/${jotter._id}`} type="button" className="btn ">
            <div className="card-body text-center">
              <h5 className="card-title text-truncate">{jotter.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Доступ: {jotter.access}
                <button type="button" className="btn btn-link"><i className="bi bi-gear"/></button>
              </h6>
              <p className="card-text">
                Заметок: {jotter.notesNumber}
                <br/>
                Изменения: {dateToString(jotter.updateDate)}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {isVisibleSettingsModal &&
      <JotterCardSettings header={t('JOTTER')}
                          title={jotter.title}
                          color={jotter.color}
                          onHideModal={hideSettings}
                          onSubmit={handleUpdateSettings}/>
      }
    </>
  )
}

export default JotterCard
