import React, { useEffect, useMemo, useState } from 'react'
// import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import { Modal2Props } from './interfaces'
import { Modal2ContentStyled, Modal2Styled, Modal2TitleStyled } from './styles'
import { UiIconButton } from '../UiIconButton'

export * from './interfaces'

/**
 * Модалка для нового редактора
 */
export const Modal2: React.FC<Modal2Props> = ({
  title,
  children,
  closeHandler,
  preventClickEvent,
  ...other
}) => {
  const elementState = useState<HTMLDivElement | null>(null)

  /**
   * Навешиваем прерыватель событий.
   */
  useEffect(() => {
    if (!preventClickEvent || !elementState[0]) {
      return
    }

    const onClick = (event: MouseEvent) => {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Modal2 onClick stopPropagation target', event.target)
        // eslint-disable-next-line no-console
        console.log(
          'Modal2 onClick stopPropagation currentTarget',
          event.currentTarget
        )
      }

      event.stopPropagation()
    }

    elementState[0]?.addEventListener('click', onClick)

    return () => {
      elementState[0]?.removeEventListener('click', onClick)
    }
  }, [elementState, preventClickEvent])

  return useMemo(() => {
    return (
      <Modal2Styled ref={elementState[1]} {...other}>
        {title ? (
          <Modal2TitleStyled>
            <h1>{title}</h1>

            {closeHandler ? (
              <UiIconButton callback={closeHandler}>
                <CloseIcon />
              </UiIconButton>
            ) : null}
            <hr />
          </Modal2TitleStyled>
        ) : null}
        <Modal2ContentStyled>{children}</Modal2ContentStyled>
      </Modal2Styled>
    )
  }, [other, title, closeHandler, children, elementState])
}
