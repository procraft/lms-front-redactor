import { AddWidgetModalProps } from '../../../../../ui/AddWidgetButton/AddWidgetModal/interfaces'
import { RedactorComponentWrapperButtonProps } from '../interfaces'

export type RedactorComponentWrapperAddComponentButtonProps =
  RedactorComponentWrapperButtonProps &
    Omit<AddWidgetModalProps, 'closeHandler'>
