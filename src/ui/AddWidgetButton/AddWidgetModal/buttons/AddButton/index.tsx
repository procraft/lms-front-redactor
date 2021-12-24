import React, { useEffect, useMemo, useState } from 'react'
import { AddWidgetModalButtonStyled } from '../../styles'
import { AddWidgetButtonButtonProps } from '../interfaces'

export const AddButtonWidgetButton: React.FC<AddWidgetButtonButtonProps> = ({
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
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          style: {
            borderRadius: '4px',
            lineHeight: '120%',
            display: 'inline-block',
            textDecoration: 'none',
            textAlign: 'center',
            padding: '10px 20px',
            backgroundColor: '#0087ee',
            color: 'rgb(255, 255, 255)',
            width: 'auto',
            maxWidth: '100%',
            overflowWrap: 'break-word',
            position: 'relative',
            border: 'none',
          },
          tag: 'button',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              text: 'Отправить',
            },
            components: [],
          },
        ],
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
            Button
            <br />
            <br />
          </div>
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}
