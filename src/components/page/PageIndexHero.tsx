import { SearchInformationContext } from '@/context/SearchInformationContext'
import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'

export const PageIndexHero = () => {
  const { city } = useContext(SearchInformationContext)

  return (
    <div>
      <div>
        <img src={`https://flagcdn.com/48x36/${city!.country.toLocaleLowerCase()}.png`} />
        {city!.name}
      </div>

      <Skeleton></Skeleton>
    </div>
  )
}
