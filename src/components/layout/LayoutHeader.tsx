import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

export const LayoutHeader: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
