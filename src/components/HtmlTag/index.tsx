import React, { useCallback, useMemo } from 'react'
// import Script from './Script'
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
// import Link from 'next/link'

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
    // ref,
    // className,
    wrapperContent,
    // active,
    hovered: _hovered,
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

  const content = useMemo(() => {
    if (!Tag) {
      return text
    }

    // const tagProps = {
    //   className: componentClassName,
    //   ...otherProps,
    // }

    const tagProps = Object.assign({}, {
      className: componentClassName,
    }, otherProps)

    switch (Tag.toLowerCase()) {
      case 'script': {
        return (
          <script
            {...otherProps}
            // src={object.props.src}
            // innerHTML={object.components[0]?.props.text}
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
      // case 'a': {
      //   return (
      //     // <Link href={object.props.href || ''}>
      //     <a
      //       href={object.props.href || ''}
      //       {...tagProps}

      //       ref={ref as React.LegacyRef<HTMLAnchorElement> | undefined}
      //     >
      //       {childrenContent}
      //     </a>
      //     // </Link>
      //   )
      // }

      // TODO Закомментировал. Не совсем ясно будут ли какие последствия. Но вообще не должны.
      // case 'img': {
      //   return (
      //     <img
      //       {...tagProps}
      //       ref={ref as React.LegacyRef<HTMLImageElement> | undefined}
      //     />
      //   )
      // }
      case 'video': {
        return (
          <video
            {...tagProps}
            ref={ref as React.LegacyRef<HTMLVideoElement> | undefined}
            controls={!childrenContent ? undefined : tagProps.controls}
          >
            {childrenContent}
          </video>
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
  }, [Tag, componentClassName, otherProps, ref, object, childrenContent, text])

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
    // return <>{content}</>

    if (
      !content ||
      !inEditMode ||
      !object.props.tag ||
      // ![
      //   'div',
      //   'ul',
      //   'ol',
      //   'li',
      //   'table',
      //   'thead',
      //   'tbody',
      //   'tr',
      //   'th',
      //   'td',
      //   'a',
      //   'script',
      //   'style',
      //   'link',
      // ].includes(object.props.tag) ||
      typeof content !== 'object'
    ) {
      return <>{content}</>
    }

    // const Element = React.createElement(object.props.tag, {

    // });

    // console.log('content', content);

    const renderProps = {
      ref,
      ...otherProps,
      ...otherInitProps,
      [redactor2ComponentAttributes.component]: 'HtmlTag',
      [redactor2ComponentAttributes.tag]: object.props.tag,
      onClick: preventDefault,
    }

    let elementContent: JSX.Element = React.cloneElement(content, renderProps)

    switch (object.props.tag) {
      case 'style':
        elementContent = (
          <Style
            {...renderProps}
            ref={undefined}
            forwardedRef={renderProps.ref}
            object={object}
            updateObject={updateObject}
            active={active}
            closeHandler={closeHandler}
          >
            {content}
          </Style>
        )

        break

      case 'script':
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
            >
              {content}
            </Script>
          </>
        )
        break

      case 'link':
        elementContent = (
          <>
            <RelStylesheet
              {...renderProps}
              ref={undefined}
              forwardedRef={renderProps.ref}
              object={object}
              updateObject={updateObject}
              active={active}
            >
              {content}
            </RelStylesheet>
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

      case 'video':
        elementContent = (
          <>
            <VideoWrapper
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
            </VideoWrapper>
          </>
        )
        break

      default:
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
  ])
}
