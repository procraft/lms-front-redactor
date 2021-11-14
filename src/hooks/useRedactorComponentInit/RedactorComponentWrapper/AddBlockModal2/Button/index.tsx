import React, { useEffect, useMemo, useState } from 'react'
import { Section } from '../../../../../components/Section'
import { AddBlockModal2ButtonStyled } from './styles'
import { AddBlockModal2ButtonProps } from './interfaces'

/**
 * Кнопка добавления блока
 */
export const AddBlockModal2Button: React.FC<AddBlockModal2ButtonProps> = ({
  object,
  newObject,
  updateParent,
  parent,
  direction,
  closeHandler,
  title,
  ...other
}) => {
  const elementState = useState<HTMLDivElement | null>()

  useEffect(() => {
    if (!elementState[0]) {
      return
    }

    const button = elementState[0]

    const onClick = (event: MouseEvent) => {
      event.stopPropagation()

      /**
       * Добавляем блок
       */
      const components = [...parent.components]

      const index = parent.components.findIndex((n) => n === object)
      if (index === -1) {
        console.error('Can not get object index')
        return
      }

      if (direction === 'Top') {
        components.splice(index, 0, newObject)
      } else if (direction === 'Bottom') {
        components.splice(index + 1, 0, newObject)
      }

      /**
       * Обновляем родителя
       */
      updateParent(parent, { components })

      /**
       * Закрываем блок.
       */

      closeHandler()
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [
    closeHandler,
    direction,
    elementState,
    object,
    newObject,
    parent,
    parent.components,
    updateParent,
  ])

  return useMemo(() => {
    return (
      <AddBlockModal2ButtonStyled
        title={title}
        {...other}
        ref={elementState[1]}
      >
        <Section
          inEditMode={false}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          wrapperContainer={undefined}
          object={newObject}
        />
      </AddBlockModal2ButtonStyled>
    )
  }, [elementState, newObject, title, other])
}
