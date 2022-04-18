import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { LmsFrontRedactorContext } from '../../Context'
import {
  RedactorComponentActiveEvent,
  RedactorComponentActiveEventDetail,
  RedactorComponentHoveredEvent,
  RedactorComponentHoveredEventDetail,
  // RedactorComponentClickEvent,
  // RedactorComponentClickEventDetail,
} from '../../FrontEditor/Context'
import {
  redactor2ComponentAttributes,
  // redactor2ComponentClasses,
} from '../../styles'
import {
  ComponentWrapperProps,
  useRedactorComponentInitProps,
} from './interfaces'
import { RedactorComponentWrapper } from './RedactorComponentWrapper'

/**
 * Инициализируем редактор-компонент
 */
// const useRedactorComponentInit = <El extends HTMLElement = HTMLElement>({
const useRedactorComponentInit = ({
  object,
  updateObject,
  wrapperContainer,
  parent,
  updateParent,
  element,
  active,
  activeSetter,
  hoverable,
  canEditHTML,
  wrapperTitle,
  isDirty,
  updateTemplate,
}: useRedactorComponentInitProps): ComponentWrapperProps => {
  const context = useContext(LmsFrontRedactorContext)

  /**
   * Наведена мышка
   */
  const [hovered, hoveredSetter] = useState(false)

  useEffect(() => {
    if (!element || !context?.inEditMode) {
      return
    }

    const hoveredEvent = new CustomEvent<RedactorComponentHoveredEventDetail>(
      'redactorComponentHovered',
      {
        detail: {
          element,
          hovered,
        },
      }
    )

    global.document.dispatchEvent(hoveredEvent)
  }, [context?.inEditMode, element, hovered])

  useEffect(() => {
    if (!element || !context?.inEditMode) {
      return
    }

    /**
     * Коллбэк на смену указанного элемента
     */

    const onHovered = (event: RedactorComponentHoveredEvent) => {
      if (event.detail.element === element) {
        //
        // if (event.detail.hovered) {
        //   // const el = event.currentTarget as El
        //   // el.classList.add(redactor2ComponentClasses.hovered)
        //   const attr = document.createAttribute(
        //     redactor2ComponentAttributes.hovered
        //   )
        //   attr.value = 'true'
        //   element.attributes.setNamedItem(attr)
        // } else {
        //   element.removeAttribute(redactor2ComponentAttributes.hovered)
        // }
      } else {
        if (event.detail.hovered) {
          hoveredSetter(false)
        }
      }
      // else if(active) {
      //   activeSetter(false)
      // }
    }

    global.document.addEventListener('redactorComponentHovered', onHovered)

    return () => {
      global.document.removeEventListener('redactorComponentHovered', onHovered)
    }
  }, [context?.inEditMode, element])

  /**
   * Здесь сбрасываем все возможные артифакты,
   * которые могут остаться после работы компонента.
   */
  useEffect(() => {
    if (!element || !context?.inEditMode) {
      return
    }

    /**
     * Если стал активным, выкидваем событие
     */
    if (active) {
      // create and dispatch the event
      const activeEvent = new CustomEvent<RedactorComponentActiveEventDetail>(
        'redactorComponentActive',
        {
          detail: {
            element,
          },
        }
      )

      global.document.dispatchEvent(activeEvent)
    }

    return () => {
      // console.log('Component will unmount');

      /**
       * active устанавливается только по клику на элемент и пока никак не сбрасывается,
       * поэтому если не сбросить, останутся элементы управления в документе.
       */
      if (active) {
        activeSetter(false)
      }
    }
  }, [active, activeSetter, context?.inEditMode, element])

  /**
   * По клику делаем компонент активным
   */
  useEffect(() => {
    if (!element || !context?.inEditMode || active || !hovered) {
      return
    }

    const onClick = (event: MouseEvent) => {
      // console.log('editor onClick event.target', event.target);
      // console.log('editor onClick event.currentTarget', event.currentTarget);

      // TODO Здесь, если прерывать ивент, не кликаются внутренние элементы.
      // Возможно надо сбрасывать ивент, если уже активный элемент.

      /**
       * Упростил логику. Теперь, только если элемент в режиме наведенной мышки,
       * только в этом случае клик перехватываем и выставляем активность
       */
      // if (
      //   event.target === event.currentTarget &&
      //   event.currentTarget instanceof HTMLElement
      // ) {
      event.stopPropagation()
      event.preventDefault()
      // const el: HTMLDivElement = event.currentTarget as El;
      // el.classList.toggle("active")
      // event.target
      // event.currentTarget
      // create and dispatch the event
      // const event2 = new CustomEvent<RedactorComponentClickEventDetail>(
      //   'redactorComponentActive',
      //   {
      //     // detail: {
      //     //   hazcheeseburger: true,
      //     // },
      //     // target: element,
      //     // currentTarget: element,
      //     detail: {
      //       element,
      //     },
      //   }
      // )
      // event2.preventDefault()
      // global.document.dispatchEvent(event2)
      activeSetter(true)
      // }
    }

    element.addEventListener('click', onClick)

    return () => {
      element.removeEventListener('click', onClick)
    }
  }, [active, activeSetter, context?.inEditMode, element, hovered])

  /**
   * Глобальные обработчики, когда компонент активный
   */
  useEffect(() => {
    if (!element || !context?.inEditMode || !active) {
      return
    }

    /**
     * Коллбэк на смену активного элемента
     */

    const onActive = (event: RedactorComponentActiveEvent) => {
      /**
       * Если это не текущий элемент, снимаем активность
       */
      if (event.detail.element !== element) {
        activeSetter(false)
      }
      // else if(active) {
      //   activeSetter(false)
      // }
    }

    global.document.addEventListener('redactorComponentActive', onActive)

    return () => {
      global.document.removeEventListener('redactorComponentActive', onActive)
    }
  }, [active, activeSetter, context?.inEditMode, element])
  // useEffect(() => {
  //   if (!element || !context?.inEditMode) {
  //     return
  //   }

  //   /**
  //    * Коллбэк на смену активного элемента
  //    */

  //   const onCat = (event: RedactorComponentClickEvent) => {
  //     console.log(
  //       'onCat event',
  //       // event,
  //       // event.defaultPrevented,
  //       event.detail.element
  //     )
  //     // console.log('onCat this', this)

  //     /**
  //      * Если это текущий элемент, выставляем активность
  //      */
  //     if (event.detail.element === element) {
  //       activeSetter(true)
  //     }
  //     else if(active) {
  //       activeSetter(false)
  //     }
  //   }

  //   global.document.addEventListener('redactorComponentClick', onCat)

  //   return () => {
  //     global.document.removeEventListener('redactorComponentClick', onCat)
  //   }
  // }, [active, context?.inEditMode, element])

  /**
   * Здесь навешиваем различные ивенты
   */
  useEffect(() => {
    if (!element || !context?.inEditMode) {
      return
    }

    const onMouseOver = (event: MouseEvent) => {
      // console.log('onMouseOver event', event);
      // console.log('onMouseOver event.target', event.target);
      // console.log('onMouseOver event.currentTarget', event.currentTarget);

      /**
       * Нельзя проверять на соответствие наведенному элементу,
       * так как важно улавливать на любой вложенности вглубь.
       */
      // if (
      //   event.target === event.currentTarget &&
      //   event.currentTarget instanceof HTMLElement
      // ) {

      /**
       * Если элементу задан hoverable,
       * то ему в любом случае можно перехватывать это событие.
       * Так же с зажатой клавишей Alt подсвечиваются все элементы.
       * Если элемент уже active, то тоже перехватываем событие,
       * потому что иначе у нас возникает проблема, когда нашел и выделил элемент
       * с использованием клавиши Alt, потом отпустил Alt
       * и затем кликнул в любой внутренний элемент, а так как элемент
       * не hoverable, то событие уходит дальше и активность уходит в родительский элемент.
       */
      if (hoverable || event.altKey || active) {
        event.stopPropagation()
        hoveredSetter(true)
      }

      // }
    }

    // TODO Сейчас не получается использователь это событие,
    // так как снимается активность при наведении на вспомогающие кнопки
    // const onMouseLeave = (event: MouseEvent) => {

    //   console.log('onMouseLeave', event)

    //   // if (
    //   //   event.target === event.currentTarget &&
    //   //   event.currentTarget instanceof HTMLElement
    //   // ) {
    //   event.stopPropagation()
    //   hoveredSetter(false)
    //   // }
    // }

    /**
     * Add events
     */
    element.addEventListener('mouseover', onMouseOver)
    // element.addEventListener('mouseenter', onMouseOver)
    // element.addEventListener('mouseleave', onMouseLeave)

    return () => {
      /**
       * Remove events
       */
      element.removeEventListener('mouseover', onMouseOver)
      // element.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [context?.inEditMode, element, hoverable, active])

  /**
   * Обновление текущуего объекта компонента.
   * При этом мы должны учитывать, что обновленный объект мы должны передать в обновление родителя.
   * Мы сейчас не будем учитывать черновики. Все изменения идут в родителя, если он есть.
   * Надо решить как лучше: передавать сюда родителя, или просто функцию типа updateParent.
   * По идее, updateParent нужен, так как по сути обновление будет в родителе.
   * Но и сам parent тоже нужен, чтобы всякие свойства его читать. Хотя это можно и через DOM сделать.
   * Еще раз: сдесь мы отслеживаем текущий объект. Получив обновленные данные, мы должны их как-то зафиксировать.
   * Так как свойство object приходит к нам извне, то и апдейтер тоже, по идее, должен приходить извне.
   * То есть кто дает данные, тот и дает апдейтер.
   * С другой стороны, логика апдейта нужна в каждом прототипе компонента. То есть компонентов много,
   * а логика у них должна быть единая. Значит правильно все-таки вынести метод апдейтера в компоненты-вызыватели.
   */
  // const updateCurrentObject: useRedactorComponentInitProps["updateObject"] = useCallback((current, data) => {

  //   console.log('useRedactorComponentInit updateCurrentObject current', current);
  //   console.log('useRedactorComponentInit updateCurrentObject data', data);

  // }, []);

  const closeEditor = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation()
      activeSetter(false)
    },
    [activeSetter]
  )

  /**
   * Выводит обертку управления компонентом
   */
  const wrapperContent = useMemo(() => {
    if (!element) {
      return
    }

    if (isDirty) {
      // Show anyway if isDirty
    } else if (!active && !hovered) {
      return
    }

    return (
      <RedactorComponentWrapper
        element={element}
        updateObject={updateObject}
        object={object}
        closeEditor={closeEditor}
        container={wrapperContainer}
        parent={parent}
        updateParent={updateParent}
        active={active}
        hovered={hovered}
        canEditHTML={canEditHTML}
        wrapperTitle={wrapperTitle}
        isDirty={isDirty}
        updateTemplate={updateTemplate}
      />
    )
  }, [
    element,
    active,
    hovered,
    updateObject,
    object,
    closeEditor,
    wrapperContainer,
    parent,
    updateParent,
    canEditHTML,
    wrapperTitle,
    isDirty,
    updateTemplate,
  ])

  return useMemo(() => {
    // const className = []

    // if (context?.inEditMode) {
    //   className.push(redactor2ComponentClasses.component)
    // }

    // if (active) {
    //   className.push('active')
    // }

    // if (active) {
    //   className.push(redactor2ComponentClasses.active)
    // }

    const props: ComponentWrapperProps = {
      // ref,
      // className: className.length ? className.join(' ') : undefined,
      // active,
      wrapperContent,
      // [redactor2ComponentAttributes.component]: "true",
      [redactor2ComponentAttributes.component]: context?.inEditMode
        ? 'true'
        : undefined,
      [redactor2ComponentAttributes.active]: active ? 'true' : undefined,
      // [redactor2ComponentAttributes.hovered]: context?.inEditMode ? "true" : undefined,
      // "data-redactor--redactor-component": "true",
      hovered,

      showHiddenTags: context?.showHiddenTags ?? false,
    }

    // if (context?.inEditMode) {
    //   props[redactor2ComponentAttributes.component] = 'true';
    // }

    return props
  }, [
    wrapperContent,
    context?.inEditMode,
    context?.showHiddenTags,
    active,
    hovered,
  ])
}

export default useRedactorComponentInit
