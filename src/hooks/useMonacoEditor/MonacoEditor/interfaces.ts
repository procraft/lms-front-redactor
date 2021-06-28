export type MonacoEditorProps = {
  contents: string
  language: 'javascript' | 'css' | 'html'

  /**
   * Коллбэк на изменение контента
   */
  onChange: (content: string) => void
}
