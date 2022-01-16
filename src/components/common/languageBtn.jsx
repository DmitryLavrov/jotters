import React, { useEffect } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import flagGb from '../../assets/images/flag-gb.svg'
import flagRu from '../../assets/images/flag-ru.svg'

import DropdownBtn from './form/dropdownBtn'

const languages = [
  {code: 'en', name: 'English', flagImg: flagGb},
  {code: 'ru', name: 'Русский', flagImg: flagRu}
]

const LanguageBtn = () => {
  const currentLanguageCode = localStorage.getItem('i18nextLng') || 'en'
  const currentLanguage = languages.find(({code}) => code === currentLanguageCode)

  const {t} = useTranslation()

  useEffect(() => {
    document.title = t('JOTTERS')
  }, [currentLanguage, t])

  //========= DropdownBtn ============

  const handleDropdownBtn = (action) => {
    i18next.changeLanguage(action)
  }

  const paramsDropdownBtn = {
    img: <span className="icon icon-language"/>,
    title: t('LANGUAGE'),
    onClick: handleDropdownBtn
  }

  paramsDropdownBtn.items = languages.map(l => ({
    action: l.code,
    title: l.name,
    img: <img src={l.flagImg} alt="flag" height="24px"/>,
    disabled: l.code === currentLanguage.code
  }))

  //===================================

  return (
    <div className="language-block">
      <DropdownBtn params={paramsDropdownBtn}/>
    </div>
  )
}

export default LanguageBtn
