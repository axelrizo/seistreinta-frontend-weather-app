import { FC } from 'react'
import { LayoutHeaderDesktop } from './LayoutHeaderDesktop'
import { LayoutHeaderMobile } from './LayoutHeaderMobile'

export const LayoutHeader: FC = () => {
  return (
    <>
      <LayoutHeaderMobile />
      <LayoutHeaderDesktop />
    </>
  )
}
