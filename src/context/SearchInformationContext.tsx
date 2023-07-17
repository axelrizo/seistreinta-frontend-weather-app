import React, { FC, useState, useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

interface CityContextData {
  lat: number
  lon: number
  name: string
  country: string
}

interface Context {
  city: CityContextData | null
  updateCity: ({ lat, lon, country, name }: CityContextData) => void
}

export const SearchInformationContext = React.createContext<Context>({} as Context)

export const SearchInformationProvider: FC<Props> = ({ children }) => {
  const [city, setCity] = useState<CityContextData | null>(null)

  const setLocalStorage = (cityInfo: CityContextData) => {
    localStorage.setItem('city', JSON.stringify(cityInfo))
  }

  const readLocalStorage = () => {
    const city = localStorage.getItem('city')
    if (!city) return
    const cityParsed: CityContextData = JSON.parse(city)
    setCity(cityParsed)
  }

  const updateCity = (cityInfo: CityContextData) => {
    setCity(cityInfo)
    setLocalStorage(cityInfo)
  }

  useEffect(() => {
    readLocalStorage()
  }, [])

  return <SearchInformationContext.Provider value={{ city, updateCity }}>{children}</SearchInformationContext.Provider>
}
