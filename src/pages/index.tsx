import { BasePage } from '@/components/base/BasePage'
import { PageIndexGoogleMap } from '@/components/page/PageIndexGoogleMap'
import { PageIndexHero } from '@/components/page/PageIndexHero'
import { PageIndexNotSelectedCity } from '@/components/page/PageIndexNotSelectedCity'
import { SearchInformationContext } from '@/context/SearchInformationContext'
import { useFetch } from '@/hooks/useFetch'
import { useFetchGetNotification } from '@/hooks/useFetchGetNotification'
import { weatherServices } from '@/modules/weather/services/weather.services'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useContext, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

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

  useEffect(() => {
    if (!city) return
    fetchData({ lon: city!.lon, lat: city!.lat })
  }, [city])

  return (
    <BasePage>
      {city ? (
        <>
          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : error ? (
            <div>{t('layout.error-search')}</div>
          ) : !data ? (
            <div>{t('layout.no-data')}</div>
          ) : (
            <>
              <PageIndexHero weather={data} />
              {/* <PageIndexGoogleMap /> */}
            </>
          )}
        </>
      ) : (
        <PageIndexNotSelectedCity />
      )}
    </BasePage>
  )
}
