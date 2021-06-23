/* eslint-disable no-console */
import React, { useCallback } from 'react'
import { useMonacoEditor } from '../../../hooks/useMonacoEditor'
import { useUploader } from '../../../hooks/useUploader'
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


  /**
   * Editor
   */

   const saveEditorContent = useCallback((data: string) => {

    console.log('saveEditorContent data', data);
  }, [])

  const updateFile = useCallback((data: string) => {

    console.log('updateFile data', data);
  }, [])

  const {
    editor,
  } = useMonacoEditor({
    contents: 'body{color: red;}',
    ext: 'css',
    saveEditorContent,
    updateFile,
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
