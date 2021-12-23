import useLocale from './useLocale'
import { useRouter } from 'next/router'

function useTranslation(...args) {
  if (args.length < 1) throw new Error('Please supply a default message and/or a language map')
  if (args.length > 2) throw new Error('Received too many args')
  let languageMap = args.reverse()[0]
  languageMap = typeof languageMap == 'object' && languageMap !== null ? { ...languageMap } : {}
  const locale = useLocale()
  const { defaultLocale } = useRouter()
  if (typeof args[0] == 'string') {
    languageMap[defaultLocale] = args[0]
  }
  const languages = Object.keys(languageMap)
  if (languages.length < 1) throw new Error('Please provide at least 1 language')
  if (languages.some(language => !locales.includes(language)))
    throw new Error(`Invalid Language Received`)
  if (!languageMap.hasOwnProperty(locale))
    throw new Error('Missing a translation for the default locale')
  return languageMap[locale]
}

export default useTranslation
