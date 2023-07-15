import { useTranslation } from 'next-i18next'
import { FC } from 'react'

export const LayoutFooter: FC = () => {
  const { t } = useTranslation()
  return <div>{t('footer.text')}</div>
}
