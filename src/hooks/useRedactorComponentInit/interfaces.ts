import { Dispatch, SetStateAction } from 'react'
import { LmsFrontRedactorContextValue } from '../../Context'
import { RedactorComponentProps } from '../../RedactorComponent/interfaces'
import { redactor2ComponentAttributes } from '../../styles'
import { RedactorComponentWrapperProps } from './RedactorComponentWrapper/interfaces'

/**
 * Любой рутовый HTML-элемент, отрисованный редактор-компонентом
 */
export type RedactorHtmlElement = HTMLElement & {
  redactorComponentWrapper?: HTMLElement
}

export type useRedactorComponentInitProps<
  El extends HTMLElement = HTMLElement
> = {
  object: RedactorComponentProps['object']

  updateObject: RedactorComponentProps['updateObject']

  wrapperContainer: RedactorComponentWrapperProps['container']

  parent: RedactorComponentWrapperProps['parent']
  updateParent: RedactorComponentWrapperProps['updateParent']

  element: El | null
  active: boolean
  activeSetter: Dispatch<SetStateAction<boolean>>

  // TODO скорее всего надо написать более хитрый метод, а не просто свойство,
  // чтобы обрабатывать наведение мышью и решать перехватывать его или дальше пробрасывать
  /**
   * Используется ли перехват при наводе мышкой, чтобы подсветить элемент.
   * Сейчас сделано так, что если при наведении зажать Ctrl, то этот признак игнорируется
   * (то есть можно навести на любой элемент)
   */
  hoverable: boolean

  canEditHTML: boolean

  /**
   * Может редактироваться в режиме contentEditable
   */
  // canContentEditable: boolean
}

export type ComponentWrapperProps = {
  // ref: (el: El) => void
  // className: string | undefined
  // active: boolean

  hovered: boolean
  wrapperContent: JSX.Element | undefined

  showHiddenTags: LmsFrontRedactorContextValue['showHiddenTags']

  // "data-redactor--redactor-component": "true" | undefined
} & Omit<
  Record<
    typeof redactor2ComponentAttributes[keyof typeof redactor2ComponentAttributes],
    'true' | undefined
  >,
  | typeof redactor2ComponentAttributes.hovered
  | typeof redactor2ComponentAttributes.tag
>
