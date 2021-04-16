import React, { useCallback, useMemo } from 'react'
// import Script from './Script'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import Link from 'next/link';

const HtmlTag: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  children: childrenNull,
  // ...other
}) => {
  childrenNull

  const {
    ref,
    className,
    wrapperContent,
    // TODO этот кух не понимает HTMLDivElement | HTMLAnchorElement, а HTMLElement дает ошибку типа при передачи в анкор
  } = useRedactorComponentInit<HTMLElement>({
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

  const {
    tag: Tag,
    text,
    className: componentClassName,
    query: _query,
    first: _first,
    ...otherProps
  } = object.props

  _query;
  _first;

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
        return <Link
          href={object.props.href || ''}
        >
          <a
            {...tagProps}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ref={ref}
          >
            {childrenContent}
          </a>
        </Link >
      }

      default:
    }

    return (
      <Tag {...tagProps}>
        {childrenContent}
      </Tag>
    )
  }, [Tag, childrenContent, componentClassName, object.components, object.props.href, otherProps, ref, text])

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

    let elementContent: JSX.Element = React.cloneElement(content, renderProps);

    switch (object.props.tag) {

      case 'script':
      case 'style':

        elementContent = <div
          {...renderProps}
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          ref={renderProps.ref}
        >
          {content}
        </div >
        break;

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
  }, [className, componentClassName, content, inEditMode, object.props.tag, otherProps, preventDefault, wrapperContent, ref])
}

export default HtmlTag
