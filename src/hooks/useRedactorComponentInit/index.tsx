import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Context from '../../Context'
import { redactor2ComponentClasses } from '../../styles'
import { useRedactorComponentInitProps } from './interfaces'
import RedactorComponentWrapper from './RedactorComponentWrapper'

/**
 * Инициализируем редактор-компонент
 */
const useRedactorComponentInit = <El extends HTMLElement = HTMLElement>({
  object,
  updateObject,
  wrapperContainer,
  removeComponent,
}: useRedactorComponentInitProps) => {
  const context = useContext(Context)

  const [element, setElement] = useState<El | null>(null)

  const ref = useCallback((el: El) => {
    setElement(el)
  }, [])

  const [active, setActive] = useState(false)

  /**
   * Здесь сбрасываем все возможные артифакты,
   * которые могут остаться после работы компонента.
   */
  useEffect(() => {
    if (!element || !context?.inEditMode) {
      return
    }

    return () => {
      // console.log('Component will unmount');

      /**
       * active устанавливается только по клику на элемент и пока никак не сбрасывается,
       * поэтому если не сбросить, останутся элементы управления в документе.
       */
      if (active) {
        setActive(false)
      }
    }
  }, [active, context?.inEditMode, element])

  /**
   * По клику делаем компонент активным
   */
  useEffect(() => {
    if (!element || !context?.inEditMode || active) {
      return
    }

    const onClick = (event: MouseEvent) => {
      // TODO Здесь, если прерывать ивент, не кликаются внутренние элементы.
      // Возможно надо сбрасывать ивент, если уже активный элемент.

      if (
        event.target === event.currentTarget &&
        event.currentTarget instanceof HTMLElement
      ) {
        event.stopPropagation()
        event.preventDefault()
        // const el: HTMLDivElement = event.currentTarget as El;
        // el.classList.toggle("active")
        // event.target
        // event.currentTarget
        setActive(true)
      }
    }

    element.addEventListener('click', onClick)

    return () => {
      element.removeEventListener('click', onClick)
    }
  }, [active, context?.inEditMode, element])

  /**
   * Здесь навешиваем различные ивенты
   */
  useEffect(() => {
    if (!element || !context?.inEditMode) {
      return
    }

    const onMouseOver = (event: MouseEvent) => {
      // event.preventDefault();
      event.stopPropagation()

      if (
        event.target === event.currentTarget &&
        event.currentTarget instanceof HTMLElement
      ) {
        const el = event.currentTarget as El
        el.classList.add(redactor2ComponentClasses.hovered)
      }
    }

    const onMouseLeave = (event: MouseEvent) => {
      // event.preventDefault();
      event.stopPropagation()

      if (
        event.target === event.currentTarget &&
        event.currentTarget instanceof HTMLElement
      ) {
        const el = event.currentTarget as El
        el.classList.remove(redactor2ComponentClasses.hovered)
      }
    }

    /**
     * Add events
     */
    element.addEventListener('mouseover', onMouseOver)
    element.addEventListener('mouseout', onMouseLeave)

    return () => {
      /**
       * Remove events
       */
      element.removeEventListener('mouseover', onMouseOver)
      element.removeEventListener('mouseout', onMouseLeave)
    }
  }, [context?.inEditMode, element])

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

  const closeEditor = useCallback(() => {
    setActive(false)
  }, [])

  /**
   * Выводит обертку управления компонентом
   */
  const wrapperContent = useMemo(() => {
    if (!element || !active) {
      return
    }

    return (
      <RedactorComponentWrapper
        element={element}
        updateObject={updateObject}
        object={object}
        closeEditor={closeEditor}
        container={wrapperContainer}
        removeComponent={removeComponent}
      />
    )
  }, [active, closeEditor, element, object, updateObject, wrapperContainer, removeComponent])

  return useMemo(() => {
    const className = []

    if (context?.inEditMode) {
      className.push(redactor2ComponentClasses.component)
    }

    if (active) {
      className.push('active')
    }

    // if (active) {
    //   className.push(redactor2ComponentClasses.active)
    // }

    return {
      ref,
      className: className.length ? className.join(' ') : undefined,
      active,
      wrapperContent,
      element,
    }
  }, [context?.inEditMode, ref, active, wrapperContent, element])
}

export default useRedactorComponentInit
