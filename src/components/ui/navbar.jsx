import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/images/notebook.svg'
import menu from '../../assets/images/menu.svg'

import LanguageBtn from '../common/languageBtn'
import { Link } from 'react-router-dom'
import LoginBtn from './login/loginBtn'

const Navbar = ({title, navSidebar}) => {
  const {t} = useTranslation()

  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false)

  const showSidebar = () => {
    setIsVisibleSidebar(true)
  }

  const hideSidebar = () => {
    setIsVisibleSidebar(false)
  }

  return (
    <>
      <header className="header">
        <button onClick={showSidebar} className="btn btn--menu" type="button">
          <img src={menu} alt="Navigation button"/>
        </button>

        <Link to="/info" className="btn btn--logo" type="button">
          <img src={logo} alt="Logo Jotter"/>
        </Link>

        <h1 className="h1 header__title">
          {title || t('JOTTERS')}
        </h1>

        <LoginBtn/>

        <LanguageBtn/>
      </header>

      {isVisibleSidebar && navSidebar(hideSidebar)}
    </>
  )
}

export default Navbar
