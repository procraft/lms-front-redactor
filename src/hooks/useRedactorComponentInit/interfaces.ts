import { RedactorComponentProps } from '../../RedactorComponent/interfaces'
import { RedactorComponentWrapperProps } from './RedactorComponentWrapper/interfaces'

export type useRedactorComponentInitProps = {
  object: RedactorComponentProps['object']

  updateObject: RedactorComponentProps['updateObject']

  wrapperContainer: RedactorComponentWrapperProps['container']
}
