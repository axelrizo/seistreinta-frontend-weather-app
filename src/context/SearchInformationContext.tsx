import React, { FC, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface Context {
  city: { lat: number; lon: number; name: string; country: string } | null
  updateCityName: ({ lat, lon, country, name }: { lat: number; lon: number; name: string; country: string }) => void
}

export const SearchInformationContext = React.createContext<Context>({} as Context)

export const SearchInformationProvider: FC<Props> = ({ children }) => {
  const [city, setCity] = useState<{ lat: number; lon: number; name: string; country: string } | null>(null)

  const updateCityName = ({ lat, lon, country, name }: { lat: number; lon: number; name: string; country: string }) => {
    setCity({ lat, lon, country, name })
  }

  return (
    <SearchInformationContext.Provider value={{ city, updateCityName }}>{children}</SearchInformationContext.Provider>
  )
}
