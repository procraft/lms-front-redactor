import React, { useCallback, useContext, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { RedactorComponentObject } from '../../..'
import { AddContentEditorWidgetButton } from './buttons/AddContentEditorWidgetButton'
import { AddHeadWidgetButton } from './buttons/AddHead'
import { AddImageWidgetButton } from './buttons/AddImageWidgetButton'
import { AddVideoWidgetButton } from './buttons/AddVideoWidgetButton'
import { AddWidgetModalContext } from './Context'
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
  const context = useContext(AddWidgetModalContext)

  /**
   * Добавляем дочерний компонент
   */
  const addComponent = useCallback(
    (component: RedactorComponentObject) => {
      const components = [...object.components]

      components.push(component)

      return updateObject(object, {
        components,
      })
    },
    [object, updateObject]
  )

  const buttons = useMemo(() => {
    return context?.buttons.map((Button, index) => {
      return (
        <Button
          key={index}
          closeHandler={closeHandler}
          object={object}
          // updateObject={updateObject}
          addComponent={addComponent}
        />
      )
    })
  }, [addComponent, closeHandler, context?.buttons, object])

  return useMemo(() => {
    return ReactDOM.createPortal(
      <AddWidgetModalStyled
        modal
        preventClickEvent
        title="Вставить виджет"
        closeHandler={closeHandler}
        moveable
        role="redactor--modal"
      >
        <div role="secondaryButtons">
          <AddContentEditorWidgetButton
            closeHandler={closeHandler}
            object={object}
            // updateObject={updateObject}
            addComponent={addComponent}
          />
          <AddImageWidgetButton
            closeHandler={closeHandler}
            object={object}
            // updateObject={updateObject}
            addComponent={addComponent}
          />
          <AddVideoWidgetButton
            closeHandler={closeHandler}
            object={object}
            // updateObject={updateObject}
            addComponent={addComponent}
          />
          <AddHeadWidgetButton
            closeHandler={closeHandler}
            object={object}
            addComponent={addComponent}
          />
          {buttons}
        </div>
      </AddWidgetModalStyled>,
      document.body
    )
  }, [addComponent, buttons, closeHandler, object])
}
