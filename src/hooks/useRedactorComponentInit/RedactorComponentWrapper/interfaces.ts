import { RedactorComponentProps } from '../../../RedactorComponent/interfaces'
import { RedactorHtmlElement } from '../interfaces'
import { RedactorComponentWrapperSaveButtonProps } from './buttons/Save/interfaces'

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
  closeEditor: (event: MouseEvent) => void

  /**
   * Родительский JSON-объект
   */
  parent: RedactorComponentProps['object'] | undefined

  /**
   * Редактирование родительского объекта
   */
  updateParent: RedactorComponentProps['updateObject'] | undefined

  active: boolean
  hovered: boolean
  wrapperTitle?: string

  /**
   * Можно редактировать HTML компонента
   */
  canEditHTML: boolean

  isDirty: RedactorComponentWrapperSaveButtonProps['isDirty']
  updateTemplate: RedactorComponentWrapperSaveButtonProps['updateTemplate']
}
