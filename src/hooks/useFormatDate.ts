import { useTranslation } from 'next-i18next'

export const useFormatDate = ({ date }: { date: Date }) => {
  const { t } = useTranslation()

  const weekday = [
    t('day.sunday'),
    t('day.monday'),
    t('day.tuesday'),
    t('day.wednesday'),
    t('day.thursday'),
    t('day.friday'),
    t('day.saturday'),
  ]

  const months = [
    t('month.january'),
    t('month.february'),
    t('month.march'),
    t('month.april'),
    t('month.may'),
    t('month.june'),
    t('month.july'),
    t('month.august'),
    t('month.september'),
    t('month.october'),
    t('month.november'),
    t('month.december'),
  ]

  const formattedDate = `${weekday[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`

  return { formattedDate }
}
