import React, { useCallback, useMemo } from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import {
  RedactorComponent,
  RedactorComponentObject,
} from '../../RedactorComponent/interfaces'
import { redactor2ComponentAttributes } from '../../styles'
import EditableContentProxy from './ContentProxy'

export const ContentEditor: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  parent,
  updateParent,
  ...other
}) => {
  const { ref, element, active, activeSetter } =
    useRedactorComponentRef<HTMLDivElement>()

  // console.log('element', element);

  // useEffect(() => {
  //   if (!element || !active) {
  //     return
  //   }

  //   const onClick = (event: MouseEvent) => {
  //     // console.log('ContentEditor onClick event', event)

  //     // Внешний объект
  //     // console.log(
  //     //   'ContentEditor onClick event.currentTarget',
  //     //   event.currentTarget
  //     // )

  //     // Внутренний объект
  //     // console.log('ContentEditor onClick event.target', event.target)

  //     // if (
  //     //   event.target === event.currentTarget &&
  //     //   event.currentTarget instanceof HTMLElement
  //     // ) {
  //     event.stopPropagation()
  //     //   event.preventDefault()
  //     //   // const el: HTMLDivElement = event.currentTarget as El;
  //     //   // el.classList.toggle("active")
  //     //   // event.target
  //     //   // event.currentTarget

  //     //   // create and dispatch the event
  //     //   // const event2 = new CustomEvent<RedactorComponentClickEventDetail>(
  //     //   //   'redactorComponentActive',
  //     //   //   {
  //     //   //     // detail: {
  //     //   //     //   hazcheeseburger: true,
  //     //   //     // },
  //     //   //     // target: element,
  //     //   //     // currentTarget: element,
  //     //   //     detail: {
  //     //   //       element,
  //     //   //     },
  //     //   //   }
  //     //   // )

  //     //   // event2.preventDefault()

  //     //   // global.document.dispatchEvent(event2)

  //     //   activeSetter(true)
  //     // }
  //   }

  //   element.addEventListener('click', onClick, true)

  //   return () => {
  //     element.removeEventListener('click', onClick, true)
  //   }
  // }, [active, element])

  const {
    // ref,
    // element,
    // props,
    // active,
    // className,
    wrapperContent,
    hovered: _hovered,
    ...otherInitProps
  } = useRedactorComponentInit({
    object,
    updateObject,
    wrapperContainer,
    parent,
    updateParent,
    element,
    active,
    activeSetter,
    hoverable: true,
  })

  _hovered

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

  const content = useMemo(() => {
    return <>{childrenContent}</>
  }, [childrenContent])

  const updateObjectCustom = useCallback(
    (
      current: Readonly<RedactorComponentObject<{}>>,
      data: Partial<RedactorComponentObject<{}>>
    ) => {
      return updateObject(current, data)
    },
    [updateObject]
  )

  return useMemo(() => {
    // if (!inEditMode) {
    //   return content
    // }

    return (
      <>
        {wrapperContent}
        <div
          {...other}
          {...object.props}
          {...otherInitProps}
          {...{ [redactor2ComponentAttributes.component]: 'content-editor' }}
          ref={ref}
          // className={[className, 'content-editor'].join(' ')}
        >
          <EditableContentProxy
            // key={active.toString()}
            active={active}
            object={object}
            // updateObject={updateObject}
            updateObject={updateObjectCustom}
            activeSetter={activeSetter}
            inEditMode={inEditMode}
          >
            {content}
          </EditableContentProxy>
        </div>
      </>
    )
  }, [
    // inEditMode,
    wrapperContent,
    other,
    object,
    otherInitProps,
    ref,
    active,
    updateObjectCustom,
    content,
    activeSetter,
    inEditMode,
  ])
}
