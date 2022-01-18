import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NoteItem from './noteItem'
import Spinner from '../../common/spinner'
import Sidebar from '../../common/modal/sidebar'

const JotterNotesSidebar = ({notes, onCreateNewNote, isMobile, hideSidebar, ...rest}) => {
  const {t} = useTranslation()


  const onHideMobileSideBar = () => {
    if (isMobile) {
      hideSidebar()
    }
  }

  return (
    <Sidebar {...{isMobile, hideSidebar, ...rest}}>
      <Link to="/jotters" className="btn btn--primary">
          <span className="icon icon-chevron_left"/>
          <span className="fs-5">{t('JOTTERS')}</span>
      </Link>

      {notes
        ? (notes.length > 0
          ?
          <ul className="items-block">
            {notes.map(note => <NoteItem key={note._id}
                                         note={note}
                                         onHideMobileSideBar={onHideMobileSideBar}/>)}
          </ul>

          :
          <p className="no-card">
            {t('NO_NOTES')}
          </p>)

        : <Spinner/>
      }

      <button className="btn btn--secondary"
              onClick={onCreateNewNote}>
        {t('NEW_NOTE')}
      </button>

    </Sidebar>
  )
}

export default JotterNotesSidebar
