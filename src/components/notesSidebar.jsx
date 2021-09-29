import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import NoteItem from './noteItem'
import Spinner from './common/spinner'

const NotesSidebar = ({jotter, selectedNote, isMobile = false, isVisible = false}) => {
  let sidebarClass = 'd-flex flex-column bg-light'
    + (isMobile ? ' mobile-sidebar col-auto pt-5 ps-md-5 ps-3 pe-md-5 pe-3' : '')
    + (isVisible ? ' open' : '')

  const {t} = useTranslation()

  return (
    <div className={sidebarClass}>
      {/*<button className="btn btn-sm btn-secondary" >Выбрать Блокнот</button>*/}
      <Link to="/jotters" className="nav-link">Выбрать Блокнот</Link>
      <br/>

      <input type="text" className="form-control" placeholder="Поиск по названию"/>
      <br/>

      {/*<h4>{t('PUBLIC')}</h4>*/}

      {jotter
        ? (
          <ul className="nav flex-column">
            {jotter.notes.map(note => <NoteItem key={note._id} note={note} selected={note === selectedNote}/>)}
          </ul>)
        : <Spinner/>
      }

      <br/>

      {/*<h4>{t('PRIVATE')}</h4>*/}

      {/*{noteItems.map(item => <NoteItem key={item}/>)}*/}

      <button className="btn btn-outline-primary mt-3">{t('NEW_NOTE')}</button>
    </div>
  )
}

export default NotesSidebar
