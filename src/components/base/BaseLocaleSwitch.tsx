import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const BaseLocaleSwitch = () => {
  const { locales, asPath } = useRouter()

  const localeButtons = locales?.map((locale, index) => {
    const isLastItem = index === locales?.length - 1

    return (
      <span key={`local-btn-${index}`}>
        <Link href={asPath} scroll={false} locale={locale}>
          {locale}
        </Link>

        {!isLastItem && <span>|</span>}
      </span>
    )
  })

  return <>{localeButtons}</>
}
