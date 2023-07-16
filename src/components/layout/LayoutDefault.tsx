import { ThemeContext } from '@/context/ThemeContext'
import { Montserrat } from 'next/font/google'
import React, { FC, useContext } from 'react'
import { LayoutFooter } from './LayoutFooter'
import { LayoutHeader } from './LayoutHeader'
import { LayoutNotifications } from './LayoutNotifications'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

interface Props {
  children: React.ReactNode
}

export const LayoutDefault: FC<Props> = ({ children }) => {
  const { isDarkThemeActive, toggleTheme } = useContext(ThemeContext)
  const themeClass = isDarkThemeActive ? 'app--dark' : ''

  return (
    <div className={`${montserrat.variable} ${themeClass}`}>
      <LayoutNotifications />
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </div>
  )
}
