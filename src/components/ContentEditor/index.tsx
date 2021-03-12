import React, { useMemo } from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import EditableContentProxy from './ContentProxy'

const ContentEditor: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  ...other
}) => {
  const {
    ref,
    // element,
    active,
    className,
    wrapperContent,
  } = useRedactorComponentInit<HTMLDivElement>({
    object,
    updateObject,
    wrapperContainer,
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
          ref={ref}
          className={[className, 'content-editor'].join(' ')}
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
    ref,
    className,
    active,
    object,
    updateObject,
    content,
  ])
}

export default ContentEditor
