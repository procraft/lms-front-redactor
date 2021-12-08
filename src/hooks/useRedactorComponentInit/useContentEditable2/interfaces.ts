import { ContentEditorTextToolbarProps } from '../../../components/ContentEditor/ContentProxy/ContentEditorTextToolbar/interfaces'
import { useRedactorComponentInitProps } from '../interfaces'

export type useContentEditable2Props = {
  element: useRedactorComponentInitProps['element']
  canContentEditable: boolean
  active: useRedactorComponentInitProps['active']
  activeSetter: ContentEditorTextToolbarProps['activeSetter']
}
