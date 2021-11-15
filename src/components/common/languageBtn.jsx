import React, {useEffect} from 'react'
import i18next from 'i18next'
import {useTranslation} from 'react-i18next'
import globe from '../../assets/images/globe.svg'
import flagGb from '../../assets/images/flag-gb.svg'
import flagRu from '../../assets/images/flag-ru.svg'

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

  return (
    <span className="dropdown">
      <button className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownLanguages"
              data-bs-toggle="dropdown"
              aria-expanded="false">
        <span>
          <img src={globe} alt="Lang" height="24px"/>
        </span>
      </button>

      <ul className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownLanguages">
        <li className="dropdown-item-text">
          <span>
            {t('language')}
          </span>
        </li>

        {languages.map(({code, name, flagImg}) =>
          <li key={code}>
            <button className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}>
              <span className="me-2" style={{opacity: code === currentLanguageCode ? 0.5 : 1}}>
                <img src={flagImg} alt="Flag" height="24px"/>
              </span>
              {name}
            </button>
          </li>
        )}
      </ul>
    </span>
  )
}

export default LanguageBtn
