import { CityGeocodeInformation } from '../interfaces/CitiesInformation'
import { openWeatherMapBaseAxiosInstance } from './openWeatherMap.instances'

export const geocodingService = {
  async getCities({ cityName }: { cityName: string }) {
    const response = await openWeatherMapBaseAxiosInstance<CityGeocodeInformation[]>('/geo/1.0/direct', {
      params: { q: cityName },
    })
    return response.data
  },
}
