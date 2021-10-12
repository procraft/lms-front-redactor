import React, { useCallback, useMemo, useState } from 'react'
import LinkIcon from 'material-ui-icons/Link'
import { ToolbarButtonProps } from '../../interfaces'
import { CreateLinkButtonProps, useCreateLinkButtonProps } from './interfaces'
import { Modal2 } from '../../../../../../../ui/Modal2'
import { LinkForm } from './Form'

/**
 * Создание ссылки
 */
export const CreateLinkButton: React.FC<CreateLinkButtonProps> = ({
  opened,
  openedSetter,
  clickCoords,

  // TODO cleanup props
  // selection,
}) => {
  // const [iconElement, iconElementSetter] = useState<HTMLElement | null>(null)

  // console.log('iconElement', iconElement)

  // const createLink = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     const result = document.execCommand(event.currentTarget.name)

  //     console.log('createLink result', result)
  //   },
  //   []
  // )

  // createLink

  // TODO Надо проработать обрыв события.
  // Сейчас если кликать внутри редактора, то не закрывается окошко
  const closePopover = useCallback(() => {
    openedSetter(false)
  }, [openedSetter])

  // const preventDefault = useCallback((event: React.MouseEvent) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  // }, [])

  // const onMouseDown = useCallback(
  //   (event: React.MouseEvent) => {
  //     console.log('onMouseDown event', event)
  //     console.log('onMouseDown event.target', event.target)
  //     console.log('onMouseDown event.currentTarget', event.currentTarget)
  //     console.log('onMouseDown selection', selection)
  //     // console.log(
  //     //   'onMouseDown selection?.getRangeAt(0)',
  //     //   selection?.getRangeAt(0)
  //     // )

  //     // if (selection && selection.rangeCount > 0) {
  //     //   const range = selection.getRangeAt(0)

  //     //   selection.removeAllRanges()

  //     //   selection.addRange(range)
  //     // }

  //     // event.cancelBubble = true

  //     // event.cancelable = true

  //     // event.preventDefault()
  //     // event.stopPropagation()

  //     setTimeout(() => {
  //       const s = document.getSelection()

  //       if (s && s.rangeCount > 0) {
  //         s?.removeAllRanges()
  //       }
  //     }, 3000)
  //   },
  //   [selection]
  // )

  // const onMouseUp = useCallback(
  //   (_event: React.MouseEvent) => {
  //     console.log('onMouseUp selection', { ...selection })

  //     // event.preventDefault()
  //     // event.stopPropagation()
  //   },
  //   [selection]
  // )

  /**
   * Поповер для редактирования данных иконки
   */
  const popover = useMemo(() => {
    if (!opened || !clickCoords) {
      return null
    }

    return (
      <Modal2
        title="Ссылка"
        closeHandler={closePopover}
        style={{
          left: clickCoords.x,
          top: clickCoords.y,
        }}
        // onClick={preventDefault}
        // onMouseUp={onMouseUp}
        preventClickEvent={true}
        modal={false}
        moveable
      >
        <LinkForm opened={opened} closePopover={closePopover} />
      </Modal2>
    )
  }, [clickCoords, closePopover, opened])

  return useMemo(() => {
    return (
      <>
        {popover}
        {/* <i 
        ref={iconElementSetter}
        > */}
        <LinkIcon />
        {/* </i> */}
      </>
    )
  }, [popover])
}

export const useCreateLinkButton: (
  props: useCreateLinkButtonProps
) => ToolbarButtonProps = ({ selection, hasSelection }) => {
  const [opened, openedSetter] = useState(false)

  /**
   * Координаты для позиционирования окна
   */
  const [clickCoords, clickCoordsSetter] = useState<
    CreateLinkButtonProps['clickCoords'] | null
  >(null)

  const onClick = useCallback(
    (event: MouseEvent) => {
      // console.log('onClick event', event)

      openedSetter(!opened)

      if (!opened) {
        clickCoordsSetter({
          // TODO Получать координаты с учетом ширины самой всплывашки
          x: event.clientX - 160,
          y: event.clientY + 30,
        })
      }
    },
    [opened]
  )

  // console.log('useCreateLinkButton hasSelection', hasSelection)
  // console.log('useCreateLinkButton selection', selection)

  // TODO Нельзя сейчас использовать useMemo, потому что selection - это всегда один и тот же объект
  // return useMemo(() => {
  //   console.log('useCreateLinkButton useMemo hasSelection', hasSelection)
  // }, [clickCoords, hasSelection, onClick, opened, selection])

  return {
    name: 'createLink',
    title: 'Создать ссылку',
    disabled: hasSelection && selection?.type === 'Range' ? false : true,
    icon: (
      <CreateLinkButton
        selection={selection}
        opened={opened}
        openedSetter={openedSetter}
        clickCoords={clickCoords}
      />
    ),
    // onClick: createLink,
    onClick,
  }
}
