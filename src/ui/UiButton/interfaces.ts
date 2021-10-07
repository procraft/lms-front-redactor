import { ButtonHTMLAttributes } from 'react'
import { UiButtonStyledProps } from './styles'

export type UiButtonProps = UiButtonStyledProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
    onClick: (event: MouseEvent) => void
  }
