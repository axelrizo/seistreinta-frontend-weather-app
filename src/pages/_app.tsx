import { LayoutDefault } from '@/components/layout/LayoutDefault'
import { NotificationProvider } from '@/context/NotificationContext'
import { SearchInformationProvider } from '@/context/SearchInformationContext'
import { ThemeProvider } from '@/context/ThemeContext'
import '@/styles/base.css'
import '@/styles/colors.css'
import '@/styles/normalize.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <SearchInformationProvider>
          <LayoutDefault>
            <Component {...pageProps} />
          </LayoutDefault>
        </SearchInformationProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
