import React, { useContext } from 'react'
import style from './PageIndexNotSelectedCity.module.css'
import { useTranslation } from 'next-i18next'
import { SearchInformationContext } from '@/context/SearchInformationContext'
import { AiOutlineSearch } from 'react-icons/ai'

export const PageIndexNotSelectedCity = () => {
  const { t } = useTranslation()
  const { setIsSearchAsideOpen } = useContext(SearchInformationContext)

  const handleSearchClick = () => {
    setIsSearchAsideOpen(true)
  }

  return (
    <div className={`${style['nocity-page']}`}>
      <div>{t('index.page-not-selected')}</div>
      <button className={`${style['nocity-page__button']}`} onClick={handleSearchClick}>
        {t('index.page-not-selected-button')}
        <AiOutlineSearch size={50} />
      </button>
    </div>
  )
}
