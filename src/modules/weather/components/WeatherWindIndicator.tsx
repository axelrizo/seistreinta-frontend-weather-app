import { FC } from 'react'
import { MdNavigation } from 'react-icons/md'
import style from './WeatherWindIndicator.module.css'

interface Props {
  degrees: number
}

export const WeatherWindIndicator: FC<Props> = ({ degrees }) => {
  return (
    <div className={`${style['indicator']}`}>
      <MdNavigation size={26} style={{ transform: `rotate(${degrees}deg)` }} />
    </div>
  )
}
