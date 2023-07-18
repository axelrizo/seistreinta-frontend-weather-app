import React, { FC } from 'react'
import { List } from '../interfaces/ForecastWeather'
import style from './WeatherTinyDetailedCard.module.css'
import { useFormatDate } from '@/hooks/useFormatDate'

interface Props {
  forecast: List
}

export const WeatherTinyDetailedCard: FC<Props> = ({ forecast }) => {
  const date = new Date(forecast.dt_txt)
  const time = `${date.getHours()}:00`
  const { formattedDate } = useFormatDate({ date })

  return (
    <article className={`${style['forecast-card']}`}>
      <h3 className={`${style['forecast-card__date']}`}>
        {formattedDate}
        <div>{time}</div>
      </h3>
      <img
        src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
        className={`${style['forecast-card__image']}`}
      />
      <p className={`${style['forecast-card__data']}`}>
        <div>{Math.round(forecast.main.temp_min)}&deg;C</div>
        <div>{Math.round(forecast.main.temp_max)}&deg;C</div>
      </p>
    </article>
  )
}
