import { ForecastWeather } from '@/modules/weather/interfaces/ForecastWeather'
import React, { FC } from 'react'
import style from './PageIndexForecast.module.css'
import { WeatherTinyDetailedCard } from '@/modules/weather/components/WeatherTinyDetailedCard'

interface Props {
  forecast: ForecastWeather
}

export const PageIndexForecast: FC<Props> = ({ forecast }) => {
  return (
    <div className={`${style['forecast-cards']}`}>
      {forecast.list.map((singleForecast, index) => (
        <WeatherTinyDetailedCard key={index} forecast={singleForecast} />
      ))}
    </div>
  )
}
