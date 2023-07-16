import React, { FC } from 'react'
import style from './LayoutMobileCitySearchAside.module.css'

interface Props {
  isSearchAsideOpen: boolean
}

export const LayoutMobileCitySearchAside: FC<Props> = ({ isSearchAsideOpen }) => {
  const asideOpenClass = isSearchAsideOpen ? style['search-aside--open'] : ''

  return (
    <aside className={`${style['search-aside']} ${asideOpenClass}`}>
      <input />
    </aside>
  )
}
