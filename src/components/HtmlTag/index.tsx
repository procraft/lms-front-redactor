import React, { useCallback, useMemo } from 'react'
import NextHead from 'next/head'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { redactor2ComponentAttributes } from '../../styles'
import { ImgWrapper } from './ImgWrapper'
import { ButtonWrapper } from './ButtonWrapper'
import { RelStylesheet } from './RelStylesheet'
import { Script } from './Script'
import { Style } from './Style'
import { VideoWrapper } from './VideoWrapper'
import { HtmlTagContentEditable } from './ContentEditable'

export const HtmlTag: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  children: _children,
  parent,
  updateParent,
  isDirty,
  updateTemplate,
  // ...other
}) => {
  _children

  const {
    tag: Tag,
    text,
    className: componentClassName,
    query: _query,
    first: _first,
    ...tagProps
  } = object.props

  _query
  _first

  const { ref, element, active, activeSetter } =
    useRedactorComponentRef<HTMLElement>()

  const { hoverable, canContentEditable, allowChildComponents } =
    useMemo(() => {
      let hoverable = true
      let canContentEditable = true
      let allowChildComponents = true

      if (inEditMode) {
        if (Tag) {
          const tagName = Tag.toLowerCase()

          switch (tagName) {
            case 'script':
            case 'style':
            case 'link':
            case 'img':
            case 'video':
            case 'button':
              hoverable = true
              break

            default:
          }

          switch (tagName) {
            case 'script':
            case 'style':
            case 'link':
            case 'img':
            case 'button':
            case 'video':
              canContentEditable = false
              break

            default:
          }

          switch (tagName) {
            case 'script':
            case 'style':
            case 'link':
            case 'img':
            case 'video':
              allowChildComponents = false
              break

            default:
          }
        }
      }

      return { hoverable, canContentEditable, allowChildComponents }
    }, [Tag, inEditMode])

  const {
    wrapperContent,
    hovered: _hovered,
    showHiddenTags,
    ...otherInitProps
    // TODO этот кух не понимает HTMLDivElement | HTMLAnchorElement, а HTMLElement дает ошибку типа при передачи в анкор
  } = useRedactorComponentInit({
    object,
    updateObject,
    wrapperContainer,
    parent,
    updateParent,
    element,
    active,
    activeSetter,
    hoverable,
    canEditHTML: true,
    isDirty,
    updateTemplate,
    allowChildComponents,
  })

  _hovered

  const closeHandler = useCallback(() => {
    return activeSetter(false)
  }, [activeSetter])

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

  const content = useMemo<JSX.Element | null>(() => {
    if (!Tag) {
      return <>{text}</>
    }

    const tagLower = Tag.toLowerCase()

    const renderSimpleTag = () => {
      const extraProps = (() => {
        if (['link', 'meta'].includes(tagLower)) return null
        let __html = object.components[0]?.props.text ?? ''
        // добавила проверку чтобы при создании нового компонента, в него можно было добавлять теги style и script
        if (tagLower === 'style' || tagLower === 'script') __html = text ?? __html
        return {dangerouslySetInnerHTML: {__html}}
      })()

      return React.createElement(Tag, { ...tagProps, ...extraProps })
    }

    const tagPropsExt = {className: componentClassName, controls: undefined, ...tagProps}

    // Если нужно что-то отрендерить в <head>, ищем атрибут "data-head"
    const renderToHead = Object.prototype.hasOwnProperty.call(tagProps, 'data-head')
    if (renderToHead && !inEditMode) {
      return <NextHead>{renderSimpleTag()}</NextHead>
    }

    switch (tagLower) {
      case 'title': return renderSimpleTag()
      case 'script': return renderSimpleTag()
      // https://github.com/vercel/next.js/issues/21862
      case 'style': return renderSimpleTag()

      case 'video': {
        return (
          <>
            <video
              {...tagPropsExt}
              ref={ref as React.LegacyRef<HTMLVideoElement> | undefined}
              controls={
                inEditMode && !childrenContent ? undefined : tagPropsExt.controls
              }
            >
              {childrenContent}
            </video>
            <VideoWrapper
              // {...renderProps}
              ref={undefined}
              // forwardedRef={renderProps.ref}
              forwardedRef={ref}
              object={object}
              updateObject={updateObject}
              active={active}
              closeHandler={closeHandler}
              element={element}
            />
          </>
        )
      }

      default:
    }

    // TODO надо будет перепроверить логику на предмет ошибок
    /**
     * Если у компонента есть props.children, то выводим props.children
     */
    return (
      <Tag
        // @ts-expect-error
        ref={ref as (el: any) => void}
        {...tagPropsExt}
      >
        {object.props.children || childrenContent}
      </Tag>
    )
  }, [
    Tag,
    componentClassName,
    tagProps,
    ref,
    object,
    childrenContent,
    text,
    inEditMode,
    updateObject,
    active,
    closeHandler,
    element,
  ])

  // TODO: Было: Пока отключил этот перехватчик, но надо будет понаблюдать (за кнопками, селектами и т.п.)
  // Стало: Перепроверить, не перехватывается.
  // Цель: video
  const preventDefault = useCallback((event: React.MouseEvent) => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('preventDefault event', event)
    }
    event.preventDefault()
  }, [])

  return useMemo(() => {
    // return content;

    if (
      !content ||
      // !inEditMode ||
      !object.props.tag ||
      typeof content !== 'object'
    ) {
      return content
    }

    const renderProps = {
      ref,
      ...tagProps,
      ...otherInitProps,
      [redactor2ComponentAttributes.component]: 'HtmlTag',
      [redactor2ComponentAttributes.tag]: object.props.tag,
      onClick: preventDefault,
    }

    // let elementContent: JSX.Element = React.cloneElement(content, renderProps)
    let elementContent: JSX.Element = content

    if (inEditMode) {
      switch (object.props.tag) {
        case 'style':
          if (!showHiddenTags) {
            return content
          }

          elementContent = (
            <Style
              {...renderProps}
              ref={undefined}
              forwardedRef={renderProps.ref}
              object={object}
              updateObject={updateObject}
              active={active}
              closeHandler={closeHandler}
              element={element}
            >
              {content}
            </Style>
          )

          break

        case 'script':
          if (!showHiddenTags) {
            return content
          }

          elementContent = (
            <>
              <Script
                {...renderProps}
                ref={undefined}
                forwardedRef={renderProps.ref}
                object={object}
                updateObject={updateObject}
                active={active}
                closeHandler={closeHandler}
                element={element}
              >
                {content}
              </Script>
            </>
          )
          break

        case 'link':
          if (!showHiddenTags) {
            return content
          }

          elementContent = (
            <>
              {content}
              <RelStylesheet
                {...renderProps}
                ref={undefined}
                forwardedRef={renderProps.ref}
                object={object}
                updateObject={updateObject}
                active={active}
              />
            </>
          )
          break

        case 'img':
          elementContent = (
            <>
              <ImgWrapper
                {...renderProps}
                ref={undefined}
                forwardedRef={renderProps.ref}
                object={object}
                updateObject={updateObject}
                active={active}
                closeHandler={closeHandler}
                element={element}
              >
                {content}
              </ImgWrapper>
            </>
          )
          break

        case 'button':
          elementContent = (
            <>
              <ButtonWrapper
                {...renderProps}
                ref={undefined}
                forwardedRef={renderProps.ref}
                object={object}
                updateObject={updateObject}
                active={active}
                closeHandler={closeHandler}
                element={element}
              >
                {content}
              </ButtonWrapper>
            </>
          )
          break

        // case 'video':
        //   elementContent = (
        //     <>
        //       <VideoWrapper
        //         {...renderProps}
        //         ref={undefined}
        //         forwardedRef={renderProps.ref}
        //         object={object}
        //         updateObject={updateObject}
        //         active={active}
        //         closeHandler={closeHandler}
        //         element={element}
        //       >
        //         {content}
        //       </VideoWrapper>
        //     </>
        //   )
        //   break

        default:
      }
    }

    return (
      <>
        {wrapperContent}
        {elementContent}
        {inEditMode && canContentEditable ? (
          <HtmlTagContentEditable
            active={active}
            element={element}
            canContentEditable={canContentEditable}
            activeSetter={activeSetter}
          />
        ) : null}
      </>
    )
  }, [
    content,
    object,
    ref,
    tagProps,
    otherInitProps,
    preventDefault,
    inEditMode,
    wrapperContent,
    canContentEditable,
    showHiddenTags,
    updateObject,
    active,
    closeHandler,
    element,
    activeSetter,
  ])
}
