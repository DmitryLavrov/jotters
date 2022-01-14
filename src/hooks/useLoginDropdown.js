import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import LoginCard from '../components/ui/login/loginCard'
import SignupCard from '../components/ui/login/signupCard'
import useUsers from './useUsers'

const useLoginDropdown = () => {
  const {t} = useTranslation()
  const [isVisibleSingIn, setIsVisibleSingIn] = useState(false)
  const [isVisibleSingUp, setIsVisibleSingUp] = useState(false)
  const [isVisibleSingOut, setIsVisibleSingOut] = useState(false)
  const {getCurrentUser} = useUsers()

  const paramsDropdownBtn = {
    img: <span className="icon icon-arrow_drop_down_circle"/>,
    label: t('LOGIN'),
    title: t('LOGIN'),
    onClick: handleDropdownBtn
  }

  paramsDropdownBtn.items = [
    {
      action: 'signIn',
      title: t('SIGN_IN'),
      img: <span/>,
      disabled: false
    },
    {
      action: 'signup',
      title: t('SIGN_UP'),
      img: <span/>,
      disabled: false
    },
    {
      action: 'signOut',
      title: t('SIGN_OUT'),
      img: <span/>,
      disabled: true
    }
  ]

  function handleDropdownBtn(action) {
    // =========================
    console.log('action:', action)
    // =========================
    if (action === 'signIn') {
      getCurrentUser().then(user => {
        // setUser(user)
        setIsVisibleSingIn(true)
      })
    } else if (action === 'signup'){
      setIsVisibleSingUp(true)
    }
  }

  const hideAllCards = () => {
    setIsVisibleSingIn(false)
    setIsVisibleSingUp(false)
    setIsVisibleSingOut(false)
  }

  const renderLoginCard = (<>
    {isVisibleSingIn &&
    <LoginCard onHideModal={hideAllCards}/>}

    {isVisibleSingUp &&
    <SignupCard header={t('SIGN_UP')}
                onHideModal={hideAllCards}/>}
  </>)

  // =========================
  console.log('isVisibleSingOut:', isVisibleSingOut)
  // =========================

  return {paramsDropdownBtn, renderLoginCard}
}

export default useLoginDropdown
