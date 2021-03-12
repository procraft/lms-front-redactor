import React, { useMemo } from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'

const LandingLayout: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  ...other
}) => {
  const {
    ref,
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
          className={className}
          contentEditable="false"
          suppressContentEditableWarning
        >
          {content}
        </div>
      </>
    )
  }, [inEditMode, wrapperContent, other, ref, className, content])
}

export default LandingLayout
