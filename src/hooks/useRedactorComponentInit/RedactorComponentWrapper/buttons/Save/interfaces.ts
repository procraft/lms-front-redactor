import { AddWidgetModalProps } from '../../../../../ui/AddWidgetButton/AddWidgetModal/interfaces'
import { RedactorComponentWrapperProps } from '../../interfaces'
import { RedactorComponentWrapperButtonProps } from '../interfaces'

export type RedactorComponentWrapperSaveButtonProps =
  RedactorComponentWrapperButtonProps &
    Omit<AddWidgetModalProps, 'closeHandler'> & {
      parent: RedactorComponentWrapperProps['parent']
      updateParent: RedactorComponentWrapperProps['updateParent']
    }
