import React from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
// import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import styled from 'styled-components'
import { RedactorComponent } from '../../RedactorComponent/interfaces'

export const Slider: RedactorComponent = ({
  object,
  updateObject,
  // inEditMode,
  wrapperContainer,
  parent,
  updateParent,
  isDirty,
  updateTemplate,
  // ...other
}) => {
  const { element, active, activeSetter } =
    useRedactorComponentRef<HTMLDivElement>()

  const {
    // wrapperContent,
    // hovered: _hovered,
    // ...otherInitProps
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
    canEditHTML: false,
    isDirty,
    updateTemplate,
    allowChildComponents: false,
  })
    const currentYear = new Date().getFullYear()
  return (
    <Root >
      <div>{currentYear}</div>
    </Root>
  )
}

// }

const Root = styled.div`
  --lms-class: Slider-Root;
  width: 100%;
  max-width: 1270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
