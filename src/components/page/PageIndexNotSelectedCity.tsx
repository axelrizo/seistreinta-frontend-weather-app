import React from 'react'
import style from './PageIndexNotSelectedCity.module.css'
import { useTranslation } from 'next-i18next'

export const PageIndexNotSelectedCity = () => {
  const { t } = useTranslation()
  return <div className={`${style['nocity-page']}`}>{t('index.page-not-selected')}</div>
}
