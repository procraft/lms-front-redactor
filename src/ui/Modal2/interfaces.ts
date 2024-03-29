import React, { CSSProperties } from 'react'
import { Modal2StyledProps } from './styles'

export type Modal2Props = React.HTMLAttributes<HTMLDivElement> & {
  title?: JSX.Element | string | null
  closeHandler?: () => void
  style?: CSSProperties
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  // onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void
  modal: boolean

  collapsedElement?: (toggleCollapse: () => void) => React.ReactNode

  /**
   * Прерываем обработчики на клик (чтобы за пределами окна ничего не срабатывало)
   */
  preventClickEvent: boolean

  /**
   * Можно ли перетаскивать окно
   */
  moveable: boolean
} & Modal2StyledProps
