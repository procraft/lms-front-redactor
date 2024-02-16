import React, { useEffect, useMemo, useState } from 'react'
import { AddWidgetModalButtonStyled } from '../styles'
import { AddWidgetButtonButtonProps } from './interfaces'
import { RedactorComponentObject } from '../../../..'

export type CustomBlockButtonProps = AddWidgetButtonButtonProps & {
  title: JSX.Element
  component: RedactorComponentObject
}

export const CustomBlockButton: React.FC<CustomBlockButtonProps> = (
  { closeHandler, object, addComponent, title, component, ...other }
) => {
  const buttonState = useState<HTMLButtonElement | null>(null)
  const button = buttonState[0]

  useEffect(() => {
    if (!button) return

    const onClick = () => {
      addComponent(component)
      closeHandler()
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [button, buttonState, object, component, closeHandler, addComponent])

  return useMemo(() => (
    <AddWidgetModalButtonStyled ref={buttonState[1]} role="addHtmlEditor" {...other}>
      {title}
    </AddWidgetModalButtonStyled>
  ), [buttonState, title, other])
}
