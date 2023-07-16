import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

export const useThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext)

  const handleChangeTheme = () => {
    toggleTheme()
  }

  return { handleChangeTheme }
}
