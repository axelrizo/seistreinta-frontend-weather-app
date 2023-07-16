import React, { FC, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface Context {
  cityName: string
  updateCityName: ({ city }: { city: string }) => void
}

export const SearchInformationContext = React.createContext<Context>({} as Context)

export const SearchInformationProvider: FC<Props> = ({ children }) => {
  const [cityName, setCityName] = useState('')

  const updateCityName = ({ city }: { city: string }) => {
    setCityName(city)
  }

  return (
    <SearchInformationContext.Provider value={{ cityName, updateCityName }}>
      {children}
    </SearchInformationContext.Provider>
  )
}
