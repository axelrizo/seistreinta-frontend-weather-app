import { SearchInformationContext } from '@/context/SearchInformationContext'
import { CurrentWeather } from '@/modules/weather/interfaces/CurrentWeather'
import React, { FC, useContext } from 'react'
import style from './PageIndexHero.module.css'
import { useFormatDate } from '@/hooks/useFormatDate'

interface Props {
  weather: CurrentWeather
}

export const PageIndexHero: FC<Props> = ({ weather }) => {
  const { city } = useContext(SearchInformationContext)
  const { formattedDate } = useFormatDate({ date: new Date() })

  return (
    <div className={`${style['hero']}`}>
      <div className={`${style['hero__header']}`}>
        <img
          className={`${style['hero__flag']}`}
          src={`https://flagcdn.com/48x36/${city!.country.toLocaleLowerCase()}.png`}
        />
        {city!.name}
      </div>
      <div className={`${style['hero__information']}`}>
        <img
          className={`${style['hero__weather-image']}`}
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt=""
        />
        <p className={`${style['hero__degrees']}`}>
          {Math.round(weather.main.temp)}
          <span className={`${style['hero__degrees-annotation']}`}>&deg;C</span>
        </p>
        <p className={`${style['hero__weather']}`}>{weather.weather[0].main}</p>
        <p>Today · {formattedDate}</p>
      </div>
    </div>
  )
}
