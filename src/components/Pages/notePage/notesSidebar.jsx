import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NoteItem from './noteItem'
import Spinner from '../../common/spinner'
import Sidebar from '../../common/modal/sidebar'
import API from '../../../api'

const NotesSidebar = ({jotter, selectedNote, deleteNote, isMobile, hideSidebar, ...rest}) => {
  const {t} = useTranslation()

  const [notes, setNotes] = useState()

  useEffect(() => {
    if (jotter) {
      API.notes.fetchAllByJotterId(jotter._id).then(data => setNotes(data))
    }
  }, [jotter])

  const onHideMobileSideBar = () => {
    if (isMobile) {
      hideSidebar()
    }
  }

  return (
    <Sidebar {...{isMobile, hideSidebar, ...rest}}>
      <Link to="/jotters" className="btn btn-outline-primary">Выбрать Блокнот</Link>
      <br/>

      {notes
        ? (
          <ul className="nav flex-column">
            {notes.map(note => <NoteItem key={note._id}
                                         note={note}
                                         selected={note === selectedNote}
                                         deleteNote={deleteNote}
                                         onHideMobileSideBar={onHideMobileSideBar}/>)}
            {/*{jotter.notes.map(note => <NoteItem key={note._id}*/}
            {/*                                    note={note}*/}
            {/*                                    selected={note === selectedNote}*/}
            {/*                                    deleteNote={deleteNote}*/}
            {/*                                    onHideMobileSideBar={onHideMobileSideBar}/>)}*/}
          </ul>)
        : <Spinner/>
      }

      <br/>

      <button className="btn btn-outline-primary mt-3">{t('NEW_NOTE')}</button>
    </Sidebar>
  )
}

export default NotesSidebar
