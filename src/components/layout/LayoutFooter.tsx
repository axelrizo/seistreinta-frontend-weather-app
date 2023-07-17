import { useTranslation } from 'next-i18next'
import { FC } from 'react'

export const LayoutFooter: FC = () => {
  const { t } = useTranslation()
  return <div style={{ paddingBottom: '70px', display: 'flex', justifyContent: 'center' }}>{t('footer.text')}</div>
}
