import React, { useMemo } from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
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
  const {
    ref,
    // element,
    // props,
    active,
    // className,
    wrapperContent,
    ...otherInitProps
  } = useRedactorComponentInit<HTMLDivElement>({
    object,
    updateObject,
    wrapperContainer,
    parent,
    updateParent,
  })

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

  const content = useMemo(() => {
    return <>{childrenContent}</>
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
          {...object.props}
          {...otherInitProps}
          {...{ [redactor2ComponentAttributes.component]: 'content-editor' }}
          ref={ref}
          // className={[className, 'content-editor'].join(' ')}
        >
          <EditableContentProxy
            key={active.toString()}
            active={active}
            object={object}
            updateObject={updateObject}
          >
            {content}
          </EditableContentProxy>
        </div>
      </>
    )
  }, [
    inEditMode,
    wrapperContent,
    other,
    object,
    otherInitProps,
    ref,
    active,
    updateObject,
    content,
  ])
}
