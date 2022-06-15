import React, { useEffect, useMemo, useState } from 'react'
import { AddWidgetModalButtonStyled } from '../../styles'
import { AddWidgetButtonButtonProps } from '../interfaces'

export const AddContentEditorWidgetButton: React.FC<
  AddWidgetButtonButtonProps
> = ({ closeHandler, object, addComponent, ...other }) => {
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
          tag: 'div',
          role: 'text-block-widget',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'h1',
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Heading',
                },
                components: [],
              },
            ],
          },
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'p',
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                components: [],
              },
            ],
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
          role="addHtmlEditor"
          {...other}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6V21H8V6H2V4H16V6H10ZM18 14V21H16V14H13V12H21V14H18Z" fill="black"/>
          </svg>
          Текстовый блок
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}
