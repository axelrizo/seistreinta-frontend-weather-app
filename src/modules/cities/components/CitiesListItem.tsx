import React, { FC } from 'react'
import { CityInformation } from '../interfaces/CitiesInformation'
import { useCountryEmoji } from '@/hooks/useCountryEmoji'
import style from './CitiesListItem.module.css'
import { useRouter } from 'next/router'
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
  city: CityInformation
  onClickACity: ({ lat, lon, name, country }: { lat: number; lon: number; name: string; country: string }) => void
}

export const CitiesListItem: FC<Props> = ({ city, onClickACity }) => {
  const { locale } = useRouter()
  const cityName = city.local_names && locale && city.local_names[locale] ? city.local_names[locale] : city.name

  const handleLClickCity = () => {
    onClickACity({ lat: city.lat, lon: city.lon, name: city.name, country: city.country })
  }

  return (
    <div className={`${style['list-item']}`} onClick={handleLClickCity}>
      <div className={`${style['list_item__city']}`}>
        <img src={`https://flagcdn.com/48x36/${city.country.toLocaleLowerCase()}.png`} />
        {city.state ? `${city.state} - ` : ''} {cityName}
      </div>
      <div>
        <FiArrowUpRight size={30} />
      </div>
    </div>
  )
}
