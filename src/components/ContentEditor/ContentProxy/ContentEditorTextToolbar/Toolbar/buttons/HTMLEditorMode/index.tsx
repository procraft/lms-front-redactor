import React, { useCallback, useMemo, useState } from 'react'
// import ReactDOM from 'react-dom'
import ButtonIcon from 'material-ui-icons/ModeEdit'
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
        preventClickEvent={true}
        modal={true}
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
        <ButtonIcon />
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
