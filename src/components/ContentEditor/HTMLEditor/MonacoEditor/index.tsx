import React, { useState, useCallback, useEffect } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'
import { useMonacoEditor } from '../../../../hooks/useMonacoEditor'
import { ContentEditorHTMLEditorMonacoEditorProps } from './interfaces'
import { nodeChildsToEditorComponentObjectComponents } from '../../ContentProxy/hooks/useContentEditable/helpers/nodeToEditorComponentObject'

export const ContentEditorHTMLEditorMonacoEditor: React.FC<ContentEditorHTMLEditorMonacoEditorProps> =
  ({ active, element, object, updateObject }) => {
    const [source] = useState(element.innerHTML)

    // const onChange = useCallback((content) => {
    //   console.log('onChange content', content)
    // }, [])

    // const onChange = useCallback((content: string) => {
    //   console.log('onChange content', content)
    //   // const contentElement = object.components[0] || {
    //   //   name: 'HtmlTag',
    //   //   component: 'HtmlTag',
    //   //   components: [],
    //   //   props: {
    //   //     text: '',
    //   //   },
    //   // }

    //   // updateObject(object, {
    //   //   components: [
    //   //     {
    //   //       ...contentElement,
    //   //       props: {
    //   //         ...contentElement.props,
    //   //         text: content,
    //   //       },
    //   //     },
    //   //   ],
    //   // })
    // }, [])

    const [editorInstance, editorInstanceSetter] =
      useState<monacoEditor.editor.IStandaloneCodeEditor | null>(null)

    useEffect(() => {
      if (!editorInstance) {
        return
      }

      const model = editorInstance.getModel()

      const modelOnChange = model?.onDidChangeContent((_event) => {
        const value = model.getValue()

        // console.log(
        //   'ContentEditorHTMLEditorMonacoEditor onDidChangeContent event',
        //   event
        // )
        // console.log(
        //   'ContentEditorHTMLEditorMonacoEditor onDidChangeContent editorInstance',
        //   value
        // )

        // Создаем ноду и передаем содержимое как HTML

        const node = global.document.createElement('div')
        node.innerHTML = value

        const { components } = nodeChildsToEditorComponentObjectComponents(node)

        if (components) {
          updateObject(object, { components })
        }
      })

      return () => {
        modelOnChange?.dispose()
      }
    }, [editorInstance, object, updateObject])

    const onEditorInit = useCallback(
      (editorInstance: monacoEditor.editor.IStandaloneCodeEditor) => {
        editorInstanceSetter(editorInstance)
      },
      []
    )

    const { editor } = useMonacoEditor({
      active,
      editorProps: {
        language: 'html',
        source,
        // onChange,
        onEditorInit,
      },
    })

    return <>{editor}</>
  }
