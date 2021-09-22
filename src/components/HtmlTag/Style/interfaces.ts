import {
  RedactorComponentObject,
  RedactorComponentProps,
} from '../../../RedactorComponent/interfaces'

export type StyleProps = {
  // innerHTML: string | null | undefined
  // src: string | undefined

  ref: undefined
  forwardedRef: Function

  object: Readonly<RedactorComponentObject>

  updateObject: RedactorComponentProps['updateObject']

  active: boolean

  /**
   * Закрытие компонента
   */
  closeHandler: () => void
}
