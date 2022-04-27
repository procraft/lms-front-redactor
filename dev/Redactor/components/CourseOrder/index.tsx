import React, { useMemo } from 'react'
import { RedactorComponent, useRedactorComponentInit } from '../../../../src'
import { useRedactorComponentRef } from '../../../../src/hooks/useRedactorComponentRef'
import { CourseOrderDevStyled } from './styles'

export const CourseOrderDev: RedactorComponent = ({
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
    wrapperContent,
    // hovered: _hovered,
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
    canEditHTML: true,
    isDirty: undefined,
    updateTemplate: undefined,
    allowChildComponents: false,
  })

  const content = useMemo(() => {
    return (
      <CourseOrderDevStyled
        {...other}
        {...otherInitProps}
        ref={inEditMode ? ref : undefined}
        contentEditable="false"
        suppressContentEditableWarning
        role="CourseOrderDev"
        {...object.props}
      >
        CourseOrderDev
      </CourseOrderDevStyled>
    )
  }, [inEditMode, object.props, other, otherInitProps, ref])

  return useMemo(() => {
    return (
      <>
        {content}
        {inEditMode ? <>{wrapperContent}</> : null}
      </>
    )
  }, [inEditMode, content, wrapperContent])
}
