import { RedactorComponentProps } from '../../../..'
import { ContentEditorToolbarProps } from './Toolbar/interfaces'

export type ContentEditorTextToolbarProps = {
  contentEditableContainer: ContentEditorToolbarProps['contentEditableContainer']
  activeSetter: ContentEditorToolbarProps['activeSetter']
  contentWrapper: HTMLDivElement
  object: RedactorComponentProps['object']
  updateObject: RedactorComponentProps['updateObject']
}
