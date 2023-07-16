import { BaseThemeSwitch } from '@/components/base/BaseThemeSwitch'
import { FC, useContext } from 'react'
import style from './LayoutMobileOptionsMenu.module.css'
import { BaseLocaleSwitch } from '../base/BaseLocaleSwitch'
import { ThemeContext } from '@/context/ThemeContext'

interface Props {
  isOptionsAsideOpen: boolean
}

export const LayoutMobileOptionsMenu: FC<Props> = ({ isOptionsAsideOpen }) => {
  const asideOpenClass = isOptionsAsideOpen ? style['options-aside--open'] : ''
  const { toggleTheme } = useContext(ThemeContext)

  const handleChangeTheme = () => {
    toggleTheme()
  }

  return (
    <aside className={`${style['options-aside']} ${asideOpenClass}`}>
      <ul>
        <li>
          <BaseLocaleSwitch />
        </li>
        <li>
          <BaseThemeSwitch onClickChangeTheme={handleChangeTheme} />
        </li>
      </ul>
    </aside>
  )
}
