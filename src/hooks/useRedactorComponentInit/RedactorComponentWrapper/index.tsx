import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { RedactorComponentObject } from '../../../RedactorComponent/interfaces'
import AddBlockModal from './AddBlockModal'
import AddBlockModal2 from './AddBlockModal2'
import { createSvgElement } from './helpers/createSvgElement'
import { useAddBlockButton } from './hooks/useAddBlockButton'
import { useAddBlockButtonProps } from './hooks/useAddBlockButton/interfaces'
import { RedactorComponentWrapperProps } from './interfaces'
import LmsFrontRedactorStateEditor from './StateEditor'
import { RedactorComponentWrapperGlobalStyled } from './styles'
import { RedactorComponentWrapperHTMLEditor } from './HtmlEditor'
import { findComponentInParent } from '../../../helpers/findComponentInParent'
import { RedactorComponentWrapperToolbar } from './ui/Toolbar'

/**
 * Враппер для компонентов редактора.
 * Рендерит элементы управления.
 */
export const RedactorComponentWrapper: React.FC<
  RedactorComponentWrapperProps
> = ({
  element,
  object,
  updateObject,
  closeEditor,
  container = global.window?.document.body,
  parent,
  updateParent,
  active,
  wrapperTitle,
  hovered,
  canEditHTML,
  isDirty,
  updateTemplate,
  allowChildComponents,
}) => {
  const wrapper = useMemo(() => {
    const wrapper = document.createElement('div')

    /**
     * Createsvg
     */

    wrapper.appendChild(
      createSvgElement({
        alignment: 'top left',
      })
    )

    wrapper.appendChild(
      createSvgElement({
        alignment: 'top right',
      })
    )

    wrapper.appendChild(
      createSvgElement({
        alignment: 'bottom left',
      })
    )

    wrapper.appendChild(
      createSvgElement({
        alignment: 'bottom right',
      })
    )

    const titleNode = document.createElement('span')
    titleNode.innerHTML = `
      <span style="font-family:'Inter';font-size:12px;color:white">${
        wrapperTitle
          ? wrapperTitle
          : `${object.name} ${
              object.name !== object.component ? ` (${object.component})` : ''
            }`
      }</span>
      <span style="font-family:'Inter';font-size:12px;color:white">${object.props.tag || ''}</span>
    `

    const titleStyle: Partial<CSSStyleDeclaration> = {
      position: 'absolute',
      backgroundColor: '#252424',
      color: 'white',
      padding: '2px 5px',
      fontFamily: 'Inter sans-serif',
      fontSize: '12px',
      top: '-25px',
      // bottom: '0px',
      // marginBottom: (element.offsetHeight + 10) + 'px',
    }

    Object.assign(titleNode.style, titleStyle)

    wrapper.appendChild(titleNode)
    // }

    return wrapper
  }, [object.component, object.name, object.props.tag, wrapperTitle])

  const [addBlockButtonDirection, addBlockButtonDirectionSetter] =
    useState<useAddBlockButtonProps['direction']>()

  /**
   * При наведении мышью будем определять куда выводить кнопки добавления блоков (вверх или вниз)
   */
  useEffect(() => {
    if (!element) {
      return
    }

    const onMouseMove = (event: MouseEvent) => {
      // console.log('onMouseOver', event)

      const {
        // target,
        // offsetX,
        offsetY,
      } = event

      /**
       * Сверяем с половиной высоты элемента. Если меньше, то вверх. Если больше, то вниз
       */
      if (offsetY < element.offsetHeight / 2) {
        //
        addBlockButtonDirectionSetter('Top')
      } else {
        addBlockButtonDirectionSetter('Bottom')
      }
    }

    element.addEventListener('mousemove', onMouseMove)

    return () => {
      element.removeEventListener('mousemove', onMouseMove)
    }
  }, [element])

  const [addBlockOpened, addBlockOpenedSetter] = useState(false)

  const closeAddddBlockModal = useCallback(() => {
    addBlockOpenedSetter(false)
  }, [])

  const addBlockButtonOnClick = useCallback(() => {
    addBlockOpenedSetter(true)
  }, [])

  useAddBlockButton({
    wrapper,
    hovered,
    active,
    direction: addBlockButtonDirection,
    onClick: addBlockButtonOnClick,
    parent,
  })

  /**
   * Корневому элементу компонента присваиваем ссылку на текущий враппер.
   * Это надо, потому что мы не можем заранее знать куда будет отрисован враппер,
   * потому искать мы его будем не через DOM, а напрямую через свойство элемента.
   */
  useEffect(() => {
    if (!element || !wrapper) {
      return
    }

    element.redactorComponentWrapper = wrapper

    return () => {
      delete element.redactorComponentWrapper
    }
  }, [element, wrapper])

  /**
   * Вывод элементов управления.
   * Данная логика при переключении active срабатывает только наз
   * на одно изменение.
   */
  useEffect(() => {
    if (!container) {
      return
    }

    const style: Partial<CSSStyleDeclaration> = {
      position: 'fixed',
      zIndex: '1000',
      pointerEvents: 'none',
    }

    Object.assign(wrapper.style, style)

    /**
     * Устанавливаем размеры контейнера
     */
    const setRect = () => {
      const { left, top, width, height } = element.getBoundingClientRect()

      const style: Partial<CSSStyleDeclaration> = {
        left: `${left - 2}px`,
        top: `${top - 2}px`,
        width: `${width + 2}px`,
        height: `${height + 2}px`,
      }

      Object.assign(wrapper.style, style)
    }

    setRect()
    container.appendChild(wrapper)

    const config: MutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    }

    /**
     * Слушаем все изменения на документе,
     * чтобы ресайзить враппер
     */
    const mutationObserver = new MutationObserver((_changes, _observer) => {
      setRect()
    })

    // Start observing the target node for configured mutations
    mutationObserver.observe(container, config)

    window.addEventListener('resize', setRect)

    // true - handle any scrolls, not event window
    window.addEventListener('scroll', setRect, true)

    return () => {
      container.removeChild(wrapper)
      mutationObserver.disconnect()
      window.removeEventListener('resize', setRect)
      window.removeEventListener('scroll', setRect)
    }
  }, [container, element, wrapper])

  /**
   * Показать модалку добавления блока
   */
  const [showAddBlockModal, setShowAddBlockModal] = useState(false)

  /**
   * Добавляем новый блок
   */
  const addObjectHandler = useCallback((event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setShowAddBlockModal(true)
  }, [])

  /**
   * Закрытие модалки
   */
  const closeAddBlockModal = useCallback(() => {
    setShowAddBlockModal(false)
  }, [])

  /**
   * Удаление компонента
   */
  const removeComponent = useCallback(
    (component: RedactorComponentObject) => {
      if (!parent || !updateParent) {
        return
      }

      /**
       * Находим объект в массиве компонентов
       */

      const components = [...parent.components]
      const componentIndex = findComponentInParent(components, component)

      if (componentIndex === undefined) {
        console.error('Не был найден текущий компонент в массиве компонентов')
        return
      }

      /**
       * Обновляем данные объекта в массиве данных
       */
      components.splice(componentIndex, 1)

      /**
       * Обновлять мы будем именно текущий объект.
       * Для этого в нем найдем нужный нам компонент и наверх вернем обновленный массив компонентов.
       */

      updateParent(parent, {
        components,
      })

      return
    },
    [parent, updateParent]
  )

  const removeObjectHandler = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation()

      removeComponent(object)
    },
    [object, removeComponent]
  )

  const [stateEditorOpened, setStateEditorOpened] = useState(false)

  const showContentHandler = useCallback(() => {
    setStateEditorOpened(true)
  }, [])

  const closeContentEditor = useCallback(() => {
    setStateEditorOpened(false)
  }, [])

  const stateEditor = useMemo(() => {
    if (!stateEditorOpened) {
      return null
    }

    return (
      <LmsFrontRedactorStateEditor
        object={object}
        updateObject={updateObject}
        close={closeContentEditor}
      />
    )
  }, [closeContentEditor, object, stateEditorOpened, updateObject])

  const [htmlEditorOpened, htmlEditorOpenedSetter] = useState(false)

  const openHtmlEditor = useCallback((event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    htmlEditorOpenedSetter(true)
  }, [])

  return useMemo(() => {
    return (
      <>
        <RedactorComponentWrapperGlobalStyled />
        {stateEditor}
        {showAddBlockModal ? (
          <AddBlockModal
            object={object}
            closeAddBlockModal={closeAddBlockModal}
            updateObject={updateObject}
            parent={parent}
            updateParent={updateParent}
          />
        ) : null}
        {active || isDirty
          ? ReactDOM.createPortal(
              <RedactorComponentWrapperToolbar
                addObjectHandler={addObjectHandler}
                showContentHandler={showContentHandler}
                allowChildComponents={allowChildComponents}
                object={object}
                canEditHTML={canEditHTML}
                updateObject={updateObject}
                openHtmlEditor={openHtmlEditor}
                parent={parent}
                updateParent={updateParent}
                isDirty={isDirty}
                updateTemplate={updateTemplate}
                removeObjectHandler={removeObjectHandler}
                closeEditor={closeEditor}
              />,
              wrapper
            )
          : null}

        {addBlockOpened && addBlockButtonDirection ? (
          updateParent && parent ? (
            <AddBlockModal2
              closeHandler={closeAddddBlockModal}
              direction={addBlockButtonDirection}
              object={object}
              updateParent={updateParent}
              parent={parent}
            />
          ) : null
        ) : null}

        {htmlEditorOpened ? (
          <RedactorComponentWrapperHTMLEditor
            element={element}
            htmlEditorOpenedSetter={htmlEditorOpenedSetter}
            object={object}
            updateObject={updateObject}
            parent={parent}
            updateParent={updateParent}
          />
        ) : null}
      </>
    )
  }, [
    active,
    addBlockButtonDirection,
    addBlockOpened,
    addObjectHandler,
    closeAddBlockModal,
    closeAddddBlockModal,
    closeEditor,
    element,
    htmlEditorOpened,
    object,
    openHtmlEditor,
    parent,
    removeObjectHandler,
    showAddBlockModal,
    showContentHandler,
    stateEditor,
    updateObject,
    updateParent,
    wrapper,
    canEditHTML,
    isDirty,
    updateTemplate,
    allowChildComponents,
  ])
}
