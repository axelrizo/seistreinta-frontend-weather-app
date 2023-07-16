import { useState } from 'react'
import styles from './LayoutHeaderMobile.module.css'
import { LayoutMobileCitySearchAside } from './LayoutMobileCitySearchAside'
import { LayoutMobileMenu } from './LayoutMobileMenu'
import { LayoutMobileOptionsMenu } from './LayoutMobileOptionsMenu'

export const LayoutHeaderMobile = () => {
  const [isSearchAsideOpen, setIsSearchAsideOpen] = useState(false)
  const [isOptionsAsideOpen, setIsOptionsAsideOpen] = useState(false)

  const toggleSearchAside = () => {
    setIsOptionsAsideOpen(false)
    setIsSearchAsideOpen((value) => !value)
  }

  const toggleOptionsAside = () => {
    setIsSearchAsideOpen(false)
    setIsOptionsAsideOpen((value) => !value)
  }

  return (
    <header className={styles['header-mobile']}>
      <LayoutMobileOptionsMenu isOptionsAsideOpen={isOptionsAsideOpen} />
      <LayoutMobileCitySearchAside isSearchAsideOpen={isSearchAsideOpen} />
      <LayoutMobileMenu onClickSearchButton={toggleSearchAside} onClickOptionsButton={toggleOptionsAside} />
    </header>
  )
}
