export type MonacoEditorProps = {
  source: string
  language: 'javascript' | 'css' | 'html'

  /**
   * Коллбэк на изменение контента
   */
  onChange: (content: string) => void
}
