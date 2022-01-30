import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import LoginForm from '../components/pages/header/login/loginForm'
import RegisterForm from '../components/pages/header/login/registerForm'
import {useAuth} from './useAuth'
import LogoutForm from '../components/pages/header/login/logoutForm'

const useLoginDropdown = () => {
  const {t} = useTranslation()
  const [isVisibleLogin, setIsVisibleLogin] = useState(false)
  const [isVisibleRegister, setIsVisibleRegister] = useState(false)
  const [isVisibleLogout, setIsVisibleLogout] = useState(false)
  const {currentUser} = useAuth()

  const paramsDropdownBtn = {
    img: <span className="icon icon-arrow_drop_down_circle"/>,
    title: t('LOGIN'),
    label: t('LOG_IN'),
    onClick: handleDropdownBtn
  }

  paramsDropdownBtn.items = [
    {
      action: 'login',
      title: t('LOG_IN'),
      img: <span/>,
      disabled: false
    },
    {
      action: 'register',
      title: t('REGISTER'),
      img: <span/>,
      disabled: false
    },
    {
      action: 'logout',
      title: t('LOG_OUT'),
      img: <span/>,
      disabled: !currentUser
    }
  ]

  function handleDropdownBtn(action) {
    switch (action) {
      case 'login':
        setIsVisibleLogin(true)
        break
      case 'register':
        setIsVisibleRegister(true)
        break
      case 'logout':
        setIsVisibleLogout(true)
        break
      default:

    }
  }

  const hideAllCards = () => {
    setIsVisibleLogin(false)
    setIsVisibleRegister(false)
    setIsVisibleLogout(false)
  }

  const renderLoginCard = (<>

      {isVisibleLogin &&
        <LoginForm onRemoveModal={hideAllCards}/>}

      {isVisibleRegister &&
        <RegisterForm onRemoveModal={hideAllCards}/>}

      {isVisibleLogout &&
        <LogoutForm onRemoveModal={hideAllCards}/>}

  </>)

  return {paramsDropdownBtn, renderLoginCard}
}

export default useLoginDropdown
