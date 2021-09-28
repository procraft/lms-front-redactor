import { RedactorComponentProps } from '../../..'

export type AddWidgetModalProps = {
  object: RedactorComponentProps['object']
  updateObject: RedactorComponentProps['updateObject']
  closeHandler: () => void
}
