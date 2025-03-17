import React, { useCallback, useMemo } from 'react'
import { useMonacoEditor } from '../../../../hooks/useMonacoEditor'
import { useOpened } from '../../../../hooks/useOpened'
import { MonacoEditorModal } from '../../../../ui/MonacoEditorModal'
import { InlineScriptProps } from './interfaces'

export const InlineScript: React.FC<InlineScriptProps> = ({
  active,
  source,
  object,
  updateObject,
  closeHandler,
  element,
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

  const { editorJsx } = useMonacoEditor({
    active,
    source,
    language: 'javascript',
    onChange,
  })

  const { opened } = useOpened({
    active,
    element,
  })

  return useMemo(() => {
    if (!active || !opened) {
      return null
    }

    return (
      <>
        <MonacoEditorModal
          title="Javascript"
          closeHandler={closeHandler}
          preventClickEvent={true}
          modal={true}
          moveable={false}
        >
          {editorJsx}
        </MonacoEditorModal>
      </>
    )
  }, [active, closeHandler, editorJsx, opened])
}
