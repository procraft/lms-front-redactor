import React, { useCallback, useMemo } from 'react'
import { useOnChangeStylesProps } from './interfaces'

/**
 * Обработчик для текстовых полей на обновление стилей компонента
 */
export const useOnChangeStyles: (props: useOnChangeStylesProps) => {
  onChangeStyles: (event: React.ChangeEvent<HTMLInputElement>) => void
} = ({ object, updateObject }) => {
  const onChangeStyles = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const value = event.target.value

      name &&
        updateObject(object, {
          props: {
            ...object.props,
            style: {
              ...object.props.style,
              [name]: value,
            },
          },
        })
    },
    [object, updateObject]
  )

  return useMemo(() => {
    return {
      onChangeStyles,
    }
  }, [onChangeStyles])
}
