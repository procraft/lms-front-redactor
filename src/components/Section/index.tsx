import React, { useMemo } from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { AddWidgetButton } from '../../ui/AddWidgetButton'
import { SectionStyled } from './styles'

export const Section: RedactorComponent = ({
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
    hovered,
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

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

  const content = useMemo(() => {
    return (
      <SectionStyled
        {...other}
        {...otherInitProps}
        ref={inEditMode ? ref : undefined}
        // className={className}
        contentEditable="false"
        suppressContentEditableWarning
        {...object.props}
      >
        {childrenContent}
      </SectionStyled>
    )
  }, [childrenContent, inEditMode, object.props, other, otherInitProps, ref])

  return useMemo(() => {
    if (!inEditMode) {
      return content
    }

    // TODO Сейчас все хуки срабатывают даже когда не в режиме редактирования находимся,
    // хотя они нужны именно только в режиме редактирования.
    // Это бьет по производиельности.
    // Надо все во враппер перенести, чтобы срабатывало только при редактировании.
    return (
      <>
        {wrapperContent}
        {content}

        {/* Если дочерних элементов нет, то даем возможность вставлять дочерние виджеты */}
        {!content.props.children && hovered === true && element ? (
          <AddWidgetButton
            hovered={hovered}
            element={element}
            object={object}
            updateObject={updateObject}
            activeSetter={activeSetter}
          />
        ) : null}
      </>
    )
  }, [
    inEditMode,
    content,
    wrapperContent,
    hovered,
    element,
    object,
    updateObject,
    activeSetter,
  ])
}
