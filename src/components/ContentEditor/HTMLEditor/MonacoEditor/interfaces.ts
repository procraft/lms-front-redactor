import { RedactorComponentProps } from '../../../../RedactorComponent/interfaces'

export type ContentEditorHTMLEditorMonacoEditorProps = {
  active: boolean

  /**
   * Корневой HTML-элемент редактора, в который рендерится код.
   * Из него мы будем вытаскивать измененый код.
   */
  element: HTMLElement

  object: RedactorComponentProps['object']
  updateObject: RedactorComponentProps['updateObject']

  // TODO пока сделал необязательными эти параметры, но в дальнейшем надо будет сделать обязательными
  parent?: RedactorComponentProps['parent']
  updateParent?: RedactorComponentProps['updateParent']
}
