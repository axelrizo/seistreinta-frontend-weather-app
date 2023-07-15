import React, { FC } from 'react'
import { LayoutFooter } from './LayoutFooter'

interface Props {
  children: React.ReactNode
}

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
      <LayoutFooter />
    </div>
  )
}
