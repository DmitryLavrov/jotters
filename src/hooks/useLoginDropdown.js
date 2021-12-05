import { useState } from 'react'
import SignInCard from '../components/ui/login/signInCard'
import { useTranslation } from 'react-i18next'

const useLoginDropdown = (getCurrentUser, handleSignIn) => {
  const {t} = useTranslation()
  const [user, setUser] = useState()
  const [isVisibleSingIn, setIsVisibleSingIn] = useState(false)
  const [isVisibleSingUp, setIsVisibleSingUp] = useState(false)
  const [isVisibleSingOut, setIsVisibleSingOut] = useState(false)

  const paramsDropdownBtn = {
    img: <span>{t('LOGIN')}</span>,
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
      action: 'signUp',
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
        setUser(user)
        setIsVisibleSingIn(true)
      })
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
                settingsData={user}
                onHideModal={hideAllCards}
                onSubmit={handleSignIn}/>}
  </>)

  return {paramsDropdownBtn, renderLoginCard}
}

export default useLoginDropdown
