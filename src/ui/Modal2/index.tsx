import { IconButton } from '@procraft/ui/dist/IconButton'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Modal2Props } from './interfaces'
import { MoveButton } from './MoveButton'
import {
  Modal2ContentScrollerStyled,
  Modal2ContentStyled,
  Modal2ModalWrapperStyled,
  Modal2Styled,
  Modal2TitleStyled
} from './styles'

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
  const [refAnchor, setRefAnchor] = useState<HTMLDivElement | null>(null)
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

  const collapseController = useCollapseModal(refAnchor, stylesState)

  const style = useMemo(() => {
    return {
      ...styleProps,
      ...collapseController.modalStyle,
    }
  }, [styleProps, collapseController.modalStyle])

  const styleAnchor = useMemo(() => {
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
          <Modal2TitleStyled style={collapseController.openContentStyle}>{toolbar}</Modal2TitleStyled>
        ) : null}
        <Modal2ContentScrollerStyled style={collapseController.openContentStyle}>
          <Modal2ContentStyled>{children}</Modal2ContentStyled>
        </Modal2ContentScrollerStyled>
        {other.collapsedElement && <div style={collapseController.collapsedContentStyle}>{other.collapsedElement(collapseController.toggleCollapse)}</div>}
      </Modal2Styled>
    )

    const anchor = <Modal2Styled ref={setRefAnchor} style={{...styleAnchor, opacity: 0, zIndex: 0}}  {...other} />

    const content = modal ? (
      <Modal2ModalWrapperStyled ref={wrapperState[1]}>
        {anchor}
        {modalWindow}
      </Modal2ModalWrapperStyled>
    ) : (
      modalWindow
    )

    return ReactDOM.createPortal(content, document.body)
  }, [
    loaded,
    style,
    other,
    toolbar,
    children,
    modal,
    wrapperState,
    role,
    collapseController.collapsedContentStyle,
    collapseController.openContentStyle,
    collapseController.toggleCollapse,
    styleAnchor,
  ])
}

Modal2.defaultProps = {
  role: 'modal-window',
}

interface useCollapseModalReturn {
  modalStyle?: React.CSSProperties
  openContentStyle?: React.CSSProperties
  collapsedContentStyle?: React.CSSProperties
  toggleCollapse: () => void
}

type CollapseType = 'Openned' | 'Opening' | 'Collapsed' | 'Collapsing'

function useCollapseModal(modal: HTMLDivElement | null, modalPosition:{
  left: number
  top: number
} | null): useCollapseModalReturn {
  const [collapseType, setCollapseType] = useState<CollapseType>('Openned')
  const [currAnchor, setCurrAnchor] = useState<'Top' | 'Bottom'>('Top')
  const updId = useRef(0)
  const timer = useRef<number>()

  useEffect(() => {
    if (collapseType === 'Openned') {
      setCurrAnchor('Top')
    }
    if (collapseType === 'Collapsed') {
      setCurrAnchor('Bottom')
    }
  },[collapseType])

  const toggleCollapse = useCallback(() => {
    setCollapseType(type => {
      const id = ++updId.current
      if (timer.current != null) {
        clearTimeout(timer.current)
      }

      const setTimer = (collapseType: CollapseType) => {
        timer.current = setTimeout(() => {
          if (id === updId.current) {
            setCollapseType(collapseType);
          }
        }, 350)}

      switch(type) {
        case 'Collapsed':
        case 'Collapsing':
          setTimer('Openned');
          return 'Opening';
        case 'Opening':
        case 'Openned':
          setTimer('Collapsed');
          return 'Collapsing';
      }
    })
  }, [setCollapseType, updId, timer])

  const style: CSSStyleDeclaration = modal == null ? {} as CSSStyleDeclaration : window.getComputedStyle(modal)
  const isCollapsed = collapseType === 'Collapsed' || collapseType === 'Collapsing'

  const opennedPosition: React.CSSProperties = currAnchor === 'Top' ? {
    top: modalPosition?.top,
    left: modalPosition?.left,
  } : {
    top: 'unset',
    left: 'unset',
    bottom: window.innerHeight - (modal?.offsetHeight ?? 500) - (modal?.offsetTop ?? 0) - (parseFloat(style?.marginBottom ?? '0')),
    right: window.innerWidth - (modal?.offsetWidth ?? 800) - (modal?.offsetLeft ?? 0) - (parseFloat(style?.marginRight ?? '0')),
  }

  const marginRight = parseFloat(style?.marginRight ?? '0')
  const marginBottom = parseFloat(style?.marginBottom ?? '0')

  const collapsedPosition: React.CSSProperties = currAnchor === 'Top' ? {
    top: window.innerHeight - 112,
    left: window.innerWidth - 112,
  } : {
    top: 'unset',
    left: 'unset',
    bottom: 32 - (Number.isNaN(marginBottom) ? 0 : marginBottom),
    right: 32 - (Number.isNaN(marginRight) ? 0 : marginRight),
  }

  const positionStyle = isCollapsed ? collapsedPosition : opennedPosition

  const modalStyle: React.CSSProperties = {
    transition: collapseType === 'Openned' ? void 0 : 'all 350ms',
    overflow: 'hidden',
    width: isCollapsed ? 80 : void 0,
    height: isCollapsed ? 80 : void 0,
    boxShadow: isCollapsed ? '0px 4px 16px rgb(59 130 246 / 24%)' : void 0,
    borderRadius: isCollapsed ? 8 : void 0,
    ...positionStyle
  }

  const openContentStyle: React.CSSProperties = {
    transition: collapseType === 'Openned' ? void 0 : 'all 350ms',
    opacity: isCollapsed ? 0 : 1,
    display: collapseType === 'Collapsed' ? 'none' : void 0,
  }

  const collapsedContentStyle: React.CSSProperties = {
    transition: collapseType === 'Openned' ? void 0 : 'all 350ms',
    opacity: isCollapsed ? 1 : 0,
    display: collapseType === 'Openned' ? 'none' : void 0,
  }

  return {modalStyle, openContentStyle, collapsedContentStyle, toggleCollapse}
}