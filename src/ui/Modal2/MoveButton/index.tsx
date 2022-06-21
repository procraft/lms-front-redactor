import React, { useEffect, useState } from 'react'
import { MoveButtonProps } from './interfaces'
import { MoveButtonStyled } from './styles'

/**
 * Кнопка для перемещения окна
 */
export const MoveButton: React.FC<MoveButtonProps> = ({
  stylesStateSetter,
  modalElement,
}) => {
  const [moveButtonElement, moveButtonElementSetter] =
    useState<HTMLButtonElement | null>(null)

  const [draggable, draggableSetter] = useState<{
    modalLeft: number
    modalTop: number
  } | null>(null)

  // const [modalOffset, modalOffsetSetter] = useState<{
  //   modalLeft: number
  //   modalTop: number
  // } | null>(null)

  /**
   * onMouseDown
   */
  useEffect(() => {
    if (!moveButtonElement || !modalElement) {
      return
    }

    const onMouseDown = (event: MouseEvent) => {
      /**
       * Нам понадобятся данные положения окна, чтобы рассчитать разницу координат при клике
       */
      const { offsetLeft: modalLeft, offsetTop: modalTop } = modalElement

      event.stopPropagation()

      const { x, y } = event

      draggableSetter({
        /**
         * Рассчитываем отступ координаты
         */
        modalLeft: x - modalLeft,
        modalTop: y - modalTop,
      })
    }

    moveButtonElement.addEventListener('mousedown', onMouseDown)

    return () => {
      moveButtonElement.removeEventListener('mousedown', onMouseDown)
    }
  }, [modalElement, moveButtonElement])

  /**
   * onMouseMove
   */
  useEffect(() => {
    if (!draggable) {
      return
    }

    const onMouseMove = (event: MouseEvent) => {
      event.stopPropagation()

      const { modalLeft, modalTop } = draggable

      const { x: left, y: top } = event

      stylesStateSetter({
        left: left - modalLeft,
        top: top - modalTop,
      })
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [moveButtonElement, draggable, stylesStateSetter])

  /**
   * onMouseUp
   */
  useEffect(() => {
    if (!draggable) {
      return
    }

    const onMouseUp = (event: MouseEvent) => {
      event.stopPropagation()

      draggableSetter(null)
    }

    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [draggable])

  return (
    <MoveButtonStyled ref={moveButtonElementSetter}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 11V8L22 12L18 16V13H13V18H16L12 22L8 18H11V13H6V16L2 12L6 8V11H11V6H8L12 2L16 6H13V11H18Z"
          fill="#64748B"
        />
      </svg>
    </MoveButtonStyled>
  )
}
