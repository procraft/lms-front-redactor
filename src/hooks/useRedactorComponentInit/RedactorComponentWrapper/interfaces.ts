import { RedactorComponentProps } from '../../../RedactorComponent/interfaces'

export type RedactorComponentWrapperProps = {
  /**
   * Контейнер, куда рендерить враппер.
   * Нужно для тех случаев, когда надо отрендерить не в родитель (например, в модалке)
   */
  container: HTMLElement | undefined

  element: HTMLElement

  object: RedactorComponentProps['object']

  /**
   * Обновление объекта
   */
  updateObject: RedactorComponentProps['updateObject']

  /**
   * Выходим из режима редактирования
   */
  closeEditor: () => void
}
