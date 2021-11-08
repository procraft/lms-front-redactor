import { RedactorComponentObject, RedactorComponentProps } from '../../../..'

export type AddWidgetButtonButtonProps = {
  object: RedactorComponentProps['object']
  // updateObject: RedactorComponentProps['updateObject']
  addComponent: (component: RedactorComponentObject) => void
  closeHandler: () => void
}
