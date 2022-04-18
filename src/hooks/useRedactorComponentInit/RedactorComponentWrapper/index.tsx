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
import CloseIcon from 'material-ui-icons/Close'
import DeleteIcon from 'material-ui-icons/Delete'
import {
  RedactorComponentWrapperButtonsStyled,
  RedactorComponentWrapperGlobalStyled,
  RedactorComponentWrapperStyled,
} from './styles'
import { Button } from '@procraft/ui/dist/Button'
import { RedactorComponentWrapperHTMLEditor } from './HtmlEditor'
import { SvgIconCode } from '../../../ui/SvgIcon/Code'
import { RedactorComponentWrapperAddComponentButton } from './buttons/AddComponent'
import { RedactorComponentWrapperSaveButton } from './buttons/Save'

/**
 * Выводить дополнительные отладочные инструменты
 */
const debug = false

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
      <span>${
        wrapperTitle
          ? wrapperTitle
          : `${object.name} ${
              object.name !== object.component ? ` (${object.component})` : ''
            }`
      }</span>
      <span>${object.props.tag || ''}</span>
    `

    const titleStyle: Partial<CSSStyleDeclaration> = {
      position: 'absolute',
      backgroundColor: '#252424',
      color: 'white',
      padding: '2px 5px',
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

    // const onMouse = (event: MouseEvent) => {
    //   console.log('onMouse leave', event)
    // }

    element.addEventListener('mousemove', onMouseMove)
    // element.addEventListener('mouseleave', onMouse)

    // wrapper.addEventListener('mouseover', onMouseOver)
    // wrapper.addEventListener('mouseenter', onMouseOver)
    // wrapper.addEventListener('mousemove', onMouseOver)

    return () => {
      element.removeEventListener('mousemove', onMouseMove)
      // element.removeEventListener('mouseleave', onMouse)
      // wrapper.removeEventListener('mouseover', onMouseOver)
      // wrapper.removeEventListener('mouseenter', onMouseOver)
      // wrapper.removeEventListener('mousemove', onMouseOver)
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

    // console.log('useEffect wrapper element', element)
    // console.log('useEffect wrapper active', active)

    // wrapper.style.position = "absolute";
    // wrapper.style.top = "30px";
    // wrapper.style.left = "30px";

    const style: Partial<CSSStyleDeclaration> = {
      // border: '1px solid indigo',
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

      // console.log('setRect', element.getBoundingClientRect());

      const style: Partial<CSSStyleDeclaration> = {
        left: `${left - 2}px`,
        top: `${top - 2}px`,
        width: `${width + 2}px`,
        height: `${height + 2}px`,
      }

      Object.assign(wrapper.style, style)
    }

    setRect()

    // wrapper.innerHTML = Math.random().toString()

    // document.body.appendChild(wrapper)
    container.appendChild(wrapper)

    /**
     * Навешиваем
     */
    // const timeout = setInterval(setRect, 10);

    /**
     * Обсервер на изменение размеров элемента.
     * В целом работал, но совсем не реагирует на скролл и изменение других элементов.
     */
    // const resizeObserver = ResizeObserver ? new ResizeObserver(() => {

    //   console.log('resizeObserver element', element);

    //   setRect();
    // }) : null;

    // // resizeObserver?.observe(element);
    // resizeObserver?.observe(window.document.body);

    // const options = {
    //   // root: document.querySelector('#scrollArea'),
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0
    // }
    // const callback = function (entries, observer) {
    //   /* Content excerpted, show below */
    //   console.log("IntersectionObserver callback", entries);
    // };
    // const observer = new IntersectionObserver(callback, options);

    // observer.observe(element)

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
      // console.log("mutationObserver _changes", _changes);

      setRect()
    })

    // Start observing the target node for configured mutations
    // mutationObserver.observe(window.document.body, config)
    mutationObserver.observe(container, config)

    window.addEventListener('resize', setRect)

    // true - handle any scrolls, not event window
    window.addEventListener('scroll', setRect, true)

    return () => {
      // document.body.removeChild(wrapper)
      container.removeChild(wrapper)

      // clearTimeout(timeout);

      // resizeObserver?.disconnect();

      // observer.disconnect();

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

      const componentIndex = components.indexOf(component)

      if (componentIndex === -1) {
        console.error('Не был найден текущий компонент в массиве компонентов')
        return
      }

      // const component = components[componentIndex];

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

  // const addObjectHandler = useCallback(
  //   (event: React.MouseEvent) => {
  //     event.preventDefault()
  //     event.stopPropagation()

  //     const components = [...object.components]

  //     components.push({
  //       name: 'New Section',
  //       component: 'Section',
  //       props: {
  //         style: {
  //           border: '2px solid red',
  //         },
  //       },
  //       components: [],
  //     })

  //     updateObject(object, {
  //       components,
  //     })
  //   },
  //   [object, updateObject]
  // )

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

  // const showInnerHtmlHandler = useCallback(() => {
  //   // eslint-disable-next-line no-console
  //   console.log(`EditorComponent element`, element);

  // }, [element]);

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
              <RedactorComponentWrapperStyled role="redactor-wrapper">
                <RedactorComponentWrapperButtonsStyled role="redactor-wrapper-buttons">
                  {/* <span>
                  {object.name}{' '}
                  {object.name !== object.component
                    ? ` (${object.component})`
                    : ''}
                </span>
                <span>{object.props.tag}</span> */}
                  {debug ? (
                    <button onClick={addObjectHandler} role="addBlock">
                      Add block
                    </button>
                  ) : null}
                  {debug ? (
                    <button onClick={showContentHandler} role="showState">
                      Show state
                    </button>
                  ) : null}
                  <RedactorComponentWrapperAddComponentButton
                    object={object}
                    updateObject={updateObject}
                  />
                  {canEditHTML ? (
                    <Button
                      onClick={openHtmlEditor}
                      role="openHtmlEditor"
                      title="Редактировать HTML"
                    >
                      <SvgIconCode />
                    </Button>
                  ) : null}
                  {parent ? (
                    <RedactorComponentWrapperSaveButton
                      object={object}
                      updateObject={updateObject}
                      parent={parent}
                      updateParent={updateParent}
                      isDirty={isDirty}
                      updateTemplate={updateTemplate}
                    />
                  ) : null}
                  {parent ? (
                    <Button
                      onClick={removeObjectHandler}
                      role="removeComponent"
                      title="Удалить элемент"
                    >
                      <DeleteIcon />
                    </Button>
                  ) : null}
                  <Button
                    onClick={closeEditor}
                    role="close"
                    title="Завершить редактирование"
                  >
                    <CloseIcon />
                  </Button>
                </RedactorComponentWrapperButtonsStyled>
              </RedactorComponentWrapperStyled>,
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
  ])
}
