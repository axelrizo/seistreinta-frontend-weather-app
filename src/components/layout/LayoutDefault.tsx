import React, { FC } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutHeader } from './LayoutHeader'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

interface Props {
  children: React.ReactNode
}

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <div className={montserrat.variable}>
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </div>
  )
}
