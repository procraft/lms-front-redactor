import { RedactorComponentProps } from '../../../RedactorComponent/interfaces'
import { RedactorHtmlElement } from '../interfaces'

export type RedactorComponentWrapperProps = {
  /**
   * Контейнер, куда рендерить враппер.
   * Нужно для тех случаев, когда надо отрендерить не в родитель (например, в модалке)
   */
  container: HTMLElement | undefined

  /**
   * HTML-элемент, для которого прорисовывается враппер
   */
  element: RedactorHtmlElement

  /**
   * Данные Редактор-компонента
   */
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
