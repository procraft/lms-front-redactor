import React, { useEffect, useMemo, useState } from 'react'
import { Section } from '../../../../../components/Section'
import { AddBlockModal2ButtonStyled } from './styles'
import { AddBlockModal2ButtonProps } from './interfaces'

/**
 * Кнопка добавления блока
 */
export const AddBlockModal2Button: React.FC<AddBlockModal2ButtonProps> = ({
  object,
  updateParent,
  parent,
  direction,
  closeHandler,
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

      if (direction === 'Top') {
        components.unshift(object)
      } else if (direction === 'Bottom') {
        components.push(object)
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
    parent,
    parent.components,
    updateParent,
  ])

  return useMemo(() => {
    return (
      <AddBlockModal2ButtonStyled {...other} ref={elementState[1]}>
        <Section
          inEditMode={false}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          wrapperContainer={undefined}
          object={object}
        />
      </AddBlockModal2ButtonStyled>
    )
  }, [elementState, object, other])
}
