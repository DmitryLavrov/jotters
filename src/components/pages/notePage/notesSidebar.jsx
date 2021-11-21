import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NoteItem from './noteItem'
import Spinner from '../../common/spinner'
import Sidebar from '../../common/modal/sidebar'

const NotesSidebar = ({notes, onCreateNewNote, isMobile, hideSidebar, ...rest}) => {
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

    </Sidebar>
  )
}

export default NotesSidebar
