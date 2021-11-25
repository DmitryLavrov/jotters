import React, {useEffect} from 'react'
import i18next from 'i18next'
import {useTranslation} from 'react-i18next'
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

  const handleBtnSettings = (action) => {
    i18next.changeLanguage(action)
  }

  const paramsBtnLanguage = {
    name: 'language',
    position: 'static',
    img: <span className="icon icon-language"/>,
    title: t('LANGUAGE')
  }

  paramsBtnLanguage.items = languages.map(l => ({
    action: l.code,
    title: l.name,
    img: <img src={l.flagImg} alt="flag" height="24px"/>,
    onClick: handleBtnSettings,
    disabled: l.code === currentLanguage.code
  }))

  return (
    <DropdownBtn paramsBtnSettings={paramsBtnLanguage}/>
  )
}

export default LanguageBtn
