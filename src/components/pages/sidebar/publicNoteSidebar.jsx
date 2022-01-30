import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Sidebar from './common/sidebar'
import {useAuth} from '../../../hooks/useAuth'

const PublicNotesSidebar = ({note, isMobile, hideSidebar, ...rest}) => {
  const {t} = useTranslation()
  const {currentUser} = useAuth()
  const isOwnNote = note && (note.userId === currentUser?._id)

  return (
    <Sidebar {...{isMobile, hideSidebar, ...rest}}>
      <Link to="/public"
            className="btn btn--primary">
          <span className="icon icon-chevron_left"/>
          <span>{t('PUBLIC_NOTES')}</span>
      </Link>

      {isOwnNote &&
      <Link to={'/jotters/' + note.jotterId + '/' + note._id}
            className="btn btn--secondary">
        <span>{t('TO_PRIVATE')}</span>
      </Link>
      }
    </Sidebar>
  )
}

export default PublicNotesSidebar
