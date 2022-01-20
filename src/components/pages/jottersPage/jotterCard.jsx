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
    <div className="card jotter-card"
         style={{background: jotter.color}}>

      <DropdownBtn params={newParamsDropdownBtn}/>

      <Link to={`/jotters/${jotter._id}`}>

        <p className="jotter-card__title">{jotter.title}</p>

        <p className="jotter-card__text">
          {`${t('NOTES_COUNT')}: ${jotter.notesNumber}`}
        </p>

        <p className="jotter-card__date">
          {`${t('CHANGED')}: ${dateToString(jotter.updatedAt)}`}
        </p>

      </Link>
    </div>
  )
}

export default JotterCard
