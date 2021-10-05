import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import { AddContentEditorWidgetButton } from './buttons/AddContentEditorWidgetButton'
import { AddImageWidgetButton } from './buttons/AddImageWidgetButton'
import { AddWidgetModalProps } from './interfaces'
import { AddWidgetModalStyled } from './styles'

/**
 * Модалка выбора и вставки виджета
 */
export const AddWidgetModal: React.FC<AddWidgetModalProps> = ({
  object,
  updateObject,
  closeHandler,
}) => {
  return useMemo(() => {
    return ReactDOM.createPortal(
      <AddWidgetModalStyled
        modal={true}
        preventClickEvent={true}
        title="Вставить виджет"
        closeHandler={closeHandler}
      >
        <AddContentEditorWidgetButton
          closeHandler={closeHandler}
          object={object}
          updateObject={updateObject}
        />
        <AddImageWidgetButton
          closeHandler={closeHandler}
          object={object}
          updateObject={updateObject}
        />
      </AddWidgetModalStyled>,
      document.body
    )
  }, [closeHandler, object, updateObject])
}
