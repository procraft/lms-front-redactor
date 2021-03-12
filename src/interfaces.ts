
import { RedactorComponentProps } from './RedactorComponent/interfaces'

export type LmsFrontRedactorProps = {
  inEditMode: boolean
  // object: EditorComponentProps['object'] | undefined
  object: RedactorComponentProps['object'] | undefined
  updateObject: RedactorComponentProps['updateObject']
  // onChangeState: Function
}
