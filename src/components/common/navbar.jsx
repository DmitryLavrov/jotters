import React, {useState} from 'react'
import LanguageBtn from './languageBtn'
import {useTranslation} from 'react-i18next'

const Navbar = ({title, sidebar}) => {
  const {t} = useTranslation()

  if (!title) title = t('JOTTERS')

  const [isVisible, setVisible] = useState(false)

  const backdropClass = 'backdrop' + (isVisible ? ' open' : '')

  const toggleVisible = () => {
    setVisible(prev => !prev)
  }

  return (
    <>
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid d-flex flex-nowrap">
          <button onClick={toggleVisible} className="btn btn-link d-lg-none" type="button">
            <i className="navbar-toggler-icon"/>
            {/*<i className="bi bi-list"/>*/}
          </button>

          <span className="d-none d-lg-block">Jotter</span>

          <h4 className="text-truncate">{title}</h4>

          <span className="d-flex flex-nowrap align-items-center">
            <span>UserName</span>
            <LanguageBtn/>
          </span>
        </div>
      </nav>

      {sidebar(isVisible)}

      <div className={backdropClass} onClick={toggleVisible}/>
    </>
  )
}

export default Navbar
