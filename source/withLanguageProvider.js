import DefaultContext from './DefaultContext'
import { useRouter } from 'next/router'

export default function withLanguageProvider(child /*, LanguageContext = DefaultContext*/) {
  const router = useRouter()
  const { defaultLocale, locale, locales, pathName } = router
  const pathLocale = pathName.split('/')[0]
  useEffect(() => {
    if (locales.includes(pathLocale) && pathLocale !== locale) {
      // Redirect to the Path for the correct language
      router.push([locale].concat(pathName.split('/').slice(1)).join('/'))
    } else if (locale !== defaultLocale) {
      // Next detected a different language but were still on the default path, redirect to the language path
      router.push(locale + '/' + pathName)
    }
  }, [locale])

  const locale = locales.includes(pathLocale) ? pathLocale : defaultLocale
  return <DefaultContext.Provider value={locale}>{child}</DefaultContext.Provider>
}
