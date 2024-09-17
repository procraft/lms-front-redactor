/* eslint-disable react/no-children-prop */
import React, { useMemo } from 'react'
// import ReactDOM from 'react-dom'
import NextHead from 'next/head'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import { RedactorComponentStyled } from '../../RedactorComponent/styles'
import { useOpened } from '../../hooks/useOpened'
import { Modal2 } from '../../ui/Modal2'
import { ContentEditorHTMLEditorMonacoEditor } from '../ContentEditor/HTMLEditor/MonacoEditor'

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
  isDirty,
  updateTemplate,
  tagsDisabled,
  ...other
}) => {
  const { ref, element, active, activeSetter } =
    useRedactorComponentRef<HTMLDivElement>()

  const {
    // ref,
    // className,
    wrapperContent,
    hovered: _hovered,
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
    hoverable: true,
    canEditHTML: true,
    isDirty,
    updateTemplate,
    allowChildComponents: true,
  })

  _hovered

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
    tagsDisabled,
  })

  const content = useMemo(() => {
    /**
     * В режиме редактирования нам нужен исходный контент.
     * А NextHead рендерит все в head и там не найти какие именно элементы рендерятся.
     */
    return inEditMode ? childrenContent : <NextHead>{childrenContent}</NextHead>
  }, [childrenContent, inEditMode])

  const { opened, closeHandler } = useOpened({
    active,
    element,
  })

  return useMemo(() => {
    return (
      <>
        {wrapperContent}
        {/* {active && opened ? (
          <MonacoEditorModal
            title="Head"
            closeHandler={closeHandler}
            preventClickEvent={true}
            modal={true}
            moveable={false}
          >
            {editor}
          </MonacoEditorModal>
        ) : null} */}
        {active && opened && element ? (
          <Modal2
            title=" "
            modal
            moveable={false}
            preventClickEvent
            fullScreen
            closeHandler={closeHandler}
            role="monaco-modal"
          >
            {/* {editor} */}

            <ContentEditorHTMLEditorMonacoEditor
              active
              element={element}
              object={object}
              updateObject={updateObject}
              parent={parent}
              updateParent={updateParent}
            />
          </Modal2>
        ) : null}
        <RedactorComponentStyled
          {...other}
          {...otherInitProps}
          inEditMode={inEditMode}
          ref={ref}
          // className={className}
          contentEditable="false"
          suppressContentEditableWarning
        >
          {content}
        </RedactorComponentStyled>
      </>
    )
  }, [
    wrapperContent,
    active,
    opened,
    element,
    closeHandler,
    object,
    updateObject,
    parent,
    updateParent,
    other,
    otherInitProps,
    inEditMode,
    ref,
    content,
  ])
}
