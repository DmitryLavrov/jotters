import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import Sidebar from '../../common/modal/sidebar'

const PublicNotesSidebar = ({isMobile, hideSidebar, ...rest}) => {
  const {t} = useTranslation()

  return (
    <Sidebar {...{isMobile, hideSidebar, ...rest}}>
      <Link to="/public" className="btn btn-outline-primary">{t('BACK_TO_PUBLIC')}</Link>
      <br/>

      <input type="text" className="form-control" placeholder="Поиск по названию"/>
      <br/>
    </Sidebar>
  )
}

export default PublicNotesSidebar
