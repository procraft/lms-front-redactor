import React, { useMemo } from 'react'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import { Modal2Props } from './interfaces'
import { Modal2ContentStyled, Modal2Styled, Modal2TitleStyled } from './styles'

export * from './interfaces'

/**
 * Модалка для нового редактора
 */
export const Modal2: React.FC<Modal2Props> = ({
  title,
  children,
  closeHandler,
  ...other
}) => {
  return useMemo(() => {
    return (
      <Modal2Styled {...other}>
        {title ? (
          <Modal2TitleStyled>
            <h1>{title}</h1>

            {closeHandler ? (
              <IconButton onClick={closeHandler}>
                <CloseIcon />
              </IconButton>
            ) : null}
            <hr />
          </Modal2TitleStyled>
        ) : null}
        <Modal2ContentStyled>{children}</Modal2ContentStyled>
      </Modal2Styled>
    )
  }, [other, title, closeHandler, children])
}
