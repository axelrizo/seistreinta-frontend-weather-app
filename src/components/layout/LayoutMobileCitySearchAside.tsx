import { CitiesList } from '@/modules/cities/components/CitiesList'
import { FC, useState, useContext, useEffect, useRef } from 'react'
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
  const [search, setSearch] = useState('')
  const { t } = useTranslation()
  const { updateCity } = useContext(SearchInformationContext)
  const searchInput = useRef<HTMLInputElement>(null)

  const asideContainerOpenClass = isSearchAsideOpen ? style['search-aside__container--open'] : ''
  const asideOpenClass = isSearchAsideOpen ? style['search-aside--open'] : ''

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
    if (e.currentTarget.value.length > 3) fetchData({ cityName: search })
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

  const handleClickMask = () => {
    closeAsideMenu()
  }

  useEffect(() => {
    if (isSearchAsideOpen) searchInput?.current?.focus()
  }, [isSearchAsideOpen])

  return (
    <aside className={`${style['search-aside']} ${asideOpenClass}`}>
      <div onClick={handleClickMask} className={`${style['search-aside__mask']}`} />
      <div className={`${style['search-aside__container']} ${asideContainerOpenClass}`}>
        <div className={`${style['search-aside__input-container']}`}>
          <div className={`${style['search-aside__icon-container']}`}>
            <AiOutlineSearch size={30} />
          </div>
          <input
            type="search"
            value={search}
            ref={searchInput}
            onKeyUp={(e) => handleKeyUpInInput(e)}
            onChange={(e) => handleChangeOnSearchInput(e)}
            className={`${style['search-aside__input']}`}
          />
        </div>
        <div className={`${style['search-aside__results-container']}`}>
          {loading ? (
            <div>{t('layout.search-loading')}</div>
          ) : error ? (
            <div>{t('layout.error-search')}</div>
          ) : Array.isArray(data) && data?.length < 1 ? (
            <div>{t('layout.no-data')}</div>
          ) : (
            <CitiesList cities={data} onClickACity={handleClickACity} />
          )}
        </div>
      </div>
    </aside>
  )
}
