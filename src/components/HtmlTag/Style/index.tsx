import React, { useCallback } from 'react'
import { StyleProps } from './interfaces'
import { useMonacoEditor } from '../../../hooks/useMonacoEditor'

export const Style: React.FC<StyleProps> = ({
  // src,
  children,
  object,
  forwardedRef,
  updateObject,
  active,
  ...other
}) => {
  const onChange = useCallback(
    (content: string) => {

      const contentElement = object.components[0] || {
        name: 'HtmlTag',
        component: 'HtmlTag',
        components: [],
        props: {
          text: '',
        },
      }

      updateObject(object, {
        components: [
          {
            ...contentElement,
            props: {
              ...contentElement.props,
              text: content,
            },
          },
        ],
      })
    },
    [object, updateObject]
  )

  const { editor } = useMonacoEditor({
    active,
    editorProps: {
      contents: object.components[0].props.text || '',
      // ext: 'css',
      // saveEditorContent,
      // updateFile,
      language: 'css',
      onChange,
    },
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
        // data-redactor--content-length={object.components[0]?.props.text?.length}
      >
        {active ? editor : children}
      </div>
    </>
  )
}
