import React, { FC } from 'react'

interface Props {
  onClickChangeTheme: () => void
}

export const BaseThemeSwitch: FC<Props> = ({ onClickChangeTheme }) => {
  return <div onClick={() => onClickChangeTheme()}>BaseThemeSwitch</div>
}
