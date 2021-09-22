import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

import loader from '@monaco-editor/loader'
import { MonacoEditorProps } from './interfaces'

export const Editor: React.FC<MonacoEditorProps> = ({
  source,
  language,
  onChange,
  onEditorInit,
}) => {
  const [editorContainer, editorContainerSetter] =
    useState<HTMLDivElement | null>(null)

  const editorContainerRef = useCallback((el: HTMLDivElement) => {
    editorContainerSetter(el)
  }, [])

  /**
   * Флаг того, что редактор инициализирован.
   * Проблема просто в том, что редактор загружается из CDN не сразу,
   * а когда мы начинаем редактирование. На слобом интернете задержка очень ощутимая,
   * долгое время редактор выглядит пустым.
   */
  const [editorEnited, editorEnitedSetter] = useState(false)

  /**
   * Init editor
   */
  // TODO Сейчас у нас редактор не реагирует на зименения извне

  /**
   * Очень важно: если извне передаются переменные, обновляемые при каждом изменении в редакторе,
   * то контент редактора перерисовывается повторно и возникают проблемы (курсор сбрасывается, контент не изменяется).
   * Поэтому надо четко следить за каждым изменением
   */
  useEffect(() => {
    if (!editorContainer) {
      return
    }

    let editorInstance: monacoEditor.editor.IStandaloneCodeEditor | null = null
    let model: monacoEditor.editor.ITextModel | null = null

    loader.init().then((monaco: typeof monacoEditor) => {
      editorEnitedSetter(true)

      editorInstance = monaco.editor.create(editorContainer, {
        value: source,
        language,
      })

      // model = monaco.editor.getModels()[0]
      model = editorInstance.getModel()

      // model?.onDidChangeContent((_event) => {
      //   // console.log('onDidChangeContent event', event)
      //   // console.log(
      //   //   'onDidChangeContent editorInstance',
      //   //   editorInstance?.getValue()
      editorEnitedSetter(true)
      //   // )
      //   editorInstance && onChange(editorInstance.getValue())
      // })

      onEditorInit && onEditorInit(editorInstance)
    })

    return () => {
      /**
       * Если есть измененный контент, сохраняем его
       */
      if (model) {
        const value = model.getValue()

        if (value !== source) {
          onChange && onChange(value)
        }
      }

      /**
       * Destroy editor
       */
      editorInstance?.dispose()
      model?.dispose()
    }
  }, [source, editorContainer, language, onChange, onEditorInit])

  return useMemo(() => {
    return (
      <div
        ref={editorContainerRef}
        style={{
          // height: 600,
          // height: '60vh',
          minHeight: '60vh',
          height: '100%',
          // border: '1px solid',
        }}
      >
        {/* 
        Пока редактор не загрузился, выводим исходный код
        */}
        {!editorEnited ? (
          <>
            <div
              style={{
                marginBottom: 15,
              }}
            >
              Редактор загружается...
            </div>
            {source}
          </>
        ) : null}
      </div>
    )
  }, [editorContainerRef, editorEnited, source])
}

export default Editor
