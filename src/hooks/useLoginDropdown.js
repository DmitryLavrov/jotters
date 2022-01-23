import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import LoginForm from '../components/pages/header/login/loginForm'
import RegisterForm from '../components/pages/header/login/registerForm'
import useUsers from './useUsers'

const useLoginDropdown = () => {
  const {t} = useTranslation()
  const [isVisibleLogin, setIsVisibleLogin] = useState(false)
  const [isVisibleRegister, setIsVisibleRegister] = useState(false)
  const [isVisibleLogout, setIsVisibleLogout] = useState(false)
  const {getCurrentUser} = useUsers()

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
      disabled: true
    }
  ]

  function handleDropdownBtn(action) {
    // =========================
    console.log('action:', action)
    // =========================
    if (action === 'login') {
      getCurrentUser().then(user => {
        // setUser(user)
        setIsVisibleLogin(true)
      })
    } else if (action === 'register'){
      setIsVisibleRegister(true)
    }
  }

  const hideAllCards = () => {
    setIsVisibleLogin(false)
    setIsVisibleRegister(false)
    setIsVisibleLogout(false)
  }

  const renderLoginCard = (<>
    {isVisibleLogin &&
    <LoginForm onHideModal={hideAllCards}/>}

    {isVisibleRegister &&
    <RegisterForm header={t('REGISTER')}
                  onHideModal={hideAllCards}/>}
  </>)

  // =========================
  console.log('isVisibleLogout:', isVisibleLogout)
  // =========================

  return {paramsDropdownBtn, renderLoginCard}
}

export default useLoginDropdown
