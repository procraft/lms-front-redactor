import React, { useMemo } from 'react'
// import { RedactorComponentHoveredEvent } from './Context';

/**
 * Новый фронт-редактор.
 * Выводить следует только в режиме редактирования.
 * @deprecated Пока так и не был доработан
 */
export const FrontEditor: React.FC = () => {
  // useEffect(() => {
  //   // const onMouseOver = (event: MouseEvent) => {
  //   //   // console.log('onMouseOver event', event)
  //   //   console.log('onMouseOver event', event.target)
  //   // }

  //   // document.addEventListener('mouseover', onMouseOver, true)
  //   // document.addEventListener('mouseenter', onMouseOver, true)

  //   /**
  //    * Обработчик на активирование компонента
  //    */
  //   const onComponentActive = (event: Event) => {

  //     console.log('redactorComponentActive event', event);
  //   }

  //   global.document.addEventListener("redactorComponentActive", onComponentActive);

  //   return () => {
  //     // document.removeEventListener('mouseover', onMouseOver)
  //     document.removeEventListener('redactorComponentActive', onComponentActive)
  //   }
  // }, [])

  // useEffect(() => {

  //   const callback = (event: RedactorComponentHoveredEvent) => {

  //     console.log('FrontEditor redactorComponentHovered event', event);
  //   }

  //   global.document.addEventListener("redactorComponentHovered", callback);

  //   return () => {
  //     global.document.removeEventListener('redactorComponentHovered', callback)
  //   }
  // }, [])

  return useMemo(() => {
    return <></>
  }, [])
}

export default FrontEditor
