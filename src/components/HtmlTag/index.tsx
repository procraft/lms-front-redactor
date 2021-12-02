import React, { useCallback, useMemo } from 'react'
import NextHead from 'next/head'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { redactor2ComponentAttributes } from '../../styles'
import { ImgWrapper } from './ImgWrapper'
import { RelStylesheet } from './RelStylesheet'
import { Script } from './Script'
import { Style } from './Style'
import { VideoWrapper } from './VideoWrapper'

export const HtmlTag: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  children: _children,
  parent,
  updateParent,
  // ...other
}) => {
  _children

  const {
    tag: Tag,
    text,
    className: componentClassName,
    query: _query,
    first: _first,
    ...otherProps
  } = object.props

  _query
  _first

  const { ref, element, active, activeSetter } =
    useRedactorComponentRef<HTMLElement>()

  const hoverable = useMemo(() => {
    if (!inEditMode) {
      return false
    }

    let hoverable = false

    if (Tag) {
      switch (Tag.toLowerCase()) {
        case 'script':
        case 'style':
        case 'link':
        case 'img':
        case 'video':
          hoverable = true
          break

        default:
      }
    }

    return hoverable
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

    const tagProps = Object.assign(
      {},
      {
        className: componentClassName,
      },
      otherProps
    )

    switch (Tag.toLowerCase()) {
      case 'title': {
        return (
          <title {...otherProps}>
            {object.components[0]?.props.text || ''}
          </title>
        )
      }
      case 'script': {
        return (
          <script
            {...otherProps}
            dangerouslySetInnerHTML={{
              __html: object.components[0]?.props.text || '',
            }}
          />
        )
      }
      case 'style': {
        // https://github.com/vercel/next.js/issues/21862
        return React.createElement('style', {
          ...otherProps,
          dangerouslySetInnerHTML: object.components[0]?.props.text
            ? {
                __html: object.components[0]?.props.text,
              }
            : undefined,
        })
      }
      case 'link':
        return (
          <NextHead>
            <link {...tagProps}>{childrenContent}</link>
          </NextHead>
        )

      case 'video': {
        return (
          <>
            <video
              {...tagProps}
              ref={ref as React.LegacyRef<HTMLVideoElement> | undefined}
              controls={
                inEditMode && !childrenContent ? undefined : tagProps.controls
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
        {...tagProps}
      >
        {object.props.children || childrenContent}
      </Tag>
    )
  }, [
    Tag,
    componentClassName,
    otherProps,
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
      ...otherProps,
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
      </>
    )
  }, [
    content,
    inEditMode,
    object,
    ref,
    otherProps,
    otherInitProps,
    preventDefault,
    wrapperContent,
    updateObject,
    active,
    closeHandler,
    element,
    showHiddenTags,
  ])
}
