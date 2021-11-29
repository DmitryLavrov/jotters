import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import logo from '../../assets/images/notebook.svg'
import menu from '../../assets/images/menu.svg'

import LanguageBtn from '../common/languageBtn'
import {Link} from 'react-router-dom'

const Navbar = ({title, navSidebar}) => {
  const {t} = useTranslation()

  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false)

  const showSidebar = () => setIsVisibleSidebar(true)
  const hideSidebar = () => setIsVisibleSidebar(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid d-flex flex-nowrap">
          <button onClick={showSidebar} className="btn btn-link d-lg-none p-0" type="button">
            <img src={menu} alt="Menu button" height="38px"/>
          </button>

          <Link to="/info">
            <button className="btn btn-link d-none d-lg-block p-0" type="button">
              <img src={logo} alt="Logo Jotter" height="38px"/>
            </button>
          </Link>

          <span className="fs-4 text-light lh-1">
            {title || t('JOTTERS')}
          </span>

          <span className="me-5">
            <span className="text-light">UserName</span>
            <LanguageBtn/>
          </span>
        </div>
      </nav>

      {isVisibleSidebar && navSidebar(hideSidebar)}
    </>
  )
}

export default Navbar
