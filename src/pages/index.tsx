import { BasePage } from '@/components/base/BasePage'
import { PageIndexForecast } from '@/components/page/PageIndexForecast'
import { PageIndexGoogleMap } from '@/components/page/PageIndexGoogleMap'
import { PageIndexHero } from '@/components/page/PageIndexHero'
import { PageIndexNotSelectedCity } from '@/components/page/PageIndexNotSelectedCity'
import { PageIndexTodayHightlight } from '@/components/page/PageIndexTodayHightlight'
import { SearchInformationContext } from '@/context/SearchInformationContext'
import { useFetch } from '@/hooks/useFetch'
import { useFetchGetNotification } from '@/hooks/useFetchGetNotification'
import { weatherServices } from '@/modules/weather/services/weather.services'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useContext, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import style from './index.module.css'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function Home() {
  const { t } = useTranslation()
  const { city } = useContext(SearchInformationContext)
  const { data, error, fetchData: fetchForecast, loading } = useFetch({ fetchFunction: weatherServices.getForecast })

  const { fetchData } = useFetchGetNotification({
    fetchFunction: fetchForecast,
    failText: t('index.not-lan-lon-found'),
  })

  const {
    data: forecastData,
    error: forecastError,
    fetchData: fetchFutureForecast,
    loading: forecastLoading,
  } = useFetch({ fetchFunction: weatherServices.get5DayForecast })

  const { fetchData: fetchDataFutureForecast } = useFetchGetNotification({
    fetchFunction: fetchFutureForecast,
    failText: t('index.not-lan-lon-found'),
  })

  useEffect(() => {
    if (!city) return
    fetchData({ lon: city.lon, lat: city.lat })
    fetchDataFutureForecast({ lon: city.lon, lat: city.lat })
  }, [city])

  return (
    <BasePage>
      {city ? (
        <>
          {loading || forecastLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : error || forecastError ? (
            <div>{t('layout.error-search')}</div>
          ) : !data || !forecastData ? (
            <div>{t('layout.no-data')}</div>
          ) : (
            <>
              <div className={`${style['index__weather-info']}`}>
                <PageIndexHero weather={data} />
                <PageIndexTodayHightlight weather={data} />
              </div>
              <PageIndexForecast forecast={forecastData} />
              <PageIndexGoogleMap />
            </>
          )}
        </>
      ) : (
        <PageIndexNotSelectedCity />
      )}
    </BasePage>
  )
}
