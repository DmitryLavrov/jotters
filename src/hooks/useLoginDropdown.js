import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import SignInCard from '../components/ui/login/signInCard'
import SignupCard from '../components/ui/login/signupCard'

const useLoginDropdown = (getCurrentUser, handleSignIn) => {
  const {t} = useTranslation()
  const [isVisibleSingIn, setIsVisibleSingIn] = useState(false)
  const [isVisibleSingUp, setIsVisibleSingUp] = useState(false)
  const [isVisibleSingOut, setIsVisibleSingOut] = useState(false)

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
    <SignInCard header={t('SIGN_IN')}
                // user={user}
                onHideModal={hideAllCards}
                onSubmit={handleSignIn}/>}

    {isVisibleSingUp &&
    <SignupCard header={t('SIGN_UP')}
                onHideModal={hideAllCards}/>}
  </>)

  return {paramsDropdownBtn, renderLoginCard}
}

export default useLoginDropdown
