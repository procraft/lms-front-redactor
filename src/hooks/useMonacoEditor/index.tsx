import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import * as monacoEditor from 'monaco-editor'

const MonacoEditor = dynamic(import('./MonacoEditor'), { ssr: false })

type Props = {
  active: boolean
  source: string
  onChange?: (source: string) => void
  language: 'javascript' | 'css' | 'html'
}

export const useMonacoEditor = (props: Props) => {
  const {active, source, onChange, ...otherProps} = props
  const [editor, setEditor] = useState<monacoEditor.editor.IStandaloneCodeEditor | null>(null)
  const [value, setValue] = useState<string>(source)
  const valueRef = useRef(source)

  const handleChange = useCallback((v: string) => {
    const model = editor?.getModel()
    if (model) {
      return model.setValue(v)
    }
    valueRef.current = v
    setValue(v)
  }, [editor, setValue])

  const getValue = useCallback(() => {
    const model = editor?.getModel()
    if (model) {
      return model.getValue()
    }
    return value
  }, [editor, value])

  useEffect(() => {
    handleChange(source)
  }, [source, handleChange])

  const onEditorInit = useCallback(
    (editorInstance: monacoEditor.editor.IStandaloneCodeEditor) => {
      setEditor(editorInstance)
      const model = editorInstance.getModel()
      if (model) {
        model.setValue(valueRef.current)
      }
    }, [setEditor]
  )

  const onClose = useCallback(() => {
    if (onChange && value !== source) {
      onChange(value)
    }
  }, [value, source, onChange])

  const resetValue = useCallback(() => {
    handleChange(source)
  }, [handleChange, source])

  const editorJsx = useMemo(() => {
    if (!active) {
      return null
    }
    return <MonacoEditor {...otherProps} onEditorInit={onEditorInit} value={getValue()} onChange={handleChange} onClose={onClose} />
  }, [active, otherProps, onEditorInit, getValue, handleChange, onClose])

  return {
    editor,
    editorJsx,
    resetValue,
    setValue,
    getValue,
  }
}
