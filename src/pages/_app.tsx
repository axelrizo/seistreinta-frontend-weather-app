import { LayoutDefault } from '@/components/layout/LayoutDefault'
import { NotificationProvider } from '@/context/NotificationContext'
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
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
