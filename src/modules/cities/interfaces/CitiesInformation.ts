export interface CityInformation {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
  local_names?: LocalNames
}

export interface LocalNames {
  [locale_code: string]: string
}
