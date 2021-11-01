import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NoteItem from './noteItem'
import Spinner from '../../common/spinner'
import Sidebar from '../../common/modal/sidebar'

const NotesSidebar = ({notes, onDeleteNote, isMobile, hideSidebar, ...rest}) => {
  const {t} = useTranslation()


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
        ? (notes.length > 0
          ? <ul className="nav flex-column">
            {notes.map(note => <NoteItem key={note._id}
                                         note={note}
                                         onDeleteNote={onDeleteNote}
                                         onHideMobileSideBar={onHideMobileSideBar}/>)}
          </ul>
          : <p>Заметок пока нет</p>)
        : <Spinner/>
      }

      <br/>

      <button className="btn btn-outline-primary mt-3">{t('NEW_NOTE')}</button>
    </Sidebar>
  )
}

export default NotesSidebar
