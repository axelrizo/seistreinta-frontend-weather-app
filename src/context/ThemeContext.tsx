import React, { FC, useState, useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

interface Context {
  isDarkThemeActive: boolean
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<Context>({} as Context)

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false)

  const setLocalStorage = (isDarkThemeActive: boolean) => {
    localStorage.setItem('theme', JSON.stringify(isDarkThemeActive))
  }

  const readLocalStorage = () => {
    const theme = localStorage.getItem('theme')
    if (!theme) return
    const themeParsed = JSON.parse(theme)
    setIsDarkThemeActive(themeParsed)
  }

  const toggleTheme = () => {
    setIsDarkThemeActive((value) => {
      setLocalStorage(!value)
      return !value
    })
  }

  useEffect(() => {
    readLocalStorage()
  }, [])

  return <ThemeContext.Provider value={{ isDarkThemeActive, toggleTheme }}>{children}</ThemeContext.Provider>
}
