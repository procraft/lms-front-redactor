/* eslint-disable no-console */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

import loader from '@monaco-editor/loader'
import { MonacoEditorProps } from './interfaces'

console.log('loader', loader)

export const Editor: React.FC<MonacoEditorProps> = ({ contents, language }) => {
  const [editorContainer, editorContainerSetter] =
    useState<HTMLDivElement | null>(null)

  const editorContainerRef = useCallback((el: HTMLDivElement) => {
    editorContainerSetter(el)
  }, [])

  useEffect(() => {
    console.log('useEffect loader.init', loader)

    if (!editorContainer) {
      return
    }

    let editorInstance: monacoEditor.editor.IStandaloneCodeEditor | null = null

    loader.init().then((monaco: typeof monacoEditor) => {
      console.log('monaco', monaco)

      editorInstance = monaco.editor.create(editorContainer, {
        value: contents,
        language,
      })

      console.log('editorInstance', editorInstance)

      const model = monaco.editor.getModels()[0]

      model &&
        model.onDidChangeContent((event) => {
          console.log('onDidChangeContent event', event)
          console.log(
            'onDidChangeContent editorInstance',
            editorInstance?.getValue()
          )
        })
    })
  }, [contents, editorContainer, language])

  return useMemo(() => {
    return (
      <div
        ref={editorContainerRef}
        style={{
          // height: 600,
          height: '60vh',
          border: '1px solid',
        }}
      ></div>
    )
  }, [editorContainerRef])
}

export default Editor
