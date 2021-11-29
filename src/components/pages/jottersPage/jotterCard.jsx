import React from 'react'
import { Link } from 'react-router-dom'
import { dateToString } from '../../../utils/dateToString'
import { useTranslation } from 'react-i18next'
import DropdownBtn from '../../common/form/dropdownBtn'

const JotterCard = ({jotter, paramsDropdownBtn}) => {
  const {t} = useTranslation()

  const onClickDropdownBtn = (action) => {
    paramsDropdownBtn.onClick(action, jotter._id)
  }

  const newParamsDropdownBtn = {...paramsDropdownBtn, onClick: onClickDropdownBtn}

  if (jotter.notesNumber > 0) {
    newParamsDropdownBtn.items = newParamsDropdownBtn.items.map(i => {
      if (i.action === 'delete') {
        return {...i, disabled: true}
      }
      return i
    })
  }

  return (
    <div className="col">
      <div className="card" style={{background: jotter.color}}>
        <DropdownBtn params={newParamsDropdownBtn}/>

        <Link to={`/jotters/${jotter._id}`} type="button" className="btn ">
          <div className="card-body text-center">
            <h5 className="card-title text-truncate">{jotter.title}</h5>
            <p className="card-text">
              {`${t('NOTES_COUNT')}: ${jotter.notesNumber}`}
              <br/>
              {`${t('CHANGED')}: ${dateToString(jotter.updatedAt)}`}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default JotterCard
