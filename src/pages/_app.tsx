import { LayoutDefault } from '@/components/layout/LayoutDefault'
import '@/styles/normalize.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutDefault>
      <Component {...pageProps} />
    </LayoutDefault>
  )
}

export default appWithTranslation(App)
