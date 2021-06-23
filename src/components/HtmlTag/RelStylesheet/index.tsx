import React, { useCallback, } from 'react'
import { RelStylesheetProps } from './interfaces'
import { useUploader } from '../../../hooks/useUploader'


export const RelStylesheet: React.FC<RelStylesheetProps> = ({
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
          href: url,
        },
      })
    },
    [object, updateObject]
  )

  const { uploader } = useUploader({
    active,
    onUpload,
  })

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
        data-redactor--rel={object.props.rel}
        data-redactor--href={object.props.href}
        // data-redactor--content-length={object.components[0]?.props.text?.length}
      >
        {uploader}

        {/* {content} */}
        {children}
      </div>
    </>
  )
}
