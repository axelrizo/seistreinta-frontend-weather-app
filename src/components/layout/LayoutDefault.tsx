import React, { FC } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutHeader } from './LayoutHeader'

interface Props {
  children: React.ReactNode
}

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <div>
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </div>
  )
}
