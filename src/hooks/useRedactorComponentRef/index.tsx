import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'

/**
 * Инициируем HTML-ноду компонента
 */
export const useRedactorComponentRef = <
  El extends HTMLElement = HTMLElement
>(): {
  element: El | null
  ref: (el: El) => void
  active: boolean
  activeSetter: Dispatch<SetStateAction<boolean>>
} => {
  const [element, setElement] = useState<El | null>(null)

  /**
   * Элемент активный, то есть в режиме редактирования, в фокусе
   */
  const [active, activeSetter] = useState(false)

  const ref = useCallback((el: El) => {
    setElement(el)
  }, [])

  return useMemo(() => {
    return {
      element,
      ref,
      active,
      activeSetter,
    }
  }, [active, element, ref])
}
