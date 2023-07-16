import React, { FC } from 'react'
import style from './LayoutMobileCitySearchAside.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

interface Props {
  isSearchAsideOpen: boolean
}

export const LayoutMobileCitySearchAside: FC<Props> = ({ isSearchAsideOpen }) => {
  const asideOpenClass = isSearchAsideOpen ? style['search-aside--open'] : ''

  return (
    <aside className={`${style['search-aside']} ${asideOpenClass}`}>
      <div className={`${style['search-aside__input-container']}`}>
        <div className={`${style['search-aside__icon-container']}`}>
          <AiOutlineSearch size={30} />
        </div>
        <input className={`${style['search-aside__input']}`} />
      </div>
    </aside>
  )
}
