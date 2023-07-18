import { ThemeContext } from '@/context/ThemeContext'
import { useThemeToggle } from '@/hooks/useThemeToggle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import style from './LayoutMobileOptionsMenu.module.css'

interface Props {
  isOptionsAsideOpen: boolean
  closeOptionsMenu: () => void
}

export const LayoutMobileOptionsMenu: FC<Props> = ({ isOptionsAsideOpen, closeOptionsMenu }) => {
  const { locales, asPath, locale: currentLocale } = useRouter()
  const { isDarkThemeActive } = useContext(ThemeContext)
  const { handleChangeTheme } = useThemeToggle()
  const asideOpenClass = isOptionsAsideOpen ? style['options-aside--open'] : ''
  const asideContainerOpenClass = isOptionsAsideOpen ? style['options-aside__container--open'] : ''

  const handleClickMask = () => {
    closeOptionsMenu()
  }

  const localeButtons = locales?.map((locale, index) => {
    const linkClass = currentLocale === locale ? style['options-aside__button-locale--active'] : ''

    return (
      <div className={`${style['options-aside__button-locale']} ${linkClass}`} key={index}>
        <Link className={`${style['options-aside__link-locale']}`} href={asPath} scroll={false} locale={locale}>
          {locale}
        </Link>
      </div>
    )
  })

  return (
    <aside className={`${style['options-aside']} ${asideOpenClass}`}>
      <div onClick={handleClickMask} className={`${style['options-aside__mask']} ${asideOpenClass}`} />
      <div className={`${style['options-aside__container']} ${asideContainerOpenClass}`}>
        <ul className={`${style['options-aside__list']}`}>
          <li className={`${style['options-aside__list-item']}`}>
            <div className={`${style['options-aside__locale-container']}`}>{localeButtons}</div>
          </li>
          <li className={`${style['options-aside__list-item']}`}>
            <button className={`${style['options-aside__button-theme']}`} onClick={() => handleChangeTheme()}>
              {isDarkThemeActive ? <BsSun size={30} /> : <BsMoon size={30} />}
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}
