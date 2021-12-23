import DefaultContext from './DefaultContext'
import { useRouter } from 'next/router'

export default function withLanguageProvider(child /*, LanguageContext = DefaultContext*/) {
  const { defaultLocale, locales, pathName } = useRouter()

  useEffect(() => {})
  return <DefaultContext.Provider value={locale || defaultLocale}>{child}</DefaultContext.Provider>
}
