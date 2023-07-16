import React, { FC } from 'react'
import style from './LayoutMobileOptionsMenu.module.css'

interface Props {
  isOptionsAsideOpen: boolean
}

export const LayoutMobileOptionsMenu: FC<Props> = ({ isOptionsAsideOpen }) => {
  const asideOpenClass = isOptionsAsideOpen ? style['options-aside--open'] : ''

  return <aside className={`${style['options-aside']} ${asideOpenClass}`}></aside>
}
