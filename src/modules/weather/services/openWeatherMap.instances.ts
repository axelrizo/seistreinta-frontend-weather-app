import axios from 'axios'

export const openWeatherMapBaseAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_BASE_URL,
  params: { appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_TOKEN },
})
