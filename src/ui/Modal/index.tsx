import React, { useMemo } from 'react'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import { LmsFrontRedactorModalProps } from './interfaces'
import {
  LmsFrontRedactorModalComponentsButtonsStyled,
  LmsFrontRedactorModalHeaderStyled,
  LmsFrontRedactorModalStyled,
} from './styles'

const LmsFrontRedactorModal: React.FC<LmsFrontRedactorModalProps> = ({
  title,
  close,
  buttons,
  secondaryButtons,
  children,
  containerRef,
  ...other
}) => {
  return useMemo(() => {
    return (
      <>
        <LmsFrontRedactorModalStyled ref={containerRef} role="redactor--modal" {...other}>
          <LmsFrontRedactorModalHeaderStyled>
            <h2 className="title">{title}</h2>

            <div className="buttons">
              {buttons}

              <IconButton onClick={close} role="modal-close">
                <CloseIcon />
              </IconButton>
            </div>
          </LmsFrontRedactorModalHeaderStyled>

          <LmsFrontRedactorModalComponentsButtonsStyled role="secondaryButtons">
            {secondaryButtons}
          </LmsFrontRedactorModalComponentsButtonsStyled>

          {children}
        </LmsFrontRedactorModalStyled>
      </>
    )
  }, [buttons, children, close, other, secondaryButtons, title, containerRef])
}

export default LmsFrontRedactorModal
