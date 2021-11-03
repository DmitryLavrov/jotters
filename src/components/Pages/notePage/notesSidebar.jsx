import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NoteItem from './noteItem'
import Spinner from '../../common/spinner'
import Sidebar from '../../common/modal/sidebar'

const NotesSidebar = ({notes, onDeleteNote, onDeleteJotter, onCreateNewNote, isMobile, hideSidebar, ...rest}) => {
  const {t} = useTranslation()


  const onHideMobileSideBar = () => {
    if (isMobile) {
      hideSidebar()
    }
  }

  return (
    <Sidebar {...{isMobile, hideSidebar, ...rest}}>
      <Link to="/jotters" className="btn btn-outline-primary">
        <span className="fw-bold me-2 fs-5"> {'<'} </span>
        <span className="fs-5">{t('JOTTERS')}</span>
      </Link>

      <br/>

      {notes
        ? (notes.length > 0
          ?
          <ul className="nav flex-column">
            {notes.map(note => <NoteItem key={note._id}
                                         note={note}
                                         onDeleteNote={onDeleteNote}
                                         onHideMobileSideBar={onHideMobileSideBar}/>)}
          </ul>

          :
          <p className="w-100 text-center mt-3">
            {t('NO_NOTES')}
          </p>)

        : <Spinner/>
      }

      <br/>

      <button className="btn btn-outline-primary mt-3"
              onClick={onCreateNewNote}>
        {t('NEW_NOTE')}
      </button>

      {notes && notes.length === 0 &&
      <button className="btn btn-outline-warning mt-3"
              onClick={onDeleteJotter}>
        {t('DELETE_JOTTER')}
      </button>
      }
    </Sidebar>
  )
}

export default NotesSidebar
