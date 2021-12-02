/* eslint-disable react/no-children-prop */
import React, { useMemo } from 'react'
import NextHead from 'next/head'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import { RedactorComponentStyled } from '../../RedactorComponent/styles'
import { useOpened } from '../../hooks/useOpened'
import { Modal2 } from '../../ui/Modal2'
import { ContentEditorHTMLEditorMonacoEditor } from '../ContentEditor/HTMLEditor/MonacoEditor'
// import { HeadManagerContext } from 'next/dist/next-server/lib/head-manager-context'

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
    canEditHTML: false,
  })

  _hovered

  // Null
  // _active

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

  // const title = useCallback(() => {
  //   return <title id="title">sdfffwefewf</title>
  // }, [])

  // console.log('childrenContent', childrenContent)

  const content = useMemo(() => {
    // return <NextHead>{childrenContent}</NextHead>
    // return <NextHead>{object.props.content}</NextHead>

    // console.log('object.props.content', object.props.content)

    /**
     * В режиме редактирования нам нужен исходный контент.
     * А NextHead рендерит все в head и там не найти какие именно элементы рендерятся.
     */
    return inEditMode ? childrenContent : <NextHead>{childrenContent}</NextHead>

    // return <NextHead>{title}</NextHead>
  }, [childrenContent, inEditMode])

  // const onChange = useCallback(
  //   (content: string) => {
  //     // console.log('onChange content', content)

  //     // console.log('onChange object.components', object.components)

  //     try {
  //       if (!object.components) {
  //         console.error('onChange object.components is empty', { ...object })
  //         return
  //       }

  //       const contentElement = object.components[0] || {
  //         name: 'Head',
  //         component: 'Head',
  //         components: [],
  //         props: {},
  //       }

  //       if (!contentElement) {
  //         console.error('onChange contentElement is null')
  //         return
  //       }

  //       const data = {
  //         components: [
  //           {
  //             ...contentElement,
  //             props: {
  //               ...contentElement.props,
  //               text: content,
  //             },
  //           },
  //         ],
  //       }

  //       // console.log('onChange data', data)

  //       updateObject(object, data)
  //     } catch (error) {
  //       console.error('Head onChange error, object', error, { ...object })
  //     }
  //   },
  //   [object, updateObject]
  // )

  // const { editor } = useMonacoEditor({
  //   active,
  //   editorProps: {
  //     // source: object.components[0]?.props.text || '',
  //     source: element?.innerHTML || '',
  //     // ext: 'css',
  //     // saveEditorContent,
  //     // updateFile,
  //     language: 'html',
  //     onChange,
  //   },
  // })

  const { opened, closeHandler } = useOpened({
    active,
    element,
  })

  // const updateObjectCustom = useCallback(function (...rest) {
  //   console.log('updateObjectCustom arguments', rest)
  // }, [])

  // const updateParentCustom = useCallback(function (...rest) {
  //   console.log('updateParentCustom arguments', rest)
  // }, [])

  return useMemo(() => {
    // if (!inEditMode) {
    //   return content
    // }

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
