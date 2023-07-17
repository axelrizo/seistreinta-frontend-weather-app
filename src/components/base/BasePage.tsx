import React, { FC } from 'react'
import style from './BasePage.module.css'

interface Props {
  children: React.ReactNode
}

export const BasePage: FC<Props> = ({ children }) => {
  return <div className={style['base-page']}>{children}</div>
}
