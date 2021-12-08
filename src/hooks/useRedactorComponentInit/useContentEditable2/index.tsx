import React, { useEffect, useMemo, useState } from 'react'
import { ContentEditorTextToolbar } from '../../../components/ContentEditor/ContentProxy/ContentEditorTextToolbar'
import { nodeChildsToEditorComponentObjectComponents } from '../../../components/ContentEditor/ContentProxy/hooks/useContentEditable/helpers/nodeToEditorComponentObject'
import { getReactFiber } from '../../../helpers/ReactFiber'
import { useContentEditable2Props } from './interfaces'

/**
 * Редактирование компонентов в режиме инлайн
 */
export const useContentEditable2 = ({
  element,
  active,
  canContentEditable,
  activeSetter,
}: useContentEditable2Props) => {
  const [contentEditable, contentEditableSetter] = useState<boolean>(false)

  /**
   * Копия ноды нужна, чтобы перед редактированием склонировать исходный объект,
   * чтобы перед сохранением его можно было заменить
   */
  const [elementClone, elementCloneSetter] = useState<
    NonNullable<typeof element> | undefined
  >(undefined)

  /**
   * Флаг того, что контент был изменен и надо обновить стейт редактора
   */
  const [contentEdited, contentEditedSetter] = useState<boolean>(false)

  /**
   * Если элемент активен, то по клику переключаем в режим редактирования
   */
  useEffect(() => {
    if (!element || !active || !canContentEditable) {
      return
    }

    const onClick = (_event: MouseEvent) => {
      // console.log('useContentEditable2 onClick event', event)
      // console.log('useContentEditable2 onClick event.target', event.target)

      contentEditableSetter(true)
    }

    element.addEventListener('click', onClick)

    return () => {
      element.removeEventListener('click', onClick)

      /**
       * Выключаем режим редактирования
       */
      contentEditableSetter(false)
    }
  }, [active, canContentEditable, element])

  /**
   * Клонируем элемент в начале редактирования
   */
  useEffect(() => {
    if (!element || !contentEditable) {
      return
    }

    /**
     * Делаем клон текущего элемента
     */
    const clone = element.cloneNode()

    if (clone instanceof HTMLElement) {
      /**
       * Заменяем текущий элемент клоном
       */
      // const arr: ChildNode[] = []

      // element.childNodes.forEach((n) => {
      //   arr.push(n)
      // })

      // arr.forEach((node) => {
      //   clone.appendChild(node)

      //   element.appendChild(node.cloneNode(true))
      // })

      // arr.length = 0

      while (element.childNodes.length > 0) {
        const node = element.firstChild

        if (node !== null) {
          // arr.push(node);

          clone.appendChild(node)
        }
      }

      clone.childNodes.forEach((node) => {
        element.appendChild(node.cloneNode(true))
      })

      elementCloneSetter(clone)
    }

    return () => {
      //
    }
  }, [contentEditable, element])

  /**
   * Флаг того, что контент был изменен
   */
  // const

  /**
   * Навешиваем обсервер на изменение контента
   */
  useEffect(() => {
    /**
     * Если изменения появились, обсервер нам больше не нужен
     */
    if (!element || !contentEditable) {
      return
    }

    const config = {
      // attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    }

    // Create an observer instance linked to the callback function
    // const observer = new MutationObserver(this.onDOMSubtreeModified);
    const observer = new MutationObserver(() => {
      // onChangeDom(element)
      contentEditedSetter(true)
    })

    // Start observing the target node for configured mutations
    observer.observe(element, config)

    return () => {
      observer.disconnect()
    }
  }, [active, contentEditable, element])

  /**
   * Исходные элементы
   */
  // const [originalChildren, originalChildrenSetter] = useState<
  //   Element[] | undefined
  // >(undefined)

  /**
   * Если вышли из режима редактирования,
   * то сохраняем контент, если он был измен.
   */
  useEffect(() => {
    if (!element || !contentEditable) {
      return
    }

    /**
     * Эксперимент
     * Делаем клоны текущих элементов
     */

    // const originalChildrenClones: Element[] = []

    // const children = element.children

    // for (let i = 0; i < children.length; i++) {
    //   const item = children.item(i)

    //   if (item) {
    //     /**
    //      * Здесь надо бы клоны делать, но не у всех есть этот метод
    //      */
    //     originalChildrenClones.push(item)
    //   }
    // }

    // console.log('originalChildrenClones', originalChildrenClones)

    // originalChildrenSetter(originalChildrenClones)

    element.setAttribute('contentEditable', 'true')

    return () => {
      element.removeAttribute('contentEditable')
    }
  }, [contentEditable, element])

  /**
   * Сохранение измененного контента
   */
  useEffect(() => {
    if (!element || !contentEdited || !active || !elementClone) {
      return
    }

    return () => {
      const reactFiber = getReactFiber(element)

      // console.log('useContentEditable2 useEffect reactFiber', reactFiber)

      if (reactFiber) {
        // reactFiber.return?.pendingProps.object
        // reactFiber.return?.pendingProps.updateParent

        if (
          reactFiber.return?.pendingProps.object &&
          // reactFiber.return?.pendingProps.updateParent &&
          reactFiber.return?.pendingProps.updateObject
        ) {
          /**
           * Формируем конечную JSON-модель дочерних элементов
           */
          const { components } =
            nodeChildsToEditorComponentObjectComponents(element)

          /**
           * Прежде чем обновить стейт, надо повставлять копии исходных элементов
           */

          // const updatedChildren = element.childNodes ? [...element.childNodes.forEach ] : [];

          const updatedChildren: ChildNode[] = []

          element.childNodes.forEach((cn) => {
            updatedChildren.push(cn)
          })

          /**
           * Заменяем текущий элемент клоном
           */
          // element.replaceWith(elementClone)

          /**
           * Восстанавливаем изначальное состояние объекта
           */
          element.innerHTML = ''

          while (elementClone.childNodes.length > 0) {
            const node = elementClone.firstChild

            if (node) {
              element.appendChild(node)
            }
          }

          /**
           * Обновляем контент объекта
           */
          reactFiber.return?.pendingProps.updateObject(
            reactFiber.return?.pendingProps.object,
            {
              components,
            }
          )

          elementCloneSetter(undefined)
        }
      }

      contentEditedSetter(false)
    }
  }, [contentEdited, element, active, elementClone])

  const toolbar = useMemo(() => {
    return (
      <>
        {contentEditable ? (
          <ContentEditorTextToolbar
            activeSetter={activeSetter}
            // TODO Fix types
            contentEditableContainer={element as HTMLDivElement}
          />
        ) : null}
      </>
    )
  }, [activeSetter, contentEditable, element])

  return toolbar
}
