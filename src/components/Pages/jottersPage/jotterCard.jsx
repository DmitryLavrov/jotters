import React from 'react'
import { Link } from 'react-router-dom'
import { dateToString } from '../../../utils/dateToString'
import { useTranslation } from 'react-i18next'
import settings from '../../../assets/images/settings.svg'

const JotterCard = ({jotter, onUpdateJotter, onHideModal}) => {
  const {t} = useTranslation()

  return (
    <div className="col">
      <div className="card position-relative" style={{background: jotter.color}}>

          <span className="btn position-absolute ps-2 pt-1" onClick={() => onUpdateJotter(jotter._id)}>
            <img src={settings} alt="Lang" height="18px"/>
          </span>

        <Link to={`/jotters/${jotter._id}`} type="button" className="btn ">
          <div className="card-body text-center">
            <h5 className="card-title text-truncate">{jotter.title}</h5>
            <p className="card-text">
              {`${t('NOTES_COUNT')}: ${jotter.notesNumber}`}
              <br/>
              {`${t('CHANGED')}: ${dateToString(jotter.updateDate)}`}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default JotterCard
