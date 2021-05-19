import React, { useCallback, useMemo } from 'react'
// import Script from './Script'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
// import Link from 'next/link'

const HtmlTag: RedactorComponent = ({
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
    ref,
    className,
    wrapperContent,
    // TODO этот кух не понимает HTMLDivElement | HTMLAnchorElement, а HTMLElement дает ошибку типа при передачи в анкор
  } = useRedactorComponentInit<HTMLElement>({
    object,
    updateObject,
    wrapperContainer,
    parent,
    updateParent,
  })

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

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

  const content = useMemo(() => {
    if (!Tag) {
      return text
    }

    const tagProps = {
      className: componentClassName,
      ...otherProps,
    }

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
      case 'a': {
        return (
          // <Link href={object.props.href || ''}>
          <a
            href={object.props.href || ''}
            {...tagProps}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ref={ref}
          >
            {childrenContent}
          </a>
          // </Link>
        )
      }

      default:
    }

    // TODO надо будет перепроверить логику на предмет ошибок
    /**
     * Если у компонента есть props.children, то выводим props.children
     */
    return <Tag {...tagProps}>{object.props.children || childrenContent}</Tag>
  }, [Tag, childrenContent, componentClassName, object.components, object.props.children, object.props.href, otherProps, ref, text])

  const preventDefault = useCallback((event: React.MouseEvent) => {
    event.preventDefault()
  }, [])

  return useMemo(() => {
    // return <>{content}</>

    if (
      !content ||
      !inEditMode ||
      !object.props.tag ||
      ![
        'div',
        'ul',
        'ol',
        'li',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'a',
        'script',
        'style',
        'link',
      ].includes(object.props.tag) ||
      typeof content !== 'object'
    ) {
      return <>{content}</>
    }

    // const Element = React.createElement(object.props.tag, {

    // });

    // console.log('content', content);

    const renderProps = {
      ref,
      className: [
        componentClassName,
        className,
        'HtmlTag',
        object.props.tag,
      ].join(' '),
      ...otherProps,
      onClick: preventDefault,
    }

    let elementContent: JSX.Element = React.cloneElement(content, renderProps)

    switch (object.props.tag) {
      case 'script':
      case 'style':

        // TODO Сейчас из-за того, что мы обрамляем эти теги техническим враппером,
        // при обновлении контента они попадают в стейт.
        // Надо исключить такое поведение
        elementContent = (
          <div
            {...renderProps}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ref={renderProps.ref}
            // contentEditable={false}

            /**
             * Добавляем атрибут, чтобы при обработке измененного контента возвращался дочерний элемент,
             * а не технический, иначе возникает дублирование вложенности.
             * Важно! Дочерний элемент тогда должен быть только один.
             */
            data-redactor--fake-wrapper
            data-redactor--src={object.props.src}
            data-redactor--content-length={object.components[0]?.props.text?.length}
          >
            {content}
          </div>
        )
        break

      case 'link':

        // TODO Сейчас из-за того, что мы обрамляем эти теги техническим враппером,
        // при обновлении контента они попадают в стейт.
        // Надо исключить такое поведение
        elementContent = (
          <div
            {...renderProps}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ref={renderProps.ref}
            // contentEditable={false}

            /**
             * Добавляем атрибут, чтобы при обработке измененного контента возвращался дочерний элемент,
             * а не технический, иначе возникает дублирование вложенности.
             * Важно! Дочерний элемент тогда должен быть только один.
             */
            data-redactor--fake-wrapper
            data-redactor--rel={object.props.rel}
            data-redactor--href={object.props.href}
          >
            {content}
          </div>
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

    // return (
    //   <>
    //     {wrapperContent}
    //     <div
    //       ref={ref}
    //       className={[
    //         className,
    //         'HtmlTag',
    //         object.props.tag?.toLowerCase(),
    //       ].join(' ')}
    //     >
    //       {content}
    //     </div>
    //   </>
    // )
  }, [className, componentClassName, content, inEditMode, object.components, object.props.href, object.props.rel, object.props.src, object.props.tag, otherProps, preventDefault, ref, wrapperContent])
}

export default HtmlTag
