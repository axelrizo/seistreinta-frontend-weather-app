import React, { FC, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface Context {
  isDarkThemeActive: boolean
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<Context | null>(null)

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false)

  const toggleTheme = () => {
    setIsDarkThemeActive((value) => !value)
  }

  return <ThemeContext.Provider value={{ isDarkThemeActive, toggleTheme }}>{children}</ThemeContext.Provider>
}
