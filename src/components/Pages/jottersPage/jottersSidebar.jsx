import React from 'react'
import {useTranslation} from 'react-i18next'
import Sidebar from '../../common/modal/sidebar'

const JottersSidebar = ({addNewJotter, ...rest}) => {
  const {t} = useTranslation()

  const handleNewJotter = () => {
    const newJotter = {
      _id: 'j' + Math.random(),
      title: 'Новый альбом',
      access: 'public',
      lastChanges: Date.now(),
      notes: []
    }
    addNewJotter(newJotter)
  }

  return (
    <Sidebar {...rest}>
      {/*<h4>{t('sort')}</h4>*/}

      {/*<div className="form-check">*/}
      {/*  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>*/}
      {/*  <label className="form-check-label" htmlFor="exampleRadios1">*/}
      {/*    По названию*/}
      {/*  </label>*/}
      {/*</div>*/}
      {/*<div className="form-check">*/}
      {/*  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>*/}
      {/*  <label className="form-check-label" htmlFor="exampleRadios2">*/}
      {/*    По дате изменения*/}
      {/*  </label>*/}
      {/*</div>*/}
      {/*<div className="form-check">*/}
      {/*  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"*/}
      {/*         disabled/>*/}
      {/*  <label className="form-check-label" htmlFor="exampleRadios3">*/}
      {/*    Disabled radio*/}
      {/*  </label>*/}
      {/*</div>*/}

      {/*<h4 className="mt-3">{t('FILTER')}</h4>*/}
      {/*<div className="form-check">*/}
      {/*  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>*/}
      {/*  <label className="form-check-label" htmlFor="defaultCheck1">*/}
      {/*    Общие*/}
      {/*  </label>*/}
      {/*</div>*/}
      {/*<div className="form-check">*/}
      {/*  <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled/>*/}
      {/*  <label className="form-check-label" htmlFor="defaultCheck2">*/}
      {/*    Личные*/}
      {/*  </label>*/}
      {/*</div>*/}

      <button className="btn btn-outline-primary mt-3" onClick={handleNewJotter}>{t('NEW_JOTTER')}</button>
    </Sidebar>
  )
}

export default JottersSidebar
