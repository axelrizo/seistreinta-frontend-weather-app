import { CityInformation } from '../interfaces/CitiesInformation'
import { openWeatherMapBaseAxiosInstance } from '../../openWeatherMap/instances/openWeatherMap.instances'

export const citiesServices = {
  async getCities({ cityName }: { cityName: string }) {
    const MAX_ALLOWED_CITIES_API_LIMIT = 5
    const response = await openWeatherMapBaseAxiosInstance<CityInformation[]>('/geo/1.0/direct', {
      params: { q: cityName, limit: MAX_ALLOWED_CITIES_API_LIMIT },
    })
    return response.data
  },
}
