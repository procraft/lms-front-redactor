import React, { useCallback, useMemo } from 'react'
import { useMonacoEditor } from '../../../../hooks/useMonacoEditor'
import { InlineScriptProps } from './interfaces'

export const InlineScript: React.FC<InlineScriptProps> = ({
  active,
  source,
  object,
  updateObject,
}) => {
  /**
   * Editor
   */

  // const saveEditorContent = useCallback((data: string) => {
  //   console.log('saveEditorContent data', data)
  // }, [])

  // const updateFile = useCallback((data: string) => {
  //   console.log('updateFile data', data)
  // }, [])

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
      source,
      // ext: 'css',
      // saveEditorContent,
      // updateFile,
      language: 'javascript',
      onChange,
    },
  })

  return useMemo(() => {
    return <>{editor}</>
  }, [editor])
}
