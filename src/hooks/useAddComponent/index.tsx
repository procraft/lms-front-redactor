import { useCallback } from 'react'
import { InsertPlace, useAddComponentProps } from './interfaces'

/**
 * Вставка дочерних компонентов
 */
export const useAddComponent = () => {
  return useCallback(
    ({
      place,
      componentData,
      object,
      updateObject,
      parent,
      updateParent,
    }: useAddComponentProps) => {
      if (!componentData) {
        return
      }

      if (place === InsertPlace.Child) {
        const components = [...object.components]

        components.push(componentData.template)

        /**
         * Добавляем новый компонент в родительский
         */
        updateObject(object, {
          components,
        })
      } else {
        /**
         * Иначе в До или После
         */
        if (parent && updateParent) {
          const components = [...parent.components]

          const currentComponentIndex = components.indexOf(object)

          // TODO add snackbar
          if (currentComponentIndex === -1) {
            throw new Error('Can not find current object')
          }

          if (place === InsertPlace.Before) {
            components.splice(
              currentComponentIndex > 0 ? currentComponentIndex - 1 : 0,
              0,
              componentData.template
            )
          } else if (place === InsertPlace.After) {
            components.splice(
              currentComponentIndex + 1,
              0,
              componentData.template
            )
          }

          /**
           * Добавляем новый компонент в родительский
           */
          updateParent(parent, {
            components,
          })
        }
      }
    },
    []
  )
}
