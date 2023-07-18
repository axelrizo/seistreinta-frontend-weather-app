import { CurrentWeather } from '@/modules/weather/interfaces/CurrentWeather'
import { FC } from 'react'
import style from './PageIndexTodayHightlight.module.css'
import { BaseHighlightCard } from '../base/BaseHighlightCard'
import { useTranslation } from 'next-i18next'
import { WeatherHumidityIndicator } from '@/modules/weather/components/WeatherHumidityIndicator'

interface Props {
  weather: CurrentWeather
}

export const PageIndexTodayHightlight: FC<Props> = ({ weather }) => {
  const { t } = useTranslation()
  return (
    <div className={`${style['highlight-cards']}`}>
      <BaseHighlightCard data={weather.wind.speed} measure="mps" title={t('index.wind')}></BaseHighlightCard>
      <BaseHighlightCard data={weather.main.humidity} measure="%" title={t('index.humidity')}>
        <WeatherHumidityIndicator humidity={weather.main.humidity} />
      </BaseHighlightCard>
      <BaseHighlightCard data={weather.visibility / 1000} measure="km" title={t('index.visibility')} />
      <BaseHighlightCard data={weather.main.pressure} measure="hPa" title={t('index.air-pressure')} />
    </div>
  )
}
