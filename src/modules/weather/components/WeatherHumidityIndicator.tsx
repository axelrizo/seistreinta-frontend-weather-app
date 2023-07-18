import React, { FC } from 'react'
import style from './WeatherHumidityIndicator.module.css'

interface Props {
  humidity: number
}

export const WeatherHumidityIndicator: FC<Props> = ({ humidity }) => {
  return (
    <div>
      <div className={`${style['humidity-indicator__measures']}`}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className={`${style['humidity-indicator__progress']}`}>
        <div className={`${style['humidity-indicator__progress-level']}`} style={{ width: `${humidity}%` }} />
      </div>
    </div>
  )
}
