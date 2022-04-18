import { FetchResult } from '@apollo/client'
import { UpdateLandingTemplateMutation } from '../../../../../gql/updateLandingTemplate'
import { AddWidgetModalProps } from '../../../../../ui/AddWidgetButton/AddWidgetModal/interfaces'
import { RedactorComponentWrapperProps } from '../../interfaces'
import { RedactorComponentWrapperButtonProps } from '../interfaces'

export type RedactorComponentWrapperSaveButtonProps =
  RedactorComponentWrapperButtonProps &
    Omit<AddWidgetModalProps, 'closeHandler'> & {
      parent: RedactorComponentWrapperProps['parent']
      updateParent: RedactorComponentWrapperProps['updateParent']
      isDirty: boolean | undefined
      updateTemplate:
        | (() =>
            | Promise<
                FetchResult<
                  UpdateLandingTemplateMutation,
                  Record<string, any>,
                  Record<string, any>
                >
              >
            | undefined)
        | undefined
    }
