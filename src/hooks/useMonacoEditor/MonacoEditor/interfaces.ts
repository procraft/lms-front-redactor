import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

export type MonacoEditorProps = {
  value: string
  onChange: (value: string) => void
  language: 'javascript' | 'css' | 'html'
  onEditorInit?: (editorInstance: monacoEditor.editor.IStandaloneCodeEditor) => void
  onClose?: () => void
}
