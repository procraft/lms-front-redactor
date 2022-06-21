import React, { useEffect, useMemo, useState } from 'react'
import { AddWidgetModalButtonStyled } from '../../styles'
import { AddWidgetButtonButtonProps } from '../interfaces'

export const AddHeadWidgetButton: React.FC<AddWidgetButtonButtonProps> = ({
  closeHandler,
  object,
  addComponent,
  ...other
}) => {
  const buttonState = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!buttonState[0]) {
      return
    }

    const button = buttonState[0]

    const onClick = () => {
      //

      addComponent({
        name: 'Head',
        component: 'Head',
        props: {},
        components: [],
      })

      closeHandler()
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [buttonState, object, closeHandler, addComponent])

  return useMemo(() => {
    return (
      <>
        <AddWidgetModalButtonStyled ref={buttonState[1]} {...other}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" fill="black" />
          </svg>
          Заголовок
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}
