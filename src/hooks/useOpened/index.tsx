import { useCallback, useEffect, useMemo, useState } from 'react'
import { useOpenedProps } from './interfaces'

/**
 * Хук для состояния открыто/закрыто (например, модалок).
 * Состояние меняется по клику.
 * Открывается, если компонент в активном состоянии
 */
export const useOpened = ({ active, element }: useOpenedProps) => {
  const [opened, openedSetter] = useState(false)

  useEffect(() => {
    if (!active || !element) {
      return
    }

    const onClick = (event: MouseEvent) => {
      event.stopPropagation()

      openedSetter(true)
    }

    element.addEventListener('click', onClick)

    return () => {
      element.removeEventListener('click', onClick)
    }
  }, [active, element, openedSetter])

  useEffect(() => {
    if (!active && opened) {
      openedSetter(false)
    }
  }, [active, opened])

  const closeHandler = useCallback(() => {
    openedSetter(false)
  }, [])

  return useMemo(() => {
    return {
      opened,
      closeHandler,
    }
  }, [opened, closeHandler])
}
