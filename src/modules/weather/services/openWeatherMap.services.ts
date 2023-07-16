import { CityGeocodeInformation } from '../interfaces/CitiesInformation'
import { openWeatherMapBaseAxiosInstance } from './openWeatherMap.instances'

export const geocodingService = {
  async getCities({ cityName }: { cityName: string }) {
    const MAX_ALLOWED_CITIES_API_LIMIT = 5
    const response = await openWeatherMapBaseAxiosInstance<CityGeocodeInformation[]>('/geo/1.0/direct', {
      params: { q: cityName, limit: MAX_ALLOWED_CITIES_API_LIMIT },
    })
    return response.data
  },
}
