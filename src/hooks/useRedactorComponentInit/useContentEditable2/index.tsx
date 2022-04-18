import React, { useEffect, useMemo, useState } from 'react'
import { ContentEditorTextToolbar } from '../../../components/ContentEditor/ContentProxy/ContentEditorTextToolbar'
import { nodeChildsToEditorComponentObjectComponents } from '../../../components/ContentEditor/ContentProxy/hooks/useContentEditable/helpers/nodeToEditorComponentObject'
import { getReactFiber } from '../../../helpers/ReactFiber'
import { useContentEditable2Props } from './interfaces'

/**
 * Рекурсивное клонирование ноды с пользовательскими свойствами
 */
function nodeDeepClone(node: ChildNode) {
  /**
   * Делаем клон узла
   */
  const clone = node.cloneNode()

  /**
   * Копируем все пользовательские свойства
   */
  Object.assign(clone, { ...node })

  /**
   * Если есть дочерние элементы, клонируем и их
   */
  if (node.childNodes.length) {
    node.childNodes.forEach((child) => {
      const childClone = nodeDeepClone(child)

      clone.appendChild(childClone)
    })
  }

  return clone
}

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
     * Делаем клон текущего элемента.
     */
    const clone = element.cloneNode()

    if (clone instanceof HTMLElement) {
      /**
       * Делаем клоны всех дочерних элементов и заменяем ими оригинальные.
       * А оригинальные перекидываем в клон
       */
      element.childNodes.forEach((child) => {
        const childClone = nodeDeepClone(child)

        /**
         * Заменяем оригинальный узел клоном.
         * В результат попадает оригинальный узел.
         */
        element.replaceChild(childClone, child)

        /**
         * Закидываем оригинальный узел в клон
         */
        clone.appendChild(child)
      })

      /**
       * Устанавливаем наш клон в стейт
       */
      elementCloneSetter(clone)
    }
  }, [contentEditable, element])

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

    const config: MutationObserverInit = {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    }

    /**
     * Навешиваем обсервер, который следит за изменениями,
     * и если они возникли, то устанавливается флаг.
     */
    const observer = new MutationObserver((event) => {
      /**
       * Не реагируем на изменение атрибута редактирования,
       * иначе мы только переключились в редактирование, у нас еще ничего
       * не изменилось, но уже есть флаг того, что что-то поменялось.
       */
      if (
        event.length === 1 &&
        event[0].type === 'attributes' &&
        event[0].attributeName === 'contenteditable'
      ) {
        return
      }

      contentEditedSetter(true)
    })

    observer.observe(element, config)

    return () => {
      observer.disconnect()
    }
  }, [active, contentEditable, element])

  /**
   * Если вышли из режима редактирования,
   * то сохраняем контент, если он был измен.
   */
  useEffect(() => {
    if (!element || !contentEditable) {
      return
    }

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

      if (reactFiber) {
        if (
          reactFiber.return?.pendingProps?.object &&
          reactFiber.return?.pendingProps.updateObject
        ) {
          /**
           * Формируем конечную JSON-модель дочерних элементов
           */
          const { components } =
            nodeChildsToEditorComponentObjectComponents(element)

          /**
           * Восстанавливаем изначальное состояние узла из клона.
           * Это обязательно надо делать, так как после передачи
           * нового состояния в реакт, тот пытается перерисовать свои узлы,
           * и если не находт какой-либо, то разваливается с ошибкой.
           * А новые узлы, созданные не им, игнорирует.
           * Поэтому мы восстанавливаем полностью исходный узел, чтобы реакт его перерисовал
           * полностью в соответствии с новым состоянием.
           */

          /**
           * Удаляем весь внутренний контент
           */
          element.innerHTML = ''

          while (elementClone.childNodes.length > 0) {
            const node = elementClone.firstChild

            if (node === null) {
              break
            }

            element.appendChild(node)
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
        }
      }

      elementCloneSetter(undefined)
      contentEditedSetter(false)
    }
  }, [contentEdited, element, active, elementClone])

  const toolbar = useMemo(() => {
    return (
      <>
        {contentEditable && element ? (
          <ContentEditorTextToolbar
            activeSetter={activeSetter}
            // TODO Fix types
            contentEditableContainer={element}
          />
        ) : null}
      </>
    )
  }, [activeSetter, contentEditable, element])

  return toolbar
}
