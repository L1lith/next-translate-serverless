import Link from 'react'
import useLocale from './useLocale'
import changeURLLocale from './changeURLLocale'

function OurLink(props) {
  const locale = useLocale()
  const outputProps = { ...props }
  if (typeof outputProps.href == 'string') {
    outputProps.href = changeURLLocale(outputProps.href, locale)
  }
  return <Link {...outputProps} />
}

export default OurLink
