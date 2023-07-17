import React, { FC } from 'react'

interface Props {
  lat: number
  lon: number
}

export const MapsGoogleIframeMap: FC<Props> = ({ lat, lon }) => {
  return (
    <iframe
      src={`https://www.google.com/maps?q=${lat},${lon}&hl=es&z=6&output=embed`}
      style={{ width: '100%' }}
      height="450"
      loading="lazy"
    ></iframe>
  )
}
