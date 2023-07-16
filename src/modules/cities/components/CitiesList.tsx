import React, { FC } from 'react'
import { CityInformation } from '../interfaces/CitiesInformation'
import { CitiesListItem } from './CitiesListItem'

interface Props {
  cities: CityInformation[] | null
}

export const CitiesList: FC<Props> = ({ cities }) => {
  return (
    <div>
      {cities &&
        cities.map((city, index) => {
          return <CitiesListItem city={city} key={index} />
        })}
    </div>
  )
}
