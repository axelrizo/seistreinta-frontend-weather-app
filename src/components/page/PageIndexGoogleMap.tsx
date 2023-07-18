import { SearchInformationContext } from '@/context/SearchInformationContext'
import { MapsGoogleIframeMap } from '@/modules/maps/components/MapsGoogleIframeMap'
import React, { FC, useContext } from 'react'

export const PageIndexGoogleMap: FC = () => {
  const { city } = useContext(SearchInformationContext)
  return (
    <div style={{ padding: '16px 0' }}>
      <MapsGoogleIframeMap lat={city!.lat} lon={city!.lon} />
    </div>
  )
}
