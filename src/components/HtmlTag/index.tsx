import React, { useCallback, useMemo } from 'react'
// import Script from './Script'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'

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
  } = useRedactorComponentInit<HTMLDivElement>({
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
    ...otherProps
  } = object.props

  const content = useMemo(() => {
    if (!Tag) {
      return text
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

      default:
    }

    return (
      <Tag className={componentClassName} {...otherProps}>
        {childrenContent}
      </Tag>
    )
  }, [
    Tag,
    childrenContent,
    componentClassName,
    object.components,
    otherProps,
    text,
  ])

  const preventDefault = useCallback((event: MouseEvent) => {
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
      ].includes(object.props.tag) ||
      typeof content !== 'object'
    ) {
      return <>{content}</>
    }

    // const Element = React.createElement(object.props.tag, {

    // });

    // console.log('content', content);

    const elementContent = React.cloneElement(content, {
      ref,
      className: [
        componentClassName,
        className,
        'HtmlTag',
        object.props.tag?.toLowerCase(),
      ].join(' '),
      ...otherProps,
      onClick: preventDefault,
    })

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
  }, [
    className,
    componentClassName,
    content,
    inEditMode,
    object.props.tag,
    otherProps,
    preventDefault,
    ref,
    wrapperContent,
  ])
}

export default HtmlTag
