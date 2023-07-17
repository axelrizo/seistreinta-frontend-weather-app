import React, { FC } from 'react'
import { CityInformation } from '../interfaces/CitiesInformation'
import { CitiesListItem } from './CitiesListItem'

interface Props {
  cities: CityInformation[] | null
  onClickACity: ({ lat, lon, name, country }: { lat: number; lon: number; name: string; country: string }) => void
}

export const CitiesList: FC<Props> = ({ cities, onClickACity }) => {
  return (
    <div>
      {cities &&
        cities.map((city, index) => {
          return <CitiesListItem onClickACity={onClickACity} city={city} key={index} />
        })}
    </div>
  )
}
