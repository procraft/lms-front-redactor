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
          role: 'contentButton',
          style: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: '16px',
            fontWeight: '500',
            borderRadius: '4px',
            lineHeight: '100%',
            display: 'inline-block',
            textDecoration: 'none',
            textAlign: 'center',
            padding: '10px 20px',
            backgroundColor: '#2563EB',
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
        <AddWidgetModalButtonStyled
          ref={buttonState[1]}
          role="addButton"
          {...other}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C18.075 4 23 6.686 23 10V14C23 17.314 18.075 20 12 20C6.033 20 1.176 17.409 1.005 14.177L1 14V10C1 6.686 5.925 4 12 4ZM12 16C8.28 16 4.99 14.993 3 13.45V14C3 15.882 6.883 18 12 18C17.01 18 20.838 15.97 20.995 14.118L21 14L21.001 13.45C19.011 14.992 15.721 16 12 16ZM12 6C6.883 6 3 8.118 3 10C3 11.882 6.883 14 12 14C17.117 14 21 11.882 21 10C21 8.118 17.117 6 12 6Z"
              fill="black"
            />
          </svg>
          Кнопка
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}
