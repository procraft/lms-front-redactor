/* eslint-disable react/no-children-prop */
/* eslint-disable no-console */
import React, { useCallback, useMemo } from 'react'
import NextHead from 'next/head'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import { RedactorComponentStyled } from '../../RedactorComponent/styles'
import { useOpened } from '../../hooks/useOpened'
import { MonacoEditorModal } from '../../ui/MonacoEditorModal'
import { useMonacoEditor } from '../../hooks/useMonacoEditor'
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

  console.log('childrenContent', childrenContent)

  const content = useMemo(() => {
    // return <NextHead>{childrenContent}</NextHead>
    // return <NextHead>{object.props.content}</NextHead>

    console.log('object.props.content', object.props.content)

    // const dom = (new DOMParser()).parseFromString('<title id="title">wefwfwef</title>', "text/html")
    // const dom = (new DOMParser()).parseFromString('<title id="title">wefwfwef</title>', "text/html")

    // console.log('dom', dom)

    // return (
    //   <HeadManagerContext.Consumer>
    //     {(context) => {
    //       console.log('HeadManagerContext context', context)
    //       return <></>
    //     }}
    //   </HeadManagerContext.Consumer>
    // )

    return (
      <NextHead>
        {/* <title children="erwerwefwefewf"></title>
        <script
          dangerouslySetInnerHTML={{
            __html: "alert('sdfsdfdsfffwfwefwefwef')",
          }}
        /> */}
        {childrenContent}
      </NextHead>
    )

    // return <NextHead>{title}</NextHead>
  }, [childrenContent, object.props.content])

  const onChange = useCallback(
    (content: string) => {
      try {
        if (!object.components) {
          console.error('object.components is empty', { ...object })
          return
        }

        const contentElement = object.components[0] || {
          name: 'HtmlTag',
          component: 'HtmlTag',
          components: [],
          props: {
            text: '',
          },
        }

        if (!contentElement) {
          console.error('contentElement is null')
          return
        }

        const data = {
          components: [
            {
              ...contentElement,
              props: {
                ...contentElement.props,
                text: content,
              },
            },
          ],
        }

        console.log('onChange data', data)

        updateObject(object, data)
      } catch (error) {
        console.error('Style onChange error, object', error, { ...object })
      }
    },
    [object, updateObject]
  )

  const { editor } = useMonacoEditor({
    active,
    editorProps: {
      source: object.components[0]?.props.text || '',
      // ext: 'css',
      // saveEditorContent,
      // updateFile,
      language: 'html',
      onChange,
    },
  })

  const { opened, closeHandler } = useOpened({
    active,
    element,
  })

  return useMemo(() => {
    // if (!inEditMode) {
    //   return content
    // }

    return (
      <>
        {wrapperContent}
        {active && opened ? (
          <MonacoEditorModal
            title="Head"
            closeHandler={closeHandler}
            preventClickEvent={true}
            modal={true}
            moveable={false}
          >
            {editor}
          </MonacoEditorModal>
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
    closeHandler,
    editor,
    other,
    otherInitProps,
    inEditMode,
    ref,
    content,
  ])
}
