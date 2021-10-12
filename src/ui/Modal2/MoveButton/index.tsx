import React, { useEffect, useState } from 'react'
import { MoveButtonProps } from './interfaces';
import { MoveButtonStyled } from './styles';

/**
 * Кнопка для перемещения окна
 */
export const MoveButton: React.FC<MoveButtonProps> = ({
  stylesStateSetter,
  modalElement,
}) => {

  const [moveButtonElement, moveButtonElementSetter] = useState<HTMLButtonElement | null>(null)

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
      return;
    }

    const onMouseDown = (event: MouseEvent) => {

      /**
       * Нам понадобятся данные положения окна, чтобы рассчитать разницу координат при клике
       */
      const {
        offsetLeft: modalLeft,
        offsetTop: modalTop,
      } = modalElement;

      event.stopPropagation();

      const {
        x, y,
      } = event;

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
      return;
    }

    const onMouseMove = (event: MouseEvent) => {

      event.stopPropagation();

      const {
        modalLeft,
        modalTop,
      } = draggable;

      const {
        x: left,
        y: top,
      } = event;

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
      return;
    }

    const onMouseUp = (event: MouseEvent) => {

      event.stopPropagation();

      draggableSetter(null)
    }

    document.addEventListener('mouseup', onMouseUp)

    return () => {

      document.removeEventListener('mouseup', onMouseUp)
    }

  }, [draggable])



  return <MoveButtonStyled
    ref={moveButtonElementSetter}
  >
    <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Layer_1" /><g id="move"><g><polygon points="18,20 18,26 22,26 16,32 10,26 14,26 14,20   " /><polygon points="14,12 14,6 10,6 16,0 22,6 18,6 18,12   " /><polygon points="12,18 6,18 6,22 0,16 6,10 6,14 12,14   " /><polygon points="20,14 26,14 26,10 32,16 26,22 26,18 20,18   " /></g></g></svg>

  </MoveButtonStyled>
}
