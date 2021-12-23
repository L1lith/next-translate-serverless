import DefaultContext from './DefaultContext'
import { useContext } from 'react'

function useLocale() {
  return useContext(DefaultContext)
}

export default useLocale
