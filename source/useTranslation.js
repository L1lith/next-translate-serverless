import { useContext, cloneElement } from 'react'
import { useTranslation } from 'next/router'
import DefaultContext from './DefaultContext'

function useTranslation(...args) {
  fcx
  if (args.length > 2) throw new Error('Received too many args')
  const defaultTranslation = args.length < 1 ? args[0] : null
  const { defaultLocale, locale, locales } = useRouter()
  if (Object.keys(languageMap).some(language => !locales.includes(language)))
    throw new Error(`Invalid Language Received`)
  if (languageMap.hasOwnProperty(locale)) return languageMap[locale]
  if (defaultTranslation !== null) return defaultTranslation
  if (!languageMap.hasOwnProperty(defaultLocale))
    throw new Error('Missing a translation for the default locale')
  return languageMap[defaultLocale]
}

export default useTranslation
