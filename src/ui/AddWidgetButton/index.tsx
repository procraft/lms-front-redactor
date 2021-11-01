import React, { useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { IconButton } from '@procraft/ui/dist/IconButton'
import { AddWidgetModal } from './AddWidgetModal'
import { AddWidgetButtonProps } from './interfaces'
import { SvgIconPlus } from '../SvgIcon/Plus'

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

    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = element.getBoundingClientRect()
    const offsetTop = elemRect.top - bodyRect.top
    const offsetLeft = elemRect.left - bodyRect.left

    return {
      border: '1px solid grey',
      width: 28,
      height: 28,
      background: 'rgb(96, 125, 139)',
      color: 'white',
      position: 'absolute',

      /**
       * Ельзя ориентироваться на element.offsetTop, так как эти параметры перебиваются
       * элементами с position: relative;
       */
      // top: element.offsetTop + element.offsetHeight / 2 - 15,
      // left: element.offsetLeft + element.offsetWidth / 2 - 15,
      top: offsetTop + (element.offsetHeight / 2 - 15),
      left: offsetLeft + (element.offsetWidth / 2 - 15),
    }
  }, [element])

  return useMemo(() => {
    return (
      <>
        {ReactDOM.createPortal(
          <IconButton callback={onClick} style={style}>
            <SvgIconPlus />
          </IconButton>,
          document.body
        )}
        {modal}
      </>
    )
  }, [onClick, style, modal])
}
