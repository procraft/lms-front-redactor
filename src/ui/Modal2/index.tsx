import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { IconButton } from '@procraft/ui/dist/IconButton'
import { Modal2Props } from './interfaces'
import {
  Modal2ContentScrollerStyled,
  Modal2ContentStyled,
  Modal2ModalWrapperStyled,
  Modal2Styled,
  Modal2TitleStyled,
} from './styles'
import { MoveButton } from './MoveButton'

export * from './interfaces'

/**
 * Модалка для нового редактора
 */
export const Modal2: React.FC<Modal2Props> = ({
  title,
  children,
  closeHandler,
  preventClickEvent,
  modal,
  style: styleProps,
  moveable,
  role,
  ...other
}) => {
  /**
   * Так как у нас рендерится через портал, учитываем загрузку на стороне фронта
   */
  const [loaded, loadedSetter] = useState(false)

  useEffect(() => {
    loadedSetter(true)
  }, [])

  const [element, ref] = useState<HTMLDivElement | null>(null)
  const wrapperState = useState<HTMLDivElement | null>(null)

  const preventEvents = useCallback((event: MouseEvent) => {
    event.stopPropagation()
  }, [])

  useEffect(() => {
    if (!wrapperState[0] || !preventClickEvent) {
      return
    }

    const wrapper = wrapperState[0]

    /**
     * Обрываем все события, чтобы в элементы под окном не проходили
     */
    wrapper.addEventListener('mouseenter', preventEvents)

    /**
     * Внимание! Нельзя обрывать событие mousemove, потому что не работают тогда
     * выделения текста и скролл в monaco-editor
     */
    // wrapper.addEventListener('mousemove', preventEvents)
    wrapper.addEventListener('mouseover', preventEvents)

    return () => {
      wrapper.removeEventListener('mouseenter', preventEvents)
      // wrapper.removeEventListener('mousemove', preventEvents)
      wrapper.removeEventListener('mouseover', preventEvents)
    }
  }, [preventClickEvent, preventEvents, wrapperState])

  /**
   * Навешиваем прерыватель событий.
   */
  useEffect(() => {
    if (!preventClickEvent || !element) {
      return
    }

    const onClick = (event: MouseEvent) => {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Modal2 onClick stopPropagation target', event.target)
        // eslint-disable-next-line no-console
        console.log(
          'Modal2 onClick stopPropagation currentTarget',
          event.currentTarget
        )
      }

      // event.stopPropagation()
    }

    element.addEventListener('click', onClick)

    return () => {
      element.removeEventListener('click', onClick)
    }
  }, [element, preventClickEvent])

  const [stylesState, stylesStateSetter] = useState<{
    left: number
    top: number
  } | null>(null)

  const style = useMemo(() => {
    return {
      ...styleProps,
      ...stylesState,
    }
  }, [styleProps, stylesState])

  const toolbar: JSX.Element[] = useMemo(() => {
    const toolbar: JSX.Element[] = []

    if (moveable) {
      toolbar.push(
        <MoveButton
          key="move"
          stylesStateSetter={stylesStateSetter}
          modalElement={element}
        />
      )
    }

    if (title) {
      toolbar.push(<h1 key="title">{title}</h1>)
    }

    if (closeHandler) {
      toolbar.push(
        <IconButton key="closeHandler" onClick={closeHandler} role="close">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9997 10.586L16.9497 5.63599L18.3637 7.04999L13.4137 12L18.3637 16.95L16.9497 18.364L11.9997 13.414L7.04974 18.364L5.63574 16.95L10.5857 12L5.63574 7.04999L7.04974 5.63599L11.9997 10.586Z"
              fill="black"
            />
          </svg>
        </IconButton>
      )
    }

    return toolbar
  }, [closeHandler, element, moveable, title])

  return useMemo(() => {
    if (!loaded) {
      return null
    }

    const modalWindow = (
      <Modal2Styled role={role} ref={ref} style={style} {...other}>
        {toolbar.length ? (
          <Modal2TitleStyled>{toolbar}</Modal2TitleStyled>
        ) : null}
        <Modal2ContentScrollerStyled>
          <Modal2ContentStyled>{children}</Modal2ContentStyled>
        </Modal2ContentScrollerStyled>
      </Modal2Styled>
    )

    const content = modal ? (
      <Modal2ModalWrapperStyled ref={wrapperState[1]}>
        {modalWindow}
      </Modal2ModalWrapperStyled>
    ) : (
      modalWindow
    )

    return ReactDOM.createPortal(content, document.body)
  }, [loaded, style, other, toolbar, children, modal, wrapperState, role])
}

Modal2.defaultProps = {
  role: 'modal-window',
}
