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
          <div
            style={{
              border: '1px solid',
              padding: 10,
              width: 85,
              margin: '0 auto',
              borderRadius: 5,
            }}
          >
            Head
            <br />
            <br />
          </div>
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}