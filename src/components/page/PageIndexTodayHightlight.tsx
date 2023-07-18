import { WeatherHumidityIndicator } from '@/modules/weather/components/WeatherHumidityIndicator'
import { WeatherWindIndicator } from '@/modules/weather/components/WeatherWindIndicator'
import { CurrentWeather } from '@/modules/weather/interfaces/CurrentWeather'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'
import { BaseHighlightCard } from '../base/BaseHighlightCard'
import style from './PageIndexTodayHightlight.module.css'

interface Props {
  weather: CurrentWeather
}

export const PageIndexTodayHightlight: FC<Props> = ({ weather }) => {
  const { t } = useTranslation()
  return (
    <div className={`${style['highlight-cards']}`}>
      <BaseHighlightCard data={weather.wind.speed} measure="mps" title={t('index.wind')}>
        <div className={`${style['highlight-cards__extra-content']}`}>
          <WeatherWindIndicator degrees={weather.wind.deg} />
        </div>
      </BaseHighlightCard>
      <BaseHighlightCard data={weather.main.humidity} measure="%" title={t('index.humidity')}>
        <div className={`${style['highlight-cards__extra-content']}`}>
          <WeatherHumidityIndicator humidity={weather.main.humidity} />
        </div>
      </BaseHighlightCard>
      <BaseHighlightCard data={weather.visibility / 1000} measure="km" title={t('index.visibility')} />
      <BaseHighlightCard data={weather.main.pressure} measure="hPa" title={t('index.air-pressure')} />
    </div>
  )
}
