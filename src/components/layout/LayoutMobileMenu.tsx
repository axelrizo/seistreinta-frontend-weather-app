import { useTranslation } from 'next-i18next'
import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import styles from './LayoutMobileMenu.module.css'

interface Props {
  onClickSearchButton: () => void
  onClickOptionsButton: () => void
}

export const LayoutMobileMenu: FC<Props> = ({ onClickSearchButton, onClickOptionsButton }) => {
  const { t } = useTranslation()

  const handleSearchButtonClick = () => {
    onClickSearchButton()
  }

  return (
    <>
      <nav className={styles['mobile-menu']}>
        <ul className={styles['mobile-menu__list']}>
          <li onClick={() => handleSearchButtonClick()} className={styles['mobile-menu__list-item']}>
            <AiOutlineSearch size={30} />
            {t('layout.menu-search')}
          </li>
          <li onClick={() => onClickOptionsButton()} className={styles['mobile-menu__list-item']}>
            <BsGear size={30} />
            {t('layout.menu-options')}
          </li>
        </ul>
      </nav>
    </>
  )
}
