import { openWeatherMapBaseAxiosInstance } from '../../openWeatherMap/instances/openWeatherMap.instances'
import { CurrentWeather } from '../interfaces/CurrentWeather'

export const weatherServices = {
  async getForecast({ lon, lat }: { lon: number; lat: number }) {
    const response = await openWeatherMapBaseAxiosInstance<CurrentWeather>('/data/2.5/weather', {
      params: { lat, lon, units: 'metric' },
    })
    return response.data
  },
}
