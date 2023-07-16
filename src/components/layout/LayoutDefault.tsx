import { ThemeProvider } from '@/context/ThemeContext'
import { Montserrat } from 'next/font/google'
import React, { FC } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutHeader } from './LayoutHeader'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

interface Props {
  children: React.ReactNode
}

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className={montserrat.variable}>
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </div>
    </ThemeProvider>
  )
}
