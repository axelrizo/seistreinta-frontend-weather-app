import React, { FC } from 'react'
import { CityInformation } from '../interfaces/CitiesInformation'
import { useCountryEmoji } from '@/hooks/useCountryEmoji'

interface Props {
  city: CityInformation
}

export const CitiesListItem: FC<Props> = ({ city }) => {
  const { emoji } = useCountryEmoji({ countryCode: city.country })

  return (
    <div>
      {city.country} - <span data-flag={emoji}>{emoji}</span> - {city.state} - {city.name}
    </div>
  )
}
