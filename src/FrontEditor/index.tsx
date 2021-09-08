/* eslint-disable no-console */
import React, { useMemo } from 'react'
import { useEffect } from 'react'

/**
 * Новый фронт-редактор.
 * Выводить следует только в режиме редактирования.
 */
export const FrontEditor: React.FC = () => {
  useEffect(() => {
    // const onMouseOver = (event: MouseEvent) => {
    //   // console.log('onMouseOver event', event)
    //   console.log('onMouseOver event', event.target)
    // }

    // document.addEventListener('mouseover', onMouseOver, true)
    // document.addEventListener('mouseenter', onMouseOver, true)

    /**
     * Обработчик на активирование компонента
     */
    const onComponentActive = (event: Event) => {

      console.log('redactorComponentActive event', event);
    }

    global.document.addEventListener("redactorComponentActive", onComponentActive);

    return () => {
      // document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('redactorComponentActive', onComponentActive)
    }
  }, [])

  return useMemo(() => {
    return <></>
  }, [])
}

export default FrontEditor
