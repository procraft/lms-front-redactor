import {
  RedactorComponentObject,
  RedactorComponentProps,
} from '../../../RedactorComponent/interfaces'

export type VideoWrapperProps = {
  ref: undefined
  forwardedRef: Function

  object: Readonly<RedactorComponentObject>

  updateObject: RedactorComponentProps['updateObject']

  active: boolean

  /**
   * Закрытие компонента
   */
  closeHandler: () => void

  element: HTMLElement | null
}
