import { useTranslation } from 'next-i18next'
import { FC } from 'react'

export const LayoutFooter: FC = () => {
  const { t } = useTranslation()
  return (
    <div style={{ paddingBottom: '70px', display: 'flex', justifyContent: 'center', paddingTop: '16px' }}>
      {t('footer.text')}
    </div>
  )
}
