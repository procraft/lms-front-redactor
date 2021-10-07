import React, { useEffect, useState } from 'react'
import { UiButtonProps } from './interfaces'
import { UiButtonStyled } from './styles'

/**
 * Кнопка с нативным обработчиком событий
 */
export const UiButton: React.FC<UiButtonProps> = ({
  children,
  onClick,
  ...other
}) => {
  const [element, elementSetter] = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!element) {
      return
    }

    onClick && element.addEventListener('click', onClick)

    return () => {
      onClick && element.removeEventListener('click', onClick)
    }
  }, [element, onClick])

  return (
    <UiButtonStyled {...other} ref={elementSetter}>
      {children}
    </UiButtonStyled>
  )
}
