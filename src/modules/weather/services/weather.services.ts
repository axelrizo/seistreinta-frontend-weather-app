import { openWeatherMapBaseAxiosInstance } from '../../openWeatherMap/instances/openWeatherMap.instances'
import { CurrentWeather } from '../interfaces/CurrentWeather'
import { ForecastWeather } from '../interfaces/ForecastWeather'

export const weatherServices = {
  async getForecast({ lon, lat }: { lon: number; lat: number }) {
    const response = await openWeatherMapBaseAxiosInstance<CurrentWeather>('/data/2.5/weather', {
      params: { lat, lon, units: 'metric' },
    })
    return response.data
  },

  async get5DayForecast({ lat, lon }: { lon: number; lat: number }) {
    const response = await openWeatherMapBaseAxiosInstance<ForecastWeather>('/data/2.5/forecast', {
      params: { lat, lon },
    })
    return response.data
  },
}
