import React from 'react'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import Sidebar from '../../common/modal/sidebar'

const InfoSidebar = ({...rest}) => {
  const {t} = useTranslation()

  return (
    <Sidebar {...rest}>
      <Link to="/public" className="btn btn-outline-primary btn-lg mt-3">
        {t('TO_PUBLIC')}
      </Link>

      <Link to="/jotters" className="btn btn-outline-warning btn-lg mt-3">
        {t('TO_PRIVATE')}
      </Link>
    </Sidebar>
  )
}

export default InfoSidebar
