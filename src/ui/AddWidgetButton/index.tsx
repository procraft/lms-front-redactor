import React, { useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { UiIconButton } from '../UiIconButton'
import { AddWidgetModal } from './AddWidgetModal'
import { AddWidgetButtonProps } from './interfaces'

/**
 * Кнопка добавления дочернего виджета
 */
export const AddWidgetButton: React.FC<AddWidgetButtonProps> = ({
  element,
  object,
  updateObject,
  activeSetter,
}) => {
  const [opened, openedSetter] = useState(false)

  const closeHandler = useCallback(() => {
    activeSetter(false)
    openedSetter(false)
  }, [activeSetter])

  const onClick = useCallback((event: MouseEvent) => {
    event.stopPropagation()

    openedSetter(true)
  }, [])

  const modal = useMemo(() => {
    if (!opened) {
      return
    }

    return (
      <AddWidgetModal
        object={object}
        updateObject={updateObject}
        closeHandler={closeHandler}
      />
    )
  }, [object, opened, updateObject, closeHandler])

  const style = useMemo<React.CSSProperties>(() => {
    //
    return {
      border: '1px solid grey',
      width: 28,
      height: 28,
      background: 'rgb(96, 125, 139)',
      color: 'white',

      position: 'absolute',
      top: element.offsetTop + element.offsetHeight / 2 - 15,
      left: element.offsetLeft + element.offsetWidth / 2 - 15,
    }
  }, [element])

  return useMemo(() => {
    return (
      <>
        {ReactDOM.createPortal(
          <UiIconButton callback={onClick} style={style}>
            <>+</>
          </UiIconButton>,
          document.body
        )}
        {modal}
      </>
    )
  }, [onClick, style, modal])
}
