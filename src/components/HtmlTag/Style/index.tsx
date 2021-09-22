import React, { useCallback } from 'react'
import { StyleProps } from './interfaces'
import { useMonacoEditor } from '../../../hooks/useMonacoEditor'
import { MonacoEditorModal } from '../../../ui/MonacoEditorModal'

export const Style: React.FC<StyleProps> = ({
  // src,
  children,
  object,
  forwardedRef,
  updateObject,
  active,
  closeHandler,
  ...other
}) => {
  const onChange = useCallback(
    (content: string) => {
      try {
        if (!object.components) {
          console.error('object.components is empty', { ...object })
          return
        }

        const contentElement = object.components[0] || {
          name: 'HtmlTag',
          component: 'HtmlTag',
          components: [],
          props: {
            text: '',
          },
        }

        if (!contentElement) {
          console.error('contentElement is null')
          return
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
      } catch (error) {
        console.error('Style onChange error, object', error, { ...object })
      }
    },
    [object, updateObject]
  )

  const { editor } = useMonacoEditor({
    active,
    editorProps: {
      source: object.components[0]?.props.text || '',
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
        {active ? (
          <MonacoEditorModal
            title="CSS"
            closeHandler={closeHandler}
            preventClickEvent={true}
          >
            {editor}
          </MonacoEditorModal>
        ) : (
          children
        )}
      </div>
    </>
  )
}
