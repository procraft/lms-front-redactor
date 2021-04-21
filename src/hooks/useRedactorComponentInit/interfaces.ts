import { RedactorComponentProps } from '../../RedactorComponent/interfaces'
import { RedactorComponentWrapperProps } from './RedactorComponentWrapper/interfaces'

/**
 * Любой рутовый HTML-элемент, отрисованный редактор-компонентом
 */
export type RedactorHtmlElement = HTMLElement & {
  redactorComponentWrapper?: HTMLElement
}

export type useRedactorComponentInitProps = {
  object: RedactorComponentProps['object']

  updateObject: RedactorComponentProps['updateObject']

  wrapperContainer: RedactorComponentWrapperProps['container']

  parent: RedactorComponentWrapperProps['parent']
  updateParent: RedactorComponentWrapperProps['updateParent']
}
