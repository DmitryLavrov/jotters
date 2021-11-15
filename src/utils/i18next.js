import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

export const i18nInit = () => {
  i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'cookie', 'path', 'querystring', 'htmlTag', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    backend: {
      loadPath: () => {
        // check the domain
        const host = window.location.host;
        return (host === 'production.ltd' ? '':'jotters') + '/locales/{{lng}}/translation.json';
      }
      // loadPath: 'locales/{{lng}}/translation.json'
    }
  })
}
