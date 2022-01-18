/* eslint-disable no-console */
import React, { useCallback, useContext, useMemo } from 'react'
import { useRedactorRenderComponentsProps } from './interfaces'
import { RedactorComponentProps } from '../../RedactorComponent/interfaces'
import { useState } from 'react'
import { LmsFrontRedactorContext } from '../../Context'
import { SavedBlock } from './SavedBlock'

/**
 * В цикле выводим дочерние компоненты
 */
const useRedactorRenderComponents = (
  props: useRedactorRenderComponentsProps
) => {
  const { object, updateObject, inEditMode, wrapperContainer } = props

  const context = useContext(LmsFrontRedactorContext)

  const [objectState] = useState({
    updateObject,
  })

  /**
   * Сейчас используем такой хак, чтобы в updateObjectChildComponent не передавать updateObject,
   * который каждый раз новый при обновлении корневого объекта.
   * Это позволяет ререндерить только текущий объект и прямых оптомков 1-го уровня.
   * Но в идеале должны ререндериться только текущие объекты, без дочерних.
   */
  objectState.updateObject = updateObject

  // TODO: Надо учитывать, что у нас выполняется цикл для вывода отдельных компонентов.
  // При этом изменение любого из этих компонентов должно отправляться в родительский объект.
  // TODO: Из-за этого метода у нас происходит ререндеринг всех компонентов.
  const updateObjectChildComponent: RedactorComponentProps['updateObject'] =
    useCallback(
      (current, data) => {
        // console.log('useRedactorRenderComponents updateObject object', object)

        console.log(
          'useRedactorRenderComponents updateObject current, data',
          current,
          data
        )
        // console.log('useRedactorRenderComponents updateObject current', current)
        // console.log('useRedactorRenderComponents updateObject data', data)

        /**
         * Находим объект в массиве компонентов
         */

        const components = [...object.components]

        const componentIndex = components.indexOf(current)

        if (componentIndex === -1) {
          console.error('Не был найден текущий компонент в массиве компонентов')
          return
        }

        // const component = components[componentIndex];

        /**
         * Обновляем данные объекта в массиве данных
         */
        components[componentIndex] = {
          ...current,
          ...data,
        }

        // console.log('useRedactorRenderComponents updateObject component', component)

        /**
         * Обновлять мы будем именно текущий объект.
         * Для этого в нем найдем нужный нам компонент и наверх вернем обновленный массив компонентов.
         */

        objectState.updateObject(object, {
          components,
        })

        return
      },
      [object, objectState]
    )

  return useMemo(() => {
    /**
     * Важно не возвращать пустой массив, так как есть компоненты,
     * которым children не позволителен никак. Например img, br, hr и т.п.
     * Если им передать children={[]}, то реакт разваливается.
     */
    if (!object.components.length) {
      return null
    }

    return object.components.reduce<React.ReactNode[]>((curr, next, index) => {
      const Component = context?.getRedactorObjectComponent({
        object: next,
      })

      if (Component) {
        const renderProps = {
          object: next,
          updateObject: updateObjectChildComponent,
          inEditMode: inEditMode,
          wrapperContainer: wrapperContainer,
          parent: object,
          updateParent: updateObject,
        }

        curr.push(
          next.id ? (
            <SavedBlock
              key={`${next.id}--${index}`}
              id={next.id}
              Component={Component}
              {...renderProps}
            />
          ) : (
            <Component key={index} {...renderProps} />
          )
        )
      }

      return curr
    }, [])
  }, [
    object,
    context,
    updateObjectChildComponent,
    inEditMode,
    wrapperContainer,
    updateObject,
  ])
}

export default useRedactorRenderComponents
