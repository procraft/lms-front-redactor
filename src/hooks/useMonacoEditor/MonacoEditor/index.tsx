import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

import loader from '@monaco-editor/loader'
import { MonacoEditorProps } from './interfaces'

export const Editor: React.FC<MonacoEditorProps> = ({
  contents,
  language,
  onChange,
}) => {
  const [editorContainer, editorContainerSetter] =
    useState<HTMLDivElement | null>(null)

  const editorContainerRef = useCallback((el: HTMLDivElement) => {
    editorContainerSetter(el)
  }, [])

  /**
   * Init editor
   */
  // TODO Сейчас у нас редактор не реагирует на зименения извне
  useEffect(() => {
    if (!editorContainer) {
      return
    }

    let editorInstance: monacoEditor.editor.IStandaloneCodeEditor | null = null
    let model: monacoEditor.editor.ITextModel | null = null

    loader.init().then((monaco: typeof monacoEditor) => {
      editorInstance = monaco.editor.create(editorContainer, {
        value: contents,
        language,
      })

      // model = monaco.editor.getModels()[0]
      model = editorInstance.getModel()

      // model?.onDidChangeContent((_event) => {
      //   // console.log('onDidChangeContent event', event)
      //   // console.log(
      //   //   'onDidChangeContent editorInstance',
      //   //   editorInstance?.getValue()
      //   // )
      //   editorInstance && onChange(editorInstance.getValue())
      // })
    })

    return () => {
      /**
       * Если есть измененный контент, сохраняем его
       */
      if (model) {
        onChange(model.getValue())
      }

      /**
       * Destroy editor
       */
      editorInstance?.dispose()
      model?.dispose()
    }
  }, [contents, editorContainer, language, onChange])

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
