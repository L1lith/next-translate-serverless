import { useRouter } from 'next/locale'

export default function changeURLLocale(URL, locale) {
  const { locales, defaultLocale } = useRouter()
  const pathLocale = URL.split('/')[0]
  if (locales.includes(pathLocale)) {
    if (pathLocale === locale) return URL
    // Redirect to the Path for the correct language
    return [locale].concat(URL.split('/').slice(1)).join('/')
  } else if (locale !== defaultLocale) {
    // Next detected a different language but were still on the default path, redirect to the language path
    return locale + '/' + pathName
  }
  return URL
}
