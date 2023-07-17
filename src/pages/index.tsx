import { BasePage } from '@/components/base/BasePage'
import { PageIndexHero } from '@/components/page/PageIndexHero'
import { PageIndexNotSelectedCity } from '@/components/page/PageIndexNotSelectedCity'
import { SearchInformationContext } from '@/context/SearchInformationContext'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useContext } from 'react'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function Home() {
  const { city } = useContext(SearchInformationContext)

  return <BasePage>{city ? <PageIndexHero /> : <PageIndexNotSelectedCity />} </BasePage>
}
