import React, {useEffect} from 'react'
import i18next from 'i18next'
import cookie from 'js-cookie'
import {useTranslation} from 'react-i18next'

const languages = [
  {code: 'en', name: 'English', flagCode: 'gb'},
  {code: 'ru', name: 'Русский', flagCode: 'ru'}
]

const LanguageBtn = () => {
  const currentLanguageCode = cookie.get('i18next') || 'en'
  const currentLanguage = languages.find(({code}) => code === currentLanguageCode)

  const {t} = useTranslation()

  useEffect(() => {
    document.title = t('JOTTERS')
  }, [currentLanguage, t])

  return (
    <span className="dropdown">
      <button className="btn btn-link dropdown-toggle" type="button" id="dropdownLanguages"
              data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-globe2"/>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLanguages">
        <li className="dropdown-item-text"><span>{t('language')}</span></li>
        {languages.map(({code, name, flagCode}) =>
          <li key={code}>
            <button className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}>
                  <span className={`flag-icon flag-icon-${flagCode} mx-2`}
                        style={{opacity: code === currentLanguageCode ? 0.5 : 1}}/>
              {name}
            </button>
          </li>
        )}
      </ul>
    </span>
  )
}

export default LanguageBtn
