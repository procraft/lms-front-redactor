import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

import loader from '@monaco-editor/loader'
import { MonacoEditorProps } from './interfaces'
import { HtmlTextarea } from './HtmlTextarea'

export const Editor: React.FC<MonacoEditorProps> = ({
  language,
  value,
  onChange,
  onClose,
  onEditorInit,
}) => {
  const [editorContainer, setEditorContainer] = useState<HTMLDivElement | null>(null)

  const editorContainerRef = useCallback((el: HTMLDivElement) => {
    setEditorContainer(el)
  }, [])

  /**
   * Флаг того, что редактор инициализирован.
   * Проблема просто в том, что редактор загружается из CDN не сразу,
   * а когда мы начинаем редактирование. На слобом интернете задержка очень ощутимая,
   * долгое время редактор выглядит пустым.
   */
  const [inited, setInited] = useState(false)

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

    // Инициализация строго один раз!
    loader.init().then((monaco: typeof monacoEditor) => {
      setInited(true)
      editorInstance = monaco.editor.create(editorContainer, {
        value,
        language,
        formatOnPaste: true,
        // formatOnType: true,
        automaticLayout: true,
        insertSpaces: true,
        tabSize: 2,
        wordWrap: 'on',
        minimap: { enabled: false },
      })

      model = editorInstance.getModel()
      onEditorInit && onEditorInit(editorInstance)
    })

    // При закрытии редактора
    return () => {
      onClose && onClose()
      editorInstance?.dispose()
      model?.dispose()
    }
  }, [editorContainer])

  return useMemo(() => {
    return (
      <div ref={editorContainerRef} style={{ minHeight: '100%', height: '360' }}>
        {/* Пока редактор не загрузился, выводим фолбечный редактор (вдруг так и не загрузится) */}
        {!inited && (
          <>
            <div>Редактор загружается...</div>
            {onChange && <HtmlTextarea value={value} onChange={onChange} />}
          </>
        )}
      </div>
    )
  }, [editorContainerRef, inited, value, onChange])
}

export default Editor
