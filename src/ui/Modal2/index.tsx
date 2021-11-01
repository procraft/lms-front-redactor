import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
// import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
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

      event.stopPropagation()
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
        <IconButton key="closeHandler" callback={closeHandler}>
          <CloseIcon />
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
      <Modal2Styled ref={ref} style={style} {...other}>
        {toolbar.length ? (
          <Modal2TitleStyled>
            {toolbar}

            <hr />
          </Modal2TitleStyled>
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
  }, [loaded, style, other, toolbar, children, modal, wrapperState])
}
