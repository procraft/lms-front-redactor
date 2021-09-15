import React, { CSSProperties } from 'react'

export type Modal2Props = React.HTMLAttributes<HTMLDivElement> & {
  title?: JSX.Element | string | null
  closeHandler?: () => void
  style?: CSSProperties
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void
}
