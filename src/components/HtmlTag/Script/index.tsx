/* eslint-disable no-console */
import React, { useCallback, useMemo } from 'react'
import { useUploader } from '../../../hooks/useUploader'
import { InlineScript } from './InlineScript'
import { ScriptProps } from './interfaces'

export const Script: React.FC<ScriptProps> = ({
  // src,
  children,
  object,
  forwardedRef,
  updateObject,
  active,
  ...other
}) => {
  const onUpload = useCallback(
    (url: string) => {
      updateObject(object, {
        components: [],
        props: {
          ...object.props,
          src: url,
        },
      })
    },
    [object, updateObject]
  )

  const { uploader } = useUploader({
    active,
    onUpload,
    inputProps: {
      accept: 'text/javascript',
    },
  })

  console.log('script object', object)
  console.log('script children', children)

  const editor = useMemo(() => {
    if (object.components[0]) {
      return (
        <InlineScript
          active={active}
          source={object.components[0].props.text || ''}
        />
      )
    } else {
      return null
    }
  }, [active, object.components])

  return (
    <>
      <div
        // {...renderProps}
        {...other}
        /**
         * Иначе не срабатывает клик по инпуту
         */
        onClick={undefined}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        ref={forwardedRef}
        // ref={renderProps.ref}
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
        {uploader}

        {editor}

        {/* {content} */}
        {children}
      </div>
    </>
  )
}
