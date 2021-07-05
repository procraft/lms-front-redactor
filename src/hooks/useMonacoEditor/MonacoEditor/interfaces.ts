import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

export type MonacoEditorProps = {
  source: string
  language: 'javascript' | 'css' | 'html'

  /**
   * Коллбэк на изменение контента
   */
  onChange?: (content: string) => void

  /**
   * Коллбэк на инициализацию редактора
   */
  onEditorInit?: (
    editorInstance: monacoEditor.editor.IStandaloneCodeEditor
  ) => void
}
