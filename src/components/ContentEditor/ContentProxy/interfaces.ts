import { RedactorComponentProps } from '../../../RedactorComponent/interfaces'
import { ContentEditorTextToolbarProps } from './ContentEditorTextToolbar/interfaces'
import { useContentEditableProps } from './hooks/useContentEditable/interfaces'

export type EditableContentProxyProps = Omit<
  useContentEditableProps,
  'element' | 'updateObject'
> & {
  updateObject: RedactorComponentProps['updateObject']
  activeSetter: ContentEditorTextToolbarProps['activeSetter']
  inEditMode: boolean
}
