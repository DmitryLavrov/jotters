import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import Sidebar from '../../common/modal/sidebar'

const PublicNotesSidebar = ({note, isMobile, hideSidebar, ...rest}) => {
  const {t} = useTranslation()

  const isOwnNote = note && (note.userId === 'u01')

  return (
    <Sidebar {...{isMobile, hideSidebar, ...rest}}>
      <Link to="/public"
            className="btn btn-outline-primary">
        <span className="fw-bold me-2"> {'<'} </span>
        <span>{t('PUBLIC_NOTES')}</span>
      </Link>

      <br/>

      {isOwnNote &&
      <Link to={'/jotters/' + note.jotterId + '/' + note._id}
            className="btn btn-outline-warning">
        <span>{t('TO_PRIVATE')}</span>
      </Link>
      }
    </Sidebar>
  )
}

export default PublicNotesSidebar
