import React, { useCallback, useMemo, useState } from 'react'
// import ReactDOM from 'react-dom'
import { ToolbarButtonProps } from '../../interfaces'
import {
  HTMLEditorModeButtonProps,
  useHTMLEditorModeButtonProps,
} from './interfaces'
// import { Modal2 } from '../../../../../../../ui/Modal2'
import { MonacoEditorModal } from '../../../../../../../ui/MonacoEditorModal'
import { ContentEditorHTMLEditorMonacoEditor } from '../../../../../HTMLEditor/MonacoEditor'

/**
 * Создание ссылки
 */
export const HTMLEditorModeButton: React.FC<HTMLEditorModeButtonProps> = ({
  opened,
  openedSetter,
  // clickCoords,
  element,
  object,
  updateObject,
}) => {
  // TODO Надо проработать обрыв события.
  // Сейчас если кликать внутри редактора, то не закрывается окошко
  const closePopover = useCallback(() => {
    openedSetter(false)
  }, [openedSetter])

  // const preventDefault = useCallback((event: React.MouseEvent) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  // }, [])

  /**
   * Поповер для редактирования данных иконки
   */
  const popover = useMemo(() => {
    if (!opened) {
      return null
    }

    return (
      <MonacoEditorModal
        title="Редактор HTML кода"
        closeHandler={closePopover}
        preventClickEvent
        modal
        moveable={false}
      >
        <ContentEditorHTMLEditorMonacoEditor
          active
          element={element}
          object={object}
          updateObject={updateObject}
        />
      </MonacoEditorModal>
    )

    // return ReactDOM.createPortal(
    //   <Modal2
    //     title="HTML Редактор"
    //     closeHandler={closePopover}
    //     // style={{
    //     //   left: clickCoords.x,
    //     //   top: clickCoords.y,
    //     // }}
    //     onClick={preventDefault}
    //     // onMouseUp={onMouseUp}
    //   >
    //     {/* <LinkForm opened={opened} closePopover={closePopover} /> */}

    //   </Modal2>,
    //   document.body
    // )
  }, [closePopover, element, object, opened, updateObject])

  return useMemo(() => {
    return (
      <>
        {popover}
        {/* <i 
        ref={iconElementSetter}
        > */}
        {/* <ButtonIcon /> */}

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
        >
          <path
            d="M3.66781 12.1719L8.12094 13.7422V15.9297L1.39437 13.0781V11.2344L8.12094 8.38281V10.5703L3.66781 12.1719ZM11.7956 17.9766H10.1159L14.3034 5.625H15.9831L11.7956 17.9766ZM20.2384 12.1484L15.6994 10.5625V8.39062L22.5041 11.2422V13.0781L15.6994 15.9375V13.7578L20.2384 12.1484Z"
            fill="black"
          />
        </svg>

        {/* </i> */}
      </>
    )
  }, [popover])
}

export const useHTMLEditorModeButton: (
  props: useHTMLEditorModeButtonProps
) => ToolbarButtonProps = ({
  selection,
  hasSelection,
  contentWrapper,
  object,
  updateObject,
}) => {
  const [opened, openedSetter] = useState(false)

  /**
   * Координаты для позиционирования окна
   */
  // const [clickCoords, clickCoordsSetter] = useState<
  //   HTMLEditorModeButtonProps['clickCoords'] | null
  // >(null)

  const onClick = useCallback(() => {
    // console.log('onClick event', event)

    openedSetter(!opened)

    // if (!opened) {
    //   clickCoordsSetter({
    //     // TODO Получать координаты с учетом ширины самой всплывашки
    //     x: event.clientX - 160,
    //     y: event.clientY + 30,
    //   })
    // }
  }, [opened])

  // console.log('useHTMLEditorModeButton hasSelection', hasSelection)
  // console.log('useHTMLEditorModeButton selection', selection)

  // TODO Нельзя сейчас использовать useMemo, потому что selection - это всегда один и тот же объект
  // return useMemo(() => {
  //   console.log('useHTMLEditorModeButton useMemo hasSelection', hasSelection)
  // }, [clickCoords, hasSelection, onClick, opened, selection])

  return {
    name: 'HTMLEditorMode',
    title: 'Редактировать HTML',
    // disabled: hasSelection && selection?.type === 'Range' ? false : true,

    /**
     * Сейчас пока редактирование доступно только если не в фокусе (чтобы исключить вероятность коллизий измененного состояния)
     */
    disabled: hasSelection,
    icon: (
      <HTMLEditorModeButton
        selection={selection}
        opened={opened}
        openedSetter={openedSetter}
        // clickCoords={clickCoords}
        element={contentWrapper}
        object={object}
        updateObject={updateObject}
      />
    ),
    onClick,
  }
}
