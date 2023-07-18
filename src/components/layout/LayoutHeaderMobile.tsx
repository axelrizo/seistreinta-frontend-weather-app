import { useContext, useState } from 'react'
import styles from './LayoutHeaderMobile.module.css'
import { LayoutMobileCitySearchAside } from './LayoutMobileCitySearchAside'
import { LayoutMobileMenu } from './LayoutMobileMenu'
import { LayoutMobileOptionsMenu } from './LayoutMobileOptionsMenu'
import { SearchInformationContext } from '@/context/SearchInformationContext'

export const LayoutHeaderMobile = () => {
  const { isSearchAsideOpen, setIsSearchAsideOpen } = useContext(SearchInformationContext)
  const [isOptionsAsideOpen, setIsOptionsAsideOpen] = useState(false)

  const toggleSearchAside = () => {
    setIsOptionsAsideOpen(false)
    setIsSearchAsideOpen((value) => !value)
  }

  const closeSearchAside = () => {
    setIsSearchAsideOpen(false)
  }

  const toggleOptionsAside = () => {
    setIsSearchAsideOpen(false)
    setIsOptionsAsideOpen((value) => !value)
  }

  return (
    <header className={styles['header-mobile']}>
      <LayoutMobileOptionsMenu isOptionsAsideOpen={isOptionsAsideOpen} />
      <LayoutMobileCitySearchAside isSearchAsideOpen={isSearchAsideOpen} closeAsideMenu={closeSearchAside} />
      <LayoutMobileMenu onClickSearchButton={toggleSearchAside} onClickOptionsButton={toggleOptionsAside} />
    </header>
  )
}
