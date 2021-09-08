import { Dispatch, SetStateAction } from 'react'
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
}

export type ComponentWrapperProps = {
  // ref: (el: El) => void
  // className: string | undefined
  // active: boolean
  wrapperContent: JSX.Element | undefined
  // "data-redactor--redactor-component": "true" | undefined
} & Omit<
  Record<
    typeof redactor2ComponentAttributes[keyof typeof redactor2ComponentAttributes],
    'true' | undefined
  >,
  | typeof redactor2ComponentAttributes.hovered
  | typeof redactor2ComponentAttributes.tag
>
