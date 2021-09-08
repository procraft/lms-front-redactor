import React, { useMemo } from 'react'
import NextHead from 'next/head'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'

/**
 * Выводит содержимое в <head></head>
 */
// TODO: Пока это не работает как надо. На стороне сервера отрисовывает ОК, на фронте нет (исчезают отрисованные теги).
// Вероятнее всего надо будет пилить свое решение.
export const Head: RedactorComponent = ({
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

  const {
    // ref,
    // className,
    wrapperContent,
    // active: _active,
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
  })

  // Null
  // _active

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

  const content = useMemo(() => {
    return <NextHead>{childrenContent}</NextHead>
  }, [childrenContent])

  return useMemo(() => {
    if (!inEditMode) {
      return content
    }

    return (
      <>
        {wrapperContent}
        <div
          {...other}
          {...otherInitProps}
          ref={ref}
          // className={className}
          contentEditable="false"
          suppressContentEditableWarning
        >
          {content}
        </div>
      </>
    )
  }, [inEditMode, wrapperContent, other, otherInitProps, ref, content])
}
