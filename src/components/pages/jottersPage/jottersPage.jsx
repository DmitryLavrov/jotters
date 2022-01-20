import React from 'react'
import JotterCard from './jotterCard'
import Spinner from '../../common/spinner'
import { useTranslation } from 'react-i18next'

const JottersPage = ({jotters, paramsDropdownBtn, onAddNewJotter}) => {
  const {t} = useTranslation()

  return (
    <>
      {jotters
        ? jotters.map(jotter => <JotterCard key={jotter._id}
                                            jotter={jotter}
                                            paramsDropdownBtn={paramsDropdownBtn}/>)
        : <Spinner/>
      }

        <button className="btn btn--new-jotter"
                onClick={onAddNewJotter}>
          {t('NEW_JOTTER')}
        </button>
    </>
  )
}

export default JottersPage
