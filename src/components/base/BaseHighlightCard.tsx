import React, { FC } from 'react'
import style from './BaseHighlightCard.module.css'

interface Props {
  children?: React.ReactNode
  title: string
  data: string | number
  measure: string
}

export const BaseHighlightCard: FC<Props> = ({ children, data, measure, title }) => {
  return (
    <div className={`${style['highlight-card']}`}>
      <h3 className={`${style['highlight-card__title']}`}>{title}</h3>
      <p className={`${style['highlight-card__data']}`}>
        {data}
        <span className={`${style['highlight-card__measure']}`}>{measure}</span>
      </p>
      {children}
    </div>
  )
}
