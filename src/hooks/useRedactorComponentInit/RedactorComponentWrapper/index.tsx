/* eslint-disable no-console */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import AddBlockModal from './AddBlockModal'
import { RedactorComponentWrapperProps } from './interfaces'
import LmsFrontRedactorStateEditor from './StateEditor'
import { RedactorComponentWrapperStyled } from './styles'

/**
 * Выводить дополнительные отладочные инструменты
 */
const debug = true

/**
 * Враппер для компонентов редактора.
 * Рендерит элементы управления.
 */
const RedactorComponentWrapper: React.FC<RedactorComponentWrapperProps> = ({
  element,
  object,
  updateObject,
  closeEditor,
  container = global.window?.document.body,
  removeComponent,
}) => {
  const wrapper = useMemo(() => document.createElement('div'), [])

  /**
   * Корневому элементу компонента присываиваем ссылку на текущий враппер.
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
      border: '1px solid indigo',
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
   * Удаление элемента
   */
  const removeObjectHandler = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()

    removeComponent && removeComponent(object);
  }, [object, removeComponent])

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

  return useMemo(() => {
    return (
      <>
        {stateEditor}
        {showAddBlockModal ? (
          <AddBlockModal
            object={object}
            closeAddBlockModal={closeAddBlockModal}
            updateObject={updateObject}
          />
        ) : null}
        {ReactDOM.createPortal(
          <RedactorComponentWrapperStyled>
            <div className="buttons">
              <span>
                {object.name}{' '}
                {object.name !== object.component
                  ? ` (${object.component})`
                  : ''}
              </span>
              <span>{object.props.tag}</span>
              <button onClick={addObjectHandler} role="addBlock">Add block</button>
              {debug ? (
                <button onClick={showContentHandler} role="showState">Show state</button>
              ) : null}
              {removeComponent ? <button onClick={removeObjectHandler} role="removeComponent" title="Удалить элемент">␡</button> : null}
              {/* <button onClick={showInnerHtmlHandler}>Show HTML</button> */}
              {/* <button>Delete</button> */}
              <button onClick={closeEditor} role="close">Close</button>
            </div>
          </RedactorComponentWrapperStyled>,
          wrapper
        )}
      </>
    )
  }, [stateEditor, showAddBlockModal, object, closeAddBlockModal, updateObject, addObjectHandler, showContentHandler, removeObjectHandler, closeEditor, wrapper, removeComponent])
}

export default RedactorComponentWrapper
