import React, { useEffect, useMemo, useState } from 'react'
import { AddWidgetModalButtonStyled } from '../../styles'
import { AddWidgetButtonButtonProps } from '../interfaces'

export const AddImageWidgetButton: React.FC<AddWidgetButtonButtonProps> = ({
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
          tag: 'img',
          src: '',
        },
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
        <AddWidgetModalButtonStyled
          ref={buttonState[1]}
          role="addImage"
          {...other}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 11.1L7 9.1L12.5 14.6L16 11.1L19 14.1V5H5V11.1ZM5 13.929V19H8.1L11.086 16.015L7 11.929L5 13.929ZM10.929 19H19V16.929L16 13.929L10.929 19ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM15.5 10C15.1022 10 14.7206 9.84196 14.4393 9.56066C14.158 9.27936 14 8.89782 14 8.5C14 8.10218 14.158 7.72064 14.4393 7.43934C14.7206 7.15804 15.1022 7 15.5 7C15.8978 7 16.2794 7.15804 16.5607 7.43934C16.842 7.72064 17 8.10218 17 8.5C17 8.89782 16.842 9.27936 16.5607 9.56066C16.2794 9.84196 15.8978 10 15.5 10Z" fill="black"/>
          </svg>
          Картинка
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}
