import { CitiesList } from '@/modules/cities/components/CitiesList'
import { FC, useState, useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import style from './LayoutMobileCitySearchAside.module.css'
import { useFetch } from '@/hooks/useFetch'
import { citiesServices } from '@/modules/cities/services/cities.services'
import { useFetchGetNotification } from '@/hooks/useFetchGetNotification'
import { useTranslation } from 'next-i18next'
import { SearchInformationContext } from '@/context/SearchInformationContext'

interface Props {
  isSearchAsideOpen: boolean
  closeAsideMenu: () => void
}

export const LayoutMobileCitySearchAside: FC<Props> = ({ isSearchAsideOpen, closeAsideMenu }) => {
  const asideOpenClass = isSearchAsideOpen ? style['search-aside--open'] : ''
  const [search, setSearch] = useState('')
  const { t } = useTranslation()
  const { updateCity } = useContext(SearchInformationContext)

  const {
    data,
    error,
    fetchData: getCountryNames,
    loading,
  } = useFetch({
    fetchFunction: citiesServices.getCities,
  })

  const { fetchData } = useFetchGetNotification({
    fetchFunction: getCountryNames,
    failText: t('notifications.getCountryNames.error'),
  })

  const handleKeyUpInInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData({ cityName: search })
    }
  }

  const handleChangeOnSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const handleClickACity = ({
    lat,
    lon,
    country,
    name,
  }: {
    lat: number
    lon: number
    name: string
    country: string
  }) => {
    updateCity({ lat, lon, country, name })
    closeAsideMenu()
  }

  return (
    <aside className={`${style['search-aside']} ${asideOpenClass}`}>
      <div className={`${style['search-aside__input-container']}`}>
        <div className={`${style['search-aside__icon-container']}`}>
          <AiOutlineSearch size={30} />
        </div>
        <input
          type="search"
          value={search}
          onKeyUp={(e) => handleKeyUpInInput(e)}
          onChange={(e) => handleChangeOnSearchInput(e)}
          className={`${style['search-aside__input']}`}
        />
      </div>
      <div className={`${style['search-aside__results-container']}`}>
        {loading ? (
          <div>{t('layout.search-loading')}</div>
        ) : Array.isArray(data) && data?.length < 1 ? (
          <div>{t('layout.no-data')}</div>
        ) : error ? (
          <div>{t('layout.error-search')}</div>
        ) : (
          <CitiesList cities={data} onClickACity={handleClickACity} />
        )}
      </div>
    </aside>
  )
}
